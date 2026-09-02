// Module ID: 16125
// Function ID: 16126
// Name: isGuildsBarGuildLabelEqual
// Dependencies: [2]
// Exports: default

// Module 16125 (isGuildsBarGuildLabelEqual)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guilds_bar/native/utils/isGuildsBarGuildLabelEqual.tsx");

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
