// Module ID: 5429
// Function ID: 5430
// Name: FormRadio
// Dependencies: [19, 17, 21, 4344, 5430, 5431, 2]
// Exports: default

// Module 5429 (FormRadio)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  return <Image style={callback().radio} source={importDefault(arg0.selected ? 5430 : 5431)} />;
};
