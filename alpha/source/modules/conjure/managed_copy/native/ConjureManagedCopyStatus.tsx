// Module ID: 18488
// Function ID: 18489
// Name: ConjureManagedCopyStatus
// Dependencies: [19, 21, 18473, 6115, 575, 5634, 1112, 4245, 18489, 2]
// Exports: default

// Module 18488 (ConjureManagedCopyStatus)
import nativeDefault from "native" /* 575 */;
import _modDef4245 from "module_4245" /* 4245 */;
import useConjureManagedCopy from "useConjureManagedCopy" /* 18473 */;
import conjureManagedCopyStatusText from "conjureManagedCopyStatusText" /* 18489 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const useConjureManagedCopyDefault = useConjureManagedCopy;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/conjure/managed_copy/native/ConjureManagedCopyStatus.tsx");

export default function ConjureManagedCopyStatus(projectId) {
  let intl;
  let items;
  let tmp4Result;
  let tmp4Result2;
  projectId = projectId.projectId;
  const tmp3 = useConjureManagedCopyDefault(projectId);
  const obj = useConjureManagedCopy;
  const conjureCopyLastSync = obj.useConjureCopyLastSync(projectId);
  if (null == tmp3) {
    return null;
  } else {
    let str;
    const updatesPaused = tmp3.updatesPaused;
    const obj2 = { spacing: nativeDefault.space.PX_4, children: items };
    const Stack = tmp4(6115).Stack;
    const obj3 = { variant: "body-md/medium", color: "text-default", children: intl.string(_modDef4245["+QBNDE"]) };
    const Text = tmp4(5634).Text;
    intl = tmp4(1112).intl;
    items = [_false(Text, obj3), , ];
    const obj4 = { variant: "body-sm/normal", color: "text-subtle", children: tmp4Result.conjureCopySourceLine(tmp3, updatesPaused) };
    const Text2 = tmp4(5634).Text;
    tmp4Result = conjureManagedCopyStatusText;
    items[1] = _false(Text2, obj4);
    const Text3 = tmp4(5634).Text;
    const tmp7 = React3;
    const tmp8 = _false;
    if (updatesPaused) {
      str = "text-muted";
    } else {
      let status;
      if (conjureCopyLastSync != null) {
        status = conjureCopyLastSync.status;
      }
      str = "text-feedback-critical";
    }
    const obj5 = { variant: "body-sm/normal", color: str, children: tmp4Result2.conjureCopySyncLine(conjureCopyLastSync, updatesPaused) };
    tmp4Result2 = conjureManagedCopyStatusText;
    items[2] = tmp8(Text3, obj5);
    return tmp7(Stack, obj2);
  }
};
