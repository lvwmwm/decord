// Module ID: 15096
// Function ID: 113746
// Name: SelectedServerIcon
// Dependencies: []
// Exports: default

// Module 15096 (SelectedServerIcon)
function SelectedServerIcon(guild) {
  guild = guild.guild;
  const tmp = callback4();
  let obj = {};
  const items = [tmp.selectedServerIcon, , ];
  let noServerContainer = null == guild;
  if (noServerContainer) {
    noServerContainer = tmp.noServerContainer;
  }
  items[1] = noServerContainer;
  items[2] = null == guild && guild.index >= 3 && tmp.noServerExtraContainer;
  obj.style = items;
  if (null != guild) {
    obj = { style: tmp.guildIconBorder, guild, size: arg1(dependencyMap[11]).GuildIconSizes.LARGE };
    let tmp5 = callback3(importDefault(dependencyMap[11]), obj);
    const tmp13 = importDefault(dependencyMap[11]);
  } else {
    tmp5 = null;
    if (tmp2) {
      obj = { size: "md", color: importDefault(dependencyMap[10]).colors.ICON_MUTED };
      tmp5 = callback3(arg1(dependencyMap[12]).ServerIcon, obj);
    }
  }
  obj.children = tmp5;
  return callback3(closure_6, obj);
}
function SelectedServersRow(selectedGuilds) {
  selectedGuilds = selectedGuilds.selectedGuilds;
  const arg1 = selectedGuilds;
  const items = [selectedGuilds];
  const callback = React.useCallback((arg0, index) => {
    const obj = {};
    let tmp3;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    obj.guild = tmp3;
    obj.index = index;
    return closure_12(closure_18, obj);
  }, items);
  const tmp3 = callback2(React.useState(selectedGuilds.length), 2);
  const first = tmp3[0];
  const importDefault = first;
  let closure_2 = tmp3[1];
  const ref = React.useRef(null);
  let closure_3 = ref;
  const items1 = [first, selectedGuilds.length];
  const effect = React.useEffect(() => {
    if (first < selectedGuilds.length) {
      const current = ref.current;
      if (null != current) {
        const obj = { item: selectedGuilds.length };
        current.scrollToLocation(obj);
      }
      callback(selectedGuilds.length);
    } else if (first !== selectedGuilds.length) {
      callback(selectedGuilds.length);
    }
  }, items1);
  let obj = arg1(closure_2[13]);
  const fn = function _() {
    const obj = {};
    let num = 0;
    if (selectedGuilds.length > 0) {
      num = 1;
    }
    obj.opacity = selectedGuilds(closure_2[14]).withTiming(num);
    const obj2 = selectedGuilds(closure_2[14]);
    let num2 = 0;
    if (selectedGuilds.length > 0) {
      num2 = closure_15;
    }
    obj.height = selectedGuilds(closure_2[14]).withTiming(num2);
    const obj3 = selectedGuilds(closure_2[14]);
    let num3 = 0;
    if (selectedGuilds.length > 0) {
      num3 = first(closure_2[10]).space.PX_24;
    }
    obj.marginTop = selectedGuilds(closure_2[14]).withTiming(num3);
    return obj;
  };
  obj = { withTiming: arg1(closure_2[14]).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: closure_15, tokens: importDefault(closure_2[10]) };
  fn.__closure = obj;
  fn.__workletHash = 2911488630455;
  fn.__initData = closure_17;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items2 };
  const items2 = [callback4().selectedServersRowContainer, animatedStyle];
  const obj1 = { ref };
  let num = 3;
  const tmp = callback4();
  const tmp8 = closure_12;
  const tmp9 = closure_12;
  if (selectedGuilds.length >= 3) {
    num = selectedGuilds.length + 1;
  }
  const items3 = [num];
  obj1.sections = items3;
  obj1.insetStart = importDefault(closure_2[10]).space.PX_24;
  obj1.insetEnd = importDefault(closure_2[10]).space.PX_12;
  obj1.renderItem = callback;
  obj1.estimatedListSize = "windowSize";
  obj1.itemSize = closure_15 + importDefault(closure_2[10]).space.PX_12;
  obj1.horizontal = true;
  obj1.listId = "selected-servers-list";
  obj1.showsHorizontalScrollIndicator = false;
  obj.children = tmp9(importDefault(closure_2[15]), obj1);
  return tmp8(importDefault(closure_2[13]).View, obj);
}
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const tmp = callback4();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj1 = importDefault(dependencyMap[17]);
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = callback(closure_2[17]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  obj = { style: tmp.bannerImage };
  obj = {};
  obj1 = { shape: arg1(dependencyMap[18]).CutoutShape.RoundedRect };
  const items1 = [obj1];
  obj.cutouts = items1;
  if (null != guild.banner) {
    const obj2 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp14 = callback3(importDefault(dependencyMap[19]), obj2);
  } else {
    const obj3 = {};
    const items2 = [, ];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    obj3.style = items2;
    tmp14 = callback3(closure_6, obj3);
  }
  obj.children = tmp14;
  const items3 = [callback3(importDefault(dependencyMap[18]), obj), ];
  const obj4 = { style: items4, guild };
  const items4 = [, ];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  const tmp10 = callback3;
  const tmp11 = importDefault(dependencyMap[18]);
  const tmp8 = closure_13;
  const tmp9 = closure_6;
  obj4.size = arg1(dependencyMap[11]).GuildIconSizes.LARGE;
  obj4.animate = !stateFromStores;
  items3[1] = callback3(importDefault(dependencyMap[11]), obj4);
  obj.children = items3;
  return tmp8(tmp9, obj);
}
function FeaturedServer(guild) {
  let handlePress;
  let selected;
  guild = guild.guild;
  const arg1 = guild;
  ({ selected, handlePress } = guild);
  const importDefault = handlePress;
  const tmp = callback4();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => null != guild.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = React.useCallback(() => {
    handlePress(guild);
  }, items1);
  obj = { underlayColor: tmp.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp.featuredServerContainer, onPress: callback };
  const items2 = [callback3(CutoutGuildBanner, { guild }), ];
  obj = { style: tmp.featuredServerInnerContainer };
  const items3 = [callback3(arg1(dependencyMap[21]).Text, { style: tmp.featuredServerTitle, children: guild.name }), , ];
  const obj2 = { -366381740057: -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -9223372036854775808: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892, -9223372036854775808: 8592535456.001152, children: guild.description };
  items3[1] = callback3(arg1(dependencyMap[21]).Text, obj2);
  const obj3 = { style: tmp.buttonContainer };
  const obj4 = { accessibilityHint: "checkbox", accessibilityState: { checked: selected }, disabled: stateFromStores };
  let tmp10;
  if (selected) {
    const obj5 = { size: "sm", color: importDefault(dependencyMap[10]).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
    tmp10 = callback3(arg1(dependencyMap[23]).CircleCheckIcon, obj5);
  }
  obj4.icon = tmp10;
  if (stateFromStores) {
    if (!guild.loading) {
      const intl = arg1(dependencyMap[24]).intl;
      obj4.text = intl.string(arg1(dependencyMap[24]).t.cEnaWx);
      obj4.size = "sm";
      obj4.onPress = callback;
      if (stateFromStores) {
        let str3 = "secondary";
      } else {
        str3 = "active";
      }
      obj4.variant = str3;
      obj4.grow = true;
      obj3.children = callback3(arg1(dependencyMap[22]).Button, obj4);
      items3[2] = callback3(closure_6, obj3);
      obj.children = items3;
      items2[1] = closure_13(closure_6, obj);
      obj.children = items2;
      return closure_13(arg1(dependencyMap[20]).PressableHighlight, obj);
    }
  }
  const intl2 = arg1(dependencyMap[24]).intl;
  const string = intl2.string;
  TwueC+ = arg1(dependencyMap[24]).t;
  if (selected) {
    TwueC+ = TwueC_.TwueC+;
    string(TwueC_);
  } else {
    string(TwueC_.XqMe3N);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, StyleSheet: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const GuildFeatures = arg1(dependencyMap[7]).GuildFeatures;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[8]));
let closure_15 = 50;
const tmp3 = arg1(dependencyMap[8]);
let closure_16 = arg1(dependencyMap[9]).createICYMIStyles((margin) => {
  let obj = {};
  obj = { 9223372036854775807: 1, 9223372036854775807: 2, 9223372036854775807: "filters", backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWER, marginHorizontal: margin.margin };
  obj.container = obj;
  obj = { paddingTop: importDefault(dependencyMap[10]).space.PX_8 };
  obj.scrollContentContainer = obj;
  const obj1 = { <string:765737181>: 40, <string:1382441379>: 40, left: importDefault(dependencyMap[10]).space.PX_24, right: importDefault(dependencyMap[10]).space.PX_24, paddingBottom: importDefault(dependencyMap[10]).space.PX_8 };
  obj.footer = obj1;
  obj.title = { marginTop: importDefault(dependencyMap[10]).space.PX_24, marginBottom: importDefault(dependencyMap[10]).space.PX_8, marginHorizontal: importDefault(dependencyMap[10]).space.PX_24 };
  const obj2 = { marginTop: importDefault(dependencyMap[10]).space.PX_24, marginBottom: importDefault(dependencyMap[10]).space.PX_8, marginHorizontal: importDefault(dependencyMap[10]).space.PX_24 };
  obj.subtitle = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_24 };
  const obj3 = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_24 };
  obj.separator = { height: hairlineWidth.hairlineWidth, width: "100%", backgroundColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
  const obj4 = { height: hairlineWidth.hairlineWidth, width: "100%", backgroundColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
  obj.featuredServerContainer = { borderRadius: importDefault(dependencyMap[10]).radii.lg, backgroundColor: importDefault(dependencyMap[10]).colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: importDefault(dependencyMap[10]).space.PX_8, marginVertical: importDefault(dependencyMap[10]).space.PX_8 };
  const obj5 = { borderRadius: importDefault(dependencyMap[10]).radii.lg, backgroundColor: importDefault(dependencyMap[10]).colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: importDefault(dependencyMap[10]).space.PX_8, marginVertical: importDefault(dependencyMap[10]).space.PX_8 };
  obj.featuredServerInnerContainer = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_12, marginTop: 36 };
  const obj6 = { marginHorizontal: importDefault(dependencyMap[10]).space.PX_12, marginTop: 36 };
  obj.buttonContainer = { marginBottom: importDefault(dependencyMap[10]).space.PX_12, marginTop: margin.margin };
  const obj7 = { marginBottom: importDefault(dependencyMap[10]).space.PX_12, marginTop: margin.margin };
  obj.featuredServerTitle = { marginBottom: importDefault(dependencyMap[10]).space.PX_8 };
  obj.guildIcon = {};
  obj.bannerImage = { hideWhenScrolling: false, autoCapitalize: false };
  const obj8 = { marginBottom: importDefault(dependencyMap[10]).space.PX_8 };
  obj.emptyBanner = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_SUBTLE };
  const obj9 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_SUBTLE };
  obj.guildsScrollContainer = { flex: 1, marginHorizontal: importDefault(dependencyMap[10]).space.PX_8 };
  const obj11 = { marginLeft: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003183821265432445, marginVertical: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003136903938464816, gap: importDefault(dependencyMap[10]).space.PX_16 };
  obj.guildsColumn = obj11;
  const obj10 = { flex: 1, marginHorizontal: importDefault(dependencyMap[10]).space.PX_8 };
  obj.selectedServersRowContainer = { height: closure_15, width: "100%", marginBottom: importDefault(dependencyMap[10]).space.PX_24 };
  const obj12 = { height: closure_15, width: "100%", marginBottom: importDefault(dependencyMap[10]).space.PX_24 };
  obj.selectedServerIcon = { width: closure_15, height: closure_15, borderColor: importDefault(dependencyMap[10]).colors.BORDER_STRONG, borderRadius: importDefault(dependencyMap[10]).radii.md, borderWidth: 1 };
  const obj13 = { width: closure_15, height: closure_15, borderColor: importDefault(dependencyMap[10]).colors.BORDER_STRONG, borderRadius: importDefault(dependencyMap[10]).radii.md, borderWidth: 1 };
  obj.noServerContainer = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.noServerExtraContainer = { opacity: 0.4 };
  const obj14 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.pressableUnderlayColor = { backgroundColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj15 = { backgroundColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.guildIconBorder = { borderRadius: importDefault(dependencyMap[10]).radii.md };
  return obj;
});
let closure_17 = { code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[32]).fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default function ICYMIJoinGuildsScreen() {
  const tmp = callback4();
  const bottom = importDefault(dependencyMap[25])().bottom;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_10];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => tmp13.getOnboardingGuilds());
  const arg1 = stateFromStoresArray;
  let obj1 = arg1(dependencyMap[16]);
  const items1 = [closure_10];
  const stateFromStoresArray1 = obj1.useStateFromStoresArray(items1, () => tmp13.getOnboardingCategoryIds());
  const importDefault = stateFromStoresArray1;
  let obj2 = arg1(dependencyMap[16]);
  const items2 = [closure_10];
  const stateFromStores = obj2.useStateFromStores(items2, () => tmp13.getCurrentOnboardingGuildOffset());
  const dependencyMap = stateFromStores;
  const tmp5 = callback2(React.useState(new Set()), 2);
  const first = tmp5[0];
  let callback = first;
  let callback2 = tmp5[1];
  const tmp7 = callback2(React.useState([]), 2);
  const React = tmp7[1];
  const tmp8 = callback2(React.useState(0), 2);
  const first1 = tmp8[0];
  let closure_7 = tmp8[1];
  const items3 = [first];
  callback = React.useCallback((guildId) => {
    const stateFromStoresArray = guildId;
    const ICYMIAnalytics = stateFromStoresArray(stateFromStores[26]).ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled({ guildId: guildId.id, toggled: !first.has(guildId.id) });
    if (first.has(guildId.id)) {
      tmp2((items) => {
        items.delete(items.id);
        return new Set(items);
      });
      callback((arr) => arr.filter((id) => id.id !== id.id));
    } else {
      tmp2((add) => {
        add.add(add.id);
        return new Set(add);
      });
      callback((arg0) => {
        const items = [...arg0, arg0];
        return items;
      });
    }
  }, items3);
  let closure_8 = callback;
  const tmp11 = callback2(React.useState(false), 2);
  const first2 = tmp11[0];
  let closure_9 = first2;
  closure_10 = tmp13;
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [first];
  const items5 = [stateFromStoresArray1, stateFromStores, first1, stateFromStoresArray.length];
  const callback1 = React.useCallback(callback(tmp13), items4);
  const items6 = [first2, first, callback];
  callback2 = React.useCallback(() => {
    if (first1 <= stateFromStores) {
      if (stateFromStoresArray.length < 150) {
        const sum = stateFromStores + stateFromStoresArray(stateFromStores[30]).ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        callback2(sum);
        const popularGuildsFromCategories = stateFromStoresArray1(stateFromStores[27]).fetchPopularGuildsFromCategories(stateFromStoresArray1, sum);
        const obj = stateFromStoresArray1(stateFromStores[27]);
      }
    }
  }, items5);
  obj = {};
  const callback3 = React.useCallback((item) => {
    item = item.item;
    return callback3(closure_21, { guild: item, loading: first2, selected: first.has(item.id), handlePress: callback }, item.id);
  }, items6);
  obj = { cachedAt: false, edpbxy: false, style: tmp.title };
  const intl = arg1(dependencyMap[24]).intl;
  obj.children = intl.string(arg1(dependencyMap[24]).t.19ldCF);
  const items7 = [callback3(arg1(dependencyMap[21]).Text, obj), , , , , ];
  obj1 = { cachedAt: 400, edpbxy: 20, style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[24]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[24]).t.u0KPUS);
  items7[1] = callback3(arg1(dependencyMap[21]).Text, obj1);
  items7[2] = callback3(SelectedServersRow, { selectedGuilds: tmp7[0] });
  obj2 = { style: tmp.separator };
  items7[3] = callback3(first1, obj2);
  const set = new Set();
  const tmp17 = closure_13;
  const tmp18 = closure_14;
  items7[4] = callback3(first1, { style: tmp.guildsScrollContainer, children: callback3(arg1(dependencyMap[31]).MasonryFlashList, obj4) });
  let tmp19 = first.size >= 1;
  if (tmp19) {
    const obj6 = {};
    const obj7 = { marginBottom: bottom };
    const items8 = [obj7, tmp.footer];
    obj6.style = items8;
    const obj8 = { loading: first2, size: "lg" };
    const intl3 = arg1(dependencyMap[24]).intl;
    obj8.text = intl3.string(arg1(dependencyMap[24]).t.K50GHd);
    obj8.onPress = callback1;
    obj6.children = callback3(arg1(dependencyMap[22]).Button, obj8);
    tmp19 = callback3(first1, obj6);
  }
  items7[5] = tmp19;
  obj.children = items7;
  return tmp17(tmp18, obj);
};
