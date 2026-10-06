// Module ID: 11581
// Function ID: 11582
// Name: PrivateChannelRecipientActionCreators
// Dependencies: [1085, 1282, 2]

// Module 11581 (PrivateChannelRecipientActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
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
