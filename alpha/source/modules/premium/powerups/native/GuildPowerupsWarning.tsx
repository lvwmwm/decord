// Module ID: 10698
// Function ID: 10699
// Name: GuildPowerupsWarning
// Dependencies: [19, 17, 21, 5243, 575, 10699, 7557, 5866, 2]
// Exports: default

// Module 10698 (GuildPowerupsWarning)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import useGuildPowerupsWarningConfigDefault from "useGuildPowerupsWarningConfig" /* 10699 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
obj2 = { flexDirection: "row", alignItems: "flex-start", padding: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_WARNING, borderWidth: 1, borderColor: nativeDefault.colors.STATUS_WARNING, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_8, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
obj4 = { marginTop: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  let closure_0;
  let guildId;
  let items;
  let obj2;
  let powerupNames;
  let tmp10;
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  const tmp = closure_6();
  _require = tmp;
  let tmp8Result = null;
  const tmp4 = useGuildPowerupsWarningConfigDefault(guildId, powerupNames);
  if (tmp4.shouldShow) {
    let obj = { style: tmp.container, children: tmp10(View, obj2) };
    obj2 = { style: tmp.contentContainer, children: items };
    const obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING, size: "md" };
    const CircleErrorIcon = require("CircleErrorIcon").CircleErrorIcon;
    items = [closure_4(CircleErrorIcon, obj3), , , ];
    const obj4 = { variant: "body-md/semibold", color: "text-feedback-warning", style: tmp.text, children: tmp5 };
    items[1] = closure_4(require("Text/Text").Text, obj4);
    const obj5 = { variant: "body-sm/normal", style: tmp.text, children: tmp6 };
    items[2] = closure_4(require("Text/Text").Text, obj5);
    let mapped;
    tmp10 = closure_5;
    const tmp8 = closure_4;
    if (warnings != null) {
      mapped = warnings.map((children, index) => {
        let items;
        const obj = { variant: "body-sm/normal", color: "text-feedback-warning", style: items, children };
        items = [, ];
        ({ warningText: arr[0], text: arr[1] } = closure_0);
        return React3(Text_Text.Text, obj, "warning-" + index);
      });
    }
    items[3] = mapped;
    tmp8Result = tmp8(tmp9, obj);
  }
  return tmp8Result;
};
