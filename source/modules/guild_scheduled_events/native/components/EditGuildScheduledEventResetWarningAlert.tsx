// Module ID: 8452
// Function ID: 67427
// Name: EditGuildScheduledEventResetWarningAlert
// Dependencies: [31, 33, 4561, 1212, 2]
// Exports: default

// Module 8452 (EditGuildScheduledEventResetWarningAlert)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default function EditGuildScheduledEventResetWarningAlert(arg0) {
  let onClose;
  let onConfirm;
  ({ onClose, onConfirm } = arg0);
  const obj = { onClose, onConfirm };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.aNCYas);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.format(require(1212) /* getSystemLocale */.t.RWBa5X, {});
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["cY+Oob"]);
  obj.confirmColor = importDefault(4561).Colors.GREEN;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  return jsx(importDefault(4561), { onClose, onConfirm });
};
