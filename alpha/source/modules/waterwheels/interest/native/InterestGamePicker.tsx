// Module ID: 19507
// Function ID: 19508
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 2015, 19508, 21, 5009, 575, 5655, 9122, 9591, 9125, 8673, 19509, 504, 5018, 1114, 2407, 7474, 7286, 14215, 5619, 7212, 6947, 5629, 19510, 8020, 13395, 2]
// Exports: default

// Module 19507 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1114 */;
import _modDef2407 from "module_2407" /* 2407 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import useGame2 from "useGame" /* 7474 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8673 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GameStore from "GameStore" /* 2015 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 19508 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let closure_13, map, set;

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
let react = react_mod;
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
  let _undefined;
  let c4;
  let closure_3;
  let closure_6;
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
  let obj12;
  let obj14;
  let obj24;
  let obj28;
  let obj30;
  let obj7;
  let onSelect;
  let subtitle;
  let title;
  let tmp3;
  const f117710 = (accessibilityLabel) => {
    let items;
    let items1;
    let items2;
    let hasItem = first.includes(accessibilityLabel.id);
    const obj = {
      accessibilityLabel: accessibilityLabel.name,
      accessibilityRole: "button",
      accessibilityState: { disabled: !hasItem && memo5.length >= memo, selected: hasItem },
      disabled: !hasItem && memo5.length >= memo,
      onPress() {
        return closure_22(accessibilityLabel.id);
      },
      style: items,
      children: items1
    };
    items = [closure_3.tile, ];
    size = { width: rounded, height: rounded / memo4 };
    items[1] = size;
    items1 = [, ];
    const obj2 = { game: accessibilityLabel, width: rounded };
    items1[0] = memo5(onContinue(onSkip[25]), obj2);
    const tmp5 = length;
    const tmp6 = first;
    const tmp7 = closure_3;
    const tmp8 = memo5;
    if (hasItem) {
      const obj3 = { pointerEvents: "none", style: items2 };
      items2 = [rounded.absoluteFillObject, tmp7.selected];
      hasItem = tmp8(ref, obj3);
    }
    items1[1] = hasItem;
    return tmp5(tmp6, obj, accessibilityLabel.id);
  };
  catalog = catalog.catalog;
  let minSelection = catalog.minSelection;
  ({ title, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = closure_13;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  react = undefined;
  first = undefined;
  closure_6 = undefined;
  let bound;
  let results;
  onSelect = undefined;
  closure_13 = undefined;
  let closure_14;
  let memo;
  let memo2;
  let memo4;
  let memo5;
  let length;
  let ref2;
  let callback;
  let closure_22;
  let tmp = ref2();
  _slicedToArray = tmp;
  let obj = react;
  let tmp2 = _slicedToArray(react.useState(0), 2);
  [tmp3, c4] = tmp2;
  [first, closure_6] = react.useState([]);
  let tmp6 = _slicedToArray(react.useState(""), 2);
  let tmp7 = tmp6[1];
  const rounded = Math.floor((tmp3 - 2 * closure_14 - onSelect * (results - 1)) / results);
  const ref = react.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, closure_13), memo);
  } else {
    bound = closure_13;
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
  const tmp18 = onContinue(onSkip[13])(memo1);
  closure_13 = tmp18;
  const tmp19 = tmp6[0].trim().length > 0;
  closure_14 = tmp20;
  let tmp22 = catalog;
  if (tmp19 && null == error) {
    tmp22 = memo;
  }
  memo = tmp22;
  let items2 = [bound];
  const items3 = [tmp22];
  const tmp12Result = catalog(onSkip[14]);
  const stateFromStores = tmp12Result.useStateFromStores(items2, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items3);
  const items4 = [bound];
  const items5 = [catalog];
  const tmp12Result2 = catalog(onSkip[14]);
  let stateFromStores1 = tmp12Result2.useStateFromStores(items4, () => catalog.some((item) => bound.didFetchingFail(item)), items5);
  const items6 = [tmp18];
  memo2 = obj.useMemo(() => {
    map = new Map(closure_13.map((id) => {
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
  if (tmp19 && null == error) {
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
  const tmp29 = !tmp19 && !(tmp19 && isLoading || stateFromStores) && 0 === memo3.length;
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
      announce(intl.formatToPlainString(_modDef2407.v9v0uY, obj));
    }
  }, items11);
  callback = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_6((arr) => {
      let found;
      const tmp2 = closure_0;
      if (arr.includes(closure_0)) {
        found = arr.filter((item) => item !== closure_1_0);
      } else {
        found = arr;
        if (arr.length < memo) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arr, 0)] = tmp2;
          found = items;
        }
      }
      return found;
    });
  }, []);
  const items12 = [tmp20, callback, onSelect];
  closure_22 = obj.useCallback((arg0) => {
    const tmp = closure_14;
    if (tmp) {
      onSelect(arg0);
    }
    callback(arg0);
  }, items12);
  const items13 = [bound, onContinue, memo5];
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const items14 = [onSkip, memo5];
  const callback2 = obj.useCallback(() => {
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
  const callback3 = obj.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      onSkip(memo5);
    }
  }, items14);
  const obj4 = { style: tmp.screen, children: items21 };
  const obj5 = { style: tmp.body, children: items16 };
  const callback4 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items15);
  const obj6 = { top: true, children: memo5(ref, obj7) };
  obj7 = { style: tmp.header, children: memo5(onContinue(onSkip[20]), { onPress: callback3 }) };
  const SafeAreaPaddingView = tmp12(tmp13[19]).SafeAreaPaddingView;
  items16 = [memo5(SafeAreaPaddingView, obj6), ];
  const obj8 = { contentContainerStyle: tmp.content, keyboardShouldPersistTaps: "handled", children: items18 };
  const obj9 = { style: tmp.intro, children: items17 };
  items17 = [memo5(catalog(onSkip[21]).Heading, { variant: "heading-xl/bold", color: "text-strong", children: title }), ];
  const obj10 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: subtitle };
  items17[1] = memo5(catalog(onSkip[21]).Text, obj10);
  items18 = [length(ref, obj9), , , , , ];
  const obj11 = { style: tmp.search, children: memo5(SearchBar, obj12) };
  obj12 = { accessibilityLabel: intl.string(onContinue(onSkip[17])["8Xenq+"]), onChange: tmp7, placeholder: intl2.string(onContinue(onSkip[17])["8Xenq+"]) };
  SearchBar = tmp12(tmp13[22]).SearchBar;
  intl = tmp12(tmp13[16]).intl;
  intl2 = tmp12(tmp13[16]).intl;
  items18[1] = memo5(ref, obj11);
  let tmp39Result = tmp26;
  const tmp40 = closure_6;
  if (tmp39Result) {
    const obj13 = { style: tmp.status, children: memo5(ActivityIndicator, obj14) };
    obj14 = { accessibilityLabel: intl3.string(catalog(onSkip[16]).t.ZTNur7) };
    ActivityIndicator = tmp12(tmp13[23]).ActivityIndicator;
    intl3 = tmp12(tmp13[16]).intl;
    tmp39Result = tmp39(tmp38, obj13);
  }
  items18[2] = tmp39Result;
  let tmp37Result = tmp27;
  if (tmp37Result) {
    const obj15 = { style: tmp.status, children: items19 };
    const obj16 = { variant: "text-md/semibold", color: "text-strong", children: intl4.string(onContinue(onSkip[17]).w5cRz0) };
    const Text = tmp12(tmp13[21]).Text;
    intl4 = tmp12(tmp13[16]).intl;
    items19 = [memo5(Text, obj16), ];
    const obj17 = { variant: "text-sm/normal", color: "text-muted", children: intl5.string(onContinue(onSkip[17]).Khsqzs) };
    const Text2 = tmp12(tmp13[21]).Text;
    intl5 = tmp12(tmp13[16]).intl;
    items19[1] = memo5(Text2, obj17);
    tmp37Result = tmp37(tmp38, obj15);
  }
  items18[3] = tmp37Result;
  let tmp37Result2 = tmp29;
  if (tmp37Result2) {
    const obj18 = { style: tmp.status, children: items20 };
    const Text3 = tmp12(tmp13[21]).Text;
    const intl6 = tmp12(tmp13[16]).intl;
    const string = intl6.string;
    const tmp17Result = onContinue(onSkip[17]);
    const obj19 = { variant: "text-md/semibold", color: "text-strong", children: string(stateFromStores1 ? tmp17Result["+np3yH"] : tmp17Result.V7UsE0) };
    items20 = [memo5(Text3, obj19), , ];
    const Text4 = tmp12(tmp13[21]).Text;
    const intl7 = tmp12(tmp13[16]).intl;
    const string2 = intl7.string;
    const tmp17Result2 = onContinue(onSkip[17]);
    const obj20 = { variant: "text-sm/normal", color: "text-muted", children: string2(stateFromStores1 ? tmp17Result2.CjS26n : tmp17Result2.qx4Gb6) };
    items20[1] = memo5(Text4, obj20);
    if (stateFromStores1) {
      const obj21 = { onPress: callback4, size: "sm", text: intl8.string(onContinue(onSkip[17]).uGhymA), variant: "secondary" };
      const Button = tmp12(tmp13[24]).Button;
      intl8 = tmp12(tmp13[16]).intl;
      stateFromStores1 = tmp39(Button, obj21);
    }
    items20[2] = stateFromStores1;
    tmp37Result2 = tmp37(tmp38, obj18);
  }
  items18[4] = tmp37Result2;
  let tmp39Result2 = !tmp26 && !tmp27 && !tmp29;
  if (tmp39Result2) {
    const obj22 = { onLayout: callback1, style: tmp.grid, children: rounded > 0 && memo3.map(f117710) };
    rounded > 0 && memo3.map(f117710);
    tmp39Result2 = tmp39(tmp38, obj22);
  }
  items18[5] = tmp39Result2;
  items16[1] = length(tmp40, obj8);
  items21 = [length(ref, obj5), ];
  const obj23 = { bottom: true, style: tmp.footer, children: length(ref, obj24) };
  obj24 = { style: tmp.footerContent, children: items22 };
  const obj25 = {
    style: tmp.thumbnails,
    children: memo4.map((game) => {
      let intl;
      let obj2;
      const obj = {
        accessibilityHint: intl.string(catalog(onSkip[16]).t.N86XcP),
        accessibilityLabel: game.name,
        accessibilityRole: "button",
        hitSlop: memo,
        onPress() {
          return callback(game.id);
        },
        style: closure_3.thumbnail,
        children: memo5(onContinue(onSkip[25]), obj2)
      };
      intl = catalog(onSkip[16]).intl;
      obj2 = { game, width: memo2 };
      return memo5(first, obj, game.id);
    })
  };
  const SafeAreaPaddingView2 = tmp12(tmp13[19]).SafeAreaPaddingView;
  items22 = [memo5(ref, obj25), ];
  const obj26 = { style: tmp.footerActions, children: items23 };
  const obj27 = { variant: "text-sm/medium", color: "text-default", children: intl9.format(onContinue(onSkip[17]).v9v0uY, obj28) };
  const Text5 = tmp12(tmp13[21]).Text;
  intl9 = tmp12(tmp13[16]).intl;
  obj28 = { count: memo5.length, max: memo };
  items23 = [memo5(Text5, obj27), ];
  const obj29 = { accessibilityLabel: intl10.string(catalog(onSkip[16]).t["3PatSz"]), disabled: !tmp30, icon: memo5(ArrowLargeRightIcon, obj30), onPress: callback2, size: "lg", variant: "primary" };
  const IconButton = tmp12(tmp13[26]).IconButton;
  intl10 = tmp12(tmp13[16]).intl;
  obj30 = { color: onContinue(onSkip[7]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  ArrowLargeRightIcon = tmp12(tmp13[27]).ArrowLargeRightIcon;
  items23[1] = memo5(IconButton, obj29);
  items22[1] = length(ref, obj26);
  items21[1] = memo5(SafeAreaPaddingView2, obj23);
  return length(ref, obj4);
};
