// Module ID: 5180
// Function ID: 45017
// Name: FormRadio
// Dependencies: [31, 27, 33, 4130, 5181, 5182, 2]
// Exports: default

// Module 5180 (FormRadio)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4 = _createForOfIteratorHelperLoose.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: callback().radio };
  if (selected.selected) {
    let tmp5 = 5181;
  } else {
    tmp5 = 5182;
  }
  obj.source = importDefault(tmp5);
  return <Image style={callback().radio} />;
};
