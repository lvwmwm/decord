// Module ID: 16477
// Function ID: 16478
// Name: useFavoritesGuildHideAction
// Dependencies: [19, 4580, 1078, 558, 568, 10606, 10605, 2070, 1105, 1119, 3328, 2]

// Module 16477 (useFavoritesGuildHideAction)
import router_utils from "router_utils" /* 1105 */;
import _modDef3328 from "module_3328" /* 3328 */;
import FavoritesActionCreators from "FavoritesActionCreators" /* 10605 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;

require = fn;
const Routes = fn(1078).Routes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildHideAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = hasAccess(568).c(11);
  let obj = hasAccess(568);
  hasAccess = hasAccess(10606).useFavoritesAccess().hasAccess;
  if (cResult[0] !== hasAccess) {
    const fn = function s() {
      if (hasAccess) {
        const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
      }
      if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
        router_utils.transitionTo(Routes.ME);
      }
    };
    cResult[0] = hasAccess;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== hasAccess) {
    const intl = tmp(1119).intl;
    if (hasAccess) {
      let ojM1xJ = _modDef3328["8FO0y9"];
    } else {
      ojM1xJ = tmp(1119).t.ojM1xJ;
    }
    const stringResult = intl.string(ojM1xJ);
    cResult[2] = hasAccess;
    cResult[3] = stringResult;
  } else {
    if (cResult[4] !== hasAccess) {
      let stringResult1;
      if (hasAccess) {
        const intl2 = tmp(1119).intl;
        stringResult1 = intl2.string(_modDef3328.FaHxWl);
      }
      cResult[4] = hasAccess;
      cResult[5] = stringResult1;
      let tmp10 = stringResult1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === tmp4) {
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp10) {
            let tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
    }
    let obj3 = { isPreview: tmp5, label: cResult[3], subLabel: tmp10, perform: tmp4 };
    cResult[6] = tmp4;
    cResult[7] = tmp5;
    cResult[8] = cResult[3];
    cResult[9] = tmp10;
    cResult[10] = obj3;
    tmp13 = obj3;
  }
}) : (() => {
  hasAccess = hasAccess(10606).useFavoritesAccess().hasAccess;
  const items = [hasAccess];
  const obj2 = { isPreview: !hasAccess, label: null, subLabel: null, perform: null };
  const callback = noop.useCallback(() => {
    if (hasAccess) {
      const result = FavoritesActionCreators.setFavoritesGuildVisibility(false, "server_context_menu");
    }
    if (obj2.isFavoritesGuildId(SelectedGuildStore.getGuildId())) {
      router_utils.transitionTo(Routes.ME);
    }
  }, items);
  const intl = hasAccess(1119).intl;
  if (hasAccess) {
    let ojM1xJ = _modDef3328["8FO0y9"];
  } else {
    ojM1xJ = tmp(1119).t.ojM1xJ;
  }
  obj2.label = intl.string(ojM1xJ);
  let stringResult;
  if (hasAccess) {
    const intl2 = tmp(1119).intl;
    stringResult = intl2.string(_modDef3328.FaHxWl);
  }
  obj2.subLabel = stringResult;
  obj2.perform = callback;
  return obj2;
});
