// Module ID: 11494
// Function ID: 11495
// Name: PinotMemberNoticeBar
// Dependencies: [19, 17, 1072, 21, 5142, 575, 11484, 5836, 2185, 5753, 1113, 3316, 7046, 7123, 2]
// Exports: PinotMemberNoticeBar

// Module 11494 (PinotMemberNoticeBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import Text_Text from "Text/Text" /* 5753 */;
import LinkingDefault from "Linking" /* 5836 */;
import PinotAnalytics from "PinotAnalytics" /* 11484 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
let createStyles = createStyles_mod;
let obj = { underlay: obj2, bar: obj3, text: { flex: 1 }, link: { textDecorationLine: "underline" } };
obj2 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, borderBottomColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeBar.tsx");

export function PinotMemberNoticeBar(channel) {
  let intl;
  let intl2;
  let items1;
  let link;
  let obj2;
  let obj4;
  channel = channel.channel;
  const onDismiss = channel.onDismiss;
  function handleLearnMore() {
    const obj = PinotAnalytics;
    const obj2 = { noticeType: "member_channel", channel };
    const result = obj.trackPinotNoticeAction(obj2, "learn_more");
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj3 = HelpdeskUtilsDefault;
    openURL(obj3.getArticleURL(HelpdeskArticles.DISCOVERABLE_CONTENT_ON_THE_WEB));
  }
  const tmp = closure_9();
  dependencyMap = tmp;
  const items = [channel.id];
  const effect = handleLearnMore.useEffect(() => {
    const obj = PinotAnalytics;
    const obj2 = { noticeType: "member_channel", channel };
    const result = obj.trackPinotNoticeViewed(obj2);
  }, items);
  let obj = { style: tmp.underlay, children: closure_7(View, obj2) };
  obj2 = { style: tmp.bar, children: items1 };
  let obj3 = { variant: "body-sm/normal", color: "text-default", style: tmp.text, children: intl.format(onDismiss(3316).Jry6Gr, obj4) };
  const Text = channel(5753).Text;
  intl = channel(1113).intl;
  obj4 = {
    learnMoreHook(children, arg1) {
      const obj = { variant: "body-sm/normal", color: "text-default", style: link.link, accessibilityRole: "link", onPress: handleLearnMore, children };
      return metroRequire(Text_Text.Text, obj, arg1);
    }
  };
  items1 = [closure_6(Text, obj3), ];
  const obj5 = {
    accessibilityRole: "button",
    accessibilityLabel: intl2.string(channel(1113).t.WAI6xu),
    hitSlop,
    onPress: function handleDismiss() {
      const obj = PinotAnalytics;
      const obj2 = { noticeType: "member_channel", channel };
      const result = obj.trackPinotNoticeAction(obj2, "dismiss");
      onDismiss();
    },
    children: closure_6(channel(7123).XSmallIcon, { size: "sm", color: "icon-muted" })
  };
  const PressableOpacity = channel(7046).PressableOpacity;
  intl2 = channel(1113).intl;
  items1[1] = closure_6(PressableOpacity, obj5);
  return closure_6(View, obj);
}
