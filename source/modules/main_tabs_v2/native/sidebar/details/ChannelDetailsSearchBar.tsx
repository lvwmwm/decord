// Module ID: 15366
// Function ID: 117189
// Dependencies: [31, 10109, 9168, 9140, 33, 4130, 11443, 10107, 10108, 11434, 15367, 4660, 1212, 9625, 2]

// Module 15366
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { setIsChannelDetailsSearchActive as closure_5 } from "createChannelState";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = {};
obj = { justifyContent: "center", height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT, paddingStart: require("ChannelDetailsNavigatorScreens").CHANNEL_DETAILS_MARGIN, paddingEnd: 8 };
obj.back = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(importAllResult.forwardRef((channelId, ref) => {
  let guildId;
  let onSuggestionsLayoutMesure;
  let setSuggestionsDismissed;
  let suggestionsDismissed;
  channelId = channelId.channelId;
  const onBackPress = channelId.onBackPress;
  let flag = channelId.showBackButton;
  ({ guildId, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  let channelDetailsSearchContext;
  let callback;
  let callback1;
  let obj = channelId(channelDetailsSearchContext[7]);
  channelDetailsSearchContext = obj.useChannelDetailsSearchContext(channelId, guildId);
  const items = [channelId, channelDetailsSearchContext];
  const effect = callback.useEffect(() => () => {
    let obj = onBackPress(channelDetailsSearchContext[8]);
    obj = { searchContext: outer1_2 };
    obj.trackSearchClosed(obj);
  }, items);
  const items1 = [channelDetailsSearchContext];
  callback = callback.useCallback(() => {
    if (!callback1.isInitialSearchQuery(channelDetailsSearchContext)) {
      onBackPress(channelDetailsSearchContext[9]).updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
      const obj = onBackPress(channelDetailsSearchContext[9]);
    }
  }, items1);
  const items2 = [channelId, callback];
  callback1 = callback.useCallback(() => {
    callback();
    outer1_5(channelId, false, "action");
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
  obj = { ref, searchContext: channelDetailsSearchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed };
  let tmp9 = null;
  const tmp = callback();
  const tmp7 = jsx;
  if (flag) {
    obj = { accessibilityRole: "button", onPress: callback2, style: tmp.back };
    const intl = channelId(channelDetailsSearchContext[12]).intl;
    obj.accessibilityLabel = intl.string(channelId(channelDetailsSearchContext[12]).t["13/7kX"]);
    obj.children = jsx(channelId(channelDetailsSearchContext[13]).ChevronLargeLeftIcon, { size: "sm", color: "interactive-text-default" });
    tmp9 = jsx(channelId(channelDetailsSearchContext[11]).PressableOpacity, { accessibilityRole: "button", onPress: callback2, style: tmp.back });
  }
  obj.backButton = tmp9;
  return tmp7(onBackPress(channelDetailsSearchContext[10]), obj);
}));
const result = require("createChannelState").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default memoResult;
