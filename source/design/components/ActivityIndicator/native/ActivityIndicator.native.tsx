// Module ID: 5584
// Function ID: 47377
// Name: ActivityIndicator
// Dependencies: []
// Exports: ActivityIndicator

// Module 5584 (ActivityIndicator)
const ActivityIndicator = require(dependencyMap[0]).ActivityIndicator;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

export const ActivityIndicator = function ActivityIndicator(size) {
  let str = size.size;
  if (str === undefined) {
    str = "large";
  }
  let flag = size.animating;
  if (flag === undefined) {
    flag = true;
  }
  let obj = Object.create(null);
  obj.size = 0;
  obj.animating = 0;
  const merged = Object.assign(size, obj);
  obj = require(dependencyMap[2]);
  let token = obj.useToken(importDefault(dependencyMap[3]).colors.BACKGROUND_BRAND);
  const color = merged.color;
  if (null != color) {
    token = color;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["size"] = str;
  obj["animating"] = flag;
  obj["color"] = token;
  return <ActivityIndicator {...obj} />;
};
