// Module ID: 15032
// Function ID: 114511
// Name: GuildHomeChannelRow
// Dependencies: [31, 653, 1355, 10260, 33, 4130, 689, 1198, 11424, 1212, 12850, 2]
// Exports: default

// Module 15032 (GuildHomeChannelRow)
import result from "result";
import { Routes } from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("set").fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = React.useCallback(() => {
    id(outer1_2[7]).transitionTo(outer1_4.CHANNEL(id, outer1_5.GUILD_HOME));
  }, items);
  const ChannelModes = id(11424).ChannelModes;
  const tmp3 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  let obj = { onPress: callback, style: _createForOfIteratorHelperLoose().container, accessible: true };
  const tmp = _createForOfIteratorHelperLoose();
  const intl = id(1212).intl;
  obj.accessibilityLabel = intl.string(id(1212).t.VbpLyU);
  obj.accessibilityState = { selected };
  obj.mode = tmp3;
  obj = {};
  const intl2 = id(1212).intl;
  obj.name = intl2.string(id(1212).t.VbpLyU);
  obj.mode = tmp3;
  obj.name = jsx(id(11424).BaseChannelName, {});
  obj = { mode: tmp3, IconComponent: id(12850).SignPostIcon };
  obj.icon = jsx(id(11424).BaseChannelIcon, { mode: tmp3, IconComponent: id(12850).SignPostIcon });
  return jsx(importDefault(11424), { mode: tmp3, IconComponent: id(12850).SignPostIcon });
};
