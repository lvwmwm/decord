// Module ID: 3746
// Function ID: 28583
// Name: getEmbeddedActivityLocationChannelId
// Dependencies: []
// Exports: getEmbeddedActivityLocationChannelId, getEmbeddedActivityLocationGuildId

// Module 3746 (getEmbeddedActivityLocationChannelId)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/activities/utils/embeddedActivityLocationUtils.tsx");

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
