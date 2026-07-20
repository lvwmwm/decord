// Module ID: 5602
// Function ID: 47596
// Name: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
// Dependencies: []

// Module 5602 (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
const obj = { type: require(dependencyMap[1]).ChannelTypes.DM };
const channelRecord = require(dependencyMap[0]).createChannelRecord(obj);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
