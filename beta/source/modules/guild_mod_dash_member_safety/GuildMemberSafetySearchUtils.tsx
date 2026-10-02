// Module ID: 6944
// Function ID: 6945
// Name: GuildMemberSafetySearchUtils
// Dependencies: [6945, 2]
// Exports: splitQuery

// Module 6944 (GuildMemberSafetySearchUtils)
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 6945 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export const splitQuery = function splitQuery(query) {
  const parts = query.split(",");
  const mapped = parts.map((item) => item.trim());
  const items = [];
  const items1 = [];
  const item = mapped.forEach((item) => {
    const obj = ApplicationCommandUtils;
    if (obj.isSnowflake(item)) {
      items.push(item);
    } else {
      items1.push(item);
    }
  });
  const items2 = [items1, items];
  return items2;
};
