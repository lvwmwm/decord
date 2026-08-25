// Module ID: 4576
// Function ID: 4577
// Name: sanitizeGuildTextChannelName
// Dependencies: [2]
// Exports: default

// Module 4576 (sanitizeGuildTextChannelName)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/[\s-~]+/g, "-").replace(/^-+/, "");
  return str.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase();
};
