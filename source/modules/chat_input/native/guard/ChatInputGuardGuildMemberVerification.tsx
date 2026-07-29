// Module ID: 11548
// Function ID: 11549
// Dependencies: [19, 17, 4181, 11155, 676, 21, 4189, 9158, 4009, 11549, 1236, 4384, 9148, 11550, 5175, 9141, 589, 11540, 5506, 11551, 2]

// Module 11548
import { Image } from "ChatInputGuard";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { TextAreaCta } from "TextAreaCta";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "module_11551";

const require = arg1;
let closure_8 = createCacheKey.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const memoResult = require("module_11551").memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = callback();
  let obj = guildId(9158);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4009).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = importDefault(11549);
    const intl3 = tmp2(1236).intl;
    let stringResult = intl3.string(tmp2(1236).t.lk30cY);
    let fn = function _() {
      let obj = outer1_1(outer1_2[11]);
      obj = { cta_type: outer1_5.MEMBER_VERIFICATION_REJECTED };
      obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, canWithdraw: false };
      const result = guildId(outer1_2[12]).openMemberVerificationRejectedAlert(obj);
    };
  } else if (tmp2(4009).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = importDefault(11550);
    const intl2 = tmp2(1236).intl;
    stringResult = intl2.string(tmp2(1236).t["5iLvSx"]);
    fn = function _() {
      let obj = outer1_1(outer1_2[11]);
      obj = { cta_type: outer1_5.MEMBER_VERIFICATION_CONFIRMED };
      obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, subtitleText: null };
      const intl = guildId(outer1_2[10]).intl;
      obj[1] = intl.string(guildId(outer1_2[10]).t["13tjTU"]);
      const result = guildId(outer1_2[12]).openMemberVerificationCancelPendingAlert(obj);
    };
    const tmp7 = jsx(tmp2(5175).XSmallIcon, {});
  } else {
    let intl = tmp2(1236).intl;
    stringResult = intl.string(tmp2(1236).t.rEBKvg);
    fn = function _() {
      let obj = outer1_1(outer1_2[11]);
      obj = { cta_type: outer1_5.MEMBER_VERIFICATION };
      obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
      const result = guildId(outer1_2[15]).openMemberVerificationModal(guildId);
    };
  }
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = guildId(589).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp14 = importDefault;
  const tmp2Result = guildId(589);
  if (null != tmp8) {
    obj = { style: null, source: null };
    obj[0] = tmp.noticeIcon;
    obj[1] = tmp8;
    let tmp13Result = tmp13(Image, obj);
  } else {
    obj = { style: null, source: null, autoPlay: null };
    obj[0] = tmp.lottieAnimation;
    obj[1] = tmp2(11551);
    obj[2] = !stateFromStores;
    tmp13Result = tmp13(tmp14(5506), obj);
    const tmp14Result = tmp14(5506);
  }
  const obj1 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1236).intl;
  obj1[4] = intl4.string(guildId(1236).t["r8/DT+"]);
  obj1[5] = fn;
  return jsx(importDefault(11540), { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
