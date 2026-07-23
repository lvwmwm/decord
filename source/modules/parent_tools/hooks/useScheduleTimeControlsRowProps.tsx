// Module ID: 13813
// Function ID: 105837
// Name: useScheduleTimeControlsRowProps
// Dependencies: [33, 4126, 1212, 2198, 2]
// Exports: default

// Module 13813 (useScheduleTimeControlsRowProps)
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    let obj = {};
    obj = { variant: "text-xs/medium", color: "text-muted" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(importDefault(2198).fOBIZH);
    obj.subLabel = jsx(require(4126) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted" });
    obj.trailing = undefined;
    return obj;
  } else {
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { count: arr.length };
    obj.subLabel = intl2.formatToPlainString(importDefault(2198).XfwcpX, obj1);
    const obj2 = { variant: "text-sm/medium", color: "text-muted" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const string = intl3.string;
    const tmp14 = importDefault(2198);
    if (someResult) {
      let stringResult = string(tmp14["8vDHRq"]);
    } else {
      stringResult = string(tmp14["4z9fN+"]);
    }
    obj2.children = stringResult;
    obj.trailing = jsx(require(4126) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted" });
    return obj;
  }
};
