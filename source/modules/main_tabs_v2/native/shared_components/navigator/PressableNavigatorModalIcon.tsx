// Module ID: 9165
// Function ID: 71686
// Name: PressableNavigatorModalIcon
// Dependencies: [33, 9161, 9158, 9162, 9166, 1212, 2]
// Exports: default

// Module 9165 (PressableNavigatorModalIcon)
import { jsx } from "jsxProd";

const result = require("GenericHeaderTitle").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  let obj = { isModal: true };
  obj = {};
  if ("back" === str) {
    let tmp6 = 9162;
  } else {
    tmp6 = 9166;
  }
  obj.source = importDefault(tmp6);
  obj.onPress = goBack;
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj.accessibilityLabel = stringResult;
  obj.children = jsx(require(9158) /* GenericHeaderTitle */.HeaderIconButton, {});
  return jsx(importDefault(9161), {});
};
