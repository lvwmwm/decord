// Module ID: 16230
// Function ID: 125899
// Dependencies: [16231, 4471, 1212, 16233, 2]

// Module 16230
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
importDefaultResult = new importDefaultResult(() => {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.bAhz9l);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["7KjxW3"]);
  obj.isDismissable = false;
  obj.onConfirm = importDefault(16233);
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default importDefaultResult;
