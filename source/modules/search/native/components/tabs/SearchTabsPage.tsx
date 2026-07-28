// Module ID: 15444
// Function ID: 117663
// Name: SearchTabsPage
// Dependencies: [57, 31, 27, 1348, 9077, 653, 33, 4165, 566, 7704, 4380, 10011, 10013, 15445, 15486, 15488, 15492, 15493, 15501, 15503, 15504, 15510, 15517, 44, 8094, 2]
// Exports: default

// Module 15444 (SearchTabsPage)
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
  let obj1 = searchContext(7704);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  searchContext(4380);
  if (tmp[0]) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp6) {
          obj = {};
          ({ guildId: obj14.guildId, channelId: obj14.channelId } = searchContext);
          return jsx(importDefault(10011), {});
        } else if (isChannelSpoilerGated) {
          obj = {};
          ({ guildId: obj13.guildId, channelId: obj13.channelId } = searchContext);
          return jsx(importDefault(10013), {});
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width };
      return jsx(importDefault(15445), { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width });
    } else if (SearchTabs.PEOPLE === tab) {
      const obj2 = { searchContext };
      return jsx(importDefault(15486), { searchContext });
    } else if (SearchTabs.MEMBERS === tab) {
      const obj3 = { searchContext };
      return jsx(importDefault(15488), { searchContext });
    } else if (SearchTabs.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext };
      return jsx(importDefault(15492), { searchContext });
    } else if (SearchTabs.MEDIA === tab) {
      const obj5 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(15493), { tab, searchContext, isFocused, width });
    } else if (SearchTabs.FILES === tab) {
      const obj6 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(15501), { tab, searchContext, isFocused, width });
    } else if (SearchTabs.LINKS === tab) {
      const obj7 = { tab, searchContext, isFocused, width };
      return jsx(importDefault(15503), { tab, searchContext, isFocused, width });
    } else if (SearchTabs.THREADS === tab) {
      const obj8 = { searchContext };
      return jsx(searchContext(15504).SearchTabsThreadScreen, { searchContext });
    } else if (SearchTabs.MESSAGES === tab) {
      const obj9 = { tab, searchContext, isFocused };
      return jsx(importDefault(15510), { tab, searchContext, isFocused });
    } else if (SearchTabs.PINS === tab) {
      const obj10 = { tab, searchContext, isFocused };
      return jsx(importDefault(15517), { tab, searchContext, isFocused });
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
  obj = { isFocused: importDefault(8094)(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj.children = <SearchTabsPage isFocused={importDefault(8094)(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View isFocused={importDefault(8094)(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
};
export const SearchTabsPageContext = context;
