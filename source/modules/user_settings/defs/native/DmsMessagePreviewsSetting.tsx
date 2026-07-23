// Module ID: 14205
// Function ID: 109114
// Name: radio
// Dependencies: [31, 7662, 14206, 3803, 1212, 3808, 10095, 2]

// Module 14205 (radio)
import result from "result";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.OAOUoQ);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    return require(14206) /* useMessagePreviewSetting */.useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(addFlagResult) {
    const MessagePreviewSetting = require(3803) /* explicitContentFromProto */.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(addFlagResult);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = outer1_0(outer1_1[4]).intl;
      obj.label = intl.string(outer1_0(outer1_1[4]).t["8K53DF"]);
      obj.value = outer1_0(outer1_1[5]).MessagePreviewTypes.ALL;
      const items = [obj, , ];
      obj = {};
      const intl2 = outer1_0(outer1_1[4]).intl;
      obj.label = intl2.string(outer1_0(outer1_1[4]).t.Gw11zg);
      obj.value = outer1_0(outer1_1[5]).MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = {};
      const intl3 = outer1_0(outer1_1[4]).intl;
      obj.label = intl3.string(outer1_0(outer1_1[4]).t.R2Ok7F);
      obj.value = outer1_0(outer1_1[5]).MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("useMessagePreviewSetting").fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default createToggle;
