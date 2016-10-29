import { NgColorpickerPage } from './app.po';

describe('ng-colorpicker App', function() {
  let page: NgColorpickerPage;

  beforeEach(() => {
    page = new NgColorpickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
