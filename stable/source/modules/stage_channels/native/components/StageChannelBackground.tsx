// Module ID: 10339
// Function ID: 10340
// Name: StageChannelBackground
// Dependencies: [19, 17, 21, 4788, 576, 2]
// Exports: default

// Module 10339 (StageChannelBackground)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
const obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BLACK } };
let closure_2 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default function StageChannelBackground(children) {
  return <View style={closure_2().container}>{arg0.children}</View>;
};
