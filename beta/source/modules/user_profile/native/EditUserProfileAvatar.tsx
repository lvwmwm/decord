// Module ID: 14165
// Function ID: 14166
// Name: EditUserProfileAvatar
// Dependencies: [19, 4825, 21, 4836, 6583, 6603, 4488, 7604, 7614, 14166, 4800, 14167, 1981, 14168, 14168, 7602, 7611, 504, 4566, 4837, 7703, 5435, 1115, 14169, 1177, 2]
// Exports: default

// Module 14165 (EditUserProfileAvatar)
import asyncRequire from "asyncRequire" /* 1981 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import timing from "timing" /* 4837 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7611 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ editIcon: { position: "absolute", right: -3 } });
let __initData = { code: "function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  let avatarStyle;
  let disabled;
  let editIconStyle;
  let handleUploadAvatarSelect;
  let intl;
  let items4;
  let items5;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let str;
  let style;
  user = user.user;
  let flag = user.disableStatus;
  ({ disabled, statusStyle, style, avatarStyle, editIconStyle } = user);
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = user.isTryItOut;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = user.autoStartEditFlow;
  if (flag3 === undefined) {
    flag3 = false;
  }
  size = user.size;
  setPendingAvatar = undefined;
  let avatarDecoration;
  __initData = undefined;
  let onPress;
  let ref;
  let sharedValue;
  let tmp2 = flag2;
  let tmp3 = flag3;
  let tmp = avatarDecoration();
  const tmp4 = flag2(flag3[4]);
  const analyticsLocations = tmp4(flag2(flag3[5]).EDIT_AVATAR).analyticsLocations;
  let obj = flag2(flag3[6]);
  const tmp6 = !obj.canUseAnimatedAvatar(user) && !flag2;
  const showAnimatedAvatarUpsell = tmp6;
  const tmp7 = tmp2(tmp3[7])({ isTryItOut: flag2, analyticsLocations });
  const pendingAvatar = tmp7.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp7);
  let obj2 = user(tmp3[8]);
  avatarDecoration = pendingAvatarDecoration;
  const obj3 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = obj2.getPendingAvatarSrc(obj3);
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const tmp10 = tmp2(tmp3[9])({ isTryItOut: flag2, analyticsLocations });
  __initData = tmp10;
  let items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp10, tmp6, avatarDecoration, flag2];
  onPress = analyticsLocations.useCallback(() => {
    let currentAvatarDecoration;
    let obj2;
    let openLazy = ActionSheetActionCreatorsDefault.openLazy;
    let obj = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect() {
        const obj = flag2(flag3[10]);
        obj.hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect() {
        let GIFSelectionContext;
        const obj = flag2(flag3[10]);
        obj.hideActionSheet();
        const openLazy = flag2(flag3[10]).openLazy;
        const obj2 = { profileAssetType: user(flag3[14]).ProfileAssetType.AVATAR, selectionContext: closure_1_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT };
        flag2(flag3[10]);
        const tmp3 = user(flag3[12])(flag3[13], flag3.paths);
        GIFSelectionContext = user(flag3[14]).GIFSelectionContext;
        openLazy(tmp3, "Select GIF Avatar", obj2);
      },
      handleEditAvatarDecorationSelect() {
        const obj = user(flag3[15]);
        const obj2 = { user, currentAvatarDecoration, analyticsLocations };
        const result = obj.openAvatarDecorationActionSheet(obj2);
      },
      showRemoveAvatar: obj2.showRemoveAvatar(pendingAvatar, user.avatar)
    };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(14167, dependencyMap.paths);
    obj2 = ProfileCustomizationUtils;
    openLazy(tmp2, "Change Avatar", obj);
  }, items);
  ref = analyticsLocations.useRef(false);
  const items1 = [user, flag3, onPress];
  const effect = analyticsLocations.useEffect(() => {
    const tmp = flag3 && !ref.current;
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items1);
  const items2 = [showAnimatedAvatarUpsell];
  const tmp8Result = user(tmp3[17]);
  const stateFromStores = tmp8Result.useStateFromStores(items2, () => showAnimatedAvatarUpsell.useReducedMotion);
  const tmp8Result3 = user(tmp3[18]);
  sharedValue = tmp8Result3.useSharedValue(0);
  const fn = function z() {
    let items;
    const obj = { transform: items };
    items = [{ rotateZ: "" + sharedValue.get() + "deg" }];
    ({ rotateZ: "" + sharedValue.get() + "deg" });
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 13368223692459;
  fn.__initData = __initData;
  const items3 = [sharedValue];
  const tmp8Result4 = user(tmp3[18]);
  const animatedStyle = tmp8Result4.useAnimatedStyle(fn);
  const effect1 = analyticsLocations.useEffect(() => {
    let Easing;
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    let obj = { duration: 3000, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const result = set(withRepeat(withTiming(360, obj), -1));
    return () => {
      const obj = user(flag3[18]);
      return obj.cancelAnimation(sharedValue);
    };
  }, items3);
  const tmp18 = pendingAvatar(tmp2(tmp3[20]), { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus: flag, size });
  const obj4 = { style, disabled, onPress, accessibilityRole: "button", accessibilityLabel: intl.string(user(tmp3[22]).t.MUgHIN), children: items4 };
  const PressableOpacity = tmp8(tmp3[21]).PressableOpacity;
  intl = tmp8(tmp3[22]).intl;
  let tmp17Result = tmp18;
  const tmp19 = setPendingAvatar;
  if (flag2) {
    tmp17Result = tmp18;
    if (null == pendingAvatarDecoration) {
      tmp17Result = tmp18;
      if (!stateFromStores) {
        const obj5 = { style: animatedStyle, children: tmp18 };
        tmp17Result = tmp17(tmp2(tmp3[18]).View, obj5);
      }
    }
  }
  items4 = [tmp17Result, ];
  const obj6 = { style: items5, size: str };
  items5 = [tmp.editIcon, editIconStyle];
  str = "xs";
  const tmp2Result = tmp2(tmp3[23]);
  if (size === user(tmp3[24]).AvatarSizes.EDIT_AVATAR_DECORATION) {
    str = "sm";
  }
  items4[1] = pendingAvatar(tmp2Result, obj6);
  return tmp19(PressableOpacity, obj4);
};
