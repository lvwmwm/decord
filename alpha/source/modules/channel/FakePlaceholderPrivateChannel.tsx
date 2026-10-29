// Module ID: 7383
// Function ID: 7384
// Name: FakePlaceholderPrivateChannel
// Dependencies: [4861, 1084, 2]

// Module 7383 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1084 */;
import ChannelRecord from "ChannelRecord" /* 4861 */;
import size from "module_2" /* 2 */;

const obj = { id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" };
const createChannelRecord = ChannelRecord.createChannelRecord;
const channelRecord = createChannelRecord(obj);
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
