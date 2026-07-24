// Module ID: 14965
// Function ID: 114021
// Name: PX_12
// Dependencies: [31, 27, 33, 689, 4130, 2]

// Module 14965 (PX_12)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let StyleSheet;
let closure_0;
({ StyleSheet, View: closure_0 } = get_ActivityIndicator);
const PX_12 = require("_createForOfIteratorHelperLoose").space.PX_12;
let obj = { container: { height: PX_12 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["top"] = undefined;
obj.separator = obj;
let closure_2 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function MessagesItemSeperator() {
  const tmp = callback();
  obj = { style: tmp.container, collapsable: false, children: <closure_0 {...obj} /> };
  obj = { style: tmp.separator };
  return <closure_0 style={tmp.separator} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default memoResult;
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;
