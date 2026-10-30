// Module ID: 10745
// Function ID: 10746
// Name: UserProfileVoiceActivityIcon
// Dependencies: [19, 4941, 1083, 21, 504, 9812, 7269, 8660, 8661, 8663, 8662, 8665, 2]
// Exports: default

// Module 10745 (UserProfileVoiceActivityIcon)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1083 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7269 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4941 */;
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
          const StageLockIcon = tmp2(8660).StageLockIcon;
          const merged1 = Object.assign(merged);
          tmp8Result = <StageLockIcon />;
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const StageIcon = tmp2(8661).StageIcon;
        const merged2 = Object.assign(merged);
        tmp8Result = <StageIcon />;
      } else if (channel.isNSFW()) {
        const obj4 = {};
        const VoiceWarningIcon = tmp2(8663).VoiceWarningIcon;
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(VoiceWarningIcon, obj4);
      } else {
        let VoiceNormalIcon;
        if (tmp6) {
          VoiceNormalIcon = tmp2(8662).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp2(8665).VoiceNormalIcon;
        }
        const obj5 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj5);
      }
    }
  }
  const PhoneCallIcon = tmp2(9812).PhoneCallIcon;
  const merged5 = Object.assign(merged);
  return <PhoneCallIcon />;
};
