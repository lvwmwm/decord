// Module ID: 9121
// Function ID: 9122
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 9117, 9114, 9118, 9122, 1236, 2]
// Exports: default

// Module 9121 (PressableNavigatorModalIcon)
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
  let obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = importDefault("back" === str ? 9118 : 9122);
  obj[1] = goBack;
  const intl = tmp5(1236).intl;
  const string = intl.string;
  const t = tmp5(1236).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj = { isModal: true, children: tmp(require(9114) /* GenericHeaderTitle */.HeaderIconButton, obj) };
  obj[2] = stringResult;
  return jsx(importDefault(9117), { isModal: true, children: tmp(require(9114) /* GenericHeaderTitle */.HeaderIconButton, obj) });
};
