// Module ID: 11769
// Function ID: 11770
// Name: AppLauncherApplicationViewScreen
// Dependencies: [19, 17, 9220, 1502, 5400, 21, 5091, 558, 576, 10587, 11770, 9219, 1629, 11771, 6854, 4811, 11772, 2]

// Module 11769 (AppLauncherApplicationViewScreen)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5400 */;
import AppLauncherContext from "AppLauncherContext" /* 10587 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9220 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let SCREEN_BACKGROUND_COLOR;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ AppLauncherRouteName: metroImportDefault, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
const jsx = Fragment.jsx;
let obj = { container: { backgroundColor: SCREEN_BACKGROUND_COLOR, flex: 1 } };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherApplicationViewScreenInner(onCommandExecuted) {
  let application;
  let bottomSheetExpandReasonRef;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let installOnDemand;
  let lockableScrollableContentOffsetY;
  let onActivityItemSelected;
  let onPressBack;
  let sectionName;
  let tmp = application;
  let obj = application(bottomSheetExpandReasonRef[8]);
  const cResult = obj.c(23);
  ({ context, application } = onCommandExecuted);
  ({ lockableScrollableContentOffsetY, initiallyExpanded, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, expandBottomSheet } = onCommandExecuted);
  onCommandExecuted = onCommandExecuted.onCommandExecuted;
  let obj2 = application(bottomSheetExpandReasonRef[9]);
  const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const tmp6 = expandBottomSheet(bottomSheetExpandReasonRef[10])();
  let closure_4 = tmp6;
  const tmp5 = expandBottomSheet;
  if (cResult[0] === application) {
    let tmp7;
    if (cResult[1] === initiallyExpanded) {
      tmp7 = cResult[2];
    }
    let closure_5 = tmp7;
    if (cResult[3] === application) {
      let tmp9;
      if (cResult[4] === chatInputRef) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === bottomSheetExpandReasonRef) {
        if (cResult[7] === expandBottomSheet) {
          if (cResult[8] === tmp7) {
            class N {
              constructor() {
                const tmp = closure_5 && closure_4;
                if (tmp) {
                  bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
                  if (expandBottomSheet != null) {
                    expandBottomSheet();
                  }
                }
              }
            }
            if (cResult[12] === application) {
              if (cResult[13] === context) {
                if (cResult[14] === entrypoint) {
                  if (cResult[15] === installOnDemand) {
                    if (cResult[16] === lockableScrollableContentOffsetY) {
                      if (cResult[17] === tmp9) {
                        if (cResult[18] === onActivityItemSelected) {
                          if (cResult[19] === onCommandExecuted) {
                            if (cResult[20] === onPressBack) {
                              let tmp13;
                              if (cResult[21] === sectionName) {
                                tmp13 = cResult[22];
                              }
                              return tmp13;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const tmp15 = jsx(tmp5(bottomSheetExpandReasonRef[13]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel: tmp9 });
            cResult[12] = application;
            cResult[13] = context;
            cResult[14] = entrypoint;
            cResult[15] = installOnDemand;
            cResult[16] = lockableScrollableContentOffsetY;
            cResult[17] = tmp9;
            cResult[18] = onActivityItemSelected;
            cResult[19] = onCommandExecuted;
            cResult[20] = onPressBack;
            cResult[21] = sectionName;
            cResult[22] = tmp15;
            tmp13 = tmp15;
          }
        }
      }
      class N {
        constructor() {
          const tmp = closure_5 && closure_4;
          if (tmp) {
            bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
            if (expandBottomSheet != null) {
              expandBottomSheet();
            }
          }
        }
      }
      const items = [tmp6, tmp7, expandBottomSheet, bottomSheetExpandReasonRef];
      cResult[6] = bottomSheetExpandReasonRef;
      cResult[7] = expandBottomSheet;
      cResult[8] = tmp7;
      cResult[9] = tmp6;
      cResult[10] = N;
      cResult[11] = items;
    }
    const fn = function _() {
      let obj2;
      const current = chatInputRef.current;
      const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
      obj2 = { initialRouteName: metroImportDefault.APPLICATION_VIEW, application };
      current.openCustomKeyboard(obj);
    };
    cResult[3] = application;
    cResult[4] = chatInputRef;
    cResult[5] = fn;
    tmp9 = fn;
  }
  let isActivityAppResult = initiallyExpanded;
  if (initiallyExpanded == null) {
    const tmpResult = tmp(bottomSheetExpandReasonRef[11]);
    isActivityAppResult = tmpResult.isActivityApp(application);
  }
  cResult[0] = application;
  cResult[1] = initiallyExpanded;
  cResult[2] = isActivityAppResult;
  tmp7 = isActivityAppResult;
}) : (function AppLauncherApplicationViewScreenInner(application) {
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let installOnDemand;
  let lockableScrollableContentOffsetY;
  let onActivityItemSelected;
  let onCommandExecuted;
  let onPressBack;
  let sectionName;
  application = application.application;
  ({ initiallyExpanded, expandBottomSheet } = application);
  let bottomSheetExpandReasonRef;
  initiallyExpanded = undefined;
  ({ context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted } = application);
  let tmp = application;
  let obj = application(bottomSheetExpandReasonRef[9]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  bottomSheetExpandReasonRef = requiredAppLauncherContext.bottomSheetExpandReasonRef;
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const tmp5 = expandBottomSheet(bottomSheetExpandReasonRef[10])();
  let closure_4 = tmp5;
  const tmp4 = expandBottomSheet;
  if (initiallyExpanded == null) {
    const tmpResult = tmp(bottomSheetExpandReasonRef[11]);
    initiallyExpanded = tmpResult.isActivityApp(application);
  }
  const items = [application, chatInputRef];
  const items1 = [tmp5, initiallyExpanded, expandBottomSheet, bottomSheetExpandReasonRef];
  const onAauth2Cancel = chatInputRef.useCallback(() => {
    let obj2;
    const current = chatInputRef.current;
    const obj = { type: KeyboardTypes.KeyboardTypes.APP_LAUNCHER, context: obj2 };
    obj2 = { initialRouteName: metroImportDefault.APPLICATION_VIEW, application };
    current.openCustomKeyboard(obj);
  }, items);
  const effect = chatInputRef.useEffect(() => {
    const tmp = initiallyExpanded && closure_4;
    if (tmp) {
      bottomSheetExpandReasonRef.current = AppLauncherContext.AppLauncherBottomSheetExpandReason.APP_VIEW;
      if (expandBottomSheet != null) {
        expandBottomSheet();
      }
    }
  }, items1);
  return jsx(tmp4(bottomSheetExpandReasonRef[13]), { application, context, lockableScrollableContentOffsetY, installOnDemand, sectionName, onPressBack, onActivityItemSelected, entrypoint, onCommandExecuted, onAauth2Cancel });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherApplicationViewScreen(navigation) {
  let FAKE_BUILT_IN_APP;
  let application;
  let applicationId;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let installOnDemand;
  let keyboardCloseReasonRef;
  let onActivityItemSelected;
  let onCommandExecuted;
  let onPressBack;
  let sectionName;
  let tmp = navigation;
  let tmp2 = context;
  const obj = navigation(context[8]);
  const cResult = obj.c(25);
  navigation = navigation.navigation;
  const params = navigation.route.params;
  ({ application, onPressBack } = params);
  context = params.context;
  ({ initiallyExpanded, installOnDemand } = params);
  ({ sectionName, expandBottomSheet, onCommandExecuted, applicationId } = params);
  const obj2 = navigation(context[9]);
  const requiredAppLauncherContext = obj2.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  ({ entrypoint, onActivityItemSelected, keyboardCloseReasonRef } = requiredAppLauncherContext);
  const tmp5 = closure_10();
  let id;
  if (application != null) {
    id = application.id;
  }
  if (id == null) {
    id = applicationId;
  }
  let tmp9 = null;
  const useGetOrFetchApplication = tmp(tmp2[14]).useGetOrFetchApplication;
  const tmp8 = BuiltInSectionId;
  const tmpResult = tmp(tmp2[14]);
  if (id !== BuiltInSectionId.BUILT_IN) {
    tmp9 = id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(tmp9);
  if (id === tmp8.BUILT_IN) {
    FAKE_BUILT_IN_APP = tmp(tmp2[11]).FAKE_BUILT_IN_APP;
  } else {
    FAKE_BUILT_IN_APP = getOrFetchApplication;
    if (getOrFetchApplication == null) {
      FAKE_BUILT_IN_APP = application;
    }
  }
  const tmpResult2 = tmp(tmp2[15]);
  const sharedValue = tmpResult2.useSharedValue(0);
  if (cResult[0] === chatInputRef) {
    if (cResult[1] === keyboardCloseReasonRef) {
      if (cResult[2] === navigation) {
        let tmp12;
        if (cResult[3] === onPressBack) {
          tmp12 = cResult[4];
        }
        if (cResult[5] === id) {
          if (cResult[6] === context) {
            let tmp13;
            let tmp14;
            let tmp21;
            if (cResult[7] === installOnDemand) {
              tmp13 = cResult[8];
              tmp14 = cResult[9];
            }
            const effect = installOnDemand.useEffect(tmp13, tmp14);
            if (cResult[10] === FAKE_BUILT_IN_APP) {
              if (cResult[11] === context) {
                if (cResult[12] === entrypoint) {
                  if (cResult[13] === expandBottomSheet) {
                    if (cResult[14] === tmp12) {
                      if (cResult[15] === initiallyExpanded) {
                        if (cResult[16] === installOnDemand) {
                          if (cResult[17] === sharedValue) {
                            if (cResult[18] === onActivityItemSelected) {
                              if (cResult[19] === onCommandExecuted) {
                                let tmp17;
                                if (cResult[20] === sectionName) {
                                  tmp17 = cResult[21];
                                }
                                if (cResult[22] === tmp5.container) {
                                  let tmp24;
                                  if (cResult[23] === tmp17) {
                                    tmp24 = cResult[24];
                                  }
                                  return tmp24;
                                }
                                const tmp27 = <keyboardCloseReasonRef style={tmp5.container}>{tmp17}</keyboardCloseReasonRef>;
                                cResult[22] = tmp5.container;
                                cResult[23] = tmp17;
                                cResult[24] = tmp27;
                                tmp24 = tmp27;
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
            if (null != FAKE_BUILT_IN_APP) {
              tmp21 = <closure_11 context={context} application={FAKE_BUILT_IN_APP} lockableScrollableContentOffsetY={sharedValue} initiallyExpanded={initiallyExpanded} installOnDemand={installOnDemand} sectionName={sectionName} onPressBack={tmp12} onActivityItemSelected={onActivityItemSelected} entrypoint={entrypoint} expandBottomSheet={expandBottomSheet} onCommandExecuted={onCommandExecuted} />;
            } else {
              tmp21 = <keyboardCloseReasonRef style={{ paddingTop: tmp(tmp2[16]).EXPANDED_HEADER_HEIGHT }}>{null}</keyboardCloseReasonRef>;
              const obj6 = { paddingTop: tmp(tmp2[16]).EXPANDED_HEADER_HEIGHT };
            }
            cResult[10] = FAKE_BUILT_IN_APP;
            cResult[11] = context;
            cResult[12] = entrypoint;
            cResult[13] = expandBottomSheet;
            cResult[14] = tmp12;
            cResult[15] = initiallyExpanded;
            cResult[16] = installOnDemand;
            cResult[17] = sharedValue;
            cResult[18] = onActivityItemSelected;
            cResult[19] = onCommandExecuted;
            cResult[20] = sectionName;
            cResult[21] = tmp21;
            tmp17 = tmp21;
          }
        }
        const fn = function w() {
          let tmp2 = null != id;
          const tmp = id;
          if (tmp2) {
            tmp2 = "channel" === context.type;
          }
          if (tmp2) {
            tmp2 = installOnDemand;
          }
          if (tmp2) {
            const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(tmp, context.channel.id);
          }
        };
        const items = [id, context, installOnDemand];
        cResult[5] = id;
        cResult[6] = context;
        cResult[7] = installOnDemand;
        cResult[8] = fn;
        cResult[9] = items;
        tmp14 = items;
        tmp13 = fn;
      }
    }
  }
  function handlePressBack() {
    if (onPressBack != null) {
      tmp();
    }
    const arr = navigation;
    if (navigation.canGoBack()) {
      arr.pop();
    } else {
      keyboardCloseReasonRef.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
      const current = chatInputRef.current;
      if (current != null) {
        current.closeCustomKeyboard();
      }
    }
  }
  cResult[0] = chatInputRef;
  cResult[1] = keyboardCloseReasonRef;
  cResult[2] = navigation;
  cResult[3] = onPressBack;
  cResult[4] = handlePressBack;
  tmp12 = handlePressBack;
}) : (function AppLauncherApplicationViewScreen(route) {
  let FAKE_BUILT_IN_APP;
  let application;
  let applicationId;
  let c4;
  let c5;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initiallyExpanded;
  let obj5;
  let onActivityItemSelected;
  let onCommandExecuted;
  let ref;
  let require;
  let sectionName;
  let tmp12Result;
  const params = route.route.params;
  ({ application, onPressBack: require, context } = params);
  const installOnDemand = params.installOnDemand;
  navigation = route.navigation;
  c4 = undefined;
  c5 = undefined;
  let tmp = require;
  let tmp2 = installOnDemand;
  ({ applicationId, initiallyExpanded, sectionName, expandBottomSheet, onCommandExecuted } = params);
  const obj = require("AppLauncherContext");
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  ({ chatInputRef: c4, keyboardCloseReasonRef: c5 } = requiredAppLauncherContext);
  ({ entrypoint, onActivityItemSelected } = requiredAppLauncherContext);
  let id;
  const tmp4 = closure_10();
  if (application != null) {
    id = application.id;
  }
  if (id == null) {
    id = applicationId;
  }
  let tmp8 = null;
  const useGetOrFetchApplication = tmp(tmp2[14]).useGetOrFetchApplication;
  const tmp7 = BuiltInSectionId;
  const tmpResult = tmp(tmp2[14]);
  if (id !== BuiltInSectionId.BUILT_IN) {
    tmp8 = id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(tmp8);
  if (id === tmp7.BUILT_IN) {
    FAKE_BUILT_IN_APP = tmp(tmp2[11]).FAKE_BUILT_IN_APP;
  } else {
    FAKE_BUILT_IN_APP = getOrFetchApplication;
    if (getOrFetchApplication == null) {
      FAKE_BUILT_IN_APP = application;
    }
  }
  const items = [id, context, installOnDemand];
  const tmpResult2 = tmp(tmp2[15]);
  const sharedValue = tmpResult2.useSharedValue(0);
  const effect = navigation.useEffect(() => {
    let tmp2 = null != id;
    const tmp = id;
    if (tmp2) {
      tmp2 = "channel" === context.type;
    }
    if (tmp2) {
      tmp2 = installOnDemand;
    }
    if (tmp2) {
      const result = ApplicationCommandIndexStore.queryInstallOnDemandApp(tmp, context.channel.id);
    }
  }, items);
  if (null != FAKE_BUILT_IN_APP) {
    const obj3 = {
      context,
      application: FAKE_BUILT_IN_APP,
      lockableScrollableContentOffsetY: sharedValue,
      initiallyExpanded,
      installOnDemand,
      sectionName,
      onPressBack: function handlePressBack() {
          if (_require != null) {
            tmp();
          }
          const arr = navigation;
          if (navigation.canGoBack()) {
            arr.pop();
          } else {
            c5.current = AppLauncherContext.AppLauncherKeyboardCloseReason.BACK;
            const current = ref.current;
            if (current != null) {
              current.closeCustomKeyboard();
            }
          }
        },
      onActivityItemSelected,
      entrypoint,
      expandBottomSheet,
      onCommandExecuted
    };
    tmp12Result = tmp12(closure_11, obj3);
  } else {
    const obj4 = { style: obj5, children: null };
    obj5 = { paddingTop: tmp(tmp2[16]).EXPANDED_HEADER_HEIGHT };
    tmp12Result = tmp12(tmp13, obj4);
  }
  return <c5 style={tmp4.container}>{tmp12Result}</c5>;
});
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/AppLauncherApplicationViewScreen.tsx");

export default tmp4;
