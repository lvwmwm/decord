// Module ID: 8976
// Function ID: 8977
// Name: sanitizeChannelName
// Dependencies: [1108, 7381, 6001, 2]
// Exports: default

// Module 8976 (sanitizeChannelName)
import ChannelTypes from "ChannelTypes" /* 1108 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 6001 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 7381 */;
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
