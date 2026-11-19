// Module ID: 8449
// Function ID: 8450
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 8445, 8442, 8446, 8450, 1113, 2]
// Exports: default

// Module 8449 (PressableNavigatorModalIcon)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 8442 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8445 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx");

export default function PressableNavigatorModalIcon(onPress) {
  let stringResult;
  let goBack = onPress.onPress;
  if (goBack === undefined) {
    goBack = onPress.navigation.goBack;
  }
  let str = onPress.type;
  if (str === undefined) {
    str = "back";
  }
  PressableNavigatorButtonWrapperDefault;
  const HeaderIconButton = HeaderShared.HeaderIconButton;
  const intl = tmp5(1113).intl;
  const string = intl.string;
  const t = tmp5(1113).t;
  if ("back" === str) {
    stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  return <tmp4 isModal><HeaderIconButton source={importDefault("back" === str ? 8446 : 8450)} onPress={goBack} accessibilityLabel={stringResult} /></tmp4>;
};
