// Module ID: 14700
// Function ID: 110918
// Name: isGuildsBarGuildLabelEqual
// Dependencies: []
// Exports: default

// Module 14700 (isGuildsBarGuildLabelEqual)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildLabelEqual.tsx");

export default function isGuildsBarGuildLabelEqual(count, count2) {
  let tmp = count.count === count2.count;
  if (tmp) {
    let tmp2 = count.names.length === count2.names.length;
    if (tmp2) {
      const names = count.names;
      const names2 = count2.names;
      const joined = names.join("|");
      tmp2 = joined === names2.join("|");
    }
    tmp = tmp2;
  }
  return tmp;
};
