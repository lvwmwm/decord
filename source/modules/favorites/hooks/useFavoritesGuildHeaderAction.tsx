// Module ID: 15119
// Function ID: 15120
// Name: useFavoritesGuildHeaderAction
// Dependencies: [19, 676, 10211, 1222, 1236, 2969, 2]
// Exports: default

// Module 15119 (useFavoritesGuildHeaderAction)
import noop from "noop";
import { Routes } from "ME";

const require = arg1;
const result = require("useFavoritesAccess").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  let obj = require(10211) /* useFavoritesAccess */;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  obj = { isPreview: !hasAccess, label: null, exitPreview: null };
  const callback = React.useCallback(() => {
    callback(table[3]).transitionTo(constants.ME);
  }, []);
  const intl = require(1236) /* getSystemLocale */.intl;
  if (hasAccess) {
    let ojM1xJ = importDefault(2969).G9fGlP;
  } else {
    ojM1xJ = require(1236) /* getSystemLocale */.t.ojM1xJ;
  }
  obj[1] = intl.string(ojM1xJ);
  obj[2] = callback;
  return obj;
};
