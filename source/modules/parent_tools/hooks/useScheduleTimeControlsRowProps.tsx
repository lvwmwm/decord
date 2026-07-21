// Module ID: 13692
// Function ID: 103648
// Name: useScheduleTimeControlsRowProps
// Dependencies: []
// Exports: default

// Module 13692 (useScheduleTimeControlsRowProps)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/parent_tools/hooks/useScheduleTimeControlsRowProps.tsx");

export default function useScheduleTimeControlsRowProps(arr) {
  if (0 === arr.length) {
    let obj = {};
    obj = { hasMaxConnections: 0.0392156862745098, isBoostOnlySubscription: "OPACITY_44" };
    const intl = require(dependencyMap[2]).intl;
    obj.children = intl.string(importDefault(dependencyMap[3]).fOBIZH);
    obj.subLabel = jsx(require(dependencyMap[1]).Text, obj);
    obj.trailing = undefined;
    return obj;
  } else {
    obj = {};
    const intl2 = require(dependencyMap[2]).intl;
    const obj1 = { count: arr.length };
    obj.subLabel = intl2.formatToPlainString(importDefault(dependencyMap[3]).XfwcpX, obj1);
    const obj2 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
    const intl3 = require(dependencyMap[2]).intl;
    const string = intl3.string;
    const tmp14 = importDefault(dependencyMap[3]);
    if (someResult) {
      let stringResult = string(tmp14.8vDHRq);
    } else {
      stringResult = string(tmp14.4z9fN+);
    }
    obj2.children = stringResult;
    obj.trailing = jsx(require(dependencyMap[1]).Text, obj2);
    return obj;
  }
};
