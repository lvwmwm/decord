// Module ID: 4536
// Function ID: 4537
// Name: sanitizeGuildTextChannelName
// Dependencies: [2]
// Exports: default

// Module 4536 (sanitizeGuildTextChannelName)
const result = require("set").fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/[\s-~]+/g, "-").replace(/^-+/, "");
  return str.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase();
};
