// Module ID: 96
// Function ID: 1550
// Name: PixelRatio
// Dependencies: []

// Module 96 (PixelRatio)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);

export default () => {
  class PixelRatio {
    constructor() {
      tmp = closure_2(this, PixelRatio);
      return;
    }
  }
  const arg1 = PixelRatio;
  let obj = {
    key: "get",
    value: function get() {
      return PixelRatio(closure_1[2]).default.get("window").scale;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getFontScale",
    value: function getFontScale() {
      let fontScale = PixelRatio(closure_1[2]).default.get("window").fontScale;
      if (!fontScale) {
        fontScale = PixelRatio.get();
      }
      return fontScale;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPixelSizeForLayoutSize",
    value: function getPixelSizeForLayoutSize(HAPPENING_NOW_CONTENT_HEIGHT) {
      return Math.round(HAPPENING_NOW_CONTENT_HEIGHT * PixelRatio.get());
    }
  };
  items[2] = obj;
  items[3] = {
    key: "roundToNearestPixel",
    value: function roundToNearestPixel(arg0) {
      const value = PixelRatio.get();
      return Math.round(arg0 * value) / value;
    }
  };
  items[4] = {
    key: "startDetecting",
    value: function startDetecting() {

    }
  };
  return callback(PixelRatio, null, items);
}();
