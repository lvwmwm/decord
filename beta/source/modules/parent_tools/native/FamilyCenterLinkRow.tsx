// Module ID: 16231
// Function ID: 16232
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 21, 4913, 16232, 16233, 2]
// Exports: default

// Module 16231 (FamilyCenterLinkRow)
import react_native from "react-native" /* 17 */;
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper" /* 16232 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 16233 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(otherUser) {
  let actions;
  let items;
  let status;
  otherUser = otherUser.otherUser;
  ({ status, actions } = otherUser);
  const obj = { userId: otherUser.id, children: items };
  items = [, ];
  const tmp = closure_5();
  const tmp2 = FamilyCenterLinkWrapperDefault;
  items[0] = _false(FamilyCenterRequestorDetailsDefault, { otherUser, status });
  const obj2 = { style: tmp.actionContainer, children: actions };
  items[1] = _false(View, obj2);
  return React3(tmp2, obj);
};
