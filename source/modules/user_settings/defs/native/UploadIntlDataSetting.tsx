// Module ID: 14478
// Function ID: 110506
// Name: _serializeIntlData
// Dependencies: [5, 27, 653, 33, 621, 682, 1554, 1215, 1249, 1212, 477, 507, 3866, 4121, 10099, 13653, 13852, 2]

// Module 14478 (_serializeIntlData)
import batchUpdates from "batchUpdates";
import { ActivityIndicator } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import keys from "keys";
import createToggle from "createToggle";

let closure_6;
let closure_7;
const require = arg1;
function _serializeIntlData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleUploadIntlDataSettingPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ DebugLogCategory: closure_6, Endpoints: closure_7 } = ME);
let closure_9 = keys.create(() => ({ isDisabled: false, isUploading: false }));
keys = {
  useTitle() {
    return "Upload i18n data";
  },
  parent: null,
  IconComponent: require("FileUpIcon").FileUpIcon,
  onPress: function handleUploadIntlDataSettingPress() {
    return _handleUploadIntlDataSettingPress(...arguments);
  },
  usePredicate: require("useStaffOrDeveloperSettingPredicate").useStaffOrDeveloperSettingPredicate,
  useTrailing: function useUploadIntlDataTrailing() {
    let tmp = null;
    if (callback2().isUploading) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useIsDisabled: function useIsUploadIntlDataDisabled() {
    return callback2().isDisabled;
  }
};
keys = createToggle.createPressable(keys);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/UploadIntlDataSetting.tsx");

export default keys;
