// Module ID: 18266
// Function ID: 18267
// Name: GuildPowerupsChannelRow
// Dependencies: [19, 17, 11046, 21, 14056, 7086, 575, 1187, 5014, 18218, 18055, 5613, 14052, 14069, 13922, 14040, 7351, 5611, 1113, 2570, 18267, 13824, 2]
// Exports: default

// Module 18266 (GuildPowerupsChannelRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11046 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 14040 */;
import GuildPowerupsNotification from "GuildPowerupsNotification" /* 14056 */;
import SidebarCoachmarkOverlay from "SidebarCoachmarkOverlay" /* 18055 */;
import useGuildPowerupsCoachmarkDefault from "useGuildPowerupsCoachmark" /* 18218 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let tmp;
const LayerContext = tmp(5613);
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING === type) {
      const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
      const CircleErrorIcon = tmp4(7086).CircleErrorIcon;
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
  const tmp5 = dismissNewBadgeIfShown(14052)(guildId);
  let indicator;
  const tmp6 = dismissNewBadgeIfShown(14069);
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
  const ChannelModes = guildId(13922).ChannelModes;
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
  const LayerScope = tmp14(5611).LayerScope;
  const tmp17 = closure_6;
  const tmp18 = View;
  const tmp19 = GuildPowerupsCoachmark;
  if (tmp5 != null) {
    popout1 = tmp5.popout;
  }
  items1 = [closure_5(tmp19, obj3), ];
  const obj4 = { onPress: callback, style: tmp.container, accessible: true, mode: DEFAULT, unread: true === showUnread, accessibilityLabel: intl.string(dismissNewBadgeIfShown(2570).yv3DJJ), accessibilityState: { selected: false }, name: closure_5(BaseChannelName, obj5), icon: closure_5(BaseChannelIcon, obj6), channelInfo: tmp16Result };
  const tmp3Result = dismissNewBadgeIfShown(13922);
  intl = tmp14(1113).intl;
  obj5 = { name: intl2.string(dismissNewBadgeIfShown(2570).yv3DJJ), mode: DEFAULT };
  BaseChannelName = tmp14(13922).BaseChannelName;
  intl2 = tmp14(1113).intl;
  obj6 = { mode: DEFAULT, IconComponent: tmp14(18267).BoostTier2Icon };
  BaseChannelIcon = tmp14(13922).BaseChannelIcon;
  if (showNewBadgeOnRow) {
    tmp16Result = tmp16(tmp14(13824).NewBadge, {});
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
