// Module ID: 16802
// Function ID: 16803
// Name: GuildFeedBanner
// Dependencies: [19, 17, 14027, 2086, 16803, 1085, 21, 5090, 587, 558, 576, 4810, 1496, 4991, 14028, 1381, 1414, 6167, 5091, 5094, 504, 6618, 11278, 6164, 4929, 16804, 16805, 6161, 5086, 1200, 6189, 4766, 1126, 16806, 2]

// Module 16802 (GuildFeedBanner)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import timing from "timing" /* 5091 */;
import timingPresets from "timingPresets" /* 5094 */;
import GuildPopoutActionCreators from "GuildPopoutActionCreators" /* 14028 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPopoutStore from "GuildPopoutStore" /* 14027 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildFeedConstants from "GuildFeedConstants" /* 16803 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
({ View: closure_4, Image: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = GuildFeedConstants.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
const GUILD_FEED_MIN_BANNER_HEIGHT = GuildFeedConstants.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = Constants.GuildFeatures;
let Fragment = Fragment_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatar: size, container: obj2, description: { marginTop: 4 }, textContainer: { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" }, content: { width: "100%" }, icon: { marginLeft: 8 }, headerContainer: obj3, headerBorder: obj4, guildIconContainer: obj5, dotOnline: size1, publicInfo: { flexDirection: "row", alignItems: "center", marginRight: 12 }, publicIcon: { marginRight: 4, width: 14, height: 14 }, memberInfo: { marginTop: 4, flexDirection: "row", alignItems: "center" }, title: { maxWidth: "90%" } };
size = { borderRadius: nativeDefault.radii.lg, height: 64, width: 64 };
createStyles = createStyles.createStyles;
obj2 = { paddingBottom: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj3 = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, marginTop: -16 };
obj5 = { padding: 4, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 4, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
let closure_14 = createStyles(obj);
const __initData = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function GuildFeedBannerTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildFeedBanner(guild) {
  let description;
  let height;
  let hideMemberCount;
  let items2;
  let obj10;
  let tmp10;
  let tmp11;
  let width;
  const tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(73);
  guild = guild.guild;
  ({ description, hideMemberCount } = guild);
  const hideDescription = guild.hideDescription;
  closure_14();
  const obj2 = guild(4810);
  const sharedValue = obj2.useSharedValue(0);
  const fn = function s() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10872399645496;
  fn.__initData = __initData;
  const obj3 = guild(4810);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const bound = Math.max(0.22 * sharedValue(1496)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
  const tmp9 = sharedValue(4991)();
  if (cResult[0] !== guild.id) {
    const fn2 = function h() {
      const obj = GuildPopoutActionCreators;
      const guildForPopout = obj.fetchGuildForPopout(guild.id);
    };
    cResult[0] = guild.id;
    cResult[1] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== guild) {
    const items = [guild];
    cResult[2] = guild;
    cResult[3] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  const effect = react.useEffect(tmp10, tmp11);
  if (cResult[4] === guild.banner) {
    if (cResult[5] === guild.features) {
      let tmp13;
      let tmp22;
      let tmp23;
      let tmp25;
      let tmp26;
      let tmp34Result;
      if (cResult[6] === guild.id) {
        tmp13 = cResult[7];
      }
      let tmp17 = tmp13;
      if (null != guild) {
        tmp17 = tmp13;
        if (null != guild.homeHeader) {
          if (cResult[8] === guild.homeHeader) {
            let tmp18;
            if (cResult[9] === guild.id) {
              tmp18 = cResult[10];
            }
            tmp17 = tmp18;
          }
          const obj7 = { id: null, homeHeader: null };
          ({ id: obj8.id, homeHeader: obj8.homeHeader } = guild);
          const tmp7Result = sharedValue(1414);
          const guildHomeHeaderSource = tmp7Result.getGuildHomeHeaderSource(obj7);
          cResult[8] = guild.homeHeader;
          cResult[9] = guild.id;
          cResult[10] = guildHomeHeaderSource;
          tmp18 = guildHomeHeaderSource;
        }
      }
      const name = guild.name;
      if (description == null) {
        description = guild.description;
      }
      if (cResult[11] !== guild) {
        const tmpResult = tmp(6167);
        const guildBadgeSource = tmpResult.getGuildBadgeSource(guild);
        cResult[11] = guild;
        cResult[12] = guildBadgeSource;
      }
      if (cResult[13] !== sharedValue) {
        function handleLoad() {
          set = sharedValue.set;
          const obj = timing;
          const result = set(obj.withTiming(1, timingPresets.timingSlow));
        }
        cResult[13] = sharedValue;
        cResult[14] = handleLoad;
        tmp22 = handleLoad;
      } else {
        tmp22 = cResult[14];
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildPopoutStore];
        cResult[15] = items1;
        tmp23 = items1;
      } else {
        tmp23 = cResult[15];
      }
      if (cResult[16] !== guild.id) {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
        cResult[16] = guild.id;
        cResult[17] = K;
        tmp25 = K;
      } else {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
      }
      if (cResult[18] !== guild) {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
        tmp27[0] = guild;
        cResult[18] = guild;
        cResult[19] = tmp27;
        tmp26 = tmp27;
      } else {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
      }
      const tmpResult4 = tmp(504);
      const discoverableGuild = tmpResult4.useStateFromStoresObject(tmp23, tmp25, tmp26).discoverableGuild;
      const tmp28 = sharedValue(6618)();
      ({ width, height } = sharedValue(1496)());
      sharedValue(1496)();
      const _Math = Math;
      const tmpResult5 = tmp(11278);
      const drawerWidth = tmpResult5.useDrawerWidth();
      const bound1 = Math.min(width, height);
      if (tmp28) {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
        const _Math2 = Math;
        let bound2 = Math.min(Math.max(width, height) - drawerWidth, bound1);
      } else {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
        bound2 = bound1 - 2 * GUILD_FEED_CARD_MARGIN_HORIZONTAL;
      }
      if (cResult[20] === bound) {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
      }
      if (null != tmp17) {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
        size = { height: bound, width: "100%" };
        const obj9 = { style: items2, children: closure_12(sharedValue(6164), obj10) };
        items2 = [size, animatedStyle];
        const View = tmp7(4810).View;
        obj10 = { style: closure_6.absoluteFill, source: tmp17, onLoad: tmp22 };
        tmp34Result = closure_12(View, obj9);
      } else {
        class K {
          constructor() {
            const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
            return obj;
          }
        }
        const size1 = { height: bound, width: "100%" };
        const items3 = [size1, animatedStyle];
        tmp36[0] = items3;
        const tmp34 = closure_12;
        const tmp35 = closure_5;
        const tmpResult6 = tmp(4929);
        if (tmpResult6.isThemeDark(tmp9)) {
          class K {
            constructor() {
              const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
              return obj;
            }
          }
        } else {
          class K {
            constructor() {
              const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
              return obj;
            }
          }
        }
        tmp36[1] = tmp37;
        tmp36[2] = tmp22;
        tmp34Result = tmp34(tmp35, tmp36);
      }
      cResult[20] = bound;
      cResult[21] = tmp17;
      cResult[22] = tmp22;
      cResult[23] = animatedStyle;
      cResult[24] = tmp9;
      cResult[25] = tmp34Result;
    }
  }
  const features = guild.features;
  let hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  if (hasItem) {
    class K {
      constructor() {
        const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
        return obj;
      }
    }
    hasItem = !obj4.isAndroid();
  }
  let guildBannerSource = null;
  if (null != guild.banner) {
    class K {
      constructor() {
        const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
        return obj;
      }
    }
    const obj11 = { id: null, banner: null };
    ({ id: obj6.id, banner: obj6.banner } = guild);
    guildBannerSource = obj5.getGuildBannerSource(obj11, hasItem);
  }
  cResult[4] = guild.banner;
  cResult[5] = guild.features;
  cResult[6] = guild.id;
  cResult[7] = guildBannerSource;
  tmp13 = guildBannerSource;
}) : (function GuildFeedBanner(guild) {
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
  let obj11;
  let obj23;
  let obj6;
  let obj9;
  let tmp17;
  let tmp17Result;
  let tmp6Result;
  let tmp6Result2;
  guild = guild.guild;
  let description = guild.description;
  dependencyMap = undefined;
  let width;
  let height;
  let drawerWidth;
  ({ hideDescription, hideMemberCount } = guild);
  let tmp = closure_14();
  let tmp2 = guild;
  let obj = guild(4810);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = guild(4810);
  const fn = function _() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 1869475832859;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let bound = Math.max(0.22 * sharedValue(1496)().height, GUILD_FEED_MIN_BANNER_HEIGHT);
  const obj3 = width;
  const items = [guild];
  const tmp8 = sharedValue(4991)();
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
  const tmp2Result = tmp2(6167);
  const guildBadgeSource = tmp2Result.getGuildBadgeSource(guild);
  const items2 = [GuildPopoutStore];
  const items3 = [guild];
  const tmp2Result4 = tmp2(504);
  const discoverableGuild = tmp2Result4.useStateFromStoresObject(items2, () => {
    const obj = { discoverableGuild: GuildPopoutStore.getGuild(guild.id) };
    return obj;
  }, items3).discoverableGuild;
  const tmp12 = sharedValue(6618)();
  dependencyMap = tmp12;
  size = tmp6(1496)();
  width = size.width;
  height = size.height;
  const tmp2Result5 = tmp2(11278);
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
  if (null != memo) {
    const obj5 = { style: items5, children: closure_12(tmp6(6164), obj6) };
    const size1 = { height: bound, width: "100%" };
    items5 = [size1, animatedStyle];
    const View = tmp6(4810).View;
    obj6 = { style: closure_6.absoluteFill, source: memo, onLoad: handleLoad };
    tmp17Result = closure_12(View, obj5);
    tmp17 = closure_12;
  } else {
    tmp17 = closure_12;
    let obj7 = { style: items6, source: tmp6Result, onLoad: handleLoad };
    const size2 = { height: bound, width: "100%" };
    items6 = [size2, animatedStyle];
    const tmp18 = drawerWidth;
    const tmp2Result6 = tmp2(4929);
    if (tmp2Result6.isThemeDark(tmp8)) {
      tmp6Result = tmp6(16804);
    } else {
      tmp6Result = tmp6(16805);
    }
    tmp17Result = tmp17(tmp18, obj7);
  }
  items7 = [tmp17Result, ];
  let obj8 = { style: items8, children: closure_13(height, obj9) };
  items8 = [, ];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  obj9 = { style: items9, children: items10 };
  items9 = [tmp.content, { width: memo1, marginTop: -32 }];
  const obj10 = { style: tmp.guildIconContainer, children: tmp17(tmp6Result2, obj11) };
  obj11 = { style: tmp.avatar, guild, size: tmp2(6161).GuildIconSizes.XLARGE, animate: true };
  tmp6Result2 = sharedValue(6161);
  items10 = [tmp17(height, obj10), , , ];
  const obj12 = { style: tmp.textContainer, children: items11 };
  items11 = [, ];
  const obj13 = { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: name };
  items11[0] = tmp17(tmp2(5086).Text, obj13);
  let tmp17Result3 = null;
  if (null != guildBadgeSource) {
    const obj14 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp17Result3 = tmp17(tmp2(1200).Icon, obj14);
  }
  items11[1] = tmp17Result3;
  items10[1] = closure_13(height, obj12);
  let tmp17Result4 = null;
  if (null != description) {
    const obj15 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp17Result4 = tmp17(tmp2(5086).Text, obj15);
  }
  items10[2] = tmp17Result4;
  let tmp15Result4 = null != discoverableGuild && !hideMemberCount;
  if (tmp15Result4) {
    let features = discoverableGuild.features;
    let tmp15Result = null;
    const obj16 = { style: tmp.memberInfo, children: items13 };
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj17 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              let intl;
              const obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO", content: intl.string(guild(closure_2[32]).t.O8lDI2) };
              const open = sharedValue(closure_2[31]).open;
              sharedValue(closure_2[31]);
              intl = guild(closure_2[32]).intl;
              open(obj);
            },
        children: items12
      };
      const PressableOpacity = tmp2(6189).PressableOpacity;
      const obj18 = { style: tmp.publicIcon, source: sharedValue(16806) };
      const Icon = tmp2(1200).Icon;
      items12 = [tmp17(Icon, obj18), ];
      const obj19 = { variant: "text-xs/medium", color: "text-default", children: intl.string(tmp2(1126).t["B/vjCu"]) };
      const Text = tmp2(5086).Text;
      intl = tmp2(1126).intl;
      items12[1] = tmp17(Text, obj19);
      tmp15Result = tmp15(PressableOpacity, obj17);
    }
    items13 = [tmp15Result, ];
    let tmp15Result3 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp15Result3 = null;
      if (null != discoverableGuild.memberCount) {
        const Fragment = obj3.Fragment;
        const obj20 = { children: items14 };
        const obj21 = { style: tmp.dotOnline };
        items14 = [tmp17(height, obj21), ];
        const obj22 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(tmp2(1126).t.QCNv6P, obj23) };
        const Text2 = tmp2(5086).Text;
        intl2 = tmp2(1126).intl;
        obj23 = { online: null, offline: null };
        ({ presenceCount: obj29.online, memberCount: obj29.offline } = discoverableGuild);
        items14[1] = tmp17(Text2, obj22);
        tmp15Result3 = tmp15(Fragment, obj20);
      }
    }
    items13[1] = tmp15Result3;
    tmp15Result4 = tmp15(tmp16, obj16);
  }
  items10[3] = tmp15Result4;
  items7[1] = tmp17(height, obj8);
  return closure_13(height, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildFeedBannerContainer(guildId) {
  let description;
  let first;
  let hideDescription;
  let hideMemberCount;
  let tmp6;
  const obj = guildId(576);
  const cResult = obj.c(8);
  const tmp = guildId;
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8 = null;
  if (null != stateFromStores) {
    if (cResult[3] === description) {
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === hideDescription) {
          let tmp9;
          if (cResult[6] === hideMemberCount) {
            tmp9 = cResult[7];
          }
          tmp8 = tmp9;
        }
      }
    }
    const obj2 = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    const tmp12 = closure_12(closure_17, obj2);
    cResult[3] = description;
    cResult[4] = stateFromStores;
    cResult[5] = hideDescription;
    cResult[6] = hideMemberCount;
    cResult[7] = tmp12;
    tmp9 = tmp12;
  }
  return tmp8;
}) : (function GuildFeedBannerContainer(guildId) {
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
    tmp2 = closure_12(closure_17, obj2);
  }
  return tmp2;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;
