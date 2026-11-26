// Module ID: 12804
// Function ID: 12805
// Name: CheckpointErrorModal
// Dependencies: [21, 12532, 12805, 1112, 2]
// Exports: default

// Module 12804 (CheckpointErrorModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import useCheckpointMusicDefault from "useCheckpointMusic" /* 12532 */;
import CheckpointMessageModalDefault from "CheckpointMessageModal" /* 12805 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointErrorModal.tsx");

export default function CheckpointErrorModal() {
  useCheckpointMusicDefault();
  CheckpointMessageModalDefault;
  const intl = intl2.intl;
  return <tmp2 message={intl.string(intl2.t.fEptJP)} />;
};
