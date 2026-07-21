// Module ID: 10378
// Function ID: 80041
// Name: isSelectedFromHomeChannel
// Dependencies: []
// Exports: default

// Module 10378 (isSelectedFromHomeChannel)
importDefault(dependencyMap[0]);
importDefault(dependencyMap[1]);
const isGuildHomeChannel = arg1(dependencyMap[2]).isGuildHomeChannel;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_onboarding_home/isSelectedFromHomeChannel.native.tsx");

export default function isSelectedFromHomeChannel(id) {
  let coerceChannelRouteResult1;
  const rootNavigationRef = arg1(dependencyMap[3]).getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      const rootState = rootNavigationRef.getRootState();
      if (null == rootState) {
        return false;
      } else {
        const coerceMainRouteResult = arg1(dependencyMap[4]).coerceMainRoute(rootState.routes[rootState.index]);
        if (null == coerceMainRouteResult) {
          return false;
        } else {
          const state = coerceMainRouteResult.state;
          if (null == state) {
            return false;
          } else {
            let index = state.index;
            if (index >= 0) {
              while (true) {
                let tmp2 = state.routes[index];
                let tmp3 = tmp13;
                if (null != tmp2) {
                  let tmp4 = arg1;
                  let tmp5 = dependencyMap;
                  let obj3 = arg1(dependencyMap[4]);
                  let coerceChannelRouteResult = obj3.coerceChannelRoute(tmp2);
                  let tmp7 = coerceChannelRouteResult;
                  tmp3 = tmp13;
                  if (null != coerceChannelRouteResult) {
                    let tmp8 = coerceChannelRouteResult;
                    tmp3 = tmp13;
                    if (coerceChannelRouteResult.params.channelId === id.id) {
                      let tmp9 = arg1;
                      let tmp10 = dependencyMap;
                      let obj4 = arg1(dependencyMap[4]);
                      coerceChannelRouteResult1 = obj4.coerceChannelRoute(state.routes[index - 1]);
                      let tmp12 = coerceChannelRouteResult;
                      tmp3 = coerceChannelRouteResult1;
                      if (null != coerceChannelRouteResult1) {
                        break;
                      }
                    }
                  }
                }
                index = index - 1;
                let tmp13 = tmp3;
              }
              let tmp14 = coerceChannelRouteResult1.params.guildId === id.guild_id;
              if (tmp14) {
                tmp14 = isGuildHomeChannel(coerceChannelRouteResult1.params.channelId);
              }
              return tmp14;
            }
            return false;
          }
        }
        const obj5 = arg1(dependencyMap[4]);
      }
    }
  }
  return false;
};
