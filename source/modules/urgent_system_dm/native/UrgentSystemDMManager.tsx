// Module ID: 16496
// Function ID: 16497
// Dependencies: [16497, 4641, 1236, 16499, 2]

// Module 16496
const require = arg1;
const tmp2 = new require("maybeShowUrgentMessageModal")(() => {
  let obj = importDefault(4641);
  obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.bAhz9l);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["7KjxW3"]);
  obj[3] = importDefault(16499);
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;
