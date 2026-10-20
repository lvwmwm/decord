// Module ID: 12211
// Function ID: 12212
// Name: ConjureMessageAuthor
// Dependencies: [19, 17, 21, 4945, 587, 12197, 558, 576, 12212, 5195, 6859, 1128, 12208, 4994, 12213, 3820, 1202, 8526, 2]

// Module 12211 (ConjureMessageAuthor)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import Text_Text from "Text/Text" /* 5195 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12197 */;
import ConjureMessageTime from "ConjureMessageTime" /* 12212 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12213 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let tmp;
const AppsIcon2 = tmp(8526);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, name: { flexShrink: 1 }, time: { flexShrink: 0 }, conjureTile: size };
obj2 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE, height: ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_CODE, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageHeader(arg0) {
  let at;
  let color;
  let intl;
  let items;
  let name;
  let obj5;
  let onPressName;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(18);
  ({ name, color, at, onPressName } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== at) {
    const tmpResult = ConjureMessageTime;
    const describeMessageTimeResult = tmpResult.describeMessageTime(at);
    cResult[0] = at;
    cResult[1] = describeMessageTimeResult;
    tmp5 = describeMessageTimeResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === color) {
    if (cResult[3] === name) {
      let tmp7;
      if (cResult[4] === tmp4.name) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === name) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === onPressName) {
            let tmp9;
            if (cResult[9] === tmp4.name) {
              tmp9 = cResult[10];
            }
            if (cResult[11] === tmp4.time) {
              let tmp13;
              if (cResult[12] === tmp5) {
                tmp13 = cResult[13];
              }
              if (cResult[14] === tmp4.header) {
                if (cResult[15] === tmp9) {
                  let tmp16;
                  if (cResult[16] === tmp13) {
                    tmp16 = cResult[17];
                  }
                  return tmp16;
                }
              }
              const obj2 = { style: tmp4.header, children: items };
              items = [tmp9, tmp13];
              const tmp19 = metroRequire(View, obj2);
              cResult[14] = tmp4.header;
              cResult[15] = tmp9;
              cResult[16] = tmp13;
              cResult[17] = tmp19;
              tmp16 = tmp19;
            }
            let tmp14 = null;
            if (null != tmp5) {
              const obj3 = { variant: "text-xs/medium", color: "text-muted", style: tmp4.time, children: tmp5 };
              tmp14 = hasOwnProperty(tmp(5195).Text, obj3);
            }
            cResult[11] = tmp4.time;
            cResult[12] = tmp5;
            cResult[13] = tmp14;
            tmp13 = tmp14;
          }
        }
      }
      let tmp11 = tmp7;
      if (null != onPressName) {
        const obj4 = { style: tmp4.name, onPress: onPressName, onLongPress: onPressName, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(intl2.t.uCenkh, obj5), children: tmp7 };
        const PressableOpacity = tmp(6859).PressableOpacity;
        intl = tmp(1128).intl;
        obj5 = { username: name };
        tmp11 = hasOwnProperty(PressableOpacity, obj4);
      }
      cResult[6] = name;
      cResult[7] = tmp7;
      cResult[8] = onPressName;
      cResult[9] = tmp4.name;
      cResult[10] = tmp11;
      tmp9 = tmp11;
    }
  }
  const obj6 = { variant: "text-md/semibold", color, style: tmp4.name, lineClamp: 1, children: name };
  const tmp8 = hasOwnProperty(Text_Text.Text, obj6);
  cResult[2] = color;
  cResult[3] = name;
  cResult[4] = tmp4.name;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : (function ConjureMessageHeader(arg0) {
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
    const PressableOpacity = tmp2(6859).PressableOpacity;
    intl = tmp2(1128).intl;
    obj5 = { username: name };
    tmp5Result = tmp5(PressableOpacity, obj4);
  }
  items = [tmp5Result, ];
  let tmp5Result2 = null;
  if (null != describeMessageTimeResult) {
    const obj6 = { variant: "text-xs/medium", color: "text-muted", style: tmp.time, children: describeMessageTimeResult };
    tmp5Result2 = tmp5(tmp2(5195).Text, obj6);
  }
  items[1] = tmp5Result2;
  return tmp7(tmp8, obj3);
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureUserHeader(arg0) {
  let at;
  let messageAuthorUser;
  let tmp4;
  let userId;
  let obj = messageAuthorUser(576);
  const cResult = obj.c(6);
  ({ at, userId } = arg0);
  const obj2 = messageAuthorUser(12208);
  messageAuthorUser = obj2.useMessageAuthorUser(userId);
  const obj3 = messageAuthorUser(4994);
  const name = obj3.useName(messageAuthorUser);
  if (cResult[0] !== messageAuthorUser) {
    const fn = function t() {
      if (null != messageAuthorUser) {
        const obj = ConjureMessageActionSheet;
        const result = obj.openMessageAuthorProfile(tmp.id);
      }
    };
    cResult[0] = messageAuthorUser;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  let tmp5 = null;
  if (null != messageAuthorUser) {
    tmp5 = null;
    if (null != name) {
      if (cResult[2] === at) {
        if (cResult[3] === tmp4) {
          let tmp6;
          if (cResult[4] === name) {
            tmp6 = cResult[5];
          }
          tmp5 = tmp6;
        }
      }
      const obj4 = { name, color: "text-default", at, onPressName: tmp4 };
      const tmp9 = closure_5(closure_8, obj4);
      cResult[2] = at;
      cResult[3] = tmp4;
      cResult[4] = name;
      cResult[5] = tmp9;
      tmp6 = tmp9;
    }
  }
  return tmp5;
}) : (function ConjureUserHeader(arg0) {
  let at;
  let userId;
  let messageAuthorUser;
  ({ userId, at } = arg0);
  let obj = messageAuthorUser(12208);
  messageAuthorUser = obj.useMessageAuthorUser(userId);
  const obj2 = messageAuthorUser(4994);
  const name = obj2.useName(messageAuthorUser);
  [][0] = messageAuthorUser;
  let tmp4 = null;
  if (null != messageAuthorUser) {
    tmp4 = null;
    if (null != name) {
      const obj3 = { name, color: "text-default", at, onPressName: tmp3 };
      tmp4 = closure_5(closure_8, obj3);
    }
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHeader(arg0) {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  const at = arg0.at;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(_modDef3820.uk6jhJ);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== at) {
    const obj2 = { name: first, color: "text-brand", at };
    const tmp10 = hasOwnProperty(closure_8, obj2);
    cResult[1] = at;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function ConjureHeader(arg0) {
  let at;
  let intl;
  const obj = { name: intl.string(_modDef3820.uk6jhJ), color: "text-brand", at };
  at = arg0.at;
  intl = intl2.intl;
  return hasOwnProperty(closure_8, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureUserAvatar(arg0) {
  let messageAuthorUser;
  let tmp5;
  let userId;
  const tmp = messageAuthorUser;
  let obj = messageAuthorUser(576);
  const cResult = obj.c(9);
  ({ size, userId } = arg0);
  if (undefined === size) {
    size = tmp(1202).AvatarSizes.NORMAL;
  }
  const tmpResult = tmp(12208);
  messageAuthorUser = tmpResult.useMessageAuthorUser(userId);
  if (cResult[0] !== messageAuthorUser) {
    const fn = function t() {
      if (null != messageAuthorUser) {
        const obj = ConjureMessageActionSheet;
        const result = obj.openMessageAuthorProfile(tmp.id);
      }
    };
    cResult[0] = messageAuthorUser;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let tmp6 = null;
  if (null != messageAuthorUser) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(tmp(1128).t.iXAna6);
      cResult[2] = stringResult;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[2];
    }
    if (cResult[3] === size) {
      let tmp10;
      if (cResult[4] === messageAuthorUser) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp13;
        if (cResult[7] === tmp10) {
          tmp13 = cResult[8];
        }
        tmp6 = tmp13;
      }
      const obj2 = { onPress: tmp5, onLongPress: tmp5, accessibilityRole: "button", accessibilityLabel: tmp8, children: tmp10 };
      const tmp15 = closure_5(tmp(6859).PressableOpacity, obj2);
      cResult[6] = tmp5;
      cResult[7] = tmp10;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    }
    const obj3 = { size, user: messageAuthorUser, guildId: "r" };
    const tmp12 = closure_5(tmp(1202).Avatar, obj3);
    cResult[3] = size;
    cResult[4] = messageAuthorUser;
    cResult[5] = tmp12;
    tmp10 = tmp12;
  }
  return tmp6;
}) : (function ConjureUserAvatar(size) {
  let intl;
  let messageAuthorUser;
  let obj3;
  let NORMAL = size.size;
  const userId = size.userId;
  if (NORMAL === undefined) {
    const tmp = messageAuthorUser;
    NORMAL = messageAuthorUser(1202).AvatarSizes.NORMAL;
  }
  messageAuthorUser = undefined;
  let obj = messageAuthorUser(12208);
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
    const obj2 = { onPress: callback, onLongPress: callback, accessibilityRole: "button", accessibilityLabel: intl.string(messageAuthorUser(1128).t.iXAna6), children: closure_5(messageAuthorUser(1202).Avatar, obj3) };
    const PressableOpacity = tmp3(6859).PressableOpacity;
    intl = tmp3(1128).intl;
    obj3 = { size: NORMAL, user: messageAuthorUser, guildId: "r" };
    tmp7 = closure_5(PressableOpacity, obj2);
  }
  return tmp7;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAvatar() {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_BRAND };
    const AppsIcon = AppsIcon2.AppsIcon;
    const tmp8 = hasOwnProperty(AppsIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.conjureTile) {
    const obj3 = { style: tmp4.conjureTile, children: first };
    const tmp12 = hasOwnProperty(View, obj3);
    cResult[1] = tmp4.conjureTile;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (function ConjureAvatar() {
  let AppsIcon;
  let obj2;
  const obj = { style: closure_7().conjureTile, children: hasOwnProperty(AppsIcon, obj2) };
  obj2 = { size: "sm", color: nativeDefault.colors.TEXT_BRAND };
  AppsIcon = AppsIcon2.AppsIcon;
  return hasOwnProperty(View, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageAuthor.tsx");

export const ConjureMessageHeader = tmp4;
export const ConjureUserHeader = tmp5;
export const ConjureHeader = tmp6;
export const ConjureUserAvatar = tmp7;
export const ConjureAvatar = tmp8;
