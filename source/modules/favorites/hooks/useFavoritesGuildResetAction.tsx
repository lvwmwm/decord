// Module ID: 15337
// Function ID: 15338
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4167, 676, 4034, 9755, 1913, 1222, 9754, 1236, 3047, 2]
// Exports: default

// Module 15337 (useFavoritesGuildResetAction)
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import { Routes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = require(4034) /* explicitContentFromProto */.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = require(9755) /* useFavoritesAccess */;
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
  obj[1] = intl.string(importDefault(3047).YkET6R);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(importDefault(3047).ZzcwNk);
  obj[3] = callback;
  return obj;
};
