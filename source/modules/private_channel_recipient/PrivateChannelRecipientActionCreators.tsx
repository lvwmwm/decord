// Module ID: 11087
// Function ID: 86205
// Dependencies: []

// Module 11087
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/private_channel_recipient/PrivateChannelRecipientActionCreators.tsx");

export default {
  updatePrivateChannelRecipientFlags(id, setFlagResult) {
    const HTTP = require(dependencyMap[1]).HTTP;
    let obj = { url: Endpoints.CHANNEL_RECIPIENT_ME(id), body: obj, rejectWithError: false };
    obj = { flags: setFlagResult };
    return HTTP.patch(obj);
  }
};
