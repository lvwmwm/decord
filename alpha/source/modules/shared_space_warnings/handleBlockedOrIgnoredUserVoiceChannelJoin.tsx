// Module ID: 14696
// Function ID: 14697
// Name: handleBlockedOrIgnoredUserVoiceChannelJoin
// Dependencies: [2065, 5169, 14697, 14698, 2]
// Exports: default

// Module 14696 (handleBlockedOrIgnoredUserVoiceChannelJoin)
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 14697 */;
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 14698 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5169 */;
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
