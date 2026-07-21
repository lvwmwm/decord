// Module ID: 15537
// Function ID: 118601
// Name: getScaledChannelRowHeight
// Dependencies: []
// Exports: default

// Module 15537 (getScaledChannelRowHeight)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/launchpad/native/shared/getScaledChannelRowHeight.tsx");

export default function getScaledChannelRowHeight(arg0) {
  const tmp = importDefault(dependencyMap[0])();
  return Math.max(Math.max(arg0, 1) * (tmp.channelName.height + (tmp.messagePreview.margin.marginTop + tmp.messagePreview.height)), tmp.icon.wrapper.size) + 2 * tmp.container.padding.paddingVertical + 2 * tmp.layout.margin.marginVertical + 4;
};
