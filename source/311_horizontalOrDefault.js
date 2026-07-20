// Module ID: 311
// Function ID: 4773
// Name: horizontalOrDefault
// Dependencies: []
// Exports: horizontalOrDefault, initialNumToRenderOrDefault, maxToRenderPerBatchOrDefault, onEndReachedThresholdOrDefault, onStartReachedThresholdOrDefault, windowSizeOrDefault

// Module 311 (horizontalOrDefault)
importAll(dependencyMap[0]);

export const horizontalOrDefault = function horizontalOrDefault(horizontal) {
  return null != horizontal && horizontal;
};
export const initialNumToRenderOrDefault = function initialNumToRenderOrDefault(initialNumToRender) {
  let num = 10;
  if (null != initialNumToRender) {
    num = initialNumToRender;
  }
  return num;
};
export const maxToRenderPerBatchOrDefault = function maxToRenderPerBatchOrDefault(maxToRenderPerBatch) {
  let num = 10;
  if (null != maxToRenderPerBatch) {
    num = maxToRenderPerBatch;
  }
  return num;
};
export const onStartReachedThresholdOrDefault = function onStartReachedThresholdOrDefault(onStartReachedThreshold) {
  let num = 2;
  if (null != onStartReachedThreshold) {
    num = onStartReachedThreshold;
  }
  return num;
};
export const onEndReachedThresholdOrDefault = function onEndReachedThresholdOrDefault(onEndReachedThreshold) {
  let num = 2;
  if (null != onEndReachedThreshold) {
    num = onEndReachedThreshold;
  }
  return num;
};
export const windowSizeOrDefault = function windowSizeOrDefault(windowSize) {
  let num = 21;
  if (null != windowSize) {
    num = windowSize;
  }
  return num;
};
