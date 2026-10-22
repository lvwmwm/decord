// Module ID: 8945
// Function ID: 8946
// Name: sanitizeChannelName
// Dependencies: [1108, 7365, 5988, 2]
// Exports: default

// Module 8945 (sanitizeChannelName)
import ChannelTypes from "ChannelTypes" /* 1108 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 5988 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7365 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/sanitizeChannelName.tsx");

export default function sanitizeChannelName(arg0, arg1) {
  let tmp3;
  const THREADS = ChannelTypes.ChannelTypesSets.THREADS;
  if (THREADS.has(arg1)) {
    tmp3 = sanitizeThreadNameDefault(arg0, false);
  } else {
    const LIMITED_CHANNEL_NAME = ChannelTypes.ChannelTypesSets.LIMITED_CHANNEL_NAME;
    tmp3 = arg0;
    if (LIMITED_CHANNEL_NAME.has(arg1)) {
      tmp3 = sanitizeGuildTextChannelNameDefault(arg0);
    }
  }
  return tmp3;
};
