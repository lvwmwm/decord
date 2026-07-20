// Module ID: 14006
// Function ID: 106551
// Name: pressable
// Dependencies: [0, 4294967295, 0, 4294967295, 0, 0, 0, 0]

// Module 14006 (pressable)
import closure_2 from "result";
import { InputModes } from "result";
import result from "result";
import result from "result";

result = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.pS+K2L);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useTrailing: function useInputModeSettingTrailing() {
    const items = [closure_2];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = arg1(dependencyMap[4]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[4]).t.Q8gkVL);
    } else {
      const intl = arg1(dependencyMap[4]).intl;
      stringResult = intl.string(arg1(dependencyMap[4]).t.cHCEOJ);
    }
    return stringResult;
  },
  onPress: require("result").handleInputModePress,
  useSearchTerms() {
    const intl = arg1(dependencyMap[4]).intl;
    const items = [intl.string(arg1(dependencyMap[4]).t.nuFtHH)];
    return items;
  }
};
result = result.createPressable(result);
result = result.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default result;
