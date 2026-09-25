// Module ID: 15919
// Function ID: 15920
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [2098, 4652, 1074, 4689, 4688, 4840, 6755, 2]
// Exports: default

// Module 15919 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4652 */;

require = fn;
const ME = fn(1074).ME;
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
    const coerceGuildsRouteResult = tmp(4688).coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
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
    const tmpResult = tmp(4688);
  }
  if (null != tmp4) {
    tmp(4840).transitionToChannel(tmp4);
    const tmpResult3 = tmp(4840);
  } else {
    tmp(6755).transitionToGuild(arg0);
    const tmpResult4 = tmp(6755);
  }
};
