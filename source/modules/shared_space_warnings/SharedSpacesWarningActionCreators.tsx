// Module ID: 12535
// Function ID: 96362
// Name: dismissGdmBlockedUserWarning
// Dependencies: []
// Exports: dismissGdmBlockedUserWarning

// Module 12535 (dismissGdmBlockedUserWarning)
let closure_2 = require(dependencyMap[0]).setDismissalTimeForChannel;
const Endpoints = require(dependencyMap[1]).Endpoints;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningActionCreators.tsx");

export const dismissGdmBlockedUserWarning = function dismissGdmBlockedUserWarning(channelId) {
  callback(channelId);
  const HTTP = require(dependencyMap[2]).HTTP;
  const obj = { url: Endpoints.CHANNEL_BLOCKED_USER_WARNING_ACK(channelId), rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
  return HTTP.post(obj);
};
