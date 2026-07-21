// Module ID: 16404
// Function ID: 126706
// Name: AVErrorStreamFailedToStartDefinition
// Dependencies: []

// Module 16404 (AVErrorStreamFailedToStartDefinition)
const ApplicationStreamStates = require(dependencyMap[0]).ApplicationStreamStates;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorStreamFailedToStart.tsx");

export const AVErrorStreamFailedToStartDefinition = {
  getActiveErrors(activeStreams) {
    activeStreams = activeStreams.activeStreams;
    const found = activeStreams.filter((state) => {
      let tmp = state.state === constants.FAILED;
      if (tmp) {
        tmp = null == state.errorCode;
      }
      return tmp;
    });
    return found.map((currentUserActiveStream) => {
      const obj = { type: callback(closure_1[1]).AVError.STREAM_FAILED_TO_START };
      const obj2 = callback(closure_1[2]);
      const merged = Object.assign(obj2.getStreamErrorContext(callback(closure_1[3]).encodeStreamKey(currentUserActiveStream)));
      return obj;
    });
  },
  makeErrorContextKey(streamKey) {
    return "" + streamKey.streamKey + ":" + streamKey.mediaSessionId;
  }
};
