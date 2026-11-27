// Module ID: 12941
// Function ID: 12942
// Name: CheckpointUnavailableModal
// Dependencies: [21, 12655, 12670, 12657, 12659, 12940, 1112, 3495, 2]
// Exports: default

// Module 12941 (CheckpointUnavailableModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3495 from "module_3495" /* 3495 */;
import useCheckpointStartedAnalyticsDefault from "useCheckpointStartedAnalytics" /* 12655 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 12657 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 12659 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12670 */;
import CheckpointMessageModalDefault from "CheckpointMessageModal" /* 12940 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointUnavailableModal.tsx");

export default function CheckpointUnavailableModal(source) {
  useCheckpointStartedAnalyticsDefault(source.source);
  useCheckpointMusicDefault();
  const obj = useCheckpointStepAnalytics;
  const checkpointCloseAnalytics = obj.useCheckpointCloseAnalytics();
  useCheckpointForegroundTrackingDefault();
  CheckpointMessageModalDefault;
  const intl = intl2.intl;
  return <tmp5 message={intl.string(_modDef3495.IaTl5H)} />;
};
