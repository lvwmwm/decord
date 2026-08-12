// Module ID: 11877
// Function ID: 11878
// Dependencies: [19, 17, 4336, 11428, 676, 21, 4344, 8474, 4170, 11878, 1236, 4538, 8464, 11879, 5365, 8457, 589, 11869, 5758, 11880, 2]

// Module 11877
import { Image } from "ChatInputGuard";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { TextAreaCta } from "TextAreaCta";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "module_11880";

const require = arg1;
let closure_8 = createCacheKey.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const memoResult = require("module_11880").memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = callback();
  let obj = guildId(8474);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4170).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = importDefault(11878);
    const intl3 = tmp2(1236).intl;
    let stringResult = intl3.string(tmp2(1236).t.lk30cY);
    let fn = function _() {
      let obj = outer1_1(outer1_2[11]);
      obj = { cta_type: outer1_5.MEMBER_VERIFICATION_REJECTED };
      obj.trackWithMetadata(outer1_6.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, canWithdraw: false };
      const result = guildId(outer1_2[12]).openMemberVerificationRejectedAlert(obj);
    };
  } else if (tmp2(4170).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = importDefault(11879);
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
    const tmp7 = jsx(tmp2(5365).XSmallIcon, {});
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
    obj[1] = tmp2(11880);
    obj[2] = !stateFromStores;
    tmp13Result = tmp13(tmp14(5758), obj);
    const tmp14Result = tmp14(5758);
  }
  const obj1 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1236).intl;
  obj1[4] = intl4.string(guildId(1236).t["r8/DT+"]);
  obj1[5] = fn;
  return jsx(importDefault(11869), { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
