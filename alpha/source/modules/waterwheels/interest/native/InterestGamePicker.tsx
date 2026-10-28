// Module ID: 19209
// Function ID: 19210
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 2019, 19210, 21, 5004, 587, 5648, 558, 576, 1496, 9536, 9109, 9106, 8617, 19211, 504, 7443, 7991, 1125, 6964, 5270, 7257, 2405, 7181, 6916, 5280, 19212, 19213, 2]

// Module 19209 (InterestGamePicker)
import nativeDefault from "native" /* 587 */;
import useGame2 from "useGame" /* 7443 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8617 */;
import InterestGameCoverDefault from "InterestGameCover" /* 19212 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameStore from "GameStore" /* 2019 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 19210 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let map, results, set;

let FOOTER_BOTTOM_PADDING;
let FOOTER_THUMBNAIL_GAP;
let GRID_GAP;
let MIN_TOUCH_TARGET_SIZE;
let SCREEN_HORIZONTAL_PADDING;
let SELECTED_BORDER_WIDTH;
let THUMBNAIL_HEIGHT;
let THUMBNAIL_WIDTH;
let c10;
let closure_12;
let closure_14;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
({ GRID_COLUMNS: c10, GRID_GAP } = InterestGamePickerConstants);
({ MAX_FOOTER_THUMBNAILS: closure_12, MAX_SELECTIONS: map1, MIN_SELECTIONS: closure_14, MIN_TOUCH_TARGET_SIZE, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
({ THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ FOOTER_BOTTOM_PADDING, FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH } = InterestGamePickerConstants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1 }, body: obj2, header: obj3, headerSpacer: obj4, skipButton: { width: MIN_TOUCH_TARGET_SIZE, height: MIN_TOUCH_TARGET_SIZE, alignItems: "center", justifyContent: "center" }, content: obj5, intro: obj6, subtitle: { textAlign: "center" }, search: obj7, grid: { flexDirection: "row", flexWrap: "wrap", gap: GRID_GAP, paddingHorizontal: SCREEN_HORIZONTAL_PADDING }, tile: obj8, selected: obj9, status: obj10, footer: obj11, footerContent: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, thumbnails: { height: THUMBNAIL_HEIGHT, flexDirection: "row", gap: FOOTER_THUMBNAIL_GAP }, thumbnail: size, footerActions: obj12 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_64, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj4 = { width: nativeDefault.space.PX_32 };
obj5 = { paddingBottom: nativeDefault.space.PX_24 };
obj6 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12 };
obj7 = { paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj8 = { aspectRatio: TILE_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj9 = { position: "absolute", inset: 0, borderWidth: SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj10 = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_40 };
obj11 = { minHeight: nativeDefault.space.PX_80, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12, paddingBottom: FOOTER_BOTTOM_PADDING, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
size = { width: THUMBNAIL_WIDTH, height: THUMBNAIL_HEIGHT, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj12 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let closure_20 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function InterestGamePicker(catalog) {
  let closure_3;
  let closure_7;
  let error;
  let first;
  let initialSelection;
  let minSelection;
  let onContinue;
  let onSelect;
  let onSkip;
  let subtitle;
  let title;
  let tmp14;
  let tmp22;
  let tmp6;
  let width;
  let tmp = catalog;
  let tmp2 = onSkip;
  let obj = catalog(onSkip[10]);
  const cResult = obj.c(204);
  catalog = catalog.catalog;
  ({ title, subtitle, initialSelection, minSelection, onContinue } = catalog);
  onSkip = catalog.onSkip;
  if (undefined === minSelection) {
    minSelection = closure_14;
  }
  let tmp4 = closure_20();
  _slicedToArray = tmp4;
  const result = (onContinue(tmp2[11])().width - 2 * SCREEN_HORIZONTAL_PADDING - GRID_GAP * (onSelect - 1)) / onSelect;
  react = result;
  if (cResult[0] !== initialSelection) {
    let items = initialSelection;
    if (initialSelection == null) {
      items = [];
    }
    const _Array = Array;
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(items);
    const fromResult = from(set);
    const substr = fromResult.slice(0, closure_13);
    cResult[0] = initialSelection;
    cResult[1] = substr;
    tmp6 = substr;
  } else {
    tmp6 = cResult[1];
  }
  let closure_5 = tmp6;
  if (cResult[2] !== tmp6) {
    class N {
      constructor() {
        return closure_5;
      }
    }
    cResult[2] = tmp6;
    cResult[3] = N;
    tmp14 = N;
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  [first, closure_7] = react.useState(tmp14);
  const first1 = _slicedToArray(react.useState(""), 2)[0];
  _slicedToArray(react.useState(""), 2);
  const ref = react.useRef(false);
  if (Number.isFinite(minSelection)) {
    class N {
      constructor() {
        return closure_5;
      }
    }
    const _Math = Math;
    const bound = Math.min(Math.max(minSelection, closure_14), closure_13);
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        return closure_5;
      }
    }
    tmp23[0] = tmp(tmp2[12]).GameSearchSurface.INTEREST_PICKER;
    tmp23[1] = tmp(tmp2[13]).GameSearchFilterGroup.DEFAULT;
    cResult[4] = tmp23;
    tmp22 = tmp23;
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  const tmpResult = tmp(tmp2[14]);
  const debouncedGameAutocomplete = tmpResult.useDebouncedGameAutocomplete(first1, tmp22);
  ({ results, error, onSelect } = debouncedGameAutocomplete);
  if (cResult[5] !== results) {
    let tmp26;
    class N {
      constructor() {
        return closure_5;
      }
    }
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return closure_5;
        }
      }
      cResult[7] = tmp27;
      tmp26 = tmp27;
    } else {
      class N {
        constructor() {
          return closure_5;
        }
      }
    }
    const arr3 = results;
    if (results == null) {
      class N {
        constructor() {
          return closure_5;
        }
      }
    }
    let found = arr3.filter(tmp(tmp2[15]).isGameAutocompleteResultAllowedInGameWidgets);
    const mapped = found.map(tmp26);
    cResult[5] = results;
    cResult[6] = mapped;
  } else {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  if (cResult[8] === tmp25) {
    class N {
      constructor() {
        return closure_5;
      }
    }
  }
  let items1 = [...first];
  const from2 = Array.from;
  const set1 = new Set(items1);
  cResult[8] = tmp25;
  cResult[9] = catalog;
  cResult[10] = first;
  cResult[11] = from2(set1);
  from2(set1);
}) : (function InterestGamePicker(catalog) {
  let SearchBar;
  let Text;
  let closure_4;
  let error;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let items26;
  let items27;
  let items28;
  let obj11;
  let obj16;
  let obj27;
  let obj31;
  let onSelect;
  let subtitle;
  let title;
  let tmp37Result;
  catalog = catalog.catalog;
  const initialSelection = catalog.initialSelection;
  let minSelection = catalog.minSelection;
  ({ title, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = closure_14;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  const onBack = catalog.onBack;
  let bound;
  results = undefined;
  onSelect = undefined;
  closure_14 = undefined;
  let closure_15;
  let memo;
  let stateFromStores2;
  let memo2;
  let memo5;
  let memo6;
  let memo7;
  let callback;
  let closure_23;
  let tmp = memo6();
  react = tmp;
  let tmp2 = initialSelection;
  let tmp3 = onContinue;
  const width = (initialSelection(onContinue[11])().width - 2 * closure_15 - results * (bound - 1)) / bound;
  let obj = react;
  let items = [initialSelection];
  let closure_6 = react.useMemo(() => {
    let items = initialSelection;
    if (initialSelection == null) {
      items = [];
    }
    set = new Set(items);
    const fromResult = from(set);
    return fromResult.slice(0, map1);
  }, items);
  let tmp4 = onSkip(react.useState(() => closure_6), 2);
  const first = tmp4[0];
  let closure_8 = tmp4[1];
  const tmp6 = onSkip(react.useState(""), 2);
  const tmp7 = tmp6[1];
  const ref = react.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, closure_14), memo);
  } else {
    bound = closure_14;
  }
  let obj2 = catalog(tmp3[14]);
  let obj3 = { surface: catalog(tmp3[12]).GameSearchSurface.INTEREST_PICKER, filterGroup: catalog(tmp3[13]).GameSearchFilterGroup.DEFAULT };
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, obj3);
  results = debouncedGameAutocomplete.results;
  ({ error, onSelect } = debouncedGameAutocomplete);
  let items1 = [results];
  const isLoading = debouncedGameAutocomplete.isLoading;
  memo = obj.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items1);
  let items2 = [memo, catalog, first];
  const memo1 = obj.useMemo(() => {
    const items = [...first];
    set = new Set(items);
    return from(set);
  }, items2);
  const tmp15 = tmp2(tmp3[16])(memo1);
  closure_14 = tmp15;
  const tmp16 = tmp6[0].trim().length > 0;
  closure_15 = tmp17;
  let tmp19 = catalog;
  if (tmp16 && null == error) {
    tmp19 = memo;
  }
  memo = tmp19;
  const items3 = [ref];
  const items4 = [tmp19];
  const tmp11Result = catalog(tmp3[17]);
  const stateFromStores = tmp11Result.useStateFromStores(items3, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items4);
  const items5 = [ref];
  const items6 = [catalog];
  const tmp11Result3 = catalog(tmp3[17]);
  let stateFromStores1 = tmp11Result3.useStateFromStores(items5, () => catalog.some((item) => ref.didFetchingFail(item)), items6);
  const items7 = [ref];
  const items8 = [first];
  const tmp11Result4 = catalog(tmp3[17]);
  stateFromStores2 = tmp11Result4.useStateFromStores(items7, () => {
    let game;
    return first.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items8);
  const items9 = [tmp15];
  memo2 = obj.useMemo(() => {
    map = new Map(closure_14.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items9);
  const items10 = [catalog, memo2];
  const items11 = [memo, memo2];
  const memo3 = obj.useMemo(() => {
    let closure_0 = memo2;
    return catalog.flatMap((item) => {
      const value = closure_0.get(item);
      if (null != value) {
        let items;
        const obj = memo2(onContinue[8]);
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items10);
  let memo4 = memo3;
  if (tmp16 && null == error) {
    memo4 = obj.useMemo(() => {
      let closure_0 = memo2;
      return memo.flatMap((item) => {
        const value = closure_0.get(item);
        if (null != value) {
          let items;
          const obj = memo2(onContinue[8]);
          if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
            items = [value];
          }
          return items;
        }
        items = [];
      });
    }, items11);
  }
  const tmp28 = !tmp16 && !(tmp16 && isLoading || stateFromStores) && 0 === memo4.length;
  const items12 = [memo2, first];
  memo5 = obj.useMemo(() => first.flatMap((item) => {
    const value = closure_0.get(item);
    if (null != value) {
      let items;
      const obj = memo2(onContinue[8]);
      if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
        items = [value];
      }
      return items;
    }
    items = [];
  }), items12);
  const items13 = [memo5];
  memo6 = obj.useMemo(() => memo5.map((id) => id.id), items13);
  const substr = memo5.slice(-onSelect);
  const items14 = [stateFromStores2, memo6, first];
  const tmp29 = memo6.length >= bound;
  memo7 = obj.useMemo(function() {
    let _Set1;
    const _Set = Set;
    if (stateFromStores2) {
      const self3 = this;
      const self4 = this;
      _Set1 = new _Set();
    } else {
      const self = this;
      const self2 = this;
      _Set1 = new _Set(first.filter((item) => !memo6.includes(item)));
    }
    return _Set1;
  }, items14);
  const items15 = [memo7];
  callback = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_8((arr) => {
      const filter = arr.filter;
      const tmp2 = closure_0;
      if (arr.includes(closure_0)) {
        return filter((arg0) => arg0 !== closure_1_0);
      } else {
        const found = filter((arg0) => !set.has(arg0));
        let tmp4 = arr;
        if (found.length < map1) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, found, 0)] = tmp2;
          tmp4 = items;
        }
        return tmp4;
      }
    });
  }, items15);
  const items16 = [tmp17, callback, onSelect];
  closure_23 = obj.useCallback((arg0) => {
    const tmp = closure_15;
    if (tmp) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items16);
  const items17 = [bound, onContinue, memo6];
  const items18 = [onSkip, memo6];
  const callback1 = obj.useCallback(() => {
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      tmp.current = true;
      onContinue(memo6);
    }
  }, items17);
  const items19 = [catalog];
  const callback2 = obj.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onSkip(memo6);
    }
  }, items18);
  const obj4 = { style: tmp.screen, children: items26 };
  const obj5 = { style: tmp.body, children: items21 };
  const callback3 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items19);
  const obj6 = { style: tmp.header, children: items20 };
  const SafeAreaPaddingView = tmp11(tmp3[23]).SafeAreaPaddingView;
  if (null != onBack) {
    const obj7 = { accessibilityLabel: intl.string(catalog(tmp3[20]).t["13/7kX"]), icon: memo2(catalog(tmp3[21]).ArrowLargeLeftIcon, { size: "sm" }), onPress: onBack, size: "sm", variant: "tertiary" };
    const IconButton = tmp11(tmp3[19]).IconButton;
    intl = tmp11(tmp3[20]).intl;
    tmp37Result = tmp37(IconButton, obj7);
  } else {
    const obj8 = { style: tmp.headerSpacer };
    tmp37Result = tmp37(tmp36, obj8);
  }
  items20 = [tmp37Result, ];
  const obj9 = { top: true, children: memo5(closure_8, obj6) };
  const obj10 = { accessibilityLabel: intl2.string(catalog(tmp3[20]).t["5Wxrcd"]), accessibilityRole: "button", onPress: callback2, style: tmp.skipButton, children: memo2(Text, obj11) };
  intl2 = tmp11(tmp3[20]).intl;
  obj11 = { variant: "text-md/semibold", color: "text-brand", children: intl3.string(catalog(tmp3[20]).t["5Wxrcd"]) };
  Text = tmp11(tmp3[22]).Text;
  intl3 = tmp11(tmp3[20]).intl;
  items20[1] = memo2(width, obj10);
  items21 = [memo2(SafeAreaPaddingView, obj9), ];
  const obj12 = { contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: items23 };
  const obj13 = { style: tmp.intro, children: items22 };
  items22 = [memo2(catalog(tmp3[22]).Heading, { variant: "heading-xl/bold", color: "text-strong", children: title }), ];
  const obj14 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle };
  items22[1] = memo2(catalog(tmp3[22]).Text, obj14);
  items23 = [memo5(closure_8, obj13), , , , , ];
  const obj15 = { style: tmp.search, children: memo2(SearchBar, obj16) };
  obj16 = { accessibilityLabel: intl4.string(tmp2(tmp3[24])["8Xenq+"]), onChange: tmp7, placeholder: intl5.string(tmp2(tmp3[24])["8Xenq+"]) };
  SearchBar = tmp11(tmp3[25]).SearchBar;
  intl4 = tmp11(tmp3[20]).intl;
  intl5 = tmp11(tmp3[20]).intl;
  items23[1] = memo2(closure_8, obj15);
  let tmp37Result3 = tmp25;
  const tmp39 = closure_6;
  if (tmp37Result3) {
    const obj17 = { style: tmp.status, children: memo2(catalog(tmp3[26]).ActivityIndicator, {}) };
    tmp37Result3 = tmp37(tmp36, obj17);
  }
  items23[2] = tmp37Result3;
  let tmp35Result = tmp26;
  if (tmp35Result) {
    const obj18 = { style: tmp.status, children: items24 };
    const obj19 = { variant: "text-md/semibold", color: "text-strong", children: intl6.string(tmp2(tmp3[24]).w5cRz0) };
    const Text2 = tmp11(tmp3[22]).Text;
    intl6 = tmp11(tmp3[20]).intl;
    items24 = [memo2(Text2, obj19), ];
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: intl7.string(tmp2(tmp3[24]).Khsqzs) };
    const Text3 = tmp11(tmp3[22]).Text;
    intl7 = tmp11(tmp3[20]).intl;
    items24[1] = memo2(Text3, obj20);
    tmp35Result = tmp35(tmp36, obj18);
  }
  items23[3] = tmp35Result;
  let tmp35Result2 = tmp28;
  if (tmp35Result2) {
    const obj21 = { style: tmp.status, children: items25 };
    const Text4 = tmp11(tmp3[22]).Text;
    const intl8 = tmp11(tmp3[20]).intl;
    const string = intl8.string;
    const tmp2Result = tmp2(tmp3[24]);
    const obj22 = { variant: "text-md/semibold", color: "text-strong", children: string(stateFromStores1 ? tmp2Result["+np3yH"] : tmp2Result.V7UsE0) };
    items25 = [memo2(Text4, obj22), , ];
    const Text5 = tmp11(tmp3[22]).Text;
    const intl9 = tmp11(tmp3[20]).intl;
    const string2 = intl9.string;
    const tmp2Result2 = tmp2(tmp3[24]);
    const obj23 = { variant: "text-sm/normal", color: "text-muted", children: string2(stateFromStores1 ? tmp2Result2.CjS26n : tmp2Result2.qx4Gb6) };
    items25[1] = memo2(Text5, obj23);
    if (stateFromStores1) {
      const obj24 = { onPress: callback3, size: "sm", text: intl10.string(tmp2(tmp3[24]).uGhymA), variant: "secondary" };
      const Button = tmp11(tmp3[27]).Button;
      intl10 = tmp11(tmp3[20]).intl;
      stateFromStores1 = tmp37(Button, obj24);
    }
    items25[2] = stateFromStores1;
    tmp35Result2 = tmp35(tmp36, obj21);
  }
  items23[4] = tmp35Result2;
  let tmp37Result4 = !tmp25 && !tmp26 && !tmp28;
  if (tmp37Result4) {
    const obj25 = {
      style: tmp.grid,
      children: memo4.map((accessibilityLabel) => {
          let items;
          let items1;
          let items2;
          let hasItem = first.includes(accessibilityLabel.id);
          const obj = {
            accessibilityLabel: accessibilityLabel.name,
            accessibilityRole: "button",
            accessibilityState: { selected: hasItem },
            onPress() {
              return closure_23(accessibilityLabel.id);
            },
            style: items,
            children: items1
          };
          items = [closure_4.tile, ];
          size = { width, height: width / stateFromStores2 };
          items[1] = size;
          items1 = [, ];
          const obj2 = { game: accessibilityLabel, width };
          items1[0] = memo2(initialSelection(onContinue[28]), obj2);
          const tmp2 = memo5;
          const tmp3 = width;
          const tmp4 = closure_4;
          const tmp5 = memo2;
          if (hasItem) {
            const obj3 = { pointerEvents: "none", style: items2 };
            items2 = [first.absoluteFillObject, tmp4.selected];
            hasItem = tmp5(closure_8, obj3);
          }
          items1[1] = hasItem;
          return tmp2(tmp3, obj, accessibilityLabel.id);
        })
    };
    tmp37Result4 = tmp37(tmp36, obj25);
  }
  items23[5] = tmp37Result4;
  items21[1] = memo5(tmp39, obj12);
  items26 = [memo5(closure_8, obj5), ];
  const obj26 = { bottom: true, style: tmp.footer, children: memo5(closure_8, obj27) };
  obj27 = { style: tmp.footerContent, children: items27 };
  const obj28 = {
    style: tmp.thumbnails,
    children: substr.map((game) => {
      let obj2;
      const obj = { style: closure_4.thumbnail, children: authStore4(InterestGameCoverDefault, obj2) };
      obj2 = { game, width: THUMBNAIL_WIDTH };
      return authStore4(metroImportAll, obj, game.id);
    })
  };
  const SafeAreaPaddingView2 = tmp11(tmp3[23]).SafeAreaPaddingView;
  items27 = [memo2(closure_8, obj28), ];
  const obj29 = { style: tmp.footerActions, children: items28 };
  const obj30 = { variant: "text-sm/medium", color: "text-default", children: intl11.format(tmp2(tmp3[24]).v9v0uY, obj31) };
  const Text6 = tmp11(tmp3[22]).Text;
  intl11 = tmp11(tmp3[20]).intl;
  obj31 = { count: memo6.length, max: memo };
  items28 = [memo2(Text6, obj30), ];
  const obj32 = { accessibilityLabel: intl12.string(catalog(tmp3[20]).t["3PatSz"]), disabled: !tmp29, icon: memo2(catalog(tmp3[29]).ArrowLargeRightIcon, { color: "white" }), onPress: callback1, size: "lg", variant: "primary" };
  const IconButton2 = tmp11(tmp3[19]).IconButton;
  intl12 = tmp11(tmp3[20]).intl;
  items28[1] = memo2(IconButton2, obj32);
  items27[1] = memo5(closure_8, obj29);
  items26[1] = memo2(SafeAreaPaddingView2, obj26);
  return memo5(closure_8, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default tmp7;
