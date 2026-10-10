// Module ID: 11754
// Function ID: 11755
// Name: AppLauncherNavigator
// Dependencies: [109, 19, 1502, 1085, 21, 9344, 5092, 587, 558, 576, 6851, 6878, 1504, 5375, 4987, 1629, 6687, 5107, 11755, 11813, 11839, 11901, 10621, 2]

// Module 11754 (AppLauncherNavigator)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1502 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5107 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import AppLauncherHomeScreenDefault from "AppLauncherHomeScreen" /* 11755 */;
import AppLauncherApplicationViewScreenDefault from "AppLauncherApplicationViewScreen" /* 11813 */;
import AppLauncherCommandViewScreenDefault from "AppLauncherCommandViewScreen" /* 11839 */;
import AppLauncherViewAllScreenDefault from "AppLauncherViewAllScreen" /* 11901 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9344 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let closure_3 = ["initialRouteName"];
let closure_4 = ["initialRouteName"];
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = NativeStackView.createNativeStackNavigator();
let obj = { navigator: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND, paddingTop: 16, overflow: "visible", flex: 1 };
let closure_12 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherNavigator(arg0) {
  let bottomSheetExpandReasonRef;
  let bottomSheetIndex;
  let bottomSheetPosition;
  let chatInputRef;
  let contentStyle;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let items1;
  let keyboardCloseReasonRef;
  let obj12;
  let obj15;
  let obj18;
  let obj22;
  let obj8;
  let onActivityItemSelected;
  let overrideParams;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp17;
  let width;
  let obj = entrypoint(576);
  const cResult = obj.c(64);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, context, chatInputRef, contentStyle, entrypoint } = arg0);
  ({ expandBottomSheet, keyboardCloseReasonRef, onActivityItemSelected, width, overrideParams } = arg0);
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
  let obj2 = entrypoint(1504);
  const navigationContainerRef = obj2.useNavigationContainerRef();
  const obj3 = entrypoint(5375);
  const trackNavigationBackPress = obj3.useTrackNavigationBackPress(navigationContainerRef);
  const tmp8 = closure_12();
  const useKeyboardContextForType = entrypoint(4987).useKeyboardContextForType;
  entrypoint(4987);
  if (overrideParams == null) {
    overrideParams = useKeyboardContextForType(entrypoint(1629).KeyboardTypes.APP_LAUNCHER);
  }
  const tmpResult = entrypoint(6687);
  const accessibilityNativeStackOptions = tmpResult.useAccessibilityNativeStackOptions();
  if (cResult[0] !== overrideParams) {
    const initialRouteName = overrideParams.initialRouteName;
    const tmp15 = _objectWithoutProperties(overrideParams, closure_3);
    cResult[0] = overrideParams;
    cResult[1] = initialRouteName;
    cResult[2] = tmp15;
    tmp12 = tmp15;
    tmp11 = initialRouteName;
  } else {
    tmp11 = cResult[1];
    tmp12 = cResult[2];
  }
  if (cResult[3] !== entrypoint) {
    const fn = function k() {
      const obj = AppAnalyticsUtils;
      const obj2 = { location: "app_launcher", source: entrypoint };
      obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj2);
    };
    const items = [entrypoint];
    cResult[3] = entrypoint;
    cResult[4] = fn;
    cResult[5] = items;
    tmp17 = items;
    tmp16 = fn;
  } else {
    tmp16 = cResult[4];
    tmp17 = cResult[5];
  }
  const layoutEffect = react.useLayoutEffect(tmp16, tmp17);
  if (cResult[6] === contentStyle) {
    let tmp19;
    if (cResult[7] === tmp8.navigator) {
      tmp19 = cResult[8];
    }
    if (cResult[9] === accessibilityNativeStackOptions) {
      let tmp20;
      if (cResult[10] === tmp19) {
        tmp20 = cResult[11];
      }
      let initialSearchQuery;
      if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
        initialSearchQuery = overrideParams.initialSearchQuery;
      }
      if (cResult[12] === context) {
        let tmp26;
        if (cResult[13] === initialSearchQuery) {
          tmp26 = cResult[14];
        }
        if (cResult[15] === tmp11) {
          let tmp30;
          if (cResult[16] === tmp12) {
            tmp30 = cResult[17];
          }
          if (cResult[18] === context) {
            if (cResult[19] === expandBottomSheet) {
              let tmp31;
              if (cResult[20] === tmp30) {
                tmp31 = cResult[21];
              }
              if (cResult[22] === overrideParams.initialRouteName) {
                let tmp39;
                if (cResult[23] === tmp12) {
                  tmp39 = cResult[24];
                }
                if (cResult[25] === expandBottomSheet) {
                  if (cResult[26] === tmp39) {
                    let tmp40;
                    if (cResult[27] === tmp38) {
                      tmp40 = cResult[28];
                    }
                    if (cResult[29] === overrideParams.initialRouteName) {
                      let tmp47;
                      if (cResult[30] === tmp12) {
                        tmp47 = cResult[31];
                      }
                      if (cResult[32] === context) {
                        let tmp48;
                        if (cResult[33] === tmp47) {
                          tmp48 = cResult[34];
                        }
                        if (cResult[35] === tmp11) {
                          if (cResult[36] === tmp40) {
                            if (cResult[37] === tmp48) {
                              if (cResult[38] === tmp20) {
                                if (cResult[39] === tmp26) {
                                  let tmp55;
                                  if (cResult[40] === tmp31) {
                                    tmp55 = cResult[41];
                                  }
                                  if (cResult[42] === analyticsLocations) {
                                    let tmp59;
                                    if (cResult[43] === tmp55) {
                                      tmp59 = cResult[44];
                                    }
                                    if (cResult[45] === navigationContainerRef) {
                                      let tmp62;
                                      if (cResult[46] === tmp59) {
                                        tmp62 = cResult[47];
                                      }
                                      let tmp66 = null;
                                      const tmp65 = "customId" in overrideParams || "referrerId" in overrideParams;
                                      if (tmp65) {
                                        if (cResult[48] === overrideParams.customId) {
                                          let tmp67;
                                          if (cResult[49] === overrideParams.referrerId) {
                                            tmp67 = cResult[50];
                                          }
                                          tmp66 = tmp67;
                                        }
                                        const obj4 = { customId: null, referrerId: null };
                                        ({ customId: obj21.customId, referrerId: obj21.referrerId } = overrideParams);
                                        cResult[48] = overrideParams.customId;
                                        cResult[49] = overrideParams.referrerId;
                                        cResult[50] = obj4;
                                        tmp67 = obj4;
                                      }
                                      if (cResult[51] === bottomSheetExpandReasonRef) {
                                        if (cResult[52] === bottomSheetIndex) {
                                          if (cResult[53] === bottomSheetPosition) {
                                            if (cResult[54] === chatInputRef) {
                                              if (cResult[55] === entrypoint) {
                                                if (cResult[56] === tmp66) {
                                                  if (cResult[57] === keyboardCloseReasonRef) {
                                                    if (cResult[58] === onActivityItemSelected) {
                                                      let tmp68;
                                                      if (cResult[59] === width) {
                                                        tmp68 = cResult[60];
                                                      }
                                                      if (cResult[61] === tmp62) {
                                                        let tmp69;
                                                        if (cResult[62] === tmp68) {
                                                          tmp69 = cResult[63];
                                                        }
                                                        return tmp69;
                                                      }
                                                      const obj5 = { value: tmp68, children: tmp62 };
                                                      const tmp71 = closure_9(entrypoint(10621).AppLauncherContext.Provider, obj5);
                                                      cResult[61] = tmp62;
                                                      cResult[62] = tmp68;
                                                      cResult[63] = tmp71;
                                                      tmp69 = tmp71;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj6 = { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp66, keyboardCloseReasonRef, onActivityItemSelected, width };
                                      cResult[51] = bottomSheetExpandReasonRef;
                                      cResult[52] = bottomSheetIndex;
                                      cResult[53] = bottomSheetPosition;
                                      cResult[54] = chatInputRef;
                                      cResult[55] = entrypoint;
                                      cResult[56] = tmp66;
                                      cResult[57] = keyboardCloseReasonRef;
                                      cResult[58] = onActivityItemSelected;
                                      cResult[59] = width;
                                      cResult[60] = obj6;
                                      tmp68 = obj6;
                                    }
                                    const obj7 = { children: closure_9(entrypoint(1504).NavigationContainer, obj8) };
                                    const NavigationIndependentTree = tmp(1504).NavigationIndependentTree;
                                    obj8 = { ref: navigationContainerRef, children: tmp59 };
                                    const tmp64 = closure_9(NavigationIndependentTree, obj7);
                                    cResult[45] = navigationContainerRef;
                                    cResult[46] = tmp59;
                                    cResult[47] = tmp64;
                                    tmp62 = tmp64;
                                  }
                                  const obj9 = { value: analyticsLocations, children: tmp55 };
                                  const tmp61 = closure_9(entrypoint(6851).AnalyticsLocationProvider, obj9);
                                  cResult[42] = analyticsLocations;
                                  cResult[43] = tmp55;
                                  cResult[44] = tmp61;
                                  tmp59 = tmp61;
                                }
                              }
                            }
                          }
                        }
                        const obj10 = { initialRouteName: tmp11, screenOptions: tmp20, children: items1 };
                        items1 = [tmp26, tmp31, tmp40, tmp48];
                        const tmp58 = closure_10(closure_11.Navigator, obj10);
                        cResult[35] = tmp11;
                        cResult[36] = tmp40;
                        cResult[37] = tmp48;
                        cResult[38] = tmp20;
                        cResult[39] = tmp26;
                        cResult[40] = tmp31;
                        cResult[41] = tmp58;
                        tmp55 = tmp58;
                      }
                      const Screen4 = closure_11.Screen;
                      const obj11 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: AppLauncherViewAllScreenDefault, initialParams: obj12 };
                      obj12 = { context };
                      const merged = Object.assign(tmp47);
                      const tmp54 = closure_9(Screen4, obj11);
                      cResult[32] = context;
                      cResult[33] = tmp47;
                      cResult[34] = tmp54;
                      tmp48 = tmp54;
                    }
                    let obj13 = tmp12;
                    if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
                      obj13 = {};
                    }
                    cResult[29] = overrideParams.initialRouteName;
                    cResult[30] = tmp12;
                    cResult[31] = obj13;
                    tmp47 = obj13;
                  }
                }
                const Screen3 = closure_11.Screen;
                const obj14 = { name: AppLauncherRouteName.COMMAND_VIEW, component: AppLauncherCommandViewScreenDefault, initialParams: obj15 };
                obj15 = { context: tmp38, expandBottomSheet };
                const merged1 = Object.assign(tmp39);
                const tmp46 = closure_9(Screen3, obj14);
                cResult[25] = expandBottomSheet;
                cResult[26] = tmp39;
                cResult[27] = tmp38;
                cResult[28] = tmp46;
                tmp40 = tmp46;
              }
              let obj16 = tmp12;
              if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
                obj16 = {};
              }
              cResult[22] = overrideParams.initialRouteName;
              cResult[23] = tmp12;
              cResult[24] = obj16;
              tmp39 = obj16;
            }
          }
          const Screen2 = closure_11.Screen;
          const obj17 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: AppLauncherApplicationViewScreenDefault, initialParams: obj18 };
          obj18 = { context, expandBottomSheet };
          const merged2 = Object.assign(tmp30);
          const tmp37 = closure_9(Screen2, obj17);
          cResult[18] = context;
          cResult[19] = expandBottomSheet;
          cResult[20] = tmp30;
          cResult[21] = tmp37;
          tmp31 = tmp37;
        }
        let obj19 = tmp12;
        if (tmp11 !== AppLauncherRouteName.APPLICATION_VIEW) {
          obj19 = {};
        }
        cResult[15] = tmp11;
        cResult[16] = tmp12;
        cResult[17] = obj19;
        tmp30 = obj19;
      }
      const Screen = closure_11.Screen;
      const obj20 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: obj22 };
      obj22 = { context, initialSearchQuery };
      const tmp29 = closure_9(Screen, obj20);
      cResult[12] = context;
      cResult[13] = initialSearchQuery;
      cResult[14] = tmp29;
      tmp26 = tmp29;
    }
    const obj23 = { contentStyle: tmp19, headerShown: false, fullScreenGestureEnabled: true };
    const merged3 = Object.assign(accessibilityNativeStackOptions);
    cResult[9] = accessibilityNativeStackOptions;
    cResult[10] = tmp19;
    cResult[11] = obj23;
    tmp20 = obj23;
  }
  const items2 = [tmp8.navigator, contentStyle];
  cResult[6] = contentStyle;
  cResult[7] = tmp8.navigator;
  cResult[8] = items2;
  tmp19 = items2;
}) : (function AppLauncherNavigator(arg0) {
  let AnalyticsLocationProvider;
  let Navigator;
  let bottomSheetExpandReasonRef;
  let bottomSheetIndex;
  let bottomSheetPosition;
  let chatInputRef;
  let contentStyle;
  let context;
  let entrypoint;
  let expandBottomSheet;
  let initialSearchQuery;
  let items1;
  let items2;
  let keyboardCloseReasonRef;
  let obj10;
  let obj13;
  let obj16;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  let onActivityItemSelected;
  let overrideParams;
  let tmp12;
  let width;
  ({ context, entrypoint } = arg0);
  ({ expandBottomSheet, overrideParams } = arg0);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, contentStyle, keyboardCloseReasonRef, onActivityItemSelected, width } = arg0);
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
  let obj = entrypoint(1504);
  const navigationContainerRef = obj.useNavigationContainerRef();
  let obj2 = entrypoint(5375);
  const trackNavigationBackPress = obj2.useTrackNavigationBackPress(navigationContainerRef);
  const tmp7 = closure_12();
  const useKeyboardContextForType = entrypoint(4987).useKeyboardContextForType;
  entrypoint(4987);
  if (overrideParams == null) {
    overrideParams = useKeyboardContextForType(entrypoint(1629).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp4Result = entrypoint(6687);
  const accessibilityNativeStackOptions = tmp4Result.useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj17 = _objectWithoutProperties(overrideParams, closure_4);
  const items = [entrypoint];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = AppAnalyticsUtils;
    const obj2 = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj2);
  }, items);
  const NavigationIndependentTree = tmp4(1504).NavigationIndependentTree;
  const obj3 = { ref: navigationContainerRef, children: closure_9(AnalyticsLocationProvider, obj4) };
  const NavigationContainer = tmp4(1504).NavigationContainer;
  obj4 = { value: analyticsLocations, children: tmp12(Navigator, obj5) };
  obj5 = { initialRouteName, screenOptions: obj6, children: items2 };
  obj6 = { contentStyle: items1, headerShown: false, fullScreenGestureEnabled: true };
  items1 = [tmp7.navigator, contentStyle];
  AnalyticsLocationProvider = tmp4(6851).AnalyticsLocationProvider;
  Navigator = closure_11.Navigator;
  const merged = Object.assign(accessibilityNativeStackOptions);
  const Screen = closure_11.Screen;
  const obj7 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: obj8 };
  obj8 = { context, initialSearchQuery };
  initialSearchQuery = undefined;
  tmp12 = closure_10;
  if (overrideParams.initialRouteName === AppLauncherRouteName.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  items2 = [closure_9(Screen, obj7), , , ];
  const Screen2 = tmp13.Screen;
  const obj9 = { name: AppLauncherRouteName.APPLICATION_VIEW, component: AppLauncherApplicationViewScreenDefault, initialParams: obj10 };
  let obj11 = obj17;
  obj10 = { context, expandBottomSheet };
  if (initialRouteName !== AppLauncherRouteName.APPLICATION_VIEW) {
    obj11 = {};
  }
  const merged1 = Object.assign(obj11);
  items2[1] = closure_9(Screen2, obj9);
  const Screen3 = tmp13.Screen;
  let tmp18;
  const obj12 = { name: AppLauncherRouteName.COMMAND_VIEW, component: AppLauncherCommandViewScreenDefault, initialParams: obj13 };
  if ("channel" === context.type) {
    tmp18 = context;
  }
  let obj14 = obj17;
  obj13 = { context: tmp18, expandBottomSheet };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.COMMAND_VIEW) {
    obj14 = {};
  }
  const merged2 = Object.assign(obj14);
  items2[2] = closure_9(Screen3, obj12);
  const Screen4 = tmp13.Screen;
  const obj15 = { name: AppLauncherRouteName.APP_LIST_VIEW, component: AppLauncherViewAllScreenDefault, initialParams: obj16 };
  obj16 = { context };
  if (overrideParams.initialRouteName !== AppLauncherRouteName.APP_LIST_VIEW) {
    obj17 = {};
  }
  const obj18 = { children: closure_9(NavigationContainer, obj3) };
  const merged3 = Object.assign(obj17);
  items2[3] = closure_9(Screen4, obj15);
  let tmp22 = "customId" in overrideParams;
  const tmp11Result = closure_9(NavigationIndependentTree, obj18);
  if (!tmp22) {
    tmp22 = "referrerId" in overrideParams;
  }
  let tmp23 = null;
  if (tmp22) {
    const obj19 = { customId: null, referrerId: null };
    ({ customId: obj20.customId, referrerId: obj20.referrerId } = overrideParams);
    tmp23 = obj19;
  }
  const obj21 = { value: { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp23, keyboardCloseReasonRef, onActivityItemSelected, width }, children: tmp11Result };
  return closure_9(entrypoint(10621).AppLauncherContext.Provider, obj21);
}));
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
