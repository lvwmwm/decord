// Module ID: 16031
// Function ID: 16032
// Name: useOpenChangeBannerActionSheet
// Dependencies: [19, 5257, 16032, 2120, 9434, 11946, 16046, 16046, 2]
// Exports: default

// Module 16031 (useOpenChangeBannerActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const UserProfileActionCreators = tmp3(9434);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenChangeBannerActionSheet.tsx");

export default function useOpenChangeBannerActionSheet(user) {
  user = user.user;
  const guildId = user.guildId;
  const analyticsLocations = user.analyticsLocations;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.showRemoveBanner;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let items = [user, guildId, analyticsLocations, flag, flag2];
  return flag.useCallback(() => {
    let fn;
    let items;
    const tmp2 = ActionSheetActionCreatorsDefault;
    let openLazy = tmp2.openLazy;
    let tmp3 = require;
    let obj = {
      user,
      analyticsLocations: items,
      onBannerChange: fn,
      guildId,
      showRemoveBanner: flag2,
      isTryItOut: flag,
      onGifBannerSelect: function openGifPicker() {
        let GIFSelectionContext;
        const obj = guildId(analyticsLocations[1]);
        obj.hideActionSheet();
        const openLazy = guildId(analyticsLocations[1]).openLazy;
        const obj2 = { profileAssetType: user(analyticsLocations[7]).ProfileAssetType.BANNER, selectionContext: flag ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT, guildId };
        guildId(analyticsLocations[1]);
        const tmp3 = user(analyticsLocations[3])(analyticsLocations[6], analyticsLocations.paths);
        GIFSelectionContext = user(analyticsLocations[7]).GIFSelectionContext;
        openLazy(tmp3, "Select GIF Banner", obj2);
      }
    };
    items = analyticsLocations;
    const tmp4 = asyncRequire(16032, dependencyMap.paths);
    if (analyticsLocations == null) {
      items = [];
    }
    if (flag) {
      fn = UserProfileActionCreators.setTryItOutBanner;
    } else {
      fn = (banner) => {
        const obj = user(analyticsLocations[5]);
        const obj2 = { guildId, banner };
        return obj.setPendingChanges(obj2);
      };
    }
    openLazy(tmp4, "Change Banner", obj);
  }, items);
};
