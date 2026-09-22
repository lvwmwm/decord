// Module ID: 7973
// Function ID: 7974
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 7969, 7966, 7970, 7974, 1114, 2]
// Exports: default

// Module 7973 (PressableNavigatorModalIcon)
import jsxProd from "jsxProd" /* 21 */;
import HeaderShared from "HeaderShared" /* 7966 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7969 */;
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
  const obj = { source: importDefault("back" === str ? 7970 : 7974), onPress: goBack, accessibilityLabel: null };
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
  if ("back" === str) {
    let stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  obj.accessibilityLabel = stringResult;
  return <tmp4 isModal>{jsx(HeaderShared.HeaderIconButton, { source: importDefault("back" === str ? 7970 : 7974), onPress: goBack, accessibilityLabel: null })}</tmp4>;
};
