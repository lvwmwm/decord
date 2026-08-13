// Module ID: 5430
// Function ID: 5431
// Name: FormRadio
// Dependencies: [19, 17, 21, 4342, 5431, 5432, 2]
// Exports: default

// Module 5430 (FormRadio)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles({ radio: { width: 22, height: 22 } });
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormRadio.tsx");

export default function FormRadio(selected) {
  return <Image style={callback().radio} source={importDefault(arg0.selected ? 5431 : 5432)} />;
};
