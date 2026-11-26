// Module ID: 12933
// Function ID: 12934
// Name: CheckpointUnavailableModal
// Dependencies: [21, 12647, 12662, 12649, 12651, 12932, 1112, 3495, 2]
// Exports: default

// Module 12933 (CheckpointUnavailableModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3495 from "module_3495" /* 3495 */;
import useCheckpointStartedAnalyticsDefault from "useCheckpointStartedAnalytics" /* 12647 */;
import useCheckpointStepAnalytics from "useCheckpointStepAnalytics" /* 12649 */;
import useCheckpointForegroundTrackingDefault from "useCheckpointForegroundTracking" /* 12651 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12662 */;
import CheckpointMessageModalDefault from "CheckpointMessageModal" /* 12932 */;
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
