// Module ID: 17138
// Function ID: 17139
// Name: getScaledChannelRowHeight
// Dependencies: [17136, 2]
// Exports: default

// Module 17138 (getScaledChannelRowHeight)
import getLayoutStylesDefault from "getLayoutStyles" /* 17136 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStylesDefault();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
