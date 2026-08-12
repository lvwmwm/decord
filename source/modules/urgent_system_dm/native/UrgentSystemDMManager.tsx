// Module ID: 16652
// Function ID: 16653
// Dependencies: [16653, 4683, 1236, 16655, 2]

// Module 16652
const require = arg1;
const tmp2 = new require("maybeShowUrgentMessageModal")(() => {
  let obj = importDefault(4683);
  obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.bAhz9l);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["7KjxW3"]);
  obj[3] = importDefault(16655);
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;
