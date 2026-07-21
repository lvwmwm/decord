// Module ID: 16399
// Function ID: 126689
// Name: AVErrorStreamViewHighPacketLossDefinition
// Dependencies: []

// Module 16399 (AVErrorStreamViewHighPacketLossDefinition)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamViewHighPacketLoss.tsx");

export const AVErrorStreamViewHighPacketLossDefinition = {
  getActiveErrors() {
    let reduced = null;
    if (obj.getReportInboundErrors()) {
      const allActiveStreams = allActiveStreams.getAllActiveStreams();
      reduced = allActiveStreams.reduce((arr, ownerId) => {
        let obj = callback(closure_1[4]);
        const rTCConnection = rTCConnection.getRTCConnection(obj.encodeStreamKey(ownerId));
        let mediaEngineConnectionId;
        if (null != rTCConnection) {
          mediaEngineConnectionId = rTCConnection.getMediaEngineConnectionId();
        }
        if (null == mediaEngineConnectionId) {
          return arr;
        } else if (ownerId.ownerId === id.getId()) {
          return arr;
        } else {
          const accumulatedStatsWithMinDatapoints = callback(closure_1[3]).getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId.ownerId);
          if (null != accumulatedStatsWithMinDatapoints) {
            if (100 * accumulatedStatsWithMinDatapoints.short.packetLossRate > 10) {
              obj = { type: callback(closure_1[5]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS };
              const obj4 = callback(closure_1[6]);
              const merged = Object.assign(obj4.getStreamErrorContext(callback(closure_1[4]).encodeStreamKey(ownerId)));
              arr.push(obj);
              const obj5 = callback(closure_1[4]);
            }
          }
          return arr;
        }
      }, []);
    }
    return reduced;
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
