// Module ID: 16420
// Function ID: 16421
// Name: ChannelPressableWrapper
// Dependencies: [19, 17, 21, 11712, 2]
// Exports: renderChannelPressableWrapper

// Module 16420 (ChannelPressableWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ChannelListLayout from "ChannelListLayout" /* 11712 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx");

export const renderChannelPressableWrapper = function renderChannelPressableWrapper(children, panelVariant) {
  let isThread;
  let items;
  let launchpad;
  let layout;
  let marginThread;
  let flag = panelVariant.panelVariant;
  ({ layout, launchpad, isThread } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const obj = ChannelListLayout;
  const layout2 = obj.getLayoutStyles(layout, launchpad).layout;
  const tmp = jsx;
  const tmp2 = View;
  if (isThread) {
    marginThread = layout2.marginThread;
  } else {
    marginThread = flag ? layout2.marginPanels : layout2.margin;
  }
  const obj2 = { style: items, children };
  items = [marginThread, { flex: 1, flexDirection: "row", alignItems: "center" }];
  return tmp(tmp2, obj2);
};
