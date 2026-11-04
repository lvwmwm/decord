// Module ID: 18505
// Function ID: 18506
// Name: GuildHomeChannelRow
// Dependencies: [19, 1072, 4997, 11236, 21, 5141, 575, 1099, 14154, 1113, 15894, 2]
// Exports: default

// Module 18505 (GuildHomeChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import ChannelConstants from "ChannelConstants" /* 4997 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11236 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 14154 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_home/native/components/guild_sidebar/GuildHomeChannelRow.tsx");

export default function GuildHomeChannelRow(selected) {
  let DEFAULT;
  let intl2;
  let tmp5;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.GUILD_HOME));
  }, items);
  const ChannelModes = id(14154).ChannelModes;
  if (selected) {
    DEFAULT = ChannelModes.SELECTED;
    tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  BaseChannelItemDefault;
  const intl = tmp5(1113).intl;
  ({ name: intl2.string(tmp5(1113).t.VbpLyU), mode: DEFAULT });
  const BaseChannelName = tmp5(14154).BaseChannelName;
  intl2 = tmp5(1113).intl;
  ({ mode: DEFAULT, IconComponent: tmp5(15894).SignPostIcon });
  const BaseChannelIcon = tmp5(14154).BaseChannelIcon;
  return <tmp7 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(tmp5(1113).t.VbpLyU)} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
};
