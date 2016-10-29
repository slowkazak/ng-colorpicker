import {Component, OnInit,Output, EventEmitter, AfterViewInit, ViewChild} from "@angular/core";
import {settings} from "../settings/settings";

@Component({
  selector: 'app-colorpicker',
  templateUrl: 'ng-colorpicker.html',
  styleUrls: ['ng-colorpicker.css']
})
export class NgColorpicker implements AfterViewInit {
  @ViewChild("colorpicker") colorpicker: any;
  @Output()color: EventEmitter<any> = new EventEmitter();
  private _cursor_pos: any;

  private _GetImage(imgsrc: string) {
    return new Promise(
      (resolve, reject) => {
        try {
          let image = new Image();
          image.src = imgsrc;
          image.onload = ()=> {
            resolve(image)
          }
        }
        catch (err) {
          console.error(err);
          reject(err)
        }
      }
    )
      .catch(
        err=>console.error(err)
      );
  }

  private _InitPalette(element: HTMLCanvasElement, image: any) {
    try {
      let context = element.getContext("2d");
      context.drawImage(image, 0, 0);
    }
    catch (e) {
      console.error(e);
    }
  }

  private _PickColor(ev) {
    let color:any = null;
    try {
      let context: any = this.colorpicker.nativeElement.getContext("2d");
      let coords = {x: ev.offsetX, y: ev.offsetY};
      this._cursor_pos = {x: coords.x + 5 + "px", y: coords.y + 5 + "px"};
      let imagedata = context.getImageData(coords.x, coords.y, 1, 1);
      color = {
        hexcolor: {
          Rhex: this._ToHex(imagedata.data[0]),
          Ghex: this._ToHex(imagedata.data[1]),
          Bhex: this._ToHex(imagedata.data[2])
        },
        rgbcolor: {
          R: imagedata.data[0],
          G: imagedata.data[1],
          B: imagedata.data[2]
        }
      };
    }
    catch (e) {
      console.error(e)
    }
return color;
  }

  private _ToHex(value: number) {
    let hex_num: string | number;
    if (!isNaN(value)) {
      hex_num = value.toString(16);
    }
    else {
      hex_num = "00";
    }
    return hex_num;
  }

  ngAfterViewInit() {
    this._GetImage(settings.canvas_image_src).then((res: any)=> {
      this._InitPalette(this.colorpicker.nativeElement, res);
    }).catch(err=>console.error(err));
  }
}
