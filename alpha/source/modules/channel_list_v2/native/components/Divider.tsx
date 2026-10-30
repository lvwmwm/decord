// Module ID: 13793
// Function ID: 13794
// Name: Divider
// Dependencies: [19, 17, 21, 5009, 575, 2]
// Exports: default

// Module 13793 (Divider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles(() => {
  const obj = { divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 8, marginBottom: 8, marginHorizontal: 16 } };
  ({ height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 8, marginBottom: 8, marginHorizontal: 16 });
  return obj;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={closure_4().divider} />;
};
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
