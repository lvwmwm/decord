// Module ID: 10180
// Function ID: 78659
// Name: copyGuildChannelOrThreadLink
// Dependencies: []
// Exports: copyGuildChannelOrThreadLink

// Module 10180 (copyGuildChannelOrThreadLink)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/channel/native/ChannelActionSheetUtils.tsx");

export const copyGuildChannelOrThreadLink = function copyGuildChannelOrThreadLink(guild_id, id) {
  const channelPermalink = require(dependencyMap[0]).getChannelPermalink(guild_id, id);
  const obj = require(dependencyMap[0]);
  require(dependencyMap[1]).copy(channelPermalink);
  const obj2 = require(dependencyMap[1]);
  require(dependencyMap[2]).presentLinkCopied();
};
