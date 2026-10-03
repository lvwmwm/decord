// Module ID: 17516
// Function ID: 17517
// Name: attachJankPanelReporters
// Dependencies: [2050, 8703, 5098, 2051, 2103, 15935, 1369, 17136, 17517, 2]
// Exports: default

// Module 17516 (attachJankPanelReporters)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import FramesStore from "FramesStore" /* 8703 */;
import VoicePanelStore from "VoicePanelStore" /* 5098 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import size from "module_2" /* 2 */;

let closure_2;

let c7 = false;
let result = size.fileFinishedImporting("modules/jank_stats/native/attachJankPanelReporters.native.tsx");

export default function attachJankPanelReporters() {
  let f130810;
  let voice;
  const f1308092 = () => {
    const tmp = closure_1_1();
    if (tmp !== closure_2) {
      closure_2 = tmp;
      const obj = voice(f130810[5]);
      obj.setJankPanelOpen(f130809, tmp);
    }
  };
  const f148455 = (addChangeListener) => addChangeListener.addChangeListener(f130809);
  let isAndroidResult = !c7;
  if (isAndroidResult) {
    let tmp2 = voice;
    let obj = voice(f130810[6]);
    isAndroidResult = obj.isAndroid();
  }
  if (isAndroidResult) {
    c7 = true;
    voice = "voice";
    f130810 = () => {
      state = state.getState();
      return state.isAnyVoicePanelOpen();
    };
    let state = VoicePanelStore.getState();
    const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
    let c2 = isAnyVoicePanelOpenResult;
    const obj2 = VoicePanelStore;
    if (isAnyVoicePanelOpenResult) {
      const obj4 = voice(f130810[5]);
      obj4.setJankPanelOpen("voice", true);
    }
    const subscription = obj2.subscribe(f1308092);
    const items = [c2, ChannelStore, SelectedChannelStore];
    const activity = "activity";
    const f130811 = () => {
      const obj = activity(f130811[7]);
      let result = obj.isConnectedToActivityInText();
      const tmp = activity;
      const tmp2 = f130811;
      if (result) {
        const tmpResult = tmp(tmp2[7]);
        result = tmpResult.isActivityPanelFullscreen();
      }
      return result;
    };
    c2 = undefined;
    const obj5 = voice(f130810[7]);
    let result = obj5.isConnectedToActivityInText();
    if (result) {
      const tmp12Result = voice(f130810[7]);
      result = tmp12Result.isActivityPanelFullscreen();
    }
    c2 = result;
    if (c2) {
      const tmp12Result3 = voice(f130810[5]);
      tmp12Result3.setJankPanelOpen("activity", true);
    }
    let f130809 = f1308092;
    const item = items.forEach(f148455);
    const isFramePanelFullscreen = tmp12(tmp13[8]).isFramePanelFullscreen;
    const items1 = [FramesStore];
    const frame_str = "frame";
    const result1 = isFramePanelFullscreen();
    if (result1) {
      const tmp12Result4 = voice(f130810[5]);
      tmp12Result4.setJankPanelOpen("frame", true);
    }
    f130809 = f1308092;
    const item1 = items1.forEach(f148455);
  }
};
