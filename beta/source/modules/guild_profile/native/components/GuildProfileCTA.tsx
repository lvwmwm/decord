// Module ID: 9998
// Function ID: 9999
// Name: GuildProfileCTA
// Dependencies: [19, 1078, 1088, 21, 558, 568, 9999, 10001, 4725, 7586, 8654, 10005, 4583, 5746, 5769, 5788, 7585, 1119, 5188, 2]

// Module 9998 (GuildProfileCTA)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4583 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import GuildProfileTypes from "GuildProfileTypes" /* 5769 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5788 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7585 */;
import transitionToGuild from "transitionToGuild" /* 7586 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8654 */;
import noop from "module_19" /* 19 */;

require = fn;
let AnalyticsObjects = fn(1078).AnalyticsObjects;
let closure_5 = fn(1088).ProfileCustomizationScrollPositions;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((profile) => {
  const cResult = profile(validInviteKey[5]).c(41);
  profile = profile.profile;
  ({ context, inviteKey } = profile);
  let tmp4 = guildId(validInviteKey[6])(profile, context, inviteKey);
  guildId = tmp4.guildId;
  validInviteKey = tmp4.validInviteKey;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { scrollPosition: applicationStatus.GUILD_TAG };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp7 = guildId(validInviteKey[7])(first);
  noop = tmp7;
  if (cResult[1] !== guildId) {
    class P {
      constructor() {
        obj = closure_1(closure_2[8]);
        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        obj2 = closure_0(closure_2[9]);
        transitionToGuildResult = obj2.transitionToGuild(guildId);
        return;
      }
    }
    cResult[1] = guildId;
    cResult[2] = P;
  } else {
    class P {
      constructor() {
        obj = closure_1(closure_2[8]);
        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        obj2 = closure_0(closure_2[9]);
        transitionToGuildResult = obj2.transitionToGuild(guildId);
        return;
      }
    }
  }
  if (cResult[3] === guildId) {
    class P {
      constructor() {
        obj = closure_1(closure_2[8]);
        hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
        obj2 = closure_0(closure_2[9]);
        transitionToGuildResult = obj2.transitionToGuild(guildId);
        return;
      }
    }
    if (cResult[6] === guildId) {
      class P {
        constructor() {
          obj = closure_1(closure_2[8]);
          hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
          obj2 = closure_0(closure_2[9]);
          transitionToGuildResult = obj2.transitionToGuild(guildId);
          return;
        }
      }
      AnalyticsObjects = tmp9;
      const tmp10 = tmp3(tmp[11])(guildId);
      applicationStatus = tmp10;
      if (cResult[9] === guildId) {
        class P {
          constructor() {
            obj = closure_1(closure_2[8]);
            hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            obj2 = closure_0(closure_2[9]);
            transitionToGuildResult = obj2.transitionToGuild(guildId);
            return;
          }
        }
        if (tmp10 != null) {
          class P {
            constructor() {
              obj = closure_1(closure_2[8]);
              hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              obj2 = closure_0(closure_2[9]);
              transitionToGuildResult = obj2.transitionToGuild(guildId);
              return;
            }
          }
        }
        if (cResult[10] === undefined) {
          class P {
            constructor() {
              obj = closure_1(closure_2[8]);
              hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              obj2 = closure_0(closure_2[9]);
              transitionToGuildResult = obj2.transitionToGuild(guildId);
              return;
            }
          }
        }
        if (cResult[12] === guildId) {
          class P {
            constructor() {
              obj = closure_1(closure_2[8]);
              hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
              obj2 = closure_0(closure_2[9]);
              transitionToGuildResult = obj2.transitionToGuild(guildId);
              return;
            }
          }
        }
        class R {
          constructor() {
            tmp = closure_2;
            obj = closure_1(closure_2[8]);
            tmp2 = guildId;
            hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            tmp4 = closure_0;
            if (profile.visibility !== closure_0(closure_2[14]).GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
              tmp5 = validInviteKey;
              tmp6 = null;
              if (null != validInviteKey) {
                tmp8 = closure_4;
                tmp9 = closure_4();
              }
              return;
            }
            tmp4Result = tmp4(tmp[15]);
            result = tmp4Result.openMemberVerificationModal(tmp2);
            return;
          }
        }
        cResult[12] = guildId;
        class C {
          constructor() {
            applicationStatus = undefined;
            if (closure_5 != null) {
              applicationStatus = closure_5.applicationStatus;
            }
            tmp2 = closure_0;
            tmp3 = closure_2;
            if (closure_0(closure_2[12]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
              tmp2Result = tmp2(tmp3[13]);
              tmp8 = guildId;
              result = tmp2Result.openMemberVerificationPendingAlert(guildId);
            } else if (tmp2(tmp3[12]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
              tmp2Result1 = tmp2(tmp3[13]);
              obj1 = { guildId: null, canWithdraw: true };
              tmp6 = guildId;
              obj1.guildId = guildId;
              result1 = tmp2Result1.openMemberVerificationRejectedAlert(obj1);
            } else if (tmp2(tmp3[12]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
              tmp2Result2 = tmp2(tmp3[13]);
              tmp4 = guildId;
              result2 = tmp2Result2.openMemberVerificationIncompleteAlert(guildId);
            }
            return;
          }
        }
        cResult[14] = profile.visibility;
        cResult[15] = validInviteKey;
        cResult[16] = R;
      }
      if (tmp10 != null) {
        class P {
          constructor() {
            obj = closure_1(closure_2[8]);
            hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
            obj2 = closure_0(closure_2[9]);
            transitionToGuildResult = obj2.transitionToGuild(guildId);
            return;
          }
        }
      }
      class C {
        constructor() {
          applicationStatus = undefined;
          if (closure_5 != null) {
            applicationStatus = closure_5.applicationStatus;
          }
          tmp2 = closure_0;
          tmp3 = closure_2;
          if (closure_0(closure_2[12]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
            tmp2Result = tmp2(tmp3[13]);
            tmp8 = guildId;
            result = tmp2Result.openMemberVerificationPendingAlert(guildId);
          } else if (tmp2(tmp3[12]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
            tmp2Result1 = tmp2(tmp3[13]);
            obj1 = { guildId: null, canWithdraw: true };
            tmp6 = guildId;
            obj1.guildId = guildId;
            result1 = tmp2Result1.openMemberVerificationRejectedAlert(obj1);
          } else if (tmp2(tmp3[12]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
            tmp2Result2 = tmp2(tmp3[13]);
            tmp4 = guildId;
            result2 = tmp2Result2.openMemberVerificationIncompleteAlert(guildId);
          }
          return;
        }
      }
      cResult[10] = undefined;
      cResult[11] = C;
    }
    const fn = function y() {
      if (null != validInviteKey) {
        const _HermesInternal = HermesInternal;
        ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
        const obj3 = { inviteKey: tmp, context: { location: "guild_profile" } };
        const result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj3);
      }
    };
    cResult[6] = guildId;
    cResult[8] = fn;
    tmp9 = fn;
  }
  class I {
    constructor() {
      obj = closure_1(closure_2[8]);
      hideActionSheetResult = obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      tmp2 = closure_3();
      return;
    }
  }
  cResult[3] = guildId;
  cResult[4] = tmp7;
  cResult[5] = I;
}) : ((profile) => {
  profile = profile.profile;
  let guildId;
  let validInviteKey;
  let applicationStatus;
  ({ context, inviteKey } = profile);
  let tmp2 = guildId(validInviteKey[6])(profile, context, inviteKey);
  guildId = tmp2.guildId;
  validInviteKey = tmp2.validInviteKey;
  const ctaType = tmp2.ctaType;
  noop = guildId(validInviteKey[7])({ scrollPosition: applicationStatus.GUILD_TAG });
  const items = [guildId];
  const items1 = [guildId, validInviteKey];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    transitionToGuild.transitionToGuild(guildId);
  }, items);
  const callback1 = noop.useCallback(() => {
    if (null != validInviteKey) {
      const _HermesInternal = HermesInternal;
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const obj3 = { inviteKey: tmp, context: { location: "guild_profile" } };
      const result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj3);
    }
  }, items1);
  const tmp5 = guildId(validInviteKey[11])(guildId);
  const items2 = [guildId, ];
  applicationStatus = undefined;
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
      const result = tmp2(5746).openMemberVerificationPendingAlert(guildId);
      const tmp2Result = tmp2(5746);
    } else if (tmp2(4583).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj = { guildId, canWithdraw: true };
      const result1 = tmp2(5746).openMemberVerificationRejectedAlert(obj);
      const tmp2Result3 = tmp2(5746);
    } else if (tmp2(4583).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
      const result2 = tmp2(5746).openMemberVerificationIncompleteAlert(guildId);
      const tmp2Result4 = tmp2(5746);
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
  if (profile(validInviteKey[6]).CTATypes.IS_MEMBER === ctaType) {
    let obj3 = {};
    const merged = Object.assign(memo);
    obj3.onPress = callback;
    const intl7 = tmp11(tmp[17]).intl;
    obj3.text = intl7.string(tmp11(tmp[17]).t.KLOhbO);
    return jsx(tmp11(tmp[18]).Button, {});
  } else if (tmp11(tmp[6]).CTATypes.ADOPT_TAG === ctaType) {
    const obj4 = {};
    const merged1 = Object.assign(memo);
    obj4.onPress = function handleGoToTagSettings() {
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      closure_3();
    };
    const intl6 = tmp11(tmp[17]).intl;
    obj4.text = intl6.string(tmp11(tmp[17]).t.cQDYRu);
    return jsx(tmp11(tmp[18]).Button, {});
  } else if (tmp11(tmp[6]).CTATypes.HAS_APPLICATION === ctaType) {
    const obj5 = {};
    const merged2 = Object.assign(memo);
    obj5.onPress = callback2;
    const intl5 = tmp11(tmp[17]).intl;
    obj5.text = intl5.string(tmp11(tmp[17]).t["4yfIDk"]);
    return jsx(tmp11(tmp[18]).Button, {});
  } else if (tmp11(tmp[6]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const obj6 = {};
    const merged3 = Object.assign(memo);
    obj6.onPress = callback3;
    const intl4 = tmp11(tmp[17]).intl;
    obj6.text = intl4.string(tmp11(tmp[17]).t["7XdMW2"]);
    return jsx(tmp11(tmp[18]).Button, {});
  } else if (tmp11(tmp[6]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const obj7 = {};
    const merged4 = Object.assign(memo);
    obj7.onPress = callback4;
    const intl3 = tmp11(tmp[17]).intl;
    obj7.text = intl3.string(tmp11(tmp[17]).t.XpeFYr);
    return jsx(tmp11(tmp[18]).Button, {});
  } else if (tmp11(tmp[6]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const obj8 = {};
    const merged5 = Object.assign(memo);
    obj8.onPress = callback1;
    const intl2 = tmp11(tmp[17]).intl;
    obj8.text = intl2.string(tmp11(tmp[17]).t.XpeFYr);
    return jsx(tmp11(tmp[18]).Button, {});
  } else if (tmp11(tmp[6]).CTATypes.ACCEPT_ROLES === ctaType) {
    const obj9 = {};
    const merged6 = Object.assign(memo);
    obj9.onPress = callback1;
    const intl = tmp11(tmp[17]).intl;
    obj9.text = intl.string(tmp11(tmp[17]).t.MMlhsr);
    return jsx(tmp11(tmp[18]).Button, {});
  } else {
    return null;
  }
  let obj = { scrollPosition: applicationStatus.GUILD_TAG };
});
