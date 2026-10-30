// Module ID: 13979
// Function ID: 13980
// Name: ChatInputGuardGuildMemberVerification
// Dependencies: [19, 5010, 12771, 1072, 21, 5009, 6914, 5043, 13980, 1114, 5755, 6902, 13981, 7048, 6938, 504, 13971, 5712, 5613, 13982, 2]

// Module 13979 (ChatInputGuardGuildMemberVerification)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6902 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6938 */;
import ChatInputConstants from "ChatInputConstants" /* 12771 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13971 */;
import AssetRegistryDefault from "AssetRegistry" /* 13980 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13981 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let tmp15;
const LottieAnimationViewDefault = tmp15(5613);
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
  let obj = guildId(6914);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (tmp2(5043).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    tmp8 = AssetRegistryDefault;
    const intl3 = tmp2(1114).intl;
    stringResult = intl3.string(tmp2(1114).t.lk30cY);
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
  } else if (tmp2(5043).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = AssetRegistryDefault2;
    tmp7 = jsx(tmp2(7048).XSmallIcon, {});
    const intl2 = tmp2(1114).intl;
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
    stringResult = tmp11(tmp2(1114).t["5iLvSx"]);
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.rEBKvg);
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
  let obj4 = { type: "simple-action", icon: tmp18, message: stringResult, actionIcon: tmp7, actionLabel: intl4.string(tmp2(1114).t["r8/DT+"]), actionOnPress: I };
  intl4 = tmp2(1114).intl;
  return tmp14(tmp16, obj4);
});
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
