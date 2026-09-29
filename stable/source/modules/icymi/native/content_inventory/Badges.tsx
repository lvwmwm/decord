// Module ID: 13330
// Function ID: 13331
// Name: Badges
// Dependencies: [19, 17, 2109, 21, 576, 4788, 13328, 8436, 4784, 504, 9380, 11885, 13331, 1115, 13333, 13335, 10057, 10476, 9023, 1091, 2]
// Exports: BadgesContainer, CustomStatusTimestampBadge, GameTimestampBadge, MarathonBadge, NewGameBadge, ResurrectedBadge, StreakBadge, TopGameBadge, TrendingBadge

// Module 13330 (Badges)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1091 */;
import Text_Text from "Text/Text" /* 4784 */;
import utils from "utils" /* 8436 */;
import GameControllerIcon from "GameControllerIcon" /* 9380 */;
import TimerIcon from "TimerIcon" /* 11885 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;

require = fn;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    now = undefined;
    obj = entry(closure_2[6]);
    now = obj.useTimestampTickedNow().now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = closure_3.useMemo(() => utils.formatActiveTimestamp(entry, now), items);
    return jsx(entry(closure_2[8]).Text, { style: global.style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children: memo });
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  obj = utils;
  initialize;
  [][0] = LocaleStore;
  if (isEntryActiveResult) {
    const obj2 = { entry };
    let tmp6Result = tmp6(ActiveTimestamp, obj2);
  } else {
    const obj3 = { variant: "text-sm/medium", color: obj[noop.useContext(noop, closure_11)].text, children: tmp(8436).formatEndedTimestamp(entry, tmp5) };
    tmp6Result = tmp6(tmp(4784).Text, obj3);
    const tmpResult = tmp(8436);
  }
  return tmp6Result;
}
function BaseBadge(accessibilityLabel) {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ Icon, iconColor, text } = accessibilityLabel);
  const tmp = closure_10(noop.useContext(closure_11));
  obj = { style: tmp.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: null };
  const items = [timestampProducer(Icon, { style: tmp.icon, color: iconColor }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: obj[noop.useContext(noop, closure_11)].text, children: text })];
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let obj = { overlay: { text: "content-inventory-overlay-text-secondary", icon: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY }, "user-profile": null };
let obj2 = { text: "content-inventory-overlay-text-secondary", icon: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
obj["user-profile"] = { text: "text-subtle", icon: nativeDefault.colors.TEXT_SUBTLE };
const createStyles = fn(4788);
let closure_10 = createStyles.createStyles((arg0) => {
  obj = { icon: { width: 16, height: 16 }, badgeContainer: null };
  let tmp = null;
  if ("overlay" === arg0) {
    const obj2 = { backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm };
    tmp = obj2;
  }
  const merged = Object.assign(tmp);
  obj.badgeContainer = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
  return obj;
});
const redux = noop.createContext("overlay");
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export const BadgesContainer = function BadgesContainer(location) {
  obj = { value: location.location, children: timestampProducer(View, { style: location.style, children: location.children }) };
  return timestampProducer(redux.Provider, obj);
};
export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = closure_10(noop.useContext(closure_11));
  obj = utils;
  if (obj.isEntryActive(entry)) {
    let icon = nativeDefault.colors.STATUS_POSITIVE;
  } else {
    icon = obj[noop.useContext(noop, closure_11)].icon;
  }
  const obj2 = { style: tmp.badgeContainer, children: null };
  const items = [timestampProducer(GameControllerIcon.GameControllerIcon, { style: tmp.icon, color: icon }), timestampProducer(ContentTimestamp, { entry })];
  obj2.children = items;
  return React5(View, obj2);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  obj = utils;
  if (obj.isEntryMarathon(entry)) {
    if (tmpResult.isEntryActive(entry)) {
      let icon = nativeDefault.colors.STATUS_POSITIVE;
    } else {
      icon = obj[noop.useContext(noop, closure_11)].icon;
    }
    tmpResult = tmp(8436);
    const marathonDescription = tmp(8436).getMarathonDescription(entry);
    const text = marathonDescription.text;
    let tmp7 = null;
    if (null != text) {
      const obj2 = { Icon: tmp(11885).TimerIcon, iconColor: icon, text, accessibilityLabel: tmp6 };
      tmp7 = timestampProducer(BaseBadge, obj2);
    }
    return tmp7;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  let tmp3 = null;
  if (obj.isEntryNew(entry.entry)) {
    const obj2 = { Icon: tmp(13331).NewUserIcon, text: null, iconColor: null };
    const intl = tmp(1115).intl;
    obj2.text = intl.string(tmp(1115).t.keY6mW);
    obj2.iconColor = nativeDefault.colors.STATUS_POSITIVE;
    tmp3 = timestampProducer(BaseBadge, obj2);
  }
  return tmp3;
};
export const StreakBadge = function StreakBadge(entry) {
  obj = utils;
  const streakCount = obj.getStreakCount(entry.entry);
  let tmp4 = null;
  if (null != streakCount) {
    tmp4 = null;
    if (streakCount >= 2) {
      const obj2 = { Icon: tmp(13333).FlashIcon, text: null, iconColor: null, accessibilityLabel: null };
      const intl = tmp(1115).intl;
      const obj3 = { days: streakCount };
      obj2.text = intl.formatToPlainString(tmp(1115).t["Klie/P"], obj3);
      obj2.iconColor = obj[noop.useContext(noop, closure_11)].icon;
      const intl2 = tmp(1115).intl;
      const obj4 = { days: streakCount };
      obj2.accessibilityLabel = intl2.formatToPlainString(tmp(1115).t.nVLPBf, obj4);
      tmp4 = timestampProducer(BaseBadge, obj2);
    }
  }
  return tmp4;
};
export const TrendingBadge = function TrendingBadge(entry) {
  obj = utils;
  const trendingType = obj.getTrendingType(entry.entry);
  let tmp4 = null;
  if (null != trendingType) {
    tmp4 = null;
    if (trendingType !== tmp(13335).TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      const obj2 = { Icon: tmp(10057).FireIcon, text: null, iconColor: null };
      const intl = tmp(1115).intl;
      obj2.text = intl.string(tmp(1115).t.TsWCdW);
      obj2.iconColor = obj[noop.useContext(noop, closure_11)].icon;
      tmp4 = timestampProducer(BaseBadge, obj2);
    }
  }
  return tmp4;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  obj = utils;
  let tmp3 = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry.entry)) {
    const obj2 = { Icon: tmp(10476).RetryIcon, text: null, iconColor: null };
    const intl = tmp(1115).intl;
    obj2.text = intl.string(tmp(1115).t.adnLsB);
    obj2.iconColor = obj[noop.useContext(noop, closure_11)].icon;
    tmp3 = timestampProducer(BaseBadge, obj2);
  }
  return tmp3;
};
export const TopGameBadge = function TopGameBadge(entry) {
  obj = utils;
  const entryDuration = obj.getEntryDuration(entry.entry);
  if (null == entryDuration) {
    return null;
  } else {
    const obj2 = { Icon: tmp(9023).TrophyIcon, text: null, iconColor: null };
    const obj3 = { children: null };
    const intl = tmp(1115).intl;
    const items = [intl.string(tmp(1115).t["/50eHi"]), ": ", ];
    const intl2 = tmp(1115).intl;
    const obj4 = { hours: null };
    const _Math = Math;
    obj4.hours = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
    items[2] = intl2.format(tmp(1115).t.SDRHgr, obj4);
    obj3.children = items;
    obj2.text = React5(React6, obj3);
    obj2.iconColor = obj[noop.useContext(noop, closure_11)].icon;
    return timestampProducer(BaseBadge, obj2);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = closure_10(noop.useContext(closure_11));
  obj = { style: tmp.badgeContainer, children: null };
  const items = [timestampProducer(TimerIcon.TimerIcon, { style: tmp.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }), timestampProducer(ContentTimestamp, { entry: entry.entry })];
  obj.children = items;
  return React5(View, obj);
};
