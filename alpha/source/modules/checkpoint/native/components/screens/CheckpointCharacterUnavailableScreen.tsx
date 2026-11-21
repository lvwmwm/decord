// Module ID: 12744
// Function ID: 12745
// Name: CheckpointCharacterUnavailableScreen
// Dependencies: [21, 12722, 12508, 12510, 1112, 3440, 2]
// Exports: default

// Module 12744 (CheckpointCharacterUnavailableScreen)
import intl3 from "intl" /* 1112 */;
import _modDef3440 from "module_3440" /* 3440 */;
import CheckpointUnavailableScreenDefault from "CheckpointUnavailableScreen" /* 12508 */;
import CheckpointTextDefault from "CheckpointText" /* 12510 */;
import useCheckpointHasUserStatsDefault from "useCheckpointHasUserStats" /* 12722 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterUnavailableScreen.tsx");

export default function CheckpointCharacterUnavailableScreen() {
  let intl2;
  const tmp3 = useCheckpointHasUserStatsDefault();
  const tmp5 = CheckpointUnavailableScreenDefault;
  const tmp7 = CheckpointTextDefault;
  const intl = intl3.intl;
  const string = intl.string;
  const tmp9 = _modDef3440;
  const children = [, ];
  const obj = { isStepHeading: true, variant: "heading-lg/medium", children: string(tmp3 ? tmp9.vcRnnQ : tmp9.crKDpM) };
  children[0] = _false(tmp7, obj);
  let tmp6Result = !tmp3;
  const tmp4 = React3;
  if (tmp6Result) {
    const obj2 = { variant: "heading-lg/medium", children: intl2.string(_modDef3440["2GRr6H"]) };
    const tmpResult = CheckpointTextDefault;
    intl2 = intl3.intl;
    tmp6Result = tmp6(tmpResult, obj2);
  }
  children[1] = tmp6Result;
  return tmp4(tmp5, { children });
};
