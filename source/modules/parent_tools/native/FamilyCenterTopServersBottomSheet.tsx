// Module ID: 13801
// Function ID: 105753
// Name: GuildRow
// Dependencies: [6769, 33, 4130, 689, 566, 6828, 5165, 5515, 5500, 4126, 1212, 2198, 5503, 2]
// Exports: default

// Module 13801 (GuildRow)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function GuildRow(guildActivity) {
  guildActivity = guildActivity.guildActivity;
  let obj = guildActivity(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const topUserOrGuildDescription = guildActivity(6828).getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    obj = { label: stateFromStores.name, subLabel: topUserOrGuildDescription };
    obj = { guild: stateFromStores, style: tmp.guildIcon };
    obj.icon = callback(importDefault(5515), obj);
    return callback(guildActivity(5165).TableRow, obj);
  }
  tmp = _createForOfIteratorHelperLoose();
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { textAlign: "center" } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.guildIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = {};
  obj = { variant: "text-md/bold", style: _createForOfIteratorHelperLoose().header };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(importDefault(2198).Lq9Set);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { hasIcons: true, children: topGuildActivities.map((guildActivity) => outer1_4(outer1_7, { guildActivity }, guildActivity.guild_id)) };
  items[1] = callback(require(5503) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj.children = items;
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
};
