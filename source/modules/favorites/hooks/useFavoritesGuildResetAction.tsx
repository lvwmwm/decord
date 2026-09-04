// Module ID: 16061
// Function ID: 16062
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4302, 673, 4166, 10153, 1911, 1219, 10152, 1233, 3178, 2]
// Exports: default

// Module 16061 (useFavoritesGuildResetAction)
import messagesProxyDefault from "messagesProxy" /* 3178 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10153 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 4302 */;
import { Routes } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = explicitContentFromProto.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = useFavoritesAccess;
  const callback = React.useCallback(() => {
    if (obj.isFavoritesGuildId(guildId.getGuildId())) {
      let tmpResult = tmp(tmp2[6]);
      tmpResult.transitionTo(constants.ME);
    }
    tmpResult = tmp(tmp2[7]);
    tmpResult.resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  obj = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = tmp(1233).intl;
  obj[1] = intl.string(messagesProxyDefault.YkET6R);
  const intl2 = tmp(1233).intl;
  obj[2] = intl2.string(messagesProxyDefault.ZzcwNk);
  obj[3] = callback;
  return obj;
};
