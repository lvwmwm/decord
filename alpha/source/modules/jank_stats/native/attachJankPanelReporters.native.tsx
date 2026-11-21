// Module ID: 19556
// Function ID: 19557
// Name: attachJankPanelReporters
// Dependencies: [4761, 6620, 6623, 6495, 502, 4762, 4816, 5563, 17529, 6629, 19176, 19557, 2]
// Exports: default

// Module 19556 (attachJankPanelReporters)
import CallConstants from "CallConstants" /* 5563 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4761 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6620 */;
import FramesStore from "FramesStore" /* 6623 */;
import VoicePanelStore from "VoicePanelStore" /* 6495 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import size from "module_2" /* 2 */;

let closure_2, currentEmbeddedActivity, selectedParticipant;

const isStreamParticipant = CallConstants.isStreamParticipant;
let c10 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  const f1180342 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f118036[8]);
      obj.setJankPanelOpen(f118034, tmp);
    }
  };
  const f134031 = (addChangeListener) => addChangeListener.addChangeListener(update);
  function getVoicePanelFocus() {
    const voicePanelsOpened = state.getState().voicePanelsOpened;
    if (0 === voicePanelsOpened.size) {
      return null;
    } else {
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let embeddedActivityParticipantId = null;
      if (null != currentEmbeddedActivity) {
        const obj4 = { applicationId: null, instanceId: null };
        ({ applicationId: obj2.applicationId, compositeInstanceId: obj2.instanceId } = currentEmbeddedActivity);
        const obj = voice(closure_1_1[9]);
        embeddedActivityParticipantId = obj.getEmbeddedActivityParticipantId(obj4);
      }
      for (const item10023 of voicePanelsOpened) {
        selectedParticipant = selectedParticipant.getSelectedParticipant(item10023);
        let tmp10 = selectedParticipant;
        if (null != selectedParticipant) {
          if (tmp10.id === embeddedActivityParticipantId) {
            obj3.return();
            let str2 = "activity";
            return "activity";
          } else if (closure_1_9(tmp10)) {
            if (tmp10.user.id !== tmp5) {
              obj3.return();
              let str = "stream";
              return "stream";
            }
          }
        }
        continue;
      }
      return null;
    }
  }
  let tmp = c10;
  if (!tmp) {
    c10 = true;
    let str = "voice";
    const voice = "voice";
    const f118036 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    let obj = VoicePanelStore;
    let state = VoicePanelStore.getState();
    let c2 = state.isAnyVoicePanelOpen();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    if (c2) {
      const obj3 = voice(f118036[8]);
      obj3.setJankPanelOpen("voice", true);
    }
    const subscription = obj.subscribe(f1180342);
    const items = [c2, , ];
    let tmp8 = ChannelStore;
    items[1] = ChannelStore;
    items[2] = SelectedChannelStore;
    let str2 = "activity";
    const activity = "activity";
    const f118037 = () => {
      const obj = activity(f118037[10]);
      let result = obj.isConnectedToActivityInText();
      const tmp = activity;
      const tmp2 = f118037;
      if (result) {
        const tmpResult = tmp(tmp2[10]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    let tmp10 = voice;
    let tmp11 = f118036;
    let obj4 = voice(f118036[10]);
    let result = obj4.isConnectedToActivityInText();
    const tmp7 = c2;
    if (result) {
      const tmp10Result = tmp10(tmp11[10]);
      result = tmp10Result.isActivityPanelFullscreen();
    }
    c2 = result;
    if (c2) {
      const tmp10Result4 = tmp10(tmp11[8]);
      tmp10Result4.setJankPanelOpen("activity", true);
    }
    let f118034 = f1180342;
    const item = items.forEach(f134031);
    const isFramePanelFullscreen = tmp10(tmp11[11]).isFramePanelFullscreen;
    let tmp15 = FramesStore;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp10Result5 = tmp10(tmp11[8]);
      tmp10Result5.setJankPanelOpen("frame", true);
    }
    f118034 = f1180342;
    const item1 = items1.forEach(f134031);
    function update() {
      let obj = voice(f118036[8]);
      const result = obj.setJankVoicePanelFocus(getVoicePanelFocus());
    }
    const tmp10Result6 = tmp10(tmp11[8]);
    const result2 = tmp10Result6.setJankVoicePanelFocus(getVoicePanelFocus());
    const subscription1 = obj.subscribe(update);
    const items2 = [ChannelRTCStore, tmp7];
    const item2 = items2.forEach(f134031);
  }
};
