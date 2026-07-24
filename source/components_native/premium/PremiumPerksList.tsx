// Module ID: 14708
// Function ID: 112067
// Name: PremiumPerksList
// Dependencies: [31, 27, 33, 4130, 689, 4126, 2]
// Exports: default

// Module 14708 (PremiumPerksList)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = { perkInfoContainer: { flexDirection: "row", alignItems: "center", gap: 16 }, perkInfoTextContainer: { flexDirection: "column", gap: 4, maxWidth: 279 }, perkListContainer: { width: "100%", paddingVertical: 24, flexDirection: "column", gap: 24 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, width: 40, height: 40, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.perkIconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("components_native/premium/PremiumPerksList.tsx");

export default function PremiumPerksList(perks) {
  perks = perks.perks;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  return callback(View, {
    style: tmp.perkListContainer,
    children: perks.map((IconComponent) => {
      let obj = { style: tmp.perkInfoContainer };
      obj = { style: tmp.perkIconContainer, children: outer1_3(IconComponent.IconComponent, { size: "md" }) };
      const items = [outer1_3(outer1_2, obj), ];
      obj = { style: tmp.perkInfoTextContainer };
      const obj1 = { variant: "text-md/bold", color: "text-strong", children: IconComponent.label };
      const items1 = [outer1_3(tmp(outer1_1[5]).Text, obj1), ];
      const obj2 = { variant: "text-md/medium", color: "text-default", children: IconComponent.description };
      items1[1] = outer1_3(tmp(outer1_1[5]).Text, obj2);
      obj.children = items1;
      items[1] = outer1_4(outer1_2, obj);
      obj.children = items;
      return outer1_4(outer1_2, obj, arg1);
    })
  });
};
