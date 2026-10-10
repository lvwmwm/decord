// Module ID: 16742
// Function ID: 16743
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [2116, 4939, 1085, 4977, 4976, 5103, 7052, 2]
// Exports: default

// Module 16742 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import Constants from "Constants" /* 1085 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import transitionToChannel from "transitionToChannel" /* 5103 */;
import transitionToGuild from "transitionToGuild" /* 7052 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import size from "module_2" /* 2 */;

const ME = Constants.ME;
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    const tmpResult = NavigationRouteUtils;
    const coerceGuildsRouteResult = tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
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
  }
  if (null != tmp4) {
    const tmpResult3 = transitionToChannel;
    tmpResult3.transitionToChannel(tmp4);
  } else {
    const tmpResult4 = transitionToGuild;
    tmpResult4.transitionToGuild(arg0);
  }
};
