// Module ID: 15192
// Function ID: 114620
// Dependencies: []

// Module 15192
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).setIsChannelDetailsSearchActive;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = {};
obj = { justifyContent: "center", height: arg1(dependencyMap[6]).SEARCH_BAR_HEIGHT, paddingStart: arg1(dependencyMap[3]).CHANNEL_DETAILS_MARGIN, paddingEnd: 8 };
obj.back = obj;
let closure_7 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(importAllResult.forwardRef((channelId, ref) => {
  let guildId;
  let onSuggestionsLayoutMesure;
  let setSuggestionsDismissed;
  let suggestionsDismissed;
  channelId = channelId.channelId;
  ref = channelId;
  const onBackPress = channelId.onBackPress;
  const importDefault = onBackPress;
  let flag = channelId.showBackButton;
  ({ guildId, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  let dependencyMap;
  let importAllResult;
  let closure_4;
  let obj = ref(dependencyMap[7]);
  const channelDetailsSearchContext = obj.useChannelDetailsSearchContext(channelId, guildId);
  dependencyMap = channelDetailsSearchContext;
  const items = [channelId, channelDetailsSearchContext];
  const effect = importAllResult.useEffect(() => () => {
    let obj = callback(closure_2[8]);
    obj = { searchContext: closure_2 };
    obj.trackSearchClosed(obj);
  }, items);
  const items1 = [channelDetailsSearchContext];
  const callback = importAllResult.useCallback(() => {
    if (!callback1.isInitialSearchQuery(channelDetailsSearchContext)) {
      onBackPress(channelDetailsSearchContext[9]).updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
      const obj = onBackPress(channelDetailsSearchContext[9]);
    }
  }, items1);
  importAllResult = callback;
  const items2 = [channelId, callback];
  const callback1 = importAllResult.useCallback(() => {
    callback();
    callback(channelId, false, "action");
  }, items2);
  closure_4 = callback1;
  const items3 = [onBackPress, callback1, callback];
  const callback2 = importAllResult.useCallback(() => {
    callback();
    if (undefined !== onBackPress) {
      onBackPress();
    } else {
      callback1();
    }
  }, items3);
  obj = { ref, searchContext: channelDetailsSearchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed };
  let tmp9 = null;
  const tmp = callback();
  const tmp7 = jsx;
  if (flag) {
    obj = { accessibilityRole: "button", onPress: callback2, style: tmp.back };
    const intl = ref(dependencyMap[12]).intl;
    obj.accessibilityLabel = intl.string(ref(dependencyMap[12]).t.13/7kX);
    obj.children = jsx(ref(dependencyMap[13]).ChevronLargeLeftIcon, {});
    tmp9 = jsx(ref(dependencyMap[11]).PressableOpacity, obj);
  }
  obj.backButton = tmp9;
  return tmp7(importDefault(dependencyMap[10]), obj);
}));
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default memoResult;
