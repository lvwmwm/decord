// Module ID: 14249
// Function ID: 107659
// Name: _handleUploadDebugLogSettingPress
// Dependencies: []

// Module 14249 (_handleUploadDebugLogSettingPress)
function _handleUploadDebugLogSettingPress() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleUploadDebugLogSettingPress = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const ActivityIndicator = arg1(dependencyMap[1]).ActivityIndicator;
const DebugLogCategory = arg1(dependencyMap[2]).DebugLogCategory;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
let closure_7 = obj.create(() => ({ <string:3869114372>: null, <string:3868262404>: null }));
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.aY1OH2);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[9]).CircleInformationIcon,
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
const pressable = arg1(dependencyMap[11]).createPressable(obj);
const obj2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/defs/native/UploadDebugLogsSetting.tsx");

export default pressable;
