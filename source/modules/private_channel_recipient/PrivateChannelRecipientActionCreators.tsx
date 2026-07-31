// Module ID: 11162
// Function ID: 11163
// Dependencies: [676, 530, 2]

// Module 11162
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: obj, rejectWithError: false };
    obj = { flags: setFlagResult };
    return HTTP.patch(obj);
  }
};
