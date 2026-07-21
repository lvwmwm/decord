// Module ID: 9566
// Function ID: 74501
// Dependencies: []

// Module 9566
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_8, ChatInputComponentViewedTypes: closure_9, GIF_FETCH_LIMIT_IOS: closure_10, GIFPickerResultTypes: closure_11, TooltipNames: closure_12 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_15 = arg1(dependencyMap[6]).createStyles({ container: { flex: 1 } });
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function GIFPicker(bottomSheetRef) {
  let keyboardDismissMode;
  let selectedGifSrc;
  bottomSheetRef = bottomSheetRef.bottomSheetRef;
  const arg1 = bottomSheetRef;
  const channelId = bottomSheetRef.channelId;
  const importDefault = channelId;
  const guildId = bottomSheetRef.guildId;
  const importAll = guildId;
  const initialQuery = bottomSheetRef.initialQuery;
  const dependencyMap = initialQuery;
  let flag = bottomSheetRef.inActionSheet;
  if (flag === undefined) {
    flag = true;
  }
  const contentHorizontalPadding = bottomSheetRef.contentHorizontalPadding;
  let callback = contentHorizontalPadding;
  const onPressGIF = bottomSheetRef.onPressGIF;
  let View;
  let closure_7;
  let ref;
  let closure_9;
  let closure_10;
  let constants;
  let closure_12;
  let first;
  let closure_14;
  let callback2;
  let favorites;
  let resultItems;
  let resultQuery;
  let callback1;
  ({ selectedGifSrc, keyboardDismissMode } = bottomSheetRef);
  const items = [channelId, guildId];
  const effect = importAllResult.useEffect(() => {
    let obj = guildId(initialQuery[7]);
    obj.initializeSearch();
    guildId(initialQuery[7]).resetSearch();
    if (null != channelId) {
      obj = { type: lib.GIF, channel_id: channelId, guild_id: guildId };
      channelId(initialQuery[8]).track(ref.CHAT_INPUT_COMPONENT_VIEWED, obj);
      const obj3 = channelId(initialQuery[8]);
    }
  }, items);
  const tmp3 = importDefault(dependencyMap[9])();
  View = tmp3;
  const tmp4 = importDefault(dependencyMap[10])();
  closure_7 = tmp4;
  const items1 = [tmp3, tmp4, contentHorizontalPadding];
  const memo = importAllResult.useMemo(() => {
    let num = 2;
    if (tmp3) {
      num = 3;
    }
    const obj = { columns: num };
    let num2 = 0;
    if (null != contentHorizontalPadding) {
      num2 = contentHorizontalPadding;
    }
    const diff = tmp4.width - 2 * num2;
    obj.columnWidth = diff / num - bottomSheetRef(initialQuery[11]).GIF_PICKER_GUTTER_SPACING;
    return obj;
  }, items1);
  const columns = memo.columns;
  let tmp6 = null;
  ref = importAllResult.useRef(null);
  const tmp8 = callback(onPressGIF.useState(false), 2);
  closure_9 = tmp8[1];
  closure_10 = importAllResult.useRef("");
  constants = importAllResult.useRef(false);
  const tmp9 = callback(onPressGIF.useState(false), 2);
  closure_12 = tmp9[1];
  const tmp10 = callback(onPressGIF.useState(constants.SEARCH), 2);
  first = tmp10[0];
  closure_14 = tmp10[1];
  const items2 = [ref];
  callback = importAllResult.useCallback(() => {
    lib(false);
    callback(closure_11.SEARCH);
    guildId(initialQuery[7]).resetSearch();
    const current = ref.current;
    if (null != current) {
      current.blur();
    }
  }, items2);
  const memo1 = importAllResult.useMemo(() => bottomSheetRef(initialQuery[12]).debounce(guildId(initialQuery[7]).search, 200), []);
  callback2 = memo1;
  let obj = arg1(dependencyMap[11]);
  const favoriteGIFsMobile = obj.useFavoriteGIFsMobile();
  favorites = favoriteGIFsMobile.favorites;
  let obj1 = arg1(dependencyMap[13]);
  const items3 = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    const obj = {};
    if (first !== closure_11.FAVORITES) {
      let resultItems = tmp4.getResultItems();
    } else {
      resultItems = favorites;
    }
    obj.resultItems = resultItems;
    obj.resultQuery = tmp4.getResultQuery();
    return obj;
  });
  resultItems = stateFromStoresObject.resultItems;
  resultQuery = stateFromStoresObject.resultQuery;
  const items4 = [memo1, ref, resultQuery];
  callback1 = importAllResult.useCallback((current) => {
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
  const effect1 = importAllResult.useEffect(() => {
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
  const effect2 = importAllResult.useEffect(() => {
    channelId(initialQuery[14]).acknowledgeTooltip(constants.GIF_PICKER_TOOLTIP);
    const obj = channelId(initialQuery[14]);
    const trendingSearchTerms = guildId(initialQuery[7]).fetchTrendingSearchTerms();
  }, []);
  const items6 = [resultQuery, ref];
  const effect3 = importAllResult.useEffect(() => {
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
  const memo2 = importAllResult.useMemo(() => first(channelId(initialQuery[15]), {
    onClickSuggestion(arg0) {
      return callback(arg0, false);
    }
  }), items7);
  const items9 = [bottomSheetRef, callback1];
  callback2 = importAllResult.useCallback((gifId, index) => {
    let obj = guildId(initialQuery[7]);
    obj = { type: closure_11.SEARCH, index, offset: 0, limit: closure_10, results: resultItems.length, totalResults: resultItems.length, query: resultQuery, gifId: gifId.id };
    obj.trackSelectGIF(obj);
    onPressGIF(gifId);
  }, items8);
  obj = {};
  const items10 = [callback2().container, ];
  const callback3 = importAllResult.useCallback((arg0, arg1) => {
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
  const items11 = [first(importDefault(dependencyMap[16]), { categoryType: first, onQueryClear: callback, onQueryChange: callback1, searchInputRef: ref }), ];
  if (resultItems.length <= 0) {
    if (!tmp8[0]) {
      obj1 = { columns, onSelectCategory: callback3 };
      let favoritesCategory;
      if (true !== bottomSheetRef.hideFavorites) {
        favoritesCategory = favoriteGIFsMobile.favoritesCategory;
      }
      obj1.favoritesCategory = favoritesCategory;
      obj1.inActionSheet = flag;
      let tmp25Result = first(importDefault(dependencyMap[18]), obj1);
      const tmp25 = first;
      const tmp28 = importDefault(dependencyMap[18]);
    }
    items11[1] = tmp25Result;
    obj.children = items11;
    return closure_14(View, obj);
  }
  const obj2 = { columns, columnWidth: memo.columnWidth, loading: tmp9[0], inActionSheet: flag, resultItems, onPressGIF: callback2, selectedGifSrc, keyboardDismissMode, ListFooterComponent: memo2 };
  tmp25Result = first(importDefault(dependencyMap[17]), obj2);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/gif_picker/native/GIFPicker.tsx");

export default memoResult;
