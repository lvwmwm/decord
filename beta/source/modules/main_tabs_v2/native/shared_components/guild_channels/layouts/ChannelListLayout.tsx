// Module ID: 10416
// Function ID: 10417
// Name: ChannelListLayout
// Dependencies: [8155, 10417, 10419, 10420, 2019, 2]
// Exports: getScaledChannelRowHeight, isLayoutCompact, isLayoutCozy, makeSizeStyle, useMessagesTabLayout

// Module 10416 (ChannelListLayout)
import UserSettings from "UserSettings" /* 2019 */;
import ChannelListLayoutTypes2 from "ChannelListLayoutTypes" /* 8155 */;
import size from "module_2" /* 2 */;

function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return tmp(10417).CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (tmp(8155).ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return tmp(10417).CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (tmp(8155).ChannelListLayoutTypes.COMPACT === layout) {
    const tmpResult = tmp(10419);
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (tmp(8155).ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = tmp(8155).ChannelListLayoutTypes.COZY;
    }
    const tmpResult2 = tmp(10420);
    return flag ? tmpResult2.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult2.CHANNEL_LIST_STYLES_COZY;
  }
}
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  size = { width: size, height: size };
  return size;
}
export const isLayoutCompact = function isLayoutCompact(layout) {
  return layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
};
export const isLayoutCozy = function isLayoutCozy(messagesTabLayout) {
  return messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
};
export const useMessagesTabLayout = function useMessagesTabLayout(panelVariant) {
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  if (panelVariant) {
    let COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = tmp(8155).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(8155).ChannelListLayoutTypes.COZY;
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
  if (layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT) {
    num = 4;
  }
  return sum + result + num;
};
