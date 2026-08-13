// Module ID: 14626
// Function ID: 14627
// Name: radio
// Dependencies: [19, 8127, 14627, 4034, 1236, 4039, 10407, 2]

// Module 14626 (radio)
import noop from "noop";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.OAOUoQ);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: function useDMsMessagePreviewsValue() {
    return require(14627) /* useMessagePreview */.useMessagePreviewSetting();
  },
  onValueChange: function onDMsMessagePreviewsValueChange(arg0) {
    const MessagePreviewSetting = require(4034) /* explicitContentFromProto */.MessagePreviewSetting;
    MessagePreviewSetting.updateSetting(arg0);
  },
  useOptions: function useDMsMessagePreviewsOptions() {
    return React.useMemo(() => {
      let obj = { label: null, value: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["8K53DF"]);
      obj[1] = callback(4039).MessagePreviewTypes.ALL;
      const items = [obj, , ];
      obj = { label: null, value: null };
      const intl2 = callback(1236).intl;
      obj[0] = intl2.string(callback(1236).t.Gw11zg);
      obj[1] = callback(4039).MessagePreviewTypes.UNREADS;
      items[1] = obj;
      obj = { label: null, value: null };
      const intl3 = callback(1236).intl;
      obj[0] = intl3.string(callback(1236).t.R2Ok7F);
      obj[1] = callback(4039).MessagePreviewTypes.NONE;
      items[2] = obj;
      return items;
    }, []);
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("useMessagePreview").fileFinishedImporting("modules/user_settings/defs/native/DmsMessagePreviewsSetting.tsx");

export default createToggle;
