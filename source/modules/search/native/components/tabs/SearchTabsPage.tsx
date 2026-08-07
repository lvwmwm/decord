// Module ID: 15639
// Function ID: 15640
// Name: SearchTabsPage
// Dependencies: [32, 19, 17, 1372, 8337, 676, 21, 4302, 589, 5884, 4515, 10891, 11955, 15640, 15682, 15684, 15688, 15689, 15697, 15699, 15700, 15706, 15713, 38, 8672, 2]
// Exports: default

// Module 15639 (SearchTabsPage)
import _slicedToArray from "_slicedToArray";
import importAllResult from "module_15699";
import { View } from "module_15689";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchTabs } from "MessageEmbedTypes";
import { SearchTypes } from "ME";
import { jsx } from "module_15706";
import createCacheKey from "createCacheKey";

const require = arg1;
function SearchTabsPage(selectMediaTab) {
  let c1;
  let isFocused;
  let searchContext;
  let tab;
  let tmp2;
  let width;
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  let importDefault;
  [tmp2, c1] = callback(importAllResult.useState(isFocused), 2);
  const effect = importAllResult.useEffect(() => {
    const timerId = setTimeout(() => {
      callback(true);
    }, 10);
  }, []);
  let obj = searchContext(589);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (searchContext.type === outer1_8.GUILD_CHANNEL) {
      const channelId = tmp2.channelId;
    }
    return outer1_6.getChannel(channelId);
  });
  let obj1 = searchContext(5884);
  const isChannelSpoilerGated = obj1.useIsChannelSpoilerGated(stateFromStores);
  searchContext(4515);
  if (tmp2) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp9) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj14[0], channelId: obj14[1] } = searchContext);
          return jsx(importDefault(10891), { guildId: null, channelId: null });
        } else if (isChannelSpoilerGated) {
          obj = { guildId: null, channelId: null };
          ({ guildId: obj13[0], channelId: obj13[1] } = searchContext);
          return jsx(importDefault(11955), { guildId: null, channelId: null });
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      obj1 = { onJumpToMedia: null, searchContext: null, width: null };
      obj1[0] = selectMediaTab.selectMediaTab;
      obj1[1] = searchContext;
      obj1[2] = width;
      return jsx(importDefault(15640), { onJumpToMedia: null, searchContext: null, width: null });
    } else if (tmp11.PEOPLE === tab) {
      const obj2 = { searchContext: null };
      obj2[0] = searchContext;
      return jsx(importDefault(15682), { searchContext: null });
    } else if (tmp11.MEMBERS === tab) {
      const obj3 = { searchContext: null };
      obj3[0] = searchContext;
      return jsx(importDefault(15684), { searchContext: null });
    } else if (tmp11.GUILD_CHANNELS === tab) {
      const obj4 = { searchContext: null };
      obj4[0] = searchContext;
      return jsx(importDefault(15688), { searchContext: null });
    } else if (tmp11.MEDIA === tab) {
      const obj5 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj5[0] = tab;
      obj5[1] = searchContext;
      obj5[2] = isFocused;
      obj5[3] = width;
      return jsx(importDefault(15689), { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.FILES === tab) {
      const obj6 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj6[0] = tab;
      obj6[1] = searchContext;
      obj6[2] = isFocused;
      obj6[3] = width;
      return jsx(importDefault(15697), { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.LINKS === tab) {
      const obj7 = { tab: null, searchContext: null, isFocused: null, width: null };
      obj7[0] = tab;
      obj7[1] = searchContext;
      obj7[2] = isFocused;
      obj7[3] = width;
      return jsx(importDefault(15699), { tab: null, searchContext: null, isFocused: null, width: null });
    } else if (tmp11.THREADS === tab) {
      const obj8 = { searchContext: null };
      obj8[0] = searchContext;
      return jsx(tmp4(15700).SearchTabsThreadScreen, { searchContext: null });
    } else if (tmp11.MESSAGES === tab) {
      const obj9 = { tab: null, searchContext: null, isFocused: null };
      obj9[0] = tab;
      obj9[1] = searchContext;
      obj9[2] = isFocused;
      return jsx(importDefault(15706), { tab: null, searchContext: null, isFocused: null });
    } else if (tmp11.PINS === tab) {
      const obj10 = { tab: null, searchContext: null, isFocused: null };
      obj10[0] = tab;
      obj10[1] = searchContext;
      obj10[2] = isFocused;
      return jsx(importDefault(15713), { tab: null, searchContext: null, isFocused: null });
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
const result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  let searchContext;
  let width;
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = importAllResult.useContext(context);
  importDefault(38)(null != context, "[SearchTabsPageContext] Context should not be null.");
  let obj = { style: callback2().container, children: null };
  obj = { isFocused: importDefault(8672)(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width };
  obj[1] = <SearchTabsPage isFocused={importDefault(8672)(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View isFocused={importDefault(8672)(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
};
export const SearchTabsPageContext = context;
