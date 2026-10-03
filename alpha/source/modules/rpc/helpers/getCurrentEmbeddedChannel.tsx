// Module ID: 14310
// Function ID: 14311
// Name: getCurrentEmbeddedChannel
// Dependencies: [8703, 2051, 5316, 8514, 14306, 2]
// Exports: default

// Module 14310 (getCurrentEmbeddedChannel)
import Constants from "Constants" /* 5316 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8514 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14306 */;
import FramesStore from "FramesStore" /* 8703 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedChannel.tsx");

export default function getCurrentEmbeddedChannel(source) {
  if (source.source.type === TransportTypes.POST_MESSAGE) {
    const frameByIframeId = FramesStore.getFrameByIframeId(source.source.iframeId);
    let surface;
    if (frameByIframeId != null) {
      surface = frameByIframeId.surface;
    }
    if (null != surface) {
      const type = surface.type;
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
        return ChannelStore.getChannel(surface.channelId);
      }
    } else {
      return getCurrentEmbeddedActivityChannelDefault();
    }
  }
};
