// Module ID: 5604
// Function ID: 47674
// Name: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
// Dependencies: [1352, 653, 2]

// Module 5604 (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
const obj = { id: "131", type: require("ME").ChannelTypes.DM, name: "Placeholder Channel" };
const channelRecord = require("_callSuper").createChannelRecord(obj);
const result = require("set").fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
