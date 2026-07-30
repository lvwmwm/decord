// Module ID: 14961
// Function ID: 14962
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: [1931, 4006, 676, 4041, 4040, 4197, 6687, 2]
// Exports: default

// Module 14961 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import handleConnectionOpen from "handleConnectionOpen";
import closure_3 from "handleConnectionOpen";
import { ME } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const rootNavigationRef = require(4041) /* getRootNavigationRef */.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let tmpResult = tmp(4040);
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
      guildId = guildId.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      let tmp10;
      if (guildId === tmp7) {
        channelId = channelId.getChannelId(arg0, false);
        tmp10 = channelId;
      }
      tmp4 = tmp10;
    }
  }
  if (null != tmp4) {
    tmpResult = tmp(4197);
    tmpResult.transitionToChannel(tmp4);
  } else {
    tmp(6687).transitionToGuild(arg0);
    const tmpResult1 = tmp(6687);
  }
};
