// Module ID: 11836
// Function ID: 11837
// Name: convertRouteToNavigation
// Dependencies: [1084, 9782, 11837, 5190, 5187, 5188, 5041, 5054, 6866, 10932, 2]
// Exports: convertRouteToNavigation

// Module 11836 (convertRouteToNavigation)
import Constants from "Constants" /* 1084 */;
import matchPathCompat from "matchPathCompat" /* 5041 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import RootNavigationRef from "RootNavigationRef" /* 5188 */;
import useChatLayout from "useChatLayout" /* 5190 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6866 */;
import openChannelSecondaryViewChat from "openChannelSecondaryViewChat" /* 9782 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10932 */;
import handleConjureRouteDefault from "handleConjureRoute" /* 11837 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
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
  let navigationReplace;
  let openChannel;
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
        const RouteParam = tmp(5054).RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam2 = tmp(5054).RouteParam;
        VOICE_CHAT_CHANNEL_PARTIAL = Routes.VOICE_CHAT_CHANNEL_PARTIAL;
        CHANNELResult = CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }));
        const RouteParam3 = tmp(5054).RouteParam;
        guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
        RouteParam4 = tmp(5054).RouteParam;
        const _HermesInternal = HermesInternal;
        const tmp4 = Routes;
        if (null != matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: CHANNEL2(guildIdResult2, RouteParam6.channelId({ optional: true }), ":messageId?") };
          const matchPath2 = matchPathCompat.matchPath;
          CHANNEL2 = tmp4.CHANNEL;
          matchPathCompat;
          const RouteParam5 = tmp(5054).RouteParam;
          guildIdResult2 = RouteParam5.guildId();
          RouteParam6 = tmp(5054).RouteParam;
          const matchPath2Result = matchPath2(pathname, obj3);
          if (null != matchPath2Result) {
            ({ channelId, guildId, messageId } = matchPath2Result.params);
            ({ navigationReplace, openChannel } = pathname);
            if (null == channelId) {
              if (!handleConjureRouteDefault(guildId, channelId, navigationReplace, openChannel)) {
                const tmpResult17 = useChatLayout;
                if (tmpResult17.getChatLayout().isChatLockedOpen) {
                  if (null != channelId) {
                    if (false === navigationReplace) {
                      const coerceGuildsRoute = NavigationRouteUtils.coerceGuildsRoute;
                      NavigationRouteUtils;
                      const tmpResult19 = RootNavigationRef;
                      const rootNavigationRef1 = tmpResult19.getRootNavigationRef();
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
                        const obj4 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                        const tmpResult20 = NavigationRouteUtils;
                        tmpResult20.navigateToRootTab(obj4);
                      } else {
                        const obj5 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                        const tmpResult21 = NavigationRouteUtils;
                        tmpResult21.navigateToChannel(obj5);
                      }
                    }
                  }
                  const obj6 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  const tmpResult22 = NavigationRouteUtils;
                  tmpResult22.navigateToRootTab(obj6);
                } else if (null != channelId) {
                  if (true === navigationReplace) {
                    if (openChannel) {
                      const obj7 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                      const tmpResult23 = NavigationRouteUtils;
                      tmpResult23.navigateToChannel(obj7);
                    }
                  }
                  if (false !== navigationReplace) {
                    const obj8 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    const tmpResult24 = NavigationRouteUtils;
                    tmpResult24.navigateToRootTab(obj8);
                  }
                  const tmp23 = null != channelId && true !== navigationReplace;
                  if (tmp23) {
                    const obj9 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "a" };
                    const tmpResult25 = NavigationRouteUtils;
                    tmpResult25.navigateToChannel(obj9);
                  }
                } else {
                  const obj10 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                  const tmpResult26 = NavigationRouteUtils;
                  tmpResult26.navigateToRootTab(obj10);
                }
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
            const tmpResult28 = matchPathCompat;
            const matchPathResult = tmpResult28.matchPath(pathname, { path: "/conjure/:projectId?", exact: true });
            let tmp11 = null == matchPathResult;
            if (!tmp11) {
              const tmpResult29 = ConjureGuildExperiment;
              tmp11 = !tmpResult29.hasConjureGuildWithoutExposure("convertRouteToNavigation");
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
      const tmpResult30 = NavigationRouteUtils;
      tmpResult30.resetToAuthRoute();
      return true;
    }
  }
  return true;
}
