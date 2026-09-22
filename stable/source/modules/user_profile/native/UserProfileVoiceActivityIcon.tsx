// Module ID: 11026
// Function ID: 11027
// Name: UserProfileVoiceActivityIcon
// Dependencies: [19, 4275, 1085, 21, 504, 7984, 5143, 5177, 5178, 5180, 5179, 5182, 2]
// Exports: default

// Module 11026 (UserProfileVoiceActivityIcon)
import isRoleRequiredDefault from "isRoleRequired" /* 5143 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4275 */;

const require = fn;
const Permissions = fn(1085).Permissions;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.assign({ channel: 0 }));
  const items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp6 = !stateFromStores;
      if (stateFromStores) {
        tmp6 = isRoleRequiredDefault(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp6) {
          const obj2 = {};
          const merged1 = Object.assign(merged);
          let tmp8Result = jsx(tmp2(5177).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const obj3 = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(tmp2(5178).StageIcon, {});
      } else if (channel.isNSFW()) {
        const obj4 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp2(5180).VoiceWarningIcon, obj4);
      } else {
        if (tmp6) {
          let VoiceNormalIcon = tmp2(5179).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(5182).VoiceNormalIcon;
        }
        const obj5 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj5);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(7984).PhoneCallIcon, {});
};
