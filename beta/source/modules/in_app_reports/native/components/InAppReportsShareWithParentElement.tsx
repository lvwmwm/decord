// Module ID: 12469
// Function ID: 12470
// Name: InAppReportsShareWithParentElement
// Dependencies: [32, 19, 21, 6959, 4527, 1115, 7852, 12468, 12470, 2]
// Exports: default

// Module 12469 (InAppReportsShareWithParentElement)
import Fragment from "Fragment" /* 21 */;
import FamilyCenterActionCreators from "FamilyCenterActionCreators" /* 6959 */;
import InAppReportsUpsellsTableRowDefault from "InAppReportsUpsellsTableRow" /* 12468 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShareWithParentElement.tsx");

export default function _default(parents) {
  let BlAMme;
  let closure_1;
  let first;
  let formatToPlainString;
  let intl2;
  let obj3;
  let username;
  let username1;
  let username2;
  let username3;
  parents = parents.parents;
  importDefault = undefined;
  [first, importDefault] = react.useState(false);
  [][0] = parents;
  if (0 === parents.length) {
    return null;
  } else {
    const intl3 = parents(1115).intl;
    const formatToPlainString2 = intl3.formatToPlainString;
    const obj2 = { count: parents.length, parent1: parents[0].username, parent2: username, parent3: username1 };
    username = undefined;
    const HqyWeO = parents(1115).t.HqyWeO;
    if (parents[1] != null) {
      username = tmp18.username;
    }
    const tmp5 = parents[2];
    username1 = undefined;
    if (tmp5 != null) {
      username1 = tmp5.username;
    }
    let obj = { title: formatToPlainString2(HqyWeO, obj2), disabledTitle: formatToPlainString(BlAMme, obj3), icon: tmp8(parents(12470).ShareIcon, {}), description: intl2.string(parents(1115).t["5l/hlt"]), disabled: first, onPress: tmp3 };
    formatToPlainString2(HqyWeO, obj2);
    const tmp10 = InAppReportsUpsellsTableRowDefault;
    let intl = tmp16(1115).intl;
    formatToPlainString = intl.formatToPlainString;
    obj3 = { count: parents.length, parent1: parents[0].username, parent2: username2, parent3: username3 };
    username2 = undefined;
    BlAMme = tmp16(1115).t.BlAMme;
    if (parents[1] != null) {
      username2 = tmp11.username;
    }
    username3 = undefined;
    if (parents[2] != null) {
      username3 = tmp13.username;
    }
    intl2 = tmp16(1115).intl;
    return jsx(tmp10, obj);
  }
};
