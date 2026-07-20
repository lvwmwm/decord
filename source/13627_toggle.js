// Module ID: 13627
// Function ID: 103281
// Name: toggle
// Dependencies: []

// Module 13627 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
const Consents = arg1(dependencyMap[2]).Consents;
let obj = arg1(dependencyMap[10]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.XuADY2);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [closure_3];
    return arg1(dependencyMap[9]).useStateFromStores(items, () => closure_3.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      const items = [Consents.USAGE_STATISTICS];
      const obj3 = arg1(dependencyMap[7]);
      arg1(dependencyMap[7]).setConsents(items, []).catch((message) => callback(closure_2[8]).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = arg1(dependencyMap[7]).setConsents(items, []);
    } else {
      let obj = importDefault(dependencyMap[4]);
      obj = {};
      const intl = arg1(dependencyMap[5]).intl;
      obj.title = intl.string(arg1(dependencyMap[5]).t.OdPCbN);
      const intl2 = arg1(dependencyMap[5]).intl;
      obj.body = intl2.string(arg1(dependencyMap[5]).t.MGWabA);
      const intl3 = arg1(dependencyMap[5]).intl;
      obj.confirmText = intl3.string(arg1(dependencyMap[5]).t.D3+rU4);
      const intl4 = arg1(dependencyMap[5]).intl;
      obj.cancelText = intl4.string(arg1(dependencyMap[5]).t.kYpG0u);
      obj.confirmColor = importDefault(dependencyMap[6]).Colors.RED;
      obj.onConfirm = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return callback(closure_2[7]).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return arg1(dependencyMap[3]).useIsParentallyControlled();
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default toggle;
