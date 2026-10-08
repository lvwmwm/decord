// Module ID: 16375
// Function ID: 16376
// Name: useFavoritesGuildHeaderAction
// Dependencies: [19, 1085, 558, 576, 10294, 1112, 1126, 3439, 2]

// Module 16375 (useFavoritesGuildHeaderAction)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import intl2 from "intl" /* 1126 */;
import _modDef3439 from "module_3439" /* 3439 */;
import FavoritesHooks from "FavoritesHooks" /* 10294 */;
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
    const intl = tmp(1126).intl;
    const string = intl.string;
    if (hasAccess) {
      ojM1xJ = _modDef3439.G9fGlP;
    } else {
      ojM1xJ = tmp(1126).t.ojM1xJ;
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
    ojM1xJ = _modDef3439.G9fGlP;
  } else {
    ojM1xJ = intl2.t.ojM1xJ;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHeaderAction.tsx");

export default tmp2;
