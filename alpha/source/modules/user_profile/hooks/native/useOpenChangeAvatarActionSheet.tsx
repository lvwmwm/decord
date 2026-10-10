// Module ID: 14909
// Function ID: 14910
// Name: useOpenChangeAvatarActionSheet
// Dependencies: [19, 4769, 8283, 14841, 5056, 14842, 2000, 14830, 14830, 8281, 8290, 2]
// Exports: default

// Module 14909 (useOpenChangeAvatarActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
const ProfileCustomizationUtils = tmp3(8290);
let react = react_mod;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenChangeAvatarActionSheet.tsx");

export default function useOpenChangeAvatarActionSheet(user) {
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let showAnimatedAvatarUpsell;
  user = user.user;
  const analyticsLocations = user.analyticsLocations;
  const isTryItOut = user.isTryItOut;
  setPendingAvatar = undefined;
  pendingAvatarDecoration = undefined;
  let handleUploadAvatarSelect;
  let tmp2 = isTryItOut;
  let obj = analyticsLocations(isTryItOut[1]);
  let tmp4 = !obj.canUseAnimatedAvatar(user) && !isTryItOut;
  react = tmp4;
  obj.canUseAnimatedAvatar(user);
  const tmp5 = analyticsLocations(tmp2[2])({ isTryItOut, analyticsLocations });
  const pendingAvatar = tmp5.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp5);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  const tmp6 = analyticsLocations(tmp2[3])({ isTryItOut, analyticsLocations });
  handleUploadAvatarSelect = tmp6;
  const items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp6, tmp4, pendingAvatarDecoration, isTryItOut];
  return react.useCallback(() => {
    let currentAvatarDecoration;
    let editAvatarDecoration;
    let tmp3Result;
    const tmp2 = ActionSheetActionCreatorsDefault;
    let openLazy = tmp2.openLazy;
    let tmp3 = require;
    let obj = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect: function removeAvatar() {
        const obj = analyticsLocations(isTryItOut[4]);
        obj.hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect: function uploadAvatarGIF() {
        let GIFSelectionContext;
        const obj = analyticsLocations(isTryItOut[4]);
        obj.hideActionSheet();
        const openLazy = analyticsLocations(isTryItOut[4]).openLazy;
        const obj2 = { profileAssetType: user(isTryItOut[8]).ProfileAssetType.AVATAR, selectionContext: closure_1_2 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT };
        analyticsLocations(isTryItOut[4]);
        const tmp3 = user(isTryItOut[6])(isTryItOut[7], isTryItOut.paths);
        GIFSelectionContext = user(isTryItOut[8]).GIFSelectionContext;
        openLazy(tmp3, "Select GIF Avatar", obj2);
      },
      handleEditAvatarDecorationSelect: editAvatarDecoration,
      showRemoveAvatar: tmp3Result.showRemoveAvatar(pendingAvatar, user.avatar)
    };
    editAvatarDecoration = undefined;
    const tmp4 = asyncRequire(14842, dependencyMap.paths);
    if (!isTryItOut) {
      editAvatarDecoration = function editAvatarDecoration() {
        const obj = user(isTryItOut[9]);
        const obj2 = { user, currentAvatarDecoration, analyticsLocations };
        const result = obj.openAvatarDecorationActionSheet(obj2);
      };
    }
    tmp3Result = ProfileCustomizationUtils;
    openLazy(tmp4, "Change Avatar", obj);
  }, items);
};
