// Module ID: 9664
// Function ID: 9665
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 9663, 9657, 9660, 9665, 1128, 2]
// Exports: default

// Module 9664 (PressableNavigatorModalIcon)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 9657 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9663 */;
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
  const intl = tmp5(1128).intl;
  const string = intl.string;
  const t = tmp5(1128).t;
  if ("back" === str) {
    stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  return <tmp4 isModal><HeaderIconButton source={importDefault("back" === str ? 9660 : 9665)} onPress={goBack} accessibilityLabel={stringResult} /></tmp4>;
};
