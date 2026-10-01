// Module ID: 14385
// Function ID: 14386
// Name: IOSConversationSuggestionsSetting
// Dependencies: [19, 17, 7417, 1243, 1248, 4452, 1364, 3, 11006, 1115, 2]

// Module 14385 (IOSConversationSuggestionsSetting)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import _slicedToArray from "_slicedToArray" /* 4452 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import react from "react" /* 19 */;
import module_1243 from "module_1243" /* 1243 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

let conversationSuggestionsEnabled;

const NativeModules = react_native.NativeModules;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_4 = module_1243.createWithEqualityFn(() => ({ isEnabled: true }));
const IntentsHandler = NativeModules.IntentsHandler;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.J8foZq);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
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
    return closure_4((isEnabled) => isEnabled.isEnabled, _slicedToArray.shallow);
  },
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
