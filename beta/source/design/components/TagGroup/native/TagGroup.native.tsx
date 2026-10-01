// Module ID: 13978
// Function ID: 13979
// Name: TagGroup
// Dependencies: [19, 17, 21, 4836, 576, 13979, 13981, 2]
// Exports: TagGroup

// Module 13978 (TagGroup)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Tag from "Tag" /* 13981 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { group: obj2, inline: { flexWrap: "nowrap", flexShrink: 1, overflow: "hidden" } };
obj2 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("design/components/TagGroup/native/TagGroup.native.tsx");

export const TagGroup = function TagGroup(label) {
  let items;
  let layout;
  let variant;
  ({ items, layout } = label);
  label = label.label;
  if (layout === undefined) {
    layout = "default";
  }
  ({ size, variant } = label);
  if (variant === undefined) {
    variant = "default";
  }
  size = undefined;
  if (size == null) {
    const obj = layout(variant[5]);
    size = obj.getDefaultTagGroupSize(layout);
  }
  const tmp3 = closure_4();
  const items1 = [tmp3.group, ];
  let inline = "inline" === layout;
  const tmp4 = jsx;
  const tmp5 = size;
  if (inline) {
    inline = tmp3.inline;
  }
  items1[1] = inline;
  const obj2 = { style: items1, accessibilityRole: "list", accessibilityLabel: label, children: items.map((item) => jsx(Tag.Tag, { item, size, variant, inline: "inline" === layout }, item.id)) };
  return tmp4(tmp5, obj2);
};
