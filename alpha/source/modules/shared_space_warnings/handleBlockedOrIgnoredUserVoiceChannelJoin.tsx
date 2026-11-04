// Module ID: 15865
// Function ID: 15866
// Name: handleBlockedOrIgnoredUserVoiceChannelJoin
// Dependencies: [4990, 5898, 15866, 15867, 2]
// Exports: default

// Module 15865 (handleBlockedOrIgnoredUserVoiceChannelJoin)
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 15866 */;
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 15867 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
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
