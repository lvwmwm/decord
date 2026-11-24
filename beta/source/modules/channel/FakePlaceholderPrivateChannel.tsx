// Module ID: 6843
// Function ID: 6844
// Name: FakePlaceholderPrivateChannel
// Dependencies: [4766, 1071, 2]

// Module 6843 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1071 */;
import ChannelRecord from "ChannelRecord" /* 4766 */;
import size from "module_2" /* 2 */;

const obj = { id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" };
const createChannelRecord = ChannelRecord.createChannelRecord;
const channelRecord = createChannelRecord(obj);
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
