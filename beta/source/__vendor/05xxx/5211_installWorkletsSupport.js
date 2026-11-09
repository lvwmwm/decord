// Module ID: 5211
// Function ID: 5212
// Name: installWorkletsSupport
// Dependencies: [1705, 5212]
// Exports: installWorkletsSupport

// Module 5211 (installWorkletsSupport)
import _mod1705 from "module_1705" /* 1705 */;
import installedNitro1 from "installedNitro1" /* 5212 */;

let closure_2 = { code: "(function determine_Pnpm_installWorkletsSupportTs1(value){let[boxedNitroProxy]=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);})" };
let closure_3 = { code: "(function pack_Pnpm_installWorkletsSupportTs2(value){let[boxedNitroProxy]=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);})" };
let closure_4 = { code: "(function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();})" };

export function installWorkletsSupport() {
  let items;
  let items1;
  let items2;
  function determine_Pnpm_installWorkletsSupportTs1Factory(items) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = items;
    function determine(__remoteFunction) {
      const unboxResult = closure_1_0.unbox();
      return unboxResult.isHybridObject(__remoteFunction);
    }
    items = [tmp2];
    determine.__closure = items;
    determine.__workletHash = 9405163704609;
    determine.__initData = tmp;
    return determine;
  }
  function pack_Pnpm_installWorkletsSupportTs2Factory(items1) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = items1;
    function pack(arg0) {
      const unboxResult = closure_1_0.unbox();
      return unboxResult.box(arg0);
    }
    const items = [tmp2];
    pack.__closure = items;
    pack.__workletHash = 10245349147904;
    pack.__initData = tmp;
    return pack;
  }
  function unpack_Pnpm_installWorkletsSupportTs3Factory(items2) {
    let tmp;
    [tmp] = items2;
    function unpack(unbox) {
      return unbox.unbox();
    }
    unpack.__workletHash = 12389898692263;
    unpack.__initData = tmp;
    return unpack;
  }
  try {
    const tmp = require;
    const tmp2 = dependencyMap;
    const registerCustomSerializable = _mod1705.registerCustomSerializable;
    const NitroModules = installedNitro1.NitroModules;
    const boxResult = NitroModules.box(installedNitro1.NitroModules);
    const obj = { name: "nitro.HybridObject", determine: determine_Pnpm_installWorkletsSupportTs1Factory(items), pack: pack_Pnpm_installWorkletsSupportTs2Factory(items1), unpack: unpack_Pnpm_installWorkletsSupportTs3Factory(items2) };
    items = [closure_2, boxResult];
    items1 = [closure_3, boxResult];
    items2 = [closure_4];
    const result = registerCustomSerializable(obj);
  } catch (err) {
  }
}
