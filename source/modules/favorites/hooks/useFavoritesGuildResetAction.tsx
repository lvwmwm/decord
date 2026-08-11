// Module ID: 15280
// Function ID: 15281
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4126, 676, 3993, 9716, 1913, 1222, 9715, 1236, 3049, 2]
// Exports: default

// Module 15280 (useFavoritesGuildResetAction)
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import { Routes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = require(3993) /* explicitContentFromProto */.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = require(9716) /* useFavoritesAccess */;
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
  obj[1] = intl.string(importDefault(3049).YkET6R);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(importDefault(3049).ZzcwNk);
  obj[3] = callback;
  return obj;
};
