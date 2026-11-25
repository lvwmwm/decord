// Module ID: 8490
// Function ID: 8491
// Name: sanitizeChannelName
// Dependencies: [1092, 8491, 6777, 2]
// Exports: default

// Module 8490 (sanitizeChannelName)
import ChannelTypes from "ChannelTypes" /* 1092 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 6777 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 8491 */;
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
