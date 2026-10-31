// Module ID: 18744
// Function ID: 18745
// Name: SmartSearchRow
// Dependencies: [32, 19, 17, 5015, 13875, 21, 5014, 575, 7294, 18745, 13895, 13893, 13876, 18746, 13874, 18758, 18760, 504, 2]
// Exports: default

// Module 18744 (SmartSearchRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13893 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13895 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 13875 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { collapsedFrame: { height: 217, overflow: "hidden" }, expandedContent: obj2, divider: obj3 };
obj2 = { paddingBottom: nativeDefault.space.PX_40 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles(obj);
let closure_11 = react.memo(function SmartSearchRowContainer(smartSearchQuery) {
  let closure_2;
  let entry;
  let hasKeywordResults;
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  ({ hasKeywordResults, entry } = smartSearchQuery);
  let flashListContext;
  const tmp = closure_10();
  let obj = smartSearchQuery(7294);
  const items = [smartSearchQuery.requestKey];
  const tmp4 = flashListContext(obj.useRecyclingState(hasKeywordResults, items), 2);
  const isCollapsed = tmp4[0];
  dependencyMap = tmp6;
  let obj2 = smartSearchQuery(18745);
  const smartSearchRowViewability = obj2.useSmartSearchRowViewability();
  let obj3 = smartSearchQuery(7294);
  flashListContext = obj3.useFlashListContext();
  const items1 = [flashListContext, isCollapsed, tmp4[1], smartSearchQuery];
  const callback = react.useCallback(() => {
    closure_2(!first);
    if (!first) {
      const obj = flashListContext;
      if (flashListContext != null) {
        const ref = obj.getRef();
        if (ref != null) {
          const obj2 = { animated: !AccessibilityStore.useReducedMotion };
          ref.scrollToTop(obj2);
        }
      }
    }
    const obj3 = { smartSearchQuery, isCollapsed: !first };
    const obj4 = SmartSearchAnalyticsManagerDefault;
    const result = obj4.trackSmartSearchAnswerToggled(obj3, SearchSessionAnalyticsManagerDefault);
  }, items1);
  let tmp19Result = null;
  if (entry.status !== smartSearchQuery(13876).SmartSearchStatus.NOT_QUALIFIED) {
    let obj4 = { style: isCollapsed ? tmp.collapsedFrame : tmp.expandedContent, children: null };
    const obj5 = { smartSearchQuery, hasKeywordResults, entry, isCollapsed };
    const items2 = [closure_8(tmp2(18746).SmartSearchContent, obj5), , ];
    if (isCollapsed) {
      let tmp11Result;
      const tmp2Result = smartSearchQuery(13874);
      if (!tmp2Result.isSmartSearchEmptyOrErrored(entry.status)) {
        tmp11Result = tmp11(isCollapsed(18758), { height: 72 });
      }
      items2[1] = tmp11Result;
      let tmp11Result4 = hasKeywordResults && entry.status === tmp2(13876).SmartSearchStatus.LOADED;
      if (tmp11Result4) {
        const obj6 = { isCollapsed, onPress: callback };
        tmp11Result4 = tmp11(isCollapsed(18760), obj6);
      }
      items2[2] = tmp11Result4;
      obj4.children = items2;
      const items3 = [closure_9(View, obj4), ];
      let tmp11Result5 = hasKeywordResults;
      if (tmp11Result5) {
        const obj7 = { style: tmp.divider };
        tmp11Result5 = tmp11(tmp20, obj7);
      }
      const obj8 = { children: items3 };
      items3[1] = tmp11Result5;
      tmp19Result = tmp19(tmp20, obj8);
    }
    let tmp11Result6 = null;
    if (entry.status === smartSearchQuery(13876).SmartSearchStatus.LOADING) {
      tmp11Result6 = tmp11(isCollapsed(18758), { height: 120 });
    }
    tmp11Result = tmp11Result6;
  }
  return tmp19Result;
});
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchRow.tsx");

export default function SmartSearchRowConnected(smartSearchQuery) {
  smartSearchQuery = smartSearchQuery.smartSearchQuery;
  const items = [SmartSearchResultsStore];
  const items1 = [smartSearchQuery];
  const obj = smartSearchQuery(504);
  const stateFromStores = obj.useStateFromStores(items, () => SmartSearchResultsStore.getAnswer(smartSearchQuery.guildId, smartSearchQuery.requestKey), items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { entry: stateFromStores };
    const merged = Object.assign(smartSearchQuery);
    tmp2 = closure_8(closure_11, obj2);
  }
  return tmp2;
};
