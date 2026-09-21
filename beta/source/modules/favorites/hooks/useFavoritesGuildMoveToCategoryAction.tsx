// Module ID: 11298
// Function ID: 11299
// Name: useFavoritesGuildMoveToCategoryAction
// Dependencies: [19, 558, 568, 10606, 11299, 10605, 1119, 2]

// Module 11298 (useFavoritesGuildMoveToCategoryAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10605 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildMoveToCategoryAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = favorite(568).c(15);
  let obj = favorite(568);
  const isFavoritesGuildSelected = favorite(10606).useIsFavoritesGuildSelected();
  const obj2 = favorite(10606);
  favorite = favorite(10606).useFavorite(id.id);
  const arr = id(11299)();
  id = undefined;
  if (favorite != null) {
    id = favorite.id;
  }
  if (cResult[0] !== id) {
    const fn = function n(arg0) {
      if (null != id) {
        const result = FavoritesActionCreators.updateFavoriteChannelParent(tmp, arg0);
      }
    };
    cResult[0] = id;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (isFavoritesGuildSelected) {
    if (null != favorite) {
      if (cResult[2] === arr) {
        if (cResult[3] === favorite.parentId) {
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
          let tmp10 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (tmp10 !== Symbol.for("react.early_return_sentinel")) {
          return tmp10;
        } else {
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp8) {
            }
          }
          const obj5 = { label: tmp8, destinations: tmp9, perform: tmp7 };
          cResult[11] = tmp7;
          cResult[12] = tmp8;
          cResult[13] = tmp9;
          cResult[14] = obj5;
        }
      }
      const _Symbol = Symbol;
      if (cResult[7] !== favorite.parentId) {
        class I {
          constructor(arg0) {
            tmp = null != id.id;
            if (tmp) {
              tmp2 = closure_0;
              tmp = id.id !== closure_0.parentId;
            }
            return tmp;
          }
        }
        cResult[7] = favorite.parentId;
        cResult[8] = I;
        const tmp13 = I;
      } else {
        class I {
          constructor(arg0) {
            tmp = null != id.id;
            if (tmp) {
              tmp2 = closure_0;
              tmp = id.id !== closure_0.parentId;
            }
            return tmp;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            obj = { id: id.id, label: id.name };
            return obj;
          }
        }
        cResult[9] = F;
        const tmp14 = F;
      } else {
        class F {
          constructor(arg0) {
            obj = { id: id.id, label: id.name };
            return obj;
          }
        }
      }
      const found = arr.filter(tmp13);
      const mapped = found.map(tmp14);
      if (null != favorite.parentId) {
        class F {
          constructor(arg0) {
            obj = { id: id.id, label: id.name };
            return obj;
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              obj = { id: id.id, label: id.name };
              return obj;
            }
          }
          const stringResult = obj4.string(tmp(1119).t.FAplms);
          cResult[10] = stringResult;
        } else {
          class F {
            constructor(arg0) {
              obj = { id: id.id, label: id.name };
              return obj;
            }
          }
        }
        if (tmp15) {
          class F {
            constructor(arg0) {
              obj = { id: id.id, label: id.name };
              return obj;
            }
          }
          const intl = tmp(1119).intl;
          tmp22[1] = intl.string(tmp(1119).t.GSfOoo);
          const items = [tmp22];
          HermesBuiltin.arraySpread(mapped, 1);
        }
        let tmp16 = forResult;
      } else {
        class F {
          constructor(arg0) {
            obj = { id: id.id, label: id.name };
            return obj;
          }
        }
        tmp16 = null;
      }
      cResult[2] = arr;
      cResult[3] = favorite.parentId;
      cResult[4] = tmp18;
      cResult[5] = tmp17;
      cResult[6] = tmp16;
      tmp10 = tmp16;
      tmp9 = tmp17;
      tmp8 = tmp18;
      forResult = Symbol.for("react.early_return_sentinel");
    }
  }
  return null;
}) : ((id) => {
  const isFavoritesGuildSelected = favorite(10606).useIsFavoritesGuildSelected();
  let obj = favorite(10606);
  favorite = favorite(10606).useFavorite(id.id);
  const obj2 = favorite(10606);
  id = undefined;
  if (favorite != null) {
    id = favorite.id;
  }
  [][0] = id;
  if (isFavoritesGuildSelected) {
    if (null != favorite) {
      const found = arr.filter((id) => {
        let tmp = null != id.id;
        if (tmp) {
          tmp = id.id !== favorite.parentId;
        }
        return tmp;
      });
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      if (null != favorite.parentId) {
        const obj3 = { label: null, destinations: null, perform: null };
        const intl = tmp(1119).intl;
        obj3.label = intl.string(tmp(1119).t.FAplms);
        let tmp8 = mapped;
        if (tmp12) {
          const obj4 = { id: null, label: null };
          const intl2 = tmp(1119).intl;
          obj4.label = intl2.string(tmp(1119).t.GSfOoo);
          const items = [obj4];
          HermesBuiltin.arraySpread(mapped, 1);
          tmp8 = items;
        }
        obj3.destinations = tmp8;
        obj3.perform = tmp6;
        let tmp7 = obj3;
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
});
