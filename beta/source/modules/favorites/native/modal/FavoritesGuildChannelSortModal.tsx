// Module ID: 15774
// Function ID: 15775
// Name: FavoritesGuildChannelSortModal
// Dependencies: [19, 15775, 2049, 1074, 21, 15776, 1613, 1115, 15777, 15773, 6421, 2]
// Exports: default

// Module 15774 (FavoritesGuildChannelSortModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 15776 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 15777 */;
import react from "react" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 15775 */;
import size from "module_2" /* 2 */;

const ALL_CHANNEL_TYPES = ChannelRecord.ALL_CHANNEL_TYPES;
const FAVORITES = Constants.FAVORITES;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  let args;
  let guildId;
  const effect = react.useEffect(() => {
    const guild = GuildSettingsModalChannelsStore.initGuild(guildId);
    const items = [...closure_1_5];
    const tmp2 = GuildSettingsModalChannelsActionCreatorsDefault;
    tmp2.startReordering.apply(items);
    return () => {
      const obj = closure_1_1(closure_1_2[5]);
      obj.stopReordering();
      const obj2 = closure_1_1(closure_1_2[5]);
      obj2.terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let items = [bottom];
  const screens = react.useMemo(() => {
    let intl;
    let obj2;
    const obj = { FAVORITES_GUILD_CHANNEL_SORT: obj2 };
    obj2 = {
      title: intl.string(intl2.t.OGiMXJ),
      render() {
        const obj2 = { paddingBottom: 16 + closure_1_0 };
        GuildSettingsModalChannelsDefault;
        return <tmp guildId={guildId} contentContainerStyle={obj2} onDone={bottom(dependencyMap[9]).closeFavoritesGuildChannelSortModal} />;
      }
    };
    intl = intl2.intl;
    return obj;
  }, items);
  return jsx(bottom(6421).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};
