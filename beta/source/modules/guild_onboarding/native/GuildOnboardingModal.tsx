// Module ID: 7353
// Function ID: 7354
// Name: GuildOnboardingModal
// Dependencies: [19, 7003, 4989, 5011, 5043, 7331, 7328, 1072, 21, 1099, 7354, 7064, 7384, 7337, 7413, 7356, 504, 7336, 6977, 7231, 1113, 2]
// Exports: default

// Module 7353 (GuildOnboardingModal)
import Fragment from "Fragment" /* 21 */;
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 6977 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 7328 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7336 */;
import react from "react" /* 19 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 7003 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import GuildStore from "GuildStore" /* 5011 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7331 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c10;
let unpackModuleId;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
let closure_9 = GuildOnboardingConstants.GuildOnboardingModalStates;
({ GuildFeatures: c10, Routes: unpackModuleId } = Constants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default function GuildOnboardingModal(guildId) {
  guildId = guildId.guildId;
  const onFinish = guildId.onFinish;
  const onClose = guildId.onClose;
  const landingAnimation = guildId.landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let stateFromStores;
  let callback;
  let tmp = guildId;
  let tmp2 = onClose;
  let obj = guildId(onClose[16]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => {
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
  });
  let obj2 = guildId(onClose[16]);
  const items1 = [callback];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  let obj3 = guildId(onClose[16]);
  const items2 = [callback];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  const items3 = [guildId];
  callback = landingAnimation.useCallback((id, id2, selected) => {
    const obj = GuildOnboardingActionCreatorsDefault;
    const option = obj.selectOption(guildId, id, id2, selected);
  }, items3);
  const items4 = [guildId, stateFromStoresArray];
  let callback1 = landingAnimation.useCallback(() => {
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
  const items6 = [guildId, stateFromStoresArray, stateFromStores1, callback, callback1, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild];
  if (isFirstOpen) {
    let PROMPT;
    let num = 0;
    if (stateFromStores1.length > 0) {
      PROMPT = callback1.CONNECTIONS;
    }
    const Navigator = tmp(tmp2[19]).Navigator;
    const intl = tmp(tmp2[20]).intl;
    return <Navigator screens={tmp8} initialRouteName={PROMPT} headerBackTitle={intl.string(tmp(tmp2[20]).t["13/7kX"])} />;
  }
  PROMPT = callback1.PROMPT;
};
