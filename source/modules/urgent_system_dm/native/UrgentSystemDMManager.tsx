// Module ID: 16594
// Function ID: 16595
// Dependencies: [16595, 4643, 1236, 16597, 2]

// Module 16594
const require = arg1;
const tmp2 = new require("maybeShowUrgentMessageModal")(() => {
  let obj = importDefault(4643);
  obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.bAhz9l);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["7KjxW3"]);
  obj[3] = importDefault(16597);
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;
