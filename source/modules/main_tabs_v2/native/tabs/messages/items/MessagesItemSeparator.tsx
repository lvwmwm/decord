// Module ID: 15091
// Function ID: 15092
// Name: PX_12
// Dependencies: [19, 17, 21, 712, 4189, 2]

// Module 15091 (PX_12)
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let StyleSheet;
let c0;
({ StyleSheet, View: c0 } = get_ActivityIndicator);
const PX_12 = require("Themes").space.PX_12;
let obj = { container: { height: PX_12 }, separator: null };
obj = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
obj[1] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function MessagesItemSeperator() {
  const tmp = callback();
  obj = { style: tmp.container, collapsable: false, children: <closure_0 {...obj} /> };
  obj = { style: tmp.separator };
  return <closure_0 style={tmp.separator} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default memoResult;
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;
