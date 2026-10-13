// Module ID: 12374
// Function ID: 12375
// Name: PrivateChannelRecipientActionCreators
// Dependencies: [1085, 1295, 2]

// Module 12374 (PrivateChannelRecipientActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let obj = {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: obj, rejectWithError: false };
    obj = { flags: setFlagResult };
    return HTTP.patch(request);
  }
};
const result = size.fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default obj;
