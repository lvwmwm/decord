// Module ID: 12695
// Function ID: 12696
// Name: PrivateChannelRecipientActionCreators
// Dependencies: [1071, 1284, 2]

// Module 12695 (PrivateChannelRecipientActionCreators)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
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
