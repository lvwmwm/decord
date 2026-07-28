// Module ID: 5214
// Function ID: 45138
// Name: FormRadio
// Dependencies: [31, 27, 33, 4165, 5215, 5216, 2]
// Exports: default

// Module 5214 (FormRadio)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4 = _createForOfIteratorHelperLoose.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  const obj = { style: callback().radio };
  if (selected.selected) {
    let tmp5 = 5215;
  } else {
    tmp5 = 5216;
  }
  obj.source = importDefault(tmp5);
  return <Image style={callback().radio} />;
};
