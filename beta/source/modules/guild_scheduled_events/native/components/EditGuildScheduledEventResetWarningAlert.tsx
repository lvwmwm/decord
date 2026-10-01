// Module ID: 9078
// Function ID: 9079
// Name: EditGuildScheduledEventResetWarningAlert
// Dependencies: [19, 21, 5300, 1115, 2]
// Exports: default

// Module 9078 (EditGuildScheduledEventResetWarningAlert)
import Fragment from "Fragment" /* 21 */;
import intl5 from "intl" /* 1115 */;
import AlertDefault from "Alert" /* 5300 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default function EditGuildScheduledEventResetWarningAlert(arg0) {
  let onClose;
  let onConfirm;
  ({ onClose, onConfirm } = arg0);
  AlertDefault;
  const intl = intl5.intl;
  const intl2 = intl5.intl;
  const intl3 = intl5.intl;
  const intl4 = intl5.intl;
  return <tmp onClose={onClose} onConfirm={onConfirm} title={intl.string(intl5.t.aNCYas)} body={intl2.format(intl5.t.RWBa5X, {})} confirmText={intl3.string(intl5.t["cY+Oob"])} confirmColor={AlertDefault.Colors.GREEN} cancelText={intl4.string(intl5.t["ETE/oC"])} />;
};
