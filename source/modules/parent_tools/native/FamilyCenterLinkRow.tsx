// Module ID: 14173
// Function ID: 14174
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 7000, 21, 4303, 14174, 14175, 2]
// Exports: default

// Module 14173 (FamilyCenterLinkRow)
import "noop";
import { View } from "get ActivityIndicator";
import { UserLinkStatus } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id, children: null };
  const tmp = callback3();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [callback(importDefault(14175), obj), ];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(importDefault(14174), obj);
};
