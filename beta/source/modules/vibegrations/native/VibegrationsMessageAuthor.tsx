// Module ID: 16338
// Function ID: 16339
// Name: VibegrationsMessageAuthor
// Dependencies: [19, 17, 1372, 21, 4836, 576, 16335, 16339, 504, 16340, 4832, 5435, 1115, 4678, 16341, 3715, 1177, 5374, 2]
// Exports: VibegrationsConjureAvatar, VibegrationsConjureHeader, VibegrationsUserAvatar, VibegrationsUserHeader, useMessageAuthorUser

// Module 16338 (VibegrationsMessageAuthor)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import Text_Text from "Text/Text" /* 4832 */;
import AppsIcon2 from "AppsIcon" /* 5374 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16335 */;
import VibegrationsMessageTime from "VibegrationsMessageTime" /* 16340 */;
import VibegrationsMessageActionSheet from "VibegrationsMessageActionSheet" /* 16341 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
class VibegrationsMessageHeader {
  constructor(arg0) {
    let at;
    let color;
    let intl;
    let items;
    let name;
    let obj5;
    let onPressName;
    ({ name, onPressName } = arg0);
    ({ color, at } = arg0);
    const tmp = closure_8();
    const obj = VibegrationsMessageTime;
    const describeMessageTimeResult = obj.describeMessageTime(at);
    const obj2 = { variant: "text-md/semibold", color, style: tmp.name, lineClamp: 1, children: name };
    const tmp6 = metroRequire(Text_Text.Text, obj2);
    let tmp5Result = tmp6;
    const obj3 = { style: tmp.header, children: items };
    const tmp7 = metroImportDefault;
    const tmp8 = View;
    if (null != onPressName) {
      const obj4 = { style: tmp.name, onPress: onPressName, onLongPress: onPressName, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(intl2.t.uCenkh, obj5), children: tmp6 };
      const PressableOpacity = tmp2(5435).PressableOpacity;
      intl = tmp2(1115).intl;
      obj5 = { username: name };
      tmp5Result = tmp5(PressableOpacity, obj4);
    }
    items = [tmp5Result, ];
    let tmp5Result2 = null;
    if (null != describeMessageTimeResult) {
      const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.time, children: describeMessageTimeResult };
      tmp5Result2 = tmp5(tmp2(4832).Text, obj6);
    }
    items[1] = tmp5Result2;
    return tmp7(tmp8, obj3);
  }
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, name: { flexShrink: 1 }, time: { flexShrink: 0 }, conjureTile: size };
obj2 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: VibegrationsNativeStatusLine.MESSAGE_AVATAR_SIZE, height: VibegrationsNativeStatusLine.MESSAGE_AVATAR_SIZE, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_CODE, alignItems: "center", justifyContent: "center" };
const metroImportAll = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageAuthor.tsx");

export const useMessageAuthorUser = function useMessageAuthorUser(userId) {
  _require = userId;
  const items = [userId];
  const effect = react.useEffect(() => {
    const obj = stateFromStores(dependencyMap[7]);
    return obj.requestMessageAuthor(userId);
  }, items);
  const items1 = [UserStore];
  const items2 = [userId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items1, () => {
    let user = null;
    const resolveMessageAuthor = stateFromStores(dependencyMap[7]).resolveMessageAuthor;
    stateFromStores(dependencyMap[7]);
    if (null != userId) {
      user = authStore.getUser(tmp2);
    }
    return resolveMessageAuthor(userId, user, authStore.getCurrentUser());
  }, items2);
};
export { VibegrationsMessageHeader };
export const VibegrationsUserHeader = function VibegrationsUserHeader(userId) {
  userId = userId.userId;
  let stateFromStores;
  const items = [userId];
  const at = userId.at;
  const effect = react.useEffect(() => {
    const obj = stateFromStores(dependencyMap[7]);
    return obj.requestMessageAuthor(userId);
  }, items);
  let obj = stateFromStores(504);
  const items1 = [UserStore];
  const items2 = [userId];
  stateFromStores = obj.useStateFromStores(items1, () => {
    let user = null;
    const resolveMessageAuthor = stateFromStores(dependencyMap[7]).resolveMessageAuthor;
    stateFromStores(dependencyMap[7]);
    if (null != userId) {
      user = authStore.getUser(tmp2);
    }
    return resolveMessageAuthor(userId, user, authStore.getCurrentUser());
  }, items2);
  const obj2 = stateFromStores(4678);
  const name = obj2.useName(stateFromStores);
  [][0] = stateFromStores;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != name) {
      const obj3 = { name, color: "text-default", at, onPressName: tmp4 };
      tmp5 = closure_6(VibegrationsMessageHeader, obj3);
    }
  }
  return tmp5;
};
export const VibegrationsConjureHeader = function VibegrationsConjureHeader(arg0) {
  let at;
  let intl;
  const obj = { name: intl.string(_modDef3715.Xmvb23), color: "text-brand", at };
  at = arg0.at;
  intl = intl2.intl;
  return metroRequire(VibegrationsMessageHeader, obj);
};
export const VibegrationsUserAvatar = function VibegrationsUserAvatar(arg0) {
  let intl;
  let obj3;
  let stateFromStores;
  let userId;
  ({ userId, size } = arg0);
  if (size === undefined) {
    const tmp = stateFromStores;
    const tmp2 = dependencyMap;
    size = stateFromStores(1177).AvatarSizes.NORMAL;
  }
  stateFromStores = undefined;
  const items = [userId];
  const effect = react.useEffect(() => {
    const obj = stateFromStores(dependencyMap[7]);
    return obj.requestMessageAuthor(userId);
  }, items);
  let obj = stateFromStores(504);
  const items1 = [UserStore];
  const items2 = [userId];
  stateFromStores = obj.useStateFromStores(items1, () => {
    let user = null;
    const resolveMessageAuthor = stateFromStores(dependencyMap[7]).resolveMessageAuthor;
    stateFromStores(dependencyMap[7]);
    if (null != userId) {
      user = authStore.getUser(tmp2);
    }
    return resolveMessageAuthor(userId, user, authStore.getCurrentUser());
  }, items2);
  const items3 = [stateFromStores];
  const callback = react.useCallback(() => {
    if (null != stateFromStores) {
      const obj = VibegrationsMessageActionSheet;
      const result = obj.openMessageAuthorProfile(tmp.id);
    }
  }, items3);
  let tmp8 = null;
  if (null != stateFromStores) {
    const obj2 = { onPress: callback, onLongPress: callback, accessibilityRole: "button", accessibilityLabel: intl.string(stateFromStores(1115).t.iXAna6), children: closure_6(stateFromStores(1177).Avatar, obj3) };
    const PressableOpacity = tmp4(5435).PressableOpacity;
    intl = tmp4(1115).intl;
    obj3 = { size, user: stateFromStores, guildId: "Array" };
    tmp8 = closure_6(PressableOpacity, obj2);
  }
  return tmp8;
};
export const VibegrationsConjureAvatar = function VibegrationsConjureAvatar() {
  let AppsIcon;
  let obj2;
  const obj = { style: closure_8().conjureTile, children: metroRequire(AppsIcon, obj2) };
  obj2 = { size: "sm", color: nativeDefault.colors.TEXT_BRAND };
  AppsIcon = AppsIcon2.AppsIcon;
  return metroRequire(View, obj);
};
