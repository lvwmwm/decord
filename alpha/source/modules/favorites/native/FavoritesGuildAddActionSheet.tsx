// Module ID: 18156
// Function ID: 18157
// Name: FavoritesGuildAddActionSheet
// Dependencies: [19, 21, 5253, 18157, 10812, 10814, 14349, 7360, 7315, 1114, 7362, 3447, 11449, 18158, 2]
// Exports: openFavoritesGuildAddActionSheet

// Module 18156 (FavoritesGuildAddActionSheet)
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 10814 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 14349 */;
import FavoritesGuildAddCategoryActionSheet from "FavoritesGuildAddCategoryActionSheet" /* 18157 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
function handleCreateCategory() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(FavoritesGuildAddActionSheet_str);
  const obj2 = FavoritesGuildAddCategoryActionSheet;
  const result = obj2.openFavoritesGuildAddCategoryActionSheet();
}
function FavoritesGuildAddActionSheet() {
  let ActionSheetRow;
  let ActionSheetRow2;
  let BottomSheetTitleHeader;
  let Icon;
  let Icon2;
  let favoriteLimit;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let obj9;
  let shouldShowUpsell;
  let obj = shouldShowUpsell(favoriteLimit[4]);
  const favoritesLimitUpsell = obj.useFavoritesLimitUpsell();
  shouldShowUpsell = favoritesLimitUpsell.shouldShowUpsell;
  const isAtLimit = favoritesLimitUpsell.isAtLimit;
  favoriteLimit = favoritesLimitUpsell.favoriteLimit;
  const items = [shouldShowUpsell, isAtLimit, favoriteLimit];
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(FavoritesGuildAddActionSheet_str);
    const tmp4 = shouldShowUpsell;
    if (tmp4) {
      const tmp5 = isAtLimit;
      if (tmp5) {
        openFavoritesGuildLimitUpsellDefault(favoriteLimit);
      }
    }
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_header_add_button_context_menu" });
  }, items);
  const obj2 = { header: closure_4(BottomSheetTitleHeader, obj3), children: items1 };
  const ActionSheet = shouldShowUpsell(favoriteLimit[7]).ActionSheet;
  obj3 = { title: intl.string(shouldShowUpsell(favoriteLimit[9]).t.wMWyci) };
  BottomSheetTitleHeader = shouldShowUpsell(favoriteLimit[8]).BottomSheetTitleHeader;
  intl = shouldShowUpsell(favoriteLimit[9]).intl;
  const obj4 = { hasIcons: true, children: closure_4(ActionSheetRow, obj5) };
  const Group = shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group;
  obj5 = { label: intl2.string(isAtLimit(favoriteLimit[11]).G9fGlP), icon: closure_4(Icon, obj6), onPress: callback };
  ActionSheetRow = shouldShowUpsell(favoriteLimit[10]).ActionSheetRow;
  intl2 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj6 = { IconComponent: shouldShowUpsell(favoriteLimit[12]).PlusMediumIcon };
  Icon = shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon;
  items1 = [closure_4(Group, obj4), ];
  const obj7 = { hasIcons: true, children: closure_4(ActionSheetRow2, obj8) };
  const Group2 = shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Group;
  obj8 = { label: intl3.string(shouldShowUpsell(favoriteLimit[9]).t["ISN+NM"]), icon: closure_4(Icon2, obj9), onPress: handleCreateCategory };
  ActionSheetRow2 = shouldShowUpsell(favoriteLimit[10]).ActionSheetRow;
  intl3 = shouldShowUpsell(favoriteLimit[9]).intl;
  obj9 = { IconComponent: shouldShowUpsell(favoriteLimit[13]).FolderPlusIcon };
  Icon2 = shouldShowUpsell(favoriteLimit[10]).ActionSheetRow.Icon;
  items1[1] = closure_4(Group2, obj7);
  return closure_5(ActionSheet, obj2);
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const FavoritesGuildAddActionSheet_str = "FavoritesGuildAddActionSheet";
let result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildAddActionSheet.tsx");

export function openFavoritesGuildAddActionSheet() {
  const obj = ActionSheetActionCreators;
  const obj2 = { content: React3(FavoritesGuildAddActionSheet, {}), key: FavoritesGuildAddActionSheet_str };
  obj.showActionSheet(obj2);
}
