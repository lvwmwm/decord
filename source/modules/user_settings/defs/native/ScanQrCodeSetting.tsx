// Module ID: 13882
// Function ID: 106235
// Name: pressable
// Dependencies: [5, 4344, 22, 1553, 4675, 4337, 12875, 1934, 10095, 1212, 13785, 2]

// Module 13882 (pressable)
import { NativePermissionTypes } from "NativePermissionStatus";
import importDefaultResult from "module_4337";
import createToggle from "createToggle";
import debounceResult from "apply";

const require = arg1;
let apply = arg1(tmp3);
// CreateGeneratorClosureLongIndex (0x67)
apply = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.RC0kJz);
  },
  parent: null,
  IconComponent: require("QrCodeIcon").QrCodeIcon,
  onPress: apply.debounce(require("apply"), 1000, { leading: true, trailing: false }),
  withArrow: true
};
apply = createToggle.createPressable(apply);
const result = require("apply").fileFinishedImporting("modules/user_settings/defs/native/ScanQrCodeSetting.tsx");

export default apply;
