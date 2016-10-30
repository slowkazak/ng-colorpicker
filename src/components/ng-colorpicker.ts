/**
 * ng-colorpicker - Simple and powerful color picker component for Angular2 projects.
 * For more info see README.MD
 */
import {Component, Output, EventEmitter, AfterViewInit, ViewChild} from "@angular/core";
import {settings} from "../settings/settings";

@Component({
  selector: 'app-colorpicker',
  templateUrl: 'ng-colorpicker.html',
  styleUrls: ['ng-colorpicker.css']
})
export class NgColorpicker implements AfterViewInit {
  /**
   * @param {any} colorpicker - canvas object for creating color palette.
   * @param {EventEmitter<any>} color  - output param which takes color data outside the ng-colorpicker.
   * @param {any} _cursor_pos - param for drawing picked area of canvas under mouse cursor. Stores coords of active area
   */
  @ViewChild("colorpicker") colorpicker: any;
  @Output()color: EventEmitter<any> = new EventEmitter();
  private _cursor_pos: any;
  private col:any;

  /**
   * _GetImage - gets image with color palette
   * @param imgsrc - path to imagefile, default - from settings
   * @returns {Promise<T>|Promise<U>} - return promise with image
   * @private
   */
  private _GetImage(imgsrc: string = settings.canvas_image_src) {
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

  /**
   * _InitPalette - function for draw palette in canvas
   * @param element - canvas element
   * @param image - Image() object for ex. <img src="foo.jpg">
   * @private
   */
  private _InitPalette(element: HTMLCanvasElement, image: any) {
    try {
      let context = element.getContext("2d");
      context.drawImage(image, 0, 0);
    }
    catch (e) {
      console.error(e);
    }
  }

  /**
   * _PickColor - return picked color in hex and dec view for every color channel. See readme.md
   * @param ev - click event
   * @returns {any}
   * @private
   */
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
    this.col = color
return color;
  }

  /**
   * _ToHex - function which returns hex val of dec color resolution or 00
   * @param value - decimal color resolution
   * @returns {string|number}
   * @private
   */
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

  /**
   * @_constructor - if all view elements inited - draw color palette in canwas
   */
  ngAfterViewInit() {
    this._GetImage().then((res: any)=> {
      this._InitPalette(this.colorpicker.nativeElement, res);
    }).catch(err=>console.error(err));
  }
}
