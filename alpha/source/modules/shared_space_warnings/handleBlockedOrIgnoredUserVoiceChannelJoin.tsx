// Module ID: 13856
// Function ID: 13857
// Name: handleBlockedOrIgnoredUserVoiceChannelJoin
// Dependencies: [2063, 5108, 13857, 13858, 2]
// Exports: default

// Module 13856 (handleBlockedOrIgnoredUserVoiceChannelJoin)
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 13857 */;
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 13858 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
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
