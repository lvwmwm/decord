// Module ID: 12048
// Function ID: 12049
// Name: GuildPowerupsSectionHeader
// Dependencies: [17, 21, 4836, 576, 6401, 4832, 2]
// Exports: default

// Module 12048 (GuildPowerupsSectionHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { headerContainer: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsSectionHeader.tsx");

export default function GuildPowerupsSectionHeader(arg0) {
  let description;
  let items;
  let title;
  ({ title, description } = arg0);
  const obj2 = { style: closure_5().headerContainer, children: items };
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsSectionHeader");
  items = [_false(Text_Text.Text, { variant: "heading-lg/semibold", accessibilityRole: "header", children: title }), ];
  let str = "text-md/normal";
  const Text = Text_Text.Text;
  const tmp3 = React3;
  const tmp4 = View;
  const tmp5 = _false;
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  items[1] = tmp5(Text, { variant: str, children: description });
  return tmp3(tmp4, obj2);
};
