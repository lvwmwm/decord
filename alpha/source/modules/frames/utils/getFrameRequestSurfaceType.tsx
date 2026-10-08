// Module ID: 11148
// Function ID: 11149
// Name: getFrameRequestSurfaceType
// Dependencies: [2063, 8586, 2071, 2]
// Exports: default

// Module 11148 (getFrameRequestSurfaceType)
import conjureTopicChannel from "conjureTopicChannel" /* 2071 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/getFrameRequestSurfaceType.tsx");

export default function getFrameRequestSurfaceType(type) {
  if (type.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    const channel = ChannelStore.getChannel(type.channelId);
    if (null != channel) {
      const tmpResult = conjureTopicChannel;
      if (tmpResult.isConjureLegacyTopicChannel(channel.type, channel.topic_)) {
        return EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN;
      }
    }
  }
  return type.type;
};
