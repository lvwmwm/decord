// Module ID: 11471
// Function ID: 89251
// Name: ApplicationCommandLoadingItem
// Dependencies: [31, 27, 9594, 33, 4130, 689, 4549, 2]
// Exports: default

// Module 11471 (ApplicationCommandLoadingItem)
import "result";
import { View } from "get ActivityIndicator";
import { AUTOCOMPLETE_ROW_HEIGHT } from "AUTOCOMPLETE_ROW_HEIGHT";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { flexDirection: "row", paddingVertical: 4, paddingHorizontal: 16, alignItems: "center", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj.applicationCommandLoadingItem = obj;
  obj.applicationCommandLoadingLeftWrapper = { flexDirection: "column", width: "75%", height: "100%", justifyContent: "space-between" };
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, height: 16, borderRadius: 16, width: "20%" };
  obj.applicationCommandLoadingName = obj;
  const obj1 = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, height: 16, borderRadius: 16, width: "80%" };
  obj.applicationCommandLoadingDescription = obj1;
  const obj2 = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_STRONG, paddingLeft: 16, width: "25%", marginLeft: "auto", height: 16, borderRadius: 16 };
  obj.applicationCommandLoadingSectionName = obj2;
  return obj;
});
const result = require("AUTOCOMPLETE_ROW_HEIGHT").fileFinishedImporting("modules/application_commands/native/ApplicationCommandLoadingItem.tsx");

export default function ApplicationCommandLoadingItem() {
  let obj = require(4549) /* getFontScale */;
  const tmp = callback3(obj.useFontScale());
  obj = { style: tmp.applicationCommandLoadingItem };
  obj = { style: tmp.applicationCommandLoadingLeftWrapper };
  const items = [callback(View, { style: tmp.applicationCommandLoadingName }), callback(View, { style: tmp.applicationCommandLoadingDescription })];
  obj.children = items;
  const items1 = [callback2(View, obj), callback(View, { style: tmp.applicationCommandLoadingSectionName })];
  obj.children = items1;
  return callback2(View, obj);
};
