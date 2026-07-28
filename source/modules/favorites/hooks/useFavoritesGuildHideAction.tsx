// Module ID: 15089
// Function ID: 114831
// Name: useFavoritesGuildHideAction
// Dependencies: [31, 3982, 653, 10194, 10193, 1841, 1198, 1212, 2945, 2]
// Exports: default

// Module 15089 (useFavoritesGuildHideAction)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Routes } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default function useFavoritesGuildHideAction() {
  let obj = hasAccess(10194);
  hasAccess = obj.useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  obj = { isPreview: !hasAccess };
  const callback = React.useCallback(() => {
    if (hasAccess) {
      const result = hasAccess(outer1_2[4]).setFavoritesGuildVisibility(false, "server_context_menu");
      const obj = hasAccess(outer1_2[4]);
    }
    if (obj2.isFavoritesGuildId(outer1_4.getGuildId())) {
      hasAccess(outer1_2[6]).transitionTo(outer1_5.ME);
      const obj3 = hasAccess(outer1_2[6]);
    }
  }, items);
  const intl = hasAccess(1212).intl;
  if (hasAccess) {
    let ojM1xJ = importDefault(2945)["8FO0y9"];
  } else {
    ojM1xJ = hasAccess(1212).t.ojM1xJ;
  }
  obj.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = hasAccess(1212).intl;
    stringResult = intl2.string(importDefault(2945).FaHxWl);
  }
  obj.subLabel = stringResult;
  obj.perform = callback;
  return obj;
};
