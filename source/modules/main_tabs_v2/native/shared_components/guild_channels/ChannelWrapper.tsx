// Module ID: 15215
// Function ID: 115811
// Name: renderChannelWrapper
// Dependencies: [31, 27, 33, 10290, 2]
// Exports: renderChannelWrapper

// Module 15215 (renderChannelWrapper)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx");

export const renderChannelWrapper = function renderChannelWrapper(children, fontScale) {
  let channel;
  let launchpad;
  let layout;
  let panelVariant;
  ({ channel, layout, launchpad, panelVariant } = fontScale);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let obj = require(10290) /* getLayoutStyles */;
  let isThreadResult;
  if (null != channel) {
    isThreadResult = channel.isThread();
  }
  if (isThreadResult) {
    isThreadResult = !launchpad;
  }
  const scaledChannelRowHeight = obj.getScaledChannelRowHeight(fontScale.fontScale, layout, isThreadResult);
  const layoutStyles = require(10290) /* getLayoutStyles */.getLayoutStyles(layout, launchpad);
  obj = {};
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, , ];
  obj = {};
  if (null != channel) {
    if (channel.isThread()) {
      let result = 2 * layoutStyles.layout.marginThread.marginVertical;
    }
    obj.minHeight = scaledChannelRowHeight - result;
    items[1] = obj;
    if (null != channel) {
      if (channel.isThread()) {
        let paddingThread = layoutStyles.container.paddingThread;
      }
      items[2] = paddingThread;
      obj.style = items;
      obj.children = children;
      return tmp4(tmp5, obj);
    }
    const container = layoutStyles.container;
    paddingThread = panelVariant ? container.paddingPanels : container.padding;
  }
  result = 2 * layoutStyles.layout.margin.marginVertical;
};
