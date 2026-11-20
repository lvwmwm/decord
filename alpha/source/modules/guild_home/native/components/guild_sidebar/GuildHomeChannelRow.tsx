// Module ID: 17597
// Function ID: 17598
// Name: GuildHomeChannelRow
// Dependencies: [19, 1071, 4650, 5523, 21, 4794, 575, 1098, 13128, 1112, 14929, 2]
// Exports: default

// Module 17597 (GuildHomeChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import ChannelConstants from "ChannelConstants" /* 4650 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5523 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13128 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
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
  const ChannelModes = id(13128).ChannelModes;
  if (selected) {
    DEFAULT = ChannelModes.SELECTED;
    tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  BaseChannelItemDefault;
  const intl = tmp5(1112).intl;
  ({ name: intl2.string(tmp5(1112).t.VbpLyU), mode: DEFAULT });
  const BaseChannelName = tmp5(13128).BaseChannelName;
  intl2 = tmp5(1112).intl;
  ({ mode: DEFAULT, IconComponent: tmp5(14929).SignPostIcon });
  const BaseChannelIcon = tmp5(13128).BaseChannelIcon;
  return <tmp7 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(tmp5(1112).t.VbpLyU)} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
};
