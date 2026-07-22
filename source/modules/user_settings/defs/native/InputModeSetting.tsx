// Module ID: 14023
// Function ID: 106646
// Name: pressable
// Dependencies: [0, 4294967295, 0, 4294967295, 0, 0, 0, 0]

// Module 14023 (pressable)
import closure_2 from "__exportStarResult1";
import { InputModes } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

__exportStarResult1 = {
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
  onPress: require("__exportStarResult1").handleInputModePress,
  useSearchTerms() {
    const intl = arg1(dependencyMap[4]).intl;
    const items = [intl.string(arg1(dependencyMap[4]).t.nuFtHH)];
    return items;
  }
};
__exportStarResult1 = __exportStarResult1.createPressable(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default __exportStarResult1;
