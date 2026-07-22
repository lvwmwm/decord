// Module ID: 13768
// Function ID: 104079
// Name: pressable
// Dependencies: []

// Module 13768 (pressable)
const NativePermissionTypes = arg1(dependencyMap[1]).NativePermissionTypes;
let obj = arg1(tmp3);
// CreateGeneratorClosureLongIndex (0x67)
const importDefaultResult = importDefault(dependencyMap[0]);
const debounceResult = obj.debounce(importDefault(dependencyMap[0])(dependencyMap[2]), 1000, { flex: "<string:1040334421>", marginRight: "<string:1040334338>" });
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
