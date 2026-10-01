// Module ID: 16123
// Function ID: 16124
// Name: ICYMIJoinGuildsScreen
// Dependencies: [5, 32, 19, 17, 4825, 2067, 16122, 1074, 21, 16091, 576, 5896, 8587, 4566, 4837, 6476, 504, 1397, 8276, 5899, 5435, 4832, 5281, 4792, 1115, 1613, 7807, 7799, 4528, 5039, 16106, 8179, 2]
// Exports: default

// Module 16123 (ICYMIJoinGuildsScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import timing from "timing" /* 4837 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 7807 */;
import ClipViewDefault from "ClipView" /* 8276 */;
import ServerIcon2 from "ServerIcon" /* 8587 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16106 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildStore from "GuildStore" /* 2067 */;
import ICYMIPopularGuildsStore from "ICYMIPopularGuildsStore" /* 16122 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let dependencyMap, item, set;

let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
function SelectedServerIcon(guild) {
  let tmp3Result;
  guild = guild.guild;
  const index = guild.index;
  const tmp = closure_16();
  const items = [tmp.selectedServerIcon, , ];
  let noServerContainer = null == guild;
  const tmp4 = metroRequire;
  if (noServerContainer) {
    noServerContainer = tmp.noServerContainer;
  }
  items[1] = noServerContainer;
  const obj = { style: items, children: tmp3Result };
  const tmp5 = null == guild && index >= 3 && tmp.noServerExtraContainer;
  items[2] = tmp5;
  if (null != guild) {
    const obj2 = { style: tmp.guildIconBorder, guild, size: GuildIcon.GuildIconSizes.LARGE };
    const tmp12 = GuildIconDefault;
    tmp3Result = tmp3(tmp12, obj2);
  } else {
    tmp3Result = null;
    if (index < 3) {
      const obj3 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
      const ServerIcon = ServerIcon2.ServerIcon;
      tmp3Result = tmp3(ServerIcon, obj3);
    }
  }
  return closure_12(tmp4, obj);
}
function SelectedServersRow(selectedGuilds) {
  let closure_2;
  let first;
  let items2;
  let items3;
  let obj4;
  let tmp12;
  selectedGuilds = selectedGuilds.selectedGuilds;
  first = undefined;
  dependencyMap = undefined;
  const items = [selectedGuilds];
  let tmp = closure_16();
  const callback = react.useCallback((arg0, index) => {
    let tmp3;
    const tmp = closure_12;
    const tmp2 = SelectedServerIcon;
    if (index < selectedGuilds.length) {
      tmp3 = selectedGuilds[index];
    }
    const obj = { guild: tmp3, index };
    return tmp(tmp2, obj);
  }, items);
  [first, dependencyMap] = react.useState(selectedGuilds.length);
  const ref = react.useRef(null);
  const items1 = [first, selectedGuilds.length];
  const effect = react.useEffect(() => {
    if (first < selectedGuilds.length) {
      const current = ref.current;
      if (current != null) {
        const obj = { animated: true, section: 0, item: selectedGuilds.length };
        current.scrollToLocation(obj);
      }
      closure_2(selectedGuilds.length);
    } else if (tmp !== selectedGuilds.length) {
      closure_2(selectedGuilds.length);
    }
  }, items1);
  let obj = selectedGuilds(4566);
  const fn = function _() {
    let num2;
    let num3;
    let withTiming2;
    let withTiming3;
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (selectedGuilds.length > 0) {
      num = 1;
    }
    const obj = { opacity: withTiming(num), height: withTiming2(num2), marginTop: withTiming3(num3) };
    num2 = 0;
    withTiming2 = timing.withTiming;
    timing;
    if (selectedGuilds.length > 0) {
      num2 = c15;
    }
    num3 = 0;
    withTiming3 = timing.withTiming;
    timing;
    if (selectedGuilds.length > 0) {
      num3 = nativeDefault.space.PX_24;
    }
    return obj;
  };
  fn.__closure = { withTiming: selectedGuilds(4837).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(576) };
  fn.__workletHash = 2911488630455;
  fn.__initData = __initData;
  ({ withTiming: selectedGuilds(4837).withTiming, selectedGuilds, SELECTED_SERVER_SIZE_WITH_BORDER: v50, tokens: first(576) });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items2, children: closure_12(tmp12, obj4) };
  items2 = [tmp.selectedServersRowContainer, animatedStyle];
  const View = first(4566).View;
  let num = 3;
  obj4 = { ref, sections: items3, insetStart: first(576).space.PX_24, insetEnd: first(576).space.PX_12, renderItem: callback, estimatedListSize: "windowSize", itemSize: v50 + first(576).space.PX_12, horizontal: true, listId: "selected-servers-list", showsHorizontalScrollIndicator: false };
  tmp12 = first(6476);
  if (selectedGuilds.length >= 3) {
    let num2 = 1;
    num = selectedGuilds.length + 1;
  }
  items3 = [num];
  return closure_12(View, obj3);
}
function CutoutGuildBanner(guild) {
  let animatableSourceWithFallback;
  let items1;
  let items2;
  let items3;
  let items4;
  let tmp11Result;
  let useReducedMotion;
  guild = guild.guild;
  const tmp = closure_16();
  let obj = guild(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let hasItem = !stateFromStores;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
  }
  if (null != guild.banner) {
    let obj2 = AvatarUtilsDefault;
    animatableSourceWithFallback = obj2.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = AvatarUtilsDefault;
      const obj2 = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj2, hasItem);
    });
  }
  const obj3 = { style: tmp.bannerImage, children: items3 };
  const obj4 = { cutouts: items1, children: tmp11Result };
  size = { shape: guild(8276).CutoutShape.RoundedRect, x: 8, y: 46, width: 56, height: 56, cornerRadius: 20 };
  items1 = [size];
  const tmp13 = ClipViewDefault;
  const tmp9 = closure_13;
  if (null != guild.banner) {
    const obj5 = { style: tmp.bannerImage, source: animatableSourceWithFallback, resizeMode: "cover" };
    tmp11Result = tmp11(tmp12(5899), obj5);
  } else {
    const obj6 = { style: items2 };
    items2 = [, ];
    ({ bannerImage: arr3[0], emptyBanner: arr3[1] } = tmp);
    tmp11Result = tmp11(tmp10, obj6);
  }
  items3 = [closure_12(tmp13, obj4), ];
  const obj7 = { style: items4, guild, size: guild(5896).GuildIconSizes.LARGE, animate: !stateFromStores };
  items4 = [, ];
  ({ guildIcon: arr5[0], guildIconBorder: arr5[1] } = tmp);
  const tmp12Result = GuildIconDefault;
  items3[1] = closure_12(tmp12Result, obj7);
  return tmp9(closure_6, obj3);
}
function FeaturedServer(guild) {
  let handlePress;
  let selected;
  let stringResult1;
  let tmp7Result;
  guild = guild.guild;
  ({ selected, handlePress } = guild);
  const loading = guild.loading;
  const tmp = closure_16();
  const items = [GuildStore];
  const obj = guild(504);
  const stateFromStores = obj.useStateFromStores(items, () => null != GuildStore.getGuild(guild.id));
  const items1 = [guild, handlePress];
  const callback = react.useCallback(() => {
    handlePress(guild);
  }, items1);
  const obj2 = { underlayColor: tmp.pressableUnderlayColor.backgroundColor, unstable_pressDelay: 50, style: tmp.featuredServerContainer, onPress: callback, children: null };
  const PressableHighlight = guild(5435).PressableHighlight;
  const items2 = [closure_12(CutoutGuildBanner, { guild }), ];
  const obj3 = { style: tmp.featuredServerInnerContainer, children: null };
  const items3 = [, , ];
  const obj4 = { maxFontSizeMultiplier: 1, style: tmp.featuredServerTitle, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: guild.name };
  items3[0] = closure_12(guild(4832).Text, obj4);
  const obj5 = { maxFontSizeMultiplier: 1, lineClamp: 2, variant: "text-xs/normal", color: "text-default", children: guild.description };
  items3[1] = closure_12(guild(4832).Text, obj5);
  const obj6 = { style: tmp.buttonContainer, children: null };
  const obj7 = { accessibilityHint: "checkbox", accessibilityState: { checked: selected }, disabled: stateFromStores, icon: tmp7Result, text: null, size: "sm", onPress: null, variant: null, grow: true };
  tmp7Result = undefined;
  const Button = guild(5281).Button;
  if (selected) {
    const obj8 = { size: "sm", color: handlePress(576).colors.CONTROL_CONNECTED_TEXT_DEFAULT };
    const CircleCheckIcon = tmp2(4792).CircleCheckIcon;
    tmp7Result = tmp7(CircleCheckIcon, obj8);
  }
  if (stateFromStores) {
    let stringResult;
    let str;
    if (!loading) {
      const intl = tmp2(1115).intl;
      stringResult = intl.string(tmp2(1115).t.cEnaWx);
    }
    obj7.text = stringResult;
    obj7.onPress = callback;
    if (stateFromStores) {
      str = "secondary";
    } else {
      str = "active";
    }
    obj7.variant = str;
    obj6.children = closure_12(Button, obj7);
    items3[2] = closure_12(closure_6, obj6);
    obj3.children = items3;
    items2[1] = closure_13(closure_6, obj3);
    obj2.children = items2;
    return closure_13(PressableHighlight, obj2);
  }
  const intl2 = tmp2(1115).intl;
  const string = intl2.string;
  const t = tmp2(1115).t;
  if (selected) {
    stringResult1 = string(t["TwueC+"]);
  } else {
    stringResult1 = string(t.XqMe3N);
  }
  stringResult = stringResult1;
}
({ View: metroRequire, StyleSheet: metroImportDefault } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let c15 = 50;
let closure_16 = createICYMIStyles.createICYMIStyles((margin) => {
  let rect;
  let size1;
  let size2;
  const obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin }, scrollContentContainer: { paddingTop: nativeDefault.space.PX_8 }, footer: rect, title: { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 }, subtitle: { marginHorizontal: nativeDefault.space.PX_24 }, separator: size, featuredServerContainer: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 }, featuredServerInnerContainer: { marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 }, buttonContainer: { marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin }, featuredServerTitle: { marginBottom: nativeDefault.space.PX_8 }, guildIcon: { position: "absolute", top: 50, left: 12 }, bannerImage: { height: 73, width: "100%" }, emptyBanner: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, guildsScrollContainer: { flex: 1, marginHorizontal: nativeDefault.space.PX_8 }, guildsColumn: { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 }, selectedServersRowContainer: size1, selectedServerIcon: size2, noServerContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" }, noServerExtraContainer: { opacity: 0.4 }, pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE }, guildIconBorder: { borderRadius: nativeDefault.radii.md } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, position: "relative", flex: 1, marginHorizontal: margin.margin });
  ({ paddingTop: nativeDefault.space.PX_8 });
  rect = { position: "absolute", bottom: 0, left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_8 };
  ({ marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 });
  ({ marginHorizontal: nativeDefault.space.PX_24 });
  size = { height: metroImportDefault.hairlineWidth, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  ({ borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, overflow: "hidden", marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_8 });
  ({ marginHorizontal: nativeDefault.space.PX_12, marginTop: 36 });
  ({ marginBottom: nativeDefault.space.PX_12, marginTop: margin.margin });
  ({ marginBottom: nativeDefault.space.PX_8 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
  ({ flex: 1, marginHorizontal: nativeDefault.space.PX_8 });
  ({ flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_16 });
  size1 = { height: v50, width: "100%", marginBottom: nativeDefault.space.PX_24 };
  size2 = { flex: 1, width: v50, height: v50, alignItems: "center", justifyContent: "center", borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "dashed" });
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE });
  ({ borderRadius: nativeDefault.radii.md });
  return obj;
});
const __initData = { code: "function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.space.PX_24:0)};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx");

export default function ICYMIJoinGuildsScreen() {
  let Button;
  let closure_10;
  let closure_4;
  let closure_5;
  let closure_7;
  let extraData;
  let first1;
  let first2;
  let first3;
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj12;
  let obj8;
  let obj9;
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  const tmp = closure_16();
  const tmp2 = stateFromStores;
  const bottom = stateFromStoresArray1(stateFromStores[25])().bottom;
  const tmp3 = stateFromStoresArray;
  let obj = stateFromStoresArray(stateFromStores[16]);
  let items = [closure_10];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => closure_10.getOnboardingGuilds());
  let obj2 = stateFromStoresArray(stateFromStores[16]);
  const items1 = [closure_10];
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items1, () => closure_10.getOnboardingCategoryIds());
  let obj3 = stateFromStoresArray(stateFromStores[16]);
  const items2 = [closure_10];
  stateFromStores = obj3.useStateFromStores(items2, () => closure_10.getCurrentOnboardingGuildOffset());
  const useState = react.useState;
  set = new Set();
  [extraData, _slicedToArray] = useState(set);
  [first1, react] = react.useState([]);
  [first2, closure_7] = react.useState(0);
  const items3 = [extraData];
  const handlePress = react.useCallback((guildId) => {
    let closure_0 = guildId;
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    const obj = { guildId: guildId.id, toggled: !first.has(guildId.id) };
    const result = ICYMIAnalytics.trackFeedOnboardingGuildToggled(obj);
    if (first.has(guildId.id)) {
      closure_4((items) => {
        items.delete(user.id);
        set = new Set(items);
        return set;
      });
      closure_5((arr) => {
        let id;
        return arr.filter((id) => id.id !== id.id);
      });
    } else {
      closure_4((add) => {
        add.add(user.id);
        set = new Set(add);
        return set;
      });
      closure_5((arg0) => {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arg0, 0)] = user;
        return items;
      });
    }
  }, items3);
  [first3, closure_10] = react.useState(false);
  const items4 = [extraData];
  const items5 = [stateFromStoresArray1, stateFromStores, first2, stateFromStoresArray.length];
  const callback1 = react.useCallback(extraData(function*(arg0, value) {
    let c2;
    let closure_0;
    let intl;
    let v3;
    if (stateFromStores === 2) {
      stateFromStores = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        stateFromStores = 2;
        if (0 === stateFromStoresArray1) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            stateFromStoresArray = tmp3;
            closure_10(true);
            const _Array = Array;
            const obj14 = stateFromStoresArray1(stateFromStores[27]);
            stateFromStoresArray1 = 1;
            stateFromStores = 1;
            const obj5 = { value: obj14.gravityJoinGuild(Array.from(first), "icymi_info_modal"), done: false };
            return obj5;
          }
        } else if (1 === stateFromStoresArray1) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else if (value) {
            const tmp50Result = stateFromStoresArray1(stateFromStores[27]);
            stateFromStoresArray1 = 2;
            stateFromStores = 1;
            const obj11 = { value: tmp50Result.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
            return obj11;
          } else {
            const obj12 = { key: "ICYMIInfoModal", content: intl.string(stateFromStoresArray(stateFromStores[24]).t.CG4Hks) };
            const open = stateFromStoresArray1(stateFromStores[28]).open;
            const tmp50Result2 = stateFromStoresArray1(stateFromStores[28]);
            intl = stateFromStoresArray(stateFromStores[24]).intl;
            open(obj12);
            const obj6 = stateFromStoresArray1(stateFromStores[27]);
            const dehydrated = obj6.fetchDehydrated();
            const obj7 = stateFromStoresArray1(stateFromStores[27]);
            const guildChannelScores = obj7.getGuildChannelScores();
            const obj8 = stateFromStoresArray1(stateFromStores[27]);
            const recommendedGuilds = obj8.getRecommendedGuilds();
            const obj9 = stateFromStoresArray1(stateFromStores[29]);
            obj9.popWithKey(stateFromStoresArray(stateFromStores[30]).ICYMI_INFO_MODAL_KEY);
            stateFromStores = 3;
            const obj13 = { value: undefined, done: true };
            return obj13;
          }
        } else if (2 === stateFromStoresArray1) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            const obj2 = stateFromStoresArray1(stateFromStores[27]);
            stateFromStoresArray1 = 3;
            stateFromStores = 1;
            const obj16 = { value: obj2.reloadICYMITab(), done: false };
            return obj16;
          }
        } else if (arg0 === 1) {
          stateFromStores = 3;
          throw value;
        } else if (arg0 === 2) {
          stateFromStores = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          const obj18 = stateFromStoresArray1(stateFromStores[27]);
          const guildChannelScores1 = obj18.getGuildChannelScores();
          const obj19 = stateFromStoresArray1(stateFromStores[27]);
          const recommendedGuilds1 = obj19.getRecommendedGuilds();
          const obj20 = stateFromStoresArray1(stateFromStores[29]);
          obj20.popWithKey(stateFromStoresArray(stateFromStores[30]).ICYMI_INFO_MODAL_KEY);
          stateFromStores = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp33) {
        stateFromStores = 3;
        throw tmp33;
      }
    }
  }), items4);
  const items6 = [first3, extraData, handlePress];
  const callback2 = react.useCallback(() => {
    if (first2 <= stateFromStores) {
      if (stateFromStoresArray.length < 150) {
        const sum = tmp + ICYMIInfoModalTypes.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
        closure_7(sum);
        const obj = ICYMIActionCreatorsDefault;
        const popularGuildsFromCategories = obj.fetchPopularGuildsFromCategories(stateFromStoresArray1, sum);
      }
    }
  }, items5);
  const callback3 = react.useCallback((item) => {
    item = item.item;
    const obj = { guild: item, loading: first3, selected: first.has(item.id), handlePress };
    return closure_12(FeaturedServer, obj, item.id);
  }, items6);
  let obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(stateFromStoresArray(stateFromStores[24]).t["19ldCF"]) };
  const Text = stateFromStoresArray(stateFromStores[21]).Text;
  intl = stateFromStoresArray(stateFromStores[24]).intl;
  const children = [closure_12(Text, obj4), , , , , ];
  let obj5 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle, children: intl2.string(stateFromStoresArray(stateFromStores[24]).t.u0KPUS) };
  const Text2 = stateFromStoresArray(stateFromStores[21]).Text;
  intl2 = stateFromStoresArray(stateFromStores[24]).intl;
  children[1] = closure_12(Text2, obj5);
  children[2] = closure_12(SelectedServersRow, { selectedGuilds: first1 });
  let obj6 = { style: tmp.separator };
  children[3] = closure_12(first2, obj6);
  let obj7 = { style: tmp.guildsScrollContainer, children: closure_12(stateFromStoresArray(stateFromStores[31]).MasonryFlashList, obj8) };
  obj8 = { data: stateFromStoresArray, extraData, contentContainerStyle: tmp.scrollContentContainer, contentInset: obj9, numColumns: 2, onEndReached: callback2, onEndReachedThreshold: 0.5, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, renderItem: callback3 };
  obj9 = { bottom: 72 + bottom };
  children[4] = closure_12(first2, obj7);
  let tmp21Result = extraData.size >= 1;
  const tmp19 = closure_13;
  const tmp20 = closure_14;
  const tmp22 = first2;
  if (tmp21Result) {
    let obj10 = { style: items8, children: closure_12(Button, obj12) };
    let obj11 = { marginBottom: bottom };
    items8 = [obj11, tmp.footer];
    obj12 = { loading: first3, size: "lg", text: intl3.string(tmp3(tmp2[24]).t.K50GHd), onPress: callback1 };
    Button = tmp3(tmp2[22]).Button;
    intl3 = tmp3(tmp2[24]).intl;
    tmp21Result = tmp21(tmp22, obj10);
  }
  children[5] = tmp21Result;
  return tmp19(tmp20, { children });
};
