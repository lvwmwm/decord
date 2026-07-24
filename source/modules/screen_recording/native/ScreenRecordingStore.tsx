// Module ID: 14764
// Function ID: 112509
// Name: useScreenRecordingStore
// Dependencies: [621, 14765, 2]

// Module 14764 (useScreenRecordingStore)
import keys from "keys";

let obj = keys.create((arg0, arg1) => {
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
      let tmp = arg1;
      let tmp2 = arg2;
      if (arg0 === undefined) {
        flag = false;
      }
      if (tmp === undefined) {
        tmp = null;
      }
      if (tmp2 === undefined) {
        tmp2 = null;
      }
      const obj = { isRecording: true, microphoneEnabled: flag, currentSurveyId: tmp, currentSurveyConfig: tmp2, stepStartedTime: Date.now() };
      return callback(obj);
    },
    stopRecording() {
      return callback({ isRecording: false, microphoneEnabled: false, currentStep: 0, stepStartedTime: null, isCompleted: false });
    },
    setIsUploading(isUploading) {
      return callback({ isUploading });
    },
    nextStep() {
      const tmp = dependencyMap();
      const sum = tmp.currentStep + 1;
      const currentSurveyConfig = tmp.currentSurveyConfig;
      let steps;
      if (null != currentSurveyConfig) {
        steps = currentSurveyConfig.steps;
      }
      if (null == steps) {
        steps = [];
      }
      if (sum >= steps.length) {
        let obj = { isCompleted: true };
      } else {
        obj = { currentStep: sum };
        const _Date = Date;
        obj.stepStartedTime = Date.now();
      }
      closure_0(obj);
    },
    resetActionSheet() {
      const obj = { currentStep: 0, stepStartedTime: Date.now(), isCompleted: false };
      return callback(obj);
    },
    completeActionSheet() {
      callback(14765).handleStopAndSend();
      callback({ currentStep: 0, stepStartedTime: null, isCompleted: false });
    }
  };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingStore.tsx");

export const useScreenRecordingStore = obj;
