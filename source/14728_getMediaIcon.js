// Module ID: 14728
// Function ID: 111091
// Name: getMediaIcon
// Dependencies: []

// Module 14728 (getMediaIcon)
function getMediaIcon(activeEvent) {
  if (activeEvent.activeEvent) {
    let obj = { icon: arg1(dependencyMap[7]).CalendarIcon, source: importDefault(dependencyMap[8]) };
    let tmp6 = obj;
  } else if (tmp4) {
    obj = { icon: arg1(dependencyMap[9]).StageIcon, source: importDefault(dependencyMap[10]) };
    tmp6 = obj;
  } else if (tmp3) {
    const obj1 = { icon: arg1(dependencyMap[11]).ScreenIcon, source: importDefault(dependencyMap[12]) };
    tmp6 = obj1;
  } else if (tmp2) {
    const obj2 = { icon: arg1(dependencyMap[13]).VideoIcon, source: importDefault(dependencyMap[14]) };
    tmp6 = obj2;
  } else if (tmp) {
    const obj3 = { icon: arg1(dependencyMap[15]).VoiceNormalIcon, source: importDefault(dependencyMap[16]) };
    tmp6 = obj3;
  } else {
    tmp6 = null;
    if (tmp5) {
      obj = { icon: arg1(dependencyMap[17]).AppsIcon, source: importDefault(dependencyMap[18]) };
      tmp6 = obj;
    }
  }
  return tmp6;
}
function useActivityIndicatorState(guildId) {
  const tmp = importDefault(dependencyMap[19])(guildId);
  const arg1 = tmp;
  const tmp2 = getMediaIcon(tmp);
  const importDefault = tmp2;
  let icon;
  if (null != tmp2) {
    icon = tmp2.icon;
  }
  const items = [icon, , ];
  let source;
  if (null != tmp2) {
    source = tmp2.source;
  }
  items[1] = source;
  items[2] = tmp.isCurrentUserConnected;
  return importAllResult.useMemo(() => {
    const obj = {};
    let icon;
    if (null != tmp2) {
      icon = tmp2.icon;
    }
    obj.IconComponent = icon;
    let source;
    if (null != tmp2) {
      source = tmp2.source;
    }
    let tmp5 = null;
    if (null != source) {
      tmp5 = source;
    }
    obj.source = tmp5;
    obj.isCurrentUserConnected = tmp.isCurrentUserConnected;
    return obj;
  }, items);
}
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj1 = arg1(dependencyMap[2]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[3]).radii.md, backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWEST };
obj.activityWrapper = obj;
obj1 = { "Null": "Array", "Null": "mousemoveCb", borderRadius: importDefault(dependencyMap[3]).radii.sm, alignItems: "batchUpdates", backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_STRONG };
obj.activityIconWrapper = obj1;
obj.activityIconWrapperActive = { backgroundColor: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const obj3 = { aze: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", azj: "bun run write-native-version", borderRadius: importDefault(dependencyMap[3]).radii.none };
obj.activityIcon = obj3;
let closure_5 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let IconComponent;
  let isCurrentUserConnected;
  let source;
  let style;
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  let activityIcon = callback();
  let obj = arg1(dependencyMap[4]);
  let WHITE = obj.useToken(importDefault(dependencyMap[3]).colors.ICON_DEFAULT);
  obj = { style: items };
  const items = [activityIcon.activityWrapper, style];
  obj = {};
  const items1 = [activityIcon.activityIconWrapper, ];
  let prop = null;
  const tmp2 = importDefault(dependencyMap[5]);
  if (isCurrentUserConnected) {
    prop = activityIcon.activityIconWrapperActive;
  }
  items1[1] = prop;
  obj.style = items1;
  if (null != IconComponent) {
    const obj1 = {};
    const colors = importDefault(dependencyMap[3]).colors;
    obj1.color = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
    obj1.size = "xxs";
    activityIcon = activityIcon.activityIcon;
    obj1.style = activityIcon;
    <IconComponent {...obj1} />;
    const tmp10 = jsx;
  } else {
    const obj2 = { source };
    if (isCurrentUserConnected) {
      WHITE = importDefault(dependencyMap[3]).unsafe_rawColors.WHITE;
    }
    obj2.color = WHITE;
    obj2.style = activityIcon.activityIcon;
    obj.children = jsx(arg1(dependencyMap[6]).Icon, obj2);
    obj.children = tmp(tmp3, obj);
    return tmp(tmp2, obj);
  }
});
const obj2 = { backgroundColor: importDefault(dependencyMap[3]).colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const memoResult1 = importAllResult.memo(function GuildsBarGuildActivityIndicator(guildId) {
  const source = useActivityIndicatorState(guildId.guildId).source;
  let tmp4 = null;
  if (null != source) {
    const obj = { IconComponent: tmp2, style: guildId.style, source, isCurrentUserConnected: tmp3 };
    tmp4 = <memoResult {...obj} />;
  }
  return tmp4;
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default memoResult1;
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export { useActivityIndicatorState };
