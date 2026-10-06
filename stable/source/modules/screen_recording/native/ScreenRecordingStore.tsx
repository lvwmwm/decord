// Module ID: 15544
// Function ID: 15545
// Name: ScreenRecordingStore
// Dependencies: [570, 15545, 2]

// Module 15544 (ScreenRecordingStore)
import ScreenRecordingUtils from "ScreenRecordingUtils" /* 15545 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

let obj = module_570.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {
    isRecording: false,
    microphoneEnabled: false,
    isUploading: false,
    currentStep: 0,
    stepStartedTime: null,
    isCompleted: false,
    currentSurveyId: null,
    currentSurveyConfig: null,
    startRecording() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = null;
      }
      let tmp2 = arg2;
      if (arg2 === undefined) {
        tmp2 = null;
      }
      const obj = { isRecording: true, microphoneEnabled: flag, currentSurveyId: tmp, currentSurveyConfig: tmp2, stepStartedTime: Date.now() };
      return closure_0(obj);
    },
    stopRecording() {
      return closure_0({ isRecording: false, microphoneEnabled: false, currentStep: 0, stepStartedTime: null, isCompleted: false });
    },
    setIsUploading(isUploading) {
      const obj = { isUploading };
      return closure_0(obj);
    },
    nextStep() {
      let obj;
      const tmp = closure_1();
      const sum = tmp.currentStep + 1;
      const currentSurveyConfig = tmp.currentSurveyConfig;
      let steps;
      if (currentSurveyConfig != null) {
        steps = currentSurveyConfig.steps;
      }
      if (steps == null) {
        steps = [];
      }
      const tmp3 = closure_0;
      if (sum >= steps.length) {
        obj = { isCompleted: true };
      } else {
        obj = { currentStep: sum, stepStartedTime: Date.now() };
        const _Date = Date;
      }
      tmp3(obj);
    },
    resetActionSheet() {
      const obj = { currentStep: 0, stepStartedTime: Date.now(), isCompleted: false };
      return closure_0(obj);
    },
    completeActionSheet() {
      const obj = ScreenRecordingUtils;
      obj.handleStopAndSend();
      closure_0({ currentStep: 0, stepStartedTime: null, isCompleted: false });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingStore.tsx");

export const useScreenRecordingStore = obj;
