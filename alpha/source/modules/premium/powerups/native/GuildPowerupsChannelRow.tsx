// Module ID: 16643
// Function ID: 16644
// Name: GuildPowerupsChannelRow
// Dependencies: [19, 17, 10464, 21, 12844, 6940, 576, 1177, 4829, 16598, 16438, 7490, 12840, 12859, 12728, 12828, 7515, 7489, 1115, 2518, 16644, 12634, 2]
// Exports: default

// Module 16643 (GuildPowerupsChannelRow)
import nativeDefault from "native" /* 576 */;
import LayerContext from "LayerContext" /* 7490 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12828 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 12844 */;
import SidebarCoachmarkOverlay from "SidebarCoachmarkOverlay" /* 16438 */;
import useGuildPowerupsCoachmarkDefault from "useGuildPowerupsCoachmark" /* 16598 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING === type) {
      const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
      return hasOwnProperty(tmp4(6940).CircleErrorIcon, obj2);
    } else if (tmp4(12844).GuildPowerupNotificationIndicatorType.UNREAD === type) {
      const obj = { value: indicator.count, isMentionLowImportance: true };
      return hasOwnProperty(tmp4(1177).Badge, obj);
    } else {
      return null;
    }
  }
}
function GuildPowerupsCoachmarkHost(arg0) {
  ({ targetRef, guildId, popout } = arg0);
  useGuildPowerupsCoachmarkDefault(targetRef, guildId, popout);
  return null;
}
function GuildPowerupsCoachmark(arg0) {
  ({ targetRef, guildId, popout } = arg0);
  const context = noop.useContext(SidebarCoachmarkOverlay.SidebarCoachmarkOverlayContext);
  const tmp5 = hasOwnProperty(GuildPowerupsCoachmarkHost, { targetRef, guildId, popout });
  let tmp4Result = tmp5;
  if (null != context) {
    const obj = { value: context, children: tmp5 };
    tmp4Result = hasOwnProperty(LayerContext.LayerContext.Provider, obj);
  }
  return tmp4Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { marginVertical: fn(10464).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  const ref = noop.useRef(null);
  const tmp5 = dismissNewBadgeIfShown(12840)(guildId);
  let indicator;
  let obj = noop;
  const tmp = closure_8();
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
  const tmp6Result = dismissNewBadgeIfShown(12859)(guildId, tmp8);
  dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
  let showUnread;
  if (tmp5 != null) {
    showUnread = tmp5.showUnread;
  }
  const ChannelModes = guildId(12728).ChannelModes;
  if (true === showUnread) {
    let DEFAULT = ChannelModes.UNREAD_IMPORTANT;
    let tmp14 = tmp13;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp14 = tmp13;
  }
  const items = [guildId, dismissNewBadgeIfShown];
  const callback = obj.useCallback(() => {
    dismissNewBadgeIfShown();
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_CHANNEL_LIST_ROW };
    openGuildPowerupsModalDefault(obj);
  }, items);
  const obj2 = { ref, collapsable: false, children: null };
  const obj3 = { targetRef: ref, guildId, popout: null };
  let popout1;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  obj3.popout = popout1;
  const items1 = [closure_5(GuildPowerupsCoachmark, obj3), ];
  const obj4 = { onPress: callback, style: tmp.container, accessible: true, mode: DEFAULT, unread: true === showUnread, accessibilityLabel: null, accessibilityState: null, name: null, icon: null, channelInfo: null };
  const tmp17 = closure_6;
  const tmp18 = View;
  const tmp6 = dismissNewBadgeIfShown(12859);
  const intl = tmp14(1115).intl;
  obj4.accessibilityLabel = intl.string(dismissNewBadgeIfShown(2518).yv3DJJ);
  obj4.accessibilityState = { selected: false };
  const obj5 = { name: null, mode: null };
  const intl2 = tmp14(1115).intl;
  obj5.name = intl2.string(dismissNewBadgeIfShown(2518).yv3DJJ);
  obj5.mode = DEFAULT;
  obj4.name = closure_5(tmp14(12728).BaseChannelName, obj5);
  const tmp3Result = dismissNewBadgeIfShown(12728);
  obj4.icon = closure_5(tmp14(12728).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp14(16644).BoostTier2Icon });
  if (tmp6Result.showNewBadgeOnRow) {
    let tmp16Result = tmp16(tmp14(12634).NewBadge, {});
  } else {
    let indicator1;
    if (tmp5 != null) {
      indicator1 = tmp5.indicator;
    }
    const obj7 = { indicator: indicator1 };
    tmp16Result = tmp16(GuildPowerupsChannelRowIndicator, obj7);
  }
  const obj8 = { zIndex: 1, children: null };
  obj4.channelInfo = tmp16Result;
  items1[1] = closure_5(tmp3Result, obj4);
  obj2.children = items1;
  obj8.children = tmp17(tmp18, obj2);
  return closure_5(tmp14(7489).LayerScope, obj8);
};
