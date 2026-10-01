// Module ID: 10461
// Function ID: 10462
// Name: useFavoritesGuildMoveToCategoryAction
// Dependencies: [19, 9685, 10462, 9684, 1115, 2]
// Exports: default

// Module 10461 (useFavoritesGuildMoveToCategoryAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 9684 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildMoveToCategoryAction.tsx");

export default function useFavoritesGuildMoveToCategoryAction(id) {
  let favorite;
  let intl;
  let intl2;
  let tmp9;
  let obj = favorite(9685);
  const isFavoritesGuildSelected = obj.useIsFavoritesGuildSelected();
  const obj2 = favorite(9685);
  favorite = obj2.useFavorite(id.id);
  const arr = id(10462)();
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
        const obj3 = { label: intl.string(favorite(1115).t.FAplms), destinations: tmp9, perform: tmp7 };
        intl = tmp2(1115).intl;
        tmp9 = mapped;
        if (null != favorite.parentId) {
          const obj4 = { id: null, label: intl2.string(favorite(1115).t.GSfOoo) };
          intl2 = tmp2(1115).intl;
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
};
