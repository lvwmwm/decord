// Module ID: 1684
// Function ID: 18650
// Name: validateTransformOrigin
// Dependencies: []

// Module 1684 (validateTransformOrigin)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = { code: "function validateTransformOrigin_Pnpm_processTransformOriginTs1(transformOrigin){if(transformOrigin.length!==3){throw new ReanimatedError('Transform origin must have exactly 3 values.');}const[x,y,z]=transformOrigin;if(!(typeof x==='number'||typeof x==='string'&&x.endsWith('%'))){throw new ReanimatedError(\"Transform origin x-position must be a number or a percentage string. Passed value: \"+x+\".\");}if(!(typeof y==='number'||typeof y==='string'&&y.endsWith('%'))){throw new ReanimatedError(\"Transform origin y-position must be a number or a percentage string. Passed value: \"+y+\".\");}if(typeof z!=='number'){throw new ReanimatedError(\"Transform origin z-position must be a number. Passed value: \"+z+\".\");}}" };
let closure_4 = () => {
  function validateTransformOrigin(arg0) {
    if (3 !== arg0.length) {
      const ReanimatedError4 = callback(closure_1[1]).ReanimatedError;
      const prototype4 = ReanimatedError4.prototype;
      const reanimatedError4 = new ReanimatedError4("Transform origin must have exactly 3 values.");
      throw reanimatedError4;
    } else {
      const tmp30 = callback2(arg0, 3);
      const first = tmp30[0];
      if ("number" !== typeof first) {
        const ReanimatedError = callback(closure_1[1]).ReanimatedError;
        const _HermesInternal = HermesInternal;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("Transform origin x-position must be a number or a percentage string. Passed value: " + first + ".");
        throw reanimatedError;
      }
      if ("number" !== typeof tmp30[1]) {
        const ReanimatedError2 = callback(closure_1[1]).ReanimatedError;
        const _HermesInternal2 = HermesInternal;
        const prototype2 = ReanimatedError2.prototype;
        const reanimatedError2 = new ReanimatedError2("Transform origin y-position must be a number or a percentage string. Passed value: " + obj2 + ".");
        throw reanimatedError2;
      }
      if ("number" !== typeof tmp30[2]) {
        const ReanimatedError3 = callback(closure_1[1]).ReanimatedError;
        const _HermesInternal3 = HermesInternal;
        const prototype3 = ReanimatedError3.prototype;
        const reanimatedError3 = new ReanimatedError3("Transform origin z-position must be a number. Passed value: " + tmp31 + ".");
        throw reanimatedError3;
      }
    }
  }
  validateTransformOrigin.__closure = {};
  validateTransformOrigin.__workletHash = 6034608374885;
  validateTransformOrigin.__initData = closure_3;
  return validateTransformOrigin;
}();
let closure_5 = { code: "function processTransformOrigin_Pnpm_processTransformOriginTs2(transformOriginIn){const{INDEX_X,INDEX_Z,INDEX_Y,__DEV__,validateTransformOrigin}=this.__closure;let transformOrigin=Array.isArray(transformOriginIn)?transformOriginIn:['50%','50%',0];if(typeof transformOriginIn==='string'){const transformOriginString=transformOriginIn;const regex=/(top|bottom|left|right|center|\\d+(?:%|px)|0)/gi;const transformOriginArray=['50%','50%',0];let index=INDEX_X;let matches;while(matches=regex.exec(transformOriginString)){let nextIndex=index+1;const value=matches[0];const valueLower=value.toLowerCase();switch(valueLower){case'left':case'right':{if(index!==INDEX_X){throw new ReanimatedError(\"Transform-origin \"+value+\" can only be used for x-position\");}transformOriginArray[INDEX_X]=valueLower==='left'?0:'100%';break;}case'top':case'bottom':{if(index===INDEX_Z){throw new ReanimatedError(\"Transform-origin \"+value+\" can only be used for y-position\");}transformOriginArray[INDEX_Y]=valueLower==='top'?0:'100%';if(index===INDEX_X){const horizontal=regex.exec(transformOriginString);if(horizontal==null){break;}switch(horizontal===null||horizontal===void 0?void 0:horizontal[0].toLowerCase()){case'left':transformOriginArray[INDEX_X]=0;break;case'right':transformOriginArray[INDEX_X]='100%';break;case'center':transformOriginArray[INDEX_X]='50%';break;default:throw new ReanimatedError(\"Could not parse transform-origin: \"+transformOriginString);}nextIndex=INDEX_Z;}break;}case'center':{if(index===INDEX_Z){throw new ReanimatedError(\"Transform-origin value \"+value+\" cannot be used for z-position\");}transformOriginArray[index]='50%';break;}default:{if(value.endsWith('%')){transformOriginArray[index]=value;}else{const numericValue=parseFloat(value);if(isNaN(numericValue)){throw new ReanimatedError(\"Invalid numeric value in transform-origin: \"+value);}transformOriginArray[index]=numericValue;}break;}}index=nextIndex;}transformOrigin=transformOriginArray;}if(typeof transformOriginIn!=='string'&&!Array.isArray(transformOriginIn)){throw new ReanimatedError(\"Invalid transformOrigin type: \"+typeof transformOriginIn);}if(__DEV__){validateTransformOrigin(transformOrigin);}return transformOrigin;}" };

