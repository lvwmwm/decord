// Module ID: 14594
// Function ID: 109981
// Name: useScreenRecordingStore
// Dependencies: []

// Module 14594 (useScreenRecordingStore)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingStore.tsx");

export const useScreenRecordingStore = _module.create((arg0, arg1) => {
  const require = arg0;
  const dependencyMap = arg1;
  return {
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
      return arg0(obj);
    },
    stopRecording() {
      return arg0({});
    },
    setIsUploading(isUploading) {
      return isUploading({ isUploading });
    },
    nextStep() {
      const tmp = arg1();
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
      arg0(obj);
    },
    resetActionSheet() {
      const obj = { y: "P", isArray: "DISPLAY_MEDIA_UPLOADS", textAlign: "%ErrorPrototype%", stepStartedTime: Date.now() };
      return arg0(obj);
    },
    completeActionSheet() {
      arg0(arg1[1]).handleStopAndSend();
      arg0({ y: "P", isArray: "DISPLAY_MEDIA_UPLOADS", textAlign: "%ErrorPrototype%" });
    }
  };
});
