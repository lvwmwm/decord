// Module ID: 14371
// Function ID: 109855
// Name: _handleUploadDebugLogSettingPress
// Dependencies: [5, 27, 653, 33, 621, 682, 477, 10324, 3831, 4086, 1212, 10095, 2]

// Module 14371 (_handleUploadDebugLogSettingPress)
import batchUpdates from "batchUpdates";
import { ActivityIndicator } from "get ActivityIndicator";
import { DebugLogCategory } from "ME";
import { jsx } from "jsxProd";
import keys from "keys";
import createToggle from "createToggle";

const require = arg1;
function _handleUploadDebugLogSettingPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_7 = keys.create(() => ({ isDisabled: false, isUploading: false }));
keys = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.aY1OH2);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleUploadDebugLogSettingPress() {
    return _handleUploadDebugLogSettingPress(...arguments);
  },
  useTrailing: function useUploadDebugLogsTrailing() {
    let tmp = null;
    if (callback2().isUploading) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useIsDisabled: function useIsUploadDebugLogsDisabled() {
    return callback2().isDisabled;
  }
};
keys = createToggle.createPressable(keys);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UploadDebugLogsSetting.tsx");

export default keys;
