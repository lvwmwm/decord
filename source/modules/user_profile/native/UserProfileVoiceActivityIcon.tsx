// Module ID: 9076
// Function ID: 71163
// Name: UserProfileVoiceActivityIcon
// Dependencies: []
// Exports: default

// Module 9076 (UserProfileVoiceActivityIcon)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = Object.create(null);
  obj.channel = 0;
  const merged = Object.assign(channel, obj);
  obj = arg1(dependencyMap[4]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_3.can(constants.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp5 = !stateFromStores;
      if (!tmp5) {
        tmp5 = importDefault(dependencyMap[6])(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp5) {
          obj = {};
          const merged1 = Object.assign(merged);
          let tmp8Result = jsx(arg1(dependencyMap[7]).StageLockIcon, obj);
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const obj1 = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(arg1(dependencyMap[8]).StageIcon, obj1);
      } else if (channel.isNSFW()) {
        const obj2 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp9(tmp10[9]).VoiceWarningIcon, obj2);
      } else {
        if (tmp5) {
          let VoiceNormalIcon = tmp9(tmp10[10]).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp9(tmp10[11]).VoiceNormalIcon;
        }
        const obj3 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj3);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(arg1(dependencyMap[5]).PhoneCallIcon, {});
};
