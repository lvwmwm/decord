// Module ID: 16484
// Function ID: 16485
// Name: FavoritesGuildChannelSortModal
// Dependencies: [19, 16485, 2045, 1074, 21, 16486, 1612, 1115, 16487, 16483, 7277, 2]
// Exports: default

// Module 16484 (FavoritesGuildChannelSortModal)
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16486 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 16487 */;
import noop from "module_19" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16485 */;

require = fn;
const ALL_CHANNEL_TYPES = fn(2045).ALL_CHANNEL_TYPES;
const FAVORITES = fn(1074).FAVORITES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  const effect = noop.useEffect(() => {
    const guild = GuildSettingsModalChannelsStore.initGuild(guildId);
    const items = [...closure_1_5];
    GuildSettingsModalChannelsActionCreatorsDefault.startReordering.apply(items);
    return () => {
      closure_1_1(16486).stopReordering();
      const obj = closure_1_1(16486);
      closure_1_1(16486).terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let items = [bottom];
  const screens = noop.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    const obj2 = { title: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.OGiMXJ);
    obj2.render = function render() {
      const obj = { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(16483).closeFavoritesGuildChannelSortModal };
      return jsx(GuildSettingsModalChannelsDefault, { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(16483).closeFavoritesGuildChannelSortModal });
    };
    obj.FAVORITES_GUILD_CHANNEL_SORT = obj2;
    return obj;
  }, items);
  return jsx(bottom(7277).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};
