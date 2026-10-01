// Module ID: 8111
// Function ID: 8112
// Name: InAppReportsMessagePreview
// Dependencies: [19, 17, 21, 4836, 576, 7374, 4683, 4832, 1115, 8112, 2]
// Exports: default

// Module 8111 (InAppReportsMessagePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import Text_Text from "Text/Text" /* 4832 */;
import RowGeneratorDefault from "RowGenerator" /* 7374 */;
import ChatItemDefault from "ChatItem" /* 8112 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: obj2, title: { lineHeight: 16, marginBottom: 8 }, chatItemContainer: obj3 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 8 };
let closure_6 = createStyles(obj);
let obj4 = new RowGeneratorDefault();
obj4.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: false, inlineEmbedMedia: true, renderReactions: false });
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMessagePreview.tsx");

export default function MessagePreview(message) {
  let intl;
  let items;
  let items1;
  let obj5;
  message = message.message;
  const tmp = closure_6();
  const obj2 = { style: tmp.container, children: items };
  const obj = ColorUtils;
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: intl.string(intl2.t.iouM3a) };
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [React3(Text, obj3), ];
  obj4 = { accessible: true, style: items1, children: React3(ChatItemDefault, obj5) };
  items1 = [tmp.chatItemContainer, { borderColor: hexWithOpacityResult }];
  obj5 = { rowGenerator: obj4, maxHeight: 120, message, pointerEvents: "none" };
  items[1] = React3(View, obj4);
  return hasOwnProperty(View, obj2);
};
