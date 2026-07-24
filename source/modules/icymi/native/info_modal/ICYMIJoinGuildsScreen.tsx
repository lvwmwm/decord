// Module ID: 15258
// Function ID: 116237
// Name: SelectedServerIcon
// Dependencies: [5, 57, 31, 27, 4122, 1838, 15257, 653, 33, 15226, 689, 5513, 9048, 3991, 4131, 9280, 566, 1392, 7961, 5085, 4660, 4126, 4543, 4091, 1212, 1557, 8374, 8365, 3831, 4337, 15241, 7527, 2]
// Exports: default

// Module 15258 (SelectedServerIcon)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import defaultMVCPConfig from "defaultMVCPConfig";
import get_ActivityIndicator from "module_8365";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
const require = arg1;
function SelectedServerIcon(guild) {
  guild = guild.guild;
  const tmp = callback3();
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
    obj = { style: tmp.guildIconBorder, guild, size: require(5513) /* makeSizeStyle */.GuildIconSizes.LARGE };
    let tmp5 = callback2(importDefault(5513), obj);
    const tmp13 = importDefault(5513);
  } else {
    tmp5 = null;
    if (tmp2) {
      obj = { size: "md", color: importDefault(689).colors.ICON_MUTED };
      tmp5 = callback2(require(9048) /* ServerIcon */.ServerIcon, obj);
    }
  }
  obj.children = tmp5;
  return callback2(closure_6, obj);
}
function SelectedServersRow(selectedGuilds) {
  selectedGuilds = selectedGuilds.selectedGuilds;
  const items = [selectedGuilds];
  const callback = React.useCallback((arg0, index) => {
    const obj = {};
    let tmp3;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    obj.guild = tmp3;
    obj.index = index;
    return outer1_12(outer1_18, obj);
  }, items);
  let tmp3 = callback(React.useState(selectedGuilds.length), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const ref = React.useRef(null);
  const items1 = [first, selectedGuilds.length];
  const effect = React.useEffect(() => {
    if (first < selectedGuilds.length) {
      const current = ref.current;
      if (null != current) {
        const obj = { animated: true, section: 0, item: selectedGuilds.length };
        current.scrollToLocation(obj);
      }
      dependencyMap(selectedGuilds.length);
    } else if (first !== selectedGuilds.length) {
      dependencyMap(selectedGuilds.length);
    }
  }, items1);
  let obj = selectedGuilds(3991);
  const fn = function _() {
    const obj = {};
    let num = 0;
    if (selectedGuilds.length > 0) {
      num = 1;
    }
    obj.opacity = selectedGuilds(4131).withTiming(num);
    const obj2 = selectedGuilds(4131);
    let num2 = 0;
    if (selectedGuilds.length > 0) {
      num2 = outer1_15;
    }
    obj.height = selectedGuilds(4131).withTiming(num2);
    const obj3 = selectedGuilds(4131);
    let num3 = 0;
    if (selectedGuilds.length > 0) {
      num3 = first(689).space.PX_24;
    }
    obj.marginTop = selectedGuilds(4131).withTiming(num3);
    return obj;
  };
  obj = { withTiming: selectedGuilds(4131).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: c15, tokens: first(689) };
  fn.__closure = obj;
  fn.__workletHash = 2911488630455;
  fn.__initData = closure_17;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items2 };
  items2 = [callback3().selectedServersRowContainer, animatedStyle];
  const obj1 = { ref };
  let num = 3;
  const tmp = callback3();
  const tmp8 = closure_12;
  const tmp9 = closure_12;
  if (selectedGuilds.length >= 3) {
    num = selectedGuilds.length + 1;
  }
  const items3 = [num];
  obj1.sections = items3;
  obj1.insetStart = first(689).space.PX_24;
  obj1.insetEnd = first(689).space.PX_12;
  obj1.renderItem = callback;
  obj1.estimatedListSize = "windowSize";
  obj1.itemSize = c15 + first(689).space.PX_12;
  obj1.horizontal = true;
  obj1.listId = "selected-servers-list";
  obj1.showsHorizontalScrollIndicator = false;
  obj.children = tmp9(first(9280), obj1);
  return tmp8(first(3991).View, obj);
}
function CutoutGuildBanner(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let obj = guild(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.useReducedMotion);
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj1 = importDefault(1392);
    const animatableSourceWithFallback = obj1.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = outer1_1(outer1_2[17]);
      obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
  }
  obj = { style: tmp.bannerImage };
  obj = {};
  obj1 = { shape: guild(7961).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  const items1 = [obj1];
  obj.cutouts = items1;
  if (null != guild.banner) {
    const obj2 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    let tmp14 = callback2(importDefault(5085), obj2);
  } else {
    const obj3 = {};
    const items2 = [, ];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    obj3.style = items2;
    tmp14 = callback2(closure_6, obj3);
  }
  obj.children = tmp14;
  const items3 = [callback2(importDefault(7961), obj), ];
  const obj4 = { style: items4, guild };
  items4 = [, ];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  const tmp10 = callback2;
  const tmp11 = importDefault(7961);
  const tmp8 = closure_13;
  const tmp9 = closure_6;
  obj4.size = guild(5513).GuildIconSizes.LARGE;
  obj4.animate = !stateFromStores;
  items3[1] = callback2(importDefault(5513), obj4);
  obj.children = items3;
  return tmp8(tmp9, obj);
}
function FeaturedServer(guild) {
  let handlePress;
  let selected;
  guild = guild.guild;
  ({ selected, handlePress } = guild);
  const tmp = callback3();
  let obj = guild(566);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => null != outer1_9.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = React.useCallback(() => {
    handlePress(guild);
  }, items1);
  obj = { underlayColor: tmp.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp.featuredServerContainer, onPress: callback };
  const items2 = [callback2(CutoutGuildBanner, { guild }), ];
  obj = { style: tmp.featuredServerInnerContainer };
  const obj1 = { maxFontSizeMultiplier: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
  const items3 = [callback2(guild(4126).Text, obj1), , ];
  const obj2 = { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description };
  items3[1] = callback2(guild(4126).Text, obj2);
  const obj3 = { style: tmp.buttonContainer };
  const obj4 = { accessibilityHint: "checkbox", accessibilityState: { checked: selected }, disabled: stateFromStores };
  let tmp10;
  if (selected) {
    const obj5 = { size: "sm", color: handlePress(689).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
    tmp10 = callback2(guild(4091).CircleCheckIcon, obj5);
  }
  obj4.icon = tmp10;
  if (stateFromStores) {
    if (!guild.loading) {
      const intl = guild(1212).intl;
      obj4.text = intl.string(guild(1212).t.cEnaWx);
      obj4.size = "sm";
      obj4.onPress = callback;
      if (stateFromStores) {
        let str3 = "secondary";
      } else {
        str3 = "active";
      }
      obj4.variant = str3;
      obj4.grow = true;
      obj3.children = callback2(guild(4543).Button, obj4);
      items3[2] = callback2(closure_6, obj3);
      obj.children = items3;
      items2[1] = closure_13(closure_6, obj);
      obj.children = items2;
      return closure_13(guild(4660).PressableHighlight, obj);
    }
  }
  const intl2 = guild(1212).intl;
  const string = intl2.string;
  TwueC_ = guild(1212).t;
  if (selected) {
    TwueC_ = TwueC_["TwueC+"];
    string(TwueC_);
  } else {
    string(TwueC_.XqMe3N);
  }
}
({ View: closure_6, StyleSheet: closure_7 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let c15 = 50;
let closure_16 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin };
  obj.container = obj;
  obj = { paddingTop: importDefault(689).space.PX_8 };
  obj.scrollContentContainer = obj;
  const obj1 = { position: "absolute", bottom: 0, left: importDefault(689).space.PX_24, right: importDefault(689).space.PX_24, paddingBottom: importDefault(689).space.PX_8 };
  obj.footer = obj1;
  obj.title = { marginTop: importDefault(689).space.PX_24, marginBottom: importDefault(689).space.PX_8, marginHorizontal: importDefault(689).space.PX_24 };
  const obj2 = { marginTop: importDefault(689).space.PX_24, marginBottom: importDefault(689).space.PX_8, marginHorizontal: importDefault(689).space.PX_24 };
  obj.subtitle = { marginHorizontal: importDefault(689).space.PX_24 };
  const obj3 = { marginHorizontal: importDefault(689).space.PX_24 };
  obj.separator = { height: hairlineWidth.hairlineWidth, width: "100%", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  const obj4 = { height: hairlineWidth.hairlineWidth, width: "100%", backgroundColor: importDefault(689).colors.BORDER_SUBTLE };
  obj.featuredServerContainer = { borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: importDefault(689).space.PX_8, marginVertical: importDefault(689).space.PX_8 };
  const obj5 = { borderRadius: importDefault(689).radii.lg, backgroundColor: importDefault(689).colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: importDefault(689).space.PX_8, marginVertical: importDefault(689).space.PX_8 };
  obj.featuredServerInnerContainer = { marginHorizontal: importDefault(689).space.PX_12, marginTop: 36 };
  const obj6 = { marginHorizontal: importDefault(689).space.PX_12, marginTop: 36 };
  obj.buttonContainer = { marginBottom: importDefault(689).space.PX_12, marginTop: margin.margin };
  const obj7 = { marginBottom: importDefault(689).space.PX_12, marginTop: margin.margin };
  obj.featuredServerTitle = { marginBottom: importDefault(689).space.PX_8 };
  obj.guildIcon = { position: "absolute", top: 50, left: 12 };
  obj.bannerImage = { height: 73, width: "100%" };
  const obj8 = { marginBottom: importDefault(689).space.PX_8 };
  obj.emptyBanner = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_SUBTLE };
  const obj9 = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_SUBTLE };
  obj.guildsScrollContainer = { flex: 1, marginHorizontal: importDefault(689).space.PX_8 };
  const obj11 = { flex: 1, flexDirection: "column", gap: importDefault(689).space.PX_16 };
  obj.guildsColumn = obj11;
  const obj10 = { flex: 1, marginHorizontal: importDefault(689).space.PX_8 };
  obj.selectedServersRowContainer = { height: c15, width: "100%", marginBottom: importDefault(689).space.PX_24 };
  const obj13 = { flex: 1, width: c15, height: c15, alignItems: "center", justifyContent: "center", borderColor: importDefault(689).colors.BORDER_STRONG, borderRadius: importDefault(689).radii.md, borderWidth: 1 };
  obj.selectedServerIcon = obj13;
  const obj12 = { height: c15, width: "100%", marginBottom: importDefault(689).space.PX_24 };
  obj.noServerContainer = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.noServerExtraContainer = { opacity: 0.4 };
  const obj14 = { backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" };
  obj.pressableUnderlayColor = { backgroundColor: importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj15 = { backgroundColor: importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.guildIconBorder = { borderRadius: importDefault(689).radii.md };
  return obj;
});
let closure_17 = { code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
let result = require("result").fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default function ICYMIJoinGuildsScreen() {
  const tmp = callback3();
  const bottom = stateFromStoresArray1(stateFromStores[25])().bottom;
  let obj = stateFromStoresArray(stateFromStores[16]);
  let items = [closure_10];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => tmp13.getOnboardingGuilds());
  let obj1 = stateFromStoresArray(stateFromStores[16]);
  const items1 = [closure_10];
  stateFromStoresArray1 = obj1.useStateFromStoresArray(items1, () => tmp13.getOnboardingCategoryIds());
  let obj2 = stateFromStoresArray(stateFromStores[16]);
  const items2 = [closure_10];
  stateFromStores = obj2.useStateFromStores(items2, () => tmp13.getCurrentOnboardingGuildOffset());
  const tmp5 = callback(React.useState(new Set()), 2);
  const first = tmp5[0];
  callback = tmp5[1];
  const tmp7 = callback(React.useState([]), 2);
  React = tmp7[1];
  const tmp8 = callback(React.useState(0), 2);
  const first1 = tmp8[0];
  let closure_7 = tmp8[1];
  const items3 = [first];
  callback = React.useCallback((guildId) => {
    let closure_0 = guildId;
    const ICYMIAnalytics = stateFromStoresArray(stateFromStores[26]).ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled({ guildId: guildId.id, toggled: !first.has(guildId.id) });
    if (first.has(guildId.id)) {
      tmp2((items) => {
        items.delete(guildId.id);
        return new Set(items);
      });
      callback((arr) => arr.filter((id) => outer1_0.id !== id.id));
    } else {
      tmp2((add) => {
        add.add(guildId.id);
        return new Set(add);
      });
      callback((arg0) => {
        const items = [...arg0, closure_0];
        return items;
      });
    }
  }, items3);
  const tmp11 = callback(React.useState(false), 2);
  const first2 = tmp11[0];
  closure_10 = tmp13;
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [first];
  const items5 = [stateFromStoresArray1, stateFromStores, first1, stateFromStoresArray.length];
  const callback1 = React.useCallback(first(tmp13), items4);
  const items6 = [first2, first, callback];
  const callback2 = React.useCallback(() => {
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
  callback3 = React.useCallback((item) => {
    item = item.item;
    return outer1_12(outer1_21, { guild: item, loading: first2, selected: first.has(item.id), handlePress: callback }, item.id);
  }, items6);
  obj = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl = stateFromStoresArray(stateFromStores[24]).intl;
  obj.children = intl.string(stateFromStoresArray(stateFromStores[24]).t["19ldCF"]);
  const items7 = [callback2(stateFromStoresArray(stateFromStores[21]).Text, obj), , , , , ];
  obj1 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle };
  const intl2 = stateFromStoresArray(stateFromStores[24]).intl;
  obj1.children = intl2.string(stateFromStoresArray(stateFromStores[24]).t.u0KPUS);
  items7[1] = callback2(stateFromStoresArray(stateFromStores[21]).Text, obj1);
  items7[2] = callback2(SelectedServersRow, { selectedGuilds: tmp7[0] });
  obj2 = { style: tmp.separator };
  items7[3] = callback2(first1, obj2);
  const set = new Set();
  const tmp17 = closure_13;
  const tmp18 = closure_14;
  items7[4] = callback2(first1, { style: tmp.guildsScrollContainer, children: callback2(stateFromStoresArray(stateFromStores[31]).MasonryFlashList, obj4) });
  let tmp19 = first.size >= 1;
  if (tmp19) {
    const obj6 = {};
    const obj7 = { marginBottom: bottom };
    const items8 = [obj7, tmp.footer];
    obj6.style = items8;
    const obj8 = { loading: first2, size: "lg" };
    const intl3 = stateFromStoresArray(stateFromStores[24]).intl;
    obj8.text = intl3.string(stateFromStoresArray(stateFromStores[24]).t.K50GHd);
    obj8.onPress = callback1;
    obj6.children = callback2(stateFromStoresArray(stateFromStores[22]).Button, obj8);
    tmp19 = callback2(first1, obj6);
  }
  items7[5] = tmp19;
  obj.children = items7;
  return tmp17(tmp18, obj);
};
