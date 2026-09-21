// Module ID: 12896
// Function ID: 12897
// Name: DiscoverabilityModal
// Dependencies: [19, 17, 12824, 1376, 1078, 21, 4758, 580, 5897, 558, 568, 1488, 504, 12831, 1098, 12851, 12897, 12844, 1253, 7246, 1119, 2]

// Module 12896 (DiscoverabilityModal)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ConstantsIOS from "ConstantsIOS" /* 1098 */;
import util from "util" /* 1119 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import Navigator from "Navigator" /* 7246 */;
import ContactSyncActionCreatorsDefault from "ContactSyncActionCreators" /* 12831 */;
import ContactSyncNameInputDefault from "ContactSyncNameInput" /* 12844 */;
import NUFActionCreators from "NUFActionCreators" /* 12851 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const View = fn(17).View;
const useContactSyncModalStore = fn(12824).useContactSyncModalStore;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingBottom: 44, paddingTop: fn(5897).NAV_BAR_HEIGHT + 32 } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(allowPhone[10]).c(10);
  let obj = navigation(allowPhone[10]);
  const tmp = navigation;
  navigation = navigation(allowPhone[11]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      currentUser = currentUser.getCurrentUser();
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
  let obj2 = navigation(allowPhone[11]);
  const stateFromStores = tmp(allowPhone[12]).useStateFromStores(tmp5, tmp6);
  const tmp9 = useContactSyncModalStore();
  allowPhone = tmp9.allowPhone;
  let allowEmail = tmp9.allowEmail;
  let tmp10 = allowPhone;
  if (!allowPhone) {
    tmp10 = allowEmail;
  }
  allowEmail = tmp10;
  if (cResult[2] === allowEmail) {
    if (cResult[3] === allowPhone) {
      if (cResult[4] === tmp10) {
        if (cResult[5] === navigation) {
          if (cResult[6] === stateFromStores) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] !== tmp11) {
            const obj3 = { onNext: tmp11 };
            const tmp15 = jsx(stateFromStores(tmp2[16]), { onNext: tmp11 });
            cResult[8] = tmp11;
            cResult[9] = tmp15;
            let tmp12 = tmp15;
          } else {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
  }
  const fn2 = function v() {
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: allowPhone, email: allowEmail });
    if (allowEmail) {
      if (null != stateFromStores) {
        if (tmp2) {
          navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
        }
      }
    }
    const obj2 = { phone: allowPhone, email: allowEmail };
    tmp2 = allowPhone;
    const result1 = NUFActionCreators.closeDiscoverabilityModal(false);
  };
  cResult[2] = allowEmail;
  cResult[3] = allowPhone;
  cResult[4] = tmp10;
  cResult[5] = navigation;
  cResult[6] = stateFromStores;
  cResult[7] = fn2;
  tmp11 = fn2;
}) : (() => {
  navigation = navigation(allowPhone[11]).useNavigation();
  let obj = navigation(allowPhone[11]);
  const tmp = allowPhone;
  const items = [UserStore];
  const stateFromStores = navigation(allowPhone[12]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const tmp4 = useContactSyncModalStore();
  allowPhone = tmp4.allowPhone;
  let allowEmail = tmp4.allowEmail;
  let tmp5 = allowPhone;
  if (!allowPhone) {
    tmp5 = allowEmail;
  }
  allowEmail = tmp5;
  const items1 = [navigation, stateFromStores, allowEmail, allowPhone, tmp5];
  const onNext = allowEmail.useCallback(() => {
    const result = ContactSyncActionCreatorsDefault.updateDiscoverability({ phone: allowPhone, email: allowEmail });
    if (allowEmail) {
      if (null != stateFromStores) {
        if (tmp2) {
          navigation.push(ConstantsIOS.DiscoverabilityScenes.NAME);
        }
      }
    }
    const obj2 = { phone: allowPhone, email: allowEmail };
    tmp2 = allowPhone;
    const result1 = NUFActionCreators.closeDiscoverabilityModal(false);
  }, items1);
  return jsx(stateFromStores(tmp[16]), { onNext });
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = allowPhone(568).c(9);
  const tmp3 = closure_8();
  let obj = allowPhone(568);
  ({ name, allowPhone } = useContactSyncModalStore());
  if (cResult[0] !== allowPhone) {
    const fn = function l() {
      if (!allowPhone) {
        const result = NUFActionCreators.closeDiscoverabilityModal(false);
      }
    };
    const items = [allowPhone];
    cResult[0] = allowPhone;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v(arg0) {
      const result = allowPhone(12851).startContactSyncForDiscoverability(arg0);
      const obj = allowPhone(12851);
      const result1 = allowPhone(12851).closeDiscoverabilityModal(false);
    };
    cResult[3] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  if (name == null) {
    name = "";
  }
  if (cResult[4] !== name) {
    const obj2 = { onNext: tmp8, loading: false, initialName: name };
    const tmp12 = jsx(ContactSyncNameInputDefault, { onNext: tmp8, loading: false, initialName: name });
    cResult[4] = name;
    cResult[5] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp3.container) {
    if (cResult[7] === tmp9) {
      let tmp13 = cResult[8];
    }
    return tmp13;
  }
  const tmp14 = <View style={tmp3.container}>{tmp9}</View>;
  cResult[6] = tmp3.container;
  cResult[7] = tmp9;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : (() => {
  const tmp = closure_8();
  ({ name, allowPhone } = useContactSyncModalStore());
  const items = [allowPhone];
  const effect = noop.useEffect(() => {
    if (!allowPhone) {
      const result = NUFActionCreators.closeDiscoverabilityModal(false);
    }
  }, items);
  let obj = { style: tmp.container, children: null };
  const callback = noop.useCallback((arg0) => {
    const result = allowPhone(12851).startContactSyncForDiscoverability(arg0);
    const obj = allowPhone(12851);
    const result1 = allowPhone(12851).closeDiscoverabilityModal(false);
  }, []);
  const obj2 = { onNext: callback, loading: false, initialName: null };
  const tmp2 = useContactSyncModalStore();
  if (name == null) {
    name = "";
  }
  obj2.initialName = name;
  obj.children = jsx(ContactSyncNameInputDefault, { onNext: callback, loading: false, initialName: null });
  return <tmp6 style={tmp.container}>{null}</tmp6>;
});
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
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
      render() {
          return closure_1_7(closure_1_9, {});
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
          return closure_1_7(closure_1_10, {});
        }
    };
    obj2[tmp(1098).DiscoverabilityScenes.NAME] = obj4;
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { screens: first, initialRouteName: tmp(1098).DiscoverabilityScenes.LANDING, headerBackTitle: null };
    const intl = tmp(1119).intl;
    obj5.headerBackTitle = intl.string(tmp(1119).t["13/7kX"]);
    const tmp7 = jsx(tmp(7246).Navigator, { screens: first, initialRouteName: tmp(1098).DiscoverabilityScenes.LANDING, headerBackTitle: null });
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  let obj = {
    screens: noop.useMemo(() => {
      const obj = {};
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
        render() {
          return closure_1_7(closure_1_9, {});
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
        render() {
          return closure_1_7(closure_1_9, {});
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
          return closure_1_7(closure_1_10, {});
        }
      };
      return obj;
    }, []),
    initialRouteName: ConstantsIOS.DiscoverabilityScenes.LANDING,
    headerBackTitle: null
  };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, {
    screens: noop.useMemo(() => {
      const obj = {};
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
        render() {
          return closure_1_7(closure_1_9, {});
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
        render() {
          return closure_1_7(closure_1_9, {});
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
          return closure_1_7(closure_1_10, {});
        }
      };
      return obj;
    }, []),
    initialRouteName: ConstantsIOS.DiscoverabilityScenes.LANDING,
    headerBackTitle: null
  });
});
tmp2.modalConfig = { animation: fn(1078).ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/DiscoverabilityModal.tsx");

export default tmp2;
