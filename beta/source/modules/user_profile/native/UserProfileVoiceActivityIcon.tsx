// Module ID: 10352
// Function ID: 10353
// Name: UserProfileVoiceActivityIcon
// Dependencies: [19, 4469, 1085, 21, 504, 7305, 5373, 5410, 5411, 5413, 5412, 5415, 2]
// Exports: default

// Module 10352 (UserProfileVoiceActivityIcon)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5373 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  const merged = Object.assign(channel, Object.assign({ channel: 0 }));
  const items = [PermissionStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    const tmp = channel;
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      let tmp8Result;
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp6 = !stateFromStores;
      if (stateFromStores) {
        tmp6 = isRoleRequiredDefault(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp6) {
          const StageLockIcon = tmp2(5410).StageLockIcon;
          const merged1 = Object.assign(merged);
          tmp8Result = <StageLockIcon />;
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const StageIcon = tmp2(5411).StageIcon;
        const merged2 = Object.assign(merged);
        tmp8Result = <StageIcon />;
      } else if (channel.isNSFW()) {
        const obj4 = {};
        const VoiceWarningIcon = tmp2(5413).VoiceWarningIcon;
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(VoiceWarningIcon, obj4);
      } else {
        let VoiceNormalIcon;
        if (tmp6) {
          VoiceNormalIcon = tmp2(5412).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(5415).VoiceNormalIcon;
        }
        const obj5 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj5);
      }
    }
  }
  const PhoneCallIcon = tmp2(7305).PhoneCallIcon;
  const merged5 = Object.assign(merged);
  return <PhoneCallIcon />;
};
