// Module ID: 10295
// Function ID: 79513
// Name: HighlightText
// Dependencies: [31, 653, 33, 4130, 3974, 689, 1273, 2]
// Exports: default

// Module 10295 (HighlightText)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { fontFamily: require("ME").Fonts.PRIMARY_BOLD };
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexOpacityToRgba(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300, 0.3);
_createForOfIteratorHelperLoose.color = require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG;
_createForOfIteratorHelperLoose.text = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  const tmp = _createForOfIteratorHelperLoose();
  return jsx(require(1273) /* Button */.LegacyText, { style: _createForOfIteratorHelperLoose().text, children: children.children });
};
