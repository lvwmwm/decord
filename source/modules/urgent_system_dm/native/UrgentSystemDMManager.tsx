// Module ID: 16292
// Function ID: 126270
// Dependencies: [16293, 4506, 1212, 16295, 2]

// Module 16292
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
importDefaultResult = new importDefaultResult(() => {
  let obj = importDefault(4506);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.bAhz9l);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["7KjxW3"]);
  obj.isDismissable = false;
  obj.onConfirm = importDefault(16295);
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default importDefaultResult;
