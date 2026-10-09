// Module ID: 14763
// Function ID: 14764
// Name: useOpenChangeBannerActionSheet
// Dependencies: [19, 5055, 14764, 2000, 8275, 8272, 14775, 14775, 2]
// Exports: default

// Module 14763 (useOpenChangeBannerActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const UserProfileActionCreators = tmp3(8275);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenChangeBannerActionSheet.tsx");

export default function useOpenChangeBannerActionSheet(user) {
  user = user.user;
  const analyticsLocations = user.analyticsLocations;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.showRemoveBanner;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let items = [user, analyticsLocations, flag, flag2];
  return flag2.useCallback(() => {
    let fn;
    let items;
    const tmp2 = ActionSheetActionCreatorsDefault;
    let openLazy = tmp2.openLazy;
    let tmp3 = require;
    let obj = {
      user,
      analyticsLocations: items,
      onBannerChange: fn,
      showRemoveBanner: flag2,
      isTryItOut: flag,
      onGifBannerSelect: function openGifPicker() {
        let GIFSelectionContext;
        const obj = analyticsLocations(flag[1]);
        obj.hideActionSheet();
        const openLazy = analyticsLocations(flag[1]).openLazy;
        const obj2 = { profileAssetType: user(flag[7]).ProfileAssetType.BANNER, selectionContext: closure_1_2 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT };
        analyticsLocations(flag[1]);
        const tmp3 = user(flag[3])(flag[6], flag.paths);
        GIFSelectionContext = user(flag[7]).GIFSelectionContext;
        openLazy(tmp3, "Select GIF Banner", obj2);
      }
    };
    items = analyticsLocations;
    const tmp4 = asyncRequire(14764, dependencyMap.paths);
    if (analyticsLocations == null) {
      items = [];
    }
    if (flag) {
      fn = UserProfileActionCreators.setTryItOutBanner;
    } else {
      fn = (banner) => {
        const obj = user(flag[5]);
        const obj2 = { banner };
        return obj.setPendingChanges(obj2);
      };
    }
    openLazy(tmp4, "Change Banner", obj);
  }, items);
};
