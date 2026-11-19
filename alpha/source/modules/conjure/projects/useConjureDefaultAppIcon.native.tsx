// Module ID: 11810
// Function ID: 11811
// Name: useConjureDefaultAppIcon
// Dependencies: [19, 5356, 575, 11811, 2]
// Exports: default

// Module 11810 (useConjureDefaultAppIcon)
import conjureDefaultAppIcon2 from "conjureDefaultAppIcon" /* 11811 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureDefaultAppIcon.native.tsx");

export default function useConjureDefaultAppIcon(arg0, arg1) {
  let closure_0;
  let closure_1;
  let token;
  _require = arg0;
  importDefault = arg1;
  let obj = require("useToken");
  token = obj.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const items = [arg0, arg1, token];
  return react.useMemo(() => {
    const obj = conjureDefaultAppIcon2;
    const conjureDefaultAppIcon = obj.getConjureDefaultAppIcon(closure_0, closure_1);
    const color = conjureDefaultAppIcon.color;
    const obj2 = { character: conjureDefaultAppIcon.character };
    const obj3 = conjureDefaultAppIcon2;
    const merged = Object.assign(obj3.getConjureDefaultAppIconColors(color, token));
    return obj2;
  }, items);
};
