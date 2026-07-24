// Module ID: 15424
// Function ID: 117665
// Dependencies: [5, 31, 11438, 10109, 9141, 9169, 33, 10110, 566, 15387, 15384, 4140, 10108, 15425, 15380, 15391, 2]

// Module 15424
import SearchEntrypointAnalyticsLocations from "SearchEntrypointAnalyticsLocations";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import { SearchResultContentEntityTypes as closure_9 } from "SearchEntrypointAnalyticsLocations";
import { jsx } from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
({ SearchListItemTypes: closure_7, USER_ESTIMATED_ITEM_SIZE: closure_8 } = SearchAutocompleteSelectAnalyticsActions);
const memoResult = importAllResult.memo(function PeopleScreen(searchContext) {
  searchContext = searchContext.searchContext;
  let obj = searchContext(stateFromStores[7]);
  const importDefault = obj.getSearchContextId(searchContext);
  let obj1 = searchContext(stateFromStores[8]);
  let items = [onPressGroupDMItem];
  stateFromStores = obj1.useStateFromStores(items, () => onPressGroupDMItem.getResults(closure_1));
  const items1 = [onPressDMItem];
  const stateFromStores1 = searchContext(stateFromStores[8]).useStateFromStores(items1, () => onPressDMItem.isInitialSearchQuery(searchContext));
  const obj3 = searchContext(stateFromStores[8]);
  obj = { placeholderHeight: callback1, numColumns: 1 };
  const fullscreenPlaceholderCount = searchContext(stateFromStores[9]).useFullscreenPlaceholderCount(obj);
  const obj4 = searchContext(stateFromStores[9]);
  onPressGroupDMItem = searchContext(stateFromStores[10]).useOnPressGroupDMItem({ searchContext });
  const obj6 = searchContext(stateFromStores[10]);
  onPressDMItem = searchContext(stateFromStores[10]).useOnPressDMItem({ searchContext });
  const items2 = [onPressDMItem, searchContext];
  const callback = fullscreenPlaceholderCount.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores1(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items2);
  const items3 = [onPressGroupDMItem, searchContext];
  callback1 = fullscreenPlaceholderCount.useCallback((channelId, index) => {
    let obj = callback(stateFromStores[12]);
    obj = { searchContext, channelId, index, entityType: outer1_9.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [callback, callback1, stateFromStores1, fullscreenPlaceholderCount, stateFromStores];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    let item = stateFromStores.forEach((title) => {
      title = title.title;
      const items = title.items;
      if (null != title) {
        if (items.length > 0) {
          let obj = { type: callback.SECTION };
          obj = { title };
          obj.props = obj;
          title.push(obj);
        }
      }
      const item = items.forEach((type) => {
        let firstMatch;
        let user;
        let closure_0 = arg1;
        if ("user" in type) {
          ({ user, firstMatch } = type);
          let obj = { type: callback.DM, section: closure_0 };
          obj = { type: type.type, user };
          let tmp8;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          obj.nickname = tmp8;
          obj.onPress = function onPress(arg0) {
            return outer3_7(arg0, closure_0);
          };
          obj.props = obj;
          title.push(obj);
        } else {
          obj = { type: callback.GROUP_DM, section: closure_0 };
          const obj1 = {
            channel: type,
            onPress(arg0) {
                return outer3_8(arg0, closure_0);
              }
          };
          obj.props = obj1;
          title.push(obj);
        }
      });
    });
    if (!stateFromStores1) {
      if (0 === items.length) {
        let num2 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = {};
            let tmp4 = callback;
            obj.type = callback.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num2;
            let arr = items.push(obj);
            num2 = num2 + 1;
            let tmp6 = fullscreenPlaceholderCount;
          } while (num2 < fullscreenPlaceholderCount);
        }
      }
    }
    return items;
  }, items4);
  const obj7 = searchContext(stateFromStores[10]);
  const messageTabCountsErrorText = searchContext(stateFromStores[13]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp13 = jsx(importDefault(stateFromStores[14]), { text: messageTabCountsErrorText });
  } else {
    obj1 = { data: memo };
    tmp13 = jsx(importDefault(stateFromStores[15]), { data: memo });
  }
  return tmp13;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default memoResult;
