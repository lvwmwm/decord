// Module ID: 638
// Function ID: 639
// Dependencies: [610, 639, 615, 640, 641, 642, 522]

// Module 638
import _mod615 from "module_615" /* 615 */;
import _mod640 from "module_640" /* 640 */;
import _mod641 from "module_641" /* 641 */;
import _mod642 from "module_642" /* 642 */;
import module_610_mod from "module_610" /* 610 */;
import module_522_mod from "module_522" /* 522 */;
import module_639_mod from "module_639" /* 639 */;

let module_610 = module_610_mod;
module_610(module_639);
let module_610 = module_610_mod;
const module_615 = module_610(_mod615);
let module_610 = module_610_mod;
const module_640 = module_610(_mod640);
let module_610 = module_610_mod;
const module_641 = module_610(_mod641);
let module_610 = module_610_mod;
const module_642 = module_610(_mod642);
let module_522 = module_522_mod;
let module_639 = module_639_mod;
if (module_639) {
  const _ArrayBuffer = ArrayBuffer;
  const _module6 = module_639;
  const arrayBuffer = new ArrayBuffer(1);
  const _module61 = new _module6(arrayBuffer);
  module_639 = module_522(_module61) != "[object DataView]";
}
if (!module_639) {
  let _module7 = _mod615;
  if (_module7) {
    const tmp20 = new _mod615();
    _module7 = module_522(tmp20) != "[object Map]";
  }
  module_639 = _module7;
}
if (!module_639) {
  let _module8 = _mod640;
  if (_module8) {
    const _module9 = _mod640;
    _module8 = module_522(_module9.resolve()) != "[object Promise]";
  }
  module_639 = _module8;
}
if (!module_639) {
  let _module10 = _mod641;
  if (_module10) {
    const tmp26 = new _mod641();
    _module10 = module_522(tmp26) != "[object Set]";
  }
  module_639 = _module10;
}
if (!module_639) {
  let _module11 = _mod642;
  if (_module11) {
    const tmp31 = new _mod642();
    _module11 = module_522(tmp31) != "[object WeakMap]";
  }
  module_639 = _module11;
}
if (module_639) {
  module_522 = function v(_module61) {
    const tmp3 = module_522(_module61);
    let constructor;
    if ("[object Object]" == tmp3) {
      constructor = _module61.constructor;
    }
    let str = "";
    if (constructor) {
      str = module_610(constructor);
    }
    if (str) {
      if (module_639 === str) {
        return "[object DataView]";
      } else if (module_615 === str) {
        return "[object Map]";
      } else if (module_640 === str) {
        return "[object Promise]";
      } else if (module_641 === str) {
        return "[object Set]";
      } else if (module_642 === str) {
        return "[object WeakMap]";
      }
    }
    return tmp3;
  };
}

export default module_522;
