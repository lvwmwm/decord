// Module ID: 5744
// Function ID: 5745
// Name: ActivityIndicator
// Dependencies: [17, 21, 3988, 712, 2]
// Exports: ActivityIndicator

// Module 5744 (ActivityIndicator)
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
  const merged = Object.assign(size, Object.create(null));
  let obj = require(3988) /* map */;
  let color = merged.color;
  if (color == null) {
    color = obj.useToken(importDefault(712).colors.BACKGROUND_BRAND);
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.size = str;
  obj.animating = flag;
  obj.color = color;
  return <ActivityIndicator />;
};
