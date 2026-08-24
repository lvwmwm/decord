// Module ID: 14343
// Function ID: 14344
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 5302, 21, 4668, 14344, 14345, 2]
// Exports: default

// Module 14343 (FamilyCenterLinkRow)
import noopAll from "noop" /* 19 */;
import FamilyCenterLinkRowWrapperDefault from "FamilyCenterLinkRowWrapper" /* 14344 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 14345 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserLinkStatus } from "items" /* 5302 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id, children: null };
  const tmp = callback3();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [callback(FamilyCenterRequestorDetailsDefault, obj), ];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(FamilyCenterLinkRowWrapperDefault, obj);
};
