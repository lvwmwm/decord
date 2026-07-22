// Module ID: 9694
// Function ID: 75408
// Name: omitZero
// Dependencies: []

// Module 9694 (omitZero)
let closure_0 = { code: "function omitZero_Pnpm_computeOffsetIfDataChangedTs1(a,b){if(a===0)return 0;return b;}" };
const tmp2 = () => {
  function omitZero(arg0, arg1) {
    let num = 0;
    if (0 !== arg0) {
      num = arg1;
    }
    return num;
  }
  omitZero.__closure = {};
  omitZero.__workletHash = 6139220182928;
  omitZero.__initData = closure_0;
  return omitZero;
}();
let closure_2 = { code: "function computeOffsetIfDataChanged_Pnpm_computeOffsetIfDataChangedTs2(params){const{omitZero}=this.__closure;const{direction:direction,handlerOffset:_handlerOffset,size:size,previousLength:previousLength,currentLength:currentLength}=params;let handlerOffset=_handlerOffset;let positionIndex;let round;const isPositive=direction<0;if(isPositive){positionIndex=Math.abs(handlerOffset)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)));}else{positionIndex=(Math.abs(handlerOffset)-size)/size;round=Number.parseInt(String(omitZero(previousLength,positionIndex/previousLength)))+1;}const prevOffset=omitZero(previousLength,positionIndex%previousLength);const prevIndex=isPositive?prevOffset:previousLength-prevOffset-1;const changedLength=round*(currentLength-previousLength);const changedOffset=changedLength*size;if(prevIndex>currentLength-1&&currentLength<previousLength){if(isPositive)handlerOffset=(currentLength-1)*size*direction;else handlerOffset=(currentLength-1)*size*-1;}else{handlerOffset+=changedOffset*direction;}return handlerOffset;}" };
arg5.omitZero = tmp2;
arg5.computeOffsetIfDataChanged = () => {
  function computeOffsetIfDataChanged(arg0) {
    let currentLength;
    let direction;
    let handlerOffset;
    let previousLength;
    let size;
    ({ direction, handlerOffset, size, previousLength, currentLength } = arg0);
    const absolute = Math.abs(handlerOffset);
    if (direction < 0) {
      const result = absolute / size;
      const _Number2 = Number;
      const _String2 = String;
      let parsed = Number.parseInt(String(callback(previousLength, result / previousLength)));
      let result1 = result;
    } else {
      result1 = (absolute - size) / size;
      const _Number = Number;
      const _String = String;
      parsed = Number.parseInt(String(callback(previousLength, result1 / previousLength))) + 1;
    }
    const tmp8 = callback(previousLength, result1 % previousLength);
    let diff = tmp8;
    if (direction >= 0) {
      diff = previousLength - tmp8 - 1;
    }
    if (diff > currentLength - 1) {
      if (currentLength < previousLength) {
        const result2 = (currentLength - 1) * size;
        if (tmp) {
          let result3 = result2 * direction;
        } else {
          result3 = result2 * -1;
        }
      }
    }
    return handlerOffset + parsed * (currentLength - previousLength) * size * direction;
  }
  computeOffsetIfDataChanged.__closure = { omitZero: tmp2 };
  computeOffsetIfDataChanged.__workletHash = 15766064123809;
  computeOffsetIfDataChanged.__initData = closure_2;
  return computeOffsetIfDataChanged;
}();
