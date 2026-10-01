// Module ID: 16515
// Function ID: 16516
// Name: PeopleScreen
// Dependencies: [5, 19, 11852, 11822, 7303, 7302, 21, 11823, 504, 16462, 16458, 4849, 11841, 16516, 16454, 16466, 2]

// Module 16515 (PeopleScreen)
import Fragment from "Fragment" /* 21 */;
import TrackingConstants from "TrackingConstants" /* 7302 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11841 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 11852 */;
import SearchQueryStore from "SearchQueryStore" /* 11822 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channelId, closure_3, importDefault, title;

let metroImportAll;
let metroImportDefault;
({ SearchListItemTypes: metroImportDefault, USER_ESTIMATED_ITEM_SIZE: metroImportAll } = SearchConstants);
let closure_9 = TrackingConstants.SearchResultContentEntityTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function PeopleScreen(searchContext) {
  let closure_1;
  let tmp13;
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let onPressGroupDMItem;
  let onPressDMItem;
  let callback1;
  const tmp = stateFromStores;
  let obj = searchContext(stateFromStores[7]);
  importDefault = obj.getSearchContextId(searchContext);
  let obj2 = searchContext(stateFromStores[8]);
  let items = [onPressGroupDMItem];
  stateFromStores = obj2.useStateFromStores(items, () => SearchPeopleTabStore.getResults(closure_1));
  const obj3 = searchContext(stateFromStores[8]);
  const items1 = [onPressDMItem];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(searchContext));
  const obj4 = searchContext(stateFromStores[9]);
  let obj5 = { placeholderHeight: callback1, numColumns: 1 };
  const fullscreenPlaceholderCount = obj4.useFullscreenPlaceholderCount(obj5);
  let obj6 = searchContext(stateFromStores[10]);
  onPressGroupDMItem = obj6.useOnPressGroupDMItem({ searchContext });
  let obj7 = searchContext(stateFromStores[10]);
  onPressDMItem = obj7.useOnPressDMItem({ searchContext });
  const useCallback = fullscreenPlaceholderCount.useCallback;
  let closure_0 = stateFromStores1((arg0, index) => {
    closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let obj2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              channelId = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj2.getOrEnsurePrivateChannel(userId), done: false };
              obj2 = closure_2_1(stateFromStores[11]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            channelId = value;
            const obj7 = { searchContext: userId, userId, channelId, index, entityType: constants.CHANNEL };
            const obj6 = closure_2_1(stateFromStores[12]);
            const result = obj6.trackSearchResultClicked(obj7);
            closure_1_6(userId, channelId);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c5 = 3;
          throw tmp9;
        }
      }
    })();
  });
  const items2 = [onPressDMItem, searchContext];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [onPressGroupDMItem, searchContext];
  callback1 = fullscreenPlaceholderCount.useCallback((channelId, index) => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, channelId, index, entityType: constants.CHANNEL };
    const result = obj.trackSearchResultClicked(obj2);
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [callback, callback1, stateFromStores1, fullscreenPlaceholderCount, stateFromStores];
  const memo = fullscreenPlaceholderCount.useMemo(() => {
    let items = [];
    let item = stateFromStores.forEach((title) => {
      let obj;
      title = title.title;
      items = title.items;
      if (null != title) {
        if (items.length > 0) {
          let element = { type: callback.SECTION, props: obj };
          obj = { title };
          title.push(element);
        }
      }
      const item = items.forEach((type, index) => {
        let firstMatch;
        let obj;
        let obj2;
        let tmp8;
        let user;
        let closure_0 = index;
        if ("user" in type) {
          ({ user, firstMatch } = type);
          const element = { type: metroImportDefault.DM, section: title, props: obj };
          obj = {
            type: type.type,
            user,
            nickname: tmp8,
            onPress(arg0) {
                return closure_2_7(arg0, closure_0);
              }
          };
          tmp8 = undefined;
          const push = items.push;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          push(element);
        } else {
          const element1 = { type: metroImportDefault.GROUP_DM, section: title, props: obj2 };
          obj2 = {
            channel: type,
            onPress(arg0) {
                return closure_2_8(arg0, closure_0);
              }
          };
          items.push(element1);
        }
      });
    });
    const tmp2 = stateFromStores1;
    if (!tmp2) {
      if (0 === items.length) {
        let num3 = 0;
        if (0 < fullscreenPlaceholderCount) {
          do {
            let obj = { type: callback.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num3 };
            let _HermesInternal = HermesInternal;
            let push = items.push;
            let arr = push(obj);
            num3 = num3 + 1;
          } while (num3 < fullscreenPlaceholderCount);
        }
      }
    }
    return items;
  }, items4);
  const obj8 = searchContext(stateFromStores[13]);
  const messageTabCountsErrorText = obj8.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    tmp13 = jsx(require("ErrorScreen"), { text: messageTabCountsErrorText });
  } else {
    tmp13 = jsx(require("SearchList"), { data: memo });
  }
  return tmp13;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default memoResult;
