// Module ID: 17860
// Function ID: 17861
// Name: RedesignDiscoverabilityModal
// Dependencies: [19, 17, 12824, 1376, 1078, 21, 4758, 580, 5897, 558, 568, 1488, 504, 12831, 1098, 17861, 12851, 12844, 1253, 12843, 1119, 7246, 2]

// Module 17860 (RedesignDiscoverabilityModal)
import nativeDefault from "native" /* 580 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12831 */;
import SkipHeaderButtonDefault from "SkipHeaderButton" /* 12843 */;
import NUFActionCreators from "NUFActionCreators" /* 12851 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const View = fn(17).View;
const useContactSyncModalStore = fn(12824).useContactSyncModalStore;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { header: { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" }, container: null };
let obj3 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
obj2.container = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: fn(5897).NAV_BAR_HEIGHT + 32 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((onComplete) => {
  const cResult = onComplete(stateFromStores[10]).c(12);
  onComplete = onComplete.onComplete;
  const obj = onComplete(stateFromStores[10]);
  const tmp = onComplete;
  const navigation = onComplete(stateFromStores[11]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [allowEmail];
    const fn = function s() {
      const currentUser = allowEmail.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = onComplete(stateFromStores[11]);
  stateFromStores = tmp(stateFromStores[12]).useStateFromStores(tmp5, tmp6);
  const tmp9 = allowEmail();
  const allowPhone = tmp9.allowPhone;
  const name = tmp9.name;
  allowEmail = tmp9.allowEmail;
  let tmp10 = allowPhone;
  if (!allowPhone) {
    tmp10 = allowEmail;
  }
  allowEmail = tmp10;
  if (cResult[2] === allowEmail) {
    if (cResult[3] === allowPhone) {
      if (cResult[4] === tmp10) {
        if (cResult[5] === name) {
          if (cResult[6] === navigation) {
            if (cResult[7] === onComplete) {
              if (cResult[8] === stateFromStores) {
                let tmp11 = cResult[9];
              }
              if (cResult[10] !== tmp11) {
                const obj3 = { onNext: tmp11 };
                const tmp15 = jsx(navigation(tmp2[15]), { onNext: tmp11 });
                cResult[10] = tmp11;
                cResult[11] = tmp15;
                let tmp12 = tmp15;
              } else {
                tmp12 = cResult[11];
              }
              return tmp12;
            }
          }
        }
      }
    }
  }
  const fn2 = function v() {
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: allowPhone, email: allowEmail });
    if (allowEmail) {
      if (null != stateFromStores) {
        if (allowPhone) {
          if (null == name) {
            navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
          }
        }
      }
    }
    onComplete();
  };
  cResult[2] = allowEmail;
  cResult[3] = allowPhone;
  cResult[4] = tmp10;
  cResult[5] = name;
  cResult[6] = navigation;
  cResult[7] = onComplete;
  cResult[8] = stateFromStores;
  cResult[9] = fn2;
  tmp11 = fn2;
}) : ((onComplete) => {
  onComplete = onComplete.onComplete;
  let stateFromStores;
  let allowEmail;
  const navigation = onComplete(stateFromStores[11]).useNavigation();
  const obj = onComplete(stateFromStores[11]);
  const tmp = stateFromStores;
  const items = [allowEmail];
  stateFromStores = onComplete(stateFromStores[12]).useStateFromStores(items, () => {
    const currentUser = allowEmail.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const tmp4 = allowEmail();
  const allowPhone = tmp4.allowPhone;
  const name = tmp4.name;
  allowEmail = tmp4.allowEmail;
  let tmp5 = allowPhone;
  if (!allowPhone) {
    tmp5 = allowEmail;
  }
  allowEmail = tmp5;
  const items1 = [allowPhone, allowEmail, tmp5, stateFromStores, name, navigation, onComplete];
  const onNext = allowPhone.useCallback(() => {
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: allowPhone, email: allowEmail });
    if (allowEmail) {
      if (null != stateFromStores) {
        if (allowPhone) {
          if (null == name) {
            navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
          }
        }
      }
    }
    onComplete();
  }, items1);
  return jsx(navigation(tmp[15]), { onNext });
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((onComplete) => {
  const cResult = onComplete(568).c(12);
  onComplete = onComplete.onComplete;
  const tmp3 = closure_8();
  const obj = onComplete(568);
  ({ name, allowPhone } = useContactSyncModalStore());
  if (cResult[0] === allowPhone) {
    if (cResult[1] === onComplete) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (cResult[4] !== onComplete) {
      const fn2 = function h(arg0) {
        const result = NUFActionCreators.startContactSyncForDiscoverability(arg0);
        onComplete();
      };
      cResult[4] = onComplete;
      cResult[5] = fn2;
      let tmp9 = fn2;
    } else {
      tmp9 = cResult[5];
    }
    if (name == null) {
      name = "";
    }
    if (cResult[6] === tmp9) {
      if (cResult[7] === name) {
        let tmp11 = cResult[8];
      }
      if (cResult[9] === tmp3.container) {
        if (cResult[10] === tmp11) {
          let tmp15 = cResult[11];
        }
        return tmp15;
      }
      const obj2 = { style: tmp3.container, children: tmp11 };
      const tmp18 = <View style={tmp3.container}>{tmp11}</View>;
      cResult[9] = tmp3.container;
      cResult[10] = tmp11;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    const obj3 = { onNext: tmp9, loading: false, initialName: name };
    const tmp14 = jsx(allowPhone(12844), { onNext: tmp9, loading: false, initialName: name });
    cResult[6] = tmp9;
    cResult[7] = name;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const fn = function s() {
    if (!allowPhone) {
      onComplete();
    }
  };
  const items = [allowPhone, onComplete];
  cResult[0] = allowPhone;
  cResult[1] = onComplete;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : ((onComplete) => {
  onComplete = onComplete.onComplete;
  allowPhone = undefined;
  const tmp = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone, onComplete];
  const effect = noop.useEffect(() => {
    if (!allowPhone) {
      onComplete();
    }
  }, items);
  const items1 = [onComplete];
  const obj = { style: tmp.container, children: null };
  const callback = noop.useCallback((arg0) => {
    const result = NUFActionCreators.startContactSyncForDiscoverability(arg0);
    onComplete();
  }, items1);
  const obj2 = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  if (name == null) {
    name = "";
  }
  obj2.initialName = name;
  obj.children = jsx(allowPhone(12844), { onNext: callback, loading: false, initialName: null });
  return <tmp6 style={tmp.container}>{null}</tmp6>;
});
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  const cResult = require("c").c(8);
  const onComplete = route.route.params.onComplete;
  const tmp4 = closure_8();
  if (cResult[0] !== onComplete) {
    let fn = onComplete;
    if (null == onComplete) {
      fn = () => {

      };
    }
    cResult[0] = onComplete;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    _require = tmp5;
    const obj2 = {};
    const obj3 = {
      ignoreKeyboard: true,
      impressionName: tmp(1253).ImpressionNames.DISCOVERABILITY,
      fullscreen: true,
      headerLeft() {
          return null;
        },
      headerTitle() {
          return null;
        },
      headerRight(arg0) {
          const obj = { insideNavigator: true };
          const merged = Object.assign(arg0);
          obj.onPress = function onPress() {
            return onComplete(true);
          };
          return jsx(SkipHeaderButtonDefault, { insideNavigator: true });
        },
      render() {
          return <closure_2_9 onComplete={onComplete} />;
        }
    };
    obj2[tmp(1098).DiscoverabilityScenes.LANDING] = obj3;
    const obj4 = {
      ignoreKeyboard: true,
      impressionName: tmp(1253).ImpressionNames.DISCOVERABILITY,
      fullscreen: true,
      headerTitle() {
          return null;
        },
      render() {
          return <closure_2_10 onComplete={onComplete} />;
        }
    };
    obj2[tmp(1098).DiscoverabilityScenes.NAME] = obj4;
    cResult[2] = tmp5;
    cResult[3] = obj2;
    let tmp7 = obj2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["13/7kX"]);
    cResult[4] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === tmp4.header) {
    if (cResult[6] === tmp7) {
      let tmp10 = cResult[7];
    }
    return tmp10;
  }
  const obj = require("c");
  const tmp11 = jsx(require("Navigator").Navigator, { headerStyle: tmp4.header, screens: tmp7, initialRouteName: require("ConstantsIOS").DiscoverabilityScenes.LANDING, headerBackTitle: tmp8 });
  cResult[5] = tmp4.header;
  cResult[6] = tmp7;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : ((route) => {
  let onComplete = route.route.params.onComplete;
  let obj = { headerStyle: closure_8().header, screens: null, initialRouteName: onComplete(1098).DiscoverabilityScenes.LANDING, headerBackTitle: null };
  const items = [onComplete];
  obj.screens = noop.useMemo(() => {
    if (null == onComplete) {
      onComplete = () => {

      };
    }
    let obj = {};
    obj[ConstantsIOS.DiscoverabilityScenes.LANDING] = {
      ignoreKeyboard: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
      fullscreen: true,
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      headerRight(arg0) {
        const obj = { insideNavigator: true };
        const merged = Object.assign(arg0);
        obj.onPress = function onPress() {
          return onComplete(true);
        };
        return jsx(SkipHeaderButtonDefault, { insideNavigator: true });
      },
      render() {
        return <closure_2_9 onComplete={onComplete} />;
      }
    };
    const obj2 = {
      ignoreKeyboard: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
      fullscreen: true,
      headerLeft() {
        return null;
      },
      headerTitle() {
        return null;
      },
      headerRight(arg0) {
        const obj = { insideNavigator: true };
        const merged = Object.assign(arg0);
        obj.onPress = function onPress() {
          return onComplete(true);
        };
        return jsx(SkipHeaderButtonDefault, { insideNavigator: true });
      },
      render() {
        return <closure_2_9 onComplete={onComplete} />;
      }
    };
    obj[ConstantsIOS.DiscoverabilityScenes.NAME] = {
      ignoreKeyboard: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.DISCOVERABILITY,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render() {
        return <closure_2_10 onComplete={onComplete} />;
      }
    };
    return obj;
  }, items);
  const intl = onComplete(1119).intl;
  obj.headerBackTitle = intl.string(onComplete(1119).t["13/7kX"]);
  return jsx(onComplete(7246).Navigator, { headerStyle: closure_8().header, screens: null, initialRouteName: onComplete(1098).DiscoverabilityScenes.LANDING, headerBackTitle: null });
});
tmp2.modalConfig = { animation: fn(1078).ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityModal.tsx");

export default tmp2;
