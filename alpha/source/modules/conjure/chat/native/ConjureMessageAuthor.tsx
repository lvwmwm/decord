// Module ID: 13525
// Function ID: 13526
// Name: ConjureMessageAuthor
// Dependencies: [19, 17, 21, 5243, 575, 13513, 13526, 5866, 7364, 1113, 12357, 5309, 13527, 4079, 1187, 5957, 13530, 2]
// Exports: ConjureAvatar, ConjureHeader, ConjureUserAvatar, ConjureUserHeader

// Module 13525 (ConjureMessageAuthor)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import Text_Text from "Text/Text" /* 5866 */;
import FastImageDefault from "FastImage" /* 5957 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 13513 */;
import ConjureMessageTime from "ConjureMessageTime" /* 13526 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 13527 */;
import AssetRegistryDefault from "AssetRegistry" /* 13530 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
    const obj2 = { variant: "body-md/semibold", color, style: tmp.name, lineClamp: 1, children: name };
    const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
    let tmp5Result = tmp6;
    const obj3 = { style: tmp.header, children: items };
    const tmp7 = metroRequire;
    const tmp8 = View;
    if (null != onPressName) {
      const obj4 = { style: tmp.name, onPress: onPressName, onLongPress: onPressName, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(intl2.t.uCenkh, obj5), children: tmp6 };
      const PressableOpacity = tmp2(7364).PressableOpacity;
      intl = tmp2(1113).intl;
      obj5 = { username: name };
      tmp5Result = tmp5(PressableOpacity, obj4);
    }
    items = [tmp5Result, ];
    let tmp5Result2 = null;
    if (null != describeMessageTimeResult) {
      const obj6 = { variant: "body-xs/medium", color: "text-muted", style: tmp.time, children: describeMessageTimeResult };
      tmp5Result2 = tmp5(tmp2(5866).Text, obj6);
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
  let obj = messageAuthorUser(12357);
  messageAuthorUser = obj.useMessageAuthorUser(userId);
  const obj2 = messageAuthorUser(5309);
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
  const obj = { name: intl.string(_modDef4079.uk6jhJ), color: "text-brand", at };
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
    NORMAL = messageAuthorUser(1187).AvatarSizes.NORMAL;
  }
  messageAuthorUser = undefined;
  let obj = messageAuthorUser(12357);
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
    const obj2 = { onPress: callback, onLongPress: callback, accessibilityRole: "button", accessibilityLabel: intl.string(messageAuthorUser(1113).t.iXAna6), children: closure_5(messageAuthorUser(1187).Avatar, obj3) };
    const PressableOpacity = tmp3(7364).PressableOpacity;
    intl = tmp3(1113).intl;
    obj3 = { size: NORMAL, user: messageAuthorUser, guildId: "Array" };
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
