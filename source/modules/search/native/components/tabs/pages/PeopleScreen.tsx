// Module ID: 15252
// Function ID: 115126
// Dependencies: []

// Module 15252
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ SearchListItemTypes: closure_7, USER_ESTIMATED_ITEM_SIZE: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = arg1(dependencyMap[5]).SearchResultContentEntityTypes;
const jsx = arg1(dependencyMap[6]).jsx;
const tmp2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function PeopleScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const arg1 = searchContext;
  let obj = arg1(dependencyMap[7]);
  const importDefault = obj.getSearchContextId(searchContext);
  let obj1 = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => onPressGroupDMItem.getResults(closure_1));
  const dependencyMap = stateFromStores;
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => onPressDMItem.isInitialSearchQuery(searchContext));
  let closure_3 = stateFromStores1;
  const obj3 = arg1(dependencyMap[8]);
  obj = { placeholderHeight: callback1, numColumns: 1 };
  const fullscreenPlaceholderCount = arg1(dependencyMap[9]).useFullscreenPlaceholderCount(obj);
  const obj4 = arg1(dependencyMap[9]);
  const onPressGroupDMItem = arg1(dependencyMap[10]).useOnPressGroupDMItem({ searchContext });
  closure_5 = onPressGroupDMItem;
  const obj6 = arg1(dependencyMap[10]);
  const onPressDMItem = arg1(dependencyMap[10]).useOnPressDMItem({ searchContext });
  closure_6 = onPressDMItem;
  const items2 = [onPressDMItem, searchContext];
  const callback = importAllResult.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = stateFromStores1(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items2);
  const items3 = [onPressGroupDMItem, searchContext];
  const callback1 = importAllResult.useCallback((channelId, index) => {
    let obj = callback(stateFromStores[12]);
    obj = { searchContext, channelId, index, entityType: constants.CHANNEL };
    const result = obj.trackSearchResultClicked(obj);
    onPressGroupDMItem(channelId);
  }, items3);
  const items4 = [callback, callback1, stateFromStores1, fullscreenPlaceholderCount, stateFromStores];
  const memo = importAllResult.useMemo(() => {
    const items = [];
    const searchContext = items;
    const item = stateFromStores.forEach((title) => {
      title = title.title;
      let items = title;
      items = title.items;
      if (null != title) {
        if (items.length > 0) {
          let obj = { type: constants.SECTION };
          obj = { title };
          obj.props = obj;
          items.push(obj);
        }
      }
      const item = items.forEach((type) => {
        let firstMatch;
        let user;
        const title = arg1;
        if ("user" in type) {
          ({ user, firstMatch } = type);
          let obj = { type: constants.DM, section: title };
          obj = { type: type.type, user };
          let tmp8;
          if (user.username !== firstMatch) {
            tmp8 = firstMatch;
          }
          obj.nickname = tmp8;
          obj.onPress = function onPress(arg0) {
            return callback(arg0, arg1);
          };
          obj.props = obj;
          title.push(obj);
        } else {
          obj = { type: constants.GROUP_DM, section: title };
          const obj1 = {
            channel: type,
            onPress(arg0) {
                return callback2(arg0, arg1);
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
            let tmp4 = closure_7;
            obj.type = closure_7.MESSAGE_PLACEHOLDER;
            let _HermesInternal = HermesInternal;
            obj.key = "message-placeholder-" + num2;
            let arr = items.push(obj);
            num2 = num2 + 1;
            let tmp6 = closure_4;
          } while (num2 < closure_4);
        }
      }
    }
    return items;
  }, items4);
  const obj7 = arg1(dependencyMap[10]);
  const messageTabCountsErrorText = arg1(dependencyMap[13]).useMessageTabCountsErrorText({ searchContext });
  if (null != messageTabCountsErrorText) {
    obj = { text: messageTabCountsErrorText };
    let tmp13 = jsx(importDefault(dependencyMap[14]), obj);
  } else {
    obj1 = { data: memo };
    tmp13 = jsx(importDefault(dependencyMap[15]), obj1);
  }
  return tmp13;
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/search/native/components/tabs/pages/PeopleScreen.tsx");

export default memoResult;
