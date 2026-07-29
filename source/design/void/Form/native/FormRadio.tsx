// Module ID: 5236
// Function ID: 5237
// Name: FormRadio
// Dependencies: [19, 17, 21, 4189, 5237, 5238, 2]
// Exports: default

// Module 5236 (FormRadio)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  return <Image style={callback().radio} source={importDefault(arg0.selected ? 5237 : 5238)} />;
};
