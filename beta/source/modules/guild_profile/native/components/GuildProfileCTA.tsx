// Module ID: 9223
// Function ID: 9224
// Name: GuildProfileCTA
// Dependencies: [19, 4817, 1074, 1084, 21, 9224, 9226, 4800, 6760, 7826, 9230, 9237, 4658, 5839, 5862, 5881, 6759, 5281, 1115, 2]
// Exports: default

// Module 9223 (GuildProfileCTA)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildProfileTypes from "GuildProfileTypes" /* 5862 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5881 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 6759 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import handleNSFWGuildInvite from "handleNSFWGuildInvite" /* 9230 */;
import noop from "module_19" /* 19 */;
import InviteStore from "InviteStore" /* 4817 */;

require = fn;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const constants = fn(1084).ProfileCustomizationScrollPositions;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default function GuildProfileCTA(profile) {
  profile = profile.profile;
  let guildId;
  let validInviteKey;
  ({ context, inviteKey } = profile);
  let tmp2 = guildId(validInviteKey[5])(profile, context, inviteKey);
  guildId = tmp2.guildId;
  validInviteKey = tmp2.validInviteKey;
  const ctaType = tmp2.ctaType;
  noop = guildId(validInviteKey[6])({ scrollPosition: constants.GUILD_TAG });
  const items = [guildId];
  const items1 = [guildId, validInviteKey];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    transitionToGuild.transitionToGuild(guildId);
  }, items);
  const callback1 = noop.useCallback(() => {
    if (null != validInviteKey) {
      function join() {
        const result = guildId(validInviteKey[9]).acceptInviteAndTransitionToInviteChannel({ inviteKey, context: { location: "guild_profile" } });
      }
      const _HermesInternal = HermesInternal;
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const inviteKey = tmp;
      const tmp3 = importDefault;
      const obj = { onConfirm: join };
      if (!obj4.handleNSFWGuildInvite(InviteStore.getInvite(tmp), obj)) {
        const obj2 = { inviteKey: tmp, context: { location: "guild_profile" } };
        let result = tmp3(7826).acceptInviteAndTransitionToInviteChannel(obj2);
        const tmp3Result = tmp3(7826);
      }
      obj4 = handleNSFWGuildInvite;
    }
  }, items1);
  const tmp5 = guildId(validInviteKey[11])(guildId);
  const items2 = [guildId, ];
  let applicationStatus;
  if (tmp5 != null) {
    applicationStatus = tmp5.applicationStatus;
  }
  items2[1] = applicationStatus;
  const items3 = [guildId, callback1, profile.visibility, validInviteKey];
  const callback2 = noop.useCallback(() => {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const result = tmp2(5839).openMemberVerificationPendingAlert(guildId);
      const tmp2Result = tmp2(5839);
    } else if (tmp2(4658).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj = { guildId, canWithdraw: true };
      const result1 = tmp2(5839).openMemberVerificationRejectedAlert(obj);
      const tmp2Result3 = tmp2(5839);
    } else if (tmp2(4658).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
      const result2 = tmp2(5839).openMemberVerificationIncompleteAlert(guildId);
      const tmp2Result4 = tmp2(5839);
    }
  }, items2);
  const items4 = [guildId];
  const callback3 = obj2.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
      if (null != validInviteKey) {
        callback1();
      }
    }
    const tmp2 = guildId;
    const result = MemberVerificationModalActionCreators.openMemberVerificationModal(tmp2);
  }, items3);
  const callback4 = obj2.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    GuildDiscoveryUtils.startLurking(guildId, { object: AnalyticsObjects.GUILD_PROFILE });
  }, items4);
  const memo = obj2.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
  if (profile(validInviteKey[5]).CTATypes.IS_MEMBER === ctaType) {
    let obj3 = {};
    const merged = Object.assign(memo);
    obj3.onPress = callback;
    const intl7 = tmp11(tmp[18]).intl;
    obj3.text = intl7.string(tmp11(tmp[18]).t.KLOhbO);
    return jsx(tmp11(tmp[17]).Button, {});
  } else if (tmp11(tmp[5]).CTATypes.ADOPT_TAG === ctaType) {
    let obj4 = {};
    const merged1 = Object.assign(memo);
    obj4.onPress = function handleGoToTagSettings() {
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      closure_3();
    };
    const intl6 = tmp11(tmp[18]).intl;
    obj4.text = intl6.string(tmp11(tmp[18]).t.cQDYRu);
    return jsx(tmp11(tmp[17]).Button, {});
  } else if (tmp11(tmp[5]).CTATypes.HAS_APPLICATION === ctaType) {
    const obj5 = {};
    const merged2 = Object.assign(memo);
    obj5.onPress = callback2;
    const intl5 = tmp11(tmp[18]).intl;
    obj5.text = intl5.string(tmp11(tmp[18]).t["4yfIDk"]);
    return jsx(tmp11(tmp[17]).Button, {});
  } else if (tmp11(tmp[5]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const obj6 = {};
    const merged3 = Object.assign(memo);
    obj6.onPress = callback3;
    const intl4 = tmp11(tmp[18]).intl;
    obj6.text = intl4.string(tmp11(tmp[18]).t["7XdMW2"]);
    return jsx(tmp11(tmp[17]).Button, {});
  } else if (tmp11(tmp[5]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const obj7 = {};
    const merged4 = Object.assign(memo);
    obj7.onPress = callback4;
    const intl3 = tmp11(tmp[18]).intl;
    obj7.text = intl3.string(tmp11(tmp[18]).t.XpeFYr);
    return jsx(tmp11(tmp[17]).Button, {});
  } else if (tmp11(tmp[5]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const obj8 = {};
    const merged5 = Object.assign(memo);
    obj8.onPress = callback1;
    const intl2 = tmp11(tmp[18]).intl;
    obj8.text = intl2.string(tmp11(tmp[18]).t.XpeFYr);
    return jsx(tmp11(tmp[17]).Button, {});
  } else if (tmp11(tmp[5]).CTATypes.ACCEPT_ROLES === ctaType) {
    const obj9 = {};
    const merged6 = Object.assign(memo);
    obj9.onPress = callback1;
    const intl = tmp11(tmp[18]).intl;
    obj9.text = intl.string(tmp11(tmp[18]).t.MMlhsr);
    return jsx(tmp11(tmp[17]).Button, {});
  } else {
    return null;
  }
  let obj = { scrollPosition: constants.GUILD_TAG };
};
