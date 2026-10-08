// Module ID: 18170
// Function ID: 18171
// Name: EnableCommunitySharedNavigation
// Dependencies: [19, 17, 8614, 1085, 21, 5090, 558, 576, 504, 1502, 5360, 5369, 584, 18168, 6718, 1126, 5375, 6803, 2]

// Module 18170 (EnableCommunitySharedNavigation)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8614 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let navigation, num, tmp3;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
let GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1, height: "100%" }, modal: { height: "100%", flex: 1, justifyContent: "space-between" }, button: { flexGrow: 0, paddingLeft: 16, paddingTop: 16, paddingRight: 16 } });
const EnableCommunityModalSteps = { STEP_1: "STEP_1", STEP_2: "STEP_2", STEP_3: "STEP_3" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnableCommunityModalScreen(onSuccess) {
  let buttonText;
  let children;
  let closure_7;
  let currentStep;
  let disableNextStep;
  let headerRef;
  let isScreenReaderEnabled;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp = onSuccess;
  let tmp2 = headerRef;
  let obj = onSuccess(headerRef[7]);
  const cResult = obj.c(37);
  onSuccess = onSuccess.onSuccess;
  ({ disableNextStep, children, buttonText, currentStep } = onSuccess);
  headerRef = onSuccess.headerRef;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [isScreenReaderEnabled];
    class E {
      constructor() {
        return isScreenReaderEnabled.getProps();
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp5 = items;
    tmp6 = E;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[8]);
  const guild = tmpResult.useStateFromStoresObject(tmp5, tmp6).guild;
  let features1;
  const tmp8 = cResult[2];
  if (guild != null) {
    features1 = guild.features;
  }
  if (tmp8 !== features1) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    class E {
      constructor() {
        return isScreenReaderEnabled.getProps();
      }
    }
    cResult[2] = undefined;
    cResult[3] = hasItem;
    tmp10 = hasItem;
  } else {
    tmp10 = cResult[3];
  }
  let closure_4 = tmp10;
  const tmpResult3 = tmp(tmp2[9]);
  navigation = tmpResult3.useNavigation();
  const tmpResult4 = tmp(tmp2[10]);
  isScreenReaderEnabled = tmpResult4.useIsScreenReaderEnabled();
  GuildFeatures = tmp16;
  if (cResult[4] === headerRef) {
    if (cResult[5] === null != guild) {
      let tmp17;
      let tmp18;
      if (cResult[6] === isScreenReaderEnabled) {
        tmp17 = cResult[7];
        tmp18 = cResult[8];
      }
      const effect = guild.useEffect(tmp17, tmp18);
      const obj5 = guild;
      class E {
        constructor() {
          return isScreenReaderEnabled.getProps();
        }
      }
      const effect1 = obj5.useEffect(tmp20, tmp21);
      if (null == guild) {
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          closure_8(tmp(tmp2[14]).SceneLoadingIndicator, {});
          class E {
            constructor() {
              return isScreenReaderEnabled.getProps();
            }
          }
        }
        class E {
          constructor() {
            return isScreenReaderEnabled.getProps();
          }
        }
      } else {
        if (cResult[13] === currentStep) {
          if (cResult[14] === guild) {
            if (cResult[15] === navigation) {
              let tmp23;
              let tmp25;
              let tmp29;
              if (cResult[16] === onSuccess) {
                tmp23 = cResult[17];
              }
              const _Symbol = Symbol;
              class E {
                constructor() {
                  return isScreenReaderEnabled.getProps();
                }
              }
              if (cResult[19] !== children) {
                let obj2 = { style: null, children };
                class E {
                  constructor() {
                    return isScreenReaderEnabled.getProps();
                  }
                }
                const tmp28 = closure_8(closure_4, obj2);
                cResult[19] = children;
                cResult[20] = tmp28;
                tmp25 = tmp28;
              } else {
                tmp25 = cResult[20];
              }
              if (cResult[21] !== buttonText) {
                let stringResult = buttonText;
                if (buttonText == null) {
                  const intl = tmp(tmp2[15]).intl;
                  stringResult = intl.string(tmp(tmp2[15]).t.PDTjLN);
                }
                class E {
                  constructor() {
                    return isScreenReaderEnabled.getProps();
                  }
                }
                cResult[22] = stringResult;
                tmp29 = stringResult;
              } else {
                tmp29 = cResult[22];
              }
              if (cResult[23] === disableNextStep) {
                if (cResult[24] === tmp23) {
                  let tmp31;
                  if (cResult[25] === tmp29) {
                    tmp31 = cResult[26];
                  }
                  if (cResult[27] === tmp4.button) {
                    let tmp34;
                    if (cResult[28] === tmp31) {
                      tmp34 = cResult[29];
                    }
                    if (cResult[30] === tmp4.modal) {
                      if (cResult[31] === tmp25) {
                        let tmp37;
                        if (cResult[32] === tmp34) {
                          tmp37 = cResult[33];
                        }
                        if (cResult[34] === tmp4.container) {
                          let tmp41;
                          if (cResult[35] === tmp37) {
                            tmp41 = cResult[36];
                          }
                          return tmp41;
                        }
                        class E {
                          constructor() {
                            return isScreenReaderEnabled.getProps();
                          }
                        }
                        const obj3 = { style: tmp4.container, children: tmp37 };
                        const tmp43 = closure_8(navigation, obj3);
                        cResult[34] = tmp4.container;
                        cResult[35] = tmp37;
                        cResult[36] = tmp43;
                        tmp41 = tmp43;
                      }
                    }
                    class E {
                      constructor() {
                        return isScreenReaderEnabled.getProps();
                      }
                    }
                    tmp39[1] = tmp4.modal;
                    const items1 = [tmp25, tmp34];
                    tmp39[2] = items1;
                    const tmp40 = closure_9(tmp(tmp2[17]).SafeAreaPaddingView, tmp39);
                    cResult[30] = tmp4.modal;
                    cResult[31] = tmp25;
                    cResult[32] = tmp34;
                    cResult[33] = tmp40;
                    tmp37 = tmp40;
                  }
                  class E {
                    constructor() {
                      return isScreenReaderEnabled.getProps();
                    }
                  }
                  const obj4 = { style: tmp4.button, children: tmp31 };
                  const tmp36 = closure_8(closure_4, obj4);
                  cResult[27] = tmp4.button;
                  cResult[28] = tmp31;
                  cResult[29] = tmp36;
                  tmp34 = tmp36;
                }
              }
              const obj6 = { variant: "primary", grow: true, text: tmp29, onPress: tmp23, disabled: disableNextStep };
              const tmp33 = closure_8(tmp(tmp2[16]).Button, obj6);
              cResult[23] = disableNextStep;
              cResult[24] = tmp23;
              cResult[25] = tmp29;
              cResult[26] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
        function handleNext() {
          if (null != guild) {
            if (obj.STEP_1 === currentStep) {
              navigation.push(obj.STEP_2);
            } else if (obj.STEP_2 === tmp2) {
              navigation.push(obj.STEP_3);
            } else if (onSuccess != null) {
              tmp4(tmp);
            }
          }
        }
        class E {
          constructor() {
            return isScreenReaderEnabled.getProps();
          }
        }
        cResult[14] = guild;
        cResult[15] = navigation;
        cResult[16] = onSuccess;
        cResult[17] = handleNext;
        tmp23 = handleNext;
      }
    }
  }
  class M {
    constructor() {
      tmp = closure_6;
      if (tmp) {
        tmp2 = closure_7;
        if (tmp2) {
          tmp3 = headerRef;
          tmp4 = null;
          if (null != headerRef) {
            tmp5 = globalThis;
            _setTimeout = setTimeout;
            num = 100;
            closure_0 = setTimeout(() => {
              const obj = onSuccess(headerRef[11]);
              const obj2 = { ref };
              return obj.setAccessibilityFocus(obj2);
            }, 100);
            return () => clearTimeout(closure_0);
          }
        }
      }
      return;
    }
  }
  const items2 = [isScreenReaderEnabled, null != guild, headerRef];
  cResult[4] = headerRef;
  cResult[5] = null != guild;
  cResult[6] = isScreenReaderEnabled;
  cResult[7] = M;
  cResult[8] = items2;
  tmp18 = items2;
  tmp17 = M;
}) : (function EnableCommunityModalScreen(arg0) {
  let Button;
  let SafeAreaPaddingView;
  let buttonText;
  let children;
  let closure_7;
  let disableNextStep;
  let headerRef;
  let items3;
  let obj3;
  let obj6;
  let tmp12Result;
  let tmp14;
  ({ onSuccess: require, buttonText, currentStep: importDefault, headerRef } = arg0);
  let closure_5;
  let isScreenReaderEnabled;
  GuildFeatures = undefined;
  ({ disableNextStep, children } = arg0);
  let tmp = closure_10();
  let tmp2 = require;
  let obj = require("get initialized");
  const items = [isScreenReaderEnabled];
  const guild = obj.useStateFromStoresObject(items, () => isScreenReaderEnabled.getProps()).guild;
  let hasItem;
  if (guild != null) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.COMMUNITY);
  }
  const tmp2Result = tmp2(headerRef[9]);
  closure_5 = tmp2Result.useNavigation();
  const tmp2Result2 = tmp2(headerRef[10]);
  isScreenReaderEnabled = tmp2Result2.useIsScreenReaderEnabled();
  GuildFeatures = tmp7;
  const items1 = [isScreenReaderEnabled, null != guild, headerRef];
  const effect = guild.useEffect(() => {
    let closure_0;
    let ref;
    const tmp = isScreenReaderEnabled;
    if (tmp) {
      const tmp2 = closure_7;
      if (tmp2) {
        if (null != headerRef) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            const obj = require("react-native");
            const obj2 = { ref };
            return obj.setAccessibilityFocus(obj2);
          }, 100);
          return () => clearTimeout(closure_0);
        }
      }
    }
  }, items1);
  const items2 = [hasItem];
  const effect1 = guild.useEffect(() => {
    const tmp = hasItem;
    if (tmp) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = closure_1_1(headerRef[13]);
        return obj.close();
      });
    }
  }, items2);
  if (null == guild) {
    tmp12Result = closure_8(tmp2(tmp3[14]).SceneLoadingIndicator, {});
  } else {
    let obj2 = { style: tmp.container, children: tmp14(SafeAreaPaddingView, obj3) };
    obj3 = { bottom: true, style: tmp.modal, children: items3 };
    const obj4 = { style: { flexGrow: 1 }, children };
    SafeAreaPaddingView = tmp2(tmp3[17]).SafeAreaPaddingView;
    items3 = [closure_8(hasItem, obj4), ];
    const obj5 = { style: tmp.button, children: closure_8(Button, obj6) };
    Button = tmp2(tmp3[16]).Button;
    const tmp13 = closure_5;
    tmp14 = closure_9;
    const tmp15 = hasItem;
    if (buttonText == null) {
      const intl = tmp2(tmp3[15]).intl;
      buttonText = intl.string(tmp2(tmp3[15]).t.PDTjLN);
    }
    obj6 = {
      variant: "primary",
      grow: true,
      text: buttonText,
      onPress: function handleNext() {
          if (null != guild) {
            if (obj.STEP_1 === importDefault) {
              closure_5.push(obj.STEP_2);
            } else if (obj.STEP_2 === tmp2) {
              closure_5.push(obj.STEP_3);
            } else if (require != null) {
              tmp4(tmp);
            }
          }
        },
      disabled: disableNextStep
    };
    items3[1] = closure_8(tmp15, obj5);
    tmp12Result = tmp12(tmp13, obj2);
  }
  return tmp12Result;
});
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunitySharedNavigation.tsx");

export { EnableCommunityModalSteps };
export const EnableCommunityModalScreen = tmp4;
