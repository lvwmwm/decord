// Module ID: 17202
// Function ID: 17203
// Name: useFavoritesGuildHeaderAction
// Dependencies: [19, 1087, 558, 576, 10561, 1114, 1128, 3447, 2]

// Module 17202 (useFavoritesGuildHeaderAction)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import intl2 from "intl" /* 1128 */;
import _modDef3447 from "module_3447" /* 3447 */;
import FavoritesHooks from "FavoritesHooks" /* 10561 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesGuildHeaderAction() {
  let first;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(6);
  const obj2 = FavoritesHooks;
  const hasAccess = obj2.useFavoritesAccess().hasAccess;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = router_utils;
      obj.transitionTo(constants.ME);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== hasAccess) {
    let ojM1xJ;
    const intl = tmp(1128).intl;
    const string = intl.string;
    if (hasAccess) {
      ojM1xJ = _modDef3447.G9fGlP;
    } else {
      ojM1xJ = tmp(1128).t.ojM1xJ;
    }
    const stringResult = string(ojM1xJ);
    cResult[1] = hasAccess;
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === !hasAccess) {
    let tmp9;
    if (cResult[4] === tmp6) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const obj3 = { isPreview: !hasAccess, label: tmp6, exitPreview: first };
  cResult[3] = !hasAccess;
  cResult[4] = tmp6;
  cResult[5] = obj3;
  tmp9 = obj3;
}) : (function useFavoritesGuildHeaderAction() {
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
    ojM1xJ = _modDef3447.G9fGlP;
  } else {
    ojM1xJ = intl2.t.ojM1xJ;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default tmp2;
