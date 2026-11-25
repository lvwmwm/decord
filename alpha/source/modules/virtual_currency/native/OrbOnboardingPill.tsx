// Module ID: 17281
// Function ID: 17282
// Name: OrbOnboardingPill
// Dependencies: [19, 17, 21, 9423, 5603, 1112, 5012, 575, 2]

// Module 17281 (OrbOnboardingPill)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import Text_Text from "Text/Text" /* 5603 */;
import OrbsIcon from "OrbsIcon" /* 9423 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
class OrbOnboardingPill {
  constructor() {
    let intl;
    let items;
    const obj = { style: closure_5().container, children: items };
    items = [_false(OrbsIcon.OrbsIcon, { size: "sm" }), ];
    const obj2 = { variant: "body-sm/semibold", color: "redesign-button-tertiary-text", children: intl.string(intl2.t["9JpRfC"]) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items[1] = _false(Text, obj2);
    return React3(View, obj);
  }
}
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
OrbOnboardingPill.displayName = "OrbOnboardingPill";
let obj = { container: obj2 };
obj2 = { height: 36, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, flexShrink: 0, gap: 4 };
const hasOwnProperty = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default OrbOnboardingPill;
export { OrbOnboardingPill };
