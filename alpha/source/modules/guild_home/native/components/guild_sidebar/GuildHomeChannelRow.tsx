// Module ID: 18211
// Function ID: 18212
// Name: GuildHomeChannelRow
// Dependencies: [19, 1072, 4865, 11027, 21, 5009, 575, 1100, 13887, 1114, 15618, 2]
// Exports: default

// Module 18211 (GuildHomeChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13887 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
  const ChannelModes = id(13887).ChannelModes;
  if (selected) {
    DEFAULT = ChannelModes.SELECTED;
    tmp5 = tmp3;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp3;
  }
  BaseChannelItemDefault;
  const intl = tmp5(1114).intl;
  ({ name: intl2.string(tmp5(1114).t.VbpLyU), mode: DEFAULT });
  const BaseChannelName = tmp5(13887).BaseChannelName;
  intl2 = tmp5(1114).intl;
  ({ mode: DEFAULT, IconComponent: tmp5(15618).SignPostIcon });
  const BaseChannelIcon = tmp5(13887).BaseChannelIcon;
  return <tmp7 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(tmp5(1114).t.VbpLyU)} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
};
