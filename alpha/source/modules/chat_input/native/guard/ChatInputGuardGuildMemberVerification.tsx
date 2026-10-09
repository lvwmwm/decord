// Module ID: 12145
// Function ID: 12146
// Name: ChatInputGuardGuildMemberVerification
// Dependencies: [19, 5080, 11588, 1085, 21, 5091, 558, 576, 6127, 4903, 12146, 1126, 5106, 6109, 12147, 6212, 6151, 504, 6112, 12148, 6163, 12122, 2]

// Module 12145 (ChatInputGuardGuildMemberVerification)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5106 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6109 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6112 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6151 */;
import ChatInputConstants from "ChatInputConstants" /* 11588 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12122 */;
import AssetRegistryDefault from "AssetRegistry" /* 12146 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12147 */;
import _mod12148 from "module_12148" /* 12148 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const TextAreaCta = ChatInputConstants.TextAreaCta;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardGuildMemberVerification(guildId) {
  let lottieAnimation;
  let obj3;
  let renderAnimation;
  let stateFromStores;
  let tmp11;
  let tmp27;
  let tmp28;
  let useReducedMotion;
  const tmp = guildId;
  const tmp2 = stateFromStores;
  let obj = guildId(stateFromStores[7]);
  const cResult = obj.c(25);
  guildId = guildId.guildId;
  const tmp4 = closure_7();
  importDefault = tmp4;
  let obj2 = guildId(stateFromStores[8]);
  const currentUserGuildJoinRequest = obj2.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (tmp(tmp2[9]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const _Symbol3 = Symbol;
    const tmp22 = require("AssetRegistry");
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[11]).intl;
      const stringResult = intl2.string(tmp(tmp2[11]).t.lk30cY);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== guildId) {
      const fn = function b() {
        const obj = AppAnalyticsUtilsDefault;
        const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
        obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
        const obj3 = MemberVerificationAlertActionCreators;
        const obj4 = { guildId, canWithdraw: false };
        const result = obj3.openMemberVerificationRejectedAlert(obj4);
      };
      cResult[1] = guildId;
      cResult[2] = fn;
    }
    tmp11 = tmp22;
  } else if (tmp(tmp2[9]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    const _Symbol = Symbol;
    const tmp13 = require("AssetRegistry");
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = jsx(tmp(tmp2[15]).XSmallIcon, {});
      cResult[3] = tmp17;
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(tmp2[11]).intl;
      const stringResult1 = intl.string(tmp(tmp2[11]).t["5iLvSx"]);
      cResult[4] = stringResult1;
    }
    if (cResult[5] !== guildId) {
      class S {
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
      cResult[5] = guildId;
      cResult[6] = S;
    } else {
      class S {
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
    }
    tmp11 = tmp13;
  } else {
    class S {
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
    const _Symbol4 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
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
      cResult[7] = obj3.string(tmp(tmp2[11]).t.rEBKvg);
      const stringResult2 = obj3.string(tmp(tmp2[11]).t.rEBKvg);
    } else {
      class S {
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
    }
    if (cResult[8] !== guildId) {
      class S {
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
      cResult[8] = guildId;
      cResult[9] = D;
    } else {
      class S {
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
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
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
    const items = [AccessibilityStore];
    class A {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[10] = items;
    cResult[11] = A;
    tmp28 = A;
    tmp27 = items;
  } else {
    class S {
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
    tmp28 = cResult[11];
  }
  const tmpResult = tmp(tmp2[17]);
  stateFromStores = tmpResult.useStateFromStores(tmp27, tmp28);
  if (cResult[12] === tmp4.lottieAnimation) {
    let tmp31;
    class S {
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
    if (cResult[15] === tmp11) {
      class S {
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
    }
    if (null != tmp11) {
      class S {
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
      class A {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      tmp31 = jsx(require("FastImage"), { style: null, source: tmp11 });
    } else {
      class S {
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
    }
    class A {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[15] = tmp11;
    cResult[16] = renderAnimation;
    cResult[17] = tmp4.noticeIcon;
    cResult[18] = tmp31;
  }
  renderAnimation = function renderAnimation() {
    LottieAnimationViewDefault;
    return <tmp style={lottieAnimation.lottieAnimation} source={_mod12148} autoPlay={!stateFromStores} />;
  };
  cResult[12] = tmp4.lottieAnimation;
  cResult[13] = stateFromStores;
  cResult[14] = renderAnimation;
}) : (function ChatInputGuardGuildMemberVerification(guildId) {
  let fn;
  let stringResult;
  let tmp13Result;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  guildId = guildId.guildId;
  const tmp = closure_7();
  const tmp2 = guildId;
  let obj = guildId(6127);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (tmp2(4903).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    tmp8 = AssetRegistryDefault;
    const intl3 = tmp2(1126).intl;
    stringResult = intl3.string(tmp2(1126).t.lk30cY);
    fn = function _() {
      const obj = AppAnalyticsUtilsDefault;
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
      const obj3 = MemberVerificationAlertActionCreators;
      const obj4 = { guildId, canWithdraw: false };
      const result = obj3.openMemberVerificationRejectedAlert(obj4);
    };
  } else if (tmp2(4903).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = AssetRegistryDefault2;
    tmp7 = jsx(tmp2(6212).XSmallIcon, {});
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t["5iLvSx"]);
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
    let intl = tmp2(1126).intl;
    stringResult = intl.string(tmp2(1126).t.rEBKvg);
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
    tmp13Result = tmp13(tmp14(6163), obj2);
  } else {
    let obj3 = { style: tmp.lottieAnimation, source: tmp2(12148), autoPlay: !stateFromStores };
    const tmp14Result = LottieAnimationViewDefault;
    tmp13Result = tmp13(tmp14Result, obj3);
  }
  const intl4 = tmp2(1126).intl;
  return <tmp15 type="simple-action" icon={tmp13Result} message={stringResult} actionIcon={tmp7} actionLabel={intl4.string(tmp2(1126).t["r8/DT+"])} actionOnPress={fn} />;
}));
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
