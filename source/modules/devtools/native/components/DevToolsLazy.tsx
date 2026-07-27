// Module ID: 13566
// Function ID: 104369
// Name: NativeModules
// Dependencies: [5, 31, 27, 5951, 5950, 33, 477, 13567, 13568, 1935, 566, 13562, 14768, 2]
// Exports: default

// Module 13566 (NativeModules)
import jsxProd from "jsxProd";
import result from "result";
import { NativeModules } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import set from "set";
import set from "get ActivityIndicator";

const require = arg1;
let obj = { input: "o", modifierFlags: null, eventName: "keyCommandShowDevTools", discoverabilityTitle: "Open DevTools Panel" };
if (set.isAndroid()) {
  let keyModifierControl = require("enforcing").getConstants().keyModifierControl;
  const importDefaultResult = require("enforcing");
} else {
  keyModifierControl = NativeModules.KeyCommandsView.keyModifierControl;
}
obj.modifierFlags = keyModifierControl;
obj.onKeyCommand = function onKeyCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  return callback(tmp)();
};
let items = [obj];
let result = set.fileFinishedImporting("modules/devtools/native/components/DevToolsLazy.tsx");

export default function DevToolsLazy() {
  const items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_5.isDeveloper);
  const obj = stateFromStores(566);
  const items1 = [closure_6];
  const stateFromStores1 = stateFromStores(566).useStateFromStores(items1, () => outer1_6.showDevWidget);
  const effect = React.useEffect(() => {
    if (obj.isIOS()) {
      outer1_5.addChangeListener(() => {
        const NSUserDefaultsBridge = outer2_4.NSUserDefaultsBridge;
        if (null != NSUserDefaultsBridge) {
          const result = NSUserDefaultsBridge.setIsDiscordDeveloper(outer1_0);
        }
      });
    }
  });
  const obj2 = stateFromStores(566);
  const keyCommands = stateFromStores(13562).useKeyCommands(stateFromStores ? items : []);
  if (stateFromStores) {
    if (stateFromStores1) {
      return jsx(stateFromStores(14768).default, {});
    }
  }
  return null;
};
