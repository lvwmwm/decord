// Module ID: 15214
// Function ID: 115809
// Name: renderChannelPressableWrapper
// Dependencies: [31, 27, 33, 10290, 2]
// Exports: renderChannelPressableWrapper

// Module 15214 (renderChannelPressableWrapper)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx");

export const renderChannelPressableWrapper = function renderChannelPressableWrapper(children, panelVariant) {
  let isThread;
  let launchpad;
  let layout;
  let flag = panelVariant.panelVariant;
  ({ layout, launchpad, isThread } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(10290) /* getLayoutStyles */;
  obj = {};
  const layout2 = obj.getLayoutStyles(layout, launchpad).layout;
  if (isThread) {
    let marginThread = layout2.marginThread;
  } else {
    marginThread = flag ? layout2.marginPanels : layout2.margin;
  }
  const items = [marginThread, { flex: 1, flexDirection: "row", alignItems: "center" }];
  obj.style = items;
  obj.children = children;
  return <View />;
};
