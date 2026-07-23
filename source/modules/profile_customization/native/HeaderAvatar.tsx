// Module ID: 7880
// Function ID: 62739
// Dependencies: [31, 27, 4122, 1917, 4217, 653, 33, 4130, 689, 1273, 566, 7881, 7846, 7882, 7883, 4660, 2]

// Module 7880
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.avatarStatusStyle = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = require("result").forwardRef((user, ref) => {
  let activities;
  let dependencyMap;
  let disableStatus;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let pendingAvatarDecoration;
  let size;
  let status;
  let statusStyle;
  let style;
  user = user.user;
  const guildId = user.guildId;
  ({ pendingAvatarSrc: dependencyMap, style, onPress, size } = user);
  ({ disableStatus, pendingAvatarDecoration, statusStyle } = user);
  if (size === undefined) {
    size = user(1273).AvatarSizes.XXLARGE;
  }
  let flag = user.animate;
  if (flag === undefined) {
    flag = true;
  }
  let obj = { user: 0, guildId: 0, disableStatus: 0, pendingAvatarSrc: 0, pendingAvatarDecoration: 0, style: 0, statusStyle: 0, onPress: 0, size: 0, animate: 0 };
  Object.setPrototypeOf(null);
  let merged = Object.assign(user, obj);
  let id;
  let stateFromStores;
  obj = undefined;
  function renderAvatar() {
    if (undefined !== closure_2) {
      let obj = {};
      const obj3 = user(outer1_2[14]);
      obj.source = obj3.getAvatarSource(user, guildId, closure_2, stateFromStores);
      const merged = Object.assign(obj);
    } else {
      obj = { user, guildId };
      const merged1 = Object.assign(obj);
    }
    return outer1_8(user(outer1_2[9]).Avatar, obj);
  }
  id = user.id;
  let obj1 = user(566);
  const items = [stateFromStores];
  stateFromStores = obj1.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  let obj2 = user(566);
  const items1 = [closure_6];
  const items2 = [id];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => ({ isMobileOnline: outer1_6.isMobileOnline(id), isVROnline: outer1_6.isVROnline(id), status: outer1_6.getStatus(id), activities: outer1_6.getActivities(id), customStatusActivity: outer1_6.findActivity(id, (type) => type.type === outer2_7.CUSTOM_STATUS) }), items2);
  ({ isMobileOnline, isVROnline, status, activities } = stateFromStoresObject);
  const tmp5 = callback();
  const items3 = [obj];
  const stateFromStores1 = user(566).useStateFromStores(items3, () => {
    let member = null;
    if (null != guildId) {
      member = obj.getMember(guildId, id);
    }
    return member;
  });
  const obj4 = user(566);
  const tmp9 = guildId(7881);
  obj = { pendingValue: pendingAvatarDecoration };
  let avatarDecoration;
  if (null != user) {
    avatarDecoration = user.avatarDecoration;
  }
  obj.userValue = avatarDecoration;
  let avatarDecoration1;
  if (null != stateFromStores1) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj.guildValue = avatarDecoration1;
  obj.guildId = guildId;
  obj = { isMobileOnline, isVROnline, size };
  let tmp13 = null;
  const obj5 = user(7846);
  if (!disableStatus) {
    tmp13 = status;
  }
  obj.status = tmp13;
  const items4 = [tmp5.avatarStatusStyle, statusStyle];
  obj.statusStyle = items4;
  obj.streaming = guildId(7882)(activities);
  if (flag) {
    flag = !stateFromStores;
  }
  obj.animate = flag;
  obj.avatarDecoration = tmp9(user(7846).getProfilePreviewValue(obj));
  if (null != onPress) {
    obj1 = { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" };
    let merged1 = Object.assign(merged);
    obj1["children"] = renderAvatar();
    let tmp19 = jsx(user(4660).PressableOpacity, { ref, onPress, onLongPress: onPress, style, activeOpacity: 0.8, accessibilityRole: "imagebutton" });
  } else {
    obj2 = { ref, style, accessibilityRole: "image", accessible: true };
    const merged2 = Object.assign(merged);
    obj2["children"] = renderAvatar();
    tmp19 = <id ref={arg1} style={style} accessibilityRole="image" accessible />;
  }
  return tmp19;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/profile_customization/native/HeaderAvatar.tsx");

export default forwardRefResult;
