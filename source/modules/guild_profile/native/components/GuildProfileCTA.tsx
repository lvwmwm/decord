// Module ID: 11912
// Function ID: 92208
// Name: GuildProfileCTA
// Dependencies: [31, 653, 662, 33, 10969, 9814, 4098, 5737, 7540, 11913, 3950, 9188, 5131, 9181, 5736, 11501, 4543, 1212, 2]
// Exports: default

// Module 11912 (GuildProfileCTA)
import result from "result";
import ME from "ME";
import { ProfileCustomizationScrollPositions as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ AnalyticsObjects: closure_4, JoinGuildSources: closure_5 } = ME);
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default function GuildProfileCTA(profile) {
  let context;
  let inviteKey;
  profile = profile.profile;
  let flag = profile.isLurkerServerPreview;
  ({ context, inviteKey } = profile);
  if (flag === undefined) {
    flag = false;
  }
  let guildId;
  let validInviteKey;
  let React;
  let callback1;
  let constants;
  const tmp = guildId(validInviteKey[4])(profile, context, inviteKey);
  guildId = tmp.guildId;
  validInviteKey = tmp.validInviteKey;
  const ctaType = tmp.ctaType;
  let obj = { scrollPosition: constants2.GUILD_TAG };
  React = guildId(validInviteKey[5])(obj);
  const items = [guildId];
  const items1 = [guildId, validInviteKey];
  const callback = React.useCallback(() => {
    guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
    const obj = guildId(validInviteKey[6]);
    profile(validInviteKey[7]).transitionToGuild(guildId);
  }, items);
  callback1 = React.useCallback(() => {
    if (null != validInviteKey) {
      let obj = guildId(validInviteKey[6]);
      const _HermesInternal = HermesInternal;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      obj = { inviteKey: validInviteKey };
      obj = { location: "guild_profile" };
      obj.context = obj;
      const result = guildId(validInviteKey[8]).acceptInviteAndTransitionToInviteChannel(obj);
      const obj2 = guildId(validInviteKey[8]);
    }
  }, items1);
  const tmp5 = guildId(validInviteKey[9])(guildId);
  constants = tmp5;
  const items2 = [guildId, ];
  let applicationStatus;
  if (null != tmp5) {
    applicationStatus = tmp5.applicationStatus;
  }
  items2[1] = applicationStatus;
  const items3 = [guildId, callback1, profile.visibility, validInviteKey];
  const callback2 = React.useCallback(() => {
    let applicationStatus;
    if (null != _undefined) {
      applicationStatus = _undefined.applicationStatus;
    }
    if (profile(validInviteKey[10]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const result = profile(validInviteKey[11]).openMemberVerificationPendingAlert(guildId);
      const obj3 = profile(validInviteKey[11]);
    } else if (profile(validInviteKey[10]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      let obj = profile(validInviteKey[11]);
      obj = { guildId, canWithdraw: true };
      const result1 = obj.openMemberVerificationRejectedAlert(obj);
    } else if (profile(validInviteKey[10]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
      const result2 = profile(validInviteKey[11]).openMemberVerificationIncompleteAlert(guildId);
      const obj4 = profile(validInviteKey[11]);
    }
  }, items2);
  const items4 = [guildId];
  const callback3 = React.useCallback(() => {
    guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
    if (profile.visibility !== profile(validInviteKey[12]).GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
      if (null != validInviteKey) {
        callback1();
      }
    }
    const obj = guildId(validInviteKey[6]);
    const result = profile(validInviteKey[13]).openMemberVerificationModal(guildId);
  }, items3);
  const callback4 = React.useCallback(() => {
    let obj = guildId(validInviteKey[6]);
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    obj = { object: callback1.GUILD_PROFILE };
    profile(validInviteKey[14]).startLurking(guildId, obj);
  }, items4);
  const memo = React.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
  if (flag) {
    obj = { guildId, joinSource: constants.GUILD_PROFILE_LURKER };
    return jsx(guildId(validInviteKey[15]), { guildId, joinSource: constants.GUILD_PROFILE_LURKER });
  } else if (profile(validInviteKey[4]).CTATypes.IS_MEMBER === ctaType) {
    obj = {};
    const merged = Object.assign(memo);
    obj["onPress"] = callback;
    const intl7 = profile(validInviteKey[17]).intl;
    obj["text"] = intl7.string(profile(validInviteKey[17]).t.KLOhbO);
    return jsx(profile(validInviteKey[16]).Button, {});
  } else if (profile(validInviteKey[4]).CTATypes.ADOPT_TAG === ctaType) {
    const obj1 = {};
    const merged1 = Object.assign(memo);
    obj1["onPress"] = function handleGoToTagSettings() {
      guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
      callback();
    };
    const intl6 = profile(validInviteKey[17]).intl;
    obj1["text"] = intl6.string(profile(validInviteKey[17]).t.cQDYRu);
    return jsx(profile(validInviteKey[16]).Button, {});
  } else if (profile(validInviteKey[4]).CTATypes.HAS_APPLICATION === ctaType) {
    let obj2 = {};
    const merged2 = Object.assign(memo);
    obj2["onPress"] = callback2;
    const intl5 = profile(validInviteKey[17]).intl;
    obj2["text"] = intl5.string(profile(validInviteKey[17]).t["4yfIDk"]);
    return jsx(profile(validInviteKey[16]).Button, {});
  } else if (profile(validInviteKey[4]).CTATypes.APPLY_TO_JOIN === ctaType) {
    let obj3 = {};
    const merged3 = Object.assign(memo);
    obj3["onPress"] = callback3;
    const intl4 = profile(validInviteKey[17]).intl;
    obj3["text"] = intl4.string(profile(validInviteKey[17]).t["7XdMW2"]);
    return jsx(profile(validInviteKey[16]).Button, {});
  } else if (profile(validInviteKey[4]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    let obj4 = {};
    const merged4 = Object.assign(memo);
    obj4["onPress"] = callback4;
    const intl3 = profile(validInviteKey[17]).intl;
    obj4["text"] = intl3.string(profile(validInviteKey[17]).t.XpeFYr);
    return jsx(profile(validInviteKey[16]).Button, {});
  } else if (profile(validInviteKey[4]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const obj5 = {};
    const merged5 = Object.assign(memo);
    obj5["onPress"] = callback1;
    const intl2 = profile(validInviteKey[17]).intl;
    obj5["text"] = intl2.string(profile(validInviteKey[17]).t.XpeFYr);
    return jsx(profile(validInviteKey[16]).Button, {});
  } else if (profile(validInviteKey[4]).CTATypes.ACCEPT_ROLES === ctaType) {
    const obj6 = {};
    const merged6 = Object.assign(memo);
    obj6["onPress"] = callback1;
    const intl = profile(validInviteKey[17]).intl;
    obj6["text"] = intl.string(profile(validInviteKey[17]).t.MMlhsr);
    return jsx(profile(validInviteKey[16]).Button, {});
  } else {
    return null;
  }
};
