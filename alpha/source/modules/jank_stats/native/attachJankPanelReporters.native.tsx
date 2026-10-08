// Module ID: 17867
// Function ID: 17868
// Name: attachJankPanelReporters
// Dependencies: [2062, 6041, 10612, 6079, 502, 2063, 2115, 5113, 16238, 6043, 1381, 17470, 17868, 2]
// Exports: default

// Module 17867 (attachJankPanelReporters)
import CallConstants from "CallConstants" /* 5113 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import FramesStore from "FramesStore" /* 10612 */;
import VoicePanelStore from "VoicePanelStore" /* 6079 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import size from "module_2" /* 2 */;

let closure_2, currentEmbeddedActivity, selectedParticipant;

const isStreamParticipant = CallConstants.isStreamParticipant;
let c10 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  let f132635;
  let voice;
  const f1326332 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f132635[8]);
      obj.setJankPanelOpen(f132633, tmp);
    }
  };
  const f150495 = (addChangeListener) => addChangeListener.addChangeListener(update);
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
    let obj = voice(f132635[10]);
    isAndroidResult = obj.isAndroid();
  }
  if (isAndroidResult) {
    c10 = true;
    let str = "voice";
    voice = "voice";
    f132635 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    const obj2 = VoicePanelStore;
    let state = VoicePanelStore.getState();
    let c2 = state.isAnyVoicePanelOpen();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    if (c2) {
      const tmp5 = voice;
      let obj4 = voice(f132635[8]);
      obj4.setJankPanelOpen("voice", true);
    }
    const subscription = obj2.subscribe(f1326332);
    const items = [c2, , ];
    let tmp10 = ChannelStore;
    items[1] = ChannelStore;
    let tmp11 = SelectedChannelStore;
    items[2] = SelectedChannelStore;
    let str2 = "activity";
    const activity = "activity";
    const f132636 = () => {
      const obj = activity(f132636[11]);
      let result = obj.isConnectedToActivityInText();
      const tmp = activity;
      const tmp2 = f132636;
      if (result) {
        const tmpResult = tmp(tmp2[11]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    let tmp12 = voice;
    let tmp13 = f132635;
    const obj5 = voice(f132635[11]);
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
    let f132633 = f1326332;
    const item = items.forEach(f150495);
    const isFramePanelFullscreen = tmp12(tmp13[12]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp12Result5 = tmp12(tmp13[8]);
      tmp12Result5.setJankPanelOpen("frame", true);
    }
    f132633 = f1326332;
    const item1 = items1.forEach(f150495);
    function update() {
      let obj = voice(f132635[8]);
      const result = obj.setJankVoicePanelFocus(getVoicePanelFocus());
    }
    const tmp12Result6 = tmp12(tmp13[8]);
    const result2 = tmp12Result6.setJankVoicePanelFocus(getVoicePanelFocus());
    const subscription1 = obj2.subscribe(update);
    const items2 = [ChannelRTCStore, tmp9];
    const item2 = items2.forEach(f150495);
  }
};
