// Module ID: 4715
// Function ID: 4716
// Name: sanitizeGuildTextChannelName
// Dependencies: [2]
// Exports: default

// Module 4715 (sanitizeGuildTextChannelName)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/[\s-~]+/g, "-").replace(/^-+/, "");
  return str.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase();
};
