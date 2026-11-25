// Module ID: 17740
// Function ID: 17741
// Name: ConjureChannelRow
// Dependencies: [19, 17, 1071, 4769, 5642, 21, 4913, 575, 1098, 17741, 13251, 1112, 4190, 12325, 17742, 2]
// Exports: default

// Module 17740 (ConjureChannelRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import router_utils from "router_utils" /* 1098 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5642 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13251 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 17741 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4913 */;
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
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE_PROJECT));
  }, items);
  ({ hasUnread, badgeCount } = useConjureGuildUnreadSummaryDefault(id));
  useConjureGuildUnreadSummaryDefault(id);
  if (true === selected) {
    DEFAULT = id(13251).ChannelModes.SELECTED;
    tmp7 = id;
  } else {
    const ChannelModes = id(13251).ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp7 = tmp6;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp7 = tmp6;
    }
  }
  BaseChannelItemDefault;
  const intl = tmp7(1112).intl;
  ({ name: intl2.string(_modDef4190.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp7(13251).BaseChannelName;
  intl2 = tmp7(1112).intl;
  ({ mode: DEFAULT, IconComponent: tmp7(12325).MagicWandIcon });
  const BaseChannelIcon = tmp7(13251).BaseChannelIcon;
  let tmp9Result = null;
  if (badgeCount > 0) {
    const obj4 = { style: tmp.badge, children: null };
    tmp9Result = tmp9(View, obj4);
  }
  return <tmp3Result onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef4190.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={tmp9Result} />;
};
