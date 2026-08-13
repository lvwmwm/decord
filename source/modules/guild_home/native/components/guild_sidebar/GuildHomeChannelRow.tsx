// Module ID: 15403
// Function ID: 15404
// Name: GuildHomeChannelRow
// Dependencies: [19, 676, 1398, 9844, 21, 4342, 712, 1222, 11812, 1236, 13259, 2]
// Exports: default

// Module 15403 (GuildHomeChannelRow)
import noop from "noop";
import { Routes } from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  selected = selected.selected;
  let id;
  id = selected.guild.id;
  const items = [id];
  const callback = React.useCallback(() => {
    id(outer1_2[7]).transitionTo(outer1_4.CHANNEL(id, outer1_5.GUILD_HOME));
  }, items);
  const ChannelModes = id(11812).ChannelModes;
  if (selected) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  let obj = { onPress: callback, style: createCacheKey().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = createCacheKey();
  const intl = tmp5(1236).intl;
  obj[3] = intl.string(tmp5(1236).t.VbpLyU);
  obj[4] = { selected };
  obj[5] = DEFAULT;
  obj = { name: null, mode: null };
  const intl2 = tmp5(1236).intl;
  obj[0] = intl2.string(tmp5(1236).t.VbpLyU);
  obj[1] = DEFAULT;
  obj[6] = jsx(tmp5(11812).BaseChannelName, { name: null, mode: null });
  obj = { mode: DEFAULT, IconComponent: null };
  obj[1] = tmp5(13259).SignPostIcon;
  obj[7] = jsx(tmp5(11812).BaseChannelIcon, { mode: DEFAULT, IconComponent: null });
  return jsx(importDefault(11812), { mode: DEFAULT, IconComponent: null });
};
