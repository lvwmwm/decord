// Module ID: 11931
// Function ID: 92300
// Name: ActiveTimestamp
// Dependencies: [31, 27, 1921, 33, 4130, 689, 11929, 7815, 4126, 566, 8940, 10875, 11932, 1212, 11934, 11936, 11878, 9949, 8633, 664, 2]
// Exports: CustomStatusTimestampBadge, GameTimestampBadge, MarathonBadge, NewGameBadge, ResurrectedBadge, StreakBadge, TopGameBadge, TrendingBadge

// Module 11931 (ActiveTimestamp)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    obj = require("dropMilliseconds");
    now = obj.useTimestampTickedNow().now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = result.useMemo(() => entry(outer1_2[7]).formatActiveTimestamp(entry, now), items);
    obj = { style: null, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive" };
    obj.style = global.style;
    obj.children = memo;
    return jsx(require("Text").Text, obj);
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  let obj = require(7815) /* calculateTimestampDurations */;
  const tmp = _createForOfIteratorHelperLoose();
  require(566) /* initialize */;
  [][0] = _isNativeReflectConstruct;
  if (isEntryActiveResult) {
    obj = { entry };
    let tmp5Result = tmp5(ActiveTimestamp, obj);
  } else {
    obj = { variant: "text-sm/medium", style: tmp.text, children: require(7815) /* calculateTimestampDurations */.formatEndedTimestamp(entry, tmp4) };
    tmp5Result = tmp5(require(4126) /* Text */.Text, obj);
    const obj3 = require(7815) /* calculateTimestampDurations */;
  }
  return tmp5Result;
}
function BaseBadge(arg0) {
  let Icon;
  let iconColor;
  let text;
  ({ Icon, iconColor, text } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.badgeContainer };
  obj = { style: tmp.icon, color: iconColor };
  const items = [callback(Icon, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: text };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { icon: { width: 16, height: 16 } };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8, paddingRight: 10, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.badgeContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { color: require("_createForOfIteratorHelperLoose").colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(7815) /* calculateTimestampDurations */;
  const colors = importDefault(689).colors;
  obj = { style: tmp.badgeContainer };
  const isEntryActiveResult = obj.isEntryActive(entry);
  obj = { style: tmp.icon, color: obj.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
  const items = [callback(require(8940) /* GameControllerIcon */.GameControllerIcon, obj), callback(ContentTimestamp, { entry })];
  obj.children = items;
  return callback2(View, obj);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  let obj = require(7815) /* calculateTimestampDurations */;
  if (obj.isEntryMarathon(entry)) {
    const obj2 = require(7815) /* calculateTimestampDurations */;
    const colors = importDefault(689).colors;
    const isEntryActiveResult = require(7815) /* calculateTimestampDurations */.isEntryActive(entry);
    const tmp7 = require(7815) /* calculateTimestampDurations */.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    const text = require(7815) /* calculateTimestampDurations */.getMarathonDescription(entry).text;
    let tmp10 = null;
    if (null != text) {
      obj = { Icon: require(10875) /* TimerIcon */.TimerIcon, iconColor: tmp7, text };
      tmp10 = callback(BaseBadge, obj);
    }
    return tmp10;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  let obj = require(7815) /* calculateTimestampDurations */;
  let tmp = null;
  if (obj.isEntryNew(entry.entry)) {
    obj = { Icon: require(11932) /* NewUserIcon */.NewUserIcon };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t.keY6mW);
    obj.iconColor = importDefault(689).colors.STATUS_POSITIVE;
    tmp = callback(BaseBadge, obj);
  }
  return tmp;
};
export const StreakBadge = function StreakBadge(entry) {
  let obj = require(7815) /* calculateTimestampDurations */;
  const streakCount = obj.getStreakCount(entry.entry);
  let tmp2 = null;
  if (null != streakCount) {
    tmp2 = null;
    if (streakCount >= 2) {
      obj = { Icon: require(11934) /* FlashIcon */.FlashIcon };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { days: streakCount };
      obj.text = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["Klie/P"], obj);
      obj.iconColor = importDefault(689).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      tmp2 = callback(BaseBadge, obj);
    }
  }
  return tmp2;
};
export const TrendingBadge = function TrendingBadge(entry) {
  let obj = require(7815) /* calculateTimestampDurations */;
  const trendingType = obj.getTrendingType(entry.entry);
  let tmp2 = null;
  if (null != trendingType) {
    tmp2 = null;
    if (trendingType !== require(11936) /* TrendingType */.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      obj = { Icon: require(11878) /* FireIcon */.FireIcon };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.text = intl.string(require(1212) /* getSystemLocale */.t.TsWCdW);
      obj.iconColor = importDefault(689).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      tmp2 = callback(BaseBadge, obj);
    }
  }
  return tmp2;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  let obj = require(7815) /* calculateTimestampDurations */;
  let tmp = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry.entry)) {
    obj = { Icon: require(9949) /* RetryIcon */.RetryIcon };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t.adnLsB);
    obj.iconColor = importDefault(689).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    tmp = callback(BaseBadge, obj);
  }
  return tmp;
};
export const TopGameBadge = function TopGameBadge(entry) {
  let obj = require(7815) /* calculateTimestampDurations */;
  const entryDuration = obj.getEntryDuration(entry.entry);
  if (null == entryDuration) {
    return null;
  } else {
    obj = { Icon: require(8633) /* TrophyIcon */.TrophyIcon };
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t["/50eHi"]), ": ", ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {};
    const _Math = Math;
    obj1.hours = Math.round(entryDuration / importDefault(664).Seconds.HOUR);
    items[2] = intl2.format(require(1212) /* getSystemLocale */.t.SDRHgr, obj1);
    obj.children = items;
    obj.text = callback2(closure_8, obj);
    obj.iconColor = importDefault(689).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    return callback(BaseBadge, obj);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.badgeContainer };
  obj = { style: tmp.icon, color: importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT };
  const items = [callback(require(10875) /* TimerIcon */.TimerIcon, obj), callback(ContentTimestamp, { entry: entry.entry })];
  obj.children = items;
  return callback2(View, obj);
};
