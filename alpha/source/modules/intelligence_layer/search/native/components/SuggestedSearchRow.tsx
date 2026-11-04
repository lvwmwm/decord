// Module ID: 18976
// Function ID: 18977
// Name: SuggestedSearchRow
// Dependencies: [19, 17, 14106, 21, 5141, 575, 14128, 14126, 14129, 14104, 14145, 5761, 18977, 7356, 2]

// Module 18976 (SuggestedSearchRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14104 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14126 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14128 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14129 */;
import SuggestedSearchActionCreators from "SuggestedSearchActionCreators" /* 14145 */;
import react from "react" /* 19 */;
import SmartSearchConstants from "SmartSearchConstants" /* 14106 */;
import createStyles from "createStyles" /* 5141 */;
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
