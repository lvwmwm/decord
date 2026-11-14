// Module ID: 16895
// Function ID: 16896
// Name: SystemTelecomUtils
// Dependencies: [5155, 1072, 16893, 2]
// Exports: isSystemTelecomEnabled, isSystemTelecomEnabledForChannel

// Module 16895 (SystemTelecomUtils)
import Constants from "Constants" /* 1072 */;
import react_nativeDefault from "react-native" /* 16893 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/calls/native/SystemTelecomUtils.android.tsx");

export function isSystemTelecomEnabled() {
  const obj = react_nativeDefault;
  return obj.getConstants().isAvailable;
}
export function isSystemTelecomEnabledForChannel(guild_id, channelId) {
  const obj = react_nativeDefault;
  if (obj.getConstants().isAvailable) {
    const channel = ChannelStore.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let tmp7 = type === ChannelTypes.DM;
    if (!tmp7) {
      let type1;
      if (channel != null) {
        type1 = channel.type;
      }
      tmp7 = type1 === tmp6.GROUP_DM;
    }
    return tmp7;
  } else {
    return false;
  }
}
