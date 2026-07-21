// Module ID: 14011
// Function ID: 106562
// Name: route
// Dependencies: []

// Module 14011 (route)
let closure_2 = importDefault(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const InputModes = tmp2.InputModes;
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.K3lovD);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[5]).MicrophoneIcon,
  useTrailing: function useVoiceSettingTrailing() {
    const items = [closure_2];
    if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
      const intl2 = arg1(dependencyMap[3]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[3]).t.Q8gkVL);
    } else {
      const intl = arg1(dependencyMap[3]).intl;
      stringResult = intl.string(arg1(dependencyMap[3]).t.cHCEOJ);
    }
    return stringResult;
  },
  screen: obj,
  useSearchTerms() {
    const intl = arg1(dependencyMap[3]).intl;
    const items = [intl.string(arg1(dependencyMap[3]).t.nuFtHH)];
    return items;
  }
};
obj = {
  route: tmp2.UserSettingsSections.VOICE,
  getComponent() {
    return arg1(dependencyMap[6]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default route;
