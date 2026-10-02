// Module ID: 8996
// Function ID: 8997
// Name: sanitizeChannelName
// Dependencies: [1107, 6693, 4992, 2]
// Exports: default

// Module 8996 (sanitizeChannelName)
import ChannelTypes from "ChannelTypes" /* 1107 */;
import sanitizeGuildTextChannelNameDefault from "sanitizeGuildTextChannelName" /* 4992 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6693 */;
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
