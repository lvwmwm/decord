// Module ID: 9831
// Function ID: 76255
// Name: measureView
// Dependencies: [2]
// Exports: measureViewRef, measureViewRefInView, measureViewRefInWindow

// Module 9831 (measureView)
function measureView(current) {
  let closure_0 = current;
  return new Promise((arg0) => {
    const current = arg0;
    current.measure((arg0, arg1, width, height, pageX, pageY) => {
      callback({ x: arg0, y: arg1, width, height, pageX, pageY });
    });
  });
}
function measureViewInWindow(current) {
  let closure_0 = current;
  return new Promise((arg0) => {
    const current = arg0;
    current.measureInWindow((arg0, arg1, width, height) => {
      callback({ x: arg0, y: arg1, width, height });
    });
  });
}
function measureViewInView(current, current) {
  let closure_0 = current;
  let closure_1 = current;
  return new Promise((arg0) => {
    const current = arg0;
    current.measureLayout(closure_1, (arg0, arg1, width, height) => {
      callback({ x: arg0, y: arg1, width, height });
    }, () => {
      callback(undefined);
    });
  });
}
const result = require("set").fileFinishedImporting("modules/view_measure/ViewMeasureUtils.native.tsx");

export { measureView };
export const measureViewRef = function measureViewRef(current) {
  current = current.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    resolved = measureView(current);
  }
  return resolved;
};
export { measureViewInWindow };
export const measureViewRefInWindow = function measureViewRefInWindow(ref) {
  const current = ref.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    resolved = measureViewInWindow(current);
  }
  return resolved;
};
export { measureViewInView };
export const measureViewRefInView = function measureViewRefInView(ref, current) {
  current = ref.current;
  if (null == current) {
    let resolved = Promise.resolve(undefined);
  } else {
    resolved = measureViewInView(current, current);
  }
  return resolved;
};
