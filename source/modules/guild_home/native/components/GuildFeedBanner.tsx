// Module ID: 15164
// Function ID: 114379
// Name: GuildFeedBanner
// Dependencies: []

// Module 15164 (GuildFeedBanner)
function GuildFeedBanner(guild) {
  let hideDescription;
  let hideMemberCount;
  guild = guild.guild;
  const arg1 = guild;
  let description = guild.description;
  let importDefault;
  let dependencyMap;
  let importAllResult;
  let height;
  let drawerWidth;
  function handleLoad() {
    const result = sharedValue.set(guild(tmp9[16]).withTiming(1, guild(tmp9[17]).timingSlow));
  }
  ({ hideDescription, hideMemberCount } = guild);
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const sharedValue = obj.useSharedValue(0);
  importDefault = sharedValue;
  let obj1 = arg1(dependencyMap[9]);
  class G {
    constructor() {
      obj = { opacity: closure_1.get() };
      return obj;
    }
  }
  G.__closure = { opacity: sharedValue };
  G.__workletHash = 10872399645496;
  G.__initData = closure_14;
  const animatedStyle = obj1.useAnimatedStyle(G);
  const bound = Math.max(0.22 * importDefault(dependencyMap[10])().height, closure_9);
  const items = [guild];
  const effect = importAllResult.useEffect(() => {
    const guildForPopout = guild(tmp9[12]).fetchGuildForPopout(guild.id);
  }, items);
  const items1 = [guild];
  const memo = importAllResult.useMemo(() => {
    const features = guild.features;
    let hasItem = features.has(constants.ANIMATED_BANNER);
    if (hasItem) {
      let obj = guild(tmp9[13]);
      hasItem = !obj.isAndroid();
    }
    let guildBannerSource = null;
    if (null != guild.banner) {
      obj = {};
      ({ id: obj3.id, banner: obj3.banner } = guild);
      guildBannerSource = sharedValue(tmp9[14]).getGuildBannerSource(obj, hasItem);
      const obj2 = sharedValue(tmp9[14]);
    }
    let guildHomeHeaderSource = guildBannerSource;
    if (null != guild) {
      guildHomeHeaderSource = guildBannerSource;
      if (null != guild.homeHeader) {
        obj = {};
        ({ id: obj5.id, homeHeader: obj5.homeHeader } = guild);
        guildHomeHeaderSource = sharedValue(tmp9[14]).getGuildHomeHeaderSource(obj);
        const obj4 = sharedValue(tmp9[14]);
      }
    }
    return guildHomeHeaderSource;
  }, items1);
  if (null == description) {
    description = guild.description;
  }
  let obj2 = arg1(dependencyMap[15]);
  const guildBadgeSource = obj2.getGuildBadgeSource(guild);
  let obj3 = arg1(dependencyMap[18]);
  const items2 = [closure_6];
  const items3 = [guild];
  const discoverableGuild = obj3.useStateFromStoresObject(items2, () => ({ discoverableGuild: guild.getGuild(guild.id) }), items3).discoverableGuild;
  const tmp9 = importDefault(dependencyMap[19])();
  dependencyMap = tmp9;
  const size = importDefault(dependencyMap[10])();
  const width = size.width;
  importAllResult = width;
  height = size.height;
  let obj4 = arg1(dependencyMap[20]);
  drawerWidth = obj4.useDrawerWidth();
  const items4 = [width, height, tmp9, drawerWidth];
  obj = { style: tmp.container };
  const memo1 = importAllResult.useMemo(() => {
    const bound = Math.min(width, height);
    if (tmp9) {
      const _Math = Math;
      const _Math2 = Math;
      return Math.min(Math.max(width, height) - drawerWidth, bound);
    } else {
      return bound - 2 * closure_8;
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
    let obj8 = arg1(dependencyMap[21]);
    if (obj8.isThemeDark(tmp5)) {
      let tmp18Result = tmp18(tmp19[22]);
    } else {
      tmp18Result = tmp18(tmp19[23]);
    }
    obj2.source = tmp18Result;
    obj2.onLoad = handleLoad;
  }
  const items7 = [callback(drawerWidth, obj2), ];
  obj4 = { style: items8 };
  const items8 = [, ];
  ({ headerContainer: arr9[0], headerBorder: arr9[1] } = tmp);
  const obj5 = { style: items9 };
  const items9 = [tmp.content, { width: memo1, marginTop: -32 }];
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
  const tmp5 = importDefault(dependencyMap[11])();
  obj7.size = arg1(dependencyMap[24]).GuildIconSizes.XLARGE;
  obj7.animate = true;
  obj6.children = callback(importDefault(dependencyMap[24]), obj7);
  const items10 = [callback(height, obj6), , , ];
  obj8 = { style: tmp.textContainer };
  const items11 = [callback(arg1(dependencyMap[25]).Text, { style: tmp.title, children: guild.name }), ];
  let tmp28 = null;
  if (null != guildBadgeSource) {
    const obj10 = { style: tmp.icon, source: guildBadgeSource, disableColor: true };
    tmp28 = callback(arg1(dependencyMap[26]).Icon, obj10);
  }
  items11[1] = tmp28;
  obj8.children = items11;
  items10[1] = callback2(height, obj8);
  let tmp32 = null;
  if (null != description) {
    const obj11 = { style: tmp.description, children: description };
    tmp32 = callback(arg1(dependencyMap[25]).Text, obj11);
  }
  items10[2] = tmp32;
  let tmp37Result = null != discoverableGuild && !hideMemberCount;
  if (tmp37Result) {
    const obj12 = { style: tmp.memberInfo };
    const features = discoverableGuild.features;
    let tmp40 = null;
    if (features.has(GuildFeatures.DISCOVERABLE)) {
      const obj13 = {
        style: tmp.publicInfo,
        accessibilityRole: "button",
        onPress() {
              let obj = sharedValue(tmp9[28]);
              obj = { key: "DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO" };
              const intl = guild(tmp9[29]).intl;
              obj.content = intl.string(guild(tmp9[29]).t.O8lDI2);
              obj.open(obj);
            }
      };
      const obj14 = { style: tmp.publicIcon, source: importDefault(dependencyMap[30]) };
      const items12 = [callback(arg1(dependencyMap[26]).Icon, obj14), ];
      const obj15 = { cachedAt: true, edpbxy: true };
      class G {
        constructor() {
          obj = { opacity: closure_1.get() };
          return obj;
        }
      }
      const intl = arg1(dependencyMap[29]).intl;
      obj15.children = intl.string(arg1(dependencyMap[29]).t.B/vjCu);
      items12[1] = callback(tmp47, obj15);
      obj13.children = items12;
      tmp40 = callback2(arg1(dependencyMap[27]).PressableOpacity, obj13);
    }
    const items13 = [tmp40, ];
    let tmp48 = null;
    if (null != discoverableGuild.presenceCount) {
      tmp48 = null;
      if (null != discoverableGuild.memberCount) {
        const obj17 = { style: tmp.dotOnline };
        const items14 = [callback(height, obj17), ];
        const obj18 = { cachedAt: true, edpbxy: true };
        const intl2 = arg1(dependencyMap[29]).intl;
        ({ presenceCount: obj27.online, memberCount: obj27.offline } = discoverableGuild);
        obj18.children = intl2.format(arg1(dependencyMap[29]).t.QCNv6P, {});
        items14[1] = callback(arg1(dependencyMap[25]).Text, obj18);
        class G {
          constructor() {
            obj = { opacity: closure_1.get() };
            return obj;
          }
        }
        tmp48 = callback2(importAllResult.Fragment, {});
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
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
const GUILD_FEED_CARD_MARGIN_HORIZONTAL = tmp3.GUILD_FEED_CARD_MARGIN_HORIZONTAL;
let closure_9 = tmp3.GUILD_FEED_MIN_BANNER_HEIGHT;
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.avatar = obj;
obj1 = { paddingBottom: 24, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj1;
obj.description = { marginTop: 4 };
const obj2 = { "Null": null, "Null": 0, "Null": null, marginTop: GUILD_FEED_CARD_MARGIN_HORIZONTAL };
obj.textContainer = obj2;
obj.content = { width: "100%" };
obj.icon = { marginLeft: 8 };
const tmp4 = arg1(dependencyMap[6]);
obj.headerContainer = { alignItems: "center", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
const obj3 = { alignItems: "center", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.headerBorder = { borderTopRightRadius: importDefault(dependencyMap[8]).radii.lg, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.lg, marginTop: -16 };
const obj5 = { "Null": true, "Null": true, "Null": true, borderRadius: importDefault(dependencyMap[8]).radii.lg, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.guildIconContainer = obj5;
const obj6 = { "Bool(false)": "r", "Bool(false)": "isArray", "Bool(false)": "x", "Bool(false)": "join", borderRadius: importDefault(dependencyMap[8]).radii.xs, backgroundColor: importDefault(dependencyMap[8]).unsafe_rawColors.GREEN_360 };
obj.dotOnline = obj6;
obj.publicInfo = {};
obj.publicIcon = {};
obj.memberInfo = { getMentionIconType: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000679493299036644, scoreMethod: 0.000000000000000000000000000000000000000000000000000000000000046672614582715765, popoutData: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000039939227568391565 };
obj.title = { maxWidth: "90%" };
let closure_13 = obj1.createStyles(obj);
let closure_14 = { code: "function GuildFeedBannerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj4 = { borderTopRightRadius: importDefault(dependencyMap[8]).radii.lg, borderTopLeftRadius: importDefault(dependencyMap[8]).radii.lg, marginTop: -16 };
const memoResult = importAllResult.memo(function GuildFeedBannerContainer(guildId) {
  let description;
  let hideDescription;
  let hideMemberCount;
  const arg1 = guildId.guildId;
  ({ description, hideDescription, hideMemberCount } = guildId);
  let obj = arg1(dependencyMap[18]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { guild: stateFromStores, description, hideDescription, hideMemberCount };
    tmp2 = callback(GuildFeedBanner, obj);
  }
  return tmp2;
});
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_home/native/components/GuildFeedBanner.tsx");

export default memoResult;
