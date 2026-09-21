// Module ID: 8119
// Function ID: 8120
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 8118, 8112, 8115, 8120, 1119, 2]
// Exports: default

// Module 8119 (PressableNavigatorModalIcon)
import jsxProd from "jsxProd" /* 21 */;
import HeaderShared from "HeaderShared" /* 8112 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8118 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  const obj = { source: importDefault("back" === str ? 8115 : 8120), onPress: goBack, accessibilityLabel: null };
  const intl = tmp5(1119).intl;
  const string = intl.string;
  const t = tmp5(1119).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj.accessibilityLabel = stringResult;
  return <tmp4 isModal>{jsx(HeaderShared.HeaderIconButton, { source: importDefault("back" === str ? 8115 : 8120), onPress: goBack, accessibilityLabel: null })}</tmp4>;
};
