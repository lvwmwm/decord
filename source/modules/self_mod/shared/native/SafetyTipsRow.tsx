// Module ID: 7597
// Function ID: 60700
// Name: SafetyTipsRow
// Dependencies: [31, 27, 33, 4165, 689, 5198, 4161, 2]
// Exports: default

// Module 7597 (SafetyTipsRow)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 32, height: 32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, alignItems: "center", justifyContent: "center", marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.indexContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsRow.tsx");

export default function SafetyTipsRow(arg0) {
  let description;
  let end;
  let index;
  let tip;
  ({ index, tip, description, end } = arg0);
  const _require = _createForOfIteratorHelperLoose();
  let obj = {
    icon: jsx((index) => {
      obj = { style: lib.indexContainer, children: outer1_3(lib(outer1_1[6]).Text, obj) };
      obj = { variant: "heading-md/semibold", color: "text-brand", children: index.index };
      return outer1_3(outer1_2, obj);
    }, { index }),
    label: tip,
    subLabel: description,
    end
  };
  return jsx(_require(5198).TableRow, {
    icon: jsx((index) => {
      obj = { style: lib.indexContainer, children: outer1_3(lib(outer1_1[6]).Text, obj) };
      obj = { variant: "heading-md/semibold", color: "text-brand", children: index.index };
      return outer1_3(outer1_2, obj);
    }, { index }),
    label: tip,
    subLabel: description,
    end
  });
};
