// Module ID: 11918
// Function ID: 92221
// Name: ActiveTimestamp
// Dependencies: []
// Exports: CustomStatusTimestampBadge, GameTimestampBadge, MarathonBadge, NewGameBadge, ResurrectedBadge, StreakBadge, TopGameBadge, TrendingBadge

// Module 11918 (ActiveTimestamp)
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    arg1 = entry;
    obj = arg1(dependencyMap[6]);
    now = obj.useTimestampTickedNow().now;
    importDefault = now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = importAll.useMemo(() => entry(closure_2[7]).formatActiveTimestamp(entry, now), items);
    return jsx(arg1(dependencyMap[8]).Text, { style: global.style, children: memo });
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  let obj = arg1(dependencyMap[7]);
  const tmp = callback3();
  arg1(dependencyMap[9]);
  [][0] = closure_5;
  if (isEntryActiveResult) {
    obj = { entry };
    let tmp5Result = tmp5(ActiveTimestamp, obj);
  } else {
    obj = { variant: "text-sm/medium", style: tmp.text, children: arg1(dependencyMap[7]).formatEndedTimestamp(entry, tmp4) };
    tmp5Result = tmp5(arg1(dependencyMap[8]).Text, obj);
    const obj3 = arg1(dependencyMap[7]);
  }
  return tmp5Result;
}
function BaseBadge(arg0) {
  let Icon;
  let iconColor;
  let text;
  ({ Icon, iconColor, text } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.badgeContainer };
  obj = { style: tmp.icon, color: iconColor };
  const items = [callback(Icon, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: text };
  items[1] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { icon: {} };
obj = { "Bool(true)": 18, "Bool(true)": 49, "Bool(true)": -469762048, "Bool(true)": 1208895, "Bool(true)": -1179648, "Bool(true)": 3276799, "Bool(true)": 0, "Bool(true)": 1363141632, paddingVertical: importDefault(dependencyMap[5]).space.PX_4, paddingLeft: importDefault(dependencyMap[5]).space.PX_8, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.badgeContainer = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.text = { color: importDefault(dependencyMap[5]).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
let closure_9 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[5]).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const colors = importDefault(dependencyMap[5]).colors;
  obj = { style: tmp.badgeContainer };
  const isEntryActiveResult = obj.isEntryActive(entry);
  obj = { style: tmp.icon, color: obj.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
  const items = [callback(arg1(dependencyMap[10]).GameControllerIcon, obj), callback(ContentTimestamp, { entry })];
  obj.children = items;
  return callback2(View, obj);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  let obj = arg1(dependencyMap[7]);
  if (obj.isEntryMarathon(entry)) {
    const obj2 = arg1(dependencyMap[7]);
    const colors = importDefault(dependencyMap[5]).colors;
    const isEntryActiveResult = arg1(dependencyMap[7]).isEntryActive(entry);
    const tmp7 = arg1(dependencyMap[7]).isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    const text = arg1(dependencyMap[7]).getMarathonDescription(entry).text;
    let tmp10 = null;
    if (null != text) {
      obj = { Icon: arg1(dependencyMap[11]).TimerIcon, iconColor: tmp7, text };
      tmp10 = callback(BaseBadge, obj);
    }
    return tmp10;
  } else {
    return null;
  }
};
export const NewGameBadge = function NewGameBadge(entry) {
  let obj = arg1(dependencyMap[7]);
  let tmp = null;
  if (obj.isEntryNew(entry.entry)) {
    obj = { Icon: arg1(dependencyMap[12]).NewUserIcon };
    const intl = arg1(dependencyMap[13]).intl;
    obj.text = intl.string(arg1(dependencyMap[13]).t.keY6mW);
    obj.iconColor = importDefault(dependencyMap[5]).colors.STATUS_POSITIVE;
    tmp = callback(BaseBadge, obj);
  }
  return tmp;
};
export const StreakBadge = function StreakBadge(entry) {
  let obj = arg1(dependencyMap[7]);
  const streakCount = obj.getStreakCount(entry.entry);
  let tmp2 = null;
  if (null != streakCount) {
    tmp2 = null;
    if (streakCount >= 2) {
      obj = { Icon: arg1(dependencyMap[14]).FlashIcon };
      const intl = arg1(dependencyMap[13]).intl;
      obj = { days: streakCount };
      obj.text = intl.formatToPlainString(arg1(dependencyMap[13]).t.Klie/P, obj);
      obj.iconColor = importDefault(dependencyMap[5]).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      tmp2 = callback(BaseBadge, obj);
    }
  }
  return tmp2;
};
export const TrendingBadge = function TrendingBadge(entry) {
  let obj = arg1(dependencyMap[7]);
  const trendingType = obj.getTrendingType(entry.entry);
  let tmp2 = null;
  if (null != trendingType) {
    tmp2 = null;
    if (trendingType !== arg1(dependencyMap[15]).TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      obj = { Icon: arg1(dependencyMap[16]).FireIcon };
      const intl = arg1(dependencyMap[13]).intl;
      obj.text = intl.string(arg1(dependencyMap[13]).t.TsWCdW);
      obj.iconColor = importDefault(dependencyMap[5]).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      tmp2 = callback(BaseBadge, obj);
    }
  }
  return tmp2;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  let obj = arg1(dependencyMap[7]);
  let tmp = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry.entry)) {
    obj = { Icon: arg1(dependencyMap[17]).RetryIcon };
    const intl = arg1(dependencyMap[13]).intl;
    obj.text = intl.string(arg1(dependencyMap[13]).t.adnLsB);
    obj.iconColor = importDefault(dependencyMap[5]).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    tmp = callback(BaseBadge, obj);
  }
  return tmp;
};
export const TopGameBadge = function TopGameBadge(entry) {
  let obj = arg1(dependencyMap[7]);
  const entryDuration = obj.getEntryDuration(entry.entry);
  if (null == entryDuration) {
    return null;
  } else {
    obj = { Icon: arg1(dependencyMap[18]).TrophyIcon };
    obj = {};
    const intl = arg1(dependencyMap[13]).intl;
    const items = [intl.string(arg1(dependencyMap[13]).t./50eHi), ": ", ];
    const intl2 = arg1(dependencyMap[13]).intl;
    const obj1 = {};
    const _Math = Math;
    obj1.hours = Math.round(entryDuration / importDefault(dependencyMap[19]).Seconds.HOUR);
    items[2] = intl2.format(arg1(dependencyMap[13]).t.SDRHgr, obj1);
    obj.children = items;
    obj.text = callback2(closure_8, obj);
    obj.iconColor = importDefault(dependencyMap[5]).colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    return callback(BaseBadge, obj);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = callback3();
  let obj = { style: tmp.badgeContainer };
  obj = { style: tmp.icon, color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
  const items = [callback(arg1(dependencyMap[11]).TimerIcon, obj), callback(ContentTimestamp, { entry: entry.entry })];
  obj.children = items;
  return callback2(View, obj);
};
