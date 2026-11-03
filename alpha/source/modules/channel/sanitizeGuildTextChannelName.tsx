// Module ID: 6173
// Function ID: 6174
// Name: sanitizeGuildTextChannelName
// Dependencies: [2]
// Exports: default

// Module 6173 (sanitizeGuildTextChannelName)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/^-+/, "");
  const str3 = str2.replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "");
  return str3.toLowerCase();
};
