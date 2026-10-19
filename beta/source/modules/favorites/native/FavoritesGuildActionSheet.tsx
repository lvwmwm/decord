// Module ID: 17267
// Function ID: 17268
// Name: FavoritesGuildActionSheet
// Dependencies: [19, 2071, 21, 558, 576, 17268, 17269, 17270, 504, 7117, 1128, 7171, 8473, 11982, 17271, 6927, 5148, 7175, 2]

// Module 17267 (FavoritesGuildActionSheet)
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 17268 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 17269 */;
import useFavoritesGuildAutoAddedThreadsActionDefault from "useFavoritesGuildAutoAddedThreadsAction" /* 17270 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 17271 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2071 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildActionSheet(onClose) {
  let ActionSheetRow;
  let ActionSheetSwitchRow;
  let Icon;
  let Icon2;
  let Icon4;
  let closure_1;
  let closure_2;
  let intl;
  let items1;
  let obj11;
  let obj12;
  let obj15;
  let obj27;
  let tmp11;
  let tmp7;
  let tmp8;
  const obj = onClose(576);
  const cResult = obj.c(30);
  onClose = onClose.onClose;
  const tmp4 = useFavoritesGuildHideActionDefault();
  importDefault = tmp4;
  const tmp5 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp5;
  const tmp6 = useFavoritesGuildAutoAddedThreadsActionDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function s() {
      return FavoriteStore.hasStoredFavorites();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = onClose(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(onClose(1128).t.wMWyci) };
    const BottomSheetTitleHeader = tmp(7117).BottomSheetTitleHeader;
    intl = tmp(1128).intl;
    const tmp13 = closure_4(BottomSheetTitleHeader, obj2);
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp6.isAvailable) {
    if (cResult[4] === tmp6.isEnabled) {
      if (cResult[5] === tmp6.label) {
        if (cResult[6] === tmp6.subLabel) {
          let tmp14;
          if (cResult[7] === tmp6.toggle) {
            tmp14 = cResult[8];
          }
          if (cResult[9] === stateFromStores) {
            let tmp17;
            let tmp20;
            if (cResult[10] === onClose) {
              tmp17 = cResult[11];
            }
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { IconComponent: onClose(6927).EyeSlashIcon };
              const Icon3 = tmp(7171).ActionSheetRow.Icon;
              const tmp22 = closure_4(Icon3, obj3);
              class R {
                constructor() {
                  onClose();
                  closure_1.perform();
                }
              }
              cResult[12] = tmp22;
              tmp20 = tmp22;
            } else {
              tmp20 = cResult[12];
            }
            if (cResult[13] === tmp4) {
              let tmp23;
              if (cResult[14] === onClose) {
                tmp23 = cResult[15];
              }
              if (cResult[16] === tmp4.label) {
                if (cResult[17] === tmp4.subLabel) {
                  let tmp24;
                  if (cResult[18] === tmp23) {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === onClose) {
                    let tmp27;
                    if (cResult[21] === tmp5) {
                      tmp27 = cResult[22];
                    }
                    if (cResult[23] === tmp24) {
                      let tmp31;
                      if (cResult[24] === tmp27) {
                        tmp31 = cResult[25];
                      }
                      if (cResult[26] === tmp31) {
                        if (cResult[27] === tmp14) {
                          let tmp34;
                          if (cResult[28] === tmp17) {
                            tmp34 = cResult[29];
                          }
                          return tmp34;
                        }
                      }
                      const obj4 = { header: tmp11, children: tmp36 };
                      class R {
                        constructor() {
                          onClose();
                          closure_1.perform();
                        }
                      }
                      tmp36[0] = tmp14;
                      tmp36[1] = tmp17;
                      tmp36[2] = tmp31;
                      const tmp37 = closure_5(onClose(7175).ActionSheet, obj4);
                      cResult[26] = tmp31;
                      cResult[27] = tmp14;
                      cResult[28] = tmp17;
                      cResult[29] = tmp37;
                      tmp34 = tmp37;
                    }
                    const obj6 = { hasIcons: true, children: items1 };
                    items1 = [, ];
                    class R {
                      constructor() {
                        onClose();
                        closure_1.perform();
                      }
                    }
                    items1[1] = tmp27;
                    const tmp33 = closure_5(onClose(7171).ActionSheetRow.Group, obj6);
                    cResult[23] = tmp24;
                    cResult[24] = tmp27;
                    cResult[25] = tmp33;
                    tmp31 = tmp33;
                  }
                  let tmp28 = null;
                  if (tmp5.isAvailable) {
                    ({ label: obj13.label, subLabel: obj13.subLabel } = tmp5);
                    const obj7 = {
                      label: null,
                      subLabel: null,
                      icon: closure_4(Icon4, tmp30),
                      variant: "danger",
                      onPress() {
                                          onClose();
                                          closure_2.perform();
                                        }
                    };
                    const ActionSheetRow2 = tmp(7171).ActionSheetRow;
                    class R {
                      constructor() {
                        onClose();
                        closure_1.perform();
                      }
                    }
                    Icon4 = tmp(7171).ActionSheetRow.Icon;
                    tmp30[0] = onClose(5148).TrashIcon;
                    tmp28 = closure_4(ActionSheetRow2, obj7);
                  }
                  class R {
                    constructor() {
                      onClose();
                      closure_1.perform();
                    }
                  }
                  cResult[21] = tmp5;
                  cResult[22] = tmp28;
                  tmp27 = tmp28;
                }
              }
              const obj8 = { label: tmp4.label, subLabel: null, icon: tmp20, variant: "danger", onPress: tmp23 };
              class R {
                constructor() {
                  onClose();
                  closure_1.perform();
                }
              }
              const tmp26 = closure_4(onClose(7171).ActionSheetRow, obj8);
              cResult[16] = tmp4.label;
              cResult[17] = tmp4.subLabel;
              cResult[18] = tmp23;
              cResult[19] = tmp26;
              tmp24 = tmp26;
            }
            class R {
              constructor() {
                onClose();
                closure_1.perform();
              }
            }
            cResult[13] = tmp4;
            cResult[14] = onClose;
            cResult[15] = R;
            tmp23 = R;
          }
          let tmp18 = null;
          if (stateFromStores) {
            const obj10 = { hasIcons: true, children: closure_4(ActionSheetRow, obj11) };
            const Group2 = tmp(7171).ActionSheetRow.Group;
            obj11 = {
              label: obj9.string(onClose(1128).t["0dOFq+"]),
              icon: closure_4(Icon2, obj12),
              onPress() {
                          onClose();
                          openFavoritesGuildChannelSortModalDefault();
                        }
            };
            ActionSheetRow = tmp(7171).ActionSheetRow;
            class R {
              constructor() {
                onClose();
                closure_1.perform();
              }
            }
            obj12 = { IconComponent: onClose(11982).ArrowsUpDownIcon };
            Icon2 = tmp(7171).ActionSheetRow.Icon;
            tmp18 = closure_4(Group2, obj10);
          }
          cResult[10] = onClose;
          cResult[11] = tmp18;
          tmp17 = tmp18;
        }
      }
    }
  }
  let tmp15 = null;
  if (tmp6.isAvailable) {
    const obj14 = { hasIcons: true, children: closure_4(ActionSheetSwitchRow, obj15) };
    const Group = tmp(7171).ActionSheetRow.Group;
    obj15 = { label: tmp6.label, subLabel: null, icon: closure_4(Icon, obj27), value: null, onValueChange: null };
    class R {
      constructor() {
        onClose();
        closure_1.perform();
      }
    }
    ActionSheetSwitchRow = tmp(7171).ActionSheetSwitchRow;
    obj27 = { IconComponent: onClose(8473).ThreadIcon };
    Icon = tmp(7171).ActionSheetRow.Icon;
    ({ isEnabled: obj5.value, toggle: obj5.onValueChange } = tmp6);
    tmp15 = closure_4(Group, obj14);
  }
  cResult[3] = tmp6.isAvailable;
  cResult[4] = tmp6.isEnabled;
  cResult[5] = tmp6.label;
  cResult[6] = tmp6.subLabel;
  cResult[7] = tmp6.toggle;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function FavoritesGuildActionSheet(onClose) {
  let ActionSheetRow;
  let ActionSheetSwitchRow;
  let BottomSheetTitleHeader;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let closure_1;
  let closure_2;
  let intl;
  let intl2;
  let items1;
  let obj10;
  let obj13;
  let obj26;
  let obj3;
  let obj6;
  let obj7;
  let obj9;
  onClose = onClose.onClose;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  const tmp4 = useFavoritesGuildAutoAddedThreadsActionDefault();
  const items = [FavoriteStore];
  const obj = onClose(504);
  const stateFromStores = obj.useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj2 = { header: closure_4(BottomSheetTitleHeader, obj3), children: items1 };
  const ActionSheet = onClose(7175).ActionSheet;
  obj3 = { title: intl.string(onClose(1128).t.wMWyci) };
  BottomSheetTitleHeader = onClose(7117).BottomSheetTitleHeader;
  intl = onClose(1128).intl;
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    const obj4 = { hasIcons: true, children: closure_4(ActionSheetSwitchRow, obj6) };
    const Group = tmp5(7171).ActionSheetRow.Group;
    ({ label: obj5.label, subLabel: obj5.subLabel } = tmp4);
    obj6 = { label: null, subLabel: null, icon: closure_4(Icon, obj7), value: null, onValueChange: null };
    ActionSheetSwitchRow = tmp5(7171).ActionSheetSwitchRow;
    obj7 = { IconComponent: onClose(8473).ThreadIcon };
    Icon = tmp5(7171).ActionSheetRow.Icon;
    ({ isEnabled: obj5.value, toggle: obj5.onValueChange } = tmp4);
    tmp8Result = tmp8(Group, obj4);
  }
  items1 = [tmp8Result, , ];
  let tmp8Result3 = null;
  if (stateFromStores) {
    const obj8 = { hasIcons: true, children: closure_4(ActionSheetRow, obj9) };
    const Group2 = tmp5(7171).ActionSheetRow.Group;
    obj9 = {
      label: intl2.string(onClose(1128).t["0dOFq+"]),
      icon: closure_4(Icon2, obj10),
      onPress() {
          onClose();
          openFavoritesGuildChannelSortModalDefault();
        }
    };
    ActionSheetRow = tmp5(7171).ActionSheetRow;
    intl2 = tmp5(1128).intl;
    obj10 = { IconComponent: onClose(11982).ArrowsUpDownIcon };
    Icon2 = tmp5(7171).ActionSheetRow.Icon;
    tmp8Result3 = tmp8(Group2, obj8);
  }
  items1[1] = tmp8Result3;
  const Group3 = tmp5(7171).ActionSheetRow.Group;
  const obj11 = {
    label: tmp2.label,
    subLabel: tmp2.subLabel,
    icon: closure_4(Icon3, obj13),
    variant: "danger",
    onPress() {
      onClose();
      closure_1.perform();
    }
  };
  const ActionSheetRow2 = tmp5(7171).ActionSheetRow;
  obj13 = { IconComponent: onClose(6927).EyeSlashIcon };
  Icon3 = tmp5(7171).ActionSheetRow.Icon;
  const items2 = [closure_4(ActionSheetRow2, obj11), ];
  let tmp8Result4 = null;
  if (tmp3.isAvailable) {
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj25 = {
      label: null,
      subLabel: null,
      icon: closure_4(Icon4, obj26),
      variant: "danger",
      onPress() {
          onClose();
          closure_2.perform();
        }
    };
    const ActionSheetRow3 = tmp5(7171).ActionSheetRow;
    obj26 = { IconComponent: onClose(5148).TrashIcon };
    Icon4 = tmp5(7171).ActionSheetRow.Icon;
    tmp8Result4 = tmp8(ActionSheetRow3, obj25);
  }
  items2[1] = tmp8Result4;
  items1[2] = closure_5(Group3, { hasIcons: true, children: items2 });
  return closure_5(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default tmp4;
