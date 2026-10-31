// Module ID: 18392
// Function ID: 18393
// Name: GuildsBarActivityIndicator
// Dependencies: [19, 21, 5014, 575, 5596, 6960, 1187, 9115, 9212, 8669, 8196, 9587, 18393, 11040, 18394, 8673, 18395, 8678, 8608, 18391, 2]
// Exports: useActivityIndicatorState

// Module 18392 (GuildsBarActivityIndicator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5596 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import AssetRegistryDefault from "AssetRegistry" /* 8196 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8608 */;
import StageIcon from "StageIcon" /* 8669 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 8673 */;
import AppsIcon from "AppsIcon" /* 8678 */;
import CalendarIcon from "CalendarIcon" /* 9115 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9212 */;
import ScreenIcon from "ScreenIcon" /* 9587 */;
import VideoIcon from "VideoIcon" /* 11040 */;
import useGuildsBarGuildMediaStateDefault from "useGuildsBarGuildMediaState" /* 18391 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 18393 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 18394 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 18395 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let obj2;
let size;
let size1;
let size2;
let tmp2;
const native = tmp2(1187);
function getMediaIcon(activeEvent) {
  let tmp6;
  if (activeEvent.activeEvent) {
    tmp6 = { icon: CalendarIcon.CalendarIcon, source: AssetRegistryDefault3 };
    const obj2 = { icon: CalendarIcon.CalendarIcon, source: AssetRegistryDefault3 };
  } else if (tmp4) {
    tmp6 = { icon: StageIcon.StageIcon, source: AssetRegistryDefault };
    const obj3 = { icon: StageIcon.StageIcon, source: AssetRegistryDefault };
  } else if (tmp3) {
    tmp6 = { icon: ScreenIcon.ScreenIcon, source: AssetRegistryDefault4 };
    const obj4 = { icon: ScreenIcon.ScreenIcon, source: AssetRegistryDefault4 };
  } else if (tmp2) {
    tmp6 = { icon: VideoIcon.VideoIcon, source: AssetRegistryDefault5 };
    const obj5 = { icon: VideoIcon.VideoIcon, source: AssetRegistryDefault5 };
  } else if (tmp) {
    tmp6 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: AssetRegistryDefault6 };
    const obj6 = { icon: VoiceNormalIcon.VoiceNormalIcon, source: AssetRegistryDefault6 };
  } else {
    tmp6 = null;
    if (tmp5) {
      tmp6 = { icon: AppsIcon.AppsIcon, source: AssetRegistryDefault2 };
      const obj = { icon: AppsIcon.AppsIcon, source: AssetRegistryDefault2 };
    }
  }
  return tmp6;
}
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { activityWrapper: size, activityIconWrapper: size1, activityIconWrapperActive: obj2, activityIcon: size2 };
size = { position: "absolute", top: -3, right: -3, justifyContent: "center", width: 22, height: 22, padding: 3, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
size1 = { justifyContent: "center", width: 16, height: 16, padding: 2, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2 = { backgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT };
size2 = { width: 12, height: 12, borderRadius: nativeDefault.radii.none };
let closure_5 = createStyles(obj);
const memoResult = react.memo(function GuildsBarActivityIndicatorBase(arg0) {
  let IconComponent;
  let isCurrentUserConnected;
  let source;
  let style;
  ({ IconComponent, isCurrentUserConnected } = arg0);
  ({ style, source } = arg0);
  const tmp = closure_5();
  const obj = useToken;
  let WHITE = obj.useToken(nativeDefault.colors.ICON_DEFAULT);
  const items = [tmp.activityWrapper, style];
  const items1 = [tmp.activityIconWrapper, ];
  let prop = null;
  NativeViewDefault;
  NativeViewDefault;
  if (isCurrentUserConnected) {
    prop = tmp.activityIconWrapperActive;
  }
  items1[1] = prop;
  if (null != IconComponent) {
    const colors = tmp4(575).colors;
    const obj4 = { color: isCurrentUserConnected ? colors.WHITE : colors.ICON_DEFAULT, size: "xxs", style: tmp.activityIcon };
    let tmp5Result = tmp5(IconComponent, obj4);
  } else {
    const obj5 = { source, color: WHITE, style: tmp.activityIcon };
    const Icon = native.Icon;
    if (isCurrentUserConnected) {
      WHITE = tmp4(575).unsafe_rawColors.WHITE;
    }
    tmp5Result = tmp5(Icon, obj5);
  }
  return <tmp6 style={items}>{null}</tmp6>;
});
const metroRequire = memoResult;
const memoResult1 = react.memo(function GuildsBarGuildActivityIndicator(arg0) {
  let guildId;
  let style;
  ({ guildId, style } = arg0);
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  let closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  let closure_1 = tmp2;
  let icon;
  const useMemo = react.useMemo;
  if (tmp2 != null) {
    icon = tmp2.icon;
  }
  const items = [icon, , ];
  let source1;
  if (tmp2 != null) {
    source1 = tmp2.source;
  }
  items[1] = source1;
  items[2] = tmp.isCurrentUserConnected;
  const memo = useMemo(() => {
    let source;
    let icon;
    if (closure_1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source, isCurrentUserConnected: closure_0.isCurrentUserConnected };
    source = undefined;
    if (closure_1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    return obj;
  }, items);
  let source = memo.source;
  let tmp9 = null;
  if (null != source) {
    tmp9 = <metroRequire IconComponent={tmp7} style={style} source={source} isCurrentUserConnected={tmp8} />;
  }
  return tmp9;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarActivityIndicator.tsx");

export default memoResult1;
export const GuildsBarActivityIndicatorBase = memoResult;
export { getMediaIcon };
export function useActivityIndicatorState(guildId) {
  const tmp = useGuildsBarGuildMediaStateDefault(guildId);
  let closure_0 = tmp;
  const tmp2 = getMediaIcon(tmp);
  let closure_1 = tmp2;
  let icon;
  const useMemo = react.useMemo;
  if (tmp2 != null) {
    icon = tmp2.icon;
  }
  const items = [icon, , ];
  let source;
  if (tmp2 != null) {
    source = tmp2.source;
  }
  items[1] = source;
  items[2] = tmp.isCurrentUserConnected;
  return useMemo(() => {
    let source;
    let icon;
    if (closure_1 != null) {
      icon = tmp.icon;
    }
    const obj = { IconComponent: icon, source, isCurrentUserConnected: closure_0.isCurrentUserConnected };
    source = undefined;
    if (closure_1 != null) {
      source = tmp.source;
    }
    if (source == null) {
      source = null;
    }
    return obj;
  }, items);
}
