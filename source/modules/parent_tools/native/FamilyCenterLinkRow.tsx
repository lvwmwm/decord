// Module ID: 13944
// Function ID: 13945
// Name: FamilyCenterLinkRow
// Dependencies: [19, 17, 5794, 21, 4189, 13945, 13946, 2]
// Exports: default

// Module 13944 (FamilyCenterLinkRow)
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
  const items = [callback(importDefault(13946), obj), ];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj[1] = items;
  return callback2(importDefault(13945), obj);
};
