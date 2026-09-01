// Module ID: 15728
// Function ID: 15729
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4299, 676, 4166, 10307, 1912, 1222, 10306, 1236, 3179, 2]
// Exports: default

// Module 15728 (useFavoritesGuildResetAction)
import messagesProxyDefault from "messagesProxy" /* 3179 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10307 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 4299 */;
import { Routes } from "ME" /* 676 */;

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
  const intl = tmp(1236).intl;
  obj[1] = intl.string(messagesProxyDefault.YkET6R);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(messagesProxyDefault.ZzcwNk);
  obj[3] = callback;
  return obj;
};
