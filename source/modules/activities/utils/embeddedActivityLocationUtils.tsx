// Module ID: 3748
// Function ID: 28594
// Name: getEmbeddedActivityLocationChannelId
// Dependencies: [2]
// Exports: getEmbeddedActivityLocationChannelId, getEmbeddedActivityLocationGuildId

// Module 3748 (getEmbeddedActivityLocationChannelId)
const result = require("set").fileFinishedImporting("modules/activities/utils/embeddedActivityLocationUtils.tsx");

export const getEmbeddedActivityLocationChannelId = function getEmbeddedActivityLocationChannelId(_location) {
  if (null != _location) {
    let channel_id;
    if ("channel_id" in _location) {
      channel_id = _location.channel_id;
    }
    return channel_id;
  }
};
export const getEmbeddedActivityLocationGuildId = function getEmbeddedActivityLocationGuildId(_location) {
  if (null != _location) {
    let guild_id;
    if ("guild_id" in _location) {
      guild_id = _location.guild_id;
    }
    return guild_id;
  }
};
