// Module ID: 13752
// Function ID: 104001
// Name: pressable
// Dependencies: []

// Module 13752 (pressable)
const NativePermissionTypes = arg1(dependencyMap[1]).NativePermissionTypes;
let obj = arg1(tmp3);
// CreateGeneratorClosureLongIndex (0x67)
const importDefaultResult = importDefault(dependencyMap[0]);
const debounceResult = obj.debounce(importDefault(dependencyMap[0])(dependencyMap[2]), 1000, { "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 });
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.RC0kJz);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[10]).QrCodeIcon,
  onPress: debounceResult,
  withArrow: true
};
const pressable = arg1(dependencyMap[8]).createPressable(obj);
const obj2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/ScanQrCodeSetting.tsx");

export default pressable;
