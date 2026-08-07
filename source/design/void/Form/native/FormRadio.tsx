// Module ID: 5389
// Function ID: 5390
// Name: FormRadio
// Dependencies: [19, 17, 21, 4302, 5390, 5391, 2]
// Exports: default

// Module 5389 (FormRadio)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  return <Image style={callback().radio} source={importDefault(arg0.selected ? 5390 : 5391)} />;
};
