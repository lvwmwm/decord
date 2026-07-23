// Module ID: 15591
// Function ID: 120202
// Name: SuspendedUserSafetyHubPage
// Dependencies: [31, 27, 7544, 33, 4130, 689, 5121, 7771, 1212, 5590, 7607, 4126, 3827, 13652, 2]
// Exports: default

// Module 15591 (SuspendedUserSafetyHubPage)
import "result";
import { View } from "get ActivityIndicator";
import { SafetyHubLinks } from "SafetyHubLinks";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "left", flexShrink: 1 };
_createForOfIteratorHelperLoose.text = obj2;
_createForOfIteratorHelperLoose.link = { textDecorationLine: "underline" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
const result = require("SafetyHubLinks").fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { top: true, right: true, left: true };
  obj = { style: tmp.container };
  obj = { style: tmp.header };
  const obj1 = { variant: "destructive" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj1.onPress = function onPress() {
    outer1_1(outer1_2[9]).closeSuspendedUser();
  };
  obj1.icon = importDefault(7607);
  const items = [callback(require(7771) /* IconButton */.IconButton, obj1), ];
  const obj2 = {
    style: tmp.text,
    onPress() {
      outer1_1(outer1_2[12]).openURL(outer1_4.WARNING_SYSTEM_HELPCENTER_LINK);
    },
    variant: "text-xs/medium",
    color: "control-critical-primary-text-default"
  };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const items1 = [intl2.string(require(1212) /* getSystemLocale */.t["MG+Bzb"]), " ", ];
  const obj3 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl3.string(require(1212) /* getSystemLocale */.t["9JceHN"]);
  items1[2] = callback(require(4126) /* Text */.Text, obj3);
  obj2.children = items1;
  items[1] = callback2(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  const items2 = [callback2(View, obj), callback(importDefault(13652), { visible: true })];
  obj.children = items2;
  obj.children = callback2(View, obj);
  return callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
