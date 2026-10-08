// Module ID: 6910
// Function ID: 6911
// Name: FakePlaceholderPrivateChannel
// Dependencies: [2067, 1085, 2]

// Module 6910 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2067 */;
import size from "module_2" /* 2 */;

const obj = { id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" };
const createChannelRecord = ChannelRecord.createChannelRecord;
const channelRecord = createChannelRecord(obj);
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
