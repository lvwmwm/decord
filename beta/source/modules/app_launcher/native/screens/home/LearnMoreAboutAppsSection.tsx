// Module ID: 11577
// Function ID: 11578
// Name: LearnMoreAboutAppsSection
// Dependencies: [19, 17, 1074, 21, 4836, 576, 4525, 2111, 1115, 11578, 8712, 4832, 5435, 2]
// Exports: default

// Module 11577 (LearnMoreAboutAppsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8712 */;
import TrackSectionHeaderDefault from "TrackSectionHeader" /* 11578 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { textAlign: "center" }, divider: obj3, linkButton: obj4 };
obj2 = { marginTop: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.lg, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, paddingHorizontal: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_16 };
obj4 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, paddingVertical: 12, paddingHorizontal: 16, minHeight: 48, justifyContent: "center", alignItems: "center" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx");

export default function LearnMoreAboutAppsSection(visible) {
  let Text;
  let intl4;
  let items;
  let obj2;
  let obj7;
  visible = visible.visible;
  const tmp = closure_8();
  const callback = react.useCallback(() => {
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj = HelpdeskUtilsDefault;
    openURL(obj.getAppsSupportURL(constants.APPS_LEARN_MORE));
  }, []);
  const intl = intl5.intl;
  const stringResult = intl.string(intl5.t["kw8/Ec"]);
  const intl2 = intl5.intl;
  const stringResult1 = intl2.string(intl5.t.GZoV1O);
  const intl3 = intl5.intl;
  let obj = { sectionName: AppLauncherTypes.AppLauncherSectionName.NEW_TO_APPS, numItems: 1, numVisibleItems: 1, viewed: visible, children: metroImportDefault(View, obj2) };
  const formatToPlainStringResult = intl3.formatToPlainString(intl5.t.xx5Sug, { sectionTitle: stringResult, sectionBody: stringResult1 });
  obj2 = { style: tmp.container, children: items };
  items = [, , , , , ];
  const obj3 = { style: tmp.divider };
  const tmp6 = TrackSectionHeaderDefault;
  items[0] = metroRequire(View, obj3);
  items[1] = metroRequire(Text_Text.Text, { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: stringResult });
  const obj4 = { variant: "text-xs/normal", color: "text-default", style: tmp.body, children: stringResult1 };
  items[2] = metroRequire(Text_Text.Text, obj4);
  const obj5 = { style: tmp.divider };
  items[3] = metroRequire(View, obj5);
  const obj6 = { style: tmp.linkButton, onPress: callback, accessibilityRole: "link", accessibilityLabel: formatToPlainStringResult, children: metroRequire(Text, obj7) };
  const PressableHighlight = Pressables.PressableHighlight;
  obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl4.string(intl5.t.Ye51oT) };
  Text = Text_Text.Text;
  intl4 = intl5.intl;
  items[4] = metroRequire(PressableHighlight, obj6);
  const obj8 = { style: tmp.divider };
  items[5] = metroRequire(View, obj8);
  return metroRequire(tmp6, obj);
};
