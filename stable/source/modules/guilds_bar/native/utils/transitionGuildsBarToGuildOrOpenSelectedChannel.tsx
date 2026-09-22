// Module ID: 16406
// Function ID: 16407
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [2011, 4458, 1074, 4495, 4494, 4647, 7445, 2]
// Exports: default

// Module 16406 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;

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
    const coerceGuildsRouteResult = tmp(4494).coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
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
    const tmpResult = tmp(4494);
  }
  if (null != tmp4) {
    tmp(4647).transitionToChannel(tmp4);
    const tmpResult3 = tmp(4647);
  } else {
    tmp(7445).transitionToGuild(arg0);
    const tmpResult4 = tmp(7445);
  }
};
