// Module ID: 10242
// Function ID: 79194
// Name: getLayoutStyles
// Dependencies: []
// Exports: getScaledChannelRowHeight, isLayoutCozy, makeSizeStyle, useMessagesTabLayout

// Module 10242 (getLayoutStyles)
function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (require(dependencyMap[0]).ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return require(dependencyMap[1]).CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (require(dependencyMap[0]).ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return require(dependencyMap[1]).CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (require(dependencyMap[0]).ChannelListLayoutTypes.COMPACT === layout) {
    const tmp10 = require(dependencyMap[2]);
    return flag ? tmp10.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmp10.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (require(dependencyMap[0]).ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = require(dependencyMap[0]).ChannelListLayoutTypes.COZY;
    }
    const tmp7 = require(dependencyMap[3]);
    return flag ? tmp7.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmp7.CHANNEL_LIST_STYLES_COZY;
  }
}
function isLayoutCompact(closure_2) {
  return closure_2 === require(dependencyMap[0]).ChannelListLayoutTypes.COMPACT;
}
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export const makeSizeStyle = function makeSizeStyle(width) {
  return { width, height: width };
};
export { isLayoutCompact };
export const isLayoutCozy = function isLayoutCozy(layout) {
  let tmp = layout === require(dependencyMap[0]).ChannelListLayoutTypes.COZY;
  if (!tmp) {
    tmp = layout === require(dependencyMap[0]).ChannelListLayoutTypes.COZY_DRAWER;
  }
  if (!tmp) {
    tmp = layout === require(dependencyMap[0]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  }
  return tmp;
};
export const useMessagesTabLayout = function useMessagesTabLayout(flag) {
  const ChannelListLayoutSetting = require(dependencyMap[4]).ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = require(dependencyMap[0]).ChannelListLayoutTypes;
  if (flag) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = require(dependencyMap[0]).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = require(dependencyMap[0]).ChannelListLayoutTypes.COZY;
  }
  return COZY;
};
export const getScaledChannelRowHeight = function getScaledChannelRowHeight(arg0, layout) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = getLayoutStyles(layout);
  const container = tmp.container;
  const bound = Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size);
  if (flag) {
    let paddingVertical = container.paddingThread.paddingVertical;
  } else {
    paddingVertical = container.padding.paddingVertical;
  }
  layout = tmp.layout;
  const sum = bound + 2 * paddingVertical;
  if (flag) {
    let marginVertical = layout.marginThread.marginVertical;
  } else {
    marginVertical = layout.margin.marginVertical;
  }
  const result = 2 * marginVertical;
  let num = 0;
  if (isLayoutCompact(layout)) {
    num = 4;
  }
  return sum + result + num;
};
