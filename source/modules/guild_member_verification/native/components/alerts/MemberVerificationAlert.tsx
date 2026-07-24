// Module ID: 9192
// Function ID: 71985
// Name: MemberVerificationAlert
// Dependencies: [31, 27, 33, 4130, 689, 4561, 4126, 2]
// Exports: default

// Module 9192 (MemberVerificationAlert)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginLeft: "auto", marginRight: "auto", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, padding: 12, marginTop: 8, marginBottom: 8 };
_createForOfIteratorHelperLoose.headerImage = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { marginTop: 8, marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { lineHeight: 18, marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.buttons = { marginTop: 16, marginBottom: 8, gap: 12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx");

export default function MemberVerificationAlert(arg0) {
  let buttons;
  let header;
  let icon;
  let subtitle;
  ({ icon, subtitle } = arg0);
  let obj = { header: 0, icon: 0, subtitle: 0, buttons: 0 };
  ({ header, buttons } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["noDefaultButtons"] = true;
  let tmp7 = null;
  if (null != icon) {
    obj = { style: tmp3.headerImage };
    const obj1 = { size: "lg" };
    obj.children = callback(icon, obj1);
    tmp7 = callback(View, obj);
  }
  const items = [tmp7, , , ];
  const obj2 = { style: tmp3.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: header };
  items[1] = callback(require(4126) /* Text */.Heading, obj2);
  let tmp10 = null;
  if (null != subtitle) {
    const obj3 = { style: tmp3.subtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    tmp10 = callback(require(4126) /* Text */.Text, obj3);
  }
  items[2] = tmp10;
  items[3] = callback(View, { style: tmp3.buttons, children: buttons });
  obj["children"] = items;
  return closure_5(importDefault(4561), obj);
};
