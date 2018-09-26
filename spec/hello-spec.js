function createIFrame() {
  $('<iframe>', {
    src: 'about:blank',
    id: 'myFrame',
    frameborder: 1,
    scrolling: 'no'
  }).appendTo('body');
  return $('#myFrame')[0].contentWindow;
}

function removeMyFrame() {
  $('#myFrame').remove();
}

describe('JQuery', function () {
  let frameWindow;
  beforeEach(() => frameWindow = createIFrame());
  afterEach(() => removeMyFrame());

  it('should run in new isolated window', function () {
    expect(frameWindow.myData).toEqual(undefined);
    frameWindow.myData = 123;
    expect(frameWindow.myData).toEqual(123);
  });

  it('should run in new isolated window, too', function () {
    expect(frameWindow.myData).toEqual(undefined);
    frameWindow.myData = 456;
    expect(frameWindow.myData).toEqual(456);
  });

});
