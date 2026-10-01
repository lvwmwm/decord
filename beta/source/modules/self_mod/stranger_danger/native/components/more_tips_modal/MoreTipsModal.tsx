// Module ID: 10917
// Function ID: 10918
// Name: MoreTipsModal
// Dependencies: [19, 17, 10376, 1074, 21, 4836, 576, 10918, 4832, 1115, 10921, 6795, 5039, 6413, 1177, 1613, 563, 10912, 5179, 5184, 6421, 2]
// Exports: default

// Module 10917 (MoreTipsModal)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5179 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import SafetyTipsSectionDefault from "SafetyTipsSection" /* 10918 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10376 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
let tmp6;
const MetricEvents = tmp(5184);
const WasThisHelpfulSectionDefault = tmp6(10921);
function MoreTipsModalScreen(learnMore) {
  let actionItems;
  let channelId;
  let description;
  let intl;
  let items;
  let items1;
  let items2;
  let obj2;
  let safetyTips;
  let senderId;
  let warningId;
  learnMore = learnMore.learnMore;
  ({ channelId, warningId, senderId, description, safetyTips, actionItems } = learnMore);
  const tmp = closure_10();
  const obj = { keyboardShouldPersistTaps: "handled", style: tmp.scroll, children: React4(React3, obj2) };
  obj2 = { style: tmp.contentContainer, children: items1 };
  const obj3 = { style: tmp.tipsContainer, children: items };
  items = [metroImportAll(SafetyTipsSectionDefault, { description, safetyTips, showHeader: true }), ];
  let tmp2Result = null;
  const tmp3 = hasOwnProperty;
  if (null != learnMore) {
    const obj4 = { style: tmp.learnMore, children: learnMore };
    tmp2Result = tmp2(tmp5, obj4);
  }
  items[1] = tmp2Result;
  items1 = [React4(React3, obj3), , ];
  const obj5 = { children: items2 };
  const obj6 = { variant: "eyebrow", color: "text-default", style: tmp.header, children: intl.string(intl2.t.K5FKtc) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items2 = [metroImportAll(Text, obj6), actionItems];
  items1[1] = React4(React3, obj5);
  items1[2] = metroImportAll(WasThisHelpfulSectionDefault, { channelId, warningId, senderId });
  return metroImportAll(tmp3, obj);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scroll: obj2, contentContainer: obj3, tipsContainer: obj4, learnMore: { alignItems: "center" }, header: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/native/components/more_tips_modal/MoreTipsModal.tsx");

export default function MoreTipsModal(headerStyle) {
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let obj3;
  const channelId = headerStyle.channelId;
  const warningId = headerStyle.warningId;
  const senderId = headerStyle.senderId;
  const top = warningId(senderId[15])().top;
  let obj = channelId(senderId[16]);
  const items = [ChannelSafetyWarningsStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarning(channelId, warningId));
  const items1 = [channelId, warningId, senderId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let type;
    const obj = { channelId, warningId, senderId, warningType: type };
    type = undefined;
    const trackViewedEvent = SafetyWarningUtils.trackViewedEvent;
    const SAFETY_WARNING_MODAL_VIEWED = AnalyticEvents.SAFETY_WARNING_MODAL_VIEWED;
    SafetyWarningUtils;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    trackViewedEvent(SAFETY_WARNING_MODAL_VIEWED, obj);
    const obj2 = MonitoringAgentDefault;
    const obj3 = { name: MetricEvents.MetricEvents.SAFETY_WARNING_MODAL_VIEW };
    obj2.increment(obj3);
  }, items1);
  let obj2 = { screens: obj3, initialRouteName: "MORE_TIPS", headerStatusBarHeight: top };
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  ({ modalKey: c0, channelId: c1, warningId: c2, senderId: c3, description: c4, safetyTips: c5, actionItems: c6, learnMore: c7 } = headerStyle);
  obj3 = {
    MORE_TIPS: {
      headerRight() {
        let intl;
        let obj = {
          onPress() {
            const obj = c1(c2[12]);
            return obj.popWithKey(closure_1_0);
          },
          source: warningId(senderId[13]),
          iconSize: channelId(senderId[14]).IconSizes.MEDIUM,
          accessibilityLabel: intl.string(channelId(senderId[9]).t.cpT0Cq)
        };
        const HeaderActionButton = channelId(senderId[11]).HeaderActionButton;
        intl = channelId(senderId[9]).intl;
        return closure_2_8(HeaderActionButton, obj);
      },
      headerTitle() {
        return null;
      },
      headerLeft() {
        return null;
      },
      headerStyle: headerStyle.headerStyle,
      render() {
        const obj = { channelId, warningId, senderId, description, safetyTips, actionItems, learnMore };
        return closure_2_8(MoreTipsModalScreen, obj);
      }
    }
  };
  return closure_8(channelId(senderId[20]).Navigator, obj2);
};
