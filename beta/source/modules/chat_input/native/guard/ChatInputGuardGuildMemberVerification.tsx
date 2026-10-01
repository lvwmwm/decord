// Module ID: 11949
// Function ID: 11950
// Name: ChatInputGuardGuildMemberVerification
// Dependencies: [19, 17, 4825, 11444, 1074, 21, 4836, 5857, 4658, 11950, 1115, 5016, 5839, 11951, 5992, 5881, 504, 11941, 5841, 11952, 2]

// Module 11949 (ChatInputGuardGuildMemberVerification)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5839 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5881 */;
import ChatInputConstants from "ChatInputConstants" /* 11444 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 11941 */;
import AssetRegistryDefault from "AssetRegistry" /* 11950 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11951 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let tmp14;
const LottieAnimationViewDefault = tmp14(5841);
const Image = react_native.Image;
const TextAreaCta = ChatInputConstants.TextAreaCta;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const memoResult = react.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  let fn;
  let stringResult;
  let tmp13Result;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  guildId = guildId.guildId;
  const tmp = closure_8();
  const tmp2 = guildId;
  let obj = guildId(5857);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (tmp2(4658).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    tmp8 = AssetRegistryDefault;
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp2(1115).t.lk30cY);
    fn = function _() {
      const obj = AppAnalyticsUtilsDefault;
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = MemberVerificationAlertActionCreators;
      const obj4 = { guildId, canWithdraw: false };
      const result = obj3.openMemberVerificationRejectedAlert(obj4);
    };
  } else if (tmp2(4658).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = AssetRegistryDefault2;
    tmp7 = jsx(tmp2(5992).XSmallIcon, {});
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t["5iLvSx"]);
    fn = function _() {
      let intl;
      const obj = AppAnalyticsUtilsDefault;
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = { guildId, subtitleText: intl.string(intl5.t["13tjTU"]) };
      const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
      MemberVerificationAlertActionCreators;
      intl = intl5.intl;
      const result = openMemberVerificationCancelPendingAlert(obj3);
    };
  } else {
    let intl = tmp2(1115).intl;
    stringResult = intl.string(tmp2(1115).t.rEBKvg);
    fn = function _() {
      const obj = AppAnalyticsUtilsDefault;
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = MemberVerificationModalActionCreators;
      const result = obj3.openMemberVerificationModal(guildId);
    };
  }
  const items = [AccessibilityStore];
  const tmp2Result = tmp2(504);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  ChatInputGuardDefault;
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    tmp13Result = tmp13(Image, obj2);
  } else {
    let obj3 = { style: tmp.lottieAnimation, source: tmp2(11952), autoPlay: !stateFromStores };
    const tmp14Result = LottieAnimationViewDefault;
    tmp13Result = tmp13(tmp14Result, obj3);
  }
  const intl4 = tmp2(1115).intl;
  return <tmp15 type="simple-action" icon={tmp13Result} message={stringResult} actionIcon={tmp7} actionLabel={intl4.string(tmp2(1115).t["r8/DT+"])} actionOnPress={fn} />;
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
