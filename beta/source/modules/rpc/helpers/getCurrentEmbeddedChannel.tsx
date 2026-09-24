// Module ID: 14793
// Function ID: 14794
// Name: getCurrentEmbeddedChannel
// Dependencies: [9343, 2045, 4695, 9344, 14789, 2]
// Exports: default

// Module 14793 (getCurrentEmbeddedChannel)
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14789 */;
import FramesStore from "FramesStore" /* 9343 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const TransportTypes = fn(4695).TransportTypes;
const EmbeddedSurfaceType = fn(9344).EmbeddedSurfaceType;
const size = fn(2);
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
      if (EmbeddedSurfaceType.MAIN !== type) {
        return ChannelStore.getChannel(surface.channelId);
      }
    } else {
      return getCurrentEmbeddedActivityChannelDefault();
    }
  }
};
