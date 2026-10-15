// Module ID: 17691
// Function ID: 17692
// Name: getScaledChannelRowHeight
// Dependencies: [17689, 2]
// Exports: default

// Module 17691 (getScaledChannelRowHeight)
import getLayoutStylesDefault from "getLayoutStyles" /* 17689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStylesDefault();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
