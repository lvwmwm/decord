// Module ID: 14755
// Function ID: 14756
// Name: getCurrentEmbeddedChannel
// Dependencies: [9311, 2045, 4663, 9312, 14751, 2]
// Exports: default

// Module 14755 (getCurrentEmbeddedChannel)
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14751 */;
import FramesStore from "FramesStore" /* 9311 */;
import ChannelStore from "ChannelStore" /* 2045 */;

const TransportTypes = fn(4663).TransportTypes;
const EmbeddedSurfaceType = fn(9312).EmbeddedSurfaceType;
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
