// Module ID: 6931
// Function ID: 55283
// Name: trackingConfigWithDefaults
// Dependencies: []
// Exports: trackingConfigWithDefaults

// Module 6931 (trackingConfigWithDefaults)
let closure_0 = importDefault(dependencyMap[0]);
const LinkType = arg1(dependencyMap[1]).LinkType;
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTrackingConfig.tsx");

export const trackingConfigWithDefaults = function trackingConfigWithDefaults(id) {
  const obj = {};
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  let str = "0";
  if (null != id) {
    str = id;
  }
  obj.id = str;
  let linkType;
  if (null != id) {
    linkType = id.linkType;
  }
  if (null == linkType) {
    linkType = LinkType.UNKNOWN;
  }
  obj.linkType = linkType;
  let referrerId;
  if (null != id) {
    referrerId = id.referrerId;
  }
  if (null == referrerId) {
    referrerId = id.getId();
  }
  obj.referrerId = referrerId;
  let activityCustomId;
  if (null != id) {
    activityCustomId = id.activityCustomId;
  }
  obj.activityCustomId = activityCustomId;
  let onView;
  if (null != id) {
    onView = id.onView;
  }
  obj.onView = onView;
  let onLinkCopied;
  if (null != id) {
    onLinkCopied = id.onLinkCopied;
  }
  obj.onLinkCopied = onLinkCopied;
  let guildId;
  if (null != id) {
    guildId = id.guildId;
  }
  obj.guildId = guildId;
  let channelId;
  if (null != id) {
    channelId = id.channelId;
  }
  obj.channelId = channelId;
  let messageId;
  if (null != id) {
    messageId = id.messageId;
  }
  obj.messageId = messageId;
  let isDeadEnd;
  if (null != id) {
    isDeadEnd = id.isDeadEnd;
  }
  obj.isDeadEnd = null != isDeadEnd && isDeadEnd;
  let appEmbedState;
  if (null != id) {
    appEmbedState = id.appEmbedState;
  }
  obj.appEmbedState = appEmbedState;
  return obj;
};
