// Module ID: 14993
// Function ID: 14994
// Name: handleBlockedOrIgnoredUserVoiceChannelJoin
// Dependencies: [4821, 5700, 14994, 14995, 2]
// Exports: default

// Module 14993 (handleBlockedOrIgnoredUserVoiceChannelJoin)
import SharedSpacesWarningStore from "SharedSpacesWarningStore" /* 14994 */;
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 14995 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5700 */;
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
