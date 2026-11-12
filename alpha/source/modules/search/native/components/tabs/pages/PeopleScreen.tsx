// Module ID: 19338
// Function ID: 19339
// Name: PeopleScreen
// Dependencies: [5, 32, 19, 14656, 14641, 8999, 8998, 21, 14634, 504, 19280, 19276, 8069, 14648, 19339, 19271, 19284, 2]

// Module 19338 (PeopleScreen)
import Fragment from "Fragment" /* 21 */;
import TrackingConstants from "TrackingConstants" /* 8998 */;
import TrackingDefault from "Tracking" /* 14648 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SearchPeopleTabStore from "SearchPeopleTabStore" /* 14656 */;
import SearchQueryStore from "SearchQueryStore" /* 14641 */;
import SearchConstants from "SearchConstants" /* 8999 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channelId, closure_3, importDefault, set, title;

let c9;
let metroImportAll;
({ SearchListItemTypes: metroImportAll, USER_ESTIMATED_ITEM_SIZE: c9 } = SearchConstants);
let closure_10 = TrackingConstants.SearchResultContentEntityTypes;
const jsx = Fragment.jsx;
const memoResult = react.memo(function PeopleScreen(searchContext) {
  let closure_1;
  let tmp16;
  searchContext = searchContext.searchContext;
  let stateFromStores;
  let onPressDMItem;
  let first;
  let placeholderHeight;
  const tmp = stateFromStores;
  let obj = searchContext(stateFromStores[8]);
  importDefault = obj.getSearchContextId(searchContext);
  let obj2 = searchContext(stateFromStores[9]);
  let items = [onPressDMItem];
  stateFromStores = obj2.useStateFromStores(items, () => SearchPeopleTabStore.getResults(closure_1));
  const obj3 = searchContext(stateFromStores[9]);
  const items1 = [first];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => SearchQueryStore.isInitialSearchQuery(searchContext));
  const obj4 = searchContext(stateFromStores[10]);
  let obj5 = { placeholderHeight, numColumns: 1 };
  const fullscreenPlaceholderCount = obj4.useFullscreenPlaceholderCount(obj5);
  let obj6 = searchContext(stateFromStores[11]);
  const onPressGroupDMItem = obj6.useOnPressGroupDMItem({ searchContext });
  let obj7 = searchContext(stateFromStores[11]);
  onPressDMItem = obj7.useOnPressDMItem({ searchContext });
  let tmp7 = fullscreenPlaceholderCount(onPressGroupDMItem.useState(() => {
    set = new Set();
    return set;
  }), 2);
  first = tmp7[0];
  let closure_8 = tmp7[1];
  placeholderHeight = onPressGroupDMItem.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_8((items) => {
      set = new Set(items);
      if (set.has(closure_0)) {
        set.delete(closure_0);
      } else {
        set.add(closure_0);
      }
      return set;
    });
  }, []);
  const useCallback = onPressGroupDMItem.useCallback;
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
              obj2 = closure_2_1(stateFromStores[12]);
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
            const obj6 = closure_2_1(stateFromStores[13]);
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
  const callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [onPressGroupDMItem, searchContext];
  const callback2 = onPressGroupDMItem.useCallback((channelId, index) => {
    const obj = TrackingDefault;
    const obj2 = { searchContext, channelId, index, entityType: callback1.CHANNEL };
    const result = obj.trackSearchResultClicked(obj2);
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [first, callback1, callback2, stateFromStores1, fullscreenPlaceholderCount, stateFromStores, placeholderHeight];
  const memo = onPressGroupDMItem.useMemo(() => {
    let items = [];
    let item = stateFromStores.forEach((title) => {
      let obj;
      title = title.title;
      items = title.items;
      if (null != title) {
        if (items.length > 0) {
          const hasItem = set.has(title);
          let element = { type: constants.SECTION, props: obj };
          obj = {
            title,
            collapsed: hasItem,
            onToggle() {
                  return callback(title);
                }
          };
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
          const element = { type: metroImportAll.DM, section: title, props: obj };
          obj = {
            type: type.type,
            user,
            nickname: tmp8,
            onPress(arg0) {
                return closure_2_10(arg0, closure_0);
              }
          };
          tmp8 = undefined;
          const push = items.push;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          push(element);
        } else {
          const element1 = { type: metroImportAll.GROUP_DM, section: title, props: obj2 };
          obj2 = {
            channel: type,
            onPress(arg0) {
                return closure_2_11(arg0, closure_0);
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
            let obj = { type: constants.MESSAGE_PLACEHOLDER, key: "message-placeholder-" + num3 };
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
  const obj8 = searchContext(stateFromStores[14]);
  const messageTabCountsErrorText = obj8.useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    const obj9 = { text: messageTabCountsErrorText };
    tmp16 = callback2(require("ErrorScreen"), obj9);
  } else {
    const obj10 = { data: memo };
    tmp16 = callback2(require("SearchList"), obj10);
  }
  return tmp16;
});
let result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default memoResult;
