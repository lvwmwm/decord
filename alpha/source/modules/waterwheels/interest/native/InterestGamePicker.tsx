// Module ID: 18575
// Function ID: 18576
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 2143, 18576, 21, 5141, 575, 5780, 9269, 9743, 9272, 8805, 15094, 504, 13598, 5150, 1113, 2537, 7604, 7412, 14399, 5747, 7339, 7080, 5754, 18577, 8152, 13586, 2]
// Exports: default

// Module 18575 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1113 */;
import _modDef2537 from "module_2537" /* 2537 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5150 */;
import useGame2 from "useGame" /* 7604 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8805 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameStore from "GameStore" /* 2143 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18576 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let map, max, results, set;

let FOOTER_BORDER_WIDTH;
let FOOTER_BOTTOM_PADDING;
let FOOTER_THUMBNAIL_GAP;
let GRID_GAP;
let SCREEN_HORIZONTAL_PADDING;
let SELECTED_BORDER_WIDTH;
let THUMBNAIL_ASPECT_RATIO;
let THUMBNAIL_WIDTH;
let c10;
let closure_12;
let closure_15;
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
let obj13;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let _slicedToArray = _slicedToArray_mod;
({ Pressable: hasOwnProperty, ScrollView: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
({ GRID_COLUMNS: c10, GRID_GAP } = InterestGamePickerConstants);
({ MAX_SELECTIONS: closure_12, MIN_SELECTIONS: map1, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
({ THUMBNAIL_HIT_SLOP: closure_15, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
const TILE_ASPECT_RATIO = InterestGamePickerConstants.TILE_ASPECT_RATIO;
({ FOOTER_BORDER_WIDTH, FOOTER_BOTTOM_PADDING, FOOTER_THUMBNAIL_GAP, SELECTED_BORDER_WIDTH, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
({ jsx: closure_18, jsxs: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1 }, body: obj2, header: obj3, content: obj4, intro: obj5, subtitle: { textAlign: "center" }, search: obj6, grid: { flexDirection: "row", flexWrap: "wrap", gap: GRID_GAP, paddingHorizontal: SCREEN_HORIZONTAL_PADDING }, tile: obj7, selected: obj8, status: obj9, footer: obj10, footerContent: obj11, thumbnails: { flexShrink: 1, flexDirection: "row", gap: FOOTER_THUMBNAIL_GAP }, thumbnail: obj12, footerActions: obj13 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_64, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" };
obj4 = { paddingBottom: nativeDefault.space.PX_24 };
obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12 };
obj6 = { paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj7 = { aspectRatio: TILE_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { position: "absolute", inset: 0, borderWidth: SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj9 = { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_40 };
obj10 = { minHeight: nativeDefault.space.PX_80, borderTopWidth: FOOTER_BORDER_WIDTH, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: SCREEN_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_12, paddingBottom: FOOTER_BOTTOM_PADDING, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
obj11 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
obj12 = { width: THUMBNAIL_WIDTH, flexShrink: 1, aspectRatio: THUMBNAIL_ASPECT_RATIO, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj13 = { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let closure_20 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  let ActivityIndicator;
  let ArrowLargeRightIcon;
  let SearchBar;
  let closure_3;
  let closure_5;
  let error;
  let first;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl8;
  let intl9;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let memo;
  let obj12;
  let obj14;
  let obj24;
  let obj28;
  let obj30;
  let obj7;
  let onLayout;
  let onSelect;
  let ref;
  let subtitle;
  let title;
  const f114235 = (accessibilityLabel) => {
    let items;
    let items1;
    let items2;
    let hasItem = first.includes(accessibilityLabel.id);
    const obj = {
      accessibilityLabel: accessibilityLabel.name,
      accessibilityRole: "button",
      accessibilityState: { disabled: !hasItem && memo5.length >= max, selected: hasItem },
      disabled: !hasItem && memo5.length >= max,
      onPress() {
        return closure_21(accessibilityLabel.id);
      },
      style: items,
      children: items1
    };
    items = [closure_3.tile, ];
    size = { width: rounded, height: rounded / memo5 };
    items[1] = size;
    items1 = [, ];
    const obj2 = { game: accessibilityLabel, width: rounded };
    items1[0] = length(onContinue(onSkip[26]), obj2);
    const tmp5 = ref2;
    const tmp6 = closure_5;
    const tmp7 = closure_3;
    const tmp8 = length;
    if (hasItem) {
      const obj3 = { pointerEvents: "none", style: items2 };
      items2 = [bound.absoluteFillObject, tmp7.selected];
      hasItem = tmp8(results, obj3);
    }
    items1[1] = hasItem;
    return tmp5(tmp6, obj, accessibilityLabel.id);
  };
  catalog = catalog.catalog;
  let minSelection = catalog.minSelection;
  ({ title, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = memo;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  first = undefined;
  closure_5 = undefined;
  let bound;
  results = undefined;
  onSelect = undefined;
  let closure_11;
  max = undefined;
  memo = undefined;
  let memo2;
  let rounded;
  let memo4;
  let memo5;
  let length;
  let ref2;
  let callback;
  let closure_21;
  let tmp = callback();
  _slicedToArray = tmp;
  let obj = first;
  [first, closure_5] = first.useState([]);
  const tmp4 = _slicedToArray(first.useState(""), 2);
  let tmp5 = tmp4[1];
  ref = first.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    let tmp7 = memo;
    let tmp8 = max;
    bound = Math.min(Math.max(minSelection, memo), max);
  } else {
    bound = memo;
  }
  let obj2 = catalog(onSkip[9]);
  let obj3 = { surface: catalog(onSkip[10]).GameSearchSurface.INTEREST_PICKER, filterGroup: catalog(onSkip[11]).GameSearchFilterGroup.DEFAULT };
  const debouncedGameAutocomplete = obj2.useDebouncedGameAutocomplete(str, obj3);
  results = debouncedGameAutocomplete.results;
  ({ error, onSelect } = debouncedGameAutocomplete);
  let items = [results];
  const isLoading = debouncedGameAutocomplete.isLoading;
  memo = obj.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items);
  let items1 = [memo, catalog, first];
  const memo1 = obj.useMemo(() => {
    const items = [...first];
    set = new Set(items);
    return from(set);
  }, items1);
  const tmp15 = onContinue(onSkip[13])(memo1);
  closure_11 = tmp15;
  const tmp16 = tmp4[0].trim().length > 0;
  max = tmp17;
  let tmp19 = catalog;
  if (tmp16 && null == error) {
    tmp19 = memo;
  }
  memo = tmp19;
  let items2 = [onSelect];
  const items3 = [tmp19];
  const tmp9Result = catalog(onSkip[14]);
  const stateFromStores = tmp9Result.useStateFromStores(items2, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items3);
  const items4 = [onSelect];
  const items5 = [catalog];
  const tmp9Result2 = catalog(onSkip[14]);
  let stateFromStores1 = tmp9Result2.useStateFromStores(items4, () => catalog.some((item) => onSelect.didFetchingFail(item)), items5);
  const items6 = [tmp15];
  memo2 = obj.useMemo(() => {
    map = new Map(closure_11.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items6);
  const items7 = [catalog, memo2];
  let memo3 = obj.useMemo(() => {
    let closure_0 = memo2;
    return catalog.flatMap((item) => {
      const value = closure_0.get(item);
      if (null != value) {
        let items;
        const obj = memo2(onSkip[8]);
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items7);
  const items8 = [memo, memo2];
  if (tmp16 && null == error) {
    memo3 = obj.useMemo(() => {
      let closure_0 = memo2;
      return memo.flatMap((item) => {
        const value = closure_0.get(item);
        if (null != value) {
          let items;
          const obj = memo2(onSkip[8]);
          if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
            items = [value];
          }
          return items;
        }
        items = [];
      });
    }, items8);
  }
  let tmp38Result = tmp16 && isLoading || stateFromStores;
  let tmp36Result = tmp16 && !tmp38Result && null == error && 0 === memo3.length;
  let tmp36Result2 = !tmp16 && !tmp38Result && 0 === memo3.length;
  let tmp38Result2 = !tmp38Result && !tmp36Result && !tmp36Result2;
  const tmp28 = onContinue(onSkip[15])({ isMounted: tmp38Result2 });
  const width = tmp28.width;
  let num = 0;
  ({ ref, onLayout } = tmp28);
  if (undefined !== width) {
    num = width;
  }
  rounded = Math.floor((num - 2 * memo2 - closure_11 * (memo - 1)) / memo);
  const items9 = [memo2, first];
  memo4 = obj.useMemo(() => first.flatMap((item) => {
    const value = closure_0.get(item);
    if (null != value) {
      let items;
      const obj = memo2(onSkip[8]);
      if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
        items = [value];
      }
      return items;
    }
    items = [];
  }), items9);
  const items10 = [memo4];
  memo5 = obj.useMemo(() => memo4.map((id) => id.id), items10);
  length = memo5.length;
  const tmp30 = memo5.length >= bound;
  ref2 = obj.useRef(length);
  const items11 = [length];
  const effect = obj.useEffect(() => {
    if (ref2.current !== length) {
      ref2.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl11.intl;
      const obj = { count: length, max };
      announce(intl.formatToPlainString(_modDef2537.v9v0uY, obj));
    }
  }, items11);
  callback = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_5((arr) => {
      let found;
      const tmp2 = closure_0;
      if (arr.includes(closure_0)) {
        found = arr.filter((item) => item !== closure_1_0);
      } else {
        found = arr;
        if (arr.length < max) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arr, 0)] = tmp2;
          found = items;
        }
      }
      return found;
    });
  }, []);
  const items12 = [tmp17, callback, onSelect];
  closure_21 = obj.useCallback((arg0) => {
    const tmp = max;
    if (tmp) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items12);
  const items13 = [bound, onContinue, memo5];
  const items14 = [onSkip, memo5];
  const callback1 = obj.useCallback(() => {
    let current = ref.current;
    const tmp = ref;
    if (!current) {
      current = memo5.length < bound;
    }
    if (!current) {
      tmp.current = true;
      onContinue(memo5);
    }
  }, items13);
  const items15 = [catalog];
  const callback2 = obj.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onSkip(memo5);
    }
  }, items14);
  const obj4 = { style: tmp.screen, children: items21 };
  const obj5 = { style: tmp.body, children: items16 };
  const callback3 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items15);
  const obj6 = { top: true, children: length(results, obj7) };
  obj7 = { style: tmp.header, children: length(onContinue(onSkip[21]), { onPress: callback2 }) };
  const SafeAreaPaddingView = tmp9(tmp10[20]).SafeAreaPaddingView;
  items16 = [length(SafeAreaPaddingView, obj6), ];
  const obj8 = { contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: items18 };
  const obj9 = { style: tmp.intro, children: items17 };
  items17 = [length(tmp9(tmp10[22]).Heading, { variant: "heading-xl/semibold", color: "text-strong", children: title }), ];
  const obj10 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle };
  items17[1] = length(catalog(onSkip[22]).Text, obj10);
  items18 = [ref2(results, obj9), , , , , ];
  const obj11 = { style: tmp.search, children: length(SearchBar, obj12) };
  obj12 = { accessibilityLabel: intl.string(onContinue(onSkip[18])["8Xenq+"]), onChange: tmp5, placeholder: intl2.string(onContinue(onSkip[18])["8Xenq+"]) };
  SearchBar = tmp9(tmp10[23]).SearchBar;
  intl = tmp9(tmp10[17]).intl;
  intl2 = tmp9(tmp10[17]).intl;
  items18[1] = length(results, obj11);
  const tmp39 = ref;
  if (tmp38Result) {
    const obj13 = { style: tmp.status, children: length(ActivityIndicator, obj14) };
    obj14 = { accessibilityLabel: intl3.string(catalog(onSkip[17]).t.ZTNur7) };
    ActivityIndicator = tmp9(tmp10[24]).ActivityIndicator;
    intl3 = tmp9(tmp10[17]).intl;
    tmp38Result = tmp38(tmp37, obj13);
  }
  items18[2] = tmp38Result;
  if (tmp36Result) {
    const obj15 = { style: tmp.status, children: items19 };
    const obj16 = { variant: "text-md/semibold", color: "text-strong", children: intl4.string(onContinue(onSkip[18]).w5cRz0) };
    const Text = tmp9(tmp10[22]).Text;
    intl4 = tmp9(tmp10[17]).intl;
    items19 = [length(Text, obj16), ];
    const obj17 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(onContinue(onSkip[18]).Khsqzs) };
    const Text2 = tmp9(tmp10[22]).Text;
    intl5 = tmp9(tmp10[17]).intl;
    items19[1] = length(Text2, obj17);
    tmp36Result = tmp36(tmp37, obj15);
  }
  items18[3] = tmp36Result;
  if (tmp36Result2) {
    const obj18 = { style: tmp.status, children: items20 };
    const Text3 = tmp9(tmp10[22]).Text;
    const intl6 = tmp9(tmp10[17]).intl;
    const string = intl6.string;
    const tmp14Result = onContinue(onSkip[18]);
    const obj19 = { variant: "text-md/semibold", color: "text-strong", children: string(stateFromStores1 ? tmp14Result["+np3yH"] : tmp14Result.V7UsE0) };
    items20 = [length(Text3, obj19), , ];
    const Text4 = tmp9(tmp10[22]).Text;
    const intl7 = tmp9(tmp10[17]).intl;
    const string2 = intl7.string;
    const tmp14Result2 = onContinue(onSkip[18]);
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: string2(stateFromStores1 ? tmp14Result2.CjS26n : tmp14Result2.qx4Gb6) };
    items20[1] = length(Text4, obj20);
    if (stateFromStores1) {
      const obj21 = { onPress: callback3, size: "sm", text: intl8.string(onContinue(onSkip[18]).uGhymA), variant: "secondary" };
      const Button = tmp9(tmp10[25]).Button;
      intl8 = tmp9(tmp10[17]).intl;
      stateFromStores1 = tmp38(Button, obj21);
    }
    items20[2] = stateFromStores1;
    tmp36Result2 = tmp36(tmp37, obj18);
  }
  items18[4] = tmp36Result2;
  if (tmp38Result2) {
    const obj22 = { ref, onLayout, style: tmp.grid, children: rounded > 0 && memo3.map(f114235) };
    rounded > 0 && memo3.map(f114235);
    tmp38Result2 = tmp38(tmp37, obj22);
  }
  items18[5] = tmp38Result2;
  items16[1] = ref2(tmp39, obj8);
  items21 = [ref2(results, obj5), ];
  const obj23 = { bottom: true, style: tmp.footer, children: ref2(results, obj24) };
  obj24 = { style: tmp.footerContent, children: items22 };
  const obj25 = {
    style: tmp.thumbnails,
    children: memo4.map((game) => {
      let intl;
      let obj2;
      const obj = {
        accessibilityHint: intl.string(catalog(onSkip[17]).t.N86XcP),
        accessibilityLabel: game.name,
        accessibilityRole: "button",
        hitSlop: rounded,
        onPress() {
          return callback(game.id);
        },
        style: closure_3.thumbnail,
        children: length(onContinue(onSkip[26]), obj2)
      };
      intl = catalog(onSkip[17]).intl;
      obj2 = { game, width: memo4 };
      return length(closure_5, obj, game.id);
    })
  };
  const SafeAreaPaddingView2 = tmp9(tmp10[20]).SafeAreaPaddingView;
  items22 = [length(results, obj25), ];
  const obj26 = { style: tmp.footerActions, children: items23 };
  const obj27 = { variant: "text-sm/medium", color: "text-default", children: intl9.format(onContinue(onSkip[18]).v9v0uY, obj28) };
  const Text5 = tmp9(tmp10[22]).Text;
  intl9 = tmp9(tmp10[17]).intl;
  obj28 = { count: memo5.length, max };
  items23 = [length(Text5, obj27), ];
  const obj29 = { accessibilityLabel: intl10.string(catalog(onSkip[17]).t["3PatSz"]), disabled: !tmp30, icon: length(ArrowLargeRightIcon, obj30), onPress: callback1, size: "lg", variant: "primary" };
  const IconButton = tmp9(tmp10[27]).IconButton;
  intl10 = tmp9(tmp10[17]).intl;
  obj30 = { color: onContinue(onSkip[7]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  ArrowLargeRightIcon = tmp9(tmp10[28]).ArrowLargeRightIcon;
  items23[1] = length(IconButton, obj29);
  items22[1] = ref2(results, obj26);
  items21[1] = length(SafeAreaPaddingView2, obj23);
  return ref2(results, obj4);
};
