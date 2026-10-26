// Module ID: 18104
// Function ID: 18105
// Name: getScaledChannelRowHeight
// Dependencies: [18102, 2]
// Exports: default

// Module 18104 (getScaledChannelRowHeight)
import getLayoutStylesDefault from "getLayoutStyles" /* 18102 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStylesDefault();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
