// Module ID: 96
// Function ID: 1550
// Name: PixelRatio
// Dependencies: [6, 7, 97]

// Module 96 (PixelRatio)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export default (() => {
  class PixelRatio {
    constructor() {
      tmp = outer1_2(this, PixelRatio);
      return;
    }
  }
  let obj = {
    key: "get",
    value: function get() {
      return PixelRatio(outer1_1[2]).default.get("window").scale;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getFontScale",
    value: function getFontScale() {
      let fontScale = PixelRatio(outer1_1[2]).default.get("window").fontScale;
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
})();
