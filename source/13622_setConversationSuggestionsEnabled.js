// Module ID: 13622
// Function ID: 103229
// Name: setConversationSuggestionsEnabled
// Dependencies: [0, 0, 0, 0, 4294967295]

// Module 13622 (setConversationSuggestionsEnabled)
import closure_3 from "result";
import result from "result";

function setConversationSuggestionsEnabled(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => state.setState({ isEnabled: arg0 }));
}
let closure_4 = result.createWithEqualityFn(() => ({ isEnabled: true }));
require("result").NativeModules.IntentsHandler;
result = {
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.J8foZq);
  },
  parent: require("result").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
    const effect = React.useEffect(() => {
      const conversationSuggestionsEnabled = conversationSuggestionsEnabled.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((arg0) => {
        callback(arg0);
      });
    }, []);
    return function useConversationSuggestionsEnabled() {
      return callback2((isEnabled) => isEnabled.isEnabled, callback(closure_2[5]).shallow);
    }();
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((arg0) => {
      callback2(arg0);
    }).catch((arg0) => {
      let tmp = callback(closure_2[7]);
      tmp = new tmp("ConversationSuggestions");
      tmp.error("Error suggesting conversations", arg0);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !arg1(dependencyMap[6]).isAndroid();
  }
};
result = arg1(dependencyMap[8]).createToggle(result);
const obj2 = arg1(dependencyMap[8]);
result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default result;
