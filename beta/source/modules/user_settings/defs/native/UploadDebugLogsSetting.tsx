// Module ID: 16897
// Function ID: 16898
// Name: UploadDebugLogsSetting
// Dependencies: [5, 17, 1087, 21, 570, 1274, 558, 576, 1384, 13789, 5663, 1128, 5686, 11208, 2]

// Module 16897 (UploadDebugLogsSetting)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl3 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5686 */;
import DebugUploadManager from "DebugUploadManager" /* 13789 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11208 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let obj = function _handleUploadDebugLogSettingPress() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let intl2;
    let obj3;
    function onUploadDebugLogsRequestStart() {
      let state;
      obj = closure_1_0(closure_1_2[5]);
      obj.batchUpdates(() => state.setState({ isDisabled: true, isUploading: true }));
    }
    function onUploadDebugLogsRequestFinish() {
      let state;
      obj = closure_1_0(closure_1_2[5]);
      obj.batchUpdates(() => state.setState({ isDisabled: true, isUploading: false }));
      const timerId = setTimeout(() => {
        obj = closure_1_0(closure_1_2[5]);
        return obj.batchUpdates(() => state.setState({ isDisabled: false }));
      }, 5000);
    }
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
            let ANDROID_APP;
            let closure_1 = tmp;
            let closure_0 = tmp;
            onUploadDebugLogsRequestStart();
            const obj8 = PlatformUtils;
            if (obj8.isIOS()) {
              ANDROID_APP = tmp46.IOS_APP;
            } else {
              ANDROID_APP = tmp46.ANDROID_APP;
            }
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj5 = { value: obj3.uploadDebugLogFiles(ANDROID_APP), done: false };
            obj3 = DebugUploadManager;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          onUploadDebugLogsRequestFinish();
          throw closure_2;
        } else {
          if (2 === c4) {
            c3 = 1;
            const obj6 = { text: intl.string(closure_129_0(closure_129_2[11]).t.VzHcSm), icon: closure_129_0(closure_129_2[12]).CircleInformationIcon };
            const open = closure_129_1(closure_129_2[10]).open;
            const tmp10 = closure_129_1(closure_129_2[10]);
            intl = closure_129_0(closure_129_2[11]).intl;
            open("USER_SETTINGS_CACHES_CLEARED", obj6);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            onUploadDebugLogsRequestFinish();
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj7 = { text: intl2.string(closure_129_0(closure_129_2[11]).t.BvyxE7), icon: closure_129_0(closure_129_2[12]).CircleInformationIcon };
            const open2 = closure_129_1(closure_129_2[10]).open;
            const tmp35 = closure_129_1(closure_129_2[10]);
            intl2 = closure_129_0(closure_129_2[11]).intl;
            open2("USER_SETTINGS_CACHES_CLEARED", obj7);
            c3 = 1;
          }
          c3 = 0;
          onUploadDebugLogsRequestFinish();
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp26) {
        closure_2 = tmp26;
        if (0 === c3) {
          c5 = 3;
          throw tmp26;
        } else if (1 === tmp28) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const ActivityIndicator = react_native.ActivityIndicator;
const DebugLogCategory = Constants.DebugLogCategory;
const jsx = Fragment.jsx;
let closure_7 = module_570.create(() => ({ isDisabled: false, isUploading: false }));
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
function useIsUploadingDebugLogs() {

}
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUploadDebugLogsTrailing() {
  obj = react;
  const cResult = obj.c(2);
  if (typeof useIsUploadingDebugLogs === "function") {
    let tmp3;
    const isUploading = closure_7().isUploading;
    if (cResult[0] !== isUploading) {
      let tmp4 = null;
      if (isUploading) {
        tmp4 = <ActivityIndicator />;
      }
      cResult[0] = isUploading;
      cResult[1] = tmp4;
      tmp3 = tmp4;
    } else {
      tmp3 = cResult[1];
    }
    return tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useUploadDebugLogsTrailing() {
  if (typeof useIsUploadingDebugLogs === "function") {
    let tmp2 = null;
    if (closure_7().isUploading) {
      tmp2 = <ActivityIndicator />;
    }
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
function useIsUploadDebugLogsDisabled() {
  return closure_7().isDisabled;
}
obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.aY1OH2);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleUploadDebugLogSettingPress() {
    return obj(...arguments);
  },
  useTrailing: tmp4,
  useIsDisabled: useIsUploadDebugLogsDisabled
};
const pressable = SettingBuilders.createPressable(obj);
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/UploadDebugLogsSetting.tsx");

export default pressable;
