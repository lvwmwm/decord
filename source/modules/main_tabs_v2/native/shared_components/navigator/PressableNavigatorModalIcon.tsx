// Module ID: 9125
// Function ID: 9126
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 9121, 9118, 9122, 9126, 1236, 2]
// Exports: default

// Module 9125 (PressableNavigatorModalIcon)
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
  obj[0] = importDefault("back" === str ? 9122 : 9126);
  obj[1] = goBack;
  const intl = tmp5(1236).intl;
  const string = intl.string;
  const t = tmp5(1236).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj = { isModal: true, children: tmp(require(9118) /* GenericHeaderTitle */.HeaderIconButton, obj) };
  obj[2] = stringResult;
  return jsx(importDefault(9121), { isModal: true, children: tmp(require(9118) /* GenericHeaderTitle */.HeaderIconButton, obj) });
};
