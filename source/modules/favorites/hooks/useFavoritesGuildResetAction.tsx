// Module ID: 15117
// Function ID: 15118
// Name: useFavoritesGuildResetAction
// Dependencies: [19, 3862, 10211, 10210, 1236, 2969, 2]
// Exports: default

// Module 15117 (useFavoritesGuildResetAction)
import noop from "noop";

const require = arg1;
const result = require("useFavoritesAccess").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = require(3862) /* explicitContentFromProto */.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = require(10211) /* useFavoritesAccess */;
  const callback = React.useCallback(() => {
    callback(table[3]).resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  obj = { isAvailable: hasAccess, label: null, subLabel: null, perform: null };
  const intl = tmp(1236).intl;
  obj[1] = intl.string(importDefault(2969).YkET6R);
  const intl2 = tmp(1236).intl;
  obj[2] = intl2.string(importDefault(2969).ZzcwNk);
  obj[3] = callback;
  return obj;
};
