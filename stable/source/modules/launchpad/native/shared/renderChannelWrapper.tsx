// Module ID: 17138
// Function ID: 17139
// Name: renderChannelWrapper
// Dependencies: [19, 17, 21, 17137, 17139, 2]
// Exports: default

// Module 17138 (renderChannelWrapper)
import getLayoutStylesDefault from "getLayoutStyles" /* 17137 */;
import getScaledChannelRowHeightDefault from "getScaledChannelRowHeight" /* 17139 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_4 = getLayoutStylesDefault();
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(children, fontScale) {
  const obj = { style: null, children: null };
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, { minHeight: getScaledChannelRowHeightDefault(fontScale.fontScale) - 2 * closure_4.layout.margin.marginVertical }, closure_4.container.padding];
  obj.style = items;
  obj.children = children;
  return <View style={null}>{null}</View>;
};
