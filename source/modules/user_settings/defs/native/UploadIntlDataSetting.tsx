// Module ID: 14258
// Function ID: 107725
// Name: _serializeIntlData
// Dependencies: []

// Module 14258 (_serializeIntlData)
function _serializeIntlData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _serializeIntlData = obj;
  return obj(...arguments);
}
function _handleUploadIntlDataSettingPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleUploadIntlDataSettingPress = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
const ActivityIndicator = arg1(dependencyMap[1]).ActivityIndicator;
({ DebugLogCategory: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
let closure_9 = obj.create(() => ({ "Bool(true)": true, "Bool(true)": true }));
const tmp2 = arg1(dependencyMap[2]);
obj = {
  useTitle() {
    return "Upload i18n data";
  },
  parent: null,
  IconComponent: arg1(dependencyMap[15]).FileUpIcon,
  onPress: function handleUploadIntlDataSettingPress() {
    return _handleUploadIntlDataSettingPress(...arguments);
  },
  usePredicate: arg1(dependencyMap[16]).useStaffOrDeveloperSettingPredicate,
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
const pressable = arg1(dependencyMap[14]).createPressable(obj);
const obj2 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/defs/native/UploadIntlDataSetting.tsx");

export default pressable;
