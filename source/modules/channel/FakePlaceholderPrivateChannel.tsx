// Module ID: 6015
// Function ID: 6016
// Name: FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID
// Dependencies: [1395, 676, 2]

// Module 6015 (FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;

const channelRecord = createChannelRecord.createChannelRecord({ id: "131", type: ME.ChannelTypes.DM, name: "Placeholder Channel" });
const obj = { id: "131", type: ME.ChannelTypes.DM, name: "Placeholder Channel" };
const result = set.fileFinishedImporting("modules/channel/FakePlaceholderPrivateChannel.tsx");

export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID = "131";
export const FAKE_PLACEHOLDER_PRIVATE_CHANNEL = channelRecord;
