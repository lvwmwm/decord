// Module ID: 11351
// Function ID: 11352
// Name: ForumOriginalPoster
// Dependencies: [19, 17, 21, 4836, 576, 5753, 4832, 1115, 2]
// Exports: getForumOriginalPoster

// Module 11351 (ForumOriginalPoster)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
class ForumOriginalPoster {
  constructor() {
    let Text;
    let intl;
    let intl2;
    let items;
    let items1;
    let obj3;
    const tmp = closure_5();
    const obj = { style: tmp.container, children: items1 };
    const obj2 = { style: items, children: _false(Text, obj3) };
    items = [, ];
    ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp);
    obj3 = { variant: "text-xs/semibold", color: "text-brand", children: intl.string(intl3.t.fyE8sH) };
    Text = Text_Text.Text;
    intl = intl3.intl;
    items1 = [_false(View, obj2), ];
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.uN6Emt) };
    const Text2 = Text_Text.Text;
    intl2 = intl3.intl;
    items1[1] = _false(Text2, obj4);
    return React3(View, obj);
  }
}
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, opIcon: obj2, opIconBackground: obj3 };
obj2 = { borderRadius: nativeDefault.radii.sm, marginEnd: 8, paddingHorizontal: 4 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: LegacyTokens.DARK_BRAND_260_LIGHT_BRAND_200 };
const hasOwnProperty = createStyles(obj);
const result = size.fileFinishedImporting("modules/forums/native/ForumOriginalPoster.tsx");

export default ForumOriginalPoster;
export const getForumOriginalPoster = function getForumOriginalPoster() {
  return _false(ForumOriginalPoster, {});
};
