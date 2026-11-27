// Module ID: 16057
// Function ID: 16058
// Name: EditUserProfileAvatar
// Dependencies: [19, 17, 5044, 4955, 21, 5043, 6379, 6380, 2174, 11952, 9503, 504, 16058, 5257, 16059, 2120, 16053, 16053, 14462, 6375, 4868, 9522, 16060, 16055, 1112, 6152, 16061, 1186, 2]
// Exports: default

// Module 16057 (EditUserProfileAvatar)
import react_native from "react-native" /* 17 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp3;
const ProfileCustomizationUtils = tmp3(6375);
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 }, editButton: { position: "absolute", top: -8, right: -8 } });
let result = size.fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  let avatarStyle;
  let disableStatus;
  let disabled;
  let editIconStyle;
  let intl;
  let intl2;
  let isUserProfileEditingRefresh;
  let items4;
  let items5;
  let items6;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let str;
  let style;
  let tmp23Result;
  user = user.user;
  const guildId = user.guildId;
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
  let stateFromStores;
  let avatarDecoration;
  let handleUploadAvatarSelect;
  let onPress;
  let ref;
  let tmp = stateFromStores();
  let tmp2 = guildId;
  let tmp3 = flag;
  let tmp4 = guildId(flag[6]);
  const analyticsLocations = tmp4(guildId(flag[7]).EDIT_AVATAR).analyticsLocations;
  let obj = guildId(flag[8]);
  const tmp6 = !obj.canUseAnimatedAvatar(user) && !flag;
  const showAnimatedAvatarUpsell = tmp6;
  let tmp7 = tmp2(tmp3[9])({ isTryItOut: flag, analyticsLocations, guildId });
  const pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let tmp8 = user;
  let obj2 = user(tmp3[10]);
  const obj3 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj2.getPendingAvatarSrc(obj3);
  const items = [showAnimatedAvatarUpsell];
  const obj4 = user(tmp3[11]);
  stateFromStores = obj4.useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  let result = null == guildId;
  if (!result) {
    const tmp2Result = tmp2(tmp3[8]);
    result = tmp2Result.canUsePremiumGuildMemberProfile(user);
  }
  if (null != guildId) {
    let avatarDecoration1;
    if (stateFromStores != null) {
      avatarDecoration1 = stateFromStores.avatarDecoration;
    }
    avatarDecoration = avatarDecoration1;
  } else {
    avatarDecoration = user.avatarDecoration;
  }
  if (undefined !== pendingAvatarDecoration) {
    avatarDecoration = pendingAvatarDecoration;
  }
  const tmp13 = tmp2(tmp3[12])({ isTryItOut: flag, analyticsLocations, guildId });
  handleUploadAvatarSelect = tmp13;
  const items1 = [user, guildId, , , , , , , , , ];
  let avatar;
  const useCallback = flag2.useCallback;
  if (stateFromStores != null) {
    avatar = stateFromStores.avatar;
  }
  items1[2] = avatar;
  items1[3] = analyticsLocations;
  items1[4] = pendingAvatar;
  items1[5] = setPendingAvatar;
  items1[6] = tmp13;
  items1[7] = tmp6;
  items1[8] = avatarDecoration;
  items1[9] = flag;
  items1[10] = isUserProfileEditingRefresh;
  onPress = useCallback(() => {
    let avatar;
    let currentAvatarDecoration;
    let editAvatarDecoration;
    let showRemoveAvatar;
    let tmp7;
    let tmp8;
    const tmp2 = ActionSheetActionCreatorsDefault;
    let openLazy = tmp2.openLazy;
    let tmp3 = require;
    let obj = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect: function removeAvatar() {
        const obj = guildId(flag[13]);
        obj.hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect: function uploadAvatarGIF() {
        let GIFSelectionContext;
        const obj = guildId(flag[13]);
        obj.hideActionSheet();
        const openLazy = guildId(flag[13]).openLazy;
        const obj2 = { profileAssetType: user(flag[17]).ProfileAssetType.AVATAR, selectionContext: closure_1_2 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT, guildId };
        guildId(flag[13]);
        const tmp3 = user(flag[15])(flag[16], flag.paths);
        GIFSelectionContext = user(flag[17]).GIFSelectionContext;
        openLazy(tmp3, "Select GIF Avatar", obj2);
      },
      handleEditAvatarDecorationSelect: editAvatarDecoration,
      showRemoveAvatar: showRemoveAvatar(tmp7, avatar),
      guildId: tmp8,
      analyticsLocations
    };
    const tmp4 = asyncRequire(16059, dependencyMap.paths);
    if (!flag) {
      editAvatarDecoration = function editAvatarDecoration() {
        const obj = user(flag[18]);
        const obj2 = { user, guildId, currentAvatarDecoration, analyticsLocations };
        const result = obj.openAvatarDecorationActionSheet(obj2);
      };
    }
    showRemoveAvatar = ProfileCustomizationUtils.showRemoveAvatar;
    ProfileCustomizationUtils;
    tmp7 = pendingAvatar;
    tmp8 = guildId;
    if (null != guildId) {
      let avatar1;
      if (stateFromStores != null) {
        avatar1 = stateFromStores.avatar;
      }
      avatar = avatar1;
    } else {
      avatar = user.avatar;
    }
    openLazy(tmp4, "Change Avatar", obj);
  }, items1);
  ref = obj6.useRef(false);
  const items2 = [user, flag2, onPress];
  const effect = obj6.useEffect(() => {
    const tmp = flag2 && !ref.current;
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items2);
  const items3 = [analyticsLocations];
  const tmp8Result = tmp8(tmp3[11]);
  const stateFromStores1 = tmp8Result.useStateFromStores(items3, () => analyticsLocations.useReducedMotion);
  const GifAutoPlay = tmp8(tmp3[20]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp20 = pendingAvatar(tmp2(tmp3[21]), { style: avatarStyle, user, guildId, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus, size });
  const tmp2Result4 = tmp2(tmp3[22]);
  if (flag) {
    flag = null == pendingAvatarSrc;
  }
  if (flag) {
    flag = null == pendingAvatarDecoration;
  }
  if (flag) {
    flag = !stateFromStores1;
  }
  if (flag) {
    flag = setting;
  }
  const tmp19Result = pendingAvatar(tmp2Result4, { shouldAnimate: flag, children: tmp20 });
  if (isUserProfileEditingRefresh) {
    const obj5 = { style, children: items4 };
    items4 = [tmp19Result, ];
    const tmp26 = isUserProfileEditingRefresh;
    if (result) {
      const obj7 = { style: tmp.editButton, onPress, accessibilityLabel: intl2.string(tmp8(tmp3[24]).t["70lEQe"]), disabled };
      const tmp2Result5 = tmp2(tmp3[23]);
      intl2 = tmp8(tmp3[24]).intl;
      result = tmp19(tmp2Result5, obj7);
    }
    items4[1] = result;
    tmp23Result = tmp23(tmp26, obj5);
  } else {
    const obj8 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: intl.string(tmp8(tmp3[24]).t.MUgHIN), children: items5 };
    const PressableOpacity = tmp8(tmp3[25]).PressableOpacity;
    intl = tmp8(tmp3[24]).intl;
    items5 = [tmp19Result, ];
    const obj9 = { style: items6, size: str };
    items6 = [tmp.editIcon, editIconStyle];
    str = "xs";
    const tmp2Result6 = tmp2(tmp3[26]);
    if (size === tmp8(tmp3[27]).AvatarSizes.EDIT_AVATAR_DECORATION) {
      str = "sm";
    }
    items5[1] = pendingAvatar(tmp2Result6, obj9);
    tmp23Result = tmp23(PressableOpacity, obj8);
  }
  return tmp23Result;
};
