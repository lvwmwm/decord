// Module ID: 14784
// Function ID: 14785
// Name: EditUserProfileAvatar
// Dependencies: [19, 17, 5080, 21, 5091, 6848, 6872, 4728, 8267, 8277, 14785, 5055, 14786, 2000, 14775, 14775, 8265, 8274, 504, 2041, 8366, 14787, 14777, 1126, 6191, 14788, 1200, 2]
// Exports: default

// Module 14784 (EditUserProfileAvatar)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let tmp3;
const ProfileCustomizationUtils = tmp3(8274);
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 }, editButton: { position: "absolute", top: -8, right: -8 } });
let result = size.fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  let avatarStyle;
  let disableStatus;
  let disabled;
  let editIconStyle;
  let intl;
  let intl2;
  let isUserProfileEditingRefresh;
  let items3;
  let items4;
  let items5;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let str;
  let style;
  let tmp21Result;
  user = user.user;
  ({ disabled, style, disableStatus } = user);
  ({ statusStyle, avatarStyle, editIconStyle } = user);
  if (disableStatus === undefined) {
    disableStatus = true;
  }
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.autoStartEditFlow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ size, isUserProfileEditingRefresh } = user);
  setPendingAvatar = undefined;
  let avatarDecoration;
  let handleUploadAvatarSelect;
  let onPress;
  let ref;
  let tmp = avatarDecoration();
  let tmp2 = flag;
  let tmp3 = flag2;
  let tmp4 = flag(flag2[5]);
  const analyticsLocations = tmp4(flag(flag2[6]).EDIT_AVATAR).analyticsLocations;
  let obj = flag(flag2[7]);
  const tmp6 = !obj.canUseAnimatedAvatar(user) && !flag;
  const showAnimatedAvatarUpsell = tmp6;
  const tmp7 = tmp2(tmp3[8])({ isTryItOut: flag, analyticsLocations });
  const pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let obj2 = user(tmp3[9]);
  const obj3 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj2.getPendingAvatarSrc(obj3);
  avatarDecoration = pendingAvatarDecoration;
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const tmp10 = tmp2(tmp3[10])({ isTryItOut: flag, analyticsLocations });
  handleUploadAvatarSelect = tmp10;
  const items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag, isUserProfileEditingRefresh];
  onPress = isUserProfileEditingRefresh.useCallback(() => {
    let currentAvatarDecoration;
    let editAvatarDecoration;
    let tmp3Result;
    const tmp2 = ActionSheetActionCreatorsDefault;
    let openLazy = tmp2.openLazy;
    let tmp3 = require;
    let obj = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect: function removeAvatar() {
        const obj = flag(flag2[11]);
        obj.hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect: function uploadAvatarGIF() {
        let GIFSelectionContext;
        const obj = flag(flag2[11]);
        obj.hideActionSheet();
        const openLazy = flag(flag2[11]).openLazy;
        const obj2 = { profileAssetType: user(flag2[15]).ProfileAssetType.AVATAR, selectionContext: closure_1_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT };
        flag(flag2[11]);
        const tmp3 = user(flag2[13])(flag2[14], flag2.paths);
        GIFSelectionContext = user(flag2[15]).GIFSelectionContext;
        openLazy(tmp3, "Select GIF Avatar", obj2);
      },
      handleEditAvatarDecorationSelect: editAvatarDecoration,
      showRemoveAvatar: tmp3Result.showRemoveAvatar(pendingAvatar, user.avatar)
    };
    const tmp4 = asyncRequire(14786, dependencyMap.paths);
    if (!flag) {
      editAvatarDecoration = function editAvatarDecoration() {
        const obj = user(flag2[16]);
        const obj2 = { user, currentAvatarDecoration, analyticsLocations };
        const result = obj.openAvatarDecorationActionSheet(obj2);
      };
    }
    tmp3Result = ProfileCustomizationUtils;
    openLazy(tmp4, "Change Avatar", obj);
  }, items);
  ref = isUserProfileEditingRefresh.useRef(false);
  const items1 = [user, flag2, onPress];
  const effect = isUserProfileEditingRefresh.useEffect(() => {
    const tmp = flag2 && !ref.current;
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items1);
  const items2 = [showAnimatedAvatarUpsell];
  const tmp8Result = user(tmp3[18]);
  const stateFromStores = tmp8Result.useStateFromStores(items2, () => showAnimatedAvatarUpsell.useReducedMotion);
  const GifAutoPlay = tmp8(tmp3[19]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp16 = pendingAvatar(tmp2(tmp3[20]), { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus, size });
  const tmp2Result = tmp2(tmp3[21]);
  if (flag) {
    flag = null == pendingAvatarSrc;
  }
  if (flag) {
    flag = null == pendingAvatarDecoration;
  }
  if (flag) {
    flag = !stateFromStores;
  }
  if (flag) {
    flag = setting;
  }
  const tmp15Result = pendingAvatar(tmp2Result, { shouldAnimate: flag, children: tmp16 });
  if (isUserProfileEditingRefresh) {
    const obj4 = { style, children: items3 };
    items3 = [tmp15Result, ];
    const obj5 = { style: tmp.editButton, onPress, accessibilityLabel: intl2.string(user(tmp3[23]).t["70lEQe"]), disabled };
    const tmp2Result3 = tmp2(tmp3[22]);
    intl2 = tmp8(tmp3[23]).intl;
    items3[1] = pendingAvatar(tmp2Result3, obj5);
    tmp21Result = tmp21(analyticsLocations, obj4);
  } else {
    const obj6 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: intl.string(user(tmp3[23]).t.MUgHIN), children: items4 };
    const PressableOpacity = tmp8(tmp3[24]).PressableOpacity;
    intl = tmp8(tmp3[23]).intl;
    items4 = [tmp15Result, ];
    const obj7 = { style: items5, size: str };
    items5 = [tmp.editIcon, editIconStyle];
    str = "xs";
    const tmp2Result4 = tmp2(tmp3[25]);
    if (size === user(tmp3[26]).AvatarSizes.EDIT_AVATAR_DECORATION) {
      str = "sm";
    }
    items4[1] = pendingAvatar(tmp2Result4, obj7);
    tmp21Result = tmp21(PressableOpacity, obj6);
  }
  return tmp21Result;
};
