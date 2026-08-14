// Module ID: 5451
// Function ID: 5452
// Name: FormRadio
// Dependencies: [19, 17, 21, 4342, 5452, 5453, 2]
// Exports: default

// Module 5451 (FormRadio)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  return <Image style={callback().radio} source={importDefault(arg0.selected ? 5452 : 5453)} />;
};
