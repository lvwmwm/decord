// Module ID: 18574
// Function ID: 18575
// Name: FavoritesGuildChannelSortModal
// Dependencies: [19, 18575, 5023, 1072, 21, 18576, 1627, 1113, 18577, 18573, 7264, 2]
// Exports: default

// Module 18574 (FavoritesGuildChannelSortModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ChannelRecord from "ChannelRecord" /* 5023 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 18576 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 18577 */;
import react from "react" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 18575 */;
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
  return jsx(bottom(7264).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};
