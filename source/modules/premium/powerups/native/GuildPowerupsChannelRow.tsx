// Module ID: 15041
// Function ID: 114556
// Name: GuildPowerupsChannelRowIndicator
// Dependencies: [31, 27, 10260, 33, 11527, 7507, 689, 1273, 4130, 15003, 14796, 5451, 11523, 11542, 11424, 11512, 5484, 1212, 2230, 15042, 11390, 2]
// Exports: default

// Module 15041 (GuildPowerupsChannelRowIndicator)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function GuildPowerupsChannelRowIndicator(indicator) {
  indicator = indicator.indicator;
  if (null == indicator) {
    return null;
  } else {
    const type = indicator.type;
    if (require(11527) /* GUILD_POWERUP_NOTIFICATION_COOLDOWN */.GuildPowerupNotificationIndicatorType.WARNING === type) {
      let obj = { color: importDefault(689).colors.STATUS_WARNING, size: "sm" };
      return callback(require(7507) /* CircleErrorIcon */.CircleErrorIcon, obj);
    } else if (require(11527) /* GUILD_POWERUP_NOTIFICATION_COOLDOWN */.GuildPowerupNotificationIndicatorType.UNREAD === type) {
      obj = { value: indicator.count, isMentionLowImportance: true };
      return callback(require(1273) /* Button */.Badge, obj);
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
  importDefault(15003)(targetRef, guildId, popout);
  return null;
}
function GuildPowerupsCoachmark(arg0) {
  let guildId;
  let popout;
  let targetRef;
  ({ targetRef, guildId, popout } = arg0);
  const context = React.useContext(require(14796) /* SidebarCoachmarkOverlayLayer */.SidebarCoachmarkOverlayContext);
  const tmp2 = callback(GuildPowerupsCoachmarkHost, { targetRef, guildId, popout });
  let tmp3 = tmp2;
  if (null != context) {
    const obj = { value: context, children: tmp2 };
    tmp3 = callback(require(5451) /* LayerContextManager */.LayerContext.Provider, obj);
  }
  return tmp3;
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("hairlineWidth").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default function GuildPowerupsChannelRow(guildId) {
  guildId = guildId.guildId;
  let dismissNewBadgeIfShown;
  const ref = React.useRef(null);
  const tmp3 = dismissNewBadgeIfShown(11523)(guildId);
  let indicator;
  const tmp = _createForOfIteratorHelperLoose();
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
  const tmp4Result = dismissNewBadgeIfShown(11542)(guildId, tmp6);
  dismissNewBadgeIfShown = tmp4Result.dismissNewBadgeIfShown;
  let showUnread;
  if (null != tmp3) {
    showUnread = tmp3.showUnread;
  }
  const ChannelModes = guildId(11424).ChannelModes;
  const tmp11 = true === showUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  const items = [guildId, dismissNewBadgeIfShown];
  let obj = { ref, collapsable: false };
  obj = { targetRef: ref, guildId };
  let popout1;
  const callback = React.useCallback(() => {
    dismissNewBadgeIfShown();
    const obj = { guildId, analyticsLocation: dismissNewBadgeIfShown(outer1_2[16]).GUILD_POWERUPS_CHANNEL_LIST_ROW };
    dismissNewBadgeIfShown(outer1_2[15])(obj);
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
  const tmp4 = dismissNewBadgeIfShown(11542);
  const intl = guildId(1212).intl;
  obj.accessibilityLabel = intl.string(dismissNewBadgeIfShown(2230).yv3DJJ);
  obj.accessibilityState = { selected: false };
  const obj1 = {};
  const intl2 = guildId(1212).intl;
  obj1.name = intl2.string(dismissNewBadgeIfShown(2230).yv3DJJ);
  obj1.mode = tmp11;
  obj.name = callback(guildId(11424).BaseChannelName, obj1);
  const obj2 = { mode: tmp11, IconComponent: guildId(15042).BoostTier2Icon };
  obj.icon = callback(guildId(11424).BaseChannelIcon, obj2);
  if (tmp4Result.showNewBadgeOnRow) {
    let tmp20Result = tmp20(guildId(11390).NewBadge, {});
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
  items1[1] = tmp18(dismissNewBadgeIfShown(11424), obj);
  obj.children = items1;
  return tmp13(tmp14, obj);
};
