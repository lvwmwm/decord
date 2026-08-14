// Module ID: 9856
// Function ID: 9857
// Name: getLayoutStyles
// Dependencies: [4039, 9857, 9859, 9860, 4034, 2]
// Exports: getScaledChannelRowHeight, isLayoutCompact, isLayoutCozy, makeSizeStyle, useMessagesTabLayout

// Module 9856 (getLayoutStyles)
function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (require(4039) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return tmp(9857).CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (tmp(4039).ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return tmp(9857).CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (tmp(4039).ChannelListLayoutTypes.COMPACT === layout) {
    let tmpResult = tmp(9859);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (tmp(4039).ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = tmp(4039).ChannelListLayoutTypes.COZY;
    }
    tmpResult = tmp(9860);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COZY;
  }
}
let result = require("CHANNEL_LIST_STYLES_COMPACT").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  return { width: size, height: size };
}
export const isLayoutCompact = function isLayoutCompact(closure_2) {
  return closure_2 === require(4039) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT;
};
export const isLayoutCozy = function isLayoutCozy(layout) {
  return layout === require(4039) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY || layout === require(4039) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER || layout === require(4039) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
};
export const useMessagesTabLayout = function useMessagesTabLayout(panelVariant) {
  const ChannelListLayoutSetting = require(4034) /* explicitContentFromProto */.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = require(4039) /* ChannelListLayoutTypes */.ChannelListLayoutTypes;
  if (panelVariant) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = tmp(4039).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(4039).ChannelListLayoutTypes.COZY;
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
  if (layout === require(4039) /* ChannelListLayoutTypes */.ChannelListLayoutTypes.COMPACT) {
    num = 4;
  }
  return sum + result + num;
};
