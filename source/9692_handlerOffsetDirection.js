// Module ID: 9692
// Function ID: 75381
// Name: handlerOffsetDirection
// Dependencies: []

// Module 9692 (handlerOffsetDirection)
let closure_0 = { code: "function handlerOffsetDirection_Pnpm_handleroffsetDirectionTs1(handlerOffset,fixedDirection){if(fixedDirection===\"negative\")return-1;if(fixedDirection===\"positive\")return 1;if(handlerOffset.value===0)return-1;return Math.sign(handlerOffset.value);}" };
arg5.handlerOffsetDirection = () => {
  function handlerOffsetDirection(handlerOffset, fixedDirection) {
    let num = -1;
    let num2 = -1;
    if ("negative" !== fixedDirection) {
      let num3 = 1;
      if ("positive" !== fixedDirection) {
        if (0 !== handlerOffset.value) {
          const _Math = Math;
          num = Math.sign(handlerOffset.value);
        }
        num3 = num;
      }
      num2 = num3;
    }
    return num2;
  }
  handlerOffsetDirection.__closure = {};
  handlerOffsetDirection.__workletHash = 4382236906699;
  handlerOffsetDirection.__initData = closure_0;
  return handlerOffsetDirection;
}();
