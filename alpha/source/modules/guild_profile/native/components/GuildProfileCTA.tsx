// Module ID: 12969
// Function ID: 12970
// Name: GuildProfileCTA
// Dependencies: [19, 5072, 1085, 1095, 21, 558, 576, 11303, 10606, 5055, 7046, 8480, 9591, 12970, 4903, 6109, 6132, 6151, 7045, 6913, 1126, 5376, 2]

// Module 12969 (GuildProfileCTA)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4903 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6109 */;
import GuildProfileTypes from "GuildProfileTypes" /* 6132 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6913 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7045 */;
import transitionToGuild from "transitionToGuild" /* 7046 */;
import handleNSFWGuildInvite from "handleNSFWGuildInvite" /* 9591 */;
import react_mod from "react" /* 19 */;
import InviteStore_mod from "InviteStore" /* 5072 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hideActionSheetResult, obj1, obj6, str, tmp6, tmp8;

let tmp4;
const MemberVerificationModalActionCreators = tmp4(6151);
let react = react_mod;
let InviteStore = InviteStore_mod;
let AnalyticsObjects = Constants.AnalyticsObjects;
const constants = UserSettingsConstants.ProfileCustomizationScrollPositions;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileCTA(profile) {
  let applicationStatus;
  let closure_4;
  let context;
  let first;
  let guildId;
  let inviteKey;
  let tmp9;
  let validInviteKey;
  const tmp = validInviteKey;
  let obj = profile(validInviteKey[6]);
  const cResult = obj.c(41);
  profile = profile.profile;
  let tmp3 = guildId;
  ({ context, inviteKey } = profile);
  let tmp4 = guildId(validInviteKey[7])(profile, context, inviteKey);
  guildId = tmp4.guildId;
  validInviteKey = tmp4.validInviteKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { scrollPosition: constants.GUILD_TAG };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp7 = tmp3(tmp[8])(first);
  let closure_3 = tmp7;
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        const obj2 = transitionToGuild;
        obj2.transitionToGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        const obj2 = transitionToGuild;
        obj2.transitionToGuild(guildId);
      }
    }
  }
  if (cResult[3] === guildId) {
    class I {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        const obj2 = transitionToGuild;
        obj2.transitionToGuild(guildId);
      }
    }
    if (cResult[6] === guildId) {
      class I {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
          const obj2 = transitionToGuild;
          obj2.transitionToGuild(guildId);
        }
      }
      InviteStore = tmp9;
      class C {
        constructor() {
          tmp = validInviteKey;
          if (null != validInviteKey) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj3 = closure_1(closure_2[9]);
            tmp5 = guildId;
            tmp6 = globalThis;
            _HermesInternal = HermesInternal;
            str = "GuildProfileActionSheet:";
            hideActionSheetResult = obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
            closure_0 = tmp;
            tmp8 = closure_0;
            obj4 = closure_0(closure_2[12]);
            tmp9 = closure_4;
            obj1 = { onConfirm: null };
            obj1.onConfirm = function join() {
              const obj = guildId(validInviteKey[11]);
              const obj2 = { inviteKey, context: { location: "guild_profile" } };
              const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
            };
            if (!obj4.handleNSFWGuildInvite(closure_4.getInvite(tmp), obj1)) {
              tmp3Result = tmp3(tmp4[11]);
              obj6 = { inviteKey: null, context: null };
              obj6.inviteKey = tmp;
              obj6.context = { location: "guild_profile" };
              result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj6);
            }
          }
          return;
        }
      }
      AnalyticsObjects = tmp10;
      if (cResult[9] === guildId) {
        class I {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            const obj2 = transitionToGuild;
            obj2.transitionToGuild(guildId);
          }
        }
        class C {
          constructor() {
            tmp = validInviteKey;
            if (null != validInviteKey) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj3 = closure_1(closure_2[9]);
              tmp5 = guildId;
              tmp6 = globalThis;
              _HermesInternal = HermesInternal;
              str = "GuildProfileActionSheet:";
              hideActionSheetResult = obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
              closure_0 = tmp;
              tmp8 = closure_0;
              obj4 = closure_0(closure_2[12]);
              tmp9 = closure_4;
              obj1 = { onConfirm: null };
              obj1.onConfirm = function join() {
                const obj = guildId(validInviteKey[11]);
                const obj2 = { inviteKey, context: { location: "guild_profile" } };
                const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
              };
              if (!obj4.handleNSFWGuildInvite(closure_4.getInvite(tmp), obj1)) {
                tmp3Result = tmp3(tmp4[11]);
                obj6 = { inviteKey: null, context: null };
                obj6.inviteKey = tmp;
                obj6.context = { location: "guild_profile" };
                result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj6);
              }
            }
            return;
          }
        }
        if (tmp10 != null) {
          class I {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              const obj2 = transitionToGuild;
              obj2.transitionToGuild(guildId);
            }
          }
        }
        if (tmp11 === undefined) {
          class I {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              const obj2 = transitionToGuild;
              obj2.transitionToGuild(guildId);
            }
          }
        }
        if (cResult[12] === guildId) {
          class I {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              const obj2 = transitionToGuild;
              obj2.transitionToGuild(guildId);
            }
          }
        }
        class M {
          constructor() {
            let tmp9;
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            const tmp2 = guildId;
            if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
              if (null != validInviteKey) {
                tmp9 = tmp9();
              }
            }
            const tmp4Result = MemberVerificationModalActionCreators;
            const result = tmp4Result.openMemberVerificationModal(tmp2);
          }
        }
        cResult[12] = guildId;
        class G {
          constructor() {
            AnalyticsObjects = undefined;
            if (AnalyticsObjects != null) {
              AnalyticsObjects = AnalyticsObjects.applicationStatus;
            }
            if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === AnalyticsObjects) {
              const tmp2Result = MemberVerificationAlertActionCreators;
              const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
            } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === AnalyticsObjects) {
              const obj = { guildId, canWithdraw: true };
              const tmp2Result3 = MemberVerificationAlertActionCreators;
              const result1 = tmp2Result3.openMemberVerificationRejectedAlert(obj);
            } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === AnalyticsObjects) {
              const tmp2Result4 = MemberVerificationAlertActionCreators;
              const result2 = tmp2Result4.openMemberVerificationIncompleteAlert(guildId);
            }
          }
        }
        cResult[14] = profile.visibility;
        cResult[15] = validInviteKey;
        cResult[16] = M;
      }
      if (tmp10 != null) {
        class I {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            const obj2 = transitionToGuild;
            obj2.transitionToGuild(guildId);
          }
        }
      }
      class G {
        constructor() {
          AnalyticsObjects = undefined;
          if (AnalyticsObjects != null) {
            AnalyticsObjects = AnalyticsObjects.applicationStatus;
          }
          if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === AnalyticsObjects) {
            const tmp2Result = MemberVerificationAlertActionCreators;
            const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
          } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === AnalyticsObjects) {
            const obj = { guildId, canWithdraw: true };
            const tmp2Result3 = MemberVerificationAlertActionCreators;
            const result1 = tmp2Result3.openMemberVerificationRejectedAlert(obj);
          } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === AnalyticsObjects) {
            const tmp2Result4 = MemberVerificationAlertActionCreators;
            const result2 = tmp2Result4.openMemberVerificationIncompleteAlert(guildId);
          }
        }
      }
      cResult[10] = undefined;
      cResult[11] = G;
    }
    class C {
      constructor() {
        tmp = validInviteKey;
        if (null != validInviteKey) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj3 = closure_1(closure_2[9]);
          tmp5 = guildId;
          tmp6 = globalThis;
          _HermesInternal = HermesInternal;
          str = "GuildProfileActionSheet:";
          hideActionSheetResult = obj3.hideActionSheet("GuildProfileActionSheet:" + guildId);
          closure_0 = tmp;
          tmp8 = closure_0;
          obj4 = closure_0(closure_2[12]);
          tmp9 = closure_4;
          obj1 = { onConfirm: null };
          obj1.onConfirm = function join() {
            const obj = guildId(validInviteKey[11]);
            const obj2 = { inviteKey, context: { location: "guild_profile" } };
            const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
          };
          if (!obj4.handleNSFWGuildInvite(closure_4.getInvite(tmp), obj1)) {
            tmp3Result = tmp3(tmp4[11]);
            obj6 = { inviteKey: null, context: null };
            obj6.inviteKey = tmp;
            obj6.context = { location: "guild_profile" };
            result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj6);
          }
        }
        return;
      }
    }
    cResult[6] = guildId;
    cResult[8] = C;
    tmp9 = C;
  }
  function handleGoToTagSettings() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    closure_3();
  }
  cResult[3] = guildId;
  cResult[4] = tmp7;
  cResult[5] = handleGoToTagSettings;
}) : (function GuildProfileCTA(profile) {
  let closure_3;
  let context;
  let inviteKey;
  profile = profile.profile;
  let guildId;
  let validInviteKey;
  const tmp = validInviteKey;
  ({ context, inviteKey } = profile);
  let tmp2 = guildId(validInviteKey[7])(profile, context, inviteKey);
  guildId = tmp2.guildId;
  validInviteKey = tmp2.validInviteKey;
  const ctaType = tmp2.ctaType;
  let obj = { scrollPosition: constants.GUILD_TAG };
  react = guildId(validInviteKey[8])(obj);
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
        const obj = guildId(validInviteKey[11]);
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
        const tmp3Result = tmp3(8480);
        let result = tmp3Result.acceptInviteAndTransitionToInviteChannel(obj2);
      }
    }
  }, items1);
  const tmp5 = guildId(validInviteKey[13])(guildId);
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
  if (profile(tmp[7]).CTATypes.IS_MEMBER === ctaType) {
    const Button7 = tmp11(tmp[21]).Button;
    const merged = Object.assign(memo);
    const intl7 = tmp11(tmp[20]).intl;
    return <Button7 onPress={callback} text={intl7.string(profile(tmp[20]).t.KLOhbO)} />;
  } else if (profile(tmp[7]).CTATypes.ADOPT_TAG === ctaType) {
    const Button6 = tmp11(tmp[21]).Button;
    const merged1 = Object.assign(memo);
    const intl6 = tmp11(tmp[20]).intl;
    return <Button6 onPress={function handleGoToTagSettings() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      closure_3();
    }} text={intl6.string(profile(tmp[20]).t.cQDYRu)} />;
  } else if (profile(tmp[7]).CTATypes.HAS_APPLICATION === ctaType) {
    const Button5 = tmp11(tmp[21]).Button;
    const merged2 = Object.assign(memo);
    const intl5 = tmp11(tmp[20]).intl;
    return <Button5 onPress={callback2} text={intl5.string(profile(tmp[20]).t["4yfIDk"])} />;
  } else if (profile(tmp[7]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const Button4 = tmp11(tmp[21]).Button;
    const merged3 = Object.assign(memo);
    const intl4 = tmp11(tmp[20]).intl;
    return <Button4 onPress={callback3} text={intl4.string(profile(tmp[20]).t["7XdMW2"])} />;
  } else if (profile(tmp[7]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const Button3 = tmp11(tmp[21]).Button;
    const merged4 = Object.assign(memo);
    const intl3 = tmp11(tmp[20]).intl;
    return <Button3 onPress={callback4} text={intl3.string(profile(tmp[20]).t.XpeFYr)} />;
  } else if (profile(tmp[7]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const Button2 = tmp11(tmp[21]).Button;
    const merged5 = Object.assign(memo);
    const intl2 = tmp11(tmp[20]).intl;
    return <Button2 onPress={callback1} text={intl2.string(profile(tmp[20]).t.XpeFYr)} />;
  } else if (profile(tmp[7]).CTATypes.ACCEPT_ROLES === ctaType) {
    const Button = tmp11(tmp[21]).Button;
    const merged6 = Object.assign(memo);
    const intl = tmp11(tmp[20]).intl;
    return <Button onPress={callback1} text={intl.string(profile(tmp[20]).t.MMlhsr)} />;
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default tmp2;
