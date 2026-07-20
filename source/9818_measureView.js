// Module ID: 9818
// Function ID: 76174
// Name: measureView
// Dependencies: []
// Exports: measureViewRef, measureViewRefInView, measureViewRefInWindow

// Module 9818 (measureView)
function measureView(current) {
  const measureView = current;
  return new Promise((arg0) => {
    arg0.measure((arg0, arg1, width, height, pageX, pageY) => {
      arg0({ x: arg0, y: arg1, width, height, pageX, pageY });
    });
  });
}
function measureViewInWindow(current) {
  const measureView = current;
  return new Promise((arg0) => {
    arg0.measureInWindow((arg0, arg1, width, height) => {
      arg0({ x: arg0, y: arg1, width, height });
    });
  });
}
function measureViewInView(current, current) {
  const measureView = current;
  const measureViewInWindow = current;
  return new Promise((arg0) => {
    arg0.measureLayout(arg1, (arg0, arg1, width, height) => {
      arg0({ x: arg0, y: arg1, width, height });
    }, () => {
      arg0(undefined);
    });
  });
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/view_measure/ViewMeasureUtils.native.tsx");

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
