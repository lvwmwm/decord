// Module ID: 13646
// Function ID: 103375
// Name: toggle
// Dependencies: []

// Module 13646 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
const Consents = arg1(dependencyMap[2]).Consents;
let obj = arg1(dependencyMap[10]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.MNKzyg);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [closure_3];
    return arg1(dependencyMap[4]).useStateFromStores(items, () => closure_3.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      const items = [Consents.PERSONALIZATION];
      const obj3 = arg1(dependencyMap[8]);
      arg1(dependencyMap[8]).setConsents(items, []).catch((message) => callback(closure_2[9]).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = arg1(dependencyMap[8]).setConsents(items, []);
    } else {
      let obj = importDefault(dependencyMap[5]);
      obj = {};
      const intl = arg1(dependencyMap[6]).intl;
      obj.title = intl.string(arg1(dependencyMap[6]).t.9SNpzv);
      const intl2 = arg1(dependencyMap[6]).intl;
      obj.body = intl2.string(arg1(dependencyMap[6]).t.gJvDDh);
      const intl3 = arg1(dependencyMap[6]).intl;
      obj.confirmText = intl3.string(arg1(dependencyMap[6]).t.9g5UGw);
      const intl4 = arg1(dependencyMap[6]).intl;
      obj.cancelText = intl4.string(arg1(dependencyMap[6]).t.+ZLPw9);
      obj.confirmColor = importDefault(dependencyMap[7]).Colors.RED;
      obj.onConfirm = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return callback(closure_2[8]).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return arg1(dependencyMap[3]).useIsParentallyControlled();
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default toggle;
