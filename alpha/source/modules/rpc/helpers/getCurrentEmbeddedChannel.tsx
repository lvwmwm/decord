// Module ID: 14234
// Function ID: 14235
// Name: getCurrentEmbeddedChannel
// Dependencies: [8698, 2045, 4769, 8700, 14230, 2]
// Exports: default

// Module 14234 (getCurrentEmbeddedChannel)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8700 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14230 */;
import FramesStore from "FramesStore" /* 8698 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const TransportTypes = fn(4769).TransportTypes;
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
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
        return ChannelStore.getChannel(surface.channelId);
      }
    } else {
      return getCurrentEmbeddedActivityChannelDefault();
    }
  }
};
