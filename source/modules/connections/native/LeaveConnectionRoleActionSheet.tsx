// Module ID: 9993
// Function ID: 77268
// Name: LeaveConnectionRoleActionSheet
// Dependencies: [31, 27, 33, 4130, 5187, 4126, 1212, 4543, 2]
// Exports: default

// Module 9993 (LeaveConnectionRoleActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 12 }, marginTop: { marginTop: 8 }, button: { marginTop: 8, marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/connections/native/LeaveConnectionRoleActionSheet.tsx");

export default function LeaveConnectionRoleActionSheet(onLeaveRolePressed) {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.vytvJF);
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  const obj1 = { style: tmp.marginTop, variant: "text-md/normal", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.caJwb5);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.button };
  const obj3 = { variant: "destructive", onPress: onLeaveRolePressed.onLeaveRolePressed };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.text = intl3.string(require(1212) /* getSystemLocale */.t["+Oi4XF"]);
  obj3.grow = true;
  obj2.children = callback(require(4543) /* Button */.Button, obj3);
  items[2] = callback(View, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
