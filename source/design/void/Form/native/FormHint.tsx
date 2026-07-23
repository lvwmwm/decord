// Module ID: 7502
// Function ID: 60164
// Name: FormHint
// Dependencies: [31, 27, 33, 4130, 689, 5164, 4126, 1273, 2]
// Exports: default

// Module 7502 (FormHint)
import result from "result";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { fontSize: 14, marginBottom: 0, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.formHintText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.redesignHorizontalPadding = { paddingHorizontal: 12 };
_createForOfIteratorHelperLoose.horizonatalPadding = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let children;
  let style;
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = _createForOfIteratorHelperLoose();
  if (React.useContext(require(5164) /* context */.RedesignCompatContext)) {
    let obj = { variant: "text-sm/medium", color: "text-muted" };
    let redesignHorizontalPadding = !flag;
    if (redesignHorizontalPadding) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    const items = [redesignHorizontalPadding, style];
    obj.style = items;
    obj.children = children;
    let tmp2Result = tmp2(tmp3(4126).Text, obj);
  } else {
    obj = {};
    const items1 = [tmp.formHintText, , ];
    let horizonatalPadding = !flag;
    if (horizonatalPadding) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    items1[1] = horizonatalPadding;
    items1[2] = style;
    obj.style = items1;
    obj.children = children;
    tmp2Result = tmp2(tmp3(1273).LegacyText, obj);
  }
  return tmp2Result;
};
