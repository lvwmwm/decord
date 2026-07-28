// Module ID: 9058
// Function ID: 71066
// Name: UserProfileVoiceActivityIcon
// Dependencies: [31, 3793, 482, 33, 566, 9059, 4658, 4688, 4689, 4691, 4690, 4693, 2]
// Exports: default

// Module 9058 (UserProfileVoiceActivityIcon)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "sum";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/user_profile/native/UserProfileVoiceActivityIcon.tsx");

export default function UserProfileVoiceActivityIcon(channel) {
  channel = channel.channel;
  let obj = Object.create(null);
  obj.channel = 0;
  const merged = Object.assign(channel, obj);
  obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = outer1_3.can(outer1_4.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let tmp5 = !stateFromStores;
      if (!tmp5) {
        tmp5 = importDefault(4658)(channel);
      }
      if (isGuildStageVoiceResult) {
        if (tmp5) {
          obj = {};
          const merged1 = Object.assign(merged);
          let tmp8Result = jsx(channel(4688).StageLockIcon, {});
        }
        return tmp8Result;
      }
      if (isGuildStageVoiceResult) {
        const obj1 = {};
        const merged2 = Object.assign(merged);
        tmp8Result = jsx(channel(4689).StageIcon, {});
      } else if (channel.isNSFW()) {
        const obj2 = {};
        const merged3 = Object.assign(merged);
        tmp8Result = tmp8(tmp9(4691).VoiceWarningIcon, obj2);
      } else {
        if (tmp5) {
          let VoiceNormalIcon = tmp9(4690).VoiceLockIcon;
        } else {
          VoiceNormalIcon = tmp9(4693).VoiceNormalIcon;
        }
        const obj3 = {};
        const merged4 = Object.assign(merged);
        tmp8Result = tmp8(VoiceNormalIcon, obj3);
      }
    }
  }
  const merged5 = Object.assign(merged);
  return jsx(channel(9059).PhoneCallIcon, {});
};
