// Module ID: 5351
// Function ID: 45783
// Name: headerTitle
// Dependencies: []
// Exports: default

// Module 5351 (headerTitle)
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
function getScreens(guildId) {
  let connections;
  guildId = guildId.guildId;
  const arg1 = guildId;
  ({ prompts: closure_1, connections, selectOption: closure_2, completeOnboarding: closure_3, onFinish: closure_4, onClose: closure_5, landingAnimation: closure_6, isFirstOpen: closure_7, backShouldLeaveGuild: closure_8 } = guildId);
  const constants = guild.getGuild(guildId);
  const rulesPrompt2 = rulesPrompt.getRulesPrompt(guildId);
  let obj = { [closure_9.PROMPT]: obj };
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
      obj.prompts = lib;
      obj.selectOption = closure_2;
      obj.onClose = closure_5;
      obj.landingAnimation = closure_6;
      obj.isFirstOpen = closure_7;
      obj.backShouldLeaveGuild = closure_8;
      return closure_12(lib(closure_2[10]), obj);
    }
  };
  obj = {
    fullscreen: true,
    headerTitle,
    headerRight,
    headerLeft: arg1(dependencyMap[11]).getHeaderCloseButton(() => {
      if (closure_8) {
        let channel = channel.getChannel(lastSelectedChannelId.getLastSelectedChannelId());
        if (null == channel) {
          let obj = guildId(closure_2[9]);
          obj = { navigationReplace: true };
          obj.transitionTo(closure_11.ME, obj);
          channel = tmp4();
        }
        guildId(closure_2[9]).transitionTo(closure_11.CHANNEL(channel.guild_id, channel.id));
        const obj3 = guildId(closure_2[9]);
        const tmp3 = guildId;
        const tmp4 = channel;
      } else {
        channel();
      }
    }),
    render() {
      const obj = { guildId };
      let tmp3 = 0 === lib.length;
      if (tmp3) {
        tmp3 = !guildId(closure_2[13]).showRulesInOnboarding(closure_9, closure_10);
        const obj2 = guildId(closure_2[13]);
      }
      obj.isLastStep = tmp3;
      obj.onComplete = closure_3;
      return closure_12(lib(closure_2[12]), obj);
    }
  };
  obj[constants.CONNECTIONS] = obj;
  obj[constants.COMPLETED] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return callback(lib(closure_2[14]), {
        guildId,
        prompts: lib,
        completeOnboarding: closure_3,
        onClose() {
          callback2();
          callback();
        }
      });
    }
  };
  obj[constants.RULES] = {
    fullscreen: true,
    headerTitle,
    headerRight,
    render() {
      return callback(guildId(closure_2[15]).RulesPrompt, { guildId, onClose: closure_5 });
    }
  };
  return obj;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = arg1(dependencyMap[6]).GuildOnboardingModalStates;
({ GuildFeatures: closure_10, Routes: closure_11 } = arg1(dependencyMap[7]));
const jsx = arg1(dependencyMap[8]).jsx;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default function GuildOnboardingModal(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const onFinish = guildId.onFinish;
  const importDefault = onFinish;
  const onClose = guildId.onClose;
  const dependencyMap = onClose;
  const landingAnimation = guildId.landingAnimation;
  const React = landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  let closure_4 = isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let closure_5 = backShouldLeaveGuild;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  closure_6 = stateFromStores;
  const items1 = [closure_8];
  const stateFromStoresArray = arg1(dependencyMap[16]).useStateFromStoresArray(items1, () => stateFromStores1.getOnboardingPromptsForOnboarding(guildId));
  let closure_7 = stateFromStoresArray;
  const obj2 = arg1(dependencyMap[16]);
  const items2 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[16]).useStateFromStores(items2, () => stateFromStores1.getOnboardingConnections(guildId));
  closure_8 = stateFromStores1;
  const items3 = [guildId];
  const callback = React.useCallback((id, id2, selected) => {
    const option = onFinish(onClose[17]).selectOption(guildId, id, id2, selected);
  }, items3);
  const constants = callback;
  const items4 = [guildId, stateFromStoresArray];
  const callback1 = React.useCallback(() => {
    onFinish(onClose[17]).completeOnboarding(guildId, stateFromStoresArray);
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      const verificationForm = onFinish(onClose[18]).fetchVerificationForm(guildId);
      const obj = onFinish(onClose[18]);
    }
  }, items5);
  const items6 = [guildId, stateFromStoresArray, stateFromStores1, callback, callback1, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild];
  if (isFirstOpen) {
    if (stateFromStores1.length > 0) {
      let PROMPT = constants.CONNECTIONS;
    }
    obj = { screens: tmp6, initialRouteName: PROMPT };
    const intl = arg1(dependencyMap[20]).intl;
    obj.headerBackTitle = intl.string(arg1(dependencyMap[20]).t.13/7kX);
    return jsx(arg1(dependencyMap[19]).Navigator, obj);
  }
  PROMPT = constants.PROMPT;
};
