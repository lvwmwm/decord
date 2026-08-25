// Module ID: 14304
// Function ID: 14305
// Name: toggle
// Dependencies: [19, 17, 8235, 700, 705, 4010, 500, 3, 10516, 1236, 2]

// Module 14304 (toggle)
import set from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isIterable from "isIterable" /* 4010 */;
import closure_3 from "noop" /* 19 */;
import identity from "identity" /* 700 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
let closure_4 = identity.createWithEqualityFn(() => ({ isEnabled: true }));
require("get ActivityIndicator").NativeModules.IntentsHandler;
identity = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.J8foZq);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
    const effect = React.useEffect(() => {
      conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((arg0) => {
        const callback = arg0;
        callback(table[4]).batchUpdates(() => closure_1_4.setState({ isEnabled: closure_0 }));
      });
    }, []);
    return callback((isEnabled) => isEnabled.isEnabled, isIterable.shallow);
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((arg0) => {
      const callback = arg0;
      callback(705).batchUpdates(() => closure_1_4.setState({ isEnabled: closure_0 }));
    }).catch((arg0) => {
      new callback2(3)("ConversationSuggestions").error("Error suggesting conversations", arg0);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !set.isAndroid();
  }
};
identity = createToggle.createToggle(identity);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default identity;
