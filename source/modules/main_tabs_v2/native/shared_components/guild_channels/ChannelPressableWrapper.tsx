// Module ID: 15041
// Function ID: 113241
// Name: renderChannelPressableWrapper
// Dependencies: []
// Exports: renderChannelPressableWrapper

// Module 15041 (renderChannelPressableWrapper)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx");

export const renderChannelPressableWrapper = function renderChannelPressableWrapper(children, panelVariant) {
  let isThread;
  let launchpad;
  let layout;
  let flag = panelVariant.panelVariant;
  ({ layout, launchpad, isThread } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  let obj = panelVariant(dependencyMap[3]);
  obj = {};
  const layout2 = obj.getLayoutStyles(layout, launchpad).layout;
  if (isThread) {
    let marginThread = layout2.marginThread;
  } else {
    marginThread = flag ? layout2.marginPanels : layout2.margin;
  }
  const items = [marginThread, { accessible: null, count: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Bool(false)": true }];
  obj.style = items;
  obj.children = children;
  return <View {...obj} />;
};
