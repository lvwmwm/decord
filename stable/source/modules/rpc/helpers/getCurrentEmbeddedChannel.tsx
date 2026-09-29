// Module ID: 14783
// Function ID: 14784
// Name: getCurrentEmbeddedChannel
// Dependencies: [9345, 2041, 4692, 9346, 14779, 2]
// Exports: default

// Module 14783 (getCurrentEmbeddedChannel)
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14779 */;
import FramesStore from "FramesStore" /* 9345 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const TransportTypes = fn(4692).TransportTypes;
const EmbeddedSurfaceType = fn(9346).EmbeddedSurfaceType;
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
