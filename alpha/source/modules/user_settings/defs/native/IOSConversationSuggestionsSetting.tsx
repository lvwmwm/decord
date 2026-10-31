// Module ID: 16740
// Function ID: 16741
// Name: IOSConversationSuggestionsSetting
// Dependencies: [19, 17, 8432, 1254, 1259, 4929, 1375, 3, 11539, 1113, 2]

// Module 16740 (IOSConversationSuggestionsSetting)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import _slicedToArray from "_slicedToArray" /* 4929 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import react from "react" /* 19 */;
import module_1254 from "module_1254" /* 1254 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

let conversationSuggestionsEnabled;

const NativeModules = react_native.NativeModules;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let closure_4 = module_1254.createWithEqualityFn(() => ({ isEnabled: true }));
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
