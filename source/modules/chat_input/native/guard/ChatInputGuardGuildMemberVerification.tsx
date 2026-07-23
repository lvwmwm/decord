// Module ID: 11489
// Function ID: 89449
// Dependencies: [31, 27, 4122, 11105, 653, 33, 4130, 9162, 3950, 11490, 1212, 4324, 9152, 11491, 5119, 9145, 566, 11481, 5453, 11492, 2]

// Module 11489
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { TextAreaCta } from "TextAreaCta";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const memoResult = require("result").memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = callback();
  let obj = guildId(9162);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (null != currentUserGuildJoinRequest) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(3950).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp7 = importDefault(11490);
    const intl2 = guildId(1212).intl;
    let stringResult = intl2.string(guildId(1212).t.lk30cY);
    class A {
      constructor() {
        obj = outer1_1(outer1_2[11]);
        obj = { cta_type: outer1_5.MEMBER_VERIFICATION_REJECTED };
        trackWithMetadataResult = obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(outer1_2[12]);
        obj1 = { guildId, canWithdraw: false };
        result = obj3.openMemberVerificationRejectedAlert(obj1);
        return;
      }
    }
  } else if (guildId(3950).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp7 = importDefault(11491);
    class A {
      constructor() {
        obj = outer1_1(outer1_2[11]);
        obj = { cta_type: outer1_5.MEMBER_VERIFICATION_CONFIRMED };
        trackWithMetadataResult = obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(outer1_2[12]);
        obj1 = { guildId };
        intl = guildId(outer1_2[10]).intl;
        obj1.subtitleText = intl.string(guildId(outer1_2[10]).t["13tjTU"]);
        result = obj3.openMemberVerificationCancelPendingAlert(obj1);
        return;
      }
    }
    stringResult = obj1.string(guildId(1212).t["5iLvSx"]);
    const tmp8 = jsx(guildId(5119).XSmallIcon, {});
  } else {
    let intl = guildId(1212).intl;
    stringResult = intl.string(guildId(1212).t.rEBKvg);
    class A {
      constructor() {
        obj = outer1_1(outer1_2[11]);
        obj = { cta_type: outer1_5.MEMBER_VERIFICATION };
        trackWithMetadataResult = obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(outer1_2[15]);
        result = obj3.openMemberVerificationModal(guildId);
        return;
      }
    }
  }
  const items = [_isNativeReflectConstruct];
  const stateFromStores = guildId(566).useStateFromStores(items, () => outer1_4.useReducedMotion);
  obj = { type: "simple-action" };
  const obj3 = guildId(566);
  const tmp17 = jsx;
  if (null != tmp7) {
    obj = { style: tmp.noticeIcon, source: tmp7 };
    let tmp23 = <Image style={tmp.noticeIcon} source={tmp7} />;
  } else {
    obj1 = { style: tmp.lottieAnimation };
    class A {
      constructor() {
        obj = outer1_1(outer1_2[11]);
        obj = { cta_type: outer1_5.MEMBER_VERIFICATION };
        trackWithMetadataResult = obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
        obj3 = guildId(outer1_2[15]);
        result = obj3.openMemberVerificationModal(guildId);
        return;
      }
    }
    obj1.autoPlay = !stateFromStores;
    tmp23 = jsx(importDefault(5453), { style: tmp.lottieAnimation });
    const tmp22 = importDefault(5453);
  }
  obj.icon = tmp23;
  obj.message = stringResult;
  obj.actionIcon = tmp8;
  const intl3 = guildId(1212).intl;
  obj.actionLabel = intl3.string(guildId(1212).t["r8/DT+"]);
  obj.actionOnPress = A;
  return tmp17(importDefault(11481), obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
