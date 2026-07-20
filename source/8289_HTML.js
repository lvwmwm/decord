// Module ID: 8289
// Function ID: 65461
// Name: HTML
// Dependencies: []
// Exports: createWebFileVideoControls

// Module 8289 (HTML)
function HTML(arg0) {
  return "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>" + "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = " + JSON.stringify(arg0) + ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n" + "</script>\n  </head>\n  <body>\n  </body>\n</html>\n";
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = importAllResult.memo((visible) => {
  let controls;
  let source;
  visible = visible.visible;
  const arg1 = visible;
  ({ source, controls } = visible);
  const importDefault = controls;
  let obj = { body: "r", st: "onRequireModeratorMFAClick", bottom: "Array", ref: "isSpamMessageRequest" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(visible, obj);
  let closure_6;
  let HTML;
  const tmp3 = callback(importAllResult.useState(arg1(dependencyMap[3]).PlayerState.UNREADY), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  let callback = tmp3[1];
  const tmp5 = importDefault(dependencyMap[4])(first);
  const tmp6 = importDefault(dependencyMap[4])(visible);
  const jsx = tmp6;
  let ref;
  if (null != controls) {
    let props = controls.props;
    if (null != props) {
      ref = props.ref;
    }
  }
  closure_6 = ref;
  const effect = importAllResult.useEffect(() => {
    const MediaViewerAnalytics = visible(first[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ "Bool(false)": null, "Bool(false)": null });
  }, []);
  props = undefined;
  if (null != controls) {
    props = controls.props;
  }
  const items = [props];
  callback = importAllResult.useCallback((arg0) => {
    let type;
    let value;
    const parsed = JSON.parse(arg0);
    while (true) {
      ({ type, value } = parsed);
      let str = "loaded";
      if ("loaded" === type) {
        let tmp73 = callback;
        let tmp74 = visible;
        let tmp75 = first;
        let num13 = 3;
        let tmp76 = callback(visible(first[3]).PlayerState.READY);
      } else {
        let str3 = "canplay";
        if ("canplay" === type) {
          let tmp62 = controls;
          let tmp63 = null;
          let tmp64 = null == controls;
          if (!tmp64) {
            let tmp65 = controls;
            let props8 = controls.props;
            tmp64 = null == props8;
            let obj8 = props8;
          }
          if (!tmp64) {
            let tmp66 = visible;
            let tmp67 = first;
            let num11 = 3;
            let onPlayerStateChangeResult = obj8.onPlayerStateChange(visible(first[3]).PlayerState.VIDEO_CUED);
          }
          let tmp69 = callback;
          let tmp70 = visible;
          let tmp71 = first;
          let num12 = 3;
          let tmp72 = callback(visible(first[3]).PlayerState.VIDEO_CUED);
        } else {
          let str4 = "error";
          if ("error" === type) {
            let tmp57 = callback;
            let tmp58 = visible;
            let tmp59 = first;
            let num9 = 3;
            let tmp60 = callback(visible(first[3]).PlayerState.ERRORED);
            let num10 = 5;
            let MediaViewerAnalytics = visible(first[5]).MediaViewerAnalytics;
            let result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ "Bool(false)": null, "Bool(false)": "text-xs/bold", "Bool(false)": "text-default" });
          } else {
            let str5 = "ended";
            if ("ended" === type) {
              let tmp46 = controls;
              let tmp47 = null;
              let tmp48 = null == controls;
              if (!tmp48) {
                let tmp49 = controls;
                let props7 = controls.props;
                tmp48 = null == props7;
                let obj7 = props7;
              }
              if (!tmp48) {
                let tmp50 = visible;
                let tmp51 = first;
                let num7 = 3;
                let onPlayerStateChangeResult1 = obj7.onPlayerStateChange(visible(first[3]).PlayerState.ENDED);
              }
              let tmp53 = callback;
              let tmp54 = visible;
              let tmp55 = first;
              let num8 = 3;
              let tmp56 = callback(visible(first[3]).PlayerState.ENDED);
            } else {
              let str6 = "play";
              if ("play" === type) {
                let tmp35 = controls;
                let tmp36 = null;
                let tmp37 = null == controls;
                if (!tmp37) {
                  let tmp38 = controls;
                  let props6 = controls.props;
                  tmp37 = null == props6;
                  let obj6 = props6;
                }
                if (!tmp37) {
                  let tmp39 = visible;
                  let tmp40 = first;
                  let num5 = 3;
                  let onPlayerStateChangeResult2 = obj6.onPlayerStateChange(visible(first[3]).PlayerState.PLAYING);
                }
                let tmp42 = callback;
                let tmp43 = visible;
                let tmp44 = first;
                let num6 = 3;
                let tmp45 = callback(visible(first[3]).PlayerState.PLAYING);
              } else {
                let str7 = "pause";
                if ("pause" === type) {
                  let tmp24 = controls;
                  let tmp25 = null;
                  let tmp26 = null == controls;
                  if (!tmp26) {
                    let tmp27 = controls;
                    let props5 = controls.props;
                    tmp26 = null == props5;
                    let obj5 = props5;
                  }
                  if (!tmp26) {
                    let tmp28 = visible;
                    let tmp29 = first;
                    let num3 = 3;
                    let onPlayerStateChangeResult3 = obj5.onPlayerStateChange(visible(first[3]).PlayerState.PAUSED);
                  }
                  let tmp31 = callback;
                  let tmp32 = visible;
                  let tmp33 = first;
                  let num4 = 3;
                  let tmp34 = callback(visible(first[3]).PlayerState.PAUSED);
                } else {
                  let str8 = "stalled";
                  if ("stalled" === type) {
                    let tmp13 = controls;
                    let tmp14 = null;
                    let tmp15 = null == controls;
                    if (!tmp15) {
                      let tmp16 = controls;
                      let props4 = controls.props;
                      tmp15 = null == props4;
                      let obj4 = props4;
                    }
                    if (!tmp15) {
                      let tmp17 = visible;
                      let tmp18 = first;
                      let num = 3;
                      let onPlayerStateChangeResult4 = obj4.onPlayerStateChange(visible(first[3]).PlayerState.BUFFERING);
                    }
                    let tmp20 = callback;
                    let tmp21 = visible;
                    let tmp22 = first;
                    let num2 = 3;
                    let tmp23 = callback(visible(first[3]).PlayerState.BUFFERING);
                  } else {
                    let str9 = "durationchange";
                    if ("durationchange" === type) {
                      let tmp9 = null;
                      if (null != value) {
                        let tmp80 = controls;
                        let tmp11 = null == controls;
                        if (!tmp11) {
                          let tmp10 = controls;
                          let props3 = controls.props;
                          tmp11 = null == props3;
                          let obj3 = props3;
                        }
                        if (!tmp11) {
                          tmp11 = null == obj3.onDuration;
                        }
                        if (!tmp11) {
                          let onDurationResult = obj3.onDuration(value);
                        }
                      }
                    } else {
                      let str10 = "progress";
                      if ("progress" === type) {
                        let tmp5 = null;
                        if (null != value) {
                          let tmp79 = controls;
                          let tmp7 = null == controls;
                          if (!tmp7) {
                            let tmp6 = controls;
                            let props2 = controls.props;
                            tmp7 = null == props2;
                            let obj2 = props2;
                          }
                          if (!tmp7) {
                            tmp7 = null == obj2.onDownloadProgress;
                          }
                          if (!tmp7) {
                            let onDownloadProgressResult = obj2.onDownloadProgress(value);
                          }
                        }
                      } else {
                        let str2 = "timeupdate";
                        if ("timeupdate" === type) {
                          let tmp77 = null;
                          if (null != value) {
                            let tmp78 = controls;
                            let tmp3 = null == controls;
                            if (!tmp3) {
                              let tmp2 = controls;
                              let props = controls.props;
                              tmp3 = null == props;
                              let obj = props;
                            }
                            if (!tmp3) {
                              tmp3 = null == obj.onCurrentSecond;
                            }
                            if (!tmp3) {
                              let onCurrentSecondResult = obj.onCurrentSecond(value);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }, items);
  const mediaPlayerMutedStore = arg1(dependencyMap[6]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  HTML = mediaPlayerMutedStore;
  const items1 = [ref, visible, tmp6, tmp5, first, mediaPlayerMutedStore];
  const effect1 = importAllResult.useEffect(() => {
    let current;
    if (null != ref) {
      current = ref.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = first !== visible(first[3]).PlayerState.UNREADY;
    }
    if (tmp3) {
      current = ref.current;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
      let tmp11 = visible;
      if (visible) {
        tmp11 = tmp5 === visible(first[3]).PlayerState.UNREADY;
      }
      if (tmp11) {
        tmp11 = first === visible(first[3]).PlayerState.READY;
      }
      if (tmp11) {
        const current2 = ref.current;
        current2.injectJavaScript("window.player.play();  true;");
      }
      let tmp20 = visible;
      if (visible) {
        tmp20 = !tmp6;
      }
      if (tmp20) {
        const current3 = ref.current;
        current3.injectJavaScript("window.player.play();  true;");
      }
      if (tmp25) {
        const current4 = ref.current;
        current4.injectJavaScript("window.player.pause(); true;");
      }
      const tmp25 = !visible && tmp6;
    }
  }, items1);
  const obj2 = arg1(dependencyMap[6]);
  obj = { ref, style: visible.style };
  obj = { html: HTML(source.uri), baseUrl: closure_6 };
  obj.source = obj;
  obj.baseURL = closure_6;
  obj.playerState = first;
  obj.onDataReceived = callback;
  obj.javaScriptEnabled = true;
  obj.javaScriptCanOpenWindowsAutomatically = true;
  const tmp14 = HTML(source.uri);
  const merged1 = Object.assign(merged);
  return jsx(importDefault(dependencyMap[3]), obj, source.uri);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebVideoFile.tsx");

export default memoResult;
export const createWebFileVideoControls = function createWebFileVideoControls() {
  function updateProgress() {
    if (closure_5 > 0) {
      if (null != callback2) {
        callback2(closure_6 / closure_5);
      }
    }
  }
  const ref = React.createRef();
  let closure_3 = ref;
  const React = 0;
  let closure_5 = 0;
  let closure_6 = 0;
  let obj = {
    seek(arg0) {
      const current = ref.current;
      if (null != current) {
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player.currentTime = " + JSON.stringify(arg0) + "; true;");
      }
    },
    pause(arg0) {
      const current = ref.current;
      if (null != current) {
        let str = "play";
        if (arg0) {
          str = "pause";
        }
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player." + str + "(); true;");
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      const layoutEffect = React.useLayoutEffect(() => {
        if (null != arg0) {
          arg0(closure_4, closure_5);
        }
      }, []);
    },
    props: obj
  };
  obj = {
    ref,
    onPlayerStateChange(arg0) {
      if (null != closure_1) {
        let tmp4 = arg0 === callback(closure_2[3]).PlayerState.PAUSED;
        if (!tmp4) {
          tmp4 = arg0 === callback(closure_2[3]).PlayerState.ENDED;
        }
        closure_1(tmp4);
        const tmp = closure_1;
      }
    },
    onCurrentSecond(arg0) {
      let closure_4 = arg0;
      if (null != callback) {
        callback(closure_4, closure_5);
      }
    },
    onDuration(arg0) {
      let closure_5 = arg0;
      if (null != callback) {
        callback(closure_4, closure_5);
      }
      updateProgress();
    },
    onDownloadProgress(arg0) {
      let closure_6 = arg0;
      updateProgress();
    }
  };
  return obj;
};
