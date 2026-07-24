// Module ID: 16425
// Function ID: 128111
// Name: WarningNotice
// Dependencies: [31, 27, 33, 4130, 689, 5085, 9212, 4126, 4543, 2]
// Exports: default

// Module 16425 (WarningNotice)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderWidth: 1, padding: 12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.horizontalContainer = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.message = { flex: 1, marginStart: 10, textAlignVertical: "center" };
_createForOfIteratorHelperLoose.actionButtonWrapper = { marginTop: 24, alignSelf: "center", width: "100%" };
_createForOfIteratorHelperLoose.containerYellow = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
_createForOfIteratorHelperLoose.textYellow = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose.alertIcon = { alignSelf: "flex-start", width: 20, height: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/WarningNotice.tsx");

export default function WarningNotice(arg0) {
  let ctaLabel;
  let disabled;
  let notice;
  let onClick;
  let style;
  let submitting;
  ({ ctaLabel, onClick } = arg0);
  ({ style, notice, submitting, disabled } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [style, , ];
  ({ container: arr[1], containerYellow: arr[2] } = tmp);
  obj = { style: tmp.horizontalContainer };
  obj = { style: tmp.alertIcon, source: importDefault(9212) };
  const items1 = [callback(importDefault(5085), obj), ];
  const obj1 = { style: null, variant: "text-sm/medium", color: "interactive-text-active" };
  const items2 = [, ];
  ({ message: arr3[0], textYellow: arr3[1] } = tmp);
  obj1.style = items2;
  obj1.children = notice;
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj.children = items1;
  const items3 = [callback2(View, obj), ];
  let tmp5 = null != onClick && null != ctaLabel;
  if (tmp5) {
    const obj2 = { style: tmp.actionButtonWrapper };
    const obj3 = { onPress: onClick, disabled, loading: submitting, text: ctaLabel, grow: true };
    obj2.children = callback(require(4543) /* Button */.Button, obj3);
    tmp5 = callback(View, obj2);
  }
  items3[1] = tmp5;
  obj.children = items3;
  return callback2(View, obj);
};
