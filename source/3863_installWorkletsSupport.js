// Module ID: 3863
// Function ID: 32116
// Name: installWorkletsSupport
// Dependencies: [3864]

// Module 3863 (installWorkletsSupport)
let require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function determine_Pnpm_installWorkletsSupportTs1(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);}" };
let closure_3 = { code: "function pack_Pnpm_installWorkletsSupportTs2(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);}" };
let closure_4 = { code: "function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();}" };
arg5.installWorkletsSupport = function installWorkletsSupport() {
  const NitroModules = require(dependencyMap[1]).NitroModules;
  const boxResult = NitroModules.box(require(dependencyMap[1]).NitroModules);
  require = boxResult;
  function determine(arg0) {
    return boxResult.unbox().isHybridObject(arg0);
  }
  determine.__closure = { boxedNitroProxy: boxResult };
  determine.__workletHash = 17379885884344;
  determine.__initData = closure_2;
  function pack(arg0) {
    return boxResult.unbox().box(arg0);
  }
  pack.__closure = { boxedNitroProxy: boxResult };
  pack.__workletHash = 15686149812025;
  pack.__initData = closure_3;
  function unpack(items, rgb) {
    return items.unbox();
  }
  unpack.__closure = {};
  unpack.__workletHash = 16222078380838;
  unpack.__initData = closure_4;
  const result = require(3864) /* getInstalledNitro */.registerCustomSerializable({ name: "nitro.HybridObject", determine, pack, unpack });
};
