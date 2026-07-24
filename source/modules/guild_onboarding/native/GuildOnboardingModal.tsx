// Module ID: 5081
// Function ID: 44217
// Name: headerTitle
// Dependencies: [31, 5082, 1348, 1838, 1906, 5058, 5055, 653, 33, 1198, 5083, 5087, 5459, 5065, 5483, 5123, 566, 5063, 5128, 5517, 1212, 2]
// Exports: default

// Module 5081 (headerTitle)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { GuildOnboardingModalStates as closure_9 } from "GUILD_ONBOARDING_MODAL_KEY";
import ME from "ME";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
const require = arg1;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
function getScreens(guildId) {
  let result;
  let _isNativeReflectConstruct;
  let closure_5;
  let _createForOfIteratorHelperLoose;
  let closure_7;
  let closure_8;
  let connections;
  let dependencyMap;
  let importDefault;
  guildId = guildId.guildId;
  ({ prompts: importDefault, connections, selectOption: dependencyMap, completeOnboarding: result, onFinish: _isNativeReflectConstruct, onClose: closure_5, landingAnimation: _createForOfIteratorHelperLoose, isFirstOpen: closure_7, backShouldLeaveGuild: closure_8 } = guildId);
  const constants = guild.getGuild(guildId);
  const rulesPrompt2 = rulesPrompt.getRulesPrompt(guildId);
  obj = { [closure_9.PROMPT]: obj };
  obj = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render(currentPrompt) {
      const obj = { guildId };
      currentPrompt = undefined;
      if (null != currentPrompt) {
        currentPrompt = currentPrompt.currentPrompt;
      }
      let num = 0;
      if (null != currentPrompt) {
        num = currentPrompt;
      }
      obj.currentPromptIdx = num;
      obj.prompts = closure_1;
      obj.selectOption = closure_2;
      obj.onClose = closure_5;
      obj.landingAnimation = _createForOfIteratorHelperLoose;
      obj.isFirstOpen = closure_7;
      obj.backShouldLeaveGuild = closure_8;
      return outer1_12(outer1_1(outer1_2[10]), obj);
    }
  };
  obj = {
    fullscreen: true,
    headerTitle,
    headerRight,
    headerLeft: guildId(5087).getHeaderCloseButton(() => {
      if (closure_8) {
        let channel = outer1_5.getChannel(outer1_7.getLastSelectedChannelId());
        if (null == channel) {
          let obj = guildId(outer1_2[9]);
          obj = { navigationReplace: true };
          obj.transitionTo(outer1_11.ME, obj);
          channel = tmp4();
        }
        guildId(outer1_2[9]).transitionTo(outer1_11.CHANNEL(channel.guild_id, channel.id));
        const obj3 = guildId(outer1_2[9]);
        const tmp3 = guildId;
        tmp4 = callback;
      } else {
        callback();
      }
    }),
    render() {
      const obj = { guildId };
      let tmp3 = 0 === length.length;
      if (tmp3) {
        tmp3 = !guildId(outer1_2[13]).showRulesInOnboarding(closure_9, closure_10);
        const obj2 = guildId(outer1_2[13]);
      }
      obj.isLastStep = tmp3;
      obj.onComplete = result;
      return outer1_12(outer1_1(outer1_2[12]), obj);
    }
  };
  obj[constants.CONNECTIONS] = obj;
  obj[constants.COMPLETED] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return outer1_12(outer1_1(outer1_2[14]), {
        guildId,
        prompts: closure_1,
        completeOnboarding: result,
        onClose() {
          outer1_5();
          outer1_4();
        }
      });
    }
  };
  obj[constants.RULES] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return outer1_12(guildId(outer1_2[15]).RulesPrompt, { guildId, onClose: closure_5 });
    }
  };
  return obj;
}
({ GuildFeatures: closure_10, Routes: closure_11 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default function GuildOnboardingModal(guildId) {
  guildId = guildId.guildId;
  const onFinish = guildId.onFinish;
  const onClose = guildId.onClose;
  const landingAnimation = guildId.landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let obj = guildId(onClose[16]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = stateFromStores.getGuild(guildId);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      let hasItem = features.has(callback1.MEMBER_VERIFICATION_GATE_ENABLED);
      if (hasItem) {
        const features2 = guild.features;
        hasItem = !features2.has(callback1.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      }
      tmp2 = hasItem;
    }
    return tmp2;
  });
  const items1 = [stateFromStores1];
  const stateFromStoresArray = guildId(onClose[16]).useStateFromStoresArray(items1, () => stateFromStores1.getOnboardingPromptsForOnboarding(guildId));
  const obj2 = guildId(onClose[16]);
  const items2 = [stateFromStores1];
  stateFromStores1 = guildId(onClose[16]).useStateFromStores(items2, () => stateFromStores1.getOnboardingConnections(guildId));
  const items3 = [guildId];
  const callback = landingAnimation.useCallback((id, id2, selected) => {
    const option = onFinish(onClose[17]).selectOption(guildId, id, id2, selected);
  }, items3);
  const items4 = [guildId, stateFromStoresArray];
  const callback1 = landingAnimation.useCallback(() => {
    onFinish(onClose[17]).completeOnboarding(guildId, stateFromStoresArray);
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect = landingAnimation.useEffect(() => {
    if (stateFromStores) {
      const verificationForm = onFinish(onClose[18]).fetchVerificationForm(guildId);
      const obj = onFinish(onClose[18]);
    }
  }, items5);
  const items6 = [guildId, stateFromStoresArray, stateFromStores1, callback, callback1, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild];
  if (isFirstOpen) {
    if (stateFromStores1.length > 0) {
      let PROMPT = callback.CONNECTIONS;
    }
    obj = { screens: tmp6, initialRouteName: PROMPT };
    const intl = guildId(onClose[20]).intl;
    obj.headerBackTitle = intl.string(guildId(onClose[20]).t["13/7kX"]);
    return jsx(guildId(onClose[19]).Navigator, { screens: tmp6, initialRouteName: PROMPT });
  }
  PROMPT = callback.PROMPT;
};
