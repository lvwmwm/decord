// Module ID: 15092
// Function ID: 114839
// Name: useFavoritesGuildHeaderAction
// Dependencies: [31, 653, 10194, 1198, 1212, 2945, 2]
// Exports: default

// Module 15092 (useFavoritesGuildHeaderAction)
import result from "result";
import { Routes } from "ME";

const require = arg1;
const result = require("computeFavoritesAccess").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  let obj = require(10194) /* computeFavoritesAccess */;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  obj = { isPreview: !hasAccess };
  const callback = React.useCallback(() => {
    outer1_0(outer1_2[3]).transitionTo(outer1_4.ME);
  }, []);
  const intl = require(1212) /* getSystemLocale */.intl;
  if (hasAccess) {
    let ojM1xJ = importDefault(2945).G9fGlP;
  } else {
    ojM1xJ = require(1212) /* getSystemLocale */.t.ojM1xJ;
  }
  obj.label = intl.string(ojM1xJ);
  obj.exitPreview = callback;
  return obj;
};
