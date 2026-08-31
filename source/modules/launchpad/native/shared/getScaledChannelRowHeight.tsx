// Module ID: 16525
// Function ID: 16526
// Name: getScaledChannelRowHeight
// Dependencies: [16522, 2]
// Exports: default

// Module 16525 (getScaledChannelRowHeight)
import set from "set" /* 2 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16522 */;

const result = set.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = getLayoutStyleDefault();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
