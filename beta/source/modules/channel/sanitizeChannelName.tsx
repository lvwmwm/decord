// Module ID: 9804
// Function ID: 9805
// Name: sanitizeChannelName
// Dependencies: [1099, 7518, 4913, 2]
// Exports: default

// Module 9804 (sanitizeChannelName)
import ChannelTypes from "ChannelTypes" /* 1099 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 4913 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7518 */;
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
