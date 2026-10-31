// Module ID: 14014
// Function ID: 14015
// Name: ChatInputGuardGuildMemberVerification
// Dependencies: [19, 5015, 12806, 1072, 21, 5014, 6920, 5048, 14015, 1113, 5760, 6908, 14016, 7054, 6944, 504, 14006, 5717, 5618, 14017, 2]

// Module 14014 (ChatInputGuardGuildMemberVerification)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5760 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6908 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6944 */;
import ChatInputConstants from "ChatInputConstants" /* 12806 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 14006 */;
import AssetRegistryDefault from "AssetRegistry" /* 14015 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14016 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let tmp15;
const LottieAnimationViewDefault = tmp15(5618);
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
  let obj = guildId(6920);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (tmp2(5048).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    tmp8 = AssetRegistryDefault;
    const intl3 = tmp2(1113).intl;
    stringResult = intl3.string(tmp2(1113).t.lk30cY);
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
  } else if (tmp2(5048).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = AssetRegistryDefault2;
    tmp7 = jsx(tmp2(7054).XSmallIcon, {});
    const intl2 = tmp2(1113).intl;
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
    stringResult = tmp11(tmp2(1113).t["5iLvSx"]);
  } else {
    let intl = tmp2(1113).intl;
    stringResult = intl.string(tmp2(1113).t.rEBKvg);
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
  let obj4 = { type: "simple-action", icon: tmp18, message: stringResult, actionIcon: tmp7, actionLabel: intl4.string(tmp2(1113).t["r8/DT+"]), actionOnPress: I };
  intl4 = tmp2(1113).intl;
  return tmp14(tmp16, obj4);
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
