// Module ID: 11498
// Function ID: 11499
// Name: ForumPostTitle
// Dependencies: [19, 21, 4836, 1365, 4832, 2]
// Exports: default

// Module 11498 (ForumPostTitle)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import size from "module_2" /* 2 */;

let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let obj = null;
if (PlatformUtils.isIOS()) {
  obj = { lineHeight: 22 };
}
const obj2 = { title: obj3 };
obj3 = { marginBottom: 6 };
const merged = Object.assign(obj);
let closure_3 = createStyles(obj2);
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  let ellipsizeMode;
  let hasUnreads;
  let lineClamp;
  let onTextLayout;
  let title;
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  const tmp = closure_3();
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  return jsx(Text_Text.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: tmp.title, onTextLayout, children: title });
};
