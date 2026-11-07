// Module ID: 18761
// Function ID: 18762
// Name: InterestGhost
// Dependencies: [19, 17, 21, 5140, 575, 2]
// Exports: default

// Module 18761 (InterestGhost)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { ghost: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" } };
({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, overflow: "hidden" });
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGhost.tsx");

export default function InterestGhost(style) {
  style = style.style;
  const items = [closure_2().ghost, style];
  return <View accessible={false} pointerEvents="none" style={items} />;
};
