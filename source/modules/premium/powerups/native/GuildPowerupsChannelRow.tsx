// Module ID: 14914
// Function ID: 112311
// Name: GuildPowerupsChannelRowIndicator
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14914 (GuildPowerupsChannelRowIndicator)
import closure_3 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (arg1(dependencyMap[4]).GuildPowerupNotificationIndicatorType.WARNING === type) {
      let obj = { color: importDefault(dependencyMap[6]).colors.STATUS_WARNING, size: "sm" };
      return callback(arg1(dependencyMap[5]).CircleErrorIcon, obj);
    } else if (arg1(dependencyMap[4]).GuildPowerupNotificationIndicatorType.UNREAD === type) {
      obj = { value: indicator.count, isMentionLowImportance: true };
      return callback(arg1(dependencyMap[7]).Badge, obj);
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
  importDefault(dependencyMap[9])(targetRef, guildId, popout);
  return null;
}
function GuildPowerupsCoachmark(arg0) {
  let guildId;
  let popout;
  let targetRef;
  ({ targetRef, guildId, popout } = arg0);
  const context = React.useContext(arg1(dependencyMap[10]).SidebarCoachmarkOverlayContext);
  const tmp2 = callback(GuildPowerupsCoachmarkHost, { targetRef, guildId, popout });
  let tmp3 = tmp2;
  if (null != context) {
    const obj = { value: context, children: tmp2 };
    tmp3 = callback(arg1(dependencyMap[11]).LayerContext.Provider, obj);
  }
  return tmp3;
}
({ jsx: closure_5, jsxs: closure_6 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { marginVertical: require("__exportStarResult1").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("__exportStarResult1").radii.md };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let importDefault;
  const ref = React.useRef(null);
  const tmp3 = importDefault(dependencyMap[12])(guildId);
  let indicator;
  const tmp = __exportStarResult1();
  if (null != tmp3) {
    indicator = tmp3.indicator;
  }
  let tmp6 = null != indicator;
  if (!tmp6) {
    let popout;
    if (null != tmp3) {
      popout = tmp3.popout;
    }
    tmp6 = null != popout;
  }
  const tmp4Result = importDefault(dependencyMap[13])(guildId, tmp6);
  const dismissNewBadgeIfShown = tmp4Result.dismissNewBadgeIfShown;
  importDefault = dismissNewBadgeIfShown;
  let showUnread;
  if (null != tmp3) {
    showUnread = tmp3.showUnread;
  }
  const ChannelModes = arg1(dependencyMap[14]).ChannelModes;
  const tmp11 = true === showUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  const items = [guildId, dismissNewBadgeIfShown];
  let obj = { ref, collapsable: false };
  obj = { targetRef: ref, guildId };
  let popout1;
  const callback = React.useCallback(() => {
    dismissNewBadgeIfShown();
    const obj = { guildId, analyticsLocation: dismissNewBadgeIfShown(closure_2[16]).GUILD_POWERUPS_CHANNEL_LIST_ROW };
    dismissNewBadgeIfShown(closure_2[15])(obj);
  }, items);
  if (null != tmp3) {
    popout1 = tmp3.popout;
  }
  obj.popout = popout1;
  const items1 = [callback(GuildPowerupsCoachmark, obj), ];
  obj = { onPress: callback, style: tmp.container, accessible: true, mode: tmp11, unread: tmp10 };
  const tmp13 = closure_6;
  const tmp14 = View;
  const tmp15 = callback;
  const tmp16 = GuildPowerupsCoachmark;
  const tmp18 = callback;
  const tmp4 = importDefault(dependencyMap[13]);
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityLabel = intl.string(importDefault(dependencyMap[18]).yv3DJJ);
  obj.accessibilityState = { selected: false };
  const obj1 = {};
  const intl2 = arg1(dependencyMap[17]).intl;
  obj1.name = intl2.string(importDefault(dependencyMap[18]).yv3DJJ);
  obj1.mode = tmp11;
  obj.name = callback(arg1(dependencyMap[14]).BaseChannelName, obj1);
  const obj2 = { mode: tmp11, IconComponent: arg1(dependencyMap[19]).BoostTier2Icon };
  obj.icon = callback(arg1(dependencyMap[14]).BaseChannelIcon, obj2);
  if (tmp4Result.showNewBadgeOnRow) {
    let tmp20Result = tmp20(arg1(dependencyMap[20]).NewBadge, {});
  } else {
    const obj3 = {};
    let indicator1;
    if (null != tmp3) {
      indicator1 = tmp3.indicator;
    }
    obj3.indicator = indicator1;
    tmp20Result = tmp20(GuildPowerupsChannelRowIndicator, obj3);
    const tmp21 = GuildPowerupsChannelRowIndicator;
  }
  obj.channelInfo = tmp20Result;
  items1[1] = tmp18(importDefault(dependencyMap[14]), obj);
  obj.children = items1;
  return tmp13(tmp14, obj);
};
