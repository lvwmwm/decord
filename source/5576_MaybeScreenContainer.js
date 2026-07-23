// Module ID: 5576
// Function ID: 47369
// Name: MaybeScreenContainer
// Dependencies: [29, 31, 27, 33, 4478]
// Exports: MaybeScreen, MaybeScreenContainer

// Module 5576 (MaybeScreenContainer)
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import enableScreens from "enableScreens";

let closure_0 = ["enabled"];
let closure_1 = ["enabled", "active"];

export const MaybeScreenContainer = function MaybeScreenContainer(enabled) {
  const tmp = callback(enabled, closure_0);
  if (null != enableScreens) {
    const _Object2 = Object;
    const obj = { enabled: enabled.enabled };
    let tmp5 = <enableScreens.ScreenContainer {...Object.assign(obj, tmp)} />;
  } else {
    const _Object = Object;
    tmp5 = <View {...Object.assign({}, tmp)} />;
  }
  return tmp5;
};
export const MaybeScreen = function MaybeScreen(arg0) {
  let active;
  let enabled;
  ({ enabled, active } = arg0);
  const tmp = callback(arg0, closure_1);
  if (null != enableScreens) {
    const _Object2 = Object;
    const obj = { enabled, activityState: active };
    let tmp5 = <enableScreens.Screen {...Object.assign(obj, tmp)} />;
  } else {
    const _Object = Object;
    tmp5 = <View {...Object.assign({}, tmp)} />;
  }
  return tmp5;
};
