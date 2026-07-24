// Module ID: 9610
// Function ID: 74777
// Dependencies: [57, 31, 27, 9611, 653, 33, 4130, 9612, 675, 7423, 1450, 9618, 22, 566, 9621, 9622, 9623, 9627, 9631, 2]

// Module 9610
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9, GIF_FETCH_LIMIT_IOS: closure_10, GIFPickerResultTypes: closure_11, TooltipNames: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
const memoResult = importAllResult.memo(function GIFPicker(bottomSheetRef) {
  let keyboardDismissMode;
  let selectedGifSrc;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const channelId = bottomSheetRef.channelId;
  const guildId = bottomSheetRef.guildId;
  const initialQuery = bottomSheetRef.initialQuery;
  let flag = bottomSheetRef.inActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  const contentHorizontalPadding = bottomSheetRef.contentHorizontalPadding;
  const onPressGIF = bottomSheetRef.onPressGIF;
  let c6;
  let c7;
  let ref;
  let closure_9;
  let closure_10;
  let constants;
  let closure_12;
  let first;
  let closure_14;
  let memo1;
  let favorites;
  let resultItems;
  let resultQuery;
  let callback1;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  const items = [channelId, guildId];
  const effect = onPressGIF.useEffect(() => {
    let obj = guildId(initialQuery[7]);
    obj.initializeSearch();
    guildId(initialQuery[7]).resetSearch();
    if (null != channelId) {
      obj = { type: lib.GIF, channel_id: channelId, guild_id: guildId };
      channelId(initialQuery[8]).track(ref.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj3 = channelId(initialQuery[8]);
    }
  }, items);
  let tmp3 = channelId(initialQuery[9])();
  c6 = tmp3;
  const tmp4 = channelId(initialQuery[10])();
  c7 = tmp4;
  const items1 = [tmp3, tmp4, contentHorizontalPadding];
  const memo = onPressGIF.useMemo(() => {
    let num = 2;
    if (c6) {
      num = 3;
    }
    const obj = { columns: num };
    let num2 = 0;
    if (null != contentHorizontalPadding) {
      num2 = contentHorizontalPadding;
    }
    const diff = _undefined.width - 2 * num2;
    obj.columnWidth = diff / num - bottomSheetRef(initialQuery[11]).GIF_PICKER_GUTTER_SPACING;
    return obj;
  }, items1);
  const columns = memo.columns;
  let tmp6 = null;
  ref = onPressGIF.useRef(null);
  const tmp8 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  closure_9 = tmp8[1];
  closure_10 = onPressGIF.useRef("");
  constants = onPressGIF.useRef(false);
  const tmp9 = contentHorizontalPadding(onPressGIF.useState(false), 2);
  closure_12 = tmp9[1];
  const tmp10 = contentHorizontalPadding(onPressGIF.useState(constants.SEARCH), 2);
  first = tmp10[0];
  closure_14 = tmp10[1];
  const items2 = [ref];
  const callback = onPressGIF.useCallback(() => {
    lib(false);
    callback(closure_11.SEARCH);
    guildId(initialQuery[7]).resetSearch();
    const current = ref.current;
    if (null != current) {
      current.blur();
    }
  }, items2);
  memo1 = onPressGIF.useMemo(() => bottomSheetRef(initialQuery[12]).debounce(guildId(initialQuery[7]).search, 200), []);
  let obj = bottomSheetRef(initialQuery[11]);
  const favoriteGIFsMobile = obj.useFavoriteGIFsMobile();
  favorites = favoriteGIFsMobile.favorites;
  let obj1 = bottomSheetRef(initialQuery[13]);
  const items3 = [c7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    const obj = {};
    if (first !== closure_11.FAVORITES) {
      let resultItems = _undefined.getResultItems();
    } else {
      resultItems = favorites;
    }
    obj.resultItems = resultItems;
    obj.resultQuery = _undefined.getResultQuery();
    return obj;
  });
  resultItems = stateFromStoresObject.resultItems;
  resultQuery = stateFromStoresObject.resultQuery;
  const items4 = [memo1, ref, resultQuery];
  callback1 = onPressGIF.useCallback((current) => {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    if (ref.current !== current) {
      ref.current = current;
      callback(closure_11.SEARCH);
      const tmp23 = current.trim().length > 0;
      let tmp2 = tmp23;
      if (tmp23) {
        tmp2 = resultQuery !== current;
      }
      closure_12(tmp2);
      lib(tmp23);
      if (!flag) {
        let search = guildId(initialQuery[7]).search;
      } else {
        search = memo1;
      }
      let SEARCH = null;
      if ("" !== current) {
        SEARCH = closure_11.SEARCH;
      }
      search(current, SEARCH, !flag, ref);
      if (!flag) {
        current = ref.current;
        if (null != current) {
          current.setText(current);
        }
      }
      const tmp24 = closure_12;
    }
  }, items4);
  const items5 = [callback1, initialQuery];
  const effect1 = onPressGIF.useEffect(() => {
    if (!closure_11.current) {
      let tmp3 = null != initialQuery;
      if (tmp3) {
        tmp3 = initialQuery.trim().length > 0;
      }
      if (tmp3) {
        closure_11.current = true;
        callback1(initialQuery, false);
      }
    }
  }, items5);
  const effect2 = onPressGIF.useEffect(() => {
    channelId(initialQuery[14]).acknowledgeTooltip(constants.GIF_PICKER_TOOLTIP);
    const obj = channelId(initialQuery[14]);
    const trendingSearchTerms = guildId(initialQuery[7]).fetchTrendingSearchTerms();
  }, []);
  const items6 = [resultQuery, ref];
  const effect3 = onPressGIF.useEffect(() => {
    if ("" !== resultQuery) {
      const suggestions = guildId(initialQuery[7]).fetchSuggestions(resultQuery);
      const obj = guildId(initialQuery[7]);
    }
    const current = ref.current;
    let text;
    if (null != current) {
      text = current.getText();
    }
    closure_12(resultQuery !== text);
  }, items6);
  const items7 = [callback1];
  const items8 = [onPressGIF, resultItems.length, resultQuery];
  const memo2 = onPressGIF.useMemo(() => first(channelId(initialQuery[15]), {
    onClickSuggestion(arg0) {
      return outer1_19(arg0, false);
    }
  }), items7);
  const items9 = [bottomSheetRef, callback1];
  const callback2 = onPressGIF.useCallback((gifId, index) => {
    let obj = guildId(initialQuery[7]);
    obj = { type: closure_11.SEARCH, index, offset: 0, limit: closure_10, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id };
    obj.trackSelectGIF(obj);
    onPressGIF(gifId);
  }, items8);
  obj = {};
  const items10 = [memo1().container, ];
  const callback3 = onPressGIF.useCallback((arg0, arg1) => {
    if (arg0 === closure_11.TRENDING_GIFS) {
      lib(false);
      callback(arg0);
      const trendingGIFs = guildId(initialQuery[7]).fetchTrendingGIFs(closure_10);
      const obj = guildId(initialQuery[7]);
    } else if (arg0 === closure_11.FAVORITES) {
      lib(false);
      callback(arg0);
    } else {
      callback1(arg1, false);
    }
    const current = bottomSheetRef.current;
    if (null != current) {
      current.expandActionSheet();
    }
  }, items9);
  if (null != contentHorizontalPadding) {
    obj = { paddingHorizontal: contentHorizontalPadding };
    tmp6 = obj;
  }
  items10[1] = tmp6;
  obj.style = items10;
  const items11 = [first(channelId(initialQuery[16]), { categoryType: first, onQueryClear: callback, onQueryChange: callback1, searchInputRef: ref }), ];
  if (resultItems.length <= 0) {
    if (!tmp8[0]) {
      obj1 = { columns, onSelectCategory: callback3 };
      let favoritesCategory;
      if (true !== bottomSheetRef.hideFavorites) {
        favoritesCategory = favoriteGIFsMobile.favoritesCategory;
      }
      obj1.favoritesCategory = favoritesCategory;
      obj1.inActionSheet = flag;
      let tmp25Result = first(channelId(initialQuery[18]), obj1);
      const tmp25 = first;
      const tmp28 = channelId(initialQuery[18]);
    }
    items11[1] = tmp25Result;
    obj.children = items11;
    return closure_14(c6, obj);
  }
  const obj2 = { columns, columnWidth: memo.columnWidth, loading: tmp9[0], inActionSheet: flag, resultItems, onPressGIF: callback2, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 };
  tmp25Result = first(channelId(initialQuery[17]), obj2);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default memoResult;
