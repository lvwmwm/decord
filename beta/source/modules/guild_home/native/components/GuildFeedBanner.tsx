// Module ID: 16203
// Function ID: 16204
// Name: GuildFeedBanner
// Dependencies: [19, 17, 13513, 2067, 16204, 1074, 21, 4836, 576, 4566, 1479, 4767, 13514, 1364, 1397, 5902, 4837, 4840, 504, 6364, 11021, 4685, 16205, 16206, 5896, 4832, 1177, 5435, 4528, 1115, 16207, 2]

// Module 16203 (GuildFeedBanner)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 13514 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPopoutStore from "GuildPopoutStore" /* 13513 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildFeedConstants from "GuildFeedConstants" /* 16204 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let unpackModuleId;
function GuildFeedBanner(guild) {
  let closure_2;
  let hideDescription;
  let hideMemberCount;
  let intl;
  let intl2;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj22;
  let obj6;
  let obj8;
  let tmp6Result;
  let tmp6Result2;
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  let tmp = closure_13();
  let tmp2 = guild;
  let obj = guild(4566);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = guild(4566);
  class G {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  G.__closure = { opacity: sharedValue };
  G.__workletHash = 10872399645496;
  G.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(G);
  let bound = Math.max(0.22 * sharedValue(1479)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
  const obj3 = width;
  const items = [guild];
  const tmp8 = sharedValue(4767)();
  const effect = width.useEffect(() => {
    const obj = GuildPopoutActionCreators;
    const guildForPopout = obj.fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  const memo = width.useMemo(() => {
    const features = guild.features;
    let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    if (hasItem) {
      const obj = PlatformUtils;
      hasItem = !obj.isAndroid();
    }
    let guildBannerSource = null;
    if (null != guild.banner) {
      const obj7 = { id: null, banner: null };
      ({ id: obj3.id, banner: obj3.banner } = guild);
      const obj2 = AvatarUtilsDefault;
      guildBannerSource = obj2.getGuildBannerSource(obj7, hasItem);
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != guild) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != guild.homeHeader) {
        const obj8 = { id: null, homeHeader: null };
        ({ id: obj5.id, homeHeader: obj5.homeHeader } = guild);
        const obj4 = AvatarUtilsDefault;
        guildHomeHeaderSource = obj4.getGuildHomeHeaderSource(obj8);
      }
    }
    return guildHomeHeaderSource;
  }, items1);
  const name = guild.name;
  if (description == null) {
    description = guild.description;
  }
  function handleLoad() {
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(1, timingPresets.timingSlow));
  }
  const tmp2Result = tmp2(5902);
  const guildBadgeSource = tmp2Result.getGuildBadgeSource(guild);
  const items2 = [GuildPopoutStore];
  const items3 = [guild];
  const tmp2Result4 = tmp2(504);
  const discoverableGuild = tmp2Result4.useStateFromStoresObject(items2, () => {
    const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
    return obj;
  }, items3).discoverableGuild;
  const tmp12 = sharedValue(6364)();
  dependencyMap = tmp12;
  size = tmp6(1479)();
  width = size.width;
  height = size.height;
  const tmp2Result5 = tmp2(11021);
  drawerWidth = tmp2Result5.useDrawerWidth();
  const items4 = [width, height, tmp12, drawerWidth];
  let obj4 = { style: tmp.container, children: items7 };
  const memo1 = obj3.useMemo(() => {
    const bound = Math.min(width, height);
    const tmp = width;
    const tmp2 = height;
    const tmp4 = closure_2;
    if (tmp4) {
      const _Math = Math;
      const _Math2 = Math;
      return Math.min(Math.max(tmp, tmp2) - drawerWidth, bound);
    } else {
      return bound - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
    }
  }, items4);
  const tmp18 = drawerWidth;
  if (null != memo) {
    const obj5 = { style: items5, source: memo, onLoad: handleLoad };
    const size1 = { height: bound, width: "100%" };
    items5 = [size1, animatedStyle];
    obj6 = obj5;
  } else {
    obj6 = { style: items6, source: tmp6Result, onLoad: handleLoad };
    const size2 = { height: bound, width: "100%" };
    items6 = [size2, animatedStyle];
    const tmp2Result6 = tmp2(4685);
    if (tmp2Result6.isThemeDark(tmp8)) {
      tmp6Result = tmp6(16205);
    } else {
      tmp6Result = tmp6(16206);
    }
  }
  items7 = [closure_11(tmp18, obj6), ];
  let obj7 = { style: items8, children: closure_12(height, obj8) };
  items8 = [, ];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  obj8 = { style: items9, children: items10 };
  items9 = [tmp.content, { width: memo1, marginTop: -32 }];
  const obj9 = { style: tmp.guildIconContainer, children: closure_11(tmp6Result2, obj10) };
  obj10 = { style: tmp.avatar, guild, size: tmp2(5896).GuildIconSizes.XLARGE, animate: true };
  tmp6Result2 = sharedValue(5896);
  items10 = [closure_11(height, obj9), , , ];
  const obj11 = { style: tmp.textContainer, children: items11 };
  items11 = [, ];
  const obj12 = { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: name };
  items11[0] = closure_11(tmp2(4832).Text, obj12);
  let tmp17Result = null;
  if (null != guildBadgeSource) {
    const obj13 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp17Result = tmp17(tmp2(1177).Icon, obj13);
  }
  items11[1] = tmp17Result;
  items10[1] = closure_12(height, obj11);
  let tmp17Result2 = null;
  if (null != description) {
    const obj14 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp17Result2 = tmp17(tmp2(4832).Text, obj14);
  }
  items10[2] = tmp17Result2;
  let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result4) {
    let features = discoverableGuild.features;
    let tmp15Result = null;
    const obj15 = { style: tmp.memberInfo, children: items13 };
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj16 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              let intl;
              const obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: intl.string(guild(closure_2[29]).t.O8lDI2) };
              const open = sharedValue(closure_2[28]).open;
              sharedValue(closure_2[28]);
              intl = guild(closure_2[29]).intl;
              open(obj);
            },
        children: items12
      };
      const PressableOpacity = tmp2(5435).PressableOpacity;
      const obj17 = { style: tmp.publicIcon, source: sharedValue(16207) };
      const Icon = tmp2(1177).Icon;
      items12 = [closure_11(Icon, obj17), ];
      const obj18 = { variant: "text-xs/medium", color: "text-default", children: intl.string(tmp2(1115).t["B/vjCu"]) };
      const Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      items12[1] = closure_11(Text, obj18);
      tmp15Result = tmp15(PressableOpacity, obj16);
    }
    items13 = [tmp15Result, ];
    let tmp15Result3 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result3 = null;
      if (null != discoverableGuild.memberCount) {
        const Fragment = obj3.Fragment;
        const obj19 = { children: items14 };
        const obj20 = { style: tmp.dotOnline };
        items14 = [closure_11(height, obj20), ];
        const obj21 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(tmp2(1115).t.QCNv6P, obj22) };
        const Text2 = tmp2(4832).Text;
        intl2 = tmp2(1115).intl;
        obj22 = { online: null, offline: null };
        ({ presenceCount: obj28.online, memberCount: obj28.offline } = discoverableGuild);
        items14[1] = closure_11(Text2, obj21);
        tmp15Result3 = tmp15(Fragment, obj19);
      }
    }
    items13[1] = tmp15Result3;
    tmp15Result4 = tmp15(tmp16, obj15);
  }
  items10[3] = tmp15Result4;
  items7[1] = closure_11(height, obj7);
  return closure_12(height, obj4);
}
({ View: closure_4, Image: hasOwnProperty } = react_native);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
const GUILD_FEED_MIN_BANNER_HEIGHT = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = Constants.GuildFeatures;
let Fragment = Fragment_mod;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatar: size, container: obj2, description: { marginTop: 4 }, textContainer: { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" }, content: { width: "100%" }, icon: { marginLeft: 8 }, headerContainer: obj3, headerBorder: obj4, guildIconContainer: obj5, dotOnline: size1, publicInfo: { flexDirection: "row", alignItems: "center", marginRight: 12 }, publicIcon: { marginRight: 4, width: 14, height: 14 }, memberInfo: { marginTop: 4, flexDirection: "row", alignItems: "center" }, title: { maxWidth: "90%" } };
size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
createStyles = createStyles.createStyles;
obj2 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, marginTop: -16 };
obj5 = { padding: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_13 = createStyles(obj);
const __initData = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const memoResult = react.memo(function GuildFeedBannerContainer(guildId) {
  let description;
  let hideDescription;
  let hideMemberCount;
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = closure_11(GuildFeedBanner, obj2);
  }
  return tmp2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;
