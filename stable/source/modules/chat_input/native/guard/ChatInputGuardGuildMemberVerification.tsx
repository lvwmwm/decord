// Module ID: 12589
// Function ID: 12590
// Name: ChatInputGuardGuildMemberVerification
// Dependencies: [19, 17, 4628, 12095, 1074, 21, 4636, 5626, 4461, 12590, 1114, 4816, 5608, 12591, 5761, 5650, 504, 12581, 5610, 12592, 2]

// Module 12589 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4816 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5608 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5650 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12581 */;
import _modDef12590 from "module_12590" /* 12590 */;
import _modDef12591 from "module_12591" /* 12591 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const LottieAnimationViewDefault = tmp14(5610);
require = fn;
const Image = fn(17).Image;
const TextAreaCta = fn(12095).TextAreaCta;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_8 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  const currentUserGuildJoinRequest = guildId(5626).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4461).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef12590;
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t.lk30cY);
    let fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert({ guildId, canWithdraw: false });
    };
  } else if (tmp2(4461).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef12591;
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t["5iLvSx"]);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
      const obj4 = { guildId, subtitleText: null };
      const intl = util.intl;
      obj4.subtitleText = intl.string(util.t["13tjTU"]);
      const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj4);
    };
    const tmp7 = jsx(tmp2(5761).XSmallIcon, {});
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.rEBKvg);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
      const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
    };
  }
  let obj = guildId(5626);
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2Result = guildId(504);
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    let tmp13Result = tmp13(Image, obj2);
  } else {
    const obj3 = { style: tmp.lottieAnimation, source: tmp2(12592), autoPlay: !stateFromStores };
    tmp13Result = tmp13(LottieAnimationViewDefault, obj3);
    const tmp14Result = LottieAnimationViewDefault;
  }
  let obj4 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1114).intl;
  obj4.actionLabel = intl4.string(guildId(1114).t["r8/DT+"]);
  obj4.actionOnPress = fn;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});
