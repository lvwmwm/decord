// Module ID: 97
// Function ID: 1558
// Name: Dimensions
// Dependencies: [6, 7, 98, 44, 101, 104]

// Module 97 (Dimensions)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import importDefaultResult from "EventEmitter";
import importDefaultResult1 from "_isNativeReflectConstruct";

importDefaultResult = new importDefaultResult();
let c6 = false;
let obj = (() => {
  class Dimensions {
    constructor() {
      tmp = outer1_3(this, Dimensions);
      return;
    }
  }
  let obj = {
    key: "get",
    value: function get(arg0) {
      Dimensions(outer1_1[3])(outer1_2[arg0], `No dimension set for key ${arg0}`);
      return outer1_2[arg0];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "set",
    value: function set(screenPhysicalPixels) {
      let _window;
      let screen;
      let windowPhysicalPixels;
      ({ screen, window: _window, windowPhysicalPixels } = screenPhysicalPixels);
      if (windowPhysicalPixels) {
        let obj = { width: windowPhysicalPixels.width / windowPhysicalPixels.scale, height: windowPhysicalPixels.height / windowPhysicalPixels.scale };
        ({ scale: obj.scale, fontScale: obj.fontScale } = windowPhysicalPixels);
        _window = obj;
      }
      screenPhysicalPixels = screenPhysicalPixels.screenPhysicalPixels;
      if (screenPhysicalPixels) {
        obj = { width: screenPhysicalPixels.width / screenPhysicalPixels.scale, height: screenPhysicalPixels.height / screenPhysicalPixels.scale };
        ({ scale: obj2.scale, fontScale: obj2.fontScale } = screenPhysicalPixels);
        screen = obj;
      } else if (null == screen) {
        screen = _window;
      }
      obj = { window: _window, screen };
      const outer1_2 = obj;
      if (outer1_6) {
        outer1_5.emit("change", outer1_2);
      } else {
        outer1_6 = true;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      Dimensions(outer1_1[3])("change" === arg0, "Trying to subscribe to unknown event: \"%s\"", arg0);
      return outer1_5.addListener(arg0, arg1);
    }
  };
  items[2] = obj;
  return callback(Dimensions, null, items);
})();
require("_isNativeReflectConstruct").addListener("didUpdateDimensions", (arg0) => {
  const result = obj.set(arg0);
});
let result = obj.set(require("getConstants").getConstants().Dimensions);

export default obj;
