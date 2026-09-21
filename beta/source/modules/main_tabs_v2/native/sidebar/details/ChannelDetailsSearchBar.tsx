// Module ID: 17099
// Function ID: 17100
// Name: ChannelDetailsSearchBar
// Dependencies: [19, 12487, 8125, 11221, 21, 4758, 12518, 558, 568, 12447, 12506, 12509, 5341, 1119, 10667, 17100, 2]

// Module 17099 (ChannelDetailsSearchBar)
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12509 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12487 */;

const require = fn;
let closure_5 = fn(8125).setIsChannelDetailsSearchActive;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj = { back: { justifyContent: "center", height: fn(12518).SEARCH_BAR_HEIGHT, paddingStart: fn(11221).CHANNEL_DETAILS_MARGIN, paddingEnd: 8 } };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { justifyContent: "center", height: fn(12518).SEARCH_BAR_HEIGHT, paddingStart: fn(11221).CHANNEL_DETAILS_MARGIN, paddingEnd: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default noop.memo(noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId, arg1) => {
  const cResult = channelId(channelDetailsSearchContext[8]).c(25);
  channelId = channelId.channelId;
  ({ onSuggestionsLayoutMesure, onBackPress } = channelId);
  ({ suggestionsDismissed, setSuggestionsDismissed, showBackButton } = channelId);
  let tmp4 = undefined === showBackButton;
  if (!tmp4) {
    tmp4 = showBackButton;
  }
  closure_7();
  let obj = channelId(channelDetailsSearchContext[8]);
  channelDetailsSearchContext = channelId(channelDetailsSearchContext[9]).useChannelDetailsSearchContext(channelId, channelId.guildId);
  if (cResult[0] !== channelDetailsSearchContext) {
    const fn = function h() {
      return () => {
        onBackPress(channelDetailsSearchContext[10]).trackSearchClosed({ searchContext });
      };
    };
    cResult[0] = channelDetailsSearchContext;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === channelDetailsSearchContext) {
      let tmp8 = cResult[4];
    }
    const effect = noop.useEffect(tmp7, tmp8);
    if (cResult[5] !== channelDetailsSearchContext) {
      class S {
        constructor() {
          tmp = closure_2;
          if (!closure_4.isInitialSearchQuery(closure_2)) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[11]);
            updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
          }
          return;
        }
      }
      cResult[5] = channelDetailsSearchContext;
      cResult[6] = S;
    } else {
      class S {
        constructor() {
          tmp = closure_2;
          if (!closure_4.isInitialSearchQuery(closure_2)) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[11]);
            updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
          }
          return;
        }
      }
    }
    noop = tmp11;
    if (cResult[7] === channelId) {
      class S {
        constructor() {
          tmp = closure_2;
          if (!closure_4.isInitialSearchQuery(closure_2)) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[11]);
            updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
          }
          return;
        }
      }
      SearchQueryStore = tmp12;
      if (cResult[10] === onBackPress) {
        class S {
          constructor() {
            tmp = closure_2;
            if (!closure_4.isInitialSearchQuery(closure_2)) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[11]);
              updateSearchQueryResult = obj.updateSearchQuery(tmp, (reset) => reset.reset());
            }
            return;
          }
        }
      }
      class P {
        constructor() {
          tmp = closure_3();
          if (undefined !== onBackPress) {
            tmp4 = onBackPress();
          } else {
            tmp2 = closure_4;
            tmp3 = closure_4();
          }
          return;
        }
      }
      cResult[10] = onBackPress;
      cResult[11] = tmp12;
      cResult[12] = tmp11;
      cResult[13] = P;
    }
    const fn2 = function p() {
      S();
      closure_5(channelId, false, "action");
    };
    cResult[7] = channelId;
    cResult[8] = tmp11;
    cResult[9] = fn2;
  }
  const items = [channelId, channelDetailsSearchContext];
  cResult[2] = channelId;
  cResult[3] = channelDetailsSearchContext;
  cResult[4] = items;
  tmp8 = items;
}) : ((channelId, ref) => {
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
  channelDetailsSearchContext = channelId(channelDetailsSearchContext[9]).useChannelDetailsSearchContext(channelId, guildId);
  const items = [channelId, channelDetailsSearchContext];
  const effect = callback.useEffect(() => () => {
    onBackPress(channelDetailsSearchContext[10]).trackSearchClosed({ searchContext });
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
  let obj = channelId(channelDetailsSearchContext[9]);
  if (flag) {
    const obj3 = { accessibilityRole: "button", onPress: callback2, style: tmp.back, accessibilityLabel: null, children: null };
    const intl = tmp2(tmp3[13]).intl;
    obj3.accessibilityLabel = intl.string(tmp2(tmp3[13]).t["13/7kX"]);
    obj3.children = tmp9(tmp2(tmp3[14]).ChevronLargeLeftIcon, { size: "sm", color: "interactive-text-default" });
    tmp9Result = tmp9(tmp2(tmp3[12]).PressableOpacity, obj3);
  }
  obj2.backButton = tmp9Result;
  return jsx(onBackPress(channelDetailsSearchContext[15]), { ref, searchContext: channelDetailsSearchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed, backButton: null });
})));
