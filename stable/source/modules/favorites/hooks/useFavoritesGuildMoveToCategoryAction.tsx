// Module ID: 10496
// Function ID: 10497
// Name: useFavoritesGuildMoveToCategoryAction
// Dependencies: [19, 558, 576, 9807, 10497, 9806, 1127, 2]

// Module 10496 (useFavoritesGuildMoveToCategoryAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 9806 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let favorite;
  let tmp8;
  let obj = favorite(576);
  const cResult = obj.c(15);
  const obj2 = favorite(9807);
  const isFavoritesGuildSelected = obj2.useIsFavoritesGuildSelected();
  const obj3 = favorite(9807);
  favorite = obj3.useFavorite(id.id);
  const arr = id(10497)();
  id = undefined;
  if (favorite != null) {
    id = favorite.id;
  }
  if (cResult[0] !== id) {
    const fn = function n(arg0) {
      if (null != id) {
        const obj = FavoritesActionCreators;
        const result = obj.updateFavoriteChannelParent(tmp, arg0);
      }
    };
    cResult[0] = id;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (isFavoritesGuildSelected) {
    if (null != favorite) {
      let tmp14;
      let tmp15;
      let tmp17;
      if (cResult[2] === arr) {
        let tmp9;
        let tmp10;
        let tmp11;
        if (cResult[3] === favorite.parentId) {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
          tmp11 = cResult[6];
        }
        const _Symbol3 = Symbol;
        if (tmp11 === Symbol.for("react.early_return_sentinel")) {
          if (cResult[11] === tmp8) {
            if (cResult[12] === tmp9) {
              let tmp28;
              if (cResult[13] === tmp10) {
                tmp28 = cResult[14];
              }
              tmp11 = tmp28;
            }
          }
          const obj5 = { label: tmp9, destinations: tmp10, perform: tmp8 };
          cResult[11] = tmp8;
          cResult[12] = tmp9;
          cResult[13] = tmp10;
          cResult[14] = obj5;
          tmp28 = obj5;
        }
        return tmp11;
      }
      const _Symbol = Symbol;
      const forResult = Symbol.for("react.early_return_sentinel");
      if (cResult[7] !== favorite.parentId) {
        class I {
          constructor(id) {
            return null != id.id && id.id !== favorite.parentId;
          }
        }
        cResult[7] = favorite.parentId;
        cResult[8] = I;
        tmp14 = I;
      } else {
        class I {
          constructor(id) {
            return null != id.id && id.id !== favorite.parentId;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(id) {
            return { id: id.id, label: id.name };
          }
        }
        cResult[9] = F;
        tmp15 = F;
      } else {
        class F {
          constructor(id) {
            return { id: id.id, label: id.name };
          }
        }
      }
      const found = arr.filter(tmp14);
      const mapped = found.map(tmp15);
      if (null != favorite.parentId) {
        class F {
          constructor(id) {
            return { id: id.id, label: id.name };
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(id) {
              return { id: id.id, label: id.name };
            }
          }
          const stringResult = obj4.string(favorite(1127).t.FAplms);
          cResult[10] = stringResult;
        } else {
          class F {
            constructor(id) {
              return { id: id.id, label: id.name };
            }
          }
        }
        if (null != favorite.parentId) {
          class F {
            constructor(id) {
              return { id: id.id, label: id.name };
            }
          }
          const intl = tmp2(1127).intl;
          tmp23[1] = intl.string(favorite(1127).t.GSfOoo);
          const items = [tmp23];
          HermesBuiltin.arraySpread(items, mapped, 1);
        }
        tmp17 = forResult;
      } else {
        class F {
          constructor(id) {
            return { id: id.id, label: id.name };
          }
        }
        tmp17 = null;
      }
      cResult[2] = arr;
      cResult[3] = favorite.parentId;
      cResult[4] = tmp19;
      cResult[5] = tmp18;
      cResult[6] = tmp17;
      tmp11 = tmp17;
      tmp10 = tmp18;
      tmp9 = tmp19;
    }
  }
  return null;
}) : ((id) => {
  let favorite;
  let intl;
  let intl2;
  let tmp9;
  let obj = favorite(9807);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  const obj2 = favorite(9807);
  favorite = obj2.useFavorite(id.id);
  const arr = id(10497)();
  id = undefined;
  if (favorite != null) {
    id = favorite.id;
  }
  [][0] = id;
  if (isFavoritesGuildSelected) {
    if (null != favorite) {
      let tmp8;
      const found = arr.filter((id) => null != id.id && id.id !== favorite.parentId);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      if (null != favorite.parentId) {
        const obj3 = { label: intl.string(favorite(1127).t.FAplms), destinations: tmp9, perform: tmp7 };
        intl = tmp2(1127).intl;
        tmp9 = mapped;
        if (null != favorite.parentId) {
          const obj4 = { id: null, label: intl2.string(favorite(1127).t.GSfOoo) };
          intl2 = tmp2(1127).intl;
          const items = [obj4];
          HermesBuiltin.arraySpread(items, mapped, 1);
          tmp9 = items;
        }
        tmp8 = obj3;
      } else {
        tmp8 = null;
      }
      return tmp8;
    }
  }
  return null;
});
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildMoveToCategoryAction.tsx");

export default tmp2;
