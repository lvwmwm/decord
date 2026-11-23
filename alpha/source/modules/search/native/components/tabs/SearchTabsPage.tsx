// Module ID: 18733
// Function ID: 18734
// Name: SearchTabsPage
// Dependencies: [32, 19, 17, 4762, 8576, 1071, 21, 4913, 504, 6439, 6419, 11745, 11747, 18734, 18798, 18800, 18806, 18807, 18815, 18817, 18818, 18824, 18827, 38, 10598, 2]
// Exports: default

// Module 18733 (SearchTabsPage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1071 */;
import SearchConstants from "SearchConstants" /* 8576 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10598 */;
import GuildNSFWDefault from "GuildNSFW" /* 11745 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 11747 */;
import RecentScreenDefault from "RecentScreen" /* 18734 */;
import PeopleScreenDefault from "PeopleScreen" /* 18798 */;
import MembersScreenDefault from "MembersScreen" /* 18800 */;
import ChannelsScreenDefault from "ChannelsScreen" /* 18806 */;
import MediaScreenDefault from "MediaScreen" /* 18807 */;
import FilesScreenDefault from "FilesScreen" /* 18815 */;
import LinksScreenDefault from "LinksScreen" /* 18817 */;
import MessagesScreenDefault from "MessagesScreen" /* 18824 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 18827 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import createStyles from "createStyles" /* 4913 */;
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
  const obj2 = searchContext(6439);
  const isChannelSpoilerGated = obj2.useIsChannelSpoilerGated(stateFromStores);
  searchContext(6419);
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
      return jsx(tmp4(18818).SearchTabsThreadScreen, { searchContext });
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
