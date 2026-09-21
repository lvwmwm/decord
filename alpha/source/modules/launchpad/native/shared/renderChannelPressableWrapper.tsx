// Module ID: 17446
// Function ID: 17447
// Name: renderChannelPressableWrapper
// Dependencies: [19, 17, 21, 17133, 2]
// Exports: default

// Module 17446 (renderChannelPressableWrapper)
import getLayoutStylesDefault from "getLayoutStyles" /* 17133 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const items = [getLayoutStylesDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{arg0}</View>;
};
