// Module ID: 13579
// Function ID: 104383
// Name: EditUserProfileAvatar
// Dependencies: [31, 4122, 33, 4130, 5464, 5484, 3776, 7840, 7854, 13580, 4098, 13581, 1934, 13582, 13582, 7838, 7846, 566, 3991, 4131, 7880, 4660, 1212, 13583, 1273, 2]
// Exports: default

// Module 13579 (EditUserProfileAvatar)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ editIcon: { position: "absolute", right: -3 } });
let closure_8 = { code: "function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
let result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  let avatarStyle;
  let disabled;
  let editIconStyle;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
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
  const size = user.size;
  let analyticsLocations;
  let c4;
  let pendingAvatar;
  setPendingAvatar = undefined;
  let avatarDecoration;
  let c8;
  let callback;
  let closure_10;
  let sharedValue;
  let tmp = avatarDecoration();
  analyticsLocations = flag2(flag3[4])(flag2(flag3[5]).EDIT_AVATAR).analyticsLocations;
  let obj = flag2(flag3[6]);
  const tmp3 = !obj.canUseAnimatedAvatar(user) && !flag2;
  c4 = tmp3;
  obj = { isTryItOut: flag2, analyticsLocations };
  const tmp4 = flag2(flag3[7])(obj);
  pendingAvatar = tmp4.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp4);
  let obj2 = user(flag3[8]);
  obj = { userId: user.id, image: pendingAvatar };
  avatarDecoration = pendingAvatarDecoration;
  const pendingAvatarSrc = obj2.getPendingAvatarSrc(obj);
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  const obj1 = { isTryItOut: flag2, analyticsLocations };
  const tmp6 = flag2(flag3[9])(obj1);
  c8 = tmp6;
  let items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp6, tmp3, avatarDecoration, flag2];
  callback = analyticsLocations.useCallback(() => {
    let obj = flag2(flag3[10]);
    obj = {
      showAnimatedAvatarUpsell: c4,
      handleRemoveAvatarSelect() {
        flag2(flag3[10]).hideActionSheet();
        outer1_6(null);
      },
      handleUploadAvatarSelect: c8,
      handleUploadGIFAvatarSelect() {
        let obj = flag2(flag3[10]);
        obj.hideActionSheet();
        obj = {};
        const obj2 = flag2(flag3[10]);
        obj.profileAssetType = user(flag3[14]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = user(flag3[14]).GIFSelectionContext;
        obj.selectionContext = outer1_1 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj2.openLazy(user(flag3[12])(flag3[13], flag3.paths), "Select GIF Avatar", obj);
      },
      handleEditAvatarDecorationSelect() {
        let obj = user(flag3[15]);
        obj = { user: outer1_0, currentAvatarDecoration: outer1_7, analyticsLocations: outer1_3 };
        const result = obj.openAvatarDecorationActionSheet(obj);
      }
    };
    const tmp = user(flag3[12])(flag3[11], flag3.paths);
    obj.showRemoveAvatar = user(flag3[16]).showRemoveAvatar(pendingAvatar, user.avatar);
    obj.openLazy(tmp, "Change Avatar", obj);
  }, items);
  closure_10 = analyticsLocations.useRef(false);
  const items1 = [user, flag3, callback];
  const effect = analyticsLocations.useEffect(() => {
    let tmp = flag3;
    if (flag3) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items1);
  let obj5 = user(flag3[17]);
  const items2 = [c4];
  const stateFromStores = obj5.useStateFromStores(items2, () => _undefined.useReducedMotion);
  const tmp2 = flag2(flag3[4]);
  sharedValue = user(flag3[18]).useSharedValue(0);
  const obj7 = user(flag3[18]);
  const fn = function z() {
    let obj = {};
    obj = { rotateZ: "" + sharedValue.get() + "deg" };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 13368223692459;
  fn.__initData = c8;
  const items3 = [sharedValue];
  const animatedStyle = user(flag3[18]).useAnimatedStyle(fn);
  const effect1 = analyticsLocations.useEffect(() => {
    let obj = user(flag3[18]);
    obj = { duration: 3000 };
    const Easing = user(flag3[18]).Easing;
    obj.easing = Easing.inOut(user(flag3[18]).Easing.quad);
    const result = sharedValue.set(obj.withRepeat(user(flag3[19]).withTiming(360, obj), -1));
    return () => user(flag3[18]).cancelAnimation(outer1_11);
  }, items3);
  obj2 = { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus: flag, size };
  const tmp13 = pendingAvatar(flag2(flag3[20]), obj2);
  const obj3 = { style, disabled, onPress: callback, accessibilityRole: "button" };
  const intl = user(flag3[22]).intl;
  obj3.accessibilityLabel = intl.string(user(flag3[22]).t.MUgHIN);
  let tmp15 = tmp13;
  if (flag2) {
    tmp15 = tmp13;
    if (null == pendingAvatarDecoration) {
      tmp15 = tmp13;
      if (!stateFromStores) {
        const obj4 = { style: animatedStyle, children: tmp13 };
        tmp15 = pendingAvatar(flag2(flag3[18]).View, obj4);
      }
    }
  }
  const items4 = [tmp15, ];
  obj5 = { style: items5 };
  items5 = [tmp.editIcon, editIconStyle];
  const obj8 = user(flag3[18]);
  const tmp14 = setPendingAvatar;
  const tmp20 = pendingAvatar;
  let str = "xs";
  if (size === user(flag3[24]).AvatarSizes.EDIT_AVATAR_DECORATION) {
    str = "sm";
  }
  obj5.size = str;
  items4[1] = tmp20(flag2(flag3[23]), obj5);
  obj3.children = items4;
  return tmp14(user(flag3[21]).PressableOpacity, obj3);
};
