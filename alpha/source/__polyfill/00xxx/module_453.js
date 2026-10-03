// Module ID: 453
// Function ID: 454
// Dependencies: [89, 454, 209]
// Exports: addChangeListener, getColorScheme, setColorScheme

// Module 453
import _modDef89 from "module_89" /* 89 */;
import Appearance from "Appearance" /* 454 */;

let appearance, obj;


export const getColorScheme = function getColorScheme() {
  if (null == obj) {
    const self3 = this;
    const self4 = this;
    const tmp7 = new _modDef89();
    let closure_0 = tmp7;
    const _default = Appearance.default;
    const tmp5 = importDefault;
    if (null == _default) {
      const obj3 = { NativeAppearance: null, appearance: null, eventEmitter: tmp7 };
      obj = obj3;
    } else {
      obj = { NativeAppearance: _default, appearance: null, eventEmitter: tmp7 };
      const self = this;
      const self2 = this;
      const obj2 = new tmp5(209)(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme, appearance };
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const NativeAppearance = obj.NativeAppearance;
  let colorScheme = null;
  if (null != NativeAppearance) {
    if (null == obj.appearance) {
      obj.appearance = { colorScheme: NativeAppearance.getColorScheme() };
      const obj4 = { colorScheme: NativeAppearance.getColorScheme() };
    }
    colorScheme = obj.appearance.colorScheme;
  }
  return colorScheme;
};
export const setColorScheme = function setColorScheme(arg0) {
  if (null == obj) {
    const self3 = this;
    const self4 = this;
    const tmp10 = new _modDef89();
    let closure_0 = tmp10;
    const _default = Appearance.default;
    const tmp8 = importDefault;
    if (null == _default) {
      const obj3 = { NativeAppearance: null, appearance: null, eventEmitter: tmp10 };
      obj = obj3;
    } else {
      obj = { NativeAppearance: _default, appearance: null, eventEmitter: tmp10 };
      const self = this;
      const self2 = this;
      const obj2 = new tmp8(209)(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme, appearance };
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const NativeAppearance = obj.NativeAppearance;
  if (null != NativeAppearance) {
    NativeAppearance.setColorScheme(arg0);
    let tmp6 = arg0;
    if ("unspecified" === arg0) {
      let colorScheme = NativeAppearance.getColorScheme();
      if (colorScheme == null) {
        colorScheme = arg0;
      }
      tmp6 = colorScheme;
    }
    const obj4 = { colorScheme: tmp6 };
    obj.appearance = obj4;
  }
};
export const addChangeListener = function addChangeListener(onChange) {
  if (null == obj) {
    const self3 = this;
    const self4 = this;
    const tmp6 = new _modDef89();
    let closure_0 = tmp6;
    const _default = Appearance.default;
    const tmp4 = importDefault;
    if (null == _default) {
      const obj3 = { NativeAppearance: null, appearance: null, eventEmitter: tmp6 };
      obj = obj3;
    } else {
      obj = { NativeAppearance: _default, appearance: null, eventEmitter: tmp6 };
      const self = this;
      const self2 = this;
      const obj2 = new tmp4(209)(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme, appearance };
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const eventEmitter = obj.eventEmitter;
  return eventEmitter.addListener("change", onChange);
};
