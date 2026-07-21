// Module ID: 5604
// Function ID: 47646
// Name: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
// Dependencies: []

// Module 5604 (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
const obj = { type: require(dependencyMap[1]).ChannelTypes.DM };
const channelRecord = require(dependencyMap[0]).createChannelRecord(obj);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
