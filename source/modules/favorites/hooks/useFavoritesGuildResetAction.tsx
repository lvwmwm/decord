// Module ID: 15090
// Function ID: 114834
// Name: useFavoritesGuildResetAction
// Dependencies: [31, 3838, 10194, 10193, 1212, 2945, 2]
// Exports: default

// Module 15090 (useFavoritesGuildResetAction)
import result from "result";

const require = arg1;
const result = require("computeFavoritesAccess").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildResetAction.tsx");

export default function useFavoritesGuildResetAction() {
  const DeveloperMode = require(3838) /* explicitContentFromProto */.DeveloperMode;
  let hasAccess = DeveloperMode.useSetting();
  let obj = require(10194) /* computeFavoritesAccess */;
  obj = {};
  const callback = React.useCallback(() => {
    outer1_0(outer1_2[3]).resetFavoritesGuild();
  }, []);
  if (hasAccess) {
    hasAccess = obj.useFavoritesAccess().hasAccess;
  }
  obj.isAvailable = hasAccess;
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(importDefault(2945).YkET6R);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.subLabel = intl2.string(importDefault(2945).ZzcwNk);
  obj.perform = callback;
  return obj;
};
