// Module ID: 18788
// Function ID: 18789
// Name: SearchTabsPage
// Dependencies: [32, 19, 17, 4672, 8488, 1072, 21, 4823, 504, 6347, 6327, 11705, 11707, 18789, 18853, 18855, 18861, 18862, 18870, 18872, 18873, 18879, 18882, 38, 10558, 2]
// Exports: default

// Module 18788 (SearchTabsPage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1072 */;
import SearchConstants from "SearchConstants" /* 8488 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10558 */;
import GuildNSFWDefault from "GuildNSFW" /* 11705 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 11707 */;
import RecentScreenDefault from "RecentScreen" /* 18789 */;
import PeopleScreenDefault from "PeopleScreen" /* 18853 */;
import MembersScreenDefault from "MembersScreen" /* 18855 */;
import ChannelsScreenDefault from "ChannelsScreen" /* 18861 */;
import MediaScreenDefault from "MediaScreen" /* 18862 */;
import FilesScreenDefault from "FilesScreen" /* 18870 */;
import LinksScreenDefault from "LinksScreen" /* 18872 */;
import MessagesScreenDefault from "MessagesScreen" /* 18879 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 18882 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let importDefault;

function SearchTabsPage(selectMediaTab) {
  let c1;
  let isFocused;
  let searchContext;
  let tab;
  let tmp2;
  let width;
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  importDefault = undefined;
  selectMediaTab = selectMediaTab.selectMediaTab;
  [tmp2, c1] = _slicedToArray(react.useState(isFocused), 2);
  const tmp = _slicedToArray(react.useState(isFocused), 2);
  const effect = react.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_1(true);
    }, 10);
  }, []);
  const items = [ChannelStore];
  const obj = searchContext(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channelId;
    const getChannel = ChannelStore.getChannel;
    if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
      channelId = tmp2.channelId;
    }
    return getChannel(channelId);
  });
  const obj2 = searchContext(6347);
  const isChannelSpoilerGated = obj2.useIsChannelSpoilerGated(stateFromStores);
  searchContext(6327);
  const tmp4 = searchContext;
  if (tmp2) {
    if (tab !== SearchTabs.MEMBERS) {
      if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
        if (tmp9) {
          ({ guildId: obj14.guildId, channelId: obj14.channelId } = searchContext);
          return jsx(GuildNSFWDefault, { guildId: null, channelId: null });
        } else if (isChannelSpoilerGated) {
          ({ guildId: obj13.guildId, channelId: obj13.channelId } = searchContext);
          return jsx(ChannelSpoilerDefault, { guildId: null, channelId: null });
        }
      }
    }
    if (SearchTabs.RECENT === tab) {
      return jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab, searchContext, width });
    } else if (SearchTabs.PEOPLE === tab) {
      return jsx(PeopleScreenDefault, { searchContext });
    } else if (SearchTabs.MEMBERS === tab) {
      return jsx(MembersScreenDefault, { searchContext });
    } else if (SearchTabs.GUILD_CHANNELS === tab) {
      return jsx(ChannelsScreenDefault, { searchContext });
    } else if (SearchTabs.MEDIA === tab) {
      return jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.FILES === tab) {
      return jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.LINKS === tab) {
      return jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
    } else if (SearchTabs.THREADS === tab) {
      return jsx(tmp4(18873).SearchTabsThreadScreen, { searchContext });
    } else if (SearchTabs.MESSAGES === tab) {
      return jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
    } else if (SearchTabs.PINS === tab) {
      return jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
    } else {
      return null;
    }
  } else {
    return null;
  }
}
const View = react_native.View;
const SearchTabs = SearchConstants.SearchTabs;
const SearchTypes = Constants.SearchTypes;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let context = react.createContext(undefined);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  let searchContext;
  let width;
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = react.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  ({ isFocused: useStateFromSharedValueDefault(context.selectedTab) === tab, selectMediaTab: context.selectMediaTab, tab, searchContext, width });
  return <View style={closure_10().container}>{null}</View>;
};
export const SearchTabsPageContext = context;
