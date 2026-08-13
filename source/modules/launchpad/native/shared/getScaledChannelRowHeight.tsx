// Module ID: 16131
// Function ID: 16132
// Name: getScaledChannelRowHeight
// Dependencies: [16128, 2]
// Exports: default

// Module 16131 (getScaledChannelRowHeight)
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = importDefault(16128)();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
