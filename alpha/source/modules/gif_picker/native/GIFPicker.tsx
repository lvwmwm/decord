// Module ID: 10420
// Function ID: 10421
// Name: GIFPicker
// Dependencies: [32, 19, 17, 10421, 1072, 21, 5141, 10422, 1252, 7258, 9531, 10425, 12, 10428, 504, 10429, 10430, 10431, 10434, 10435, 10439, 2]

// Module 10420 (GIFPicker)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GIFPickerActionCreatorsAll from "GIFPickerActionCreators" /* 10422 */;
import gif_picker_GIFPickerUtils from "gif_picker/GIFPickerUtils" /* 10425 */;
import GifPickerUtils from "GifPickerUtils" /* 10428 */;
import GIFPickerSearchSuggestionsDefault from "GIFPickerSearchSuggestions" /* 10430 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GIFPickerViewStore from "GIFPickerViewStore" /* 10421 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let constants3;

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
  let c12;
  let columnWidth;
  let columns;
  let items11;
  let keyboardDismissMode;
  let onLayout;
  let ref;
  let ref2;
  let selectedGifSrc;
  let tmp12;
  let tmp32Result;
  let tmp34;
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
  let ref1;
  let closure_9;
  ref = undefined;
  constants3 = undefined;
  c12 = undefined;
  let first1;
  let closure_14;
  let first2;
  let closure_16;
  let memo1;
  let favorites;
  let closure_19;
  let resultItems;
  let resultQuery;
  let callback1;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  let obj = onPressGIF;
  const items = [channelId, guildId];
  let tmp = first2();
  const effect = onPressGIF.useEffect(() => {
    const obj = GIFPickerActionCreatorsAll;
    obj.initializeSearch();
    const obj2 = GIFPickerActionCreatorsAll;
    obj2.resetSearch();
    if (null != channelId) {
      const obj4 = { type: c9.GIF, channel_id: tmp4, guild_id: guildId };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(metroImportAll.CHAT_INPUT_COMPONENT_VIEWED, obj4);
    }
  }, items);
  let tmp3 = channelId;
  const tmp4 = initialQuery;
  let tmp5 = channelId(initialQuery[9])();
  let closure_6 = tmp5;
  const tmp6 = channelId(initialQuery[10])();
  const width = tmp6.width;
  let num = 0;
  ({ ref, onLayout } = tmp6);
  if (undefined !== width) {
    num = width;
  }
  const items1 = [tmp5, num, contentHorizontalPadding];
  const memo = obj.useMemo(() => {
    let max;
    let sum;
    num = 2;
    if (closure_6) {
      num = 3;
    }
    let num2 = contentHorizontalPadding;
    const _Math = Math;
    const obj = { columns: num, columnWidth: max(0, sum / num - gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING) };
    max = Math.max;
    const tmp = num;
    if (contentHorizontalPadding == null) {
      num2 = 0;
    }
    const diff = tmp - 2 * num2;
    sum = diff + gif_picker_GIFPickerUtils.GIF_PICKER_GUTTER_SPACING;
    return obj;
  }, items1);
  ({ columns, columnWidth } = memo);
  ref1 = obj.useRef(null);
  const tmp9 = contentHorizontalPadding(obj.useState(false), 2);
  closure_9 = tmp9[1];
  const first = tmp9[0];
  ref = obj.useRef("");
  constants3 = obj.useRef(false);
  [tmp12, c12] = contentHorizontalPadding(obj.useState(false), 2);
  const tmp11 = contentHorizontalPadding(obj.useState(false), 2);
  const tmp14 = contentHorizontalPadding(obj.useState(constants3.SEARCH), 2);
  first1 = tmp14[0];
  closure_14 = tmp14[1];
  const tmp16 = contentHorizontalPadding(obj.useState(""), 2);
  first2 = tmp16[0];
  closure_16 = tmp17;
  const items2 = [ref1];
  const callback = obj.useCallback(() => {
    closure_9(false);
    closure_14(unpackModuleId.SEARCH);
    closure_16("");
    const obj = GIFPickerActionCreatorsAll;
    obj.resetSearch();
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
  }, items2);
  memo1 = obj.useMemo(() => {
    const obj = bottomSheetRef(initialQuery[12]);
    return obj.debounce(guildId(initialQuery[7]).search, 200);
  }, []);
  let obj2 = bottomSheetRef(tmp4[11]);
  const favoriteGIFsMobile = obj2.useFavoriteGIFsMobile();
  favorites = favoriteGIFsMobile.favorites;
  const items3 = [favorites, first2];
  const favoritesCategory = favoriteGIFsMobile.favoritesCategory;
  closure_19 = obj.useMemo(() => {
    const obj = GifPickerUtils;
    return obj.filterFavoriteGIFsByQuery(favorites, first2);
  }, items3);
  let obj3 = bottomSheetRef(tmp4[14]);
  const items4 = [num];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items4, () => {
    if (first1 !== unpackModuleId.FAVORITES) {
      resultItems = GIFPickerViewStore.getResultItems();
    } else {
      resultItems = closure_19;
    }
    const obj = { resultItems, resultQuery: GIFPickerViewStore.getResultQuery() };
    return obj;
  });
  resultItems = stateFromStoresObject.resultItems;
  resultQuery = stateFromStoresObject.resultQuery;
  const items5 = [memo1, ref1, resultQuery];
  callback1 = obj.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref.current !== current) {
      let search;
      ref.current = current;
      closure_14(unpackModuleId.SEARCH);
      const tmp21 = current.trim().length > 0;
      let tmp2 = tmp21;
      const tmp19 = unpackModuleId;
      const tmp22 = c12;
      if (tmp2) {
        tmp2 = resultQuery !== current;
      }
      tmp22(tmp2);
      closure_9(tmp21);
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
        current = ref1.current;
        if (current != null) {
          current.setText(current);
        }
      }
    }
  }, items5);
  const items6 = [callback1, initialQuery];
  const effect1 = obj.useEffect(() => {
    if (!ref2.current) {
      const tmp3 = null != initialQuery && str.trim().length > 0;
      if (tmp3) {
        tmp.current = true;
        callback1(initialQuery, false);
      }
    }
  }, items6);
  const effect2 = obj.useEffect(() => {
    const obj = channelId(initialQuery[15]);
    obj.acknowledgeTooltip(constants.GIF_PICKER_TOOLTIP);
    const obj2 = guildId(initialQuery[7]);
    const trendingSearchTerms = obj2.fetchTrendingSearchTerms();
  }, []);
  const items7 = [resultQuery, ref1];
  const effect3 = obj.useEffect(() => {
    if ("" !== resultQuery) {
      const obj = GIFPickerActionCreatorsAll;
      const suggestions = obj.fetchSuggestions(tmp);
    }
    const current = ref1.current;
    let text;
    const tmp5 = c12;
    if (current != null) {
      text = current.getText();
    }
    tmp5(resultQuery !== text);
  }, items7);
  const items8 = [callback1];
  const items9 = [onPressGIF, resultItems.length, resultQuery];
  const memo2 = obj.useMemo(() => {
    const obj = {
      onClickSuggestion(dependencyMap) {
        return callback1(dependencyMap, false);
      }
    };
    return map1(GIFPickerSearchSuggestionsDefault, obj);
  }, items8);
  const items10 = [bottomSheetRef, callback1];
  const callback2 = obj.useCallback((gifId, index) => {
    const obj = GIFPickerActionCreatorsAll;
    const obj2 = { type: unpackModuleId.SEARCH, index, offset: 0, limit, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id };
    obj.trackSelectGIF(obj2);
    onPressGIF(gifId);
  }, items9);
  const callback3 = obj.useCallback((arg0, arg1) => {
    if (arg0 === unpackModuleId.TRENDING_GIFS) {
      closure_9(false);
      closure_14(arg0);
      const obj = GIFPickerActionCreatorsAll;
      const trendingGIFs = obj.fetchTrendingGIFs(c10);
    } else if (arg0 === tmp.FAVORITES) {
      closure_9(false);
      closure_14(arg0);
    } else {
      callback1(arg1, false);
    }
    const current = bottomSheetRef.current;
    if (current != null) {
      current.expandActionSheet();
    }
  }, items10);
  let obj4 = { ref, onLayout, style: items11, children: null };
  items11 = [tmp.container, ];
  let tmp31 = null;
  const tmp29 = closure_14;
  const tmp30 = closure_6;
  if (null != contentHorizontalPadding) {
    tmp31 = { paddingHorizontal: contentHorizontalPadding };
    const obj5 = { paddingHorizontal: contentHorizontalPadding };
  }
  items11[1] = tmp31;
  const items12 = [first1(tmp3(tmp4[17]), { categoryType: first1, columnWidth, onQueryClear: callback, onQueryChange: callback1, onFavoritesQueryChange: tmp16[1], searchInputRef: ref1 }), ];
  if (resultItems.length <= 0) {
    if (!first) {
      if (first2.length <= 0) {
        const obj6 = { columns, onSelectCategory: callback3, favoritesCategory: tmp34, inActionSheet: flag };
        tmp34 = undefined;
        const tmp3Result = tmp3(tmp4[20]);
        if (true !== hideFavorites) {
          tmp34 = favoritesCategory;
        }
        tmp32Result = tmp32(tmp3Result, obj6);
      }
      items12[1] = tmp32Result;
      obj4.children = items12;
      return tmp29(tmp30, obj4);
    }
  }
  if (0 === resultItems.length) {
    let tmp32Result2;
    if (!tmp12) {
      const obj7 = { categoryType: first1, inActionSheet: flag };
      tmp32Result2 = tmp32(tmp3(tmp4[18]), obj7);
    }
    tmp32Result = tmp32Result2;
  }
  tmp32Result2 = tmp32(tmp3(tmp4[19]), { columns, columnWidth, loading: tmp12, inActionSheet: flag, resultItems, onPressGIF: callback2, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 });
});
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default memoResult;
