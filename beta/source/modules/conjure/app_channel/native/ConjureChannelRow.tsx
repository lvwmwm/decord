// Module ID: 18643
// Function ID: 18644
// Name: ConjureChannelRow
// Dependencies: [19, 17, 1072, 5026, 5914, 21, 5170, 575, 1099, 18644, 14203, 1113, 4026, 11137, 13269, 2]
// Exports: default

// Module 18643 (ConjureChannelRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef4026 from "module_4026" /* 4026 */;
import ChannelConstants from "ChannelConstants" /* 5026 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5914 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 14203 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 18644 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const View = react_native.View;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, badge: obj3 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { paddingStart: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default function ConjureChannelRow(selected) {
  let DEFAULT;
  let badgeCount;
  let hasUnread;
  let intl2;
  let tmp7;
  selected = selected.selected;
  const guild = selected.guild;
  const tmp = closure_8();
  const id = guild.id;
  const items = [id];
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
  }, items);
  ({ hasUnread, badgeCount } = useConjureGuildUnreadSummaryDefault(id));
  useConjureGuildUnreadSummaryDefault(id);
  if (true === selected) {
    DEFAULT = id(14203).ChannelModes.SELECTED;
    tmp7 = id;
  } else {
    const ChannelModes = id(14203).ChannelModes;
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
  ({ name: intl2.string(_modDef4026.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp7(14203).BaseChannelName;
  intl2 = tmp7(1113).intl;
  ({ mode: DEFAULT, IconComponent: tmp7(11137).MagicWandIcon });
  const BaseChannelIcon = tmp7(14203).BaseChannelIcon;
  let tmp9Result = null;
  if (badgeCount > 0) {
    const obj4 = { style: tmp.badge, children: null };
    tmp9Result = tmp9(View, obj4);
  }
  return <tmp3Result onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef4026.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={tmp9Result} />;
};
