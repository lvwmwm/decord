// Module ID: 16398
// Function ID: 126680
// Name: AVErrorStreamReconnectingDefinition
// Dependencies: []

// Module 16398 (AVErrorStreamReconnectingDefinition)
const ApplicationStreamStates = require(dependencyMap[0]).ApplicationStreamStates;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamReconnecting.tsx");

export const AVErrorStreamReconnectingDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => state.state === constants.RECONNECTING);
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(closure_1[1]).AVError.STREAM_RECONNECTING };
      const obj2 = callback(closure_1[2]);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(closure_1[3]).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
