// Module ID: 15848
// Function ID: 15849
// Name: VibegrationsChannelRow
// Dependencies: [19, 1074, 2052, 9577, 21, 4836, 576, 1101, 11868, 1115, 3715, 9611, 2]
// Exports: default

// Module 15848 (VibegrationsChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import _modDef3715 from "module_3715" /* 3715 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 11868 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelRow.tsx");

export default function VibegrationsChannelRow(selected) {
  let DEFAULT;
  let intl2;
  let tmp5;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
  }, items);
  if (true === selected) {
    DEFAULT = id(11868).ChannelModes.SELECTED;
    tmp5 = id;
  } else {
    DEFAULT = id(11868).ChannelModes.DEFAULT;
    tmp5 = id;
  }
  BaseChannelItemDefault;
  const intl = tmp5(1115).intl;
  ({ name: intl2.string(_modDef3715.Xmvb23), mode: DEFAULT });
  const BaseChannelName = tmp5(11868).BaseChannelName;
  intl2 = tmp5(1115).intl;
  ({ mode: DEFAULT, IconComponent: tmp5(9611).MagicWandIcon });
  const BaseChannelIcon = tmp5(11868).BaseChannelIcon;
  return <tmp8 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef3715.Xmvb23)} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
};
