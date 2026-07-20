// Module ID: 15035
// Function ID: 113219
// Name: renderChannelWrapper
// Dependencies: []
// Exports: renderChannelWrapper

// Module 15035 (renderChannelWrapper)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx");

export const renderChannelWrapper = function renderChannelWrapper(children, fontScale) {
  let channel;
  let launchpad;
  let layout;
  let panelVariant;
  ({ channel, layout, launchpad, panelVariant } = fontScale);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let obj = fontScale(dependencyMap[3]);
  let isThreadResult;
  if (null != channel) {
    isThreadResult = channel.isThread();
  }
  if (isThreadResult) {
    isThreadResult = !launchpad;
  }
  const scaledChannelRowHeight = obj.getScaledChannelRowHeight(fontScale.fontScale, layout, isThreadResult);
  const layoutStyles = fontScale(dependencyMap[3]).getLayoutStyles(layout, launchpad);
  obj = {};
  const items = [{ containerStyle: null, grow: null, isRound: null, display: null }, , ];
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
