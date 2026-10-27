// Module ID: 14811
// Function ID: 14812
// Name: handleBlockedOrIgnoredUserVoiceChannelJoin
// Dependencies: [2068, 5209, 14812, 14813, 2]
// Exports: default

// Module 14811 (handleBlockedOrIgnoredUserVoiceChannelJoin)
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 14812 */;
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 14813 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5209 */;
import size from "module_2" /* 2 */;

let closure_4 = SharedSpacesWarningStore.userBlockedWarningInCooldown;
let result = size.fileFinishedImporting("modules/shared_space_warnings/handleBlockedOrIgnoredUserVoiceChannelJoin.tsx");

export default function handleBlockedOrIgnoredUserVoiceChannelJoin(arg0, items1) {
  const channelId = RTCConnectionStore.getChannelId();
  const tmp2 = arg0 === channelId && null != ChannelStore.getChannel(arg0);
  if (tmp2) {
    if (!closure_4(items1)) {
      const obj = showVoiceChannelBlockedUserWarning;
      const result = obj.showVoiceChannelBlockedUserWarning(channelId, items1);
    }
  }
};
