// Module ID: 18093
// Function ID: 18094
// Name: attachJankPanelReporters
// Dependencies: [2064, 6036, 10807, 6074, 502, 2065, 2116, 5115, 16424, 6038, 1382, 17694, 18094, 2]
// Exports: default

// Module 18093 (attachJankPanelReporters)
import CallConstants from "CallConstants" /* 5115 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import FramesStore from "FramesStore" /* 10807 */;
import VoicePanelStore from "VoicePanelStore" /* 6074 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import size from "module_2" /* 2 */;

let closure_2, currentEmbeddedActivity, selectedParticipant;

const isStreamParticipant = CallConstants.isStreamParticipant;
let c10 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  let f133398;
  let voice;
  const f1333962 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f133398[8]);
      obj.setJankPanelOpen(f133396, tmp);
    }
  };
  const f151307 = (addChangeListener) => addChangeListener.addChangeListener(update);
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
  let isAndroidResult = !c10;
  if (isAndroidResult) {
    let tmp2 = voice;
    let obj = voice(f133398[10]);
    isAndroidResult = obj.isAndroid();
  }
  if (isAndroidResult) {
    c10 = true;
    let str = "voice";
    voice = "voice";
    f133398 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    const obj2 = VoicePanelStore;
    let state = VoicePanelStore.getState();
    let c2 = state.isAnyVoicePanelOpen();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    if (c2) {
      const tmp5 = voice;
      let obj4 = voice(f133398[8]);
      obj4.setJankPanelOpen("voice", true);
    }
    const subscription = obj2.subscribe(f1333962);
    const items = [c2, , ];
    let tmp10 = ChannelStore;
    items[1] = ChannelStore;
    let tmp11 = SelectedChannelStore;
    items[2] = SelectedChannelStore;
    let str2 = "activity";
    const activity = "activity";
    const f133399 = () => {
      const obj = activity(f133399[11]);
      let result = obj.isConnectedToActivityInText();
      const tmp = activity;
      const tmp2 = f133399;
      if (result) {
        const tmpResult = tmp(tmp2[11]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    let tmp12 = voice;
    let tmp13 = f133398;
    const obj5 = voice(f133398[11]);
    let result = obj5.isConnectedToActivityInText();
    const tmp9 = c2;
    if (result) {
      const tmp12Result = tmp12(tmp13[11]);
      result = tmp12Result.isActivityPanelFullscreen();
    }
    c2 = result;
    if (c2) {
      const tmp12Result4 = tmp12(tmp13[8]);
      tmp12Result4.setJankPanelOpen("activity", true);
    }
    let f133396 = f1333962;
    const item = items.forEach(f151307);
    const isFramePanelFullscreen = tmp12(tmp13[12]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp12Result5 = tmp12(tmp13[8]);
      tmp12Result5.setJankPanelOpen("frame", true);
    }
    f133396 = f1333962;
    const item1 = items1.forEach(f151307);
    function update() {
      let obj = voice(f133398[8]);
      const result = obj.setJankVoicePanelFocus(getVoicePanelFocus());
    }
    const tmp12Result6 = tmp12(tmp13[8]);
    const result2 = tmp12Result6.setJankVoicePanelFocus(getVoicePanelFocus());
    const subscription1 = obj2.subscribe(update);
    const items2 = [ChannelRTCStore, tmp9];
    const item2 = items2.forEach(f151307);
  }
};
