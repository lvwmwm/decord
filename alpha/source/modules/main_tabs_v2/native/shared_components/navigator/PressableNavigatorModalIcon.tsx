// Module ID: 8201
// Function ID: 8202
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 8197, 8194, 8198, 8202, 1115, 2]
// Exports: default

// Module 8201 (PressableNavigatorModalIcon)
import jsxProd from "jsxProd" /* 21 */;
import HeaderShared from "HeaderShared" /* 8194 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8197 */;
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
  const obj = { source: importDefault("back" === str ? 8198 : 8202), onPress: goBack, accessibilityLabel: null };
  const intl = tmp5(1115).intl;
  const string = intl.string;
  const t = tmp5(1115).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj.accessibilityLabel = stringResult;
  return <tmp4 isModal>{jsx(HeaderShared.HeaderIconButton, { source: importDefault("back" === str ? 8198 : 8202), onPress: goBack, accessibilityLabel: null })}</tmp4>;
};
