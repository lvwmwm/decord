// Module ID: 9798
// Function ID: 9799
// Name: PressableNavigatorModalIcon
// Dependencies: [21, 9794, 9791, 9795, 9799, 1114, 2]
// Exports: default

// Module 9798 (PressableNavigatorModalIcon)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9794 */;
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
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
  if ("back" === str) {
    stringResult = string(t["13/7kX"]);
  } else {
    stringResult = string(t.cpT0Cq);
  }
  return <tmp4 isModal><HeaderIconButton source={importDefault("back" === str ? 9795 : 9799)} onPress={goBack} accessibilityLabel={stringResult} /></tmp4>;
};
