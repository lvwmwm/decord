// Module ID: 7699
// Function ID: 7700
// Name: GuildMemberSafetySearchUtils
// Dependencies: [7700, 2]
// Exports: splitQuery

// Module 7699 (GuildMemberSafetySearchUtils)
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7700 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/GuildMemberSafetySearchUtils.tsx");

export function splitQuery(query) {
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
}
