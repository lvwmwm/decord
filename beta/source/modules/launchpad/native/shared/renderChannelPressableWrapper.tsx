// Module ID: 17400
// Function ID: 17401
// Name: renderChannelPressableWrapper
// Dependencies: [19, 17, 21, 16832, 2]
// Exports: default

// Module 17400 (renderChannelPressableWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16832 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const items = [getLayoutStylesDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{arg0}</View>;
};
