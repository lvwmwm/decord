// Module ID: 14594
// Function ID: 14595
// Name: QuestHomeEmptyState
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1115, 4531, 4695, 6544, 1364, 4832, 14595, 5293, 2]
// Exports: default

// Module 14594 (QuestHomeEmptyState)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useToken from "useToken" /* 4531 */;
import useChatLayoutDefault from "useChatLayout" /* 4695 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import AssetRegistryDefault from "AssetRegistry" /* 14595 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, ImageBackground: closure_4 } = react_native);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContentContainer: obj2, emptyStateContentTitle: { textAlign: "center" }, emptyStateContentDescription: { textAlign: "center", marginTop: 4 }, emptyImage: { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 }, gradient: { height: 22, width: "100%", position: "absolute", bottom: 0 }, actionWrapper: { marginTop: 16, alignSelf: "center" } };
obj2 = { top: -55, paddingHorizontal: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(subtitle) {
  let action;
  let items;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj4;
  let obj5;
  let title;
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = intl3.intl;
    title = intl.string(intl3.t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
  if (subtitle === undefined) {
    const intl2 = intl3.intl;
    subtitle = intl2.string(intl3.t["R7mv+G"]);
  }
  const tmp5 = closure_9();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj2 = { bottom: obj3.isAndroid(), style: tmp5.container, children: metroRequire(_false, obj4) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = PlatformUtils;
  obj4 = { style: tmp5.container, children: metroImportDefault(_false, obj5) };
  const obj6 = { style: tmp5.emptyStateContentContainer, children: items };
  items = [, , ];
  obj5 = { style: tmp5.emptyStateContainer, children: items1 };
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title };
  items[0] = metroRequire(Text_Text.Text, obj7);
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle };
  items[1] = metroRequire(Text_Text.Text, obj8);
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp9Result = tmp9(tmp10, obj9);
  }
  items[2] = tmp9Result;
  items1 = [metroImportDefault(_false, obj6), ];
  let tmp11Result = null;
  if (!isChatLockedOpen) {
    const obj10 = { children: items2 };
    const obj11 = { style: tmp5.emptyImage, source: AssetRegistryDefault, resizeMode: "cover" };
    items2 = [metroRequire(React3, obj11), ];
    const obj22 = { style: tmp5.gradient, end: null, start: null, colors: items3 };
    ({ END: obj12.end, START: obj12.start } = VerticalGradient);
    items3 = ["rgba(0, 0, 0, 0)", token];
    items2[1] = metroRequire(LinearGradientDefault, obj22);
    tmp11Result = tmp11(metroImportAll, obj10);
  }
  items1[1] = tmp11Result;
  return metroRequire(SafeAreaPaddingView, obj2);
};
