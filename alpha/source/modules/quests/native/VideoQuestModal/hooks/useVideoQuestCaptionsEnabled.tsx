// Module ID: 16416
// Function ID: 16417
// Name: useVideoQuestCaptionsEnabled
// Dependencies: [32, 19, 16417, 2]
// Exports: useVideoQuestCaptionsEnabled

// Module 16416 (useVideoQuestCaptionsEnabled)
import SystemCaptionPreference from "SystemCaptionPreference" /* 16417 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptionsEnabled.tsx");

export function useVideoQuestCaptionsEnabled() {
  let tmp2;
  const tmp = _slicedToArray(react.useState(SystemCaptionPreference.getIsAlwaysOnCaptionsEnabled), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    const obj = SystemCaptionPreference;
    let closure_0 = obj.addAlwaysOnCaptionsEnabledListener(require);
    return () => closure_0.remove();
  }, []);
  let obj = { captionsEnabled: tmp2, toggleCaptions: react.useCallback(() => require((arg0) => !arg0), []) };
  return obj;
}
