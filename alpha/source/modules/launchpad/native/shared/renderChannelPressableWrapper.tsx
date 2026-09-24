// Module ID: 17550
// Function ID: 17551
// Name: renderChannelPressableWrapper
// Dependencies: [19, 17, 21, 17231, 2]
// Exports: default

// Module 17550 (renderChannelPressableWrapper)
import getLayoutStylesDefault from "getLayoutStyles" /* 17231 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const items = [getLayoutStylesDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{arg0}</View>;
};
