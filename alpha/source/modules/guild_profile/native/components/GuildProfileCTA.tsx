// Module ID: 14733
// Function ID: 14734
// Name: GuildProfileCTA
// Dependencies: [19, 5749, 1072, 1082, 21, 13202, 11517, 5258, 7522, 8946, 10128, 14734, 5048, 6908, 6925, 6944, 7521, 6906, 5634, 1113, 2]
// Exports: default

// Module 14733 (GuildProfileCTA)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5048 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6906 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6908 */;
import GuildProfileTypes from "GuildProfileTypes" /* 6925 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7521 */;
import transitionToGuild from "transitionToGuild" /* 7522 */;
import handleNSFWGuildInvite from "handleNSFWGuildInvite" /* 10128 */;
import react_mod from "react" /* 19 */;
import InviteStore from "InviteStore" /* 5749 */;
import size from "module_2" /* 2 */;

let tmp4;
const MemberVerificationModalActionCreators = tmp4(6944);
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
        const tmp3Result = tmp3(8946);
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
    const startLurkingResult = obj2.startLurking(guildId, obj3);
    startLurkingResult.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
  }, items4);
  const memo = obj2.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
  if (profile(tmp[5]).CTATypes.IS_MEMBER === ctaType) {
    const Button7 = tmp11(tmp[18]).Button;
    const merged = Object.assign(memo);
    const intl7 = tmp11(tmp[19]).intl;
    return <Button7 onPress={callback} text={intl7.string(profile(tmp[19]).t.KLOhbO)} />;
  } else if (profile(tmp[5]).CTATypes.ADOPT_TAG === ctaType) {
    const Button6 = tmp11(tmp[18]).Button;
    const merged1 = Object.assign(memo);
    const intl6 = tmp11(tmp[19]).intl;
    return <Button6 onPress={function handleGoToTagSettings() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      closure_3();
    }} text={intl6.string(profile(tmp[19]).t.cQDYRu)} />;
  } else if (profile(tmp[5]).CTATypes.HAS_APPLICATION === ctaType) {
    const Button5 = tmp11(tmp[18]).Button;
    const merged2 = Object.assign(memo);
    const intl5 = tmp11(tmp[19]).intl;
    return <Button5 onPress={callback2} text={intl5.string(profile(tmp[19]).t["4yfIDk"])} />;
  } else if (profile(tmp[5]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const Button4 = tmp11(tmp[18]).Button;
    const merged3 = Object.assign(memo);
    const intl4 = tmp11(tmp[19]).intl;
    return <Button4 onPress={callback3} text={intl4.string(profile(tmp[19]).t["7XdMW2"])} />;
  } else if (profile(tmp[5]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const Button3 = tmp11(tmp[18]).Button;
    const merged4 = Object.assign(memo);
    const intl3 = tmp11(tmp[19]).intl;
    return <Button3 onPress={callback4} text={intl3.string(profile(tmp[19]).t.XpeFYr)} />;
  } else if (profile(tmp[5]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const Button2 = tmp11(tmp[18]).Button;
    const merged5 = Object.assign(memo);
    const intl2 = tmp11(tmp[19]).intl;
    return <Button2 onPress={callback1} text={intl2.string(profile(tmp[19]).t.XpeFYr)} />;
  } else if (profile(tmp[5]).CTATypes.ACCEPT_ROLES === ctaType) {
    const Button = tmp11(tmp[18]).Button;
    const merged6 = Object.assign(memo);
    const intl = tmp11(tmp[19]).intl;
    return <Button onPress={callback1} text={intl.string(profile(tmp[19]).t.MMlhsr)} />;
  } else {
    return null;
  }
};
