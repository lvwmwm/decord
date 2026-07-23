// Module ID: 14862
// Function ID: 113360
// Name: getMediaIcon
// Dependencies: [31, 33, 4130, 689, 3834, 5517, 1273, 8461, 8460, 4654, 7593, 11855, 14863, 10159, 14864, 4658, 14865, 9075, 7819, 14860, 2]

// Module 14862 (getMediaIcon)
import importAllResult from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
function getMediaIcon(closure_3) {
  if (closure_3.activeEvent) {
    let obj = { icon: require(8461) /* CalendarIcon */.CalendarIcon, source: importDefault(8460) };
    let tmp6 = obj;
  } else if (tmp4) {
    obj = { icon: require(4654) /* StageIcon */.StageIcon, source: importDefault(7593) };
    tmp6 = obj;
  } else if (tmp3) {
    const obj1 = { icon: require(11855) /* ScreenIcon */.ScreenIcon, source: importDefault(14863) };
    tmp6 = obj1;
  } else if (tmp2) {
    const obj2 = { icon: require(10159) /* VideoIcon */.VideoIcon, source: importDefault(14864) };
    tmp6 = obj2;
  } else if (tmp) {
    const obj3 = { icon: require(4658) /* VoiceNormalIcon */.VoiceNormalIcon, source: importDefault(14865) };
    tmp6 = obj3;
  } else {
    tmp6 = null;
    if (tmp5) {
      obj = { icon: require(9075) /* AppsIcon */.AppsIcon, source: importDefault(7819) };
      tmp6 = obj;
    }
  }
  return tmp6;
}
function useActivityIndicatorState(guildId) {
  const tmp = importDefault(14860)(guildId);
  const require = tmp;
  const tmp2 = getMediaIcon(tmp);
  importDefault = tmp2;
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
let obj = {};
obj = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.activityWrapper = obj;
_createForOfIteratorHelperLoose = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
obj.activityIconWrapper = _createForOfIteratorHelperLoose;
obj.activityIconWrapperActive = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
let obj3 = { width: 12, height: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.none };
obj.activityIcon = obj3;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let IconComponent;
  let isCurrentUserConnected;
  let source;
  let style;
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  let activityIcon = callback();
  let obj = require(3834) /* map */;
  let WHITE = obj.useToken(importDefault(689).colors.ICON_DEFAULT);
  obj = { style: items };
  items = [activityIcon.activityWrapper, style];
  obj = {};
  const items1 = [activityIcon.activityIconWrapper, ];
  let prop = null;
  const tmp2 = importDefault(5517);
  if (isCurrentUserConnected) {
    prop = activityIcon.activityIconWrapperActive;
  }
  items1[1] = prop;
  obj.style = items1;
  if (null != IconComponent) {
    const obj1 = {};
    const colors = importDefault(689).colors;
    obj1.color = isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT;
    obj1.size = "xxs";
    activityIcon = activityIcon.activityIcon;
    obj1.style = activityIcon;
    <IconComponent />;
    const tmp10 = jsx;
  } else {
    const obj2 = { source };
    if (isCurrentUserConnected) {
      WHITE = importDefault(689).unsafe_rawColors.WHITE;
    }
    obj2.color = WHITE;
    obj2.style = activityIcon.activityIcon;
    obj.children = jsx(require(1273) /* Button */.Icon, { source });
    obj.children = tmp(tmp3, obj);
    return tmp(tmp2, obj);
  }
});
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
const memoResult1 = importAllResult.memo(function GuildsBarGuildActivityIndicator(guildId) {
  const source = useActivityIndicatorState(guildId.guildId).source;
  let tmp4 = null;
  if (null != source) {
    const obj = { IconComponent: tmp2, style: guildId.style, source, isCurrentUserConnected: tmp3 };
    tmp4 = <closure_6 IconComponent={tmp2} style={arg0.style} source={source} isCurrentUserConnected={tmp3} />;
  }
  return tmp4;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default memoResult1;
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export { useActivityIndicatorState };
