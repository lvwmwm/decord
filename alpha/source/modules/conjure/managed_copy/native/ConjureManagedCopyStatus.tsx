// Module ID: 18426
// Function ID: 18427
// Name: ConjureManagedCopyStatus
// Dependencies: [19, 21, 18412, 6084, 575, 5603, 1112, 4244, 18427, 2]
// Exports: default

// Module 18426 (ConjureManagedCopyStatus)
import nativeDefault from "native" /* 575 */;
import _modDef4244 from "module_4244" /* 4244 */;
import useConjureManagedCopy from "useConjureManagedCopy" /* 18412 */;
import conjureManagedCopyStatusText from "conjureManagedCopyStatusText" /* 18427 */;
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
    const Stack = tmp4(6084).Stack;
    const obj3 = { variant: "body-md/medium", color: "text-default", children: intl.string(_modDef4244["+QBNDE"]) };
    const Text = tmp4(5603).Text;
    intl = tmp4(1112).intl;
    items = [_false(Text, obj3), , ];
    const obj4 = { variant: "body-sm/normal", color: "text-subtle", children: tmp4Result.conjureCopySourceLine(tmp3, updatesPaused) };
    const Text2 = tmp4(5603).Text;
    tmp4Result = conjureManagedCopyStatusText;
    items[1] = _false(Text2, obj4);
    const Text3 = tmp4(5603).Text;
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
