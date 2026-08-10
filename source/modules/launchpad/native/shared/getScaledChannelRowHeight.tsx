// Module ID: 16055
// Function ID: 16056
// Name: getScaledChannelRowHeight
// Dependencies: [16052, 2]
// Exports: default

// Module 16055 (getScaledChannelRowHeight)
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = importDefault(16052)();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
