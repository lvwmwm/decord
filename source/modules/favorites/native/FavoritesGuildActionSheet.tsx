// Module ID: 15188
// Function ID: 15189
// Name: FavoritesGuildActionSheet
// Dependencies: [19, 1375, 21, 15189, 15190, 9645, 589, 5704, 5395, 1236, 5706, 11472, 4270, 15191, 5325, 8435, 4261, 2]
// Exports: openFavoritesGuildActionSheet

// Module 15188 (FavoritesGuildActionSheet)
import "noop";
import initializeFromUserSettings from "initializeFromUserSettings";
import jsxProd from "jsxProd";

let c4;
let c5;
let require = arg1;
function FavoritesGuildActionSheet() {
  const tmp2 = importDefault(15189)();
  const require = tmp2;
  const tmp3 = importDefault(15190)();
  importDefault = tmp3;
  let obj = require(9645) /* useFavoritesAccess */;
  let obj1 = require(589) /* initialize */;
  const items = [initializeFromUserSettings];
  const stateFromStores = obj1.useStateFromStores(items, () => initializeFromUserSettings.hasStoredFavorites());
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.wMWyci);
  obj[0] = callback(require(5395) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  let tmp7Result = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp7Result = null;
    if (stateFromStores) {
      obj1 = { hasIcons: true, children: null };
      const obj2 = { label: null, icon: null, onPress: null };
      const intl2 = tmp4(1236).intl;
      obj2[0] = intl2.string(tmp4(1236).t["0dOFq+"]);
      const obj3 = { IconComponent: null };
      obj3[0] = tmp4(11472).ArrowsUpDownIcon;
      obj2[1] = tmp7(tmp4(5706).ActionSheetRow.Icon, obj3);
      obj2[2] = function onPress() {
        tmp3(4270).hideActionSheet(closure_6);
        const obj = tmp3(4270);
        const result = tmp2(15191).openFavoritesGuildChannelSortModal();
      };
      obj1[1] = tmp7(tmp4(5706).ActionSheetRow, obj2);
      tmp7Result = tmp7(tmp4(5706).ActionSheetRow.Group, obj1);
    }
  }
  const items1 = [tmp7Result, ];
  const obj4 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp4(5325).XSmallIcon;
  } else {
    EyeSlashIcon = tmp4(8435).EyeSlashIcon;
  }
  obj4[2] = callback(require(5706) /* ActionSheetRowIcon */.ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj4[3] = str;
  obj4[4] = function onPress() {
    tmp3(outer1_2[12]).hideActionSheet(outer1_6);
    tmp2.perform();
  };
  const items2 = [callback(require(5706) /* ActionSheetRowIcon */.ActionSheetRow, obj4), ];
  tmp7Result = null;
  if (tmp3.isAvailable) {
    const obj5 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj9[0], subLabel: obj9[1] } = tmp3);
    const obj6 = { IconComponent: null };
    obj6[0] = tmp4(4261).TrashIcon;
    obj5[2] = tmp7(tmp4(5706).ActionSheetRow.Icon, obj6);
    obj5[4] = function onPress() {
      tmp3(outer1_2[12]).hideActionSheet(outer1_6);
      tmp3.perform();
    };
    tmp7Result = tmp7(tmp4(5706).ActionSheetRow, obj5);
  }
  items2[1] = tmp7Result;
  items1[1] = closure_5(require(5706) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj[1] = items1;
  return closure_5(require(5704) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
let result = require("jsxProd").fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export const openFavoritesGuildActionSheet = function openFavoritesGuildActionSheet() {
  let obj = require(4270) /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: callback(FavoritesGuildActionSheet, {}), key: FavoritesGuildActionSheet };
  obj.showActionSheet(obj);
};
