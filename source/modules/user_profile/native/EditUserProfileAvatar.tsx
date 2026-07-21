// Module ID: 13458
// Function ID: 102194
// Name: EditUserProfileAvatar
// Dependencies: []
// Exports: default

// Module 13458 (EditUserProfileAvatar)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ editIcon: { "Null": false, "Null": false } });
let closure_8 = { code: "function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+\"deg\"}]};}" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/user_profile/native/EditUserProfileAvatar.tsx");

export default function EditUserProfileAvatar(user) {
  let avatarStyle;
  let disabled;
  let editIconStyle;
  let pendingAvatarDecoration;
  let setPendingAvatar;
  let statusStyle;
  let style;
  user = user.user;
  const arg1 = user;
  let flag = user.disableStatus;
  ({ disabled, statusStyle, style, avatarStyle, editIconStyle } = user);
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = user.isTryItOut;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const importDefault = flag2;
  let flag3 = user.autoStartEditFlow;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const dependencyMap = flag3;
  const size = user.size;
  let React;
  let closure_4;
  let pendingAvatar;
  setPendingAvatar = undefined;
  let callback;
  let closure_8;
  callback = undefined;
  let closure_10;
  let sharedValue;
  const tmp = callback();
  const analyticsLocations = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).EDIT_AVATAR).analyticsLocations;
  React = analyticsLocations;
  let obj = importDefault(dependencyMap[6]);
  const tmp3 = !obj.canUseAnimatedAvatar(user) && !flag2;
  closure_4 = tmp3;
  obj = { isTryItOut: flag2, analyticsLocations };
  const tmp4 = importDefault(dependencyMap[7])(obj);
  pendingAvatar = tmp4.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp4);
  let obj2 = arg1(dependencyMap[8]);
  obj = { userId: user.id, image: pendingAvatar };
  let avatarDecoration = pendingAvatarDecoration;
  const pendingAvatarSrc = obj2.getPendingAvatarSrc(obj);
  if (undefined === pendingAvatarDecoration) {
    avatarDecoration = user.avatarDecoration;
  }
  callback = avatarDecoration;
  const obj1 = { isTryItOut: flag2, analyticsLocations };
  const tmp6 = importDefault(dependencyMap[9])(obj1);
  closure_8 = tmp6;
  const items = [user, analyticsLocations, pendingAvatar, setPendingAvatar, tmp6, tmp3, avatarDecoration, flag2];
  callback = React.useCallback(() => {
    let obj = flag2(flag3[10]);
    obj = {
      showAnimatedAvatarUpsell: tmp3,
      handleRemoveAvatarSelect() {
        callback2(closure_2[10]).hideActionSheet();
        callback3(null);
      },
      handleUploadAvatarSelect: tmp6,
      handleUploadGIFAvatarSelect() {
        let obj = callback2(paths[10]);
        obj.hideActionSheet();
        obj = {};
        const obj2 = callback2(paths[10]);
        obj.profileAssetType = callback(paths[14]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = callback(paths[14]).GIFSelectionContext;
        obj.selectionContext = callback2 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj2.openLazy(callback(paths[12])(paths[13], paths.paths), "Select GIF Avatar", obj);
      },
      handleEditAvatarDecorationSelect() {
        let obj = callback(closure_2[15]);
        obj = { user: callback, currentAvatarDecoration: closure_7, analyticsLocations: closure_3 };
        const result = obj.openAvatarDecorationActionSheet(obj);
      }
    };
    const tmp = user(flag3[12])(flag3[11], flag3.paths);
    obj.showRemoveAvatar = user(flag3[16]).showRemoveAvatar(pendingAvatar, user.avatar);
    obj.openLazy(tmp, "Change Avatar", obj);
  }, items);
  closure_10 = React.useRef(false);
  const items1 = [user, flag3, callback];
  const effect = React.useEffect(() => {
    let tmp = flag3;
    if (flag3) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      callback();
    }
  }, items1);
  let obj5 = arg1(dependencyMap[17]);
  const items2 = [closure_4];
  const stateFromStores = obj5.useStateFromStores(items2, () => tmp3.useReducedMotion);
  const tmp2 = importDefault(dependencyMap[4]);
  sharedValue = arg1(dependencyMap[18]).useSharedValue(0);
  const obj7 = arg1(dependencyMap[18]);
  const fn = function z() {
    let obj = {};
    obj = { rotateZ: "" + sharedValue.get() + "deg" };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { rotation: sharedValue };
  fn.__workletHash = 13368223692459;
  fn.__initData = closure_8;
  const items3 = [sharedValue];
  const animatedStyle = arg1(dependencyMap[18]).useAnimatedStyle(fn);
  const effect1 = React.useEffect(() => {
    let obj = user(flag3[18]);
    obj = { duration: 3000 };
    const Easing = user(flag3[18]).Easing;
    obj.easing = Easing.inOut(user(flag3[18]).Easing.quad);
    const result = sharedValue.set(obj.withRepeat(user(flag3[19]).withTiming(360, obj), -1));
    return () => callback(closure_2[18]).cancelAnimation(closure_11);
  }, items3);
  obj2 = { style: avatarStyle, user, pendingAvatarSrc, pendingAvatarDecoration, statusStyle, disableStatus: flag, size };
  const tmp13 = pendingAvatar(importDefault(dependencyMap[20]), obj2);
  const obj3 = { style, disabled, onPress: callback, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[22]).intl;
  obj3.accessibilityLabel = intl.string(arg1(dependencyMap[22]).t.MUgHIN);
  let tmp15 = tmp13;
  if (flag2) {
    tmp15 = tmp13;
    if (null == pendingAvatarDecoration) {
      tmp15 = tmp13;
      if (!stateFromStores) {
        const obj4 = { style: animatedStyle, children: tmp13 };
        tmp15 = pendingAvatar(importDefault(dependencyMap[18]).View, obj4);
      }
    }
  }
  const items4 = [tmp15, ];
  obj5 = { style: items5 };
  const items5 = [tmp.editIcon, editIconStyle];
  const obj8 = arg1(dependencyMap[18]);
  const tmp14 = setPendingAvatar;
  const tmp20 = pendingAvatar;
  let str = "xs";
  if (size === arg1(dependencyMap[24]).AvatarSizes.EDIT_AVATAR_DECORATION) {
    str = "sm";
  }
  obj5.size = str;
  items4[1] = tmp20(importDefault(dependencyMap[23]), obj5);
  obj3.children = items4;
  return tmp14(arg1(dependencyMap[21]).PressableOpacity, obj3);
};
