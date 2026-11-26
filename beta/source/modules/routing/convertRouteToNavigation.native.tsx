// Module ID: 13751
// Function ID: 13752
// Name: convertRouteToNavigation
// Dependencies: [1071, 4769, 8578, 5092, 5089, 5090, 4951, 4964, 6657, 12293, 2]
// Exports: convertRouteToNavigation

// Module 13751 (convertRouteToNavigation)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import matchPathCompat from "matchPathCompat" /* 4951 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import useChatLayout from "useChatLayout" /* 5092 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6657 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 8578 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 12293 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export function convertRouteToNavigation(pathname) {
  let CHANNEL2;
  let CHANNELResult;
  let RouteParam4;
  let RouteParam6;
  let VOICE_CHAT_CHANNEL_PARTIAL;
  let channelId;
  let guildId;
  let guildIdResult1;
  let guildIdResult2;
  let messageId;
  pathname = pathname.pathname;
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        const obj2 = { path: "" + CHANNELResult + VOICE_CHAT_CHANNEL_PARTIAL(guildIdResult1, RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?") };
        const matchPath = matchPathCompat.matchPath;
        const CHANNEL = Routes.CHANNEL;
        matchPathCompat;
        const RouteParam = tmp(4964).RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam2 = tmp(4964).RouteParam;
        VOICE_CHAT_CHANNEL_PARTIAL = Routes.VOICE_CHAT_CHANNEL_PARTIAL;
        CHANNELResult = CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }));
        const RouteParam3 = tmp(4964).RouteParam;
        guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
        RouteParam4 = tmp(4964).RouteParam;
        const _HermesInternal = HermesInternal;
        const tmp4 = Routes;
        if (null != matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: CHANNEL2(guildIdResult2, RouteParam6.channelId({ optional: true }), ":messageId?") };
          const matchPath2 = matchPathCompat.matchPath;
          CHANNEL2 = tmp4.CHANNEL;
          matchPathCompat;
          const RouteParam5 = tmp(4964).RouteParam;
          guildIdResult2 = RouteParam5.guildId();
          RouteParam6 = tmp(4964).RouteParam;
          const matchPath2Result = matchPath2(pathname, obj3);
          if (null != matchPath2Result) {
            ({ channelId, guildId, messageId } = matchPath2Result.params);
            const navigationReplace = pathname.navigationReplace;
            let tmp17;
            const openChannel = pathname.openChannel;
            if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
              tmp17 = messageId;
            }
            if (null == channelId) {
              const tmpResult18 = useChatLayout;
              if (tmpResult18.getChatLayout().isChatLockedOpen) {
                if (null != channelId) {
                  if (null != tmp17) {
                    const obj4 = { channelId, guildId, subRouteId: tmp17, replaceChannelAndFixRoot: false !== navigationReplace, openChannel: true };
                    const tmpResult19 = NavigationRouteUtils;
                    tmpResult19.navigateToChannel(obj4);
                  }
                }
                if (null != channelId) {
                  if (false === navigationReplace) {
                    const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
                    NavigationRouteUtils;
                    const tmpResult21 = RootNavigationRef;
                    const rootNavigationRef1 = tmpResult21.getRootNavigationRef();
                    let currentRoute;
                    if (rootNavigationRef1 != null) {
                      currentRoute = rootNavigationRef1.getCurrentRoute();
                    }
                    const coerceGuildsRouteResult = coerceGuildsRoute(currentRoute);
                    let channelId1;
                    if (coerceGuildsRouteResult != null) {
                      const params = coerceGuildsRouteResult.params;
                      if (params != null) {
                        channelId1 = params.channelId;
                      }
                    }
                    if (channelId1 === channelId) {
                      const obj5 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                      const tmpResult22 = NavigationRouteUtils;
                      tmpResult22.navigateToRootTab(obj5);
                    } else {
                      const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                      const tmpResult23 = NavigationRouteUtils;
                      tmpResult23.navigateToChannel(obj6);
                    }
                  }
                }
                const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                const tmpResult24 = NavigationRouteUtils;
                tmpResult24.navigateToRootTab(obj7);
              } else if (null != channelId) {
                if (true === navigationReplace) {
                  if (openChannel) {
                    const obj8 = { channelId, guildId, messageId, subRouteId: tmp17, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                    const tmpResult25 = NavigationRouteUtils;
                    tmpResult25.navigateToChannel(obj8);
                  }
                }
                if (false !== navigationReplace) {
                  const obj9 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  const tmpResult26 = NavigationRouteUtils;
                  tmpResult26.navigateToRootTab(obj9);
                }
                const tmp20 = null != channelId && true !== navigationReplace;
                if (tmp20) {
                  const obj10 = { channelId, guildId, messageId, subRouteId: tmp17, replaceChannelAndFixRoot: "find" };
                  const tmpResult27 = NavigationRouteUtils;
                  tmpResult27.navigateToChannel(obj10);
                }
              } else {
                const obj11 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                const tmpResult28 = NavigationRouteUtils;
                tmpResult28.navigateToRootTab(obj11);
              }
            } else {
              openChannelSecondaryViewChat;
            }
            return true;
          }
        }
      }
      if (!pathname.startsWith(Routes.LOGIN)) {
        if (!pathname.startsWith(Routes.REGISTER)) {
          if (pathname.startsWith(Routes.ACCOUNT_STANDING)) {
            rootNavigationRef.navigate("account-standing");
            return true;
          } else {
            const tmpResult30 = matchPathCompat;
            const matchPathResult = tmpResult30.matchPath(pathname, { path: "/conjure/:projectId?", exact: true });
            let tmp11 = null == matchPathResult;
            if (!tmp11) {
              const tmpResult31 = ConjureGuildExperiment;
              tmp11 = !tmpResult31.hasConjureGuildWithoutExposure("convertRouteToNavigation");
            }
            let flag = !tmp11;
            if (flag) {
              openConjureHomeScreenDefault(matchPathResult.params.projectId);
              flag = true;
            }
            return flag;
          }
        }
      }
      const tmpResult32 = NavigationRouteUtils;
      tmpResult32.resetToAuthRoute();
      return true;
    }
  }
  return true;
}
