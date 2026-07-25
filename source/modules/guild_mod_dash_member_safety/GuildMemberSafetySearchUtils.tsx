// Module ID: 5748
// Function ID: 49887
// Name: splitQuery
// Dependencies: [5674, 2]
// Exports: splitQuery

// Module 5748 (splitQuery)
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export const splitQuery = function splitQuery(query) {
  const parts = query.split(",");
  const mapped = parts.map((str) => str.trim());
  const items = [];
  const items1 = [];
  const item = mapped.forEach((text) => {
    if (obj.isSnowflake(text)) {
      items.push(text);
    } else {
      items1.push(text);
    }
  });
  const items2 = [items1, items];
  return items2;
};
