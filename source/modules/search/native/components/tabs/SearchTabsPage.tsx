// Module ID: 16562
// Function ID: 16563
// Name: SearchTabsPage
// Dependencies: [32, 19, 17, 1386, 7810, 673, 21, 4481, 586, 7267, 4739, 12597, 12599, 16563, 16605, 16607, 16614, 16615, 16623, 16625, 16626, 16632, 16639, 38, 8195, 2]
// Exports: default

// Module 16562 (SearchTabsPage)
import _modDef38 from "module_38" /* 38 */;
import mapDefault from "map" /* 8195 */;
import GuildNSFWDefault from "GuildNSFW" /* 12597 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 12599 */;
import ClearAllHistoryDefault from "ClearAllHistory" /* 16563 */;
import _modDef16605 from "module_16605" /* 16605 */;
import SearchableMembersScreenDefault from "SearchableMembersScreen" /* 16607 */;
import _modDef16614 from "module_16614" /* 16614 */;
import _modDef16615 from "module_16615" /* 16615 */;
import _modDef16623 from "module_16623" /* 16623 */;
import _modDef16625 from "module_16625" /* 16625 */;
import _modDef16632 from "module_16632" /* 16632 */;
import InitialPinsScreenDefault from "InitialPinsScreen" /* 16639 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1386 */;
import { SearchTabs } from "MessageEmbedTypes" /* 7810 */;
import { SearchTypes } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
function SearchTabsPage(selectMediaTab) {
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  importDefault = undefined;
  [tmp2, c1] = callback(importAllResult.useState(isFocused), 2);
  const effect = importAllResult.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(true);
    }, 10);
  }, []);
  let obj = searchContext(586);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (searchContext.type === closure_1_8.GUILD_CHANNEL) {
      const channelId = tmp2.channelId;
    }
    return closure_1_6.getChannel(channelId);
  });
  obj1 = searchContext(7267);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  searchContext(4739);
  if (tmp2) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp9) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj14[0], channelId: obj14[1] } = searchContext);
          return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
        } else if (isChannelSpoilerGated) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj13[0], channelId: obj13[1] } = searchContext);
          return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: null, searchContext: null, width: null };
      obj1[0] = selectMediaTab.selectMediaTab;
      obj1[1] = searchContext;
      obj1[2] = width;
      return jsx(ClearAllHistoryDefault, { onJumpToMedia: null, searchContext: null, width: null });
    } else if (tmp11.PEOPLE === tab) {
      const obj2 = { searchContext: null };
      obj2[0] = searchContext;
      return jsx(_modDef16605, { searchContext: null });
    } else if (tmp11.MEMBERS === tab) {
      const obj3 = { searchContext: null };
      obj3[0] = searchContext;
      return jsx(SearchableMembersScreenDefault, { searchContext: null });
    } else if (tmp11.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext: null };
      obj4[0] = searchContext;
      return jsx(_modDef16614, { searchContext: null });
    } else if (tmp11.MEDIA === tab) {
      const obj5 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj5[0] = tab;
      obj5[1] = searchContext;
      obj5[2] = isFocused;
      obj5[3] = width;
      return jsx(_modDef16615, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.FILES === tab) {
      const obj6 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj6[0] = tab;
      obj6[1] = searchContext;
      obj6[2] = isFocused;
      obj6[3] = width;
      return jsx(_modDef16623, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.LINKS === tab) {
      const obj7 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj7[0] = tab;
      obj7[1] = searchContext;
      obj7[2] = isFocused;
      obj7[3] = width;
      return jsx(_modDef16625, { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.THREADS === tab) {
      const obj8 = { searchContext: null };
      obj8[0] = searchContext;
      return jsx(tmp4(16626).SearchTabsThreadScreen, { searchContext: null });
    } else if (tmp11.MESSAGES === tab) {
      const obj9 = { tab: null, searchContext: null, isFocused: null };
      obj9[0] = tab;
      obj9[1] = searchContext;
      obj9[2] = isFocused;
      return jsx(_modDef16632, { tab: null, searchContext: null, isFocused: null });
    } else if (tmp11.PINS === tab) {
      const obj10 = { tab: null, searchContext: null, isFocused: null };
      obj10[0] = tab;
      obj10[1] = searchContext;
      obj10[2] = isFocused;
      return jsx(InitialPinsScreenDefault, { tab: null, searchContext: null, isFocused: null });
    } else {
      return null;
    }
  } else {
    return null;
  }
  const tmp = callback(importAllResult.useState(isFocused), 2);
  tmp4 = searchContext;
}
let c4 = importAllResult;
let closure_10 = createCacheKey.createStyles({ container: { flex: 1 } });
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = importAllResult.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  let obj = { style: callback2().container, children: null };
  obj = { isFocused: mapDefault(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj[1] = <SearchTabsPage isFocused={mapDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View isFocused={mapDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
};
export const SearchTabsPageContext = context;
