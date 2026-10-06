// Module ID: 15545
// Function ID: 15546
// Name: ScreenRecordingUtils
// Dependencies: [5, 17, 15544, 5204, 15546, 15547, 4801, 15548, 1987, 12273, 5441, 7654, 12272, 1485, 2]
// Exports: handleRecordingPhase, handleStopAndSend

// Module 15545 (ScreenRecordingUtils)
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5204 */;
import bug_reporter_BugReportUtils from "bug_reporter/BugReportUtils" /* 12273 */;
import ScreenRecordingStore from "ScreenRecordingStore" /* 15544 */;
import react_nativeDefault from "react-native" /* 15546 */;
import StudyConfig from "StudyConfig" /* 15547 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;
import size_mod from "module_2" /* 2 */;

let bugReportConfig, c1, c2, c5, c6, closure_12, closure_3, closure_6, filename, filename2, obj25, uri;

let NativeEventEmitter;
let NativeModules;
let obj = function _getLatestVideo() {
  let photos;
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp;
            closure_0 = undefined;
            c3 = 1;
            const obj4 = { first: 1, groupTypes: "Recents", assetType: "Videos", include: ["filename", "fileSize", "playableDuration", "imageSize"] };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: photos.getPhotos(obj4), done: false };
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1 = closure_2;
          const obj6 = { title: "Error", body: "Failed to get latest video from photo gallery, error: " + closure_1 };
          const _HermesInternal = HermesInternal;
          const show = closure_129_1(closure_129_2[3]).show;
          const tmp19 = closure_129_1(closure_129_2[3]);
          show(obj6);
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          let first = null;
          if (closure_0) {
            first = null;
            if (closure_0.edges) {
              first = null;
              if (closure_0.edges.length > 0) {
                first = closure_0.edges[0];
              }
            }
          }
          c3 = 0;
          c5 = 3;
          obj = { value: first, done: true };
          return obj;
        }
      } catch (tmp23) {
        closure_2 = tmp23;
        if (0 === c3) {
          c5 = 3;
          throw tmp23;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _checkAndRequestPermissions() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp;
            closure_0 = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj6.requestPermissions(), done: false };
            obj6 = react_nativeDefault;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_1 = closure_2;
          const obj7 = { title: "Error", body: "Failed to check permissions, error: " + closure_1 };
          const _HermesInternal = HermesInternal;
          const show = closure_129_1(closure_129_2[3]).show;
          const tmp21 = closure_129_1(closure_129_2[3]);
          show(obj7);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let flag;
          closure_0 = value;
          if (closure_0.photosGranted) {
            let flag2 = closure_0.microphoneGranted;
            if (!flag2) {
              const obj2 = closure_129_1(closure_129_2[3]);
              obj2.show({ title: "Error", body: "Microphone permission is required to record audio" });
              flag2 = false;
            }
            flag = flag2;
          } else {
            obj = closure_129_1(closure_129_2[3]);
            obj.show({ title: "Error", body: "Photos permission is required to save recordings" });
            flag = false;
          }
          c3 = 0;
          c5 = 3;
          const obj9 = { value: flag, done: true };
          return obj9;
        }
      } catch (tmp26) {
        closure_2 = tmp26;
        if (0 === c3) {
          c5 = 3;
          throw tmp26;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _startRecordingProcess() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj13;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        let surveyConfig;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = undefined;
            surveyConfig = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj13.startRecording(), done: false };
            obj13 = react_nativeDefault;
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj7 = { title: "Error", body: "Failed to start screen recording, error: " + closure_3 };
          const _HermesInternal = HermesInternal;
          const show = closure_130_1(closure_130_2[3]).show;
          const tmp39 = closure_130_1(closure_130_2[3]);
          show(obj7);
          const state = closure_130_4.getState();
          state.stopRecording();
          c6 = 3;
          const obj8 = { value: { success: false }, done: true };
          return obj8;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_1 = value;
          if (closure_1.success) {
            surveyConfig = null;
            if (undefined !== closure_0) {
              const obj3 = closure_130_0(closure_130_2[5]);
              surveyConfig = obj3.getSurveyConfig(closure_0);
            }
            const state1 = closure_130_4.getState();
            state1.startRecording(closure_1.microphoneEnabled, closure_0, surveyConfig);
            const state2 = closure_130_4.getState();
            state2.resetActionSheet();
            const obj6 = closure_130_1(closure_130_2[6]);
            obj6.openLazy(closure_130_0(closure_130_2[8])(closure_130_2[7], closure_130_2.paths), "ScreenRecordingActionSheet");
            const obj10 = { success: true, microphoneEnabled: closure_1.microphoneEnabled };
            c4 = 0;
            c6 = 3;
            const obj11 = { value: obj10, done: true };
            return obj11;
          } else {
            obj = closure_130_1(closure_130_2[3]);
            obj.show({ title: "Error", body: "Failed to start screen recording" });
            c4 = 0;
            c6 = 3;
            const obj12 = { value: { success: false }, done: true };
            return obj12;
          }
        }
      } catch (tmp47) {
        closure_3 = tmp47;
        if (0 === c4) {
          c6 = 3;
          throw tmp47;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _stopRecordingProcess() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: obj6.stopRecording(), done: false };
            obj6 = react_nativeDefault;
            return obj4;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const obj5 = { title: "Error", body: "Failed to stop screen recording, error: " + closure_0 };
          const _HermesInternal = HermesInternal;
          const show = closure_129_1(closure_129_2[3]).show;
          const tmp15 = closure_129_1(closure_129_2[3]);
          show(obj5);
          const state = closure_129_4.getState();
          state.stopRecording();
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          let flag = value.success;
          if (!flag) {
            obj = closure_129_1(closure_129_2[3]);
            obj.show({ title: "Error", body: "Failed to stop screen recording, but not error" });
            flag = false;
          }
          c3 = 0;
          c5 = 3;
          const obj8 = { value: flag, done: true };
          return obj8;
        }
      } catch (tmp22) {
        closure_2 = tmp22;
        if (0 === c3) {
          c5 = 3;
          throw tmp22;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _submitBugReportWithScreenRecording() {
  let state;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const length = arg0;
    let closure_1 = arg1;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async function(arg0, value) {
      let surveyConfig;
      function getLatestVideo() {
        return filename(...arguments);
      }
      function formatTranscription(arr) {
        let date;
        obj = { generated: date.toISOString(), totalSegments: arr.length, segments: arr.map((text) => ({ text: text.text, startTime: text.startTime, duration: text.duration })) };
        date = new Date();
        return JSON.stringify(obj, null, 2);
      }
      if (1 === tmp4) {
        c8 = 0;
        const obj21 = closure_134_1(closure_134_2[3]);
        obj21.show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
      } else {
        let closure_4;
        if (2 === tmp4) {
          if (arg0 === 1) {
            let c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            const features = value.features;
            closure_3 = features.find((name) => {
              let hasItem;
              if (name.name != null) {
                const formatted = str.toLowerCase();
                const str2 = uri.uploadConfig.featureName;
                hasItem = formatted.includes(str2.toLowerCase());
              }
              if (!hasItem) {
                let hasItem1;
                if (name.squad != null) {
                  const formatted1 = str3.toLowerCase();
                  const str4 = uri.uploadConfig.squadName;
                  hasItem1 = formatted1.includes(str4.toLowerCase());
                }
                hasItem = hasItem1;
              }
              return hasItem;
            });
            closure_4 = [];
            bugReportConfig = getLatestVideo();
            c9 = 3;
            c10 = 1;
            return { value: bugReportConfig, done: false };
          }
        } else {
          if (3 === tmp4) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              return { value, done: true };
            } else {
              bugReportConfig = value;
              if (null != bugReportConfig) {
                bugReportConfig = closure_134_2[10];
                const id = bugReportConfig.node.id;
                uri = id;
                const tmp138 = closure_134_1(bugReportConfig);
                if (id == null) {
                  uri = bugReportConfig.node.image.uri;
                }
                size = { id: uri, uri: bugReportConfig.node.image.uri, originalUri: bugReportConfig.node.image.uri, mimeType: bugReportConfig.node.image.mimeType, width: bugReportConfig.node.image.width, height: bugReportConfig.node.image.height, filename: bugReportConfig.node.image.filename, playableDuration: bugReportConfig.node.image.playableDuration, platform: closure_134_0(closure_134_2[10]).UploadPlatform.REACT_NATIVE };
                const self = this;
                const self2 = this;
                closure_6 = new tmp138(size);
                bugReportConfig = closure_4.push;
                new tmp138(size);
                bugReportConfig(closure_6);
              }
              if (null != closure_1) {
                bugReportConfig = closure_1;
                if ("" !== closure_1) {
                  bugReportConfig = closure_1.split("/");
                  const arr = bugReportConfig.pop();
                  closure_3 = arr;
                  if (arr == null) {
                    const _Date = Date;
                    bugReportConfig = Date.now();
                    const _HermesInternal = HermesInternal;
                    closure_3 = "audio_" + bugReportConfig + ".wav";
                  }
                  filename = closure_3;
                  const _Date2 = Date;
                  const _HermesInternal2 = HermesInternal;
                  const obj13 = { id: "audio_" + Date.now(), uri: "file://" + closure_1, originalUri: "file://" + closure_1, mimeType: "audio/wav", filename, platform: closure_134_0(closure_134_2[10]).UploadPlatform.REACT_NATIVE };
                  const _HermesInternal3 = HermesInternal;
                  const _HermesInternal4 = HermesInternal;
                  const self3 = this;
                  const self4 = this;
                  const tmp57 = closure_134_1(closure_134_2[10]);
                  let closure_8 = new tmp57(obj13);
                  bugReportConfig = closure_4.push;
                  new tmp57(obj13);
                  bugReportConfig(closure_8);
                }
              }
              bugReportConfig = length;
              if (undefined !== length) {
                if (length.length > 0) {
                  let closure_9 = formatTranscription(length);
                  const _Date3 = Date;
                  const _HermesInternal5 = HermesInternal;
                  filename2 = "transcription_" + Date.now() + ".json";
                  const str = "cache";
                  let str2 = "utf8";
                  const obj16 = closure_134_0(closure_134_2[11]);
                  bugReportConfig = obj16.writeFile("cache", filename2, closure_9, "utf8");
                  c9 = 4;
                  c10 = 1;
                  return { value: bugReportConfig, done: false };
                }
              }
            }
          } else if (4 === tmp4) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              return { value, done: true };
            } else {
              const originalUri = value;
              if (null != originalUri) {
                bugReportConfig = originalUri;
                if ("" !== originalUri) {
                  const _Date4 = Date;
                  const _HermesInternal6 = HermesInternal;
                  const obj18 = { id: "transcription_" + Date.now(), uri: originalUri, originalUri, mimeType: "application/json", filename: filename2, platform: closure_134_0(closure_134_2[10]).UploadPlatform.REACT_NATIVE };
                  const self5 = this;
                  const self6 = this;
                  const tmp120 = closure_134_1(closure_134_2[10]);
                  closure_12 = new tmp120(obj18);
                  new tmp120(obj18);
                  closure_4.push(closure_12);
                }
              }
            }
          } else if (5 === tmp4) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c10 = 3;
              return { value, done: true };
            } else {
              let closure_13 = value;
              if (null == closure_13) {
                const obj8 = closure_134_1(closure_134_2[3]);
                obj8.show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
                c8 = 0;
                c10 = 3;
                return { value: undefined, done: true };
              } else {
                const obj23 = { name: surveyConfig.uploadConfig.reportTitle, description: surveyConfig.uploadConfig.reportDescription, priority: bugReportConfig, feature: obj25, url: "" };
                bugReportConfig = surveyConfig.uploadConfig.priority;
                obj25 = closure_3;
                if (closure_3 == null) {
                  obj25 = { name: surveyConfig.uploadConfig.featureName, squad: surveyConfig.uploadConfig.squadName, asana_inbox_id: "r" };
                }
                const obj6 = closure_134_0(closure_134_2[9]);
                bugReportConfig = obj6.submitReport(obj23, { overridePlatformInformation: false }, closure_13);
                c9 = 6;
                c10 = 1;
                return { value: bugReportConfig, done: false };
              }
            }
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            if (value.ok) {
              const obj28 = { title: surveyConfig.uploadConfig.successTitle, body: surveyConfig.uploadConfig.successMessage };
              const obj2 = closure_134_1(closure_134_2[3]);
              obj2.show(obj28);
            } else {
              obj = closure_134_1(closure_134_2[3]);
              obj.show({ title: "Submission Failed", body: "Something went wrong and there's no way to fix it. Thanks anyway!" });
            }
            c8 = 0;
          }
          const obj14 = closure_134_0(closure_134_2[12]);
          bugReportConfig = obj14.getAttachments(closure_4);
          c9 = 5;
          c10 = 1;
          return { value: bugReportConfig, done: false };
        }
      }
      await "IconComponent";
      closure_6 = tmp;
      const currentSurveyId = state.getState().currentSurveyId;
      if (null != currentSurveyId) {
        if ("" !== currentSurveyId) {
          const obj31 = StudyConfig;
          surveyConfig = obj31.getSurveyConfig(currentSurveyId);
          if (null == surveyConfig) {
            const obj24 = AlertActionCreatorsDefault;
            obj24.show({ title: "Submission Failed", body: "Survey configuration not found" });
            c8 = 0;
            c10 = 3;
            return { value: undefined, done: true };
          } else {
            const obj22 = bug_reporter_BugReportUtils;
            bugReportConfig = obj22.fetchBugReportConfig();
            c9 = 2;
            c10 = 1;
            return { value: bugReportConfig, done: false };
          }
        }
      }
      bugReportConfig = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      bugReportConfig({ title: "Submission Failed", body: "No survey selected" });
    })();
  });
  return obj(...arguments);
};
obj = function _handleStopAndSend() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let tmp2;
    function stopRecordingProcess() {
      return closure_1_10(...arguments);
    }
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      const str2 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        let tmp3 = c2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp4 = closure_0;
            let str = "ScreenRecordingPreviewFinished";
            let closure_1 = nativeEventEmitter.addListener("ScreenRecordingPreviewFinished", (saved) => {
              closure_0 = saved;
              closure_1.remove();
              if (saved.saved) {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(closure_1_3(function*(arg0, value) {
                  function submitBugReportWithScreenRecording() {
                    return closure_1_11(...arguments);
                  }
                  if (c2 === 2) {
                    c2 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      obj = { value, done: true };
                      return obj;
                    } else {
                      return { value: "IconComponent", done: null };
                    }
                  } else {
                    try {
                      c2 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          if (tmp3 != null) {
                            tmp8();
                          }
                          c1 = 1;
                          c2 = 1;
                          const obj3 = { value: submitBugReportWithScreenRecording(tmp3.timestampedTranscription, tmp3.audioFilePath), done: false };
                          return obj3;
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        state = closure_2_4.getState();
                        state.setIsUploading(false);
                        const state1 = closure_2_4.getState();
                        state1.stopRecording();
                        c2 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp12) {
                      c2 = 3;
                      throw tmp12;
                    }
                  }
                }), 1000);
              } else {
                const tmp2 = closure_1;
                const tmp3 = closure_1_2;
                let str = "Recording was shared but not saved to Photos, so it cannot be sent.";
                const show = closure_1(closure_1_2[3]).show;
                const tmp4 = closure_1(closure_1_2[3]);
                if ("cancelled" === saved.action) {
                  str = "Recording was cancelled and not saved.";
                }
                obj = { title: "Recording Not Sent", body: str };
                show(obj);
              }
            });
            state = state.getState();
            const flag = true;
            const setIsUploadingResult = state.setIsUploading(true);
            c2 = 1;
            c1 = 1;
            let obj4 = { value: stopRecordingProcess(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _handleRecordingPhase() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    function checkAndRequestPermissions() {
      return closure_1_8(...arguments);
    }
    function startRecordingProcess() {
      return closure_1_9(...arguments);
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        let styles;
        let width;
        let height;
        let success;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = undefined;
            styles = undefined;
            width = undefined;
            height = undefined;
            success = undefined;
            c3 = 1;
            c4 = 1;
            const obj6 = { value: checkAndRequestPermissions(), done: false };
            return obj6;
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_1 = value;
              const tmp23 = closure_1;
              if (tmp23) {
                const obj4 = closure_130_0(closure_130_2[13]);
                styles = obj4.getWindowDimensions();
                width = styles.width;
                height = styles.height;
                size = { width, height, bitrate: 50000, frameRate: 15 };
                c3 = 2;
                c4 = 1;
                const obj8 = { value: obj5.setRecordingQuality(size), done: false };
                obj5 = closure_130_1(closure_130_2[4]);
                return obj8;
              }
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              c3 = 3;
              c4 = 1;
              const obj10 = { value: startRecordingProcess(closure_0), done: false };
              return obj10;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            success = value;
            success = success.success;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        c4 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
({ NativeModules, NativeEventEmitter } = react_native);
const useScreenRecordingStore = ScreenRecordingStore.useScreenRecordingStore;
const DCDPhotos = NativeModules.DCDPhotos;
const nativeEventEmitter = new NativeEventEmitter(NativeModules.DCDScreenRecordingManager);
let size = size_mod;
const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingUtils.tsx");

export const handleStopAndSend = function handleStopAndSend() {
  return obj(...arguments);
};
export const handleRecordingPhase = function handleRecordingPhase() {
  return obj(...arguments);
};
