// Module ID: 18729
// Function ID: 18730
// Name: SuggestedSearchRow
// Dependencies: [19, 17, 13199, 21, 4913, 575, 13221, 13219, 13222, 13197, 13238, 5504, 18730, 7428, 2]

// Module 18729 (SuggestedSearchRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13197 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13219 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13221 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13222 */;
import SuggestedSearchActionCreators from "SuggestedSearchActionCreators" /* 13238 */;
import react from "react" /* 19 */;
import SmartSearchConstants from "SmartSearchConstants" /* 13199 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT;
let hasOwnProperty;
let size;
const View = react_native.View;
({ SUGGESTED_SEARCHES_WINDOW_SIZE: hasOwnProperty, SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT } = SmartSearchConstants);
const jsx = Fragment.jsx;
let obj = { iconCircle: size, text: { flexShrink: 1 }, compactLabel: { height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center", overflow: "hidden" } };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function SuggestedSearchRow(suggestedSearch) {
  suggestedSearch = suggestedSearch.suggestedSearch;
  const smartSearchQuery = suggestedSearch.smartSearchQuery;
  const suggestionSource = suggestedSearch.suggestionSource;
  const index = suggestedSearch.index;
  const numSuggestedSearches = suggestedSearch.numSuggestedSearches;
  let str = suggestedSearch.variant;
  if (str === undefined) {
    str = "default";
  }
  const tmp = closure_7();
  const items = [smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches];
  const callback = index.useCallback(() => {
    let suggestedSearchText;
    const obj = SmartSearchAnalyticsManagerDefault;
    const obj2 = { smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches };
    const result = obj.trackSuggestedSearchStarted(obj2, SearchSessionAnalyticsManagerDefault);
    const obj3 = SearchPlatformActionCreatorsDefault;
    obj3.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const obj4 = SearchPlatformUtilsDefault;
    const initialMessages = obj4.fetchInitialMessages(smartSearchQuery.searchContext);
    const obj5 = SuggestedSearchActionCreators;
    const result1 = obj5.advanceSuggestedSearches(smartSearchQuery, SearchSessionAnalyticsManagerDefault, hasOwnProperty);
  }, items);
  let str2 = "heading-sm/semibold";
  const Text = suggestedSearch(suggestionSource[11]).Text;
  if ("default" === str) {
    str2 = "body-md/normal";
  }
  let compactLabel;
  const SearchListRow = tmp4(tmp5[12]).SearchListRow;
  if ("compact" === str) {
    compactLabel = tmp.compactLabel;
  }
  let iconCircle;
  if ("default" === str) {
    iconCircle = tmp.iconCircle;
  }
  let obj3 = { style: iconCircle, children: tmp3(tmp4(tmp5[13]).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" }) };
  return <SearchListRow onPress={callback} accessibilityLabel={suggestedSearch.suggestedSearchText} label={null} icon={null} />;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx");

export default memoResult;
