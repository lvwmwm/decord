// Module ID: 15849
// Function ID: 15850
// Name: GuildPowerupsChannelRow
// Dependencies: [19, 17, 9577, 21, 11991, 6028, 576, 1177, 4836, 15804, 15644, 6578, 11987, 12006, 11868, 11975, 6603, 6577, 1115, 2519, 15850, 11774, 2]
// Exports: default

// Module 15849 (GuildPowerupsChannelRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 11975 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 11991 */;
import SidebarCoachmarkOverlay from "SidebarCoachmarkOverlay" /* 15644 */;
import useGuildPowerupsCoachmarkDefault from "useGuildPowerupsCoachmark" /* 15804 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let tmp;
const LayerContext = tmp(6578);
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING === type) {
      const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
      const CircleErrorIcon = tmp4(6028).CircleErrorIcon;
      return hasOwnProperty(CircleErrorIcon, obj2);
    } else if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD === type) {
      const obj = { value: indicator.count, isMentionLowImportance: true };
      return hasOwnProperty(native.Badge, obj);
    } else {
      return null;
    }
  }
}
function GuildPowerupsCoachmarkHost(arg0) {
  let guildId;
  let popout;
  let targetRef;
  ({ targetRef, guildId, popout } = arg0);
  useGuildPowerupsCoachmarkDefault(targetRef, guildId, popout);
  return null;
}
function GuildPowerupsCoachmark(arg0) {
  let guildId;
  let popout;
  let targetRef;
  ({ targetRef, guildId, popout } = arg0);
  const context = react.useContext(SidebarCoachmarkOverlay.SidebarCoachmarkOverlayContext);
  const tmp5 = hasOwnProperty(GuildPowerupsCoachmarkHost, { targetRef, guildId, popout });
  let tmp4Result = tmp5;
  const tmp4 = hasOwnProperty;
  if (null != context) {
    const obj = { value: context, children: tmp5 };
    tmp4Result = tmp4(LayerContext.LayerContext.Provider, obj);
  }
  return tmp4Result;
}
const View = react_native.View;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  let BaseChannelIcon;
  let BaseChannelName;
  let DEFAULT;
  let intl;
  let intl2;
  let items1;
  let obj5;
  let obj6;
  let popout1;
  let tmp14;
  let tmp16Result;
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  let obj = react;
  const tmp = closure_8();
  const ref = react.useRef(null);
  const tmp5 = dismissNewBadgeIfShown(11987)(guildId);
  let indicator;
  const tmp6 = dismissNewBadgeIfShown(12006);
  if (tmp5 != null) {
    indicator = tmp5.indicator;
  }
  let tmp8 = null != indicator;
  if (!tmp8) {
    let popout;
    if (tmp5 != null) {
      popout = tmp5.popout;
    }
    tmp8 = null != popout;
  }
  const tmp6Result = tmp6(guildId, tmp8);
  dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
  let showUnread;
  const showNewBadgeOnRow = tmp6Result.showNewBadgeOnRow;
  if (tmp5 != null) {
    showUnread = tmp5.showUnread;
  }
  const ChannelModes = guildId(11868).ChannelModes;
  if (true === showUnread) {
    DEFAULT = ChannelModes.UNREAD_IMPORTANT;
    tmp14 = tmp13;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp14 = tmp13;
  }
  const items = [guildId, dismissNewBadgeIfShown];
  const callback = obj.useCallback(() => {
    dismissNewBadgeIfShown();
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_CHANNEL_LIST_ROW };
    const tmp2 = openGuildPowerupsModalDefault;
    tmp2(obj);
  }, items);
  const obj3 = { targetRef: ref, guildId, popout: popout1 };
  popout1 = undefined;
  const obj2 = { ref, collapsable: false, children: items1 };
  const LayerScope = tmp14(6577).LayerScope;
  const tmp17 = closure_6;
  const tmp18 = View;
  const tmp19 = GuildPowerupsCoachmark;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  items1 = [closure_5(tmp19, obj3), ];
  const obj4 = { onPress: callback, style: tmp.container, accessible: true, mode: DEFAULT, unread: true === showUnread, accessibilityLabel: intl.string(dismissNewBadgeIfShown(2519).yv3DJJ), accessibilityState: { selected: false }, name: closure_5(BaseChannelName, obj5), icon: closure_5(BaseChannelIcon, obj6), channelInfo: tmp16Result };
  const tmp3Result = dismissNewBadgeIfShown(11868);
  intl = tmp14(1115).intl;
  obj5 = { name: intl2.string(dismissNewBadgeIfShown(2519).yv3DJJ), mode: DEFAULT };
  BaseChannelName = tmp14(11868).BaseChannelName;
  intl2 = tmp14(1115).intl;
  obj6 = { mode: DEFAULT, IconComponent: tmp14(15850).BoostTier2Icon };
  BaseChannelIcon = tmp14(11868).BaseChannelIcon;
  if (showNewBadgeOnRow) {
    tmp16Result = tmp16(tmp14(11774).NewBadge, {});
  } else {
    let indicator1;
    const tmp22 = GuildPowerupsChannelRowIndicator;
    if (tmp5 != null) {
      indicator1 = tmp5.indicator;
    }
    const obj7 = { indicator: indicator1 };
    tmp16Result = tmp16(tmp22, obj7);
  }
  const obj8 = { zIndex: 1, children: tmp17(tmp18, obj2) };
  items1[1] = closure_5(tmp3Result, obj4);
  return closure_5(LayerScope, obj8);
};
