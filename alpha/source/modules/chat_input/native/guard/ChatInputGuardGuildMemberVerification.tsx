// Module ID: 13440
// Function ID: 13441
// Name: ChatInputGuardGuildMemberVerification
// Dependencies: [19, 5044, 12960, 1071, 21, 5043, 7009, 5079, 13441, 1112, 6013, 6997, 13442, 7247, 7031, 504, 13431, 5730, 5628, 13443, 2]

// Module 13440 (ChatInputGuardGuildMemberVerification)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl5 from "intl" /* 1112 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6013 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6997 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7031 */;
import ChatInputConstants from "ChatInputConstants" /* 12960 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13431 */;
import AssetRegistryDefault from "AssetRegistry" /* 13441 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13442 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let tmp15;
const LottieAnimationViewDefault = tmp15(5628);
const TextAreaCta = ChatInputConstants.TextAreaCta;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const memoResult = react.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  let intl4;
  let stringResult;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  guildId = guildId.guildId;
  const tmp = closure_7();
  const tmp2 = guildId;
  let obj = guildId(7009);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (tmp2(5079).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    tmp8 = AssetRegistryDefault;
    const intl3 = tmp2(1112).intl;
    stringResult = intl3.string(tmp2(1112).t.lk30cY);
    class I {
      constructor() {
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
        obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = MemberVerificationAlertActionCreators;
        const obj4 = { guildId, canWithdraw: false };
        const result = obj3.openMemberVerificationRejectedAlert(obj4);
      }
    }
  } else if (tmp2(5079).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = AssetRegistryDefault2;
    tmp7 = jsx(tmp2(7247).XSmallIcon, {});
    const intl2 = tmp2(1112).intl;
    class I {
      constructor() {
        let intl;
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
        obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = { guildId, subtitleText: intl.string(intl5.t["13tjTU"]) };
        const openMemberVerificationCancelPendingAlert = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
        MemberVerificationAlertActionCreators;
        intl = intl5.intl;
        const result = openMemberVerificationCancelPendingAlert(obj3);
      }
    }
    stringResult = tmp11(tmp2(1112).t["5iLvSx"]);
  } else {
    let intl = tmp2(1112).intl;
    stringResult = intl.string(tmp2(1112).t.rEBKvg);
    class I {
      constructor() {
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
        obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = MemberVerificationModalActionCreators;
        const result = obj3.openMemberVerificationModal(guildId);
      }
    }
  }
  const items = [AccessibilityStore];
  const tmp2Result = tmp2(504);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp14 = jsx;
  const tmp16 = ChatInputGuardDefault;
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    class I {
      constructor() {
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
        obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = MemberVerificationModalActionCreators;
        const result = obj3.openMemberVerificationModal(guildId);
      }
    }
  } else {
    let obj3 = { style: tmp.lottieAnimation, source: null, autoPlay: !stateFromStores };
    LottieAnimationViewDefault;
    class I {
      constructor() {
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
        obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = MemberVerificationModalActionCreators;
        const result = obj3.openMemberVerificationModal(guildId);
      }
    }
  }
  let obj4 = { type: "simple-action", icon: tmp18, message: stringResult, actionIcon: tmp7, actionLabel: intl4.string(tmp2(1112).t["r8/DT+"]), actionOnPress: I };
  intl4 = tmp2(1112).intl;
  return tmp14(tmp16, obj4);
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
