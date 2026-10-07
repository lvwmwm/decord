// Module ID: 6616
// Function ID: 6617
// Name: GuildOnboardingModal
// Dependencies: [19, 5963, 2051, 2074, 2103, 6595, 6592, 1085, 21, 1112, 6617, 6010, 6654, 6601, 6682, 6618, 558, 576, 504, 6600, 5937, 1126, 6496, 2]

// Module 6616 (GuildOnboardingModal)
import Fragment from "Fragment" /* 21 */;
import router_utils from "router_utils" /* 1112 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5937 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6592 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6600 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6601 */;
import GuildOnboardingPromptsDefault from "GuildOnboardingPrompts" /* 6617 */;
import GuildOnboardingPrompt from "GuildOnboardingPrompt" /* 6618 */;
import GuildOnboardingConnectionPromptDefault from "GuildOnboardingConnectionPrompt" /* 6654 */;
import GuildOnboardingCompletedDefault from "GuildOnboardingCompleted" /* 6682 */;
import react from "react" /* 19 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5963 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6595 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let unpackModuleId;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
function getScreens(guildId) {
  let backShouldLeaveGuild;
  let closure_10;
  let closure_9;
  let connections;
  let isFirstOpen;
  let landingAnimation;
  let obj2;
  let obj4;
  let onClose;
  let prompts;
  let selectOption;
  guildId = guildId.guildId;
  ({ prompts: importDefault, connections, selectOption: dependencyMap, completeOnboarding: react, onFinish: MemberVerificationFormStore, onClose: ChannelStore, landingAnimation: GuildStore, isFirstOpen: SelectedChannelStore, backShouldLeaveGuild: GuildOnboardingPromptsStore } = guildId);
  constants = GuildStore.getGuild(guildId);
  const rulesPrompt = MemberVerificationFormStore.getRulesPrompt(guildId);
  let obj = { [closure_9.PROMPT]: obj2 };
  obj2 = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render(currentPrompt) {
      let num;
      const obj = { guildId, currentPromptIdx: num, prompts: importDefault, selectOption: dependencyMap, onClose: ChannelStore, landingAnimation: GuildStore, isFirstOpen: SelectedChannelStore, backShouldLeaveGuild: GuildOnboardingPromptsStore };
      num = undefined;
      const tmp = jsx;
      const tmp2 = GuildOnboardingPromptsDefault;
      if (currentPrompt != null) {
        num = currentPrompt.currentPrompt;
      }
      if (num == null) {
        num = 0;
      }
      return tmp(tmp2, obj);
    }
  };
  const CONNECTIONS = constants.CONNECTIONS;
  const obj3 = {
    fullscreen: true,
    headerTitle,
    headerRight,
    headerLeft: obj4.getHeaderCloseButton(() => {
      const tmp = GuildOnboardingPromptsStore;
      if (tmp) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getLastSelectedChannelId());
        const tmp4 = guildId;
        const tmp5 = ChannelStore;
        if (null != channel) {
          if (channel.guild_id !== tmp4) {
            const obj2 = router_utils;
            obj2.transitionTo(unpackModuleId.CHANNEL(channel.guild_id, channel.id));
          }
          tmp5();
        }
        const obj = router_utils;
        obj.transitionTo(unpackModuleId.ME, { navigationReplace: true });
      } else {
        ChannelStore();
      }
    }),
    render() {
      let tmp4;
      const obj = { guildId, isLastStep: tmp4, onComplete };
      tmp4 = 0 === importDefault.length;
      const tmp = jsx;
      const tmp3 = GuildOnboardingConnectionPromptDefault;
      if (tmp4) {
        const obj2 = GuildOnboardingUtils;
        tmp4 = !obj2.showRulesInOnboarding(closure_9, closure_10);
      }
      return tmp(tmp3, obj);
    }
  };
  obj[CONNECTIONS] = obj3;
  obj[constants.COMPLETED] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return jsx(GuildOnboardingCompletedDefault, {
        guildId,
        prompts: importDefault,
        completeOnboarding,
        onClose() {
          onClose();
          closure_1_4();
        }
      });
    }
  };
  obj[constants.RULES] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return jsx(GuildOnboardingPrompt.RulesPrompt, { guildId, onClose: ChannelStore });
    }
  };
  obj4 = guildId(6010);
  return obj;
}
let constants = GuildOnboardingConstants.GuildOnboardingModalStates;
({ GuildFeatures: c10, Routes: unpackModuleId } = Constants);
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let backShouldLeaveGuild;
  let first;
  let isFirstOpen;
  let landingAnimation;
  let onClose;
  let onFinish;
  let stateFromStoresArray;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp18;
  let tmp19;
  let tmp6;
  let tmp8;
  let tmp = guildId;
  let tmp2 = stateFromStoresArray;
  let obj = guildId(stateFromStoresArray[17]);
  const cResult = obj.c(33);
  guildId = guildId.guildId;
  ({ onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      const guild = GuildStore.getGuild(guildId);
      let tmp2 = null != guild;
      if (tmp2) {
        const features = guild.features;
        let hasItem = features.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
        const tmp3 = constants;
        if (hasItem) {
          const features2 = guild.features;
          hasItem = !features2.has(tmp3.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        tmp2 = hasItem;
      }
      return tmp2;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[18]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingPromptsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId) {
    const fn2 = function v() {
      return GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
    };
    cResult[4] = guildId;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult3 = tmp(tmp2[18]);
  stateFromStoresArray = tmpResult3.useStateFromStoresArray(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildOnboardingPromptsStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== guildId) {
    const fn3 = function _() {
      return GuildOnboardingPromptsStore.getOnboardingConnections(guildId);
    };
    cResult[7] = guildId;
    cResult[8] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[8];
  }
  const tmpResult4 = tmp(tmp2[18]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp14);
  if (cResult[9] !== guildId) {
    class N {
      constructor(id, id2, selected) {
        const obj = GuildOnboardingActionCreatorsDefault;
        const option = obj.selectOption(guildId, id, id2, selected);
      }
    }
    cResult[9] = guildId;
    cResult[10] = N;
  } else {
    class N {
      constructor(id, id2, selected) {
        const obj = GuildOnboardingActionCreatorsDefault;
        const option = obj.selectOption(guildId, id, id2, selected);
      }
    }
  }
  if (cResult[11] === guildId) {
    class N {
      constructor(id, id2, selected) {
        const obj = GuildOnboardingActionCreatorsDefault;
        const option = obj.selectOption(guildId, id, id2, selected);
      }
    }
    if (cResult[14] === guildId) {
      class N {
        constructor(id, id2, selected) {
          const obj = GuildOnboardingActionCreatorsDefault;
          const option = obj.selectOption(guildId, id, id2, selected);
        }
      }
      const effect = react.useEffect(tmp19, tmp18);
      if (cResult[18] === backShouldLeaveGuild) {
        class N {
          constructor(id, id2, selected) {
            const obj = GuildOnboardingActionCreatorsDefault;
            const option = obj.selectOption(guildId, id, id2, selected);
          }
        }
      }
      const obj2 = { guildId, prompts: stateFromStoresArray, connections: stateFromStores1, selectOption: tmp16, completeOnboarding: tmp17, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild };
      cResult[18] = backShouldLeaveGuild;
      cResult[19] = tmp17;
      cResult[20] = stateFromStores1;
      cResult[21] = guildId;
      cResult[22] = isFirstOpen;
      cResult[23] = landingAnimation;
      cResult[24] = onClose;
      cResult[25] = onFinish;
      cResult[26] = stateFromStoresArray;
      cResult[27] = tmp16;
      const tmp24 = getScreens(obj2);
      class M {
        constructor() {
          const obj = GuildOnboardingActionCreatorsDefault;
          obj.completeOnboarding(guildId, stateFromStoresArray);
        }
      }
      cResult[28] = tmp24;
    }
    const fn4 = function k() {
      const tmp = stateFromStores;
      if (tmp) {
        const obj = MemberVerificationActionCreatorsDefault;
        const verificationForm = obj.fetchVerificationForm(guildId);
      }
    };
    const items3 = [guildId, stateFromStores];
    cResult[14] = guildId;
    cResult[15] = stateFromStores;
    cResult[16] = items3;
    cResult[17] = fn4;
    tmp18 = items3;
    tmp19 = fn4;
  }
  class M {
    constructor() {
      const obj = GuildOnboardingActionCreatorsDefault;
      obj.completeOnboarding(guildId, stateFromStoresArray);
    }
  }
  cResult[11] = guildId;
  cResult[12] = stateFromStoresArray;
  cResult[13] = M;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const onFinish = guildId.onFinish;
  const onClose = guildId.onClose;
  const landingAnimation = guildId.landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let stateFromStores;
  let stateFromStores1;
  let tmp = guildId;
  let tmp2 = onClose;
  let obj = guildId(onClose[18]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      let hasItem = features.has(callback1.MEMBER_VERIFICATION_GATE_ENABLED);
      const tmp3 = callback1;
      if (hasItem) {
        const features2 = guild.features;
        hasItem = !features2.has(tmp3.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      }
      tmp2 = hasItem;
    }
    return tmp2;
  });
  const items1 = [stateFromStores1];
  const obj2 = guildId(onClose[18]);
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  const items2 = [stateFromStores1];
  const obj3 = guildId(onClose[18]);
  stateFromStores1 = obj3.useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  const items3 = [guildId];
  const selectOption = landingAnimation.useCallback((id, id2, selected) => {
    const obj = GuildOnboardingActionCreatorsDefault;
    const option = obj.selectOption(guildId, id, id2, selected);
  }, items3);
  const items4 = [guildId, stateFromStoresArray];
  const callback1 = landingAnimation.useCallback(() => {
    const obj = GuildOnboardingActionCreatorsDefault;
    obj.completeOnboarding(guildId, stateFromStoresArray);
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect = landingAnimation.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const obj = MemberVerificationActionCreatorsDefault;
      const verificationForm = obj.fetchVerificationForm(guildId);
    }
  }, items5);
  const items6 = [guildId, stateFromStoresArray, stateFromStores1, selectOption, callback1, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild];
  if (isFirstOpen) {
    let PROMPT;
    if (stateFromStores1.length > 0) {
      PROMPT = selectOption.CONNECTIONS;
    }
    const Navigator = tmp(tmp2[22]).Navigator;
    const intl = tmp(tmp2[21]).intl;
    return <Navigator screens={tmp8} initialRouteName={PROMPT} headerBackTitle={intl.string(tmp(tmp2[21]).t["13/7kX"])} />;
  }
  PROMPT = selectOption.PROMPT;
});
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default tmp3;
