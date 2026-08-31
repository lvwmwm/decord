// Module ID: 14491
// Function ID: 14492
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 7251, 21, 4448, 14492, 14493, 2]
// Exports: default

// Module 14491 (FamilyCenterLinkRow)
import noopAll from "noop" /* 19 */;
import FamilyCenterLinkRowWrapperDefault from "FamilyCenterLinkRowWrapper" /* 14492 */;
import FamilyCenterRequestorDetailsDefault from "FamilyCenterRequestorDetails" /* 14493 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserLinkStatus } from "items" /* 7251 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

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
