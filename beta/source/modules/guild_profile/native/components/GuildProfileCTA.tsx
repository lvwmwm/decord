// Module ID: 9223
// Function ID: 9224
// Name: GuildProfileCTA
// Dependencies: [19, 4817, 1074, 1084, 21, 9224, 9226, 4800, 6760, 7826, 9230, 9237, 4658, 5839, 5862, 5881, 6759, 5281, 1115, 2]
// Exports: default

// Module 9223 (GuildProfileCTA)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5839 */;
import GuildProfileTypes from "GuildProfileTypes" /* 5862 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 6759 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import handleNSFWGuildInvite from "handleNSFWGuildInvite" /* 9230 */;
import react_mod from "react" /* 19 */;
import InviteStore from "InviteStore" /* 4817 */;
import size from "module_2" /* 2 */;

let tmp4;
const MemberVerificationModalActionCreators = tmp4(5881);
let react = react_mod;
const AnalyticsObjects = Constants.AnalyticsObjects;
const constants = UserSettingsConstants.ProfileCustomizationScrollPositions;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default function GuildProfileCTA(profile) {
  let closure_3;
  let context;
  let inviteKey;
  profile = profile.profile;
  let guildId;
  let validInviteKey;
  const tmp = validInviteKey;
  ({ context, inviteKey } = profile);
  let tmp2 = guildId(validInviteKey[5])(profile, context, inviteKey);
  guildId = tmp2.guildId;
  validInviteKey = tmp2.validInviteKey;
  const ctaType = tmp2.ctaType;
  let obj = { scrollPosition: constants.GUILD_TAG };
  react = guildId(validInviteKey[6])(obj);
  let obj2 = react;
  const items = [guildId];
  const items1 = [guildId, validInviteKey];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    const obj2 = transitionToGuild;
    obj2.transitionToGuild(guildId);
  }, items);
  const callback1 = react.useCallback(() => {
    if (null != validInviteKey) {
      function join() {
        const obj = guildId(validInviteKey[9]);
        const obj2 = { inviteKey, context: { location: "guild_profile" } };
        const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
      }
      const _HermesInternal = HermesInternal;
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
      let closure_0 = tmp;
      let obj = { onConfirm: join };
      const obj4 = handleNSFWGuildInvite;
      const tmp3 = importDefault;
      if (!obj4.handleNSFWGuildInvite(InviteStore.getInvite(validInviteKey), obj)) {
        let obj2 = { inviteKey: validInviteKey, context: { location: "guild_profile" } };
        const tmp3Result = tmp3(7826);
        let result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj2);
      }
    }
  }, items1);
  const tmp5 = guildId(validInviteKey[11])(guildId);
  const items2 = [guildId, ];
  let applicationStatus;
  const useCallback = react.useCallback;
  if (tmp5 != null) {
    applicationStatus = tmp5.applicationStatus;
  }
  items2[1] = applicationStatus;
  const items3 = [guildId, callback1, profile.visibility, validInviteKey];
  const callback2 = useCallback(() => {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const tmp2Result = MemberVerificationAlertActionCreators;
      const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj = { guildId, canWithdraw: true };
      const tmp2Result3 = MemberVerificationAlertActionCreators;
      const result1 = tmp2Result3.openMemberVerificationRejectedAlert(obj);
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
      const tmp2Result4 = MemberVerificationAlertActionCreators;
      const result2 = tmp2Result4.openMemberVerificationIncompleteAlert(guildId);
    }
  }, items2);
  const items4 = [guildId];
  const callback3 = obj2.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    const tmp2 = guildId;
    if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
      if (null != validInviteKey) {
        callback1();
      }
    }
    const tmp4Result = MemberVerificationModalActionCreators;
    const result = tmp4Result.openMemberVerificationModal(tmp2);
  }, items3);
  const callback4 = obj2.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    const obj2 = GuildDiscoveryUtils;
    const obj3 = { object: AnalyticsObjects.GUILD_PROFILE };
    obj2.startLurking(guildId, obj3);
  }, items4);
  const memo = obj2.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
  if (profile(tmp[5]).CTATypes.IS_MEMBER === ctaType) {
    const Button7 = tmp11(tmp[17]).Button;
    const merged = Object.assign(memo);
    const intl7 = tmp11(tmp[18]).intl;
    return <Button7 onPress={callback} text={intl7.string(profile(tmp[18]).t.KLOhbO)} />;
  } else if (profile(tmp[5]).CTATypes.ADOPT_TAG === ctaType) {
    const Button6 = tmp11(tmp[17]).Button;
    const merged1 = Object.assign(memo);
    const intl6 = tmp11(tmp[18]).intl;
    return <Button6 onPress={function handleGoToTagSettings() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      closure_3();
    }} text={intl6.string(profile(tmp[18]).t.cQDYRu)} />;
  } else if (profile(tmp[5]).CTATypes.HAS_APPLICATION === ctaType) {
    const Button5 = tmp11(tmp[17]).Button;
    const merged2 = Object.assign(memo);
    const intl5 = tmp11(tmp[18]).intl;
    return <Button5 onPress={callback2} text={intl5.string(profile(tmp[18]).t["4yfIDk"])} />;
  } else if (profile(tmp[5]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const Button4 = tmp11(tmp[17]).Button;
    const merged3 = Object.assign(memo);
    const intl4 = tmp11(tmp[18]).intl;
    return <Button4 onPress={callback3} text={intl4.string(profile(tmp[18]).t["7XdMW2"])} />;
  } else if (profile(tmp[5]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const Button3 = tmp11(tmp[17]).Button;
    const merged4 = Object.assign(memo);
    const intl3 = tmp11(tmp[18]).intl;
    return <Button3 onPress={callback4} text={intl3.string(profile(tmp[18]).t.XpeFYr)} />;
  } else if (profile(tmp[5]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const Button2 = tmp11(tmp[17]).Button;
    const merged5 = Object.assign(memo);
    const intl2 = tmp11(tmp[18]).intl;
    return <Button2 onPress={callback1} text={intl2.string(profile(tmp[18]).t.XpeFYr)} />;
  } else if (profile(tmp[5]).CTATypes.ACCEPT_ROLES === ctaType) {
    const Button = tmp11(tmp[17]).Button;
    const merged6 = Object.assign(memo);
    const intl = tmp11(tmp[18]).intl;
    return <Button onPress={callback1} text={intl.string(profile(tmp[18]).t.MMlhsr)} />;
  } else {
    return null;
  }
};
