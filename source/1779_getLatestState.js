// Module ID: 1779
// Function ID: 19785
// Name: getLatestState
// Dependencies: []
// Exports: useKeyboardState

// Module 1779 (getLatestState)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useState: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = [28977920, 17415936];
function getLatestState() {
  const KeyboardController = arg1(dependencyMap[2]).KeyboardController;
  const obj = {};
  const KeyboardController2 = arg1(dependencyMap[2]).KeyboardController;
  obj.isVisible = KeyboardController2.isVisible();
  return Object.assign({}, KeyboardController.state(), obj);
}
function defaultSelector(arg0) {
  return arg0;
}

export const useKeyboardState = function useKeyboardState(arg0) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const arg1 = first;
    const tmp4 = callback(callback3(() => first(callback3())), 2);
    let closure_1 = tmp4[1];
    callback2(() => {
      const callback = closure_5.map((arg0) => {
        const KeyboardEvents = lib(closure_1[3]).KeyboardEvents;
        return KeyboardEvents.addListener(arg0, () => callback2(callback(callback3())));
      });
      callback2(callback(callback3()));
      return () => {
        const item = lib.forEach((remove) => remove.remove());
      };
    }, []);
    return tmp4[0];
  }
  first = defaultSelector;
};
