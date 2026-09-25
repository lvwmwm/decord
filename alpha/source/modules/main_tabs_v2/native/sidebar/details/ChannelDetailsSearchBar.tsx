// Module ID: 16407
// Function ID: 16408
// Name: ChannelDetailsSearchBar
// Dependencies: [19, 11808, 7296, 10366, 21, 4829, 11845, 11768, 11827, 11830, 16408, 5428, 1115, 9825, 2]

// Module 16407 (ChannelDetailsSearchBar)
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11830 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 11808 */;

const require = fn;
let closure_5 = fn(7296).setIsChannelDetailsSearchActive;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = { back: { justifyContent: "center", height: fn(11845).SEARCH_BAR_HEIGHT, paddingStart: fn(10366).CHANNEL_DETAILS_MARGIN, paddingEnd: 8 } };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { justifyContent: "center", height: fn(11845).SEARCH_BAR_HEIGHT, paddingStart: fn(10366).CHANNEL_DETAILS_MARGIN, paddingEnd: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default noop.memo(noop.forwardRef((channelId, ref) => {
  channelId = channelId.channelId;
  const onBackPress = channelId.onBackPress;
  let flag = channelId.showBackButton;
  ({ guildId, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  let channelDetailsSearchContext;
  let callback;
  const tmp = closure_7();
  channelDetailsSearchContext = channelId(channelDetailsSearchContext[7]).useChannelDetailsSearchContext(channelId, guildId);
  const items = [channelId, channelDetailsSearchContext];
  const effect = callback.useEffect(() => () => {
    onBackPress(channelDetailsSearchContext[8]).trackSearchClosed({ searchContext });
  }, items);
  const items1 = [channelDetailsSearchContext];
  callback = callback.useCallback(() => {
    if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
      SearchPlatformActionCreatorsDefault.updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
    }
  }, items1);
  const items2 = [channelId, callback];
  const callback1 = callback.useCallback(() => {
    callback();
    closure_5(channelId, false, "action");
  }, items2);
  const items3 = [onBackPress, callback1, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    if (undefined !== onBackPress) {
      onBackPress();
    } else {
      callback1();
    }
  }, items3);
  const obj2 = { ref, searchContext: channelDetailsSearchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed, backButton: null };
  let tmp9Result = null;
  let obj = channelId(channelDetailsSearchContext[7]);
  if (flag) {
    const obj3 = { accessibilityRole: "button", onPress: callback2, style: tmp.back, accessibilityLabel: null, children: null };
    const intl = tmp2(tmp3[12]).intl;
    obj3.accessibilityLabel = intl.string(tmp2(tmp3[12]).t["13/7kX"]);
    obj3.children = tmp9(tmp2(tmp3[13]).ChevronLargeLeftIcon, { size: "sm", color: "interactive-text-default" });
    tmp9Result = tmp9(tmp2(tmp3[11]).PressableOpacity, obj3);
  }
  obj2.backButton = tmp9Result;
  return jsx(onBackPress(channelDetailsSearchContext[10]), { ref, searchContext: channelDetailsSearchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed, backButton: null });
}));
