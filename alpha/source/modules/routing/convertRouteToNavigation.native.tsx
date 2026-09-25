// Module ID: 12289
// Function ID: 12290
// Name: convertRouteToNavigation
// Dependencies: [1074, 4691, 4688, 4689, 4657, 4670, 2]
// Exports: convertRouteToNavigation

// Module 12289 (convertRouteToNavigation)
import Constants from "Constants" /* 1074 */;
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
let result = size.fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  pathname = pathname.pathname;
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        const obj2 = { path: null };
        const RouteParam = tmp(4670).RouteParam;
        const obj5 = Routes;
        const tmpResult = tmp(4657);
        const RouteParam2 = tmp(4670).RouteParam;
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = tmp(4670).RouteParam;
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }));
        const RouteParam4 = tmp(4670).RouteParam;
        const _HermesInternal = HermesInternal;
        obj2.path = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId({ name: "voiceGuildId" }), RouteParam4.channelId({ name: "voiceChannelId" }), ":voiceMessageId?");
        if (null != tmpResult.matchPath(pathname, obj2)) {
          return true;
        } else {
          const obj3 = { path: null };
          const RouteParam6 = tmp(4670).RouteParam;
          const tmpResult15 = tmp(4657);
          const RouteParam7 = tmp(4670).RouteParam;
          obj3.path = obj5.CHANNEL(RouteParam6.guildId(), RouteParam7.channelId({ optional: true }), ":messageId?");
          const matchPathResult = tmpResult15.matchPath(pathname, obj3);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            ({ navigationReplace, openChannel } = pathname);
            if (tmpResult16.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const tmpResult17 = tmp(4688);
                  const rootNavigationRef1 = tmp(4689).getRootNavigationRef();
                  let currentRoute;
                  if (rootNavigationRef1 != null) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  const coerceGuildsRouteResult = tmpResult17.coerceGuildsRoute(currentRoute);
                  let channelId1;
                  if (coerceGuildsRouteResult != null) {
                    const params = coerceGuildsRouteResult.params;
                    if (params != null) {
                      channelId1 = params.channelId;
                    }
                  }
                  if (channelId1 === channelId) {
                    const obj4 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    tmp(4688).navigateToRootTab(obj4);
                    const tmpResult19 = tmp(4688);
                  } else {
                    const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    tmp(4688).navigateToChannel(obj6);
                    const tmpResult20 = tmp(4688);
                  }
                  const tmpResult18 = tmp(4689);
                }
              }
              const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              tmp(4688).navigateToRootTab(obj7);
              const tmpResult21 = tmp(4688);
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (openChannel) {
                  const obj8 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  tmp(4688).navigateToChannel(obj8);
                  const tmpResult22 = tmp(4688);
                }
              }
              if (false !== navigationReplace) {
                const obj9 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                tmp(4688).navigateToRootTab(obj9);
                const tmpResult23 = tmp(4688);
              }
              if (tmp15) {
                const obj10 = { channelId, guildId, messageId, replaceChannelAndFixRoot: "flex" };
                tmp(4688).navigateToChannel(obj10);
                const tmpResult24 = tmp(4688);
              }
              tmp15 = null != channelId && true !== navigationReplace;
            } else {
              const obj11 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              tmp(4688).navigateToRootTab(obj11);
              const tmpResult25 = tmp(4688);
            }
            return true;
          }
          const guildIdResult2 = RouteParam6.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId({ name: "voiceGuildId" });
      }
      if (pathname.startsWith("/member-verification/")) {
        const obj12 = { path: null };
        const RouteParam5 = tmp(4670).RouteParam;
        obj12.path = Routes.GUILD_MEMBER_VERIFICATION(RouteParam5.guildId());
        const matchPathResult1 = tmp(4657).matchPath(pathname, obj12);
        if (null != matchPathResult1) {
          const result = tmp(4688).navigateToMemberVerification(matchPathResult1.params.guildId, matchPathResult1.params.inviteCode);
          const tmpResult27 = tmp(4688);
        }
        return true;
      } else {
        if (!pathname.startsWith(Routes.LOGIN)) {
          if (!pathname.startsWith(tmp7.REGISTER)) {
            let flag = pathname.startsWith(tmp7.ACCOUNT_STANDING);
            if (flag) {
              rootNavigationRef.navigate("account-standing");
              flag = true;
            }
          }
          return flag;
        }
        tmp(4688).resetToAuthRoute();
        flag = true;
        const tmpResult28 = tmp(4688);
      }
    }
  }
  return true;
};
