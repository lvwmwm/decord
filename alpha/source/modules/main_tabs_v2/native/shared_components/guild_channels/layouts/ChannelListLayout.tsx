// Module ID: 11777
// Function ID: 11778
// Name: ChannelListLayout
// Dependencies: [9248, 11778, 11780, 11781, 558, 2040, 2]
// Exports: getScaledChannelRowHeight, isLayoutCompact, isLayoutCozy, makeSizeStyle

// Module 11777 (ChannelListLayout)
import UserSettings from "UserSettings" /* 2040 */;
import ChannelListLayoutTypes2 from "ChannelListLayoutTypes" /* 9248 */;
import CozyDrawer from "CozyDrawer" /* 11778 */;
import Compact from "Compact" /* 11780 */;
import Cozy from "Cozy" /* 11781 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

function getLayoutStyles(layout, launchpad) {
  let flag = launchpad;
  if (launchpad === undefined) {
    flag = false;
  }
  if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER === layout) {
    return CozyDrawer.CHANNEL_LIST_STYLES_COZY_DRAWER;
  } else if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL === layout) {
    return CozyDrawer.CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL;
  } else if (ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT === layout) {
    const tmpResult = Compact;
    return flag ? tmpResult.CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD : tmpResult.CHANNEL_LIST_STYLES_COMPACT;
  } else {
    if (ChannelListLayoutTypes2.ChannelListLayoutTypes.MINIMAL !== layout) {
      const COZY = tmp(9248).ChannelListLayoutTypes.COZY;
    }
    const tmpResult2 = Cozy;
    return flag ? tmpResult2.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult2.CHANNEL_LIST_STYLES_COZY;
  }
}
function isLayoutCompact(messagesTabLayout) {
  return messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessagesTabLayout(arg0) {
  let COZY;
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  const tmp4 = arg0;
  if (tmp4) {
    COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = tmp(9248).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(9248).ChannelListLayoutTypes.COZY;
  }
  return COZY;
}) : (function useMessagesTabLayout(arg0) {
  let COZY;
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  const tmp4 = arg0;
  if (tmp4) {
    COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = tmp(9248).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(9248).ChannelListLayoutTypes.COZY;
  }
  return COZY;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  size = { width: size, height: size };
  return size;
}
export { isLayoutCompact };
export const isLayoutCozy = function isLayoutCozy(messagesTabLayout) {
  const tmp3 = messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  return tmp3;
};
export const useMessagesTabLayout = tmp2;
export const getScaledChannelRowHeight = function getScaledChannelRowHeight(arg0, layout) {
  let marginVertical;
  let paddingVertical;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = getLayoutStyles(layout);
  const container = tmp.container;
  const bound = Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size);
  if (flag) {
    paddingVertical = container.paddingThread.paddingVertical;
  } else {
    paddingVertical = container.padding.paddingVertical;
  }
  layout = tmp.layout;
  const sum = bound + 2 * paddingVertical;
  if (flag) {
    marginVertical = layout.marginThread.marginVertical;
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
