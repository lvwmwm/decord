// Module ID: 5331
// Function ID: 5332
// Name: FormRadio
// Dependencies: [19, 17, 21, 4285, 5332, 5333, 2]
// Exports: default

// Module 5331 (FormRadio)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  return <Image style={callback().radio} source={importDefault(arg0.selected ? 5332 : 5333)} />;
};
