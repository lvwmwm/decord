// Module ID: 20341
// Function ID: 20342
// Name: attachJankPanelReporters
// Dependencies: [5158, 7024, 7027, 6899, 502, 5159, 5213, 5977, 18772, 7033, 19967, 20342, 2]
// Exports: default

// Module 20341 (attachJankPanelReporters)
import CallConstants from "CallConstants" /* 5977 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5158 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7024 */;
import FramesStore from "FramesStore" /* 7027 */;
import VoicePanelStore from "VoicePanelStore" /* 6899 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5213 */;
import size from "module_2" /* 2 */;

let closure_2, currentEmbeddedActivity, selectedParticipant;

const isStreamParticipant = CallConstants.isStreamParticipant;
let c10 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  const f1228992 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f122901[8]);
      obj.setJankPanelOpen(f122899, tmp);
    }
  };
  const f139261 = (addChangeListener) => addChangeListener.addChangeListener(update);
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
    const f122901 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    let obj = VoicePanelStore;
    let state = VoicePanelStore.getState();
    let c2 = state.isAnyVoicePanelOpen();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    if (c2) {
      const obj3 = voice(f122901[8]);
      obj3.setJankPanelOpen("voice", true);
    }
    const subscription = obj.subscribe(f1228992);
    const items = [c2, , ];
    let tmp8 = ChannelStore;
    items[1] = ChannelStore;
    items[2] = SelectedChannelStore;
    let str2 = "activity";
    const activity = "activity";
    const f122902 = () => {
      const obj = activity(f122902[10]);
      let result = obj.isConnectedToActivityInText();
      const tmp = activity;
      const tmp2 = f122902;
      if (result) {
        const tmpResult = tmp(tmp2[10]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    let tmp10 = voice;
    let tmp11 = f122901;
    let obj4 = voice(f122901[10]);
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
    let f122899 = f1228992;
    const item = items.forEach(f139261);
    const isFramePanelFullscreen = tmp10(tmp11[11]).isFramePanelFullscreen;
    let tmp15 = FramesStore;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp10Result5 = tmp10(tmp11[8]);
      tmp10Result5.setJankPanelOpen("frame", true);
    }
    f122899 = f1228992;
    const item1 = items1.forEach(f139261);
    function update() {
      let obj = voice(f122901[8]);
      const result = obj.setJankVoicePanelFocus(getVoicePanelFocus());
    }
    const tmp10Result6 = tmp10(tmp11[8]);
    const result2 = tmp10Result6.setJankVoicePanelFocus(getVoicePanelFocus());
    const subscription1 = obj.subscribe(update);
    const items2 = [ChannelRTCStore, tmp7];
    const item2 = items2.forEach(f139261);
  }
};
