// Module ID: 18271
// Function ID: 18272
// Name: ConjureChannelRow
// Dependencies: [19, 1072, 4870, 11046, 21, 5014, 575, 1099, 18272, 13937, 1113, 3868, 12123, 18273, 2]
// Exports: default

// Module 18271 (ConjureChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ChannelConstants from "ChannelConstants" /* 4870 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11046 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13937 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 18272 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default function ConjureChannelRow(selected) {
  let DEFAULT;
  let intl2;
  let tmp7;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
  }, items);
  const tmp5 = useConjureGuildUnreadSummaryDefault(id);
  const hasUnread = tmp5.hasUnread;
  const badgeCount = tmp5.badgeCount;
  if (true === selected) {
    DEFAULT = id(13937).ChannelModes.SELECTED;
    tmp7 = id;
  } else {
    const ChannelModes = id(13937).ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp7 = tmp6;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp7 = tmp6;
    }
  }
  BaseChannelItemDefault;
  const intl = tmp7(1113).intl;
  ({ name: intl2.string(_modDef3868.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp7(13937).BaseChannelName;
  intl2 = tmp7(1113).intl;
  ({ mode: DEFAULT, IconComponent: tmp7(12123).MagicWandIcon });
  const BaseChannelIcon = tmp7(13937).BaseChannelIcon;
  return <tmp3Result onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef3868.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={null} />;
};
