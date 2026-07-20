// Module ID: 5572
// Function ID: 47288
// Name: MaybeScreenContainer
// Dependencies: []
// Exports: MaybeScreen, MaybeScreenContainer

// Module 5572 (MaybeScreenContainer)
let closure_0 = [false];
let closure_1 = [null, null];
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_2 = arg1(dependencyMap[4]);

export const MaybeScreenContainer = function MaybeScreenContainer(enabled) {
  const tmp = callback(enabled, closure_0);
  if (null != closure_2) {
    const _Object2 = Object;
    const obj = { enabled: enabled.enabled };
    let tmp5 = <closure_2.ScreenContainer {...Object.assign(obj, tmp)} />;
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
  if (null != closure_2) {
    const _Object2 = Object;
    const obj = { enabled, activityState: active };
    let tmp5 = <closure_2.Screen {...Object.assign(obj, tmp)} />;
  } else {
    const _Object = Object;
    tmp5 = <View {...Object.assign({}, tmp)} />;
  }
  return tmp5;
};
