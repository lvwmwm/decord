// Module ID: 14715
// Function ID: 111010
// Name: transitionGuildsBarToGuildOrOpenSelectedChannel
// Dependencies: []
// Exports: default

// Module 14715 (transitionGuildsBarToGuildOrOpenSelectedChannel)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const rootNavigationRef = require(dependencyMap[0]).getRootNavigationRef();
  let isReadyResult;
  if (null != rootNavigationRef) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp2;
  if (true === isReadyResult) {
    const coerceGuildsRouteResult = require(dependencyMap[1]).coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    if (null != coerceGuildsRouteResult) {
      const params = coerceGuildsRouteResult.params;
      let drawerOpen;
      if (null != params) {
        drawerOpen = params.drawerOpen;
      }
      if (true !== drawerOpen) {
        const params2 = coerceGuildsRouteResult.params;
        let guildId;
        if (null != params2) {
          guildId = params2.guildId;
        }
        if (guildId === arg0) {
          const params3 = coerceGuildsRouteResult.params;
          let channelId;
          if (null != params3) {
            channelId = params3.channelId;
          }
          tmp2 = channelId;
        }
      }
    }
    const obj5 = require(dependencyMap[1]);
  }
  if (null != tmp2) {
    require(dependencyMap[2]).transitionToChannel(tmp2);
    const obj4 = require(dependencyMap[2]);
  } else {
    require(dependencyMap[3]).transitionToGuild(arg0);
    const obj3 = require(dependencyMap[3]);
  }
};
