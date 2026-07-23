// Module ID: 15261
// Function ID: 116454
// Name: UnavailableNotice
// Dependencies: [31, 27, 33, 4130, 689, 5085, 15067, 4126, 2]
// Exports: default

// Module 15261 (UnavailableNotice)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.brightTitle = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.unavailableContainer = { justifyContent: "center" };
_createForOfIteratorHelperLoose.unavailableInfo = { alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.unavailableDescription = { marginTop: 8, marginHorizontal: 16, textAlign: "center" };
_createForOfIteratorHelperLoose.joinCtaTitle = { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default function UnavailableNotice(brightTitle) {
  let description;
  let title;
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj = { style: tmp.unavailableInfo };
  obj = { source: importDefault(15067) };
  const items1 = [callback(importDefault(5085), obj), , ];
  const obj1 = { variant: "heading-lg/extrabold", color: "text-default" };
  const items2 = [tmp.joinCtaTitle, ];
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  obj1.style = items2;
  obj1.children = title;
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description };
  items1[2] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items1;
  obj.children = closure_5(View, obj);
  return callback(View, obj);
};
