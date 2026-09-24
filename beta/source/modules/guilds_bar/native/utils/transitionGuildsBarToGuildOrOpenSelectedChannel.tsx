// Module ID: 16660
// Function ID: 16661
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [2099, 4612, 1078, 4649, 4648, 4801, 7618, 2]
// Exports: default

// Module 16660 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import RootNavigationRef from "RootNavigationRef" /* 4649 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4612 */;

require = fn;
const ME = fn(1078).ME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    const coerceGuildsRouteResult = tmp(4648).coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    let drawerOpen;
    if (coerceGuildsRouteResult != null) {
      const params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (true !== drawerOpen) {
      let tmp7 = null;
      if (arg0 !== ME) {
        tmp7 = arg0;
      }
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      let tmp10;
      if (guildId === tmp7) {
        const channelId = SelectedChannelStore.getChannelId(arg0, false);
        tmp10 = channelId;
      }
      tmp4 = tmp10;
    }
    const tmpResult = tmp(4648);
  }
  if (null != tmp4) {
    tmp(4801).transitionToChannel(tmp4);
    const tmpResult3 = tmp(4801);
  } else {
    tmp(7618).transitionToGuild(arg0);
    const tmpResult4 = tmp(7618);
  }
};
