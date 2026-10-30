// Module ID: 11985
// Function ID: 11986
// Name: StageChannelBackground
// Dependencies: [19, 17, 21, 5009, 575, 2]
// Exports: default

// Module 11985 (StageChannelBackground)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK } };
({ flex: 1, backgroundColor: nativeDefault.colors.BLACK });
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default function StageChannelBackground(children) {
  return <View style={closure_2().container}>{arg0.children}</View>;
};
