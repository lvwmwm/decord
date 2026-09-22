// Module ID: 17121
// Function ID: 17122
// Name: SearchTabsPage
// Dependencies: [32, 19, 17, 2042, 8125, 1074, 21, 4757, 504, 7574, 4967, 12922, 12924, 17122, 17169, 17171, 17178, 17179, 17187, 17189, 17190, 17196, 17203, 38, 8542, 2]
// Exports: default

// Module 17121 (SearchTabsPage)
import _modDef38 from "module_38" /* 38 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8542 */;
import GuildNSFWDefault from "GuildNSFW" /* 12922 */;
import ChannelSpoilerDefault from "ChannelSpoiler" /* 12924 */;
import RecentScreenDefault from "RecentScreen" /* 17122 */;
import PeopleScreenDefault from "PeopleScreen" /* 17169 */;
import MembersScreenDefault from "MembersScreen" /* 17171 */;
import ChannelsScreenDefault from "ChannelsScreen" /* 17178 */;
import MediaScreenDefault from "MediaScreen" /* 17179 */;
import FilesScreenDefault from "FilesScreen" /* 17187 */;
import LinksScreenDefault from "LinksScreen" /* 17189 */;
import MessagesScreenDefault from "MessagesScreen" /* 17196 */;
import messages_PinsScreenDefault from "messages/PinsScreen" /* 17203 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2042 */;

const require = fn;
function SearchTabsPage(selectMediaTab) {
  ({ tab, searchContext } = selectMediaTab);
  ({ isFocused, width } = selectMediaTab);
  importDefault = undefined;
  [tmp2, c1] = noop.useState(isFocused);
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_1(true);
    }, 10);
  }, []);
  const tmp = _slicedToArray(noop.useState(isFocused), 2);
  const tmp4 = searchContext;
  const items = [ChannelStore];
  const stateFromStores = searchContext(504).useStateFromStores(items, () => {
    if (searchContext.type === SearchTypes.GUILD_CHANNEL) {
      const channelId = tmp2.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const obj = searchContext(504);
  const isChannelSpoilerGated = searchContext(7574).useIsChannelSpoilerGated(stateFromStores);
  searchContext(4967);
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
      const obj5 = { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width };
      return jsx(RecentScreenDefault, { onJumpToMedia: selectMediaTab.selectMediaTab, searchContext, width });
    } else if (tmp11.PEOPLE === tab) {
      const obj6 = { searchContext };
      return jsx(PeopleScreenDefault, { searchContext });
    } else if (tmp11.MEMBERS === tab) {
      const obj7 = { searchContext };
      return jsx(MembersScreenDefault, { searchContext });
    } else if (tmp11.GUILD_CHANNELS === tab) {
      const obj8 = { searchContext };
      return jsx(ChannelsScreenDefault, { searchContext });
    } else if (tmp11.MEDIA === tab) {
      const obj9 = { tab, searchContext, isFocused, width };
      return jsx(MediaScreenDefault, { tab, searchContext, isFocused, width });
    } else if (tmp11.FILES === tab) {
      const obj10 = { tab, searchContext, isFocused, width };
      return jsx(FilesScreenDefault, { tab, searchContext, isFocused, width });
    } else if (tmp11.LINKS === tab) {
      const obj11 = { tab, searchContext, isFocused, width };
      return jsx(LinksScreenDefault, { tab, searchContext, isFocused, width });
    } else if (tmp11.THREADS === tab) {
      const obj12 = { searchContext };
      return jsx(tmp4(17190).SearchTabsThreadScreen, { searchContext });
    } else if (tmp11.MESSAGES === tab) {
      const obj26 = { tab, searchContext, isFocused };
      return jsx(MessagesScreenDefault, { tab, searchContext, isFocused });
    } else if (tmp11.PINS === tab) {
      const obj27 = { tab, searchContext, isFocused };
      return jsx(messages_PinsScreenDefault, { tab, searchContext, isFocused });
    } else {
      return null;
    }
  } else {
    return null;
  }
  const obj2 = searchContext(7574);
}
const View = fn(17).View;
const SearchTabs = fn(8125).SearchTabs;
const SearchTypes = fn(1074).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsPage.tsx");

export default function ConnectedSearchTabsPage(tab) {
  tab = tab.tab;
  ({ searchContext, width } = tab);
  context = noop.useContext(context);
  _modDef38(null != context, "[SearchTabsPageContext] Context should not be null.");
  const obj = { style: closure_10().container, children: null };
  const tmp3 = closure_10();
  obj.children = <SearchTabsPage isFocused={useStateFromSharedValueDefault(context.selectedTab) === tab} selectMediaTab={context.selectMediaTab} tab={tab} searchContext={searchContext} width={width} />;
  return <View style={closure_10().container}>{null}</View>;
};
export const SearchTabsPageContext = context;
