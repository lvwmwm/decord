// Module ID: 10001
// Function ID: 77295
// Name: GuildNSFW
// Dependencies: []
// Exports: default

// Module 10001 (GuildNSFW)
let closure_3 = [8.477];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const AgeGateSource = arg1(dependencyMap[3]).AgeGateSource;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  const arg1 = channelId;
  function handleDisagree(self) {
    callback(closure_2[8]).nsfwReturnToSafety(self.guildId);
    if (null != self.onReturnToSafety) {
      self.onReturnToSafety();
    }
  }
  let obj = arg1(dependencyMap[5]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(arg0.guildId));
  let obj1 = arg1(dependencyMap[6]);
  const ageGateVerifyContentForGuild = obj1.useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  let obj2 = arg1(dependencyMap[7]);
  const maybePerformReactiveCheckForSource = obj2.useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  obj = {};
  const callback = React.useCallback(() => {
    let obj = callback(closure_2[9]);
    obj = { entryPoint: arg0(closure_2[10]).AgeVerificationModalEntryPoint.NSFW_GUILD };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  }, []);
  const merged = Object.assign(callback(ageGateVerifyContentForGuild, closure_3));
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  obj["guildId"] = id;
  obj["channelId"] = channelId.channelId;
  const intl = arg1(dependencyMap[11]).intl;
  obj["disagreement"] = intl.string(arg1(dependencyMap[11]).t./g10LC);
  if (arg1(dependencyMap[10]).NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (arg1(dependencyMap[10]).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (arg1(dependencyMap[10]).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        obj = { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree };
        const merged1 = Object.assign(obj);
        return jsx(importDefault(dependencyMap[12]), obj);
      } else {
        obj1 = {
          modalType,
          onAgree: function handleAgree() {
                  callback(closure_2[8]).nsfwAgree(arg0.guildId);
                },
          onDisagree: handleDisagree
        };
        const merged2 = Object.assign(obj);
        return jsx(importDefault(dependencyMap[12]), obj1);
      }
    }
  }
  obj2 = { modalType, onAgree: callback, onDisagree: handleDisagree };
  const tmp3 = callback(ageGateVerifyContentForGuild, closure_3);
  const merged3 = Object.assign(obj);
  return jsx(importDefault(dependencyMap[12]), obj2);
};
