// Module ID: 14373
// Function ID: 14374
// Name: IOSConversationSuggestionsSetting
// Dependencies: [19, 17, 7421, 1255, 1260, 558, 576, 4455, 1370, 3, 10874, 1127, 2]

// Module 14373 (IOSConversationSuggestionsSetting)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import react from "react" /* 19 */;
import module_1255 from "module_1255" /* 1255 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

let conversationSuggestionsEnabled;

let tmp;
const _slicedToArray = tmp(4455);
const NativeModules = react_native.NativeModules;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_4 = module_1255.createWithEqualityFn(() => ({ isEnabled: true }));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isEnabled) {
      return isEnabled.isEnabled;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(first, _slicedToArray.shallow);
}) : (() => closure_4((isEnabled) => isEnabled.isEnabled, _slicedToArray.shallow));
const IntentsHandler = NativeModules.IntentsHandler;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((result) => {
        let closure_0 = result;
        const obj = closure_0(closure_2[4]);
        obj.batchUpdates(() => {
          const obj = { isEnabled };
          return state.setState(obj);
        });
      });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = react.useEffect(tmp2, tmp3);
  return closure_5();
}) : (() => {
  const effect = react.useEffect(() => {
    let state;
    conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
    conversationSuggestionsEnabled.then((result) => {
      const isEnabled = result;
      let obj = isEnabled(closure_2[4]);
      obj.batchUpdates(() => {
        const obj = { isEnabled };
        return state.setState(obj);
      });
    });
  }, []);
  return closure_5();
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.J8foZq);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: tmp2,
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    const nextPromise = result.then((result) => {
      let closure_0 = result;
      const obj = closure_0(closure_2[4]);
      obj.batchUpdates(() => {
        const obj = { isEnabled };
        return state.setState(obj);
      });
    });
    nextPromise.catch((error) => {
      const obj = new LoggerDefault("ConversationSuggestions");
      obj.error("Error suggesting conversations", error);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    const obj = PlatformUtils;
    return !obj.isAndroid();
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default toggle;
