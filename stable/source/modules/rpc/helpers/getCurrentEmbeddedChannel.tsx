// Module ID: 14035
// Function ID: 14036
// Name: getCurrentEmbeddedChannel
// Dependencies: [8496, 2051, 4741, 8498, 14031, 2]
// Exports: default

// Module 14035 (getCurrentEmbeddedChannel)
import Constants from "Constants" /* 4741 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8498 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14031 */;
import FramesStore from "FramesStore" /* 8496 */;
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
