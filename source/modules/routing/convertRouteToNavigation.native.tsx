// Module ID: 10813
// Function ID: 83959
// Name: convertRouteToNavigation
// Dependencies: [653, 3984, 3981, 3982, 3952, 3965, 2]
// Exports: convertRouteToNavigation

// Module 10813 (convertRouteToNavigation)
import { Routes } from "ME";

let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/routing/convertRouteToNavigation.native.tsx");

export const convertRouteToNavigation = function convertRouteToNavigation(pathname) {
  let channelId;
  let guildId;
  let messageId;
  pathname = pathname.pathname;
  let obj = require(3982) /* getRootNavigationRef */;
  const rootNavigationRef = obj.getRootNavigationRef();
  if (null != rootNavigationRef) {
    if (rootNavigationRef.isReady()) {
      if (pathname.startsWith("/channels/")) {
        let obj2 = require(3952) /* matchPath */;
        obj = {};
        const RouteParam = require(3965) /* isPseudoGuildId */.RouteParam;
        const RouteParam2 = require(3965) /* isPseudoGuildId */.RouteParam;
        obj = { optional: true };
        const guildIdResult = RouteParam.guildId();
        const RouteParam3 = require(3965) /* isPseudoGuildId */.RouteParam;
        const obj1 = { name: "voiceGuildId" };
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), RouteParam2.channelId(obj));
        const RouteParam4 = require(3965) /* isPseudoGuildId */.RouteParam;
        obj2 = { name: "voiceChannelId" };
        const _HermesInternal = HermesInternal;
        obj.path = "" + CHANNELResult + Routes.VOICE_CHAT_CHANNEL_PARTIAL(RouteParam3.guildId(obj1), RouteParam4.channelId(obj2), ":voiceMessageId?");
        if (null != obj2.matchPath(pathname, obj)) {
          return true;
        } else {
          const obj3 = {};
          const RouteParam6 = require(3965) /* isPseudoGuildId */.RouteParam;
          const obj28 = require(3952) /* matchPath */;
          const RouteParam7 = require(3965) /* isPseudoGuildId */.RouteParam;
          const obj4 = { optional: true };
          obj3.path = Routes.CHANNEL(RouteParam6.guildId(), RouteParam7.channelId(obj4), ":messageId?");
          const matchPathResult = obj28.matchPath(pathname, obj3);
          if (null != matchPathResult) {
            ({ channelId, guildId, messageId } = matchPathResult.params);
            const navigationReplace = pathname.navigationReplace;
            let obj12 = require(3984) /* useChatLayout */;
            if (obj12.getChatLayout().isChatLockedOpen) {
              if (null != channelId) {
                if (false === navigationReplace) {
                  const obj31 = require(3981) /* _createForOfIteratorHelperLoose */;
                  const rootNavigationRef1 = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
                  let currentRoute;
                  if (null != rootNavigationRef1) {
                    currentRoute = rootNavigationRef1.getCurrentRoute();
                  }
                  const coerceGuildsRouteResult = obj31.coerceGuildsRoute(currentRoute);
                  channelId = undefined;
                  if (null != coerceGuildsRouteResult) {
                    const params = coerceGuildsRouteResult.params;
                    if (null != params) {
                      channelId = params.channelId;
                    }
                  }
                  if (channelId === channelId) {
                    const obj5 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                    require(3981) /* _createForOfIteratorHelperLoose */.navigateToRootTab(obj5);
                    const obj24 = require(3981) /* _createForOfIteratorHelperLoose */;
                  } else {
                    const obj6 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace };
                    require(3981) /* _createForOfIteratorHelperLoose */.navigateToChannel(obj6);
                    const obj22 = require(3981) /* _createForOfIteratorHelperLoose */;
                  }
                  const obj32 = require(3982) /* getRootNavigationRef */;
                }
              }
              const obj7 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              require(3981) /* _createForOfIteratorHelperLoose */.navigateToRootTab(obj7);
              const obj26 = require(3981) /* _createForOfIteratorHelperLoose */;
            } else if (null != channelId) {
              if (true === navigationReplace) {
                if (pathname.openChannel) {
                  let obj8 = { channelId, guildId, messageId, replaceChannelAndFixRoot: navigationReplace, openChannel: true };
                  require(3981) /* _createForOfIteratorHelperLoose */.navigateToChannel(obj8);
                  const obj20 = require(3981) /* _createForOfIteratorHelperLoose */;
                }
              }
              if (false !== navigationReplace) {
                let obj9 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
                require(3981) /* _createForOfIteratorHelperLoose */.navigateToRootTab(obj9);
                const obj16 = require(3981) /* _createForOfIteratorHelperLoose */;
              }
              if (tmp31) {
                const obj10 = { channelId, guildId, messageId, replaceChannelAndFixRoot: undefined };
                require(3981) /* _createForOfIteratorHelperLoose */.navigateToChannel(obj10);
                const obj18 = require(3981) /* _createForOfIteratorHelperLoose */;
              }
              tmp31 = null != channelId && true !== navigationReplace;
            } else {
              let obj13 = require(3981) /* _createForOfIteratorHelperLoose */;
              let obj11 = { screen: "guilds", guildId, channelId, resetRoot: navigationReplace };
              obj13.navigateToRootTab(obj11);
            }
            return true;
          }
          const guildIdResult2 = RouteParam6.guildId();
        }
        const guildIdResult1 = RouteParam3.guildId(obj1);
      }
      if (pathname.startsWith("/member-verification/")) {
        obj9 = require(3952) /* matchPath */;
        obj12 = {};
        const RouteParam5 = require(3965) /* isPseudoGuildId */.RouteParam;
        obj12.path = Routes.GUILD_MEMBER_VERIFICATION(RouteParam5.guildId());
        const matchPathResult1 = obj9.matchPath(pathname, obj12);
        if (null != matchPathResult1) {
          obj11 = require(3981) /* _createForOfIteratorHelperLoose */;
          const result = obj11.navigateToMemberVerification(matchPathResult1.params.guildId, matchPathResult1.params.inviteCode);
        }
        return true;
      } else {
        if (!pathname.startsWith(Routes.LOGIN)) {
          if (!pathname.startsWith(Routes.REGISTER)) {
            const tmp11 = !pathname.startsWith(Routes.ACCOUNT_STANDING);
            let flag2 = !tmp11;
            if (!tmp11) {
              obj13 = { name: "account-standing", params: undefined };
              rootNavigationRef.navigate(obj13);
              flag2 = true;
            }
          }
          return flag2;
        }
        obj8 = require(3981) /* _createForOfIteratorHelperLoose */;
        obj8.resetToAuthRoute();
        flag2 = true;
      }
    }
  }
  return true;
};
