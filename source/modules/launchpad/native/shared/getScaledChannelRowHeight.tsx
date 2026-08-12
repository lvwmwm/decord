// Module ID: 16129
// Function ID: 16130
// Name: getScaledChannelRowHeight
// Dependencies: [16126, 2]
// Exports: default

// Module 16129 (getScaledChannelRowHeight)
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = importDefault(16126)();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
