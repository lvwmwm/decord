// Module ID: 8258
// Function ID: 65166
// Name: InfoBox
// Dependencies: [31, 27, 33, 4130, 689, 4086, 7577, 4126, 2]
// Exports: default

// Module 8258 (InfoBox)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, padding: 8, borderStyle: "solid", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.TEXT_LINK, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_INFO, flexDirection: "row", alignItems: "center", gap: 8 };
_createForOfIteratorHelperLoose.infoBox = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.infoBoxWarning = { borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose.infoText = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { INFO: "info", WARNING: "warning" };
let obj1 = { borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING };
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/authorized_apps/native/InfoBox.tsx");

export default function InfoBox(look) {
  let children;
  let style;
  let INFO = look.look;
  ({ children, style } = look);
  if (INFO === undefined) {
    INFO = obj2.INFO;
  }
  const tmp2 = _createForOfIteratorHelperLoose();
  const items = [tmp2.infoBox];
  const items1 = [, ];
  ({ infoBox: arr2[0], infoBoxWarning: arr2[1] } = tmp2);
  let obj = {};
  obj = { color: importDefault(689).colors.TEXT_LINK };
  obj[obj2.INFO] = callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, obj);
  obj = { color: importDefault(689).colors.ICON_FEEDBACK_WARNING };
  obj[obj2.WARNING] = callback(require(7577) /* CircleErrorIcon */.CircleErrorIcon, obj);
  const obj1 = {};
  const items2 = [style, ...{ [closure_7.INFO]: items, [closure_7.WARNING]: items1 }[INFO]];
  obj1.style = items2;
  const items3 = [obj[INFO], ];
  obj2 = { style: tmp2.infoText, variant: "text-sm/semibold", children };
  items3[1] = callback(require(4126) /* Text */.Text, obj2);
  obj1.children = items3;
  return callback2(View, obj1);
};
export const InfoBoxLooks = obj2;
