// Module ID: 11049
// Function ID: 11050
// Name: ChannelListLayout
// Dependencies: [5692, 11050, 11052, 11053, 4839, 2]
// Exports: getScaledChannelRowHeight, isLayoutCompact, isLayoutCozy, makeSizeStyle, useMessagesTabLayout

// Module 11049 (ChannelListLayout)
import UserSettings from "UserSettings" /* 4839 */;
import ChannelListLayoutTypes2 from "ChannelListLayoutTypes" /* 5692 */;
import CozyDrawer from "CozyDrawer" /* 11050 */;
import Compact from "Compact" /* 11052 */;
import Cozy from "Cozy" /* 11053 */;
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
      const COZY = tmp(5692).ChannelListLayoutTypes.COZY;
    }
    const tmpResult2 = Cozy;
    return flag ? tmpResult2.CHANNEL_LIST_STYLES_COZY_LAUNCHPAD : tmpResult2.CHANNEL_LIST_STYLES_COZY;
  }
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx");

export { getLayoutStyles };
export function makeSizeStyle(size) {
  size = { width: size, height: size };
  return size;
}
export function isLayoutCompact(layout) {
  return layout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COMPACT;
}
export function isLayoutCozy(messagesTabLayout) {
  const tmp3 = messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER || messagesTabLayout === ChannelListLayoutTypes2.ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  return tmp3;
}
export function useMessagesTabLayout(panelVariant) {
  let COZY;
  const ChannelListLayoutSetting = UserSettings.ChannelListLayoutSetting;
  const setting = ChannelListLayoutSetting.useSetting();
  const ChannelListLayoutTypes = ChannelListLayoutTypes2.ChannelListLayoutTypes;
  const tmp4 = panelVariant;
  if (tmp4) {
    COZY = ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  } else if (setting === ChannelListLayoutTypes.COMPACT) {
    COZY = tmp(5692).ChannelListLayoutTypes.COMPACT;
  } else {
    COZY = tmp(5692).ChannelListLayoutTypes.COZY;
  }
  return COZY;
}
export function getScaledChannelRowHeight(arg0, layout) {
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
}
