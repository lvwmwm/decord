// Module ID: 4318
// Function ID: 37826
// Name: sanitizeGuildTextChannelName
// Dependencies: []
// Exports: default

// Module 4318 (sanitizeGuildTextChannelName)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/channel/sanitizeGuildTextChannelName.tsx");

export default function sanitizeGuildTextChannelName(str) {
  str = str.replace(/[\s-~]+/g, "-");
  const str2 = str.replace(/[\s-~]+/g, "-").replace(/^-+/, "");
  return str.replace(/[\s-~]+/g, "-").replace(/^-+/, "").replace(/[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").toLowerCase();
};
