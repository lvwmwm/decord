// Module ID: 7147
// Function ID: 7148
// Name: FakePlaceholderPrivateChannel
// Dependencies: [2072, 1087, 2]

// Module 7147 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1087 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import size from "module_2" /* 2 */;

const obj = { id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" };
const createChannelRecord = ChannelRecord.createChannelRecord;
const channelRecord = createChannelRecord(obj);
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
