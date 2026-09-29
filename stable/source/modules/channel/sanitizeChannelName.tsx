// Module ID: 9858
// Function ID: 9859
// Name: sanitizeChannelName
// Dependencies: [1095, 7548, 4943, 2]
// Exports: default

// Module 9858 (sanitizeChannelName)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 4943 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7548 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/sanitizeChannelName.tsx");

export default function sanitizeChannelName(arg0, arg1) {
  const THREADS = ChannelTypes.ChannelTypesSets.THREADS;
  if (THREADS.has(arg1)) {
    let tmp3 = sanitizeThreadNameDefault(arg0, false);
  } else {
    const LIMITED_CHANNEL_NAME = ChannelTypes.ChannelTypesSets.LIMITED_CHANNEL_NAME;
    tmp3 = arg0;
    if (LIMITED_CHANNEL_NAME.has(arg1)) {
      tmp3 = sanitizeGuildTextChannelNameDefault(arg0);
    }
  }
  return tmp3;
};
