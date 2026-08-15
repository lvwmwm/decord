// Module ID: 5389
// Function ID: 5390
// Name: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
// Dependencies: [1395, 676, 2]

// Module 5389 (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
const obj = { id: "131", type: null, name: "Placeholder Channel" };
obj[1] = require("ME").ChannelTypes.DM;
const channelRecord = require("createChannelRecord").createChannelRecord(obj);
const result = require("set").fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
