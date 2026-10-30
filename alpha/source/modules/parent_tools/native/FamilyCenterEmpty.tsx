// Module ID: 16768
// Function ID: 16769
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 5009, 5619, 2]
// Exports: default

// Module 16768 (FamilyCenterEmpty)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ empty: { display: "flex", alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(text) {
  text = text.text;
  return <View style={closure_4().empty}>{jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: text })}</View>;
};
