// Module ID: 17779
// Function ID: 17780
// Name: ConjureChannelRow
// Dependencies: [19, 17, 1072, 4648, 5521, 21, 4792, 575, 1099, 17780, 13158, 1113, 4089, 13686, 17781, 2]
// Exports: default

// Module 17779 (ConjureChannelRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1099 */;
import _modDef4089 from "module_4089" /* 4089 */;
import ChannelConstants from "ChannelConstants" /* 4648 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5521 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13158 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 17780 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4792 */;
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
    DEFAULT = id(13158).ChannelModes.SELECTED;
    tmp7 = id;
  } else {
    const ChannelModes = id(13158).ChannelModes;
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
  ({ name: intl2.string(_modDef4089.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp7(13158).BaseChannelName;
  intl2 = tmp7(1113).intl;
  ({ mode: DEFAULT, IconComponent: tmp7(13686).MagicWandIcon });
  const BaseChannelIcon = tmp7(13158).BaseChannelIcon;
  let tmp9Result = null;
  if (badgeCount > 0) {
    const obj4 = { style: tmp.badge, children: null };
    tmp9Result = tmp9(View, obj4);
  }
  return <tmp3Result onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef4089.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={tmp9Result} />;
};
