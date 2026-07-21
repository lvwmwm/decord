// Module ID: 434
// Function ID: 5990
// Name: getState
// Dependencies: []

// Module 434 (getState)
function getState() {
  if (null != obj) {
    return obj;
  } else {
    let tmp13 = arg2(arg6[0]);
    const prototype2 = tmp13.prototype;
    tmp13 = new tmp13();
    const arg1 = tmp13;
    const _default = arg1(arg6[1]).default;
    if (null == _default) {
      let obj = { "Bool(false)": "o", "Bool(false)": "o", eventEmitter: tmp13 };
    } else {
      obj = { NativeAppearance: _default, appearance: null, eventEmitter: tmp13 };
      const arg2 = obj;
      let tmp3 = arg2(arg6[2]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(_default);
      tmp3.addListener("appearanceChanged", (colorScheme) => {
        const obj = {};
        colorScheme = colorScheme.colorScheme;
        callback(colorScheme);
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
  arg2(arg6[3])(tmp2, "Unrecognized color scheme. Did you mean 'dark', 'light' or null?");
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
