// Module ID: 12340
// Function ID: 96022
// Name: parents
// Dependencies: [57, 31, 33, 5767, 3831, 1212, 6664, 12339, 12231, 2]
// Exports: default

// Module 12340 (parents)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default function _default(parents) {
  parents = parents.parents;
  const tmp = callback(React.useState(false), 2);
  const importDefault = tmp[1];
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = parents(1212).intl;
    let obj = { count: parents.length, parent1: parents[0].username };
    let username;
    if (null != parents[1]) {
      username = tmp22.username;
    }
    obj.parent2 = username;
    let username1;
    if (null != parents[2]) {
      username1 = tmp4.username;
    }
    obj.parent3 = username1;
    obj = {};
    obj.title = intl3.formatToPlainString(parents(1212).t.HqyWeO, obj);
    const formatToPlainStringResult = intl3.formatToPlainString(parents(1212).t.HqyWeO, obj);
    const tmp7 = jsx;
    let intl = parents(1212).intl;
    obj = { count: parents.length, parent1: parents[0].username };
    let username2;
    if (null != parents[1]) {
      username2 = tmp12.username;
    }
    obj.parent2 = username2;
    let username3;
    if (null != parents[2]) {
      username3 = tmp14.username;
    }
    obj.parent3 = username3;
    obj.disabledTitle = intl.formatToPlainString(parents(1212).t.BlAMme, obj);
    obj.icon = jsx(parents(12231).ShareIcon, {});
    const intl2 = parents(1212).intl;
    obj.description = intl2.string(parents(1212).t["5l/hlt"]);
    obj.disabled = tmp[0];
    obj.onPress = tmp2;
    return tmp7(importDefault(12339), obj);
  }
};
