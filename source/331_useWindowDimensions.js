// Module ID: 331
// Function ID: 4920
// Name: useWindowDimensions
// Dependencies: []
// Exports: default

// Module 331 (useWindowDimensions)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useState: closure_4 } = arg1(dependencyMap[1]));

export default function useWindowDimensions() {
  const tmp = callback(callback3(() => first(closure_1[2]).get("window")), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_1 = tmp[1];
  const items = [first];
  callback2(() => {
    function handleChange(window) {
      const _window = window.window;
      let tmp = closure_0.width === _window.width;
      if (tmp) {
        tmp = closure_0.height === _window.height;
      }
      if (tmp) {
        tmp = closure_0.scale === _window.scale;
      }
      if (tmp) {
        tmp = closure_0.fontScale === _window.fontScale;
      }
      if (!tmp) {
        callback(_window);
      }
    }
    let obj = callback(closure_1[2]);
    const callback = obj.addEventListener("change", handleChange);
    obj = { window: callback(closure_1[2]).get("window") };
    handleChange(obj);
    return () => {
      closure_0.remove();
    };
  }, items);
  return first;
};
