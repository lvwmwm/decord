// Module ID: 9825
// Function ID: 9826
// Name: GIFPicker
// Dependencies: [32, 19, 17, 9826, 1074, 21, 4836, 9827, 1241, 6364, 9830, 12, 9833, 504, 8972, 9834, 9835, 9838, 9839, 9843, 2]

// Module 9825 (GIFPicker)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GIFPickerActionCreatorsAll from "GIFPickerActionCreators" /* 9827 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 9830 */;
import GifPickerUtils from "GifPickerUtils" /* 9833 */;
import GIFPickerSearchSuggestionsDefault from "GIFPickerSearchSuggestions" /* 9834 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 9826 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let constants3, limit;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: metroImportAll, ChatInputComponentViewedTypes: c9, GIF_FETCH_LIMIT_IOS: c10, GIFPickerResultTypes: unpackModuleId, TooltipNames: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ container: { flex: 1 } });
const memoResult = react.memo(function GIFPicker(bottomSheetRef) {
  let c13;
  let columnWidth;
  let columns;
  let items11;
  let keyboardDismissMode;
  let selectedGifSrc;
  let tmp14;
  let tmp34Result;
  let tmp36;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const channelId = bottomSheetRef.channelId;
  const guildId = bottomSheetRef.guildId;
  const initialQuery = bottomSheetRef.initialQuery;
  let flag = bottomSheetRef.inActionSheet;
  const hideFavorites = bottomSheetRef.hideFavorites;
  if (flag === undefined) {
    flag = true;
  }
  const contentHorizontalPadding = bottomSheetRef.contentHorizontalPadding;
  const onPressGIF = bottomSheetRef.onPressGIF;
  c13 = undefined;
  closure_15 = undefined;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  const items = [channelId, guildId];
  let tmp = closure_15();
  const effect = onPressGIF.useEffect(() => {
    const obj = GIFPickerActionCreatorsAll;
    obj.initializeSearch();
    const obj2 = GIFPickerActionCreatorsAll;
    obj2.resetSearch();
    if (null != channelId) {
      const obj4 = { type: ref.GIF, channel_id: tmp4, guild_id: guildId };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj4);
    }
  }, items);
  let tmp3 = channelId;
  const tmp4 = initialQuery;
  let tmp5 = channelId(initialQuery[9])();
  let closure_6 = tmp5;
  const tmp6 = contentHorizontalPadding(onPressGIF.useState(0), 2);
  const first = tmp6[0];
  let closure_8 = tmp6[1];
  const items1 = [tmp5, first, contentHorizontalPadding];
  const callback = onPressGIF.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = onPressGIF.useMemo(() => {
    let max;
    let sum;
    let num = 2;
    if (closure_6) {
      num = 3;
    }
    let num2 = contentHorizontalPadding;
    const _Math = Math;
    const obj = { columns: num, columnWidth: max(0, sum / num - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING) };
    max = Math.max;
    const tmp = first;
    if (contentHorizontalPadding == null) {
      num2 = 0;
    }
    const diff = tmp - 2 * num2;
    sum = diff + gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING;
    return obj;
  }, items1);
  ({ columns, columnWidth } = memo);
  const ref = onPressGIF.useRef(null);
  const tmp11 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  limit = tmp11[1];
  const first1 = tmp11[0];
  constants3 = onPressGIF.useRef("");
  const ref2 = onPressGIF.useRef(false);
  [tmp14, c13] = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const tmp13 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  const tmp16 = contentHorizontalPadding(onPressGIF.useState(constants3.SEARCH), 2);
  const first2 = tmp16[0];
  closure_15 = tmp16[1];
  const tmp18 = contentHorizontalPadding(onPressGIF.useState(""), 2);
  const first3 = tmp18[0];
  let tmp19 = tmp18[1];
  let closure_17 = tmp19;
  const items2 = [ref];
  const callback1 = onPressGIF.useCallback(() => {
    limit(false);
    closure_15(unpackModuleId.SEARCH);
    closure_17("");
    const obj = GIFPickerActionCreatorsAll;
    obj.resetSearch();
    const current = ref.current;
    if (current != null) {
      current.blur();
    }
  }, items2);
  const memo1 = onPressGIF.useMemo(() => {
    const obj = bottomSheetRef(initialQuery[11]);
    return obj.debounce(guildId(initialQuery[7]).search, 200);
  }, []);
  let obj = bottomSheetRef(initialQuery[10]);
  const favoriteGIFsMobile = obj.useFavoriteGIFsMobile();
  const favorites = favoriteGIFsMobile.favorites;
  const items3 = [favorites, first3];
  const favoritesCategory = favoriteGIFsMobile.favoritesCategory;
  let closure_20 = onPressGIF.useMemo(() => {
    const obj = GifPickerUtils;
    return obj.filterFavoriteGIFsByQuery(favorites, first3);
  }, items3);
  let obj2 = bottomSheetRef(initialQuery[13]);
  const items4 = [first];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items4, () => {
    if (first2 !== unpackModuleId.FAVORITES) {
      resultItems = GIFPickerViewStore.getResultItems();
    } else {
      resultItems = closure_20;
    }
    const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
    return obj;
  });
  let resultItems = stateFromStoresObject.resultItems;
  const resultQuery = stateFromStoresObject.resultQuery;
  const items5 = [memo1, ref, resultQuery];
  const callback2 = onPressGIF.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref.current !== current) {
      let search;
      ref.current = current;
      closure_15(unpackModuleId.SEARCH);
      const tmp21 = current.trim().length > 0;
      let tmp2 = tmp21;
      const tmp19 = unpackModuleId;
      const tmp22 = c13;
      if (tmp2) {
        tmp2 = resultQuery !== current;
      }
      tmp22(tmp2);
      limit(tmp21);
      if (flag) {
        search = memo1;
      } else {
        search = GIFPickerActionCreatorsAll.search;
      }
      let SEARCH = null;
      if ("" !== current) {
        SEARCH = tmp19.SEARCH;
      }
      search(current, SEARCH, !flag, c10);
      if (!flag) {
        current = ref.current;
        if (current != null) {
          current.setText(current);
        }
      }
    }
  }, items5);
  const items6 = [callback2, initialQuery];
  const effect1 = onPressGIF.useEffect(() => {
    if (!ref2.current) {
      const tmp3 = null != initialQuery && str.trim().length > 0;
      if (tmp3) {
        tmp.current = true;
        callback2(initialQuery, false);
      }
    }
  }, items6);
  const effect2 = onPressGIF.useEffect(() => {
    const obj = channelId(initialQuery[14]);
    obj.acknowledgeTooltip(ref2.GIF_PICKER_TOOLTIP);
    const obj2 = guildId(initialQuery[7]);
    const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
  }, []);
  const items7 = [resultQuery, ref];
  const effect3 = onPressGIF.useEffect(() => {
    if ("" !== resultQuery) {
      const obj = GIFPickerActionCreatorsAll;
      const suggestions = obj.fetchSuggestions(tmp);
    }
    const current = ref.current;
    let text;
    const tmp5 = c13;
    if (current != null) {
      text = current.getText();
    }
    tmp5(resultQuery !== text);
  }, items7);
  const items8 = [callback2];
  const items9 = [onPressGIF, resultItems.length, resultQuery];
  const memo2 = onPressGIF.useMemo(() => {
    const obj = {
      onClickSuggestion(dependencyMap) {
        return callback2(dependencyMap, false);
      }
    };
    return map1(GIFPickerSearchSuggestionsDefault, obj);
  }, items8);
  const items10 = [bottomSheetRef, callback2];
  const callback3 = onPressGIF.useCallback((gifId, index) => {
    const obj = GIFPickerActionCreatorsAll;
    const obj2 = { type: unpackModuleId.SEARCH, index, offset: 0, limit, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id };
    obj.trackSelectGIF(obj2);
    onPressGIF(gifId);
  }, items9);
  const callback4 = onPressGIF.useCallback((arg0, arg1) => {
    if (arg0 === unpackModuleId.TRENDING_GIFS) {
      limit(false);
      closure_15(arg0);
      const obj = GIFPickerActionCreatorsAll;
      const trendingGIFs = obj.fetchTrendingGIFs(c10);
    } else if (arg0 === tmp.FAVORITES) {
      limit(false);
      closure_15(arg0);
    } else {
      callback2(arg1, false);
    }
    const current = bottomSheetRef.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, items10);
  let obj3 = { onLayout: callback, style: items11, children: null };
  items11 = [tmp.container, ];
  let tmp33 = null;
  const tmp31 = first2;
  const tmp32 = closure_6;
  if (null != contentHorizontalPadding) {
    let obj4 = { paddingHorizontal: contentHorizontalPadding };
    tmp33 = obj4;
  }
  items11[1] = tmp33;
  const items12 = [c13(tmp3(tmp4[16]), { categoryType: first2, columnWidth, onQueryClear: callback1, onQueryChange: callback2, onFavoritesQueryChange: tmp19, searchInputRef: ref }), ];
  if (resultItems.length <= 0) {
    if (!first1) {
      if (first3.length <= 0) {
        const obj5 = { columns, onSelectCategory: callback4, favoritesCategory: tmp36, inActionSheet: flag };
        tmp36 = undefined;
        const tmp3Result = tmp3(tmp4[19]);
        if (true !== hideFavorites) {
          tmp36 = favoritesCategory;
        }
        tmp34Result = tmp34(tmp3Result, obj5);
      }
      items12[1] = tmp34Result;
      obj3.children = items12;
      return tmp31(tmp32, obj3);
    }
  }
  if (0 === resultItems.length) {
    let tmp34Result2;
    if (!tmp14) {
      const obj6 = { categoryType: first2, inActionSheet: flag };
      tmp34Result2 = tmp34(tmp3(tmp4[17]), obj6);
    }
    tmp34Result = tmp34Result2;
  }
  tmp34Result2 = tmp34(tmp3(tmp4[18]), { columns, columnWidth, loading: tmp14, inActionSheet: flag, resultItems, onPressGIF: callback3, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 });
});
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default memoResult;
