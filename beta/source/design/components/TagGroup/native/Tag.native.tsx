// Module ID: 13981
// Function ID: 13982
// Name: Tag
// Dependencies: [19, 17, 21, 4836, 13979, 576, 13982, 4832, 2]
// Exports: Tag

// Module 13981 (Tag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import TagGroupTypes from "TagGroupTypes" /* 13979 */;
import TagGraphic from "TagGraphic" /* 13982 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  const obj = { tag: obj2, inline: { flexShrink: 1, minWidth: 0 }, label: { flexShrink: 1, color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT } };
  obj2 = { flexDirection: "row", alignItems: "center", gap: obj3.getTagGap(arg0), minHeight: obj4.getTagMinHeight(arg0), paddingVertical: obj5.getTagVerticalPadding(arg0), paddingHorizontal: obj6.getTagHorizontalPadding(arg0), borderWidth: TagGroupTypes.TAG_BORDER_WIDTH, borderRadius: obj7.getTagBorderRadius(arg0, arg1), borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
  obj3 = TagGroupTypes;
  obj4 = TagGroupTypes;
  obj5 = TagGroupTypes;
  obj6 = TagGroupTypes;
  obj7 = TagGroupTypes;
  ({ flexShrink: 1, color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT });
  return obj;
});
const result = size.fileFinishedImporting("design/components/TagGroup/native/Tag.native.tsx");

export const Tag = function Tag(variant) {
  let inline;
  let item;
  let items1;
  let obj4;
  ({ item, size, inline } = variant);
  const tmp = closure_6(size, variant.variant);
  const items = [tmp.tag, ];
  const tmp2 = hasOwnProperty;
  const tmp3 = View;
  if (inline) {
    inline = tmp.inline;
  }
  const obj = { style: items, children: items1 };
  items[1] = inline;
  let tmp4 = null;
  if (null != item.icon) {
    const obj2 = { graphic: item.icon, size };
    tmp4 = React3(TagGraphic.TagGraphic, obj2);
  }
  items1 = [tmp4, ];
  const obj3 = { color: "none", variant: obj4.getTagTextVariant(size), style: tmp.label, lineClamp: 1, children: item.label };
  const Text = Text_Text.Text;
  obj4 = TagGroupTypes;
  items1[1] = React3(Text, obj3);
  return tmp2(tmp3, obj);
};
