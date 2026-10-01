// Module ID: 16337
// Function ID: 16338
// Name: VibegrationsRepliedMessage
// Dependencies: [19, 17, 21, 16335, 4836, 576, 16338, 4678, 16238, 1115, 3715, 1177, 4832, 16342, 2]
// Exports: default

// Module 16337 (VibegrationsRepliedMessage)
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16238 */;
import VibegrationsNativeStatusLine from "VibegrationsNativeStatusLine" /* 16335 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let tmp10;
const VibegrationsSelectedMentionDefault = tmp10(16342);
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const diff = VibegrationsNativeStatusLine.MESSAGE_EDGE_INSET + VibegrationsNativeStatusLine.MESSAGE_AVATAR_SIZE / 2 - 1;
const diff1 = VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET - 4 - diff;
let createStyles = createStyles_mod;
let obj = { root: obj2, spine: rect, avatar: { marginRight: 4 }, name: { flexShrink: 0, marginRight: 4, maxWidth: "40%" }, content: { flex: 1 } };
obj2 = { marginLeft: diff - VibegrationsNativeStatusLine.MESSAGE_CONTENT_INSET, paddingLeft: diff1 + 4, height: 20, flexDirection: "row", alignItems: "flex-start" };
createStyles = createStyles.createStyles;
rect = { position: "absolute", left: 0, top: 9, bottom: 0, width: diff1, borderTopWidth: 2, borderLeftWidth: 2, borderColor: nativeDefault.colors.SPINE_DEFAULT, borderTopLeftRadius: Math.round(0.25 * diff1) };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsRepliedMessage.tsx");

export default function VibegrationsRepliedMessage(replied) {
  let VibegrationsUserAvatar;
  let intl;
  let items1;
  let items2;
  let obj6;
  replied = replied.replied;
  const onJump = replied.onJump;
  const tmp = closure_8();
  let obj = replied(16338);
  const messageAuthorUser = obj.useMessageAuthorUser(replied.userId);
  const obj2 = replied(4678);
  let str = obj2.useName(messageAuthorUser);
  if (str == null) {
    str = "";
  }
  const items = [replied.content];
  const memo = react.useMemo(() => {
    const obj = VibegrationsDesignFeedback;
    return obj.parseVibegrationsDesignRemark(replied.content);
  }, items);
  let body;
  if (memo != null) {
    body = memo.body;
  }
  if (body == null) {
    body = replied.content;
  }
  const str2 = body.replace(/\s+/g, " ");
  const trimmed = str2.trim();
  const obj3 = { style: tmp.root, onPress: onJump, disabled: null == onJump, accessibilityRole: "button", accessibilityLabel: intl.formatToPlainString(_modDef3715.loFt7s, { name: str, content: trimmed }), children: items1 };
  intl = tmp2(1115).intl;
  items1 = [, , , ];
  const obj4 = { style: tmp.spine };
  items1[0] = closure_6(closure_5, obj4);
  let tmp11Result = null;
  const tmp12 = closure_5;
  const tmp9 = closure_4;
  if (null != messageAuthorUser) {
    const obj5 = { style: tmp.avatar, children: closure_6(VibegrationsUserAvatar, obj6) };
    obj6 = { userId: replied.userId, size: replied(1177).AvatarSizes.SIZE_16 };
    VibegrationsUserAvatar = tmp2(16338).VibegrationsUserAvatar;
    tmp11Result = tmp11(tmp12, obj5);
  }
  items1[1] = tmp11Result;
  const obj7 = { variant: "text-xs/semibold", color: "text-default", style: tmp.name, lineClamp: 1, children: str };
  items1[2] = closure_6(replied(4832).Text, obj7);
  let tmp11Result2 = null;
  const obj8 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.content, lineClamp: 1, children: items2 };
  const Text = tmp2(4832).Text;
  if (null != memo) {
    const obj9 = { label: memo.label, variant: "text-xs/medium" };
    tmp11Result2 = tmp11(VibegrationsSelectedMentionDefault, obj9);
  }
  items2 = [tmp11Result2, , ];
  let str3 = null;
  if (null != memo) {
    str3 = null;
    if ("" !== trimmed) {
      str3 = " ";
    }
  }
  items2[1] = str3;
  items2[2] = trimmed;
  items1[3] = closure_7(Text, obj8);
  return closure_7(tmp9, obj3);
};
export const REPLY_PREVIEW_HEIGHT = 20;
