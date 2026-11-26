// Module ID: 12931
// Function ID: 12932
// Name: CheckpointErrorModal
// Dependencies: [21, 12662, 12932, 1112, 2]
// Exports: default

// Module 12931 (CheckpointErrorModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12662 */;
import CheckpointMessageModalDefault from "CheckpointMessageModal" /* 12932 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointErrorModal.tsx");

export default function CheckpointErrorModal() {
  useCheckpointMusicDefault();
  CheckpointMessageModalDefault;
  const intl = intl2.intl;
  return <tmp2 message={intl.string(intl2.t.fEptJP)} />;
};
