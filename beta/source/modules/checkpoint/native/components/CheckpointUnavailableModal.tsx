// Module ID: 12806
// Function ID: 12807
// Name: CheckpointUnavailableModal
// Dependencies: [21, 12517, 12532, 12519, 12521, 12805, 1112, 3440, 2]
// Exports: default

// Module 12806 (CheckpointUnavailableModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3440 from "module_3440" /* 3440 */;
import useCheckpointStartedAnalyticsDefault from "useCheckpointStartedAnalytics" /* 12517 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 12519 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 12521 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12532 */;
import CheckpointMessageModalDefault from "CheckpointMessageModal" /* 12805 */;
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
  return <tmp5 message={intl.string(_modDef3440.IaTl5H)} />;
};
