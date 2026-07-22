// Module ID: 6747
// Function ID: 52520
// Name: splitQuery
// Dependencies: []
// Exports: splitQuery

// Module 6747 (splitQuery)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export const splitQuery = function splitQuery(query) {
  const parts = query.split(",");
  const mapped = parts.map((str) => str.trim());
  const items = [];
  const require = items;
  const items1 = [];
  const dependencyMap = items1;
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
