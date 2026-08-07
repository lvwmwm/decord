// Module ID: 14073
// Function ID: 14074
// Name: GuildRow
// Dependencies: [6936, 21, 4302, 712, 589, 6992, 5373, 5719, 5704, 4298, 1236, 2284, 5707, 2]
// Exports: default

// Module 14073 (GuildRow)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  let obj = guildActivity(589);
  const items = [freshTeenActivityWithMap];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = tmp2(6992).getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = stateFromStores.name;
    obj[1] = topUserOrGuildDescription;
    obj = { guild: null, style: null };
    obj[0] = stateFromStores;
    obj[1] = tmp.guildIcon;
    obj[2] = callback(importDefault(5719), obj);
    return callback(tmp2(5373).TableRow, obj);
  }
  tmp = createCacheKey();
}
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { header: { textAlign: "center" }, guildIcon: null };
createCacheKey = { borderRadius: require("Themes").radii.md, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: createCacheKey().header, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(importDefault(2284).Lq9Set);
  const items = [callback(require(4298) /* Text */.Text, obj), ];
  obj = { hasIcons: true, children: null };
  obj[1] = topGuildActivities.map((guildActivity) => callback(closure_7, { guildActivity }, guildActivity.guild_id));
  items[1] = callback(require(5707) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj[0] = items;
  return callback2(require(5704) /* ActionSheet */.ActionSheet, obj);
};
