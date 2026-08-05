// Module ID: 15136
// Function ID: 15137
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 4072, 676, 3928, 9600, 1865, 1222, 9599, 1236, 3001, 2]
// Exports: default

// Module 15136 (useFavoritesGuildResetAction)
import noop from "noop";
import handleConnectionOpen from "handleConnectionOpen";
import { Routes } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = require(3928) /* explicitContentFromProto */.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = require(9600) /* useFavoritesAccess */;
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
  obj[1] = intl.string(importDefault(3001).YkET6R);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(importDefault(3001).ZzcwNk);
  obj[3] = callback;
  return obj;
};
