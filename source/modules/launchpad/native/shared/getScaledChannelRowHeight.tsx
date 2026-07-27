// Module ID: 15732
// Function ID: 121355
// Name: getScaledChannelRowHeight
// Dependencies: [15729, 2]
// Exports: default

// Module 15732 (getScaledChannelRowHeight)
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = importDefault(15729)();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
