// Module ID: 18690
// Function ID: 18691
// Name: renderChannelPressableWrapper
// Dependencies: [19, 17, 21, 18103, 2]
// Exports: default

// Module 18690 (renderChannelPressableWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 18103 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const items = [getLayoutStylesDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{arg0}</View>;
};
