// Module ID: 12582
// Function ID: 12583
// Name: Badges
// Dependencies: [19, 17, 2112, 21, 576, 4836, 12580, 7592, 4832, 504, 8535, 11100, 12583, 1115, 12585, 12587, 9217, 9640, 8173, 1091, 2]
// Exports: BadgesContainer, CustomStatusTimestampBadge, GameTimestampBadge, MarathonBadge, NewGameBadge, ResurrectedBadge, StreakBadge, TopGameBadge, TrendingBadge

// Module 12582 (Badges)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1091 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import utils from "utils" /* 7592 */;
import TrophyIcon from "TrophyIcon" /* 8173 */;
import FireIcon from "FireIcon" /* 9217 */;
import RetryIcon from "RetryIcon" /* 9640 */;
import TimerIcon2 from "TimerIcon" /* 11100 */;
import NewUserIcon from "NewUserIcon" /* 12583 */;
import FlashIcon from "FlashIcon" /* 12585 */;
import TrendingType from "TrendingType" /* 12587 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp3;
const GameControllerIcon = tmp3(8535);
class ActiveTimestamp {
  constructor(entry) {
    entry = entry.entry;
    const style = entry.style;
    obj = entry(12580);
    const now = obj.useTimestampTickedNow().now;
    const items = [entry, now];
    const children = react.useMemo(() => {
      obj = utils;
      return obj.formatActiveTimestamp(entry, now);
    }, items);
    return closure_6(entry(4832).Text, { style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children });
  }
}
function ContentTimestamp(entry) {
  let locale;
  let tmp2Result;
  let tmp7Result;
  entry = entry.entry;
  const tmp = obj[react.useContext(react, redux)];
  obj = utils;
  const isEntryActiveResult = obj.isEntryActive(entry);
  get_initialized;
  [][0] = LocaleStore;
  if (isEntryActiveResult) {
    const obj2 = { entry };
    tmp7Result = tmp7(ActiveTimestamp, obj2);
  } else {
    const obj3 = { variant: "text-sm/medium", color: tmp.text, children: tmp2Result.formatEndedTimestamp(entry, tmp6) };
    const Text = tmp2(4832).Text;
    tmp2Result = utils;
    tmp7Result = tmp7(Text, obj3);
  }
  return tmp7Result;
}
function BaseBadge(accessibilityLabel) {
  let Icon;
  let iconColor;
  let items;
  let text;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ Icon, iconColor, text } = accessibilityLabel);
  const tmp = closure_10(react.useContext(redux));
  obj = { style: tmp.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: items };
  items = [, ];
  const obj2 = { style: tmp.icon, color: iconColor };
  const tmp2 = obj[react.useContext(react, redux)];
  items[0] = metroRequire(Icon, obj2);
  const obj3 = { variant: "text-sm/medium", color: tmp2.text, children: text };
  items[1] = metroRequire(Text_Text.Text, obj3);
  return metroImportDefault(View, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { overlay: obj2, "user-profile": obj3 };
obj2 = { text: "content-inventory-overlay-text-secondary", icon: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
obj3 = { text: "text-subtle", icon: nativeDefault.colors.TEXT_SUBTLE };
let closure_10 = createStyles.createStyles((arg0) => {
  let obj3;
  let tmp = null;
  obj = { icon: { width: 16, height: 16 }, badgeContainer: obj3 };
  if ("overlay" === arg0) {
    tmp = { backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm };
    const obj2 = { backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm };
  }
  obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
  const merged = Object.assign(tmp);
  return obj;
});
const redux = react.createContext("overlay");
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export const BadgesContainer = function BadgesContainer(location) {
  let obj2;
  const Provider = redux.Provider;
  obj = { value: location.location, children: metroRequire(View, obj2) };
  obj2 = { style: location.style, children: location.children };
  return metroRequire(Provider, obj);
};
export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  let icon;
  let items;
  entry = entry.entry;
  const tmp = closure_10(react.useContext(redux));
  const tmp2 = obj[react.useContext(react, redux)];
  obj = utils;
  if (obj.isEntryActive(entry)) {
    icon = nativeDefault.colors.STATUS_POSITIVE;
  } else {
    icon = tmp2.icon;
  }
  const obj2 = { style: tmp.badgeContainer, children: items };
  items = [, ];
  const obj3 = { style: tmp.icon, color: icon };
  items[0] = metroRequire(GameControllerIcon.GameControllerIcon, obj3);
  items[1] = metroRequire(ContentTimestamp, { entry });
  return metroImportDefault(View, obj2);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  const tmp = obj[react.useContext(react, redux)];
  obj = utils;
  if (obj.isEntryMarathon(entry)) {
    let icon;
    const tmp2Result = utils;
    if (tmp2Result.isEntryActive(entry)) {
      icon = nativeDefault.colors.STATUS_POSITIVE;
    } else {
      icon = tmp.icon;
    }
    const tmp2Result2 = utils;
    const marathonDescription = tmp2Result2.getMarathonDescription(entry);
    const text = marathonDescription.text;
    let tmp8 = null;
    if (null != text) {
      const obj2 = { Icon: TimerIcon2.TimerIcon, iconColor: icon, text, accessibilityLabel: tmp7 };
      tmp8 = metroRequire(BaseBadge, obj2);
    }
    return tmp8;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  let intl;
  entry = entry.entry;
  let tmp3 = null;
  obj = utils;
  if (obj.isEntryNew(entry)) {
    const obj2 = { Icon: NewUserIcon.NewUserIcon, text: intl.string(intl3.t.keY6mW), iconColor: nativeDefault.colors.STATUS_POSITIVE };
    intl = tmp(1115).intl;
    tmp3 = metroRequire(BaseBadge, obj2);
  }
  return tmp3;
};
export const StreakBadge = function StreakBadge(entry) {
  let intl;
  let intl2;
  let obj3;
  let obj4;
  entry = entry.entry;
  const tmp = obj[react.useContext(react, redux)];
  obj = utils;
  const streakCount = obj.getStreakCount(entry);
  let tmp5 = null;
  if (null != streakCount) {
    tmp5 = null;
    if (streakCount >= 2) {
      const obj2 = { Icon: FlashIcon.FlashIcon, text: intl.formatToPlainString(intl3.t["Klie/P"], obj3), iconColor: tmp.icon, accessibilityLabel: intl2.formatToPlainString(intl3.t.nVLPBf, obj4) };
      intl = tmp2(1115).intl;
      obj3 = { days: streakCount };
      intl2 = tmp2(1115).intl;
      obj4 = { days: streakCount };
      tmp5 = metroRequire(BaseBadge, obj2);
    }
  }
  return tmp5;
};
export const TrendingBadge = function TrendingBadge(entry) {
  let intl;
  entry = entry.entry;
  const tmp = obj[react.useContext(react, redux)];
  obj = utils;
  const trendingType = obj.getTrendingType(entry);
  let tmp5 = null;
  if (null != trendingType) {
    tmp5 = null;
    if (trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      const obj2 = { Icon: FireIcon.FireIcon, text: intl.string(intl3.t.TsWCdW), iconColor: tmp.icon };
      intl = tmp2(1115).intl;
      tmp5 = metroRequire(BaseBadge, obj2);
    }
  }
  return tmp5;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  let intl;
  entry = entry.entry;
  const tmp = obj[react.useContext(react, redux)];
  obj = utils;
  let tmp4 = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry)) {
    const obj2 = { Icon: RetryIcon.RetryIcon, text: intl.string(intl3.t.adnLsB), iconColor: tmp.icon };
    intl = tmp2(1115).intl;
    tmp4 = metroRequire(BaseBadge, obj2);
  }
  return tmp4;
};
export const TopGameBadge = function TopGameBadge(entry) {
  let items;
  let obj3;
  entry = entry.entry;
  const tmp = obj[react.useContext(react, redux)];
  obj = utils;
  const entryDuration = obj.getEntryDuration(entry);
  if (null == entryDuration) {
    return null;
  } else {
    const obj2 = { Icon: TrophyIcon.TrophyIcon, text: metroImportDefault(metroImportAll, obj3), iconColor: tmp.icon };
    const SDRHgr = tmp2(1115).t.SDRHgr;
    obj3 = { children: items };
    const intl = tmp2(1115).intl;
    items = [intl.string(intl3.t["/50eHi"]), ": ", ];
    const intl2 = tmp2(1115).intl;
    const _Math = Math;
    const format = intl2.format;
    const obj4 = { hours: Math.round(entryDuration / DurationsDefault.Seconds.HOUR) };
    items[2] = format(SDRHgr, obj4);
    return metroRequire(BaseBadge, obj2);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  let items;
  entry = entry.entry;
  const tmp = closure_10(react.useContext(redux));
  obj = { style: tmp.badgeContainer, children: items };
  const obj2 = { style: tmp.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const TimerIcon = TimerIcon2.TimerIcon;
  items = [metroRequire(TimerIcon, obj2), metroRequire(ContentTimestamp, { entry })];
  return metroImportDefault(View, obj);
};
