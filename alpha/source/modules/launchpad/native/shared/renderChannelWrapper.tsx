// Module ID: 17355
// Function ID: 17356
// Name: renderChannelWrapper
// Dependencies: [19, 17, 21, 17354, 17356, 2]
// Exports: default

// Module 17355 (renderChannelWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 17354 */;
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight" /* 17356 */;
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
