// Module ID: 434
// Function ID: 5990
// Name: getState
// Dependencies: [98, 435, 209, 44]

// Module 434 (getState)
let require = arg1;
const module = arg2;
const dependencyMap = arg6;
function getState() {
  if (null != obj) {
    return obj;
  } else {
    let tmp13 = obj(98);
    const prototype2 = tmp13.prototype;
    tmp13 = new tmp13();
    const require = tmp13;
    const _default = require(435) /* Appearance */.default;
    if (null == _default) {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: tmp13 };
    } else {
      obj = { NativeAppearance: _default, appearance: null, eventEmitter: tmp13 };
      let tmp3 = obj(209);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(_default);
      tmp3.addListener("appearanceChanged", (colorScheme) => {
        const obj = {};
        colorScheme = colorScheme.colorScheme;
        outer1_5(colorScheme);
        obj.colorScheme = colorScheme;
        obj.appearance = obj;
        tmp13.emit("change", obj.appearance);
      });
    }
    return obj;
  }
}
function toColorScheme(colorScheme) {
  let tmp2 = "dark" === colorScheme;
  if (!tmp2) {
    tmp2 = "light" === colorScheme;
  }
  if (!tmp2) {
    tmp2 = null == colorScheme;
  }
  module(44)(tmp2, "Unrecognized color scheme. Did you mean 'dark', 'light' or null?");
  return colorScheme;
}
arg5.getColorScheme = function getColorScheme() {
  const tmp = getState();
  const NativeAppearance = tmp.NativeAppearance;
  let colorScheme1 = null;
  if (null != NativeAppearance) {
    if (null == tmp.appearance) {
      const obj = {};
      const colorScheme = NativeAppearance.getColorScheme();
      toColorScheme(colorScheme);
      obj.colorScheme = colorScheme;
      tmp.appearance = obj;
    }
    colorScheme1 = tmp.appearance.colorScheme;
  }
  return colorScheme1;
};
arg5.setColorScheme = function setColorScheme(arg0) {
  const tmp = getState();
  const NativeAppearance = tmp.NativeAppearance;
  if (null != NativeAppearance) {
    let str = "unspecified";
    if (null != arg0) {
      str = arg0;
    }
    NativeAppearance.setColorScheme(str);
    const obj = {};
    const colorScheme = NativeAppearance.getColorScheme();
    toColorScheme(colorScheme);
    obj.colorScheme = colorScheme;
    tmp.appearance = obj;
  }
};
arg5.addChangeListener = function addChangeListener(handleStoreChange) {
  const eventEmitter = getState().eventEmitter;
  return eventEmitter.addListener("change", handleStoreChange);
};
