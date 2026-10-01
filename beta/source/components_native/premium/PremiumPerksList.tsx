// Module ID: 15291
// Function ID: 15292
// Name: PremiumPerksList
// Dependencies: [19, 17, 21, 4836, 576, 4832, 2]
// Exports: default

// Module 15291 (PremiumPerksList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { perkInfoContainer: { flexDirection: "row", alignItems: "center", gap: 16 }, perkInfoTextContainer: { flexDirection: "column", gap: 4, maxWidth: 279 }, perkListContainer: { width: "100%", paddingVertical: 24, flexDirection: "column", gap: 24 }, perkIconContainer: size };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, width: 40, height: 40, justifyContent: "center", alignItems: "center" };
let closure_5 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default function PremiumPerksList(perks) {
  perks = perks.perks;
  const tmp = closure_5();
  let closure_0 = tmp;
  let obj = {
    style: tmp.perkListContainer,
    children: perks.map((children, index) => {
      let items;
      let items1;
      const obj = { style: closure_0.perkInfoContainer, children: items };
      items = [, ];
      const obj2 = { style: closure_0.perkIconContainer, children: _false(children.IconComponent, { size: "md" }) };
      items[0] = _false(View, obj2);
      const obj3 = { style: closure_0.perkInfoTextContainer, children: items1 };
      items1 = [, ];
      const obj4 = { variant: "text-md/bold", color: "text-strong", children: children.label };
      items1[0] = _false(Text_Text.Text, obj4);
      const obj5 = { variant: "text-md/medium", color: "text-default", children: children.description };
      items1[1] = _false(Text_Text.Text, obj5);
      items[1] = React3(View, obj3);
      return React3(View, obj, index);
    })
  };
  return closure_3(View, obj);
};
