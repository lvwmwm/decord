// Module ID: 13872
// Function ID: 106185
// Name: FamilyCenterLinkRow
// Dependencies: [31, 27, 6770, 33, 4130, 13873, 13874, 2]
// Exports: default

// Module 13872 (FamilyCenterLinkRow)
import "result";
import { View } from "get ActivityIndicator";
import { UserLinkStatus } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ actionContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", height: "100%" } });
const result = require("items").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkRow.tsx");

export default function FamilyCenterLinkRow(children) {
  const otherUser = children.otherUser;
  let obj = { userId: otherUser.id };
  const tmp = callback3();
  obj = { otherUser, status: UserLinkStatus.PENDING };
  const items = [callback(importDefault(13874), obj), ];
  obj = { style: tmp.actionContainer, children: children.actions };
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(importDefault(13873), obj);
};
