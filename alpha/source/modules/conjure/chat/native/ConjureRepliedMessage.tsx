// Module ID: 12068
// Function ID: 12069
// Name: chat/ConjureRepliedMessage
// Dependencies: [19, 17, 21, 12057, 5151, 587, 558, 576, 12069, 5018, 11587, 12070, 1126, 3862, 12071, 1200, 5147, 12076, 2]

// Module 12068 (chat/ConjureRepliedMessage)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import _modDef3862 from "module_3862" /* 3862 */;
import UserUtils from "UserUtils" /* 5018 */;
import Text_Text from "Text/Text" /* 5147 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 11587 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12057 */;
import conjureMessageAuthors from "conjureMessageAuthors" /* 12069 */;
import conjureMentions from "conjureMentions" /* 12070 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12076 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5151 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const diff = ConjureNativeStatusLine.MESSAGE_EDGE_INSET + ConjureNativeStatusLine.MESSAGE_AVATAR_SIZE / 2 - 1;
const diff1 = ConjureNativeStatusLine.MESSAGE_CONTENT_INSET - 4 - diff;
let createStyles = createStyles_mod;
let obj = { root: obj2, spine: rect, avatar: { marginRight: 4 }, name: { flexShrink: 0, marginRight: 4, maxWidth: "40%" }, content: { flex: 1 } };
obj2 = { marginLeft: diff - ConjureNativeStatusLine.MESSAGE_CONTENT_INSET, paddingLeft: diff1 + 4, height: 20, flexDirection: "row", alignItems: "flex-start" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: 0, top: 9, bottom: 0, width: diff1, borderTopWidth: 2, borderLeftWidth: 2, borderColor: nativeDefault.colors.SPINE_DEFAULT, borderTopLeftRadius: Math.round(0.25 * diff1) };
let closure_8 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureRepliedMessage(arg0) {
  let ConjureUserAvatar;
  let items;
  let items1;
  let obj10;
  let onJump;
  let replied;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(32);
  ({ replied, onJump } = arg0);
  const tmp4 = closure_8();
  const obj2 = conjureMessageAuthors;
  const messageAuthorUser = obj2.useMessageAuthorUser(replied.userId);
  const obj3 = UserUtils;
  let str = obj3.useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== replied.content) {
    const tmpResult = ConjureDesignFeedback;
    const result = tmpResult.parseConjureDesignRemark(replied.content);
    cResult[0] = replied.content;
    cResult[1] = result;
    tmp6 = result;
  } else {
    tmp6 = cResult[1];
  }
  let body;
  if (tmp6 != null) {
    body = tmp6.body;
  }
  if (body == null) {
    body = replied.content;
  }
  if (cResult[2] !== body) {
    const str3 = body.replace(/\s+/g, " ");
    const trimmed = str3.trim();
    cResult[2] = body;
    cResult[3] = trimmed;
    tmp9 = trimmed;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult2 = conjureMentions;
  const conjureMentionNames = tmpResult2.useConjureMentionNames(tmp9);
  if (cResult[4] === conjureMentionNames) {
    let tmp14;
    let tmp16;
    if (cResult[5] === str) {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== tmp4.spine) {
      const obj4 = { style: tmp4.spine };
      const tmp19 = metroRequire(hasOwnProperty, obj4);
      cResult[7] = tmp4.spine;
      cResult[8] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === replied.userId) {
      if (cResult[10] === tmp4.avatar) {
        let tmp20;
        if (cResult[11] === messageAuthorUser) {
          tmp20 = cResult[12];
        }
        if (cResult[13] === str) {
          let tmp24;
          let tmp27;
          if (cResult[14] === tmp4.name) {
            tmp24 = cResult[15];
          }
          if (cResult[16] !== tmp6) {
            let tmp28 = null;
            if (null != tmp6) {
              const obj5 = { label: tmp6.label, variant: "text-xs/medium" };
              tmp28 = metroRequire(ConjureSelectedMentionDefault, obj5);
            }
            cResult[16] = tmp6;
            cResult[17] = tmp28;
            tmp27 = tmp28;
          } else {
            tmp27 = cResult[17];
          }
          let str4 = null;
          if (null != tmp6) {
            str4 = null;
            if ("" !== conjureMentionNames) {
              str4 = " ";
            }
          }
          if (cResult[18] === conjureMentionNames) {
            if (cResult[19] === tmp4.content) {
              if (cResult[20] === tmp27) {
                let tmp31;
                if (cResult[21] === str4) {
                  tmp31 = cResult[22];
                }
                if (cResult[23] === onJump) {
                  if (cResult[24] === tmp4.root) {
                    if (cResult[25] === tmp31) {
                      if (cResult[26] === null == onJump) {
                        if (cResult[27] === tmp14) {
                          if (cResult[28] === tmp16) {
                            if (cResult[29] === tmp20) {
                              let tmp34;
                              if (cResult[30] === tmp24) {
                                tmp34 = cResult[31];
                              }
                              return tmp34;
                            }
                          }
                        }
                      }
                    }
                  }
                }
                const obj6 = { style: tmp12, onPress: onJump, disabled: null == onJump, accessibilityRole: "button", accessibilityLabel: tmp14, children: items };
                items = [tmp16, tmp20, tmp24, tmp31];
                const tmp37 = metroImportDefault(React3, obj6);
                cResult[23] = onJump;
                cResult[24] = tmp4.root;
                cResult[25] = tmp31;
                cResult[26] = null == onJump;
                cResult[27] = tmp14;
                cResult[28] = tmp16;
                cResult[29] = tmp20;
                cResult[30] = tmp24;
                cResult[31] = tmp37;
                tmp34 = tmp37;
              }
            }
          }
          const obj7 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp4.content, lineClamp: 1, children: items1 };
          items1 = [tmp27, str4, conjureMentionNames];
          const tmp33 = metroImportDefault(Text_Text.Text, obj7);
          cResult[18] = conjureMentionNames;
          cResult[19] = tmp4.content;
          cResult[20] = tmp27;
          cResult[21] = str4;
          cResult[22] = tmp33;
          tmp31 = tmp33;
        }
        const obj8 = { variant: "text-xs/semibold", color: "text-default", style: tmp4.name, lineClamp: 1, children: str };
        const tmp26 = metroRequire(Text_Text.Text, obj8);
        cResult[13] = str;
        cResult[14] = tmp4.name;
        cResult[15] = tmp26;
        tmp24 = tmp26;
      }
    }
    let tmp21 = null;
    if (null != messageAuthorUser) {
      const obj9 = { style: tmp4.avatar, children: metroRequire(ConjureUserAvatar, obj10) };
      obj10 = { userId: replied.userId, size: native.AvatarSizes.SIZE_16 };
      ConjureUserAvatar = tmp(12071).ConjureUserAvatar;
      tmp21 = metroRequire(hasOwnProperty, obj9);
    }
    cResult[9] = replied.userId;
    cResult[10] = tmp4.avatar;
    cResult[11] = messageAuthorUser;
    cResult[12] = tmp21;
    tmp20 = tmp21;
  }
  const intl = tmp(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3862.K0046m, { name: str, content: conjureMentionNames });
  cResult[4] = conjureMentionNames;
  cResult[5] = str;
  cResult[6] = formatToPlainStringResult;
  tmp14 = formatToPlainStringResult;
}) : (function ConjureRepliedMessage(replied) {
  let ConjureUserAvatar;
  let intl;
  let items1;
  let items2;
  let obj6;
  replied = replied.replied;
  const onJump = replied.onJump;
  const tmp = closure_8();
  let obj = replied(12069);
  const messageAuthorUser = obj.useMessageAuthorUser(replied.userId);
  const obj2 = replied(5018);
  let str = obj2.useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  const items = [replied.content];
  const memo = react.useMemo(() => {
    const obj = ConjureDesignFeedback;
    return obj.parseConjureDesignRemark(replied.content);
  }, items);
  let body;
  const useConjureMentionNames = replied(12070).useConjureMentionNames;
  replied(12070);
  if (memo != null) {
    body = memo.body;
  }
  if (body == null) {
    body = replied.content;
  }
  const str2 = body.replace(/\s+/g, " ");
  const conjureMentionNames = useConjureMentionNames(str2.trim());
  const obj3 = { style: tmp.root, onPress: onJump, disabled: null == onJump, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef3862.K0046m, { name: str, content: conjureMentionNames }), children: items1 };
  intl = tmp2(1126).intl;
  items1 = [, , , ];
  const obj4 = { style: tmp.spine };
  items1[0] = closure_6(closure_5, obj4);
  let tmp12Result = null;
  const tmp10 = closure_4;
  const tmp13 = closure_5;
  if (null != messageAuthorUser) {
    const obj5 = { style: tmp.avatar, children: closure_6(ConjureUserAvatar, obj6) };
    obj6 = { userId: replied.userId, size: replied(1200).AvatarSizes.SIZE_16 };
    ConjureUserAvatar = tmp2(12071).ConjureUserAvatar;
    tmp12Result = tmp12(tmp13, obj5);
  }
  items1[1] = tmp12Result;
  const obj7 = { variant: "text-xs/semibold", color: "text-default", style: tmp.name, lineClamp: 1, children: str };
  items1[2] = closure_6(replied(5147).Text, obj7);
  let tmp12Result2 = null;
  const obj8 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.content, lineClamp: 1, children: items2 };
  const Text = tmp2(5147).Text;
  if (null != memo) {
    const obj9 = { label: memo.label, variant: "text-xs/medium" };
    tmp12Result2 = tmp12(ConjureSelectedMentionDefault, obj9);
  }
  items2 = [tmp12Result2, , ];
  let str3 = null;
  if (null != memo) {
    str3 = null;
    if ("" !== conjureMentionNames) {
      str3 = " ";
    }
  }
  items2[1] = str3;
  items2[2] = conjureMentionNames;
  items1[3] = closure_7(Text, obj8);
  return closure_7(tmp10, obj3);
});
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureRepliedMessage.tsx");

export default tmp7;
export const REPLY_PREVIEW_HEIGHT = 20;
