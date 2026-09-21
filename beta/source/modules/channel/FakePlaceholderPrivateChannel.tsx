// Module ID: 7468
// Function ID: 7469
// Name: FakePlaceholderPrivateChannel
// Dependencies: [2049, 1078, 2]

// Module 7468 (FakePlaceholderPrivateChannel)
import Constants from "Constants" /* 1078 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import size from "module_2" /* 2 */;

const channelRecord = ChannelRecord.createChannelRecord({ id: "131", type: Constants.ChannelTypes.DM, name: "Placeholder Channel" });
const result = size.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
