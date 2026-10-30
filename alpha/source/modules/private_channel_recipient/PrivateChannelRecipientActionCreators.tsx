// Module ID: 13668
// Function ID: 13669
// Name: PrivateChannelRecipientActionCreators
// Dependencies: [1072, 1283, 2]

// Module 13668 (PrivateChannelRecipientActionCreators)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
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