export const processTransformOrigin = () => {
  function processTransformOrigin(arg0) {
    let str;
    let items = arg0;
    if (!Array.isArray(arg0)) {
      items = [];
    }
    if ("string" === typeof arg0) {
      const obj = /(top|bottom|left|right|center|\d+(?:%|px)|0)/gi;
      const items1 = [];
      let match = obj.exec(arg0);
      let num4 = 0;
      items = items1;
      if (match) {
        while (true) {
          let sum = num4 + 1;
          str = match[0];
          let formatted = str.toLowerCase();
          if ("left" !== formatted) {
            if ("right" !== formatted) {
              if ("top" !== formatted) {
                if ("bottom" !== formatted) {
                  if ("center" === formatted) {
                    if (2 === num4) {
                      let tmp12 = callback;
                      let tmp13 = closure_1;
                      let ReanimatedError2 = callback(closure_1[1]).ReanimatedError;
                      let _HermesInternal2 = HermesInternal;
                      let str3 = "Transform-origin value ";
                      let str4 = " cannot be used for z-position";
                      let prototype2 = ReanimatedError2.prototype;
                      let tmp14 = new.target;
                      let tmp15 = new.target;
                      let reanimatedError2 = new ReanimatedError2("Transform-origin value " + str + " cannot be used for z-position");
                      let tmp17 = reanimatedError2;
                      throw reanimatedError2;
                    } else {
                      items1[num4] = "50%";
                      let num = sum;
                      let tmp5 = tmp32;
                      let parsed = tmp33;
                    }
                  } else if (str.endsWith("%")) {
                    items1[num4] = str;
                    num = sum;
                    tmp5 = tmp32;
                    parsed = tmp33;
                  } else {
                    let _parseFloat = parseFloat;
                    parsed = parseFloat(str);
                    let _isNaN = isNaN;
                    if (isNaN(parsed)) {
                      break;
                    } else {
                      items1[num4] = parsed;
                      num = sum;
                      tmp5 = tmp32;
                    }
                  }
                }
              }
              if (2 === num4) {
                let tmp25 = callback;
                let tmp26 = closure_1;
                let ReanimatedError4 = callback(closure_1[1]).ReanimatedError;
                let _HermesInternal4 = HermesInternal;
                let str7 = "Transform-origin ";
                let str8 = " can only be used for y-position";
                let prototype4 = ReanimatedError4.prototype;
                let tmp27 = new.target;
                let tmp28 = new.target;
                let reanimatedError4 = new ReanimatedError4("Transform-origin " + str + " can only be used for y-position");
                let tmp30 = reanimatedError4;
                throw reanimatedError4;
              } else {
                let num2 = "100%";
                if ("top" === formatted) {
                  num2 = 0;
                }
                items1[1] = num2;
                num = sum;
                tmp5 = tmp32;
                parsed = tmp33;
                if (0 === num4) {
                  let match1 = obj.exec(arg0);
                  num = sum;
                  tmp5 = match1;
                  parsed = tmp33;
                  if (null != match1) {
                    let formatted1;
                    if (null != match1) {
                      let str5 = match1[0];
                      formatted1 = str5.toLowerCase();
                    }
                    if ("left" === formatted1) {
                      items1[0] = 0;
                      num = 2;
                      tmp5 = match1;
                      parsed = tmp33;
                    } else if ("right" === formatted1) {
                      items1[0] = "100%";
                      num = 2;
                      tmp5 = match1;
                      parsed = tmp33;
                    } else if ("center" === formatted1) {
                      items1[0] = "50%";
                      num = 2;
                      tmp5 = match1;
                      parsed = tmp33;
                    } else {
                      let tmp19 = callback;
                      let tmp20 = closure_1;
                      let ReanimatedError3 = callback(closure_1[1]).ReanimatedError;
                      let _HermesInternal3 = HermesInternal;
                      let str6 = "Could not parse transform-origin: ";
                      let prototype3 = ReanimatedError3.prototype;
                      let tmp21 = new.target;
                      let tmp22 = new.target;
                      let reanimatedError3 = new ReanimatedError3("Could not parse transform-origin: " + arg0);
                      let tmp24 = reanimatedError3;
                      throw reanimatedError3;
                    }
                  }
                }
              }
            }
            match = obj.exec(arg0);
            num4 = num;
            let tmp32 = tmp5;
            let tmp33 = parsed;
            items = items1;
          }
          if (0 !== num4) {
            let tmp40 = callback;
            let tmp41 = closure_1;
            let ReanimatedError6 = callback(closure_1[1]).ReanimatedError;
            let _HermesInternal5 = HermesInternal;
            let str10 = "Transform-origin ";
            let str11 = " can only be used for x-position";
            let prototype6 = ReanimatedError6.prototype;
            let tmp42 = new.target;
            let tmp43 = new.target;
            let reanimatedError6 = new ReanimatedError6("Transform-origin " + str + " can only be used for x-position");
            let tmp45 = reanimatedError6;
            throw reanimatedError6;
          } else {
            let num3 = "100%";
            if ("left" === formatted) {
              num3 = 0;
            }
            items1[0] = num3;
            num = sum;
            tmp5 = tmp32;
            parsed = tmp33;
          }
        }
        const ReanimatedError = callback(closure_1[1]).ReanimatedError;
        const _HermesInternal = HermesInternal;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("Invalid numeric value in transform-origin: " + str);
        throw reanimatedError;
      }
    }
    if ("string" !== typeof arg0) {
      const _Array = Array;
      if (!Array.isArray(arg0)) {
        const ReanimatedError5 = callback(closure_1[1]).ReanimatedError;
        const prototype5 = ReanimatedError5.prototype;
        const reanimatedError5 = new ReanimatedError5("Invalid transformOrigin type: " + tmp);
        throw reanimatedError5;
      }
    }
    return items;
  }
  processTransformOrigin.__closure = { validateTransformOrigin: closure_4 };
  processTransformOrigin.__workletHash = 11541675557002;
  processTransformOrigin.__initData = closure_5;
  return processTransformOrigin;
}();
