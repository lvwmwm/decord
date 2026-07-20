// Module ID: 10086
// Function ID: 78130
// Name: ForumChannelCloseSearchButton
// Dependencies: []

// Module 10086 (ForumChannelCloseSearchButton)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ inputContainer: {}, cancelButtonContainer: { paddingLeft: 8 } });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[5]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const tmp = callback();
  const route = arg1(dependencyMap[5]).useRoute();
  const dependencyMap = route;
  const obj2 = arg1(dependencyMap[5]);
  const items = [navigation, route];
  const canSearchForumPostsByChannelId = arg1(dependencyMap[6]).useCanSearchForumPostsByChannelId(channelId);
  const effect = importAllResult.useEffect(() => () => {
    if (null != options) {
      options.setOptions(callback(closure_2[7]).getDefaultChannelStackHeaderProps(options, closure_2));
      const obj = callback(closure_2[7]);
    }
  }, items);
  let tmp6 = null;
  if (canSearchForumPostsByChannelId) {
    obj = { style: tmp.cancelButtonContainer };
    obj = {};
    const intl = arg1(dependencyMap[9]).intl;
    obj.text = intl.string(arg1(dependencyMap[9]).t.ETE/oC);
    obj.onPress = function onPress() {
      if (null != channelId) {
        const result = navigation(route[10]).updateForumSearchQuery(channelId, null);
        const obj = navigation(route[10]);
      }
    };
    obj.children = jsx(arg1(dependencyMap[8]).Button, obj);
    tmp6 = <View {...obj} />;
  }
  return tmp6;
});
const memoResult1 = importAllResult.memo((channelId) => {
  let placeholder;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ guildId: closure_1, placeholder } = channelId);
  let obj = arg1(dependencyMap[6]);
  const canSearchForumPostsByChannelId = obj.useCanSearchForumPostsByChannelId(channelId);
  const tmp = callback();
  const items = [closure_5];
  const items1 = [channelId];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items, () => {
    let searchQuery = null;
    if (null != channelId) {
      searchQuery = searchQuery.getSearchQuery(channelId);
    }
    return searchQuery;
  }, items1);
  let tmp4Result = null;
  if (canSearchForumPostsByChannelId) {
    tmp4Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.inputContainer };
      obj = {
        size: "sm",
        defaultValue: stateFromStores,
        onChange(query) {
              if (null != channelId) {
                const result = callback(closure_2[10]).updateForumSearchQuery(channelId, query);
                const obj = callback(closure_2[10]);
              }
            }
      };
      if (null == placeholder) {
        const intl = arg1(dependencyMap[9]).intl;
        placeholder = intl.string(arg1(dependencyMap[9]).t.Iy2gnS);
      }
      obj.placeholder = placeholder;
      obj.autoFocus = 0 === stateFromStores.length;
      obj.onClear = function onClear() {
        let tmp = null != callback;
        if (tmp) {
          tmp = null != channelId;
        }
        if (tmp) {
          let obj = channelId(closure_2[13]);
          obj = { guildId: callback, channelId };
          const result = obj.trackForumSearchCleared(obj);
        }
        if (null != channelId) {
          const result1 = callback(closure_2[10]).updateForumSearchQuery(channelId, "");
          const obj3 = callback(closure_2[10]);
        }
      };
      obj.grow = false;
      obj.children = jsx(arg1(dependencyMap[12]).SearchField, obj);
      tmp4Result = tmp4(View, obj);
      const tmp5 = View;
    }
  }
  return tmp4Result;
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/forums/native/ForumChannelSearch.tsx");

export const ForumChannelCloseSearchButton = memoResult;
export const ForumChannelSearchInput = memoResult1;
