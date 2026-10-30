// Module ID: 12600
// Function ID: 12601
// Name: ConjureMessageAuthor
// Dependencies: [19, 17, 21, 5009, 575, 12587, 12601, 5619, 6974, 1114, 12598, 5063, 12602, 3865, 1188, 5712, 12605, 2]
// Exports: ConjureAvatar, ConjureHeader, ConjureUserAvatar, ConjureUserHeader

// Module 12600 (ConjureMessageAuthor)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12587 */;
import ConjureMessageTime from "ConjureMessageTime" /* 12601 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12602 */;
import AssetRegistryDefault from "AssetRegistry" /* 12605 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
class ConjureMessageHeader {
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
    const tmp = closure_7();
    const obj = ConjureMessageTime;
    const describeMessageTimeResult = obj.describeMessageTime(at);
    const obj2 = { variant: "text-md/semibold", color, style: tmp.name, lineClamp: 1, children: name };
    const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
    let tmp5Result = tmp6;
    const obj3 = { style: tmp.header, children: items };
    const tmp7 = metroRequire;
    const tmp8 = View;
    if (null != onPressName) {
      const obj4 = { style: tmp.name, onPress: onPressName, onLongPress: onPressName, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(intl2.t.uCenkh, obj5), children: tmp6 };
      const PressableOpacity = tmp2(6974).PressableOpacity;
      intl = tmp2(1114).intl;
      obj5 = { username: name };
      tmp5Result = tmp5(PressableOpacity, obj4);
    }
    items = [tmp5Result, ];
    let tmp5Result2 = null;
    if (null != describeMessageTimeResult) {
      const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.time, children: describeMessageTimeResult };
      tmp5Result2 = tmp5(tmp2(5619).Text, obj6);
    }
    items[1] = tmp5Result2;
    return tmp7(tmp8, obj3);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, name: { flexShrink: 1 }, time: { flexShrink: 0 }, agentAvatar: size };
obj2 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE, height: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE, borderRadius: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE / 2 };
const metroImportDefault = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageAuthor.tsx");

export { ConjureMessageHeader };
export function ConjureUserHeader(arg0) {
  let at;
  let userId;
  let messageAuthorUser;
  ({ userId, at } = arg0);
  let obj = messageAuthorUser(12598);
  messageAuthorUser = obj.useMessageAuthorUser(userId);
  const obj2 = messageAuthorUser(5063);
  const name = obj2.useName(messageAuthorUser);
  [][0] = messageAuthorUser;
  let tmp4 = null;
  if (null != messageAuthorUser) {
    tmp4 = null;
    if (null != name) {
      const obj3 = { name, color: "text-default", at, onPressName: tmp3 };
      tmp4 = closure_5(ConjureMessageHeader, obj3);
    }
  }
  return tmp4;
}
export function ConjureHeader(arg0) {
  let at;
  let intl;
  const obj = { name: intl.string(_modDef3865.uk6jhJ), color: "text-brand", at };
  at = arg0.at;
  intl = intl2.intl;
  return hasOwnProperty(ConjureMessageHeader, obj);
}
export function ConjureUserAvatar(size) {
  let intl;
  let messageAuthorUser;
  let obj3;
  let NORMAL = size.size;
  const userId = size.userId;
  if (NORMAL === undefined) {
    const tmp = messageAuthorUser;
    NORMAL = messageAuthorUser(1188).AvatarSizes.NORMAL;
  }
  messageAuthorUser = undefined;
  let obj = messageAuthorUser(12598);
  messageAuthorUser = obj.useMessageAuthorUser(userId);
  const items = [messageAuthorUser];
  const callback = react.useCallback(() => {
    if (null != messageAuthorUser) {
      const obj = ConjureMessageActionSheet;
      const result = obj.openMessageAuthorProfile(tmp.id);
    }
  }, items);
  let tmp7 = null;
  if (null != messageAuthorUser) {
    const obj2 = { onPress: callback, onLongPress: callback, accessibilityRole: "button", accessibilityLabel: intl.string(messageAuthorUser(1114).t.iXAna6), children: closure_5(messageAuthorUser(1188).Avatar, obj3) };
    const PressableOpacity = tmp3(6974).PressableOpacity;
    intl = tmp3(1114).intl;
    obj3 = { size: NORMAL, user: messageAuthorUser, guildId: "r" };
    tmp7 = closure_5(PressableOpacity, obj2);
  }
  return tmp7;
}
export function ConjureAvatar() {
  let tmp;
  const obj = { source: AssetRegistryDefault, style: tmp.agentAvatar };
  tmp = closure_7();
  const tmp2 = FastImageDefault;
  return hasOwnProperty(tmp2, obj);
}
