// Module ID: 15279
// Function ID: 116548
// Name: GuildFeedBanner
// Dependencies: [31, 27, 12975, 1838, 15280, 653, 33, 4130, 689, 3991, 1450, 4066, 12976, 477, 1392, 9171, 4131, 4134, 566, 8133, 10850, 3976, 15281, 15282, 5515, 4126, 1273, 4660, 3831, 1212, 15283, 2]

// Module 15279 (GuildFeedBanner)
import importAllResult from "set";
import get_ActivityIndicator from "PressableBase";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import GUILD_FEED_CARD_MARGIN_HORIZONTAL from "GUILD_FEED_CARD_MARGIN_HORIZONTAL";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_4;
let closure_5;
const require = arg1;
function GuildFeedBanner(guild) {
  let hideDescription;
  let hideMemberCount;
  guild = guild.guild;
  let description = guild.description;
  let sharedValue;
  let dependencyMap;
  let width;
  let height;
  let drawerWidth;
  function handleLoad() {
    const result = sharedValue.set(guild(_undefined[16]).withTiming(1, guild(_undefined[17]).timingSlow));
  }
  ({ hideDescription, hideMemberCount } = guild);
  const tmp = callback3();
  let obj = guild(3991);
  sharedValue = obj.useSharedValue(0);
  let obj1 = guild(3991);
  class G {
    constructor() {
      obj = { opacity: c1.get() };
      return obj;
    }
  }
  G.__closure = { opacity: sharedValue };
  G.__workletHash = 10872399645496;
  G.__initData = closure_14;
  const animatedStyle = obj1.useAnimatedStyle(G);
  let bound = Math.max(0.22 * sharedValue(1450)().height, closure_9);
  const items = [guild];
  const effect = width.useEffect(() => {
    const guildForPopout = guild(_undefined[12]).fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  const memo = width.useMemo(() => {
    const features = guild.features;
    let hasItem = features.has(outer1_10.ANIMATED_BANNER);
    if (hasItem) {
      let obj = guild(_undefined[13]);
      hasItem = !obj.isAndroid();
    }
    let guildBannerSource = null;
    if (null != guild.banner) {
      obj = {};
      ({ id: obj3.id, banner: obj3.banner } = guild);
      guildBannerSource = sharedValue(_undefined[14]).getGuildBannerSource(obj, hasItem);
      const obj2 = sharedValue(_undefined[14]);
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != guild) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != guild.homeHeader) {
        obj = {};
        ({ id: obj5.id, homeHeader: obj5.homeHeader } = guild);
        guildHomeHeaderSource = sharedValue(_undefined[14]).getGuildHomeHeaderSource(obj);
        const obj4 = sharedValue(_undefined[14]);
      }
    }
    return guildHomeHeaderSource;
  }, items1);
  if (null == description) {
    description = guild.description;
  }
  let obj2 = guild(9171);
  const guildBadgeSource = obj2.getGuildBadgeSource(guild);
  let obj3 = guild(566);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [guild];
  const discoverableGuild = obj3.useStateFromStoresObject(items2, () => ({ discoverableGuild: outer1_6.getGuild(guild.id) }), items3).discoverableGuild;
  const tmp9 = sharedValue(8133)();
  dependencyMap = tmp9;
  const size = sharedValue(1450)();
  width = size.width;
  height = size.height;
  let obj4 = guild(10850);
  drawerWidth = obj4.useDrawerWidth();
  const items4 = [width, height, tmp9, drawerWidth];
  obj = { style: tmp.container };
  const memo1 = width.useMemo(() => {
    const bound = Math.min(width, height);
    if (c2) {
      const _Math = Math;
      const _Math2 = Math;
      return Math.min(Math.max(width, height) - drawerWidth, bound);
    } else {
      return bound - 2 * outer1_8;
    }
  }, items4);
  if (null != memo) {
    obj = {};
    obj1 = { height: bound, width: "100%" };
    const items5 = [obj1, animatedStyle];
    obj.style = items5;
    obj.source = memo;
    obj.onLoad = handleLoad;
    obj2 = obj;
  } else {
    obj2 = {};
    obj3 = { height: bound, width: "100%" };
    const items6 = [obj3, animatedStyle];
    obj2.style = items6;
    let obj8 = guild(3976);
    if (obj8.isThemeDark(tmp5)) {
      let tmp18Result = tmp18(15281);
    } else {
      tmp18Result = tmp18(15282);
    }
    obj2.source = tmp18Result;
    obj2.onLoad = handleLoad;
  }
  const items7 = [callback(drawerWidth, obj2), ];
  obj4 = { style: items8 };
  items8 = [, ];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  const obj5 = { style: items9 };
  items9 = [tmp.content, { width: memo1, marginTop: -32 }];
  const obj6 = { style: tmp.guildIconContainer };
  const obj7 = { style: tmp.avatar, guild };
  const tmp12 = callback2;
  const tmp13 = height;
  const tmp14 = callback;
  const tmp15 = drawerWidth;
  const tmp21 = callback;
  const tmp22 = height;
  const tmp23 = callback2;
  const tmp24 = height;
  tmp5 = sharedValue(4066)();
  obj7.size = guild(5515).GuildIconSizes.XLARGE;
  obj7.animate = true;
  obj6.children = callback(sharedValue(5515), obj7);
  const items10 = [callback(height, obj6), , , ];
  obj8 = { style: tmp.textContainer };
  const obj9 = { lineClamp: 1, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.title, children: guild.name };
  const items11 = [callback(guild(4126).Text, obj9), ];
  let tmp28 = null;
  if (null != guildBadgeSource) {
    const obj10 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp28 = callback(guild(1273).Icon, obj10);
  }
  items11[1] = tmp28;
  obj8.children = items11;
  items10[1] = callback2(height, obj8);
  let tmp32 = null;
  if (null != description) {
    const obj11 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: description };
    tmp32 = callback(guild(4126).Text, obj11);
  }
  items10[2] = tmp32;
  let tmp37Result = null != discoverableGuild && !hideMemberCount;
  if (tmp37Result) {
    const obj12 = { style: tmp.memberInfo };
    let features = discoverableGuild.features;
    let tmp40 = null;
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj13 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              let obj = sharedValue(_undefined[28]);
              obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO" };
              const intl = guild(_undefined[29]).intl;
              obj.content = intl.string(guild(_undefined[29]).t.O8lDI2);
              obj.open(obj);
            }
      };
      const obj14 = { style: tmp.publicIcon, source: sharedValue(15283) };
      const items12 = [callback(guild(1273).Icon, obj14), ];
      const obj15 = { variant: "text-xs/medium", color: "text-default" };
      class G {
        constructor() {
          obj = { opacity: c1.get() };
          return obj;
        }
      }
      let intl = guild(1212).intl;
      obj15.children = intl.string(guild(1212).t["B/vjCu"]);
      items12[1] = callback(tmp47, obj15);
      obj13.children = items12;
      tmp40 = callback2(guild(4660).PressableOpacity, obj13);
    }
    const items13 = [tmp40, ];
    let tmp48 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp48 = null;
      if (null != discoverableGuild.memberCount) {
        const obj17 = { style: tmp.dotOnline };
        const items14 = [callback(height, obj17), ];
        const obj18 = { variant: "text-xs/medium", color: "text-default" };
        const intl2 = guild(1212).intl;
        ({ presenceCount: obj27.online, memberCount: obj27.offline } = discoverableGuild);
        obj18.children = intl2.format(guild(1212).t.QCNv6P, {});
        items14[1] = callback(guild(4126).Text, obj18);
        class G {
          constructor() {
            obj = { opacity: c1.get() };
            return obj;
          }
        }
        tmp48 = callback2(width.Fragment, {});
        const obj16 = {};
        const obj19 = {};
      }
    }
    items13[1] = tmp48;
    obj12.children = items13;
    tmp37Result = callback2(height, obj12);
    const tmp37 = callback2;
    const tmp38 = height;
  }
  items10[3] = tmp37Result;
  obj5.children = items10;
  obj4.children = tmp23(tmp24, obj5);
  items7[1] = tmp21(tmp22, obj4);
  obj.children = items7;
  return tmp12(tmp13, obj);
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
GUILD_FEED_CARD_MARGIN_HORIZONTAL = GUILD_FEED_CARD_MARGIN_HORIZONTAL.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_9 = GUILD_FEED_CARD_MARGIN_HORIZONTAL.GUILD_FEED_MIN_BANNER_HEIGHT;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, height: 64, width: 64 };
obj.avatar = obj;
_createForOfIteratorHelperLoose = { paddingBottom: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.container = _createForOfIteratorHelperLoose;
obj.description = { marginTop: 4 };
let obj2 = { marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL, alignItems: "center", flexDirection: "row" };
obj.textContainer = obj2;
obj.content = { width: "100%" };
obj.icon = { marginLeft: 8 };
obj.headerContainer = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
let obj3 = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.headerBorder = { borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginTop: -16 };
let obj5 = { padding: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.guildIconContainer = obj5;
let obj6 = { width: 4, height: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginRight: 4, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360 };
obj.dotOnline = obj6;
obj.publicInfo = { flexDirection: "row", alignItems: "center", marginRight: 12 };
obj.publicIcon = { marginRight: 4, width: 14, height: 14 };
obj.memberInfo = { marginTop: 4, flexDirection: "row", alignItems: "center" };
obj.title = { maxWidth: "90%" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let obj4 = { borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginTop: -16 };
const memoResult = importAllResult.memo(function GuildFeedBannerContainer(guildId) {
  let description;
  let hideDescription;
  let hideMemberCount;
  guildId = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  let obj = guildId(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = callback(GuildFeedBanner, obj);
  }
  return tmp2;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;
