// Module ID: 15783
// Function ID: 15784
// Name: useFavoritesGuildHeaderAction
// Dependencies: [19, 1074, 9685, 1101, 1115, 3361, 2]
// Exports: default

// Module 15783 (useFavoritesGuildHeaderAction)
import Constants from "Constants" /* 1074 */;
import router_utils from "router_utils" /* 1101 */;
import intl2 from "intl" /* 1115 */;
import _modDef3361 from "module_3361" /* 3361 */;
import FavoritesHooks from "FavoritesHooks" /* 9685 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default function useFavoritesGuildHeaderAction() {
  let callback;
  let ojM1xJ;
  let string;
  let obj = FavoritesHooks;
  const hasAccess = obj.useFavoritesAccess().hasAccess;
  const obj2 = { isPreview: !hasAccess, label: string(ojM1xJ), exitPreview: callback };
  callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(constants.ME);
  }, []);
  const intl = intl2.intl;
  string = intl.string;
  if (hasAccess) {
    ojM1xJ = _modDef3361.G9fGlP;
  } else {
    ojM1xJ = intl2.t.ojM1xJ;
  }
  return obj2;
};
