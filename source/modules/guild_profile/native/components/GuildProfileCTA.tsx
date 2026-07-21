// Module ID: 11872
// Function ID: 91891
// Name: GuildProfileCTA
// Dependencies: []
// Exports: default

// Module 11872 (GuildProfileCTA)
let closure_3 = importAll(dependencyMap[0]);
({ AnalyticsObjects: closure_4, JoinGuildSources: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = arg1(dependencyMap[2]).ProfileCustomizationScrollPositions;
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default function GuildProfileCTA(profile) {
  let context;
  let inviteKey;
  profile = profile.profile;
  const arg1 = profile;
  let flag = profile.isLurkerServerPreview;
  ({ context, inviteKey } = profile);
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let dependencyMap;
  let React;
  let callback1;
  let tmp5;
  const tmp = importDefault(dependencyMap[4])(profile, context, inviteKey);
  const guildId = tmp.guildId;
  importDefault = guildId;
  const validInviteKey = tmp.validInviteKey;
  dependencyMap = validInviteKey;
  const ctaType = tmp.ctaType;
  let obj = { scrollPosition: constants.GUILD_TAG };
  React = importDefault(dependencyMap[5])(obj);
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
  tmp5 = importDefault(dependencyMap[9])(guildId);
  const items2 = [guildId, ];
  let applicationStatus;
  if (null != tmp5) {
    applicationStatus = tmp5.applicationStatus;
  }
  items2[1] = applicationStatus;
  const items3 = [guildId, callback1, profile.visibility, validInviteKey];
  const callback2 = React.useCallback(() => {
    let applicationStatus;
    if (null != tmp5) {
      applicationStatus = tmp5.applicationStatus;
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
  const memo = React.useMemo(() => ({}), []);
  if (flag) {
    obj = { guildId, joinSource: tmp5.GUILD_PROFILE_LURKER };
    return jsx(importDefault(dependencyMap[15]), obj);
  } else if (arg1(dependencyMap[4]).CTATypes.IS_MEMBER === ctaType) {
    obj = {};
    const merged = Object.assign(memo);
    obj["onPress"] = callback;
    const intl7 = arg1(dependencyMap[17]).intl;
    obj["text"] = intl7.string(arg1(dependencyMap[17]).t.KLOhbO);
    return jsx(arg1(dependencyMap[16]).Button, obj);
  } else if (arg1(dependencyMap[4]).CTATypes.ADOPT_TAG === ctaType) {
    const obj1 = {};
    const merged1 = Object.assign(memo);
    obj1["onPress"] = function handleGoToTagSettings() {
      guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
      callback();
    };
    const intl6 = arg1(dependencyMap[17]).intl;
    obj1["text"] = intl6.string(arg1(dependencyMap[17]).t.cQDYRu);
    return jsx(arg1(dependencyMap[16]).Button, obj1);
  } else if (arg1(dependencyMap[4]).CTATypes.HAS_APPLICATION === ctaType) {
    const obj2 = {};
    const merged2 = Object.assign(memo);
    obj2["onPress"] = callback2;
    const intl5 = arg1(dependencyMap[17]).intl;
    obj2["text"] = intl5.string(arg1(dependencyMap[17]).t.4yfIDk);
    return jsx(arg1(dependencyMap[16]).Button, obj2);
  } else if (arg1(dependencyMap[4]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const obj3 = {};
    const merged3 = Object.assign(memo);
    obj3["onPress"] = callback3;
    const intl4 = arg1(dependencyMap[17]).intl;
    obj3["text"] = intl4.string(arg1(dependencyMap[17]).t.7XdMW2);
    return jsx(arg1(dependencyMap[16]).Button, obj3);
  } else if (arg1(dependencyMap[4]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const obj4 = {};
    const merged4 = Object.assign(memo);
    obj4["onPress"] = callback4;
    const intl3 = arg1(dependencyMap[17]).intl;
    obj4["text"] = intl3.string(arg1(dependencyMap[17]).t.XpeFYr);
    return jsx(arg1(dependencyMap[16]).Button, obj4);
  } else if (arg1(dependencyMap[4]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const obj5 = {};
    const merged5 = Object.assign(memo);
    obj5["onPress"] = callback1;
    const intl2 = arg1(dependencyMap[17]).intl;
    obj5["text"] = intl2.string(arg1(dependencyMap[17]).t.XpeFYr);
    return jsx(arg1(dependencyMap[16]).Button, obj5);
  } else if (arg1(dependencyMap[4]).CTATypes.ACCEPT_ROLES === ctaType) {
    const obj6 = {};
    const merged6 = Object.assign(memo);
    obj6["onPress"] = callback1;
    const intl = arg1(dependencyMap[17]).intl;
    obj6["text"] = intl.string(arg1(dependencyMap[17]).t.MMlhsr);
    return jsx(arg1(dependencyMap[16]).Button, obj6);
  } else {
    return null;
  }
};
