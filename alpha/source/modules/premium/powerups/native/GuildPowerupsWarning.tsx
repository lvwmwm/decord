// Module ID: 14119
// Function ID: 14120
// Name: GuildPowerupsWarning
// Dependencies: [19, 17, 21, 5014, 575, 7149, 14120, 7086, 5624, 2]
// Exports: default

// Module 14119 (GuildPowerupsWarning)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, warningText: obj4, text: { textAlign: "center" } };
obj2 = { flexDirection: "row", alignItems: "flex-start", padding: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderWidth: 1, borderColor: nativeDefault.colors.STATUS_WARNING, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_8, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
obj4 = { marginTop: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  let closure_0;
  let guildId;
  let items;
  let obj3;
  let powerupNames;
  let tmp12;
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  let tmp = closure_6();
  _require = tmp;
  let obj = require("ManaTypeConsolidationExperiment");
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsWarning");
  let tmp10Result = null;
  const tmp5 = manaTypeConsolidationExperiment;
  const tmp6 = manaTypeConsolidationExperiment(14120)(guildId, powerupNames);
  if (tmp6.shouldShow) {
    const obj2 = { style: tmp.container, children: tmp12(View, obj3) };
    obj3 = { style: tmp.contentContainer, children: items };
    const obj4 = { color: tmp5(575).colors.TEXT_FEEDBACK_WARNING, size: "md" };
    const CircleErrorIcon = tmp2(7086).CircleErrorIcon;
    items = [closure_4(CircleErrorIcon, obj4), , , ];
    const obj5 = { variant: "text-md/semibold", color: "text-feedback-warning", style: tmp.text, children: tmp7 };
    items[1] = closure_4(require("Text/Text").Text, obj5);
    let str = "text-sm/medium";
    let Text = tmp2(5624).Text;
    tmp12 = closure_5;
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-sm/normal";
    }
    const obj6 = { variant: str, style: tmp.text, children: tmp8 };
    items[2] = closure_4(Text, obj6);
    let mapped;
    if (warnings != null) {
      mapped = warnings.map((children, index) => {
        let items;
        let str = "text-sm/medium";
        const Text = Text_Text.Text;
        const tmp = React3;
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        const obj = { variant: str, color: "text-feedback-warning", style: items, children };
        items = [, ];
        ({ warningText: arr[0], text: arr[1] } = closure_0);
        return tmp(Text, obj, "warning-" + index);
      });
    }
    items[3] = mapped;
    tmp10Result = tmp10(tmp11, obj2);
  }
  return tmp10Result;
};
