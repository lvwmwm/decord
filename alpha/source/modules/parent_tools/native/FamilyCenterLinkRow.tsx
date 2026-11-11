// Module ID: 17333
// Function ID: 17334
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 8674, 21, 5243, 17334, 17335, 2]
// Exports: default

// Module 17333 (FamilyCenterLinkRow)
import react_native from "react-native" /* 17 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8674 */;
import FamilyCenterLinkWrapperDefault from "FamilyCenterLinkWrapper" /* 17334 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 17335 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(otherUser) {
  let items;
  otherUser = otherUser.otherUser;
  const actions = otherUser.actions;
  const obj = { userId: otherUser.id, children: items };
  items = [, ];
  const obj2 = { otherUser, status: UserLinkStatus.PENDING };
  const tmp = closure_6();
  const tmp2 = FamilyCenterLinkWrapperDefault;
  items[0] = React3(FamilyCenterRequestorDetailsDefault, obj2);
  const obj3 = { style: tmp.actionContainer, children: actions };
  items[1] = React3(View, obj3);
  return hasOwnProperty(tmp2, obj);
};
