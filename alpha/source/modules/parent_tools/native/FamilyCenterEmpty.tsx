// Module ID: 17094
// Function ID: 17095
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 5143, 5763, 2]
// Exports: default

// Module 17094 (FamilyCenterEmpty)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5763 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ empty: { display: "flex", alignItems: "center", justifyContent: "center" } });
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(text) {
  text = text.text;
  return <View style={closure_4().empty}>{jsx(Text_Text.Text, { variant: "body-sm/medium", color: "text-muted", children: text })}</View>;
};
