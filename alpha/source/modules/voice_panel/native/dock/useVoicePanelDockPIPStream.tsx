// Module ID: 19722
// Function ID: 19723
// Name: useVoicePanelDockPIPStream
// Dependencies: [6901, 6771, 502, 19723, 1072, 5807, 504, 6774, 2]
// Exports: default

// Module 19722 (useVoicePanelDockPIPStream)
import Constants from "Constants" /* 1072 */;
import CallConstants from "CallConstants" /* 5807 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6774 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6901 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6771 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoicePanelDockPIPWatchPromptStore from "VoicePanelDockPIPWatchPromptStore" /* 19723 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockPIPStream.tsx");

export default function useVoicePanelDockPIPStream(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ApplicationStreamingStore, AuthenticationStore, ChannelRTCStore, VoicePanelDockPIPWatchPromptStore];
  return obj.useStateFromStoresObject(items, () => {
    let ownerId;
    const id = AuthenticationStore.getId();
    let tmp = id;
    const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(id);
    const found = allActiveStreamsForChannel.find((ownerId) => ownerId.ownerId !== closure_0);
    const obj = ApplicationStreamingStore;
    if (null != found) {
      const obj4 = StreamKeyUtils;
      const encodeStreamKeyResult = obj4.encodeStreamKey(found);
      const participant = ChannelRTCStore.getParticipant(tmp, encodeStreamKeyResult);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      return { streamKey: encodeStreamKeyResult, ownerId: found.ownerId, isWatching: type === ParticipantTypes.STREAM && null != participant.streamId || tmp17, isConnecting: !(type === ParticipantTypes.STREAM && null != participant.streamId || tmp17), hasEnded: found.state === ApplicationStreamStates.ENDED || found.state === tmp16.FAILED };
    } else {
      let found1;
      if (!VoicePanelDockPIPWatchPromptStore.isDismissed()) {
        const allApplicationStreamsForChannel = obj.getAllApplicationStreamsForChannel(tmp);
        found1 = allApplicationStreamsForChannel.find((ownerId) => {
          const tmp = ownerId.ownerId !== closure_0 && !closure_2_5.hasWatched(ownerId.ownerId);
          return tmp;
        });
      }
      let encodeStreamKeyResult1;
      if (null != found1) {
        const obj2 = StreamKeyUtils;
        encodeStreamKeyResult1 = obj2.encodeStreamKey(found1);
      }
      const obj5 = { streamKey: encodeStreamKeyResult1, ownerId, isWatching: false, isConnecting: false, hasEnded: false };
      ownerId = undefined;
      if (found1 != null) {
        ownerId = found1.ownerId;
      }
      return obj5;
    }
  });
};
