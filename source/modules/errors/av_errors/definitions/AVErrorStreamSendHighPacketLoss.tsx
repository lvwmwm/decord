// Module ID: 16400
// Function ID: 126693
// Name: AVErrorStreamSendHighPacketLossDefinition
// Dependencies: []

// Module 16400 (AVErrorStreamSendHighPacketLossDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamSendHighPacketLoss.tsx");

export const AVErrorStreamSendHighPacketLossDefinition = {
  getActiveErrors() {
    const currentUserActiveStream = authStore.getCurrentUserActiveStream();
    if (null == currentUserActiveStream) {
      return null;
    } else if (0 === authStore.getViewerIds(currentUserActiveStream).length) {
      return null;
    } else {
      const rTCConnection = rTCConnection.getRTCConnection(arg1(dependencyMap[2]).encodeStreamKey(currentUserActiveStream));
      let mediaEngineConnectionId;
      if (null != rTCConnection) {
        mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
      }
      if (null == mediaEngineConnectionId) {
        return null;
      } else {
        const accumulatedStatsWithMinDatapoints = arg1(dependencyMap[3]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, currentUserActiveStream.ownerId);
        let tmp8 = null;
        if (null != accumulatedStatsWithMinDatapoints) {
          if (100 * accumulatedStatsWithMinDatapoints.short.packetLossRate > 10) {
            const obj = { type: arg1(dependencyMap[4]).AVError.STREAM_SEND_HIGH_PACKET_LOSS };
            const obj2 = arg1(dependencyMap[5]);
            const merged = Object.assign(obj2.getStreamErrorContext(arg1(dependencyMap[2]).encodeStreamKey(currentUserActiveStream)));
            const items = [obj];
            const obj3 = arg1(dependencyMap[2]);
            const tmp3 = items;
          }
          tmp8 = tmp3;
        }
        return tmp8;
      }
      const obj4 = arg1(dependencyMap[2]);
    }
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
