// Module ID: 19554
// Function ID: 19555
// Name: useVoicePanelDockPIPStream
// Dependencies: [6933, 6813, 502, 4892, 19555, 1071, 5693, 504, 6816, 2]
// Exports: default

// Module 19554 (useVoicePanelDockPIPStream)
import Constants from "Constants" /* 1071 */;
import CallConstants from "CallConstants" /* 5693 */;
import StreamKeyUtils from "StreamKeyUtils" /* 6816 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6933 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6813 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import VoicePanelDockPIPWatchPromptStore from "VoicePanelDockPIPWatchPromptStore" /* 19555 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ApplicationStreamStates = Constants.ApplicationStreamStates;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockPIPStream.tsx");

export default function useVoicePanelDockPIPStream(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [ApplicationStreamingStore, AuthenticationStore, ChannelRTCStore, ChannelStore, VoicePanelDockPIPWatchPromptStore];
  return obj.useStateFromStoresObject(items, () => {
    let ownerId;
    const id = AuthenticationStore.getId();
    let tmp = id;
    const channel = ChannelStore.getChannel(id);
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let tmp3 = true === isDMResult;
    if (!tmp3) {
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp3 = true === isGuildStageVoiceResult;
    }
    const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(tmp);
    const found = allActiveStreamsForChannel.find((ownerId) => ownerId.ownerId !== closure_0);
    const obj2 = ApplicationStreamingStore;
    if (null != found) {
      const obj5 = StreamKeyUtils;
      const encodeStreamKeyResult = obj5.encodeStreamKey(found);
      const participant = ChannelRTCStore.getParticipant(tmp, encodeStreamKeyResult);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      return { streamKey: encodeStreamKeyResult, ownerId: found.ownerId, isWatching: type === ParticipantTypes.STREAM && null != participant.streamId || tmp21, isConnecting: !(type === ParticipantTypes.STREAM && null != participant.streamId || tmp21), hasEnded: found.state === ApplicationStreamStates.ENDED || found.state === tmp20.FAILED, isAutoWatchChannel: tmp3 };
    } else {
      let found1;
      if (!tmp3) {
        if (!VoicePanelDockPIPWatchPromptStore.isDismissed()) {
          const allApplicationStreamsForChannel = obj2.getAllApplicationStreamsForChannel(tmp);
          found1 = allApplicationStreamsForChannel.find((ownerId) => {
            const tmp = ownerId.ownerId !== closure_0 && !closure_2_6.hasWatched(ownerId.ownerId);
            return tmp;
          });
        }
      }
      let encodeStreamKeyResult1;
      if (null != found1) {
        const obj3 = StreamKeyUtils;
        encodeStreamKeyResult1 = obj3.encodeStreamKey(found1);
      }
      const obj4 = { streamKey: encodeStreamKeyResult1, ownerId, isWatching: false, isConnecting: false, hasEnded: false, isAutoWatchChannel: tmp3 };
      ownerId = undefined;
      if (found1 != null) {
        ownerId = found1.ownerId;
      }
      return obj4;
    }
  });
};
