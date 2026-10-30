// Module ID: 18578
// Function ID: 18579
// Name: GuildFeedBanner
// Dependencies: [19, 17, 15755, 4880, 18579, 1072, 21, 5009, 575, 5090, 1492, 5248, 15756, 1376, 1410, 6955, 504, 7106, 11522, 5712, 5016, 18580, 18581, 5249, 5252, 6951, 5619, 1188, 6974, 5707, 1114, 18582, 2]

// Module 18578 (GuildFeedBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import timing from "timing" /* 5249 */;
import timingPresets from "timingPresets" /* 5252 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 15756 */;
import react from "react" /* 19 */;
import GuildPopoutStore from "GuildPopoutStore" /* 15755 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildFeedConstants from "GuildFeedConstants" /* 18579 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let c10;
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
  let tmp6Result4;
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  let tmp = closure_12();
  let tmp2 = guild;
  let obj = guild(5090);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = guild(5090);
  const fn = function x() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10872399645496;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let bound = Math.max(0.22 * sharedValue(1492)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
  const obj3 = width;
  const items = [guild];
  const tmp8 = sharedValue(5248)();
  const effect = width.useEffect(() => {
    const obj = GuildPopoutActionCreators;
    const guildForPopout = obj.fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  let memo = width.useMemo(() => {
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
  const tmp2Result = tmp2(6955);
  const guildBadgeSource = tmp2Result.getGuildBadgeSource(guild);
  const items2 = [drawerWidth];
  const items3 = [guild];
  const tmp2Result4 = tmp2(504);
  const discoverableGuild = tmp2Result4.useStateFromStoresObject(items2, () => {
    const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
    return obj;
  }, items3).discoverableGuild;
  const tmp12 = sharedValue(7106)();
  dependencyMap = tmp12;
  size = tmp6(1492)();
  width = size.width;
  height = size.height;
  const tmp2Result5 = tmp2(11522);
  drawerWidth = tmp2Result5.useDrawerWidth();
  const items4 = [width, height, tmp12, drawerWidth];
  let obj4 = { style: tmp.container, children: items6 };
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
  const obj5 = { style: items5, children: closure_10(tmp6Result, obj6) };
  items5 = [{ height: bound, width: "100%" }, animatedStyle];
  View = tmp6(5090).View;
  obj6 = {
    style: tmp.bannerImage,
    source: memo,
    onLoad: function handleLoad() {
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(1, timingPresets.timingSlow));
    }
  };
  tmp6Result = sharedValue(5712);
  if (memo == null) {
    let tmp6Result3;
    const tmp2Result6 = tmp2(5016);
    if (tmp2Result6.isThemeDark(tmp8)) {
      tmp6Result3 = tmp6(18580);
    } else {
      tmp6Result3 = tmp6(18581);
    }
    memo = tmp6Result3;
  }
  items6 = [closure_10(View, obj5), ];
  let obj7 = { style: items7, children: closure_11(height, obj8) };
  items7 = [, ];
  ({ headerContainer: arr8[0], headerBorder: arr8[1] } = tmp);
  obj8 = { style: items8, children: items9 };
  items8 = [tmp.content, { width: memo1, marginTop: -32 }];
  const obj9 = { style: tmp.guildIconContainer, children: closure_10(tmp6Result4, obj10) };
  obj10 = { style: tmp.avatar, guild, size: tmp2(6951).GuildIconSizes.XLARGE, animate: true };
  tmp6Result4 = sharedValue(6951);
  items9 = [closure_10(height, obj9), , , ];
  const obj11 = { style: tmp.textContainer, children: items10 };
  items10 = [, ];
  const obj12 = { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: name };
  items10[0] = closure_10(tmp2(5619).Text, obj12);
  let tmp17Result = null;
  if (null != guildBadgeSource) {
    const obj13 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp17Result = tmp17(tmp2(1188).Icon, obj13);
  }
  items10[1] = tmp17Result;
  items9[1] = closure_11(height, obj11);
  let tmp17Result2 = null;
  if (null != description) {
    const obj14 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp17Result2 = tmp17(tmp2(5619).Text, obj14);
  }
  items9[2] = tmp17Result2;
  let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result4) {
    let features = discoverableGuild.features;
    let tmp15Result = null;
    const obj15 = { style: tmp.memberInfo, children: items12 };
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj16 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              let intl;
              const obj = { text: intl.string(guild(closure_2[30]).t.O8lDI2) };
              const open = sharedValue(closure_2[29]).open;
              sharedValue(closure_2[29]);
              intl = guild(closure_2[30]).intl;
              open("DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", obj);
            },
        children: items11
      };
      const PressableOpacity = tmp2(6974).PressableOpacity;
      const obj17 = { style: tmp.publicIcon, source: sharedValue(18582) };
      const Icon = tmp2(1188).Icon;
      items11 = [closure_10(Icon, obj17), ];
      const obj18 = { variant: "text-xs/medium", color: "text-default", children: intl.string(tmp2(1114).t["B/vjCu"]) };
      const Text = tmp2(5619).Text;
      intl = tmp2(1114).intl;
      items11[1] = closure_10(Text, obj18);
      tmp15Result = tmp15(PressableOpacity, obj16);
    }
    items12 = [tmp15Result, ];
    let tmp15Result3 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result3 = null;
      if (null != discoverableGuild.memberCount) {
        const Fragment = obj3.Fragment;
        const obj19 = { children: items13 };
        const obj20 = { style: tmp.dotOnline };
        items13 = [closure_10(height, obj20), ];
        const obj21 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(tmp2(1114).t.QCNv6P, obj22) };
        const Text2 = tmp2(5619).Text;
        intl2 = tmp2(1114).intl;
        obj22 = { online: null, offline: null };
        ({ presenceCount: obj26.online, memberCount: obj26.offline } = discoverableGuild);
        items13[1] = closure_10(Text2, obj21);
        tmp15Result3 = tmp15(Fragment, obj19);
      }
    }
    items12[1] = tmp15Result3;
    tmp15Result4 = tmp15(tmp16, obj15);
  }
  items9[3] = tmp15Result4;
  items6[1] = closure_10(height, obj7);
  return closure_11(height, obj4);
}
let View = react_native.View;
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
const GUILD_FEED_MIN_BANNER_HEIGHT = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = Constants.GuildFeatures;
let Fragment = Fragment_mod;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatar: size, container: obj2, bannerImage: { width: "100%", height: "100%" }, description: { marginTop: 4 }, textContainer: { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" }, content: { width: "100%" }, icon: { marginLeft: 8 }, headerContainer: obj3, headerBorder: obj4, guildIconContainer: obj5, dotOnline: size1, publicInfo: { flexDirection: "row", alignItems: "center", marginRight: 12 }, publicIcon: { marginRight: 4, width: 14, height: 14 }, memberInfo: { marginTop: 4, flexDirection: "row", alignItems: "center" }, title: { maxWidth: "90%" } };
size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
createStyles = createStyles.createStyles;
obj2 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, marginTop: -16 };
obj5 = { padding: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_12 = createStyles(obj);
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
    tmp2 = closure_10(GuildFeedBanner, obj2);
  }
  return tmp2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;
