// Module ID: 18684
// Function ID: 18685
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 5142, 2143, 18685, 21, 5141, 575, 5794, 1652, 1113, 2537, 5378, 5381, 18686, 18689, 5732, 1627, 18690, 9531, 504, 7247, 9286, 9761, 9289, 8822, 15175, 5150, 5384, 5846, 7620, 7428, 5761, 9961, 7355, 18691, 5768, 18692, 8168, 13673, 2]
// Exports: default

// Module 18684 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import intl13 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import _modDef2537 from "module_2537" /* 2537 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import timing_timing from "timing/timing" /* 5378 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import useGame2 from "useGame" /* 7620 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8822 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 18689 */;
import InterestGhostDefault from "InterestGhost" /* 18691 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import GameStore from "GameStore" /* 2143 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18685 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let map, results, set;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
let unpackModuleId;
const timingPresets = tmp2(5381);
function StaticInterestGameTile(game) {
  let formatToPlainStringResult;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj5;
  let selected;
  let styles;
  let tmp4;
  let tmp5;
  let tmp6;
  let unavailable;
  let width;
  game = game.game;
  ({ width, selected, unavailable, styles, onPress: importDefault } = game);
  let sharedValue;
  const radius = game.radius;
  let obj = game(sharedValue[10]);
  sharedValue = obj.useSharedValue(0);
  const items = [closure_26, selected, sharedValue];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  const obj2 = game(sharedValue[10]);
  const tmp = game;
  class InterestGamePickerTsx1 {
    constructor() {
      let opacity = 0;
      if (!c0) {
        const _Math = Math;
        const _Math2 = Math;
        opacity = 1 - Math.min(1, Math.max(0, _undefined.get()) / 0.2);
      }
      return { opacity };
    }
  }
  const items1 = [tmp5, tmp6];
  InterestGamePickerTsx1.__closure = items1;
  InterestGamePickerTsx1.__workletHash = 14342270959027;
  InterestGamePickerTsx1.__initData = tmp4;
  const obj3 = {
    accessibilityLabel: game.name,
    accessibilityRole: "button",
    accessibilityState: { disabled: unavailable, selected },
    accessibilityHint: formatToPlainStringResult,
    onPress() {
      return importDefault(game.id);
    },
    onPressIn() {
      set = sharedValue.set;
      const obj = timing_timing;
      return set(obj.withTiming(1, timingPresets.timingFast));
    },
    onPressOut() {
      set = sharedValue.set;
      const obj = timing_timing;
      return set(obj.withTiming(0, timingPresets.timingFast));
    },
    style: items2,
    children: closure_23(closure_8, obj5)
  };
  formatToPlainStringResult = undefined;
  const animatedStyle = obj2.useAnimatedStyle(InterestGamePickerTsx1);
  const tmp9 = closure_6;
  if (unavailable) {
    const intl = tmp(tmp2[11]).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(require("module_2537").v9v0uY, obj4);
  }
  items2 = [styles.tileWrapper, selected && styles.selectedGlow, ];
  size = { width, height: width / closure_19 };
  items2[2] = size;
  obj5 = { style: styles.screen, children: items4 };
  const obj6 = { style: styles.tile, children: items3 };
  items3 = [closure_22(require("InterestGameCover"), { game, width }), closure_22(require("InterestTileEdge"), { radius, style: animatedStyle })];
  items4 = [closure_23(closure_8, obj6), ];
  if (selected) {
    const obj7 = { children: items5 };
    const obj8 = { pointerEvents: "none", style: styles.selected };
    items5 = [closure_22(closure_8, obj8), ];
    const obj9 = { pointerEvents: "none", style: styles.selectedInner };
    items5[1] = closure_22(closure_8, obj9);
    selected = tmp13(closure_24, obj7);
  }
  items4[1] = selected;
  return closure_22(tmp9, obj3);
}
({ Keyboard: hasOwnProperty, Pressable: metroRequire, ScrollView: metroImportDefault, View: metroImportAll } = react_native);
({ FOOTER_BORDER_WIDTH: unpackModuleId, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, SELECTED_BORDER_WIDTH: closure_17, SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let closure_25 = createStyles.createStyles((borderRadius) => {
  let obj15;
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, skip: { color: nativeDefault.colors.TEXT_BRAND }, content: { flexGrow: 1 }, empty: { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 }, intro: { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 }, subtitle: { textAlign: "center" }, search: { flexShrink: 0, paddingHorizontal, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, navTitle: { flex: 1, alignSelf: "stretch", justifyContent: "center" }, searchTitle: { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" }, navActions: { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" }, grid: { flexDirection: "row", flexWrap: "wrap", gap: map1, paddingHorizontal, paddingTop: nativeDefault.space.PX_8 }, tileWrapper: { borderRadius }, selectedGlow: { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 }, tile: { flex: 1, aspectRatio, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, selected: { position: "absolute", inset: -borderWidth - borderWidth2, borderWidth, borderRadius: borderRadius + borderWidth + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BRAND }, selectedInner: { position: "absolute", inset: -borderWidth2, borderWidth: borderWidth2, borderRadius: borderRadius + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, status: { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 }, footerPosition: { position: "absolute", bottom: 0, left: 0, right: 0 }, footer: obj15, footerContent: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 }, footerActions: { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  ({ flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 });
  ({ flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 });
  ({ flexShrink: 0, paddingHorizontal, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" });
  ({ flexDirection: "row", flexWrap: "wrap", gap: map1, paddingHorizontal, paddingTop: nativeDefault.space.PX_8 });
  ({ shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 });
  ({ flex: 1, aspectRatio, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ position: "absolute", inset: -borderWidth - borderWidth2, borderWidth, borderRadius: borderRadius + borderWidth + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  ({ position: "absolute", inset: -borderWidth2, borderWidth: borderWidth2, borderRadius: borderRadius + borderWidth2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 });
  obj15 = { borderTopWidth: unpackModuleId, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 });
  return obj;
});
let closure_26 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_28 = { code: "(function InterestGamePickerTsx2(){let[searchProgress]=this.__closure;return{opacity:1-searchProgress.get()};})" };
let closure_29 = { code: "(function InterestGamePickerTsx3(){let[searchProgress]=this.__closure;return{opacity:searchProgress.get()};})" };
let closure_30 = { code: "(function InterestGamePickerTsx4(){let[nextScale]=this.__closure;return{transform:[{scale:nextScale.get()}]};})" };
let closure_31 = { code: "(function InterestGamePickerTsx5(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  let ArrowLargeRightIcon;
  let HeaderTextButton;
  let IconButton;
  let SearchBar;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let arr;
  let c13;
  let c6;
  let error;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items30;
  let items31;
  let items32;
  let items33;
  let items34;
  let items35;
  let items36;
  let items37;
  let items38;
  let items39;
  let items40;
  let items41;
  let items42;
  let items43;
  let items44;
  let items45;
  let items46;
  let minSelection;
  let obj12;
  let obj21;
  let obj34;
  let obj36;
  let obj40;
  let obj42;
  let obj43;
  let onLayout;
  let onSelect;
  let ref;
  let ref1;
  let str;
  let str3;
  let str4;
  let sum;
  let title;
  let tmp12;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp30;
  let tmp31;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp68;
  let tmp69;
  let tmp8;
  let tmp83;
  const f115440 = (item, index) => item !== first2[index];
  const f115454 = (game) => {
    const hasItem = first.includes(game.id);
    const obj = { game, width: rounded, selected: hasItem, unavailable: !hasItem && memo6.length >= authStore3, styles, radius: token, onPress };
    return authStore6(StaticInterestGameTile, obj, game.id);
  };
  catalog = catalog.catalog;
  ({ title, minSelection } = catalog);
  const subtitle = catalog.subtitle;
  if (minSelection === undefined) {
    minSelection = ref1;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  let initialSelection = catalog.initialSelection;
  if (initialSelection === undefined) {
    initialSelection = [];
  }
  c6 = undefined;
  c13 = undefined;
  let scrollY;
  ref1 = undefined;
  ref = undefined;
  let sharedValue1;
  let stateFromStores;
  let ref2;
  let rounded;
  let ref3;
  let bound;
  results = undefined;
  onSelect = undefined;
  let closure_27;
  closure_28 = undefined;
  let memo;
  let memo2;
  let memo5;
  let memo6;
  let length;
  let closure_34;
  let first2;
  let closure_36;
  let sharedValue2;
  let ref4;
  let callback;
  let onPress;
  let tmp = catalog;
  let tmp2 = onSkip;
  let obj = catalog(onSkip[17]);
  const tmp3 = onContinue;
  const token = obj.useToken(onContinue(onSkip[8]).modules.mobile.INPUT_FIELD_RADIUS_LG);
  const tmp5 = onSelect(token);
  const styles = tmp5;
  const bottom = onContinue(onSkip[18])().bottom;
  let obj2 = token;
  [tmp8, c6] = initialSelection(token.useState(0), 2);
  const tmp7 = initialSelection(token.useState(0), 2);
  const tmp9 = initialSelection(token.useState(() => {
    set = new Set(initialSelection);
    const fromResult = from(set);
    return fromResult.slice(0, authStore3);
  }), 2);
  const first = tmp9[0];
  let closure_8 = tmp9[1];
  [str, tmp12] = initialSelection(token.useState(""), 2);
  let c9 = tmp12;
  const tmp11 = initialSelection(token.useState(""), 2);
  const tmp13 = initialSelection(token.useState(false), 2);
  const first1 = tmp13[0];
  let closure_11 = tmp13[1];
  let obj3 = catalog(onSkip[10]);
  const sharedValue = obj3.useSharedValue(0);
  let items = [first1, sharedValue];
  const effect = token.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (first1) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingFast));
  }, items);
  let obj4 = catalog(onSkip[10]);
  let items1 = [closure_28, sharedValue];
  let c0;
  [tmp17, tmp18] = items1;
  class InterestGamePickerTsx2 {
    constructor() {
      const obj = { opacity: 1 - _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp18];
  InterestGamePickerTsx2.__closure = items2;
  InterestGamePickerTsx2.__workletHash = 19591722165;
  InterestGamePickerTsx2.__initData = tmp17;
  const animatedStyle = obj4.useAnimatedStyle(InterestGamePickerTsx2);
  const items3 = [memo, sharedValue];
  c0 = undefined;
  [tmp20, tmp21] = items3;
  const tmpResult = tmp(tmp2[10]);
  class InterestGamePickerTsx3 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp21];
  InterestGamePickerTsx3.__closure = items4;
  InterestGamePickerTsx3.__workletHash = 1075419286504;
  InterestGamePickerTsx3.__initData = tmp20;
  const animatedStyle1 = tmpResult.useAnimatedStyle(InterestGamePickerTsx3);
  [tmp24, c13] = initialSelection(obj2.useState(0), 2);
  initialSelection(obj2.useState(0), 2);
  const tmpResult10 = tmp(tmp2[19]);
  const interestScrollHeader = tmpResult10.useInterestScrollHeader();
  scrollY = interestScrollHeader.scrollY;
  const onScroll = interestScrollHeader.onScroll;
  ref1 = obj2.useRef(null);
  ref2 = obj2.useRef(null);
  const tmp28 = tmp3(tmp2[20])();
  const width = tmp28.width;
  let num = 0;
  ({ ref, onLayout } = tmp28);
  if (undefined !== width) {
    num = width;
  }
  ref = obj2.useRef(null);
  let num2 = 1;
  const tmpResult11 = tmp(tmp2[10]);
  sharedValue1 = tmpResult11.useSharedValue(1);
  const items5 = [memo2, sharedValue1];
  c0 = undefined;
  [tmp30, tmp31] = items5;
  const tmpResult12 = tmp(tmp2[10]);
  class InterestGamePickerTsx4 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ scale: _undefined.get() }];
      ({ scale: _undefined.get() });
      return obj;
    }
  }
  const items6 = [tmp31];
  InterestGamePickerTsx4.__closure = items6;
  InterestGamePickerTsx4.__workletHash = 10706204519288;
  InterestGamePickerTsx4.__initData = tmp30;
  const animatedStyle2 = tmpResult12.useAnimatedStyle(InterestGamePickerTsx4);
  const items7 = [c9];
  const tmpResult13 = tmp(tmp2[21]);
  stateFromStores = tmpResult13.useStateFromStores(items7, () => _undefined2.useReducedMotion);
  const tmp34 = tmp3(tmp2[22])();
  ref2 = obj2.useRef(false);
  rounded = Math.floor((num - 2 * ref2 - c13 * (sharedValue - num2)) / sharedValue);
  ref3 = obj2.useRef(false);
  const tmp35 = sharedValue;
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, ref1), scrollY);
  } else {
    bound = ref1;
  }
  const tmpResult14 = tmp(tmp2[23]);
  const obj5 = { surface: tmp(tmp2[24]).GameSearchSurface.INTEREST_PICKER, filterGroup: tmp(tmp2[25]).GameSearchFilterGroup.DEFAULT };
  const debouncedGameAutocomplete = tmpResult14.useDebouncedGameAutocomplete(str, obj5);
  results = debouncedGameAutocomplete.results;
  ({ error, onSelect } = debouncedGameAutocomplete);
  const items8 = [results];
  const isLoading = debouncedGameAutocomplete.isLoading;
  memo = obj2.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items8);
  const tmp42 = str.trim().length > 0;
  const items9 = [memo, catalog, first];
  const memo1 = obj2.useMemo(() => {
    const items = [...first];
    set = new Set(items);
    return from(set);
  }, items9);
  const tmp44 = tmp3(tmp2[27])(memo1);
  closure_27 = tmp44;
  closure_28 = tmp45;
  let tmp46 = catalog;
  if (tmp42 && null == error) {
    tmp46 = memo;
  }
  memo = tmp46;
  const items10 = [first1];
  const items11 = [tmp46];
  const tmpResult15 = tmp(tmp2[21]);
  const stateFromStores1 = tmpResult15.useStateFromStores(items10, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items11);
  const items12 = [first1];
  const items13 = [catalog];
  const tmpResult16 = tmp(tmp2[21]);
  let stateFromStores2 = tmpResult16.useStateFromStores(items12, () => catalog.some((item) => first1.didFetchingFail(item)), items13);
  const items14 = [tmp44];
  memo2 = obj2.useMemo(() => {
    map = new Map(closure_27.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items14);
  const items15 = [catalog, memo2];
  const items16 = [memo, memo2];
  const memo3 = obj2.useMemo(() => {
    let closure_0 = memo2;
    return catalog.flatMap((item) => {
      const value = closure_0.get(item);
      if (null != value) {
        let items;
        const obj = memo2(onSkip[9]);
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items15);
  let memo4 = memo3;
  if (tmp42 && null == error) {
    memo4 = obj2.useMemo(() => {
      let closure_0 = memo2;
      return memo.flatMap((item) => {
        const value = closure_0.get(item);
        if (null != value) {
          let items;
          const obj = memo2(onSkip[9]);
          if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
            items = [value];
          }
          return items;
        }
        items = [];
      });
    }, items16);
  }
  let tmp80Result3 = tmp42 && !tmp51 && null == error && 0 === memo4.length;
  let tmp80Result4 = !tmp42 && !tmp51 && 0 === memo4.length;
  const items17 = [memo2, first];
  memo5 = obj2.useMemo(() => first.flatMap((item) => {
    const value = closure_0.get(item);
    if (null != value) {
      let items;
      const obj = memo2(onSkip[9]);
      if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
        items = [value];
      }
      return items;
    }
    items = [];
  }), items17);
  const items18 = [memo5];
  memo6 = obj2.useMemo(() => memo5.map((id) => id.id), items18);
  length = memo6.length;
  closure_34 = tmp56;
  const tmp54 = memo6.length >= bound;
  const tmp6Result2 = initialSelection(obj2.useState(memo5), 2);
  first2 = tmp6Result2[0];
  let tmp59 = memo5.length > 0;
  const tmp55 = scrollY;
  const tmp58 = tmp6Result2[1];
  if (tmp59) {
    tmp59 = memo5.length !== first2.length || memo5.some(f115440);
    memo5.length !== first2.length || memo5.some(f115440);
  }
  if (tmp59) {
    tmp58(memo5);
  }
  closure_36 = tmp62;
  const tmpResult17 = tmp(tmp2[10]);
  sharedValue2 = tmpResult17.useSharedValue(0);
  const items19 = [memo5, stateFromStores, sharedValue2, tmp8, ];
  const useAnimatedStyle = tmp(tmp2[10]).useAnimatedStyle;
  tmp(tmp2[10]);
  items19[4] = tmp3(tmp2[8]);
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  [tmp65, tmp66, tmp67, tmp68, tmp69] = items19;
  class InterestGamePickerTsx5 {
    constructor() {
      let items;
      let num = 1;
      if (c0) {
        num = _undefined.get();
      }
      let num2 = 0;
      const obj = { opacity: num, transform: items };
      if (!c0) {
        let PX_128 = c2;
        const diff = 1 - _undefined.get();
        if (c2 <= 0) {
          PX_128 = _undefined2.space.PX_128;
        }
        num2 = diff * PX_128;
      }
      items = [{ translateY: num2 }];
      return obj;
    }
  }
  const items20 = [tmp66, tmp67, tmp68, tmp69];
  InterestGamePickerTsx5.__closure = items20;
  InterestGamePickerTsx5.__workletHash = 7730800331799;
  InterestGamePickerTsx5.__initData = tmp65;
  const items21 = [sharedValue2, length > 0 && !tmp34, stateFromStores];
  const animatedStyle3 = useAnimatedStyle(InterestGamePickerTsx5);
  const effect1 = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue2.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_36) {
      num = 1;
    }
    let num2 = 100;
    if (!stateFromStores) {
      num2 = tmp3 ? closure_20 : closure_21;
    }
    let str = "respect-motion-settings";
    if (stateFromStores) {
      str = "animate-always";
    }
    const result = set(withTiming(num, { duration: num2 }, str));
  }, items21);
  const items22 = [length >= scrollY, sharedValue1, stateFromStores];
  const effect2 = obj2.useEffect(() => {
    const tmp = closure_34 && !ref2.current;
    if (tmp) {
      ref2.current = true;
      const tmp4 = stateFromStores;
      if (!tmp4) {
        set = sharedValue1.set;
        const withSequence = _mod1652.withSequence;
        _mod1652;
        const obj = timing_timing;
        const withTimingResult = obj.withTiming(1.06, { duration: 180 });
        const obj2 = timing_timing;
        const result = set(withSequence(withTimingResult, obj2.withTiming(1, { duration: 180 })));
      }
    }
  }, items22);
  ref4 = obj2.useRef(length);
  const items23 = [length];
  const effect3 = obj2.useEffect(() => {
    if (ref4.current !== length) {
      ref4.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl13.intl;
      const obj = { count: length, max };
      announce(intl.formatToPlainString(_modDef2537.v9v0uY, obj));
    }
  }, items23);
  callback = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_8((arr) => {
      let found;
      const tmp2 = closure_0;
      if (arr.includes(closure_0)) {
        found = arr.filter((item) => item !== closure_1_0);
      } else {
        found = arr;
        if (arr.length < scrollY) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arr, 0)] = tmp2;
          found = items;
        }
      }
      return found;
    });
  }, []);
  const items24 = [length >= scrollY, first, tmp42 && null == error, callback, onSelect];
  onPress = obj2.useCallback((arg0) => {
    hasOwnProperty.dismiss();
    const tmp2 = closure_34;
    if (tmp2) {
      if (!first.includes(arg0)) {
        const _Date = Date;
        const timestamp = Date.now();
        ref.current = timestamp;
        const intl = intl13.intl;
        const obj = { count: max, max };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2537.v9v0uY, obj);
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        const obj3 = ToastActionCreatorsDefault;
        obj3.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    const tmp16 = closure_28;
    if (tmp16) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items24);
  const items25 = [bound, onContinue, memo6];
  const items26 = [onSkip, memo6];
  const callback1 = obj2.useCallback(() => {
    let current = ref3.current;
    const tmp = ref3;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      tmp.current = true;
      onContinue(memo6);
    }
  }, items25);
  const items27 = [ref2, scrollY];
  const callback2 = obj2.useCallback(() => {
    if (!ref3.current) {
      tmp.current = true;
      onSkip(memo6);
    }
  }, items26);
  const items28 = [ref2, scrollY];
  const callback3 = obj2.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_11(false);
    hasOwnProperty.dismiss();
    const current2 = ref2.current;
    if (current2 != null) {
      current2.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items27);
  const items29 = [catalog];
  const callback4 = obj2.useCallback(() => {
    const current = ref1.current;
    const tmp = ref1;
    if (current != null) {
      current.setText("");
    }
    const current2 = tmp.current;
    if (current2 != null) {
      current2.blur();
    }
    _undefined2("");
    closure_11(false);
    const current3 = ref2.current;
    if (current3 != null) {
      current3.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items28);
  const obj6 = { style: tmp5.screen, children: items42 };
  const obj7 = { ref, onLayout, style: tmp5.body, children: items34 };
  const callback5 = obj2.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items29);
  const obj8 = { style: tmp5.header, children: items33 };
  const obj9 = { style: tmp5.navTitle, collapsable: false, children: items31 };
  const SafeAreaPaddingView = tmp(tmp2[32]).SafeAreaPaddingView;
  const obj10 = { style: items30, children: ref3(tmp(tmp2[19]).InterestCompactTitle, { title, scrollY, collapseOffset: tmp24 }) };
  items30 = [tmp5.screen, animatedStyle];
  const View = tmp3(tmp2[10]).View;
  items31 = [ref3(View, obj10), ];
  let str2 = "no-hide-descendants";
  const obj11 = { pointerEvents: "none", accessibilityElementsHidden: !first1, importantForAccessibility: str3, style: items32, children: ref3(Text, obj12) };
  str3 = "no-hide-descendants";
  const View2 = tmp3(tmp2[10]).View;
  if (first1) {
    str3 = "auto";
  }
  items32 = [tmp5.searchTitle, animatedStyle1];
  obj12 = { variant: "body-md/semibold", lineClamp: 1, children: intl.string(tmp3(tmp2[12])["8Xenq+"]) };
  Text = tmp(tmp2[33]).Text;
  intl = tmp(tmp2[11]).intl;
  items31[1] = ref3(View2, obj11);
  items33 = [bound(closure_8, obj9), ];
  const obj14 = { label: null, labelStyle: null, onPress: null };
  const obj13 = { style: tmp5.navActions, children: ref3(HeaderTextButton, tmp83) };
  HeaderTextButton = tmp(tmp2[34]).HeaderTextButton;
  const intl2 = tmp(tmp2[11]).intl;
  const string = intl2.string;
  const t = tmp(tmp2[11]).t;
  if (first1) {
    obj14.label = string(t["ETE/oC"]);
    obj14.labelStyle = tmp5.skip;
    obj14.onPress = callback4;
    tmp83 = obj14;
  } else {
    obj14.label = string(t["5Wxrcd"]);
    obj14.labelStyle = tmp5.skip;
    obj14.onPress = callback2;
    tmp83 = obj14;
  }
  const obj15 = { top: true, children: bound(closure_8, obj8) };
  items33[1] = ref3(closure_8, obj13);
  items34 = [ref3(SafeAreaPaddingView, obj15), ];
  const obj16 = { ref: ref2, stickyHeaderIndices: items35, onScroll, scrollEventThrottle: 16, contentInsetAdjustmentBehavior: "never", style: tmp5.screen, contentContainerStyle: items36, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, children: items38 };
  const tmp84 = first;
  if (first1) {
    num2 = 0;
  }
  items35 = [num2];
  items36 = [tmp5.content, ];
  if (tmp34) {
    let num4 = 0;
    if (!tmp80Result3) {
      num4 = tmp3(tmp2[8]).space.PX_16;
    }
    sum = num4;
  } else {
    sum = bottom;
    if (0 !== length) {
      let num3 = 0;
      if (!tmp80Result3) {
        num3 = tmp3(tmp2[8]).space.PX_32;
      }
      sum = tmp8 + num3;
    }
  }
  items36[1] = { paddingBottom: sum };
  let tmp80Result = !first1;
  if (tmp80Result) {
    const obj17 = {
      style: tmp5.intro,
      collapsable: false,
      onLayout(nativeEvent) {
          return _undefined3(nativeEvent.nativeEvent.layout.height);
        },
      children: items37
    };
    const obj18 = { variant: "heading-xl/semibold", color: "text-strong", children: title };
    items37 = [ref3(tmp(tmp2[33]).Heading, obj18), ];
    const obj19 = { style: tmp5.subtitle, variant: "body-sm/normal", color: "text-default", children: subtitle };
    items37[1] = ref3(tmp(tmp2[33]).Text, obj19);
    tmp80Result = tmp80(tmp81, obj17);
  }
  items38 = [tmp80Result, , ];
  const obj20 = { style: tmp5.search, children: ref3(SearchBar, obj21) };
  obj21 = {
    ref: ref1,
    grow: false,
    accessibilityLabel: intl3.string(tmp3(tmp2[12])["8Xenq+"]),
    onChange: tmp12,
    onFocus() {
      closure_11(true);
      const current = ref2.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: false });
      }
    },
    onSubmitEditing: callback3,
    placeholder: intl4.string(tmp3(tmp2[12])["8Xenq+"])
  };
  SearchBar = tmp(tmp2[35]).SearchBar;
  intl3 = tmp(tmp2[11]).intl;
  intl4 = tmp(tmp2[11]).intl;
  items38[1] = ref3(closure_8, obj20);
  let tmp82Result = tmp51;
  const obj22 = { style: tmp5.content, children: items39 };
  if (tmp82Result) {
    const obj23 = { style: tmp5.grid, accessible: true, accessibilityLabel: intl5.string(tmp(tmp2[11]).t.ZTNur7), accessibilityState: { busy: true }, children: arr };
    intl5 = tmp(tmp2[11]).intl;
    arr = rounded > 0;
    if (arr) {
      const _Array = Array;
      const obj24 = { length: 4 * tmp35 };
      arr = Array.from(obj24, (arg0, arg1) => {
        let items;
        let items1;
        const obj = { style: size, children: items1 };
        size = { width: rounded, height: rounded / closure_19 };
        const obj2 = { style: items };
        items = [, ];
        ({ screen: arr[0], tileWrapper: arr[1] } = styles);
        items1 = [authStore6(InterestGhostDefault, obj2), ];
        const obj3 = { radius: token };
        items1[1] = authStore6(InterestTileEdgeDefault, obj3);
        return sidebars(metroImportAll, obj, arg1);
      });
    }
    tmp82Result = tmp82(tmp81, obj23);
  }
  items39 = [tmp82Result, , , ];
  if (tmp80Result3) {
    const obj25 = { style: tmp5.empty, children: items40 };
    const obj26 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: intl6.string(tmp3(tmp2[12]).w5cRz0) };
    const Heading = tmp(tmp2[33]).Heading;
    intl6 = tmp(tmp2[11]).intl;
    items40 = [ref3(Heading, obj26), ];
    const obj27 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: intl7.string(tmp3(tmp2[12]).Khsqzs) };
    const Text2 = tmp(tmp2[33]).Text;
    intl7 = tmp(tmp2[11]).intl;
    items40[1] = ref3(Text2, obj27);
    tmp80Result3 = tmp80(tmp81, obj25);
  }
  items39[1] = tmp80Result3;
  if (tmp80Result4) {
    const obj28 = { style: tmp5.status, children: items41 };
    const Text3 = tmp(tmp2[33]).Text;
    const intl8 = tmp(tmp2[11]).intl;
    const string2 = intl8.string;
    const tmp3Result = tmp3(tmp2[12]);
    const obj29 = { variant: "body-md/semibold", color: "text-strong", children: string2(stateFromStores2 ? tmp3Result["+np3yH"] : tmp3Result.V7UsE0) };
    items41 = [ref3(Text3, obj29), , ];
    const Text4 = tmp(tmp2[33]).Text;
    const intl9 = tmp(tmp2[11]).intl;
    const string3 = intl9.string;
    const tmp3Result2 = tmp3(tmp2[12]);
    const obj30 = { variant: "body-sm/normal", color: "text-muted", children: string3(stateFromStores2 ? tmp3Result2.CjS26n : tmp3Result2.qx4Gb6) };
    items41[1] = ref3(Text4, obj30);
    if (stateFromStores2) {
      const obj31 = { onPress: callback5, size: "sm", text: intl10.string(tmp3(tmp2[12]).uGhymA), variant: "secondary" };
      const Button = tmp(tmp2[37]).Button;
      intl10 = tmp(tmp2[11]).intl;
      stateFromStores2 = tmp82(Button, obj31);
    }
    items41[2] = stateFromStores2;
    tmp80Result4 = tmp80(tmp81, obj28);
  }
  items39[2] = tmp80Result4;
  let tmp82Result3 = !tmp51 && memo4.length > 0;
  if (tmp82Result3) {
    const obj32 = { style: tmp5.grid, children: rounded > 0 && memo4.map(f115454) };
    rounded > 0 && memo4.map(f115454);
    tmp82Result3 = tmp82(tmp81, obj32);
  }
  items39[3] = tmp82Result3;
  items38[2] = bound(closure_8, obj22);
  items34[1] = bound(tmp84, obj16);
  items42 = [bound(closure_8, obj7), ];
  const obj33 = { accessibilityElementsHidden: !(length > 0 && !tmp34), importantForAccessibility: str2, pointerEvents: str4, style: items43, children: ref3(closure_8, obj34) };
  const View3 = tmp3(tmp2[10]).View;
  if (length > 0 && !tmp34) {
    str2 = "auto";
  }
  str4 = "none";
  if (length > 0 && !tmp34) {
    str4 = "auto";
  }
  items43 = [tmp5.footerPosition, animatedStyle3];
  obj34 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.height);
    },
    style: items44,
    children: bound(closure_8, obj36)
  };
  items44 = [tmp5.footer, { paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) }];
  obj36 = { style: tmp5.footerContent, children: items45 };
  items45 = [, ];
  ({ paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) });
  const obj37 = {
    games: first2,
    coverWidth: rounded,
    reduceMotion: stateFromStores,
    onRemove(arg0) {
      callback(arg0);
    }
  };
  items45[0] = ref3(tmp3(tmp2[38]), obj37);
  let tmp82Result4 = first2.length > 0;
  const obj38 = { style: tmp5.footerActions, children: items46 };
  if (tmp82Result4) {
    const obj39 = { variant: "body-sm/medium", color: "text-default", children: intl11.format(tmp3(tmp2[12]).v9v0uY, obj40) };
    const Text5 = tmp(tmp2[33]).Text;
    intl11 = tmp(tmp2[11]).intl;
    obj40 = { count: first2.length, max: tmp55 };
    tmp82Result4 = tmp82(Text5, obj39);
  }
  items46 = [tmp82Result4, ];
  const obj41 = { style: animatedStyle2, children: ref3(IconButton, obj42) };
  const View4 = tmp3(tmp2[10]).View;
  obj42 = { accessibilityLabel: intl12.string(tmp(tmp2[11]).t["3PatSz"]), disabled: !tmp54, icon: ref3(ArrowLargeRightIcon, obj43), onPress: callback1, size: "lg", variant: "primary" };
  IconButton = tmp(tmp2[39]).IconButton;
  intl12 = tmp(tmp2[11]).intl;
  obj43 = { color: tmp3(tmp2[8]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  ArrowLargeRightIcon = tmp(tmp2[40]).ArrowLargeRightIcon;
  items46[1] = ref3(View4, obj41);
  items45[1] = bound(closure_8, obj38);
  items42[1] = ref3(View3, obj33);
  return bound(closure_8, obj6);
};
