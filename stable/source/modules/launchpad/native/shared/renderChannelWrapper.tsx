// Module ID: 19121
// Function ID: 19122
// Name: renderChannelWrapper
// Dependencies: [19, 17, 21, 19120, 19122, 2]
// Exports: default

// Module 19121 (renderChannelWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 19120 */;
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight" /* 19122 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = getLayoutStylesDefault();
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(children, fontScale) {
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, { minHeight: getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical }, closure_4.container.padding];
  ({ minHeight: getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical });
  return <View style={items}>{arg0}</View>;
};
