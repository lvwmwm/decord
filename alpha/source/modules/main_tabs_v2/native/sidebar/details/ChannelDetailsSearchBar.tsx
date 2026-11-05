// Module ID: 18991
// Function ID: 18992
// Name: ChannelDetailsSearchBar
// Dependencies: [19, 14131, 9980, 10323, 21, 5143, 14159, 14078, 14138, 14142, 18992, 7124, 1113, 10438, 2]

// Module 18991 (ChannelDetailsSearchBar)
import Fragment from "Fragment" /* 21 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9980 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10323 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14142 */;
import SearchButton from "SearchButton" /* 14159 */;
import react from "react" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 14131 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let obj2;
let closure_5 = ChannelDetailsStore.setIsChannelDetailsSearchActive;
const CHANNEL_DETAILS_MARGIN = ChannelDetailsConstants.CHANNEL_DETAILS_MARGIN;
const jsx = Fragment.jsx;
let obj = { back: obj2 };
obj2 = { justifyContent: "center", height: SearchButton.SEARCH_BAR_HEIGHT, paddingStart: CHANNEL_DETAILS_MARGIN, paddingEnd: 8 };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function ChannelDetailsSearchBar(channelId) {
  let intl;
  channelId = channelId.channelId;
  const onBackPress = channelId.onBackPress;
  let flag = channelId.showBackButton;
  const guildId = channelId.guildId;
  if (flag === undefined) {
    flag = true;
  }
  let channelDetailsSearchContext;
  let callback;
  const ref = channelId.ref;
  let tmp = closure_7();
  let obj = channelId(channelDetailsSearchContext[7]);
  channelDetailsSearchContext = obj.useChannelDetailsSearchContext(channelId, guildId);
  const items = [channelId, channelDetailsSearchContext];
  const effect = callback.useEffect(() => {
    let searchContext;
    return () => {
      const obj = onBackPress(channelDetailsSearchContext[8]);
      const obj2 = { searchContext };
      obj.trackSearchClosed(obj2);
    };
  }, items);
  const items1 = [channelDetailsSearchContext];
  callback = callback.useCallback(() => {
    const tmp = channelDetailsSearchContext;
    if (!SearchQueryStore.isInitialSearchQuery(channelDetailsSearchContext)) {
      const obj = SearchPlatformActionCreatorsDefault;
      obj.updateSearchQuery(tmp, (reset) => reset.reset());
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
  let tmp9Result = null;
  onBackPress(channelDetailsSearchContext[10]);
  if (flag) {
    const obj3 = { accessibilityRole: "button", onPress: callback2, style: tmp.back, accessibilityLabel: intl.string(channelId(channelDetailsSearchContext[12]).t["13/7kX"]), children: null };
    const PressableOpacity = tmp2(tmp3[11]).PressableOpacity;
    intl = tmp2(tmp3[12]).intl;
    tmp9Result = tmp9(PressableOpacity, obj3);
  }
  return <tmp10 ref={ref} searchContext={channelDetailsSearchContext} backButton={tmp9Result} />;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default memoResult;
