// Module ID: 14091
// Function ID: 106958
// Name: radio
// Dependencies: []

// Module 14091 (radio)
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.OAOUoQ);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    return arg1(dependencyMap[2]).useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(addFlagResult) {
    const MessagePreviewSetting = arg1(dependencyMap[3]).MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(addFlagResult);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = callback(closure_1[4]).intl;
      obj.label = intl.string(callback(closure_1[4]).t.8K53DF);
      obj.value = callback(closure_1[5]).MessagePreviewTypes.ALL;
      const items = [obj, , ];
      obj = {};
      const intl2 = callback(closure_1[4]).intl;
      obj.label = intl2.string(callback(closure_1[4]).t.Gw11zg);
      obj.value = callback(closure_1[5]).MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = {};
      const intl3 = callback(closure_1[4]).intl;
      obj.label = intl3.string(callback(closure_1[4]).t.R2Ok7F);
      obj.value = callback(closure_1[5]).MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  }
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default radio;
