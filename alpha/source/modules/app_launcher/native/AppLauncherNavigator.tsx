// Module ID: 12058
// Function ID: 12059
// Name: AppLauncherNavigator
// Dependencies: [109, 19, 1504, 1087, 21, 9743, 4971, 587, 558, 576, 7253, 7278, 1506, 5975, 5161, 1631, 7095, 5711, 12059, 12119, 12146, 12207, 11168, 2]

// Module 12058 (AppLauncherNavigator)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1504 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5711 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7278 */;
import AppLauncherHomeScreenDefault from "AppLauncherHomeScreen" /* 12059 */;
import AppLauncherApplicationViewScreenDefault from "AppLauncherApplicationViewScreen" /* 12119 */;
import AppLauncherCommandViewScreenDefault from "AppLauncherCommandViewScreen" /* 12146 */;
import AppLauncherViewAllScreenDefault from "AppLauncherViewAllScreen" /* 12207 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9743 */;
import createStyles from "createStyles" /* 4971 */;
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
  let customId;
  let entrypoint;
  let expandBottomSheet;
  let items1;
  let keyboardCloseReasonRef;
  let obj12;
  let obj15;
  let obj18;
  let obj21;
  let obj8;
  let onActivityItemSelected;
  let overrideParams;
  let referrerId;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp17;
  let width;
  let obj = entrypoint(576);
  const cResult = obj.c(69);
  ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, context, chatInputRef, contentStyle, entrypoint } = arg0);
  ({ expandBottomSheet, keyboardCloseReasonRef, onActivityItemSelected, width, overrideParams } = arg0);
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.APP_LAUNCHER).analyticsLocations;
  let obj2 = entrypoint(1506);
  const navigationContainerRef = obj2.useNavigationContainerRef();
  const obj3 = entrypoint(5975);
  const trackNavigationBackPress = obj3.useTrackNavigationBackPress(navigationContainerRef);
  const tmp8 = closure_12();
  const useKeyboardContextForType = entrypoint(5161).useKeyboardContextForType;
  entrypoint(5161);
  if (overrideParams == null) {
    overrideParams = useKeyboardContextForType(entrypoint(1631).KeyboardTypes.APP_LAUNCHER);
  }
  const tmpResult = entrypoint(7095);
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
                                      let tmp67;
                                      let tmp66;
                                      let tmp65;
                                      if (cResult[46] === tmp59) {
                                        tmp62 = cResult[47];
                                      }
                                      if (cResult[48] !== overrideParams) {
                                        let flag = false;
                                        referrerId = undefined;
                                        customId = undefined;
                                        const tmp68 = "customId" in overrideParams || "referrerId" in overrideParams;
                                        if (tmp68) {
                                          ({ customId, referrerId } = overrideParams);
                                          flag = true;
                                        }
                                        cResult[48] = overrideParams;
                                        cResult[49] = customId;
                                        cResult[50] = referrerId;
                                        cResult[51] = flag;
                                        tmp67 = flag;
                                        tmp66 = referrerId;
                                        tmp65 = customId;
                                      } else {
                                        tmp65 = cResult[49];
                                        tmp66 = cResult[50];
                                        tmp67 = cResult[51];
                                      }
                                      if (cResult[52] === tmp65) {
                                        if (cResult[53] === tmp66) {
                                          let tmp69;
                                          if (cResult[54] === tmp67) {
                                            tmp69 = cResult[55];
                                          }
                                          if (cResult[56] === bottomSheetExpandReasonRef) {
                                            if (cResult[57] === bottomSheetIndex) {
                                              if (cResult[58] === bottomSheetPosition) {
                                                if (cResult[59] === chatInputRef) {
                                                  if (cResult[60] === entrypoint) {
                                                    if (cResult[61] === tmp69) {
                                                      if (cResult[62] === keyboardCloseReasonRef) {
                                                        if (cResult[63] === onActivityItemSelected) {
                                                          let tmp71;
                                                          if (cResult[64] === width) {
                                                            tmp71 = cResult[65];
                                                          }
                                                          if (cResult[66] === tmp71) {
                                                            let tmp72;
                                                            if (cResult[67] === tmp62) {
                                                              tmp72 = cResult[68];
                                                            }
                                                            return tmp72;
                                                          }
                                                          const obj4 = { value: tmp71, children: tmp62 };
                                                          const tmp74 = closure_9(entrypoint(11168).AppLauncherContext.Provider, obj4);
                                                          cResult[66] = tmp71;
                                                          cResult[67] = tmp62;
                                                          cResult[68] = tmp74;
                                                          tmp72 = tmp74;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj5 = { bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: tmp69, keyboardCloseReasonRef, onActivityItemSelected, width };
                                          cResult[56] = bottomSheetExpandReasonRef;
                                          cResult[57] = bottomSheetIndex;
                                          cResult[58] = bottomSheetPosition;
                                          cResult[59] = chatInputRef;
                                          cResult[60] = entrypoint;
                                          cResult[61] = tmp69;
                                          cResult[62] = keyboardCloseReasonRef;
                                          cResult[63] = onActivityItemSelected;
                                          cResult[64] = width;
                                          cResult[65] = obj5;
                                          tmp71 = obj5;
                                        }
                                      }
                                      let tmp70 = null;
                                      if (tmp67) {
                                        tmp70 = { customId: tmp65, referrerId: tmp66 };
                                        const obj6 = { customId: tmp65, referrerId: tmp66 };
                                      }
                                      cResult[52] = tmp65;
                                      cResult[53] = tmp66;
                                      cResult[54] = tmp67;
                                      cResult[55] = tmp70;
                                      tmp69 = tmp70;
                                    }
                                    const obj7 = { children: closure_9(entrypoint(1506).NavigationContainer, obj8) };
                                    const NavigationIndependentTree = tmp(1506).NavigationIndependentTree;
                                    obj8 = { ref: navigationContainerRef, children: tmp59 };
                                    const tmp64 = closure_9(NavigationIndependentTree, obj7);
                                    cResult[45] = navigationContainerRef;
                                    cResult[46] = tmp59;
                                    cResult[47] = tmp64;
                                    tmp62 = tmp64;
                                  }
                                  const obj9 = { value: analyticsLocations, children: tmp55 };
                                  const tmp61 = closure_9(entrypoint(7253).AnalyticsLocationProvider, obj9);
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
      const obj20 = { name: AppLauncherRouteName.HOME, component: AppLauncherHomeScreenDefault, initialParams: obj21 };
      obj21 = { context, initialSearchQuery };
      const tmp29 = closure_9(Screen, obj20);
      cResult[12] = context;
      cResult[13] = initialSearchQuery;
      cResult[14] = tmp29;
      tmp26 = tmp29;
    }
    const obj22 = { contentStyle: tmp19, headerShown: false, fullScreenGestureEnabled: true };
    const merged3 = Object.assign(accessibilityNativeStackOptions);
    cResult[9] = accessibilityNativeStackOptions;
    cResult[10] = tmp19;
    cResult[11] = obj22;
    tmp20 = obj22;
  }
  const items2 = [tmp8.navigator, contentStyle];
  cResult[6] = contentStyle;
  cResult[7] = tmp8.navigator;
  cResult[8] = items2;
  tmp19 = items2;
}) : (function AppLauncherNavigator(bottomSheetExpandReasonRef) {
  let AnalyticsLocationProvider;
  let Navigator;
  let chatInputRef;
  let context;
  let expandBottomSheet;
  let initialSearchQuery;
  let items1;
  let items2;
  let keyboardCloseReasonRef;
  let obj11;
  let obj14;
  let obj17;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let tmp12;
  bottomSheetExpandReasonRef = bottomSheetExpandReasonRef.bottomSheetExpandReasonRef;
  const bottomSheetIndex = bottomSheetExpandReasonRef.bottomSheetIndex;
  const bottomSheetPosition = bottomSheetExpandReasonRef.bottomSheetPosition;
  ({ context, chatInputRef } = bottomSheetExpandReasonRef);
  const entrypoint = bottomSheetExpandReasonRef.entrypoint;
  ({ expandBottomSheet, keyboardCloseReasonRef } = bottomSheetExpandReasonRef);
  const onActivityItemSelected = bottomSheetExpandReasonRef.onActivityItemSelected;
  const width = bottomSheetExpandReasonRef.width;
  let overrideParams = bottomSheetExpandReasonRef.overrideParams;
  let customId;
  let referrerId;
  let c10;
  let memo;
  let tmp = bottomSheetIndex;
  const contentStyle = bottomSheetExpandReasonRef.contentStyle;
  const tmp3 = bottomSheetIndex(bottomSheetPosition[10]);
  const analyticsLocations = tmp3(bottomSheetIndex(bottomSheetPosition[11]).APP_LAUNCHER).analyticsLocations;
  let obj = bottomSheetExpandReasonRef(bottomSheetPosition[12]);
  const navigationContainerRef = obj.useNavigationContainerRef();
  let obj2 = bottomSheetExpandReasonRef(bottomSheetPosition[13]);
  const trackNavigationBackPress = obj2.useTrackNavigationBackPress(navigationContainerRef);
  const tmp7 = closure_12();
  const useKeyboardContextForType = bottomSheetExpandReasonRef(bottomSheetPosition[14]).useKeyboardContextForType;
  bottomSheetExpandReasonRef(bottomSheetPosition[14]);
  if (overrideParams == null) {
    overrideParams = useKeyboardContextForType(bottomSheetExpandReasonRef(bottomSheetPosition[15]).KeyboardTypes.APP_LAUNCHER);
  }
  const tmp4Result = bottomSheetExpandReasonRef(bottomSheetPosition[16]);
  const accessibilityNativeStackOptions = tmp4Result.useAccessibilityNativeStackOptions();
  const initialRouteName = overrideParams.initialRouteName;
  let obj18 = keyboardCloseReasonRef(overrideParams, entrypoint);
  const items = [entrypoint];
  const layoutEffect = onActivityItemSelected.useLayoutEffect(() => {
    const obj = AppAnalyticsUtils;
    const obj2 = { location: "app_launcher", source: entrypoint };
    obj.trackWithMetadata(AnalyticEvents.APPLICATION_COMMAND_TOP_OF_FUNNEL, obj2);
  }, items);
  const NavigationIndependentTree = tmp4(tmp2[12]).NavigationIndependentTree;
  const obj3 = { ref: navigationContainerRef, children: referrerId(AnalyticsLocationProvider, obj4) };
  const NavigationContainer = tmp4(tmp2[12]).NavigationContainer;
  obj4 = { value: analyticsLocations, children: tmp12(Navigator, obj6) };
  obj6 = { initialRouteName, screenOptions: obj7, children: items2 };
  obj7 = { contentStyle: items1, headerShown: false, fullScreenGestureEnabled: true };
  items1 = [tmp7.navigator, contentStyle];
  AnalyticsLocationProvider = tmp4(tmp2[10]).AnalyticsLocationProvider;
  Navigator = memo.Navigator;
  const merged = Object.assign(accessibilityNativeStackOptions);
  const Screen = memo.Screen;
  const obj8 = { name: width.HOME, component: tmp(bottomSheetPosition[18]), initialParams: obj9 };
  obj9 = { context, initialSearchQuery };
  initialSearchQuery = undefined;
  tmp12 = c10;
  if (overrideParams.initialRouteName === width.HOME) {
    initialSearchQuery = overrideParams.initialSearchQuery;
  }
  items2 = [referrerId(Screen, obj8), , , ];
  const Screen2 = tmp13.Screen;
  const obj10 = { name: width.APPLICATION_VIEW, component: tmp(bottomSheetPosition[19]), initialParams: obj11 };
  let obj12 = obj18;
  obj11 = { context, expandBottomSheet };
  if (initialRouteName !== width.APPLICATION_VIEW) {
    obj12 = {};
  }
  const merged1 = Object.assign(obj12);
  items2[1] = referrerId(Screen2, obj10);
  const Screen3 = tmp13.Screen;
  let tmp18;
  const obj13 = { name: width.COMMAND_VIEW, component: tmp(bottomSheetPosition[20]), initialParams: obj14 };
  if ("channel" === context.type) {
    tmp18 = context;
  }
  let obj15 = obj18;
  obj14 = { context: tmp18, expandBottomSheet };
  if (overrideParams.initialRouteName !== width.COMMAND_VIEW) {
    obj15 = {};
  }
  const merged2 = Object.assign(obj15);
  items2[2] = referrerId(Screen3, obj13);
  const Screen4 = tmp13.Screen;
  const obj16 = { name: width.APP_LIST_VIEW, component: tmp(bottomSheetPosition[21]), initialParams: obj17 };
  obj17 = { context };
  if (overrideParams.initialRouteName !== width.APP_LIST_VIEW) {
    obj18 = {};
  }
  const obj19 = { children: referrerId(NavigationContainer, obj3) };
  const merged3 = Object.assign(obj18);
  items2[3] = referrerId(Screen4, obj16);
  c10 = false;
  let tmp22 = "customId" in overrideParams;
  const children = tmp11(NavigationIndependentTree, obj19);
  if (!tmp22) {
    tmp22 = "referrerId" in overrideParams;
  }
  let flag = false;
  let tmp23;
  let tmp24;
  if (tmp22) {
    c10 = true;
    customId = overrideParams.customId;
    referrerId = overrideParams.referrerId;
    flag = true;
    tmp23 = referrerId;
    tmp24 = customId;
  }
  const items3 = [flag, tmp24, tmp23];
  memo = obj5.useMemo(() => {
    let tmp = null;
    if (c10) {
      tmp = { customId, referrerId };
      const obj = { customId, referrerId };
    }
    return tmp;
  }, items3);
  const items4 = [bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, memo, keyboardCloseReasonRef, onActivityItemSelected, width];
  const value = obj5.useMemo(() => ({ bottomSheetExpandReasonRef, bottomSheetIndex, bottomSheetPosition, chatInputRef, entrypoint, entrypointParams: memo, keyboardCloseReasonRef, onActivityItemSelected, width }), items4);
  return referrerId(bottomSheetExpandReasonRef(bottomSheetPosition[22]).AppLauncherContext.Provider, { value, children });
}));
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherNavigator.tsx");

export default memoResult;
