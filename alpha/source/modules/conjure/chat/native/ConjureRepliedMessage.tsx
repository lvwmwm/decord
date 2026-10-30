// Module ID: 12597
// Function ID: 12598
// Name: ConjureRepliedMessage
// Dependencies: [19, 17, 21, 12587, 5009, 575, 12598, 5063, 12054, 12599, 1114, 3865, 12600, 1188, 5619, 12606, 2]
// Exports: default

// Module 12597 (ConjureRepliedMessage)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 12054 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12587 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let tmp11;
const ConjureSelectedMentionDefault = tmp11(12606);
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
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureRepliedMessage.tsx");

export default function ConjureRepliedMessage(replied) {
  let ConjureUserAvatar;
  let intl;
  let items1;
  let items2;
  let obj6;
  replied = replied.replied;
  const onJump = replied.onJump;
  const tmp = closure_8();
  let obj = replied(12598);
  const messageAuthorUser = obj.useMessageAuthorUser(replied.userId);
  const obj2 = replied(5063);
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
  const useConjureMentionNames = replied(12599).useConjureMentionNames;
  replied(12599);
  if (memo != null) {
    body = memo.body;
  }
  if (body == null) {
    body = replied.content;
  }
  const str2 = body.replace(/\s+/g, " ");
  const conjureMentionNames = useConjureMentionNames(str2.trim());
  const obj3 = { style: tmp.root, onPress: onJump, disabled: null == onJump, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef3865.K0046m, { name: str, content: conjureMentionNames }), children: items1 };
  intl = tmp2(1114).intl;
  items1 = [, , , ];
  const obj4 = { style: tmp.spine };
  items1[0] = closure_6(closure_5, obj4);
  let tmp12Result = null;
  const tmp10 = closure_4;
  const tmp13 = closure_5;
  if (null != messageAuthorUser) {
    const obj5 = { style: tmp.avatar, children: closure_6(ConjureUserAvatar, obj6) };
    obj6 = { userId: replied.userId, size: replied(1188).AvatarSizes.SIZE_16 };
    ConjureUserAvatar = tmp2(12600).ConjureUserAvatar;
    tmp12Result = tmp12(tmp13, obj5);
  }
  items1[1] = tmp12Result;
  const obj7 = { variant: "text-xs/semibold", color: "text-default", style: tmp.name, lineClamp: 1, children: str };
  items1[2] = closure_6(replied(5619).Text, obj7);
  let tmp12Result2 = null;
  const obj8 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.content, lineClamp: 1, children: items2 };
  const Text = tmp2(5619).Text;
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
};
export const REPLY_PREVIEW_HEIGHT = 20;
