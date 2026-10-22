// Module ID: 18772
// Function ID: 18773
// Name: attachJankPanelReporters
// Dependencies: [4820, 6757, 6760, 6789, 502, 4821, 4872, 5618, 17357, 6765, 18368, 18773, 2]
// Exports: default

// Module 18772 (attachJankPanelReporters)
import CallConstants from "CallConstants" /* 5618 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6757 */;
import FramesStore from "FramesStore" /* 6760 */;
import VoicePanelStore from "VoicePanelStore" /* 6789 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import size from "module_2" /* 2 */;

let closure_2, currentEmbeddedActivity, selectedParticipant;

const isStreamParticipant = CallConstants.isStreamParticipant;
let c10 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  const f1374392 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f137441[8]);
      obj.setJankPanelOpen(f137439, tmp);
    }
  };
  const f155766 = (addChangeListener) => addChangeListener.addChangeListener(update);
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
    const f137441 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    let obj = VoicePanelStore;
    let state = VoicePanelStore.getState();
    let c2 = state.isAnyVoicePanelOpen();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    if (c2) {
      const obj3 = voice(f137441[8]);
      obj3.setJankPanelOpen("voice", true);
    }
    const subscription = obj.subscribe(f1374392);
    const items = [c2, , ];
    let tmp8 = ChannelStore;
    items[1] = ChannelStore;
    items[2] = SelectedChannelStore;
    let str2 = "activity";
    const activity = "activity";
    const f137442 = () => {
      const obj = activity(f137442[10]);
      let result = obj.isConnectedToActivityInText();
      const tmp = activity;
      const tmp2 = f137442;
      if (result) {
        const tmpResult = tmp(tmp2[10]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    let tmp10 = voice;
    let tmp11 = f137441;
    let obj4 = voice(f137441[10]);
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
    let f137439 = f1374392;
    const item = items.forEach(f155766);
    const isFramePanelFullscreen = tmp10(tmp11[11]).isFramePanelFullscreen;
    let tmp15 = FramesStore;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp10Result5 = tmp10(tmp11[8]);
      tmp10Result5.setJankPanelOpen("frame", true);
    }
    f137439 = f1374392;
    const item1 = items1.forEach(f155766);
    function update() {
      let obj = voice(f137441[8]);
      const result = obj.setJankVoicePanelFocus(getVoicePanelFocus());
    }
    const tmp10Result6 = tmp10(tmp11[8]);
    const result2 = tmp10Result6.setJankVoicePanelFocus(getVoicePanelFocus());
    const subscription1 = obj.subscribe(update);
    const items2 = [ChannelRTCStore, tmp7];
    const item2 = items2.forEach(f155766);
  }
};
