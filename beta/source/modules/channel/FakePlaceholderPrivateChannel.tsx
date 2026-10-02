// Module ID: 6643
// Function ID: 6644
// Name: FakePlaceholderPrivateChannel
// Dependencies: [2055, 1086, 2]

// Module 6643 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1086 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import size from "module_2" /* 2 */;

const obj = { id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" };
const createChannelRecord = ChannelRecord.createChannelRecord;
const channelRecord = createChannelRecord(obj);
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
