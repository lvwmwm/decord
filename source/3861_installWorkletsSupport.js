// Module ID: 3861
// Function ID: 32108
// Name: installWorkletsSupport
// Dependencies: []

// Module 3861 (installWorkletsSupport)
let closure_2 = { code: "function determine_Pnpm_installWorkletsSupportTs1(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.isHybridObject(value);}" };
let closure_3 = { code: "function pack_Pnpm_installWorkletsSupportTs2(value){const{boxedNitroProxy}=this.__closure;const nitroProxy=boxedNitroProxy.unbox();return nitroProxy.box(value);}" };
let closure_4 = { code: "function unpack_Pnpm_installWorkletsSupportTs3(value){return value.unbox();}" };
arg5.installWorkletsSupport = function installWorkletsSupport() {
  const NitroModules = arg1(arg6[1]).NitroModules;
  const boxResult = NitroModules.box(arg1(arg6[1]).NitroModules);
  const arg1 = boxResult;
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
  const result = arg1(arg6[0]).registerCustomSerializable({ name: "nitro.HybridObject", determine, pack, unpack });
};
