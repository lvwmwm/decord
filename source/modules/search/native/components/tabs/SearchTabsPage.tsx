// Module ID: 15391
// Function ID: 117455
// Name: SearchTabsPage
// Dependencies: [57, 31, 27, 1348, 9033, 653, 33, 4131, 566, 7668, 4346, 9971, 9973, 15392, 15434, 15436, 15440, 15441, 15449, 15451, 15452, 15458, 15465, 44, 8056, 2]
// Exports: default

// Module 15391 (SearchTabsPage)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SearchTabs } from "SearchAutocompleteSelectAnalyticsActions";
import { SearchTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function SearchTabsPage(selectMediaTab) {
  let isFocused;
  let searchContext;
  let tab;
  let width;
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  const tmp = callback(importAllResult.useState(isFocused), 2);
  const importDefault = tmp[1];
  const effect = importAllResult.useEffect(() => {
    const timerId = setTimeout(() => {
      outer1_1(true);
    }, 10);
  }, []);
  let obj = searchContext(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (searchContext.type === outer1_8.GUILD_CHANNEL) {
      const channelId = searchContext.channelId;
    }
    return outer1_6.getChannel(channelId);
  });
  let obj1 = searchContext(7668);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  searchContext(4346);
  if (tmp[0]) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp6) {
          obj = {};
          ({ guildId: obj14.guildId, channelId: obj14.channelId } = searchContext);
          return jsx(importDefault(9971), {});
        } else if (isChannelSpoilerGated) {
          obj = {};
          ({ guildId: obj13.guildId, channelId: obj13.channelId } = searchContext);
          return jsx(importDefault(9973), {});
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width };
      return jsx(importDefault(15392), { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width });
    } else if (SearchTabs.PEOPLE === tab) {
      const obj2 = { searchContext };
      return jsx(importDefault(15434), { searchContext });
    } else if (SearchTabs.MEMBERS === tab) {
      const obj3 = { searchContext };
      return jsx(importDefault(15436), { searchContext });
    } else if (SearchTabs.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext };
      return jsx(importDefault(15440), { searchContext });
    } else if (SearchTabs.MEDIA === tab) {
      const obj5 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(15441), { tab, searchContext, isFocused, width });
    } else if (SearchTabs.FILES === tab) {
      const obj6 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(15449), { tab, searchContext, isFocused, width });
    } else if (SearchTabs.LINKS === tab) {
      const obj7 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(15451), { tab, searchContext, isFocused, width });
    } else if (SearchTabs.THREADS === tab) {
      const obj8 = { searchContext };
      return jsx(searchContext(15452).SearchTabsThreadScreen, { searchContext });
    } else if (SearchTabs.MESSAGES === tab) {
      const obj9 = { tab, searchContext, isFocused };
      return jsx(importDefault(15458), { tab, searchContext, isFocused });
    } else if (SearchTabs.PINS === tab) {
      const obj10 = { tab, searchContext, isFocused };
      return jsx(importDefault(15465), { tab, searchContext, isFocused });
    } else {
      return null;
    }
  } else {
    return null;
  }
}
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1 } });
let context = importAllResult.createContext(undefined);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  let searchContext;
  let width;
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = importAllResult.useContext(context);
  importDefault(44)(null != context, "[SearchTabsPageContext] Context should not be null.");
  let obj = { style: callback2().container };
  obj = { isFocused: importDefault(8056)(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj.children = <SearchTabsPage isFocused={importDefault(8056)(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View isFocused={importDefault(8056)(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
};
export const SearchTabsPageContext = context;
