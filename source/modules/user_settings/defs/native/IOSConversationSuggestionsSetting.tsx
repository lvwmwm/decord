// Module ID: 13752
// Function ID: 105463
// Name: setConversationSuggestionsEnabled
// Dependencies: [31, 27, 7662, 677, 682, 3743, 477, 3, 10095, 1212, 2]

// Module 13752 (setConversationSuggestionsEnabled)
import result from "result";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";
import createToggle from "createToggle";

const require = arg1;
function setConversationSuggestionsEnabled(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_4.setState({ isEnabled: closure_0 }));
}
let closure_4 = useStoreWithEqualityFn.createWithEqualityFn(() => ({ isEnabled: true }));
require("get ActivityIndicator").NativeModules.IntentsHandler;
useStoreWithEqualityFn = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.J8foZq);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue: function useIOSConversationSuggestionsSettingValue() {
    const effect = React.useEffect(() => {
      const conversationSuggestionsEnabled = outer1_5.getConversationSuggestionsEnabled();
      conversationSuggestionsEnabled.then((arg0) => {
        outer2_6(arg0);
      });
    }, []);
    return (function useConversationSuggestionsEnabled() {
      return outer1_4((isEnabled) => isEnabled.isEnabled, outer1_0(outer1_2[5]).shallow);
    })();
  },
  onValueChange: function onIOSConversationSuggestionsSettingValueChange(arg0) {
    const result = IntentsHandler.setConversationSuggestionsEnabled(arg0);
    result.then((arg0) => {
      outer1_6(arg0);
    }).catch((arg0) => {
      let tmp = outer1_1(outer1_2[7]);
      tmp = new tmp("ConversationSuggestions");
      tmp.error("Error suggesting conversations", arg0);
    });
  },
  usePredicate: function useHasIOSConversationSuggestionsSetting() {
    return !require(477) /* set */.isAndroid();
  }
};
useStoreWithEqualityFn = createToggle.createToggle(useStoreWithEqualityFn);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/IOSConversationSuggestionsSetting.tsx");

export default useStoreWithEqualityFn;
