// Module ID: 14594
// Function ID: 14595
// Name: withoutSetter
// Dependencies: [14595, 14598, 14580, 14602, 14603, 14599]

// Module 14594 (withoutSetter)
import _mod14580 from "module_14580" /* 14580 */;
import _mod14595 from "module_14595" /* 14595 */;
import _mod14602 from "module_14602" /* 14602 */;
import _mod14603 from "module_14603" /* 14603 */;
import prop from "module_14598" /* 14598 */;

let closure_2 = _mod14595("wks");
let _Symbol = _mod14580.Symbol;
if (prop) {
  let withoutSetter = _Symbol.for || _mod14580.Symbol;
  const tmp2 = _Symbol.for || _mod14580.Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = _mod14580.Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = _mod14602;
  }
}

export default (arg0) => {
  let _Symbol = dependencyMap;
  if (_mod14603(closure_2, arg0)) {
    return tmp2[arg0];
  } else {
    if (!tmp(14599)) {
      let tmp5 = withoutSetter(`Symbol.${arg0}`);
      tmp2[arg0] = tmp5;
    } else {
      const tmpResult = tmp(14603);
    }
    _Symbol = tmp(14580).Symbol;
    tmp5 = _Symbol[arg0];
  }
};
