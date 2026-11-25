// Module ID: 17671
// Function ID: 17672
// Name: FavoritesGuildChannelSortModal
// Dependencies: [19, 17672, 4766, 1071, 21, 17673, 1628, 1112, 17674, 17670, 7092, 2]
// Exports: default

// Module 17671 (FavoritesGuildChannelSortModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import ChannelRecord from "ChannelRecord" /* 4766 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 17673 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 17674 */;
import react from "react" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 17672 */;
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
  return jsx(bottom(7092).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};
