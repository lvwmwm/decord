// Module ID: 11695
// Function ID: 11696
// Name: handlerOffsetDirection
// Dependencies: []
// Exports: handlerOffsetDirection

// Module 11695 (handlerOffsetDirection)
let tmp2;
const items = [{ code: "(function handlerOffsetDirection_Pnpm_handleroffsetDirectionTs1(handlerOffset,fixedDirection){if(fixedDirection===\"negative\")return-1;if(fixedDirection===\"positive\")return 1;if(handlerOffset.value===0)return-1;return Math.sign(handlerOffset.value);})" }];
[tmp2] = items;
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
handlerOffsetDirection.__workletHash = 6692803344618;
handlerOffsetDirection.__initData = tmp2;

export { handlerOffsetDirection };
