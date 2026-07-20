// Module ID: 8441
// Function ID: 67355
// Name: EditGuildScheduledEventResetWarningAlert
// Dependencies: []
// Exports: default

// Module 8441 (EditGuildScheduledEventResetWarningAlert)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx");

export default function EditGuildScheduledEventResetWarningAlert(arg0) {
  let onClose;
  let onConfirm;
  ({ onClose, onConfirm } = arg0);
  const obj = { onClose, onConfirm };
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.aNCYas);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.body = intl2.format(arg1(dependencyMap[3]).t.RWBa5X, {});
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.confirmText = intl3.string(arg1(dependencyMap[3]).t.cY+Oob);
  obj.confirmColor = importDefault(dependencyMap[2]).Colors.GREEN;
  const intl4 = arg1(dependencyMap[3]).intl;
  obj.cancelText = intl4.string(arg1(dependencyMap[3]).t.ETE/oC);
  return jsx(importDefault(dependencyMap[2]), obj);
};
