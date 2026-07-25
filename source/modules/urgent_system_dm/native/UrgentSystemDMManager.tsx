// Module ID: 16241
// Function ID: 126067
// Dependencies: [16242, 4472, 1212, 16244, 2]

// Module 16241
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
importDefaultResult = new importDefaultResult(() => {
  let obj = importDefault(4472);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.bAhz9l);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["7KjxW3"]);
  obj.isDismissable = false;
  obj.onConfirm = importDefault(16244);
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default importDefaultResult;
