// Module ID: 13989
// Function ID: 106864
// Name: pressable
// Dependencies: [5, 4379, 22, 1553, 4710, 4372, 12983, 1935, 10099, 1212, 13892, 2]

// Module 13989 (pressable)
import { NativePermissionTypes } from "NativePermissionStatus";
import importDefaultResult from "module_4372";
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
