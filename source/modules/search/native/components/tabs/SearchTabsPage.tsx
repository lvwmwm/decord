// Module ID: 15207
// Function ID: 114758
// Name: SearchTabsPage
// Dependencies: []
// Exports: default

// Module 15207 (SearchTabsPage)
function SearchTabsPage(selectMediaTab) {
  let isFocused;
  let searchContext;
  let tab;
  let width;
  ({ tab, searchContext } = selectMediaTab);
  const arg1 = searchContext;
  ({ isFocused, width } = selectMediaTab);
  const tmp = callback(importAllResult.useState(isFocused), 2);
  const importDefault = tmp[1];
  const effect = importAllResult.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(true);
    }, 10);
  }, []);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (searchContext.type === constants.GUILD_CHANNEL) {
      const channelId = searchContext.channelId;
    }
    return channel.getChannel(channelId);
  });
  let obj1 = arg1(dependencyMap[9]);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  arg1(dependencyMap[10]);
  if (tmp[0]) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp6) {
          obj = {};
          ({ guildId: obj14.guildId, channelId: obj14.channelId } = searchContext);
          return jsx(importDefault(dependencyMap[11]), obj);
        } else if (isChannelSpoilerGated) {
          obj = {};
          ({ guildId: obj13.guildId, channelId: obj13.channelId } = searchContext);
          return jsx(importDefault(dependencyMap[12]), obj);
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width };
      return jsx(importDefault(dependencyMap[13]), obj1);
    } else if (SearchTabs.PEOPLE === tab) {
      const obj2 = { searchContext };
      return jsx(importDefault(dependencyMap[14]), obj2);
    } else if (SearchTabs.MEMBERS === tab) {
      const obj3 = { searchContext };
      return jsx(importDefault(dependencyMap[15]), obj3);
    } else if (SearchTabs.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext };
      return jsx(importDefault(dependencyMap[16]), obj4);
    } else if (SearchTabs.MEDIA === tab) {
      const obj5 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(dependencyMap[17]), obj5);
    } else if (SearchTabs.FILES === tab) {
      const obj6 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(dependencyMap[18]), obj6);
    } else if (SearchTabs.LINKS === tab) {
      const obj7 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(dependencyMap[19]), obj7);
    } else if (SearchTabs.THREADS === tab) {
      const obj8 = { searchContext };
      return jsx(arg1(dependencyMap[20]).SearchTabsThreadScreen, obj8);
    } else if (SearchTabs.MESSAGES === tab) {
      const obj9 = { tab, searchContext, isFocused };
      return jsx(importDefault(dependencyMap[21]), obj9);
    } else if (SearchTabs.PINS === tab) {
      const obj10 = { tab, searchContext, isFocused };
      return jsx(importDefault(dependencyMap[22]), obj10);
    } else {
      return null;
    }
  } else {
    return null;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const SearchTabs = arg1(dependencyMap[4]).SearchTabs;
const SearchTypes = arg1(dependencyMap[5]).SearchTypes;
const jsx = arg1(dependencyMap[6]).jsx;
let closure_10 = arg1(dependencyMap[7]).createStyles({ container: { flex: 1 } });
const context = importAllResult.createContext(undefined);
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  let searchContext;
  let width;
  tab = tab.tab;
  ({ searchContext, width } = tab);
  const context = importAllResult.useContext(context);
  importDefault(dependencyMap[23])(null != context, "[SearchTabsPageContext] Context should not be null.");
  let obj = { style: callback2().container };
  obj = { isFocused: importDefault(dependencyMap[24])(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj.children = <SearchTabsPage {...obj} />;
  return <View {...obj} />;
};
export const SearchTabsPageContext = context;
