// Module ID: 5586
// Function ID: 47416
// Name: ActivityIndicator
// Dependencies: [27, 33, 3834, 689, 2]
// Exports: ActivityIndicator

// Module 5586 (ActivityIndicator)
import { ActivityIndicator } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("map").fileFinishedImporting("design/components/ActivityIndicator/native/ActivityIndicator.native.tsx");

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
  obj = require(3834) /* map */;
  let token = obj.useToken(importDefault(689).colors.BACKGROUND_BRAND);
  const color = merged.color;
  if (null != color) {
    token = color;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["size"] = str;
  obj["animating"] = flag;
  obj["color"] = token;
  return <ActivityIndicator />;
};
