// Module ID: 97
// Function ID: 1558
// Name: Dimensions
// Dependencies: []

// Module 97 (Dimensions)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult();
let closure_6 = false;
const obj = () => {
  class Dimensions {
    constructor() {
      tmp = closure_3(this, Dimensions);
      return;
    }
  }
  const importDefault = Dimensions;
  let obj = {
    key: "get",
    value: function get(arg0) {
      Dimensions(closure_1[3])(closure_2[arg0], `No dimension set for key ${arg0}`);
      return closure_2[arg0];
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
      if (closure_6) {
        closure_5.emit("change", obj);
      } else {
        closure_6 = true;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      Dimensions(closure_1[3])("change" === arg0, "Trying to subscribe to unknown event: \"%s\"", arg0);
      return closure_5.addListener(arg0, arg1);
    }
  };
  items[2] = obj;
  return callback(Dimensions, null, items);
}();
importDefault(dependencyMap[4]).addListener("didUpdateDimensions", (arg0) => {
  const result = obj.set(arg0);
});
const importDefaultResult1 = importDefault(dependencyMap[4]);
const result = obj.set(importDefault(dependencyMap[5]).getConstants().Dimensions);

export default obj;
