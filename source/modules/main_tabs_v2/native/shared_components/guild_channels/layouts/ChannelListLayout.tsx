// Module ID: 10261
// Function ID: 79305
// Name: getLayoutStyles
// Dependencies: [3808, 10262, 10264, 10265, 3803, 2]
// Exports: getScaledChannelRowHeight, isLayoutCozy, makeSizeStyle, useMessagesTabLayout

// Module 10261 (getLayoutStyles)
function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return require(10262) /* items */.CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return require(10262) /* items */.CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT === layout) {
    const tmp10 = require(10264) /* items */;
    return flag ? tmp10.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmp10.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
    }
    const tmp7 = require(10265) /* items */;
    return flag ? tmp7.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmp7.CHANNEL_LIST_STYLES_COZY;
  }
}
function isLayoutCompact(messagesTabLayout) {
  return messagesTabLayout === require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
}
let result = require("items").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export const makeSizeStyle = function makeSizeStyle(width) {
  return { width, height: width };
};
export { isLayoutCompact };
export const isLayoutCozy = function isLayoutCozy(layout) {
  let tmp = layout === require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
  if (!tmp) {
    tmp = layout === require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER;
  }
  if (!tmp) {
    tmp = layout === require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  }
  return tmp;
};
export const useMessagesTabLayout = function useMessagesTabLayout(flag) {
  const ChannelListLayoutSetting = require(3803) /* explicitContentFromProto */.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes;
  if (flag) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = require(3808) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY;
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
