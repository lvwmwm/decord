// Module ID: 7390
// Function ID: 7391
// Name: FakePlaceholderPrivateChannel
// Dependencies: [4862, 1072, 2]

// Module 7390 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import size from "module_2" /* 2 */;

const obj = { id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" };
const createChannelRecord = ChannelRecord.createChannelRecord;
const channelRecord = createChannelRecord(obj);
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
