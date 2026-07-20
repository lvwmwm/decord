// Module ID: 1733
// Function ID: 19431
// Name: pnpm_processBoxShadowTs1
// Dependencies: []

// Module 1733 (pnpm_processBoxShadowTs1)
/* worklet (recovered source) */ function pnpm_processBoxShadowTs1(value){return value.endsWith('px')||!isNaN(Number(value));}
pnpm_processBoxShadowTs1.__closure = {};
pnpm_processBoxShadowTs1.__workletHash = 6091944631530;
pnpm_processBoxShadowTs1.__initData = { code: "function pnpm_processBoxShadowTs1(value){return value.endsWith('px')||!isNaN(Number(value));}" };
let closure_3 = { code: "function parseBoxShadowString_Pnpm_processBoxShadowTs2(rawBoxShadows){const{isLength}=this.__closure;const result=[];for(const rawBoxShadow of rawBoxShadows.split(/,(?![^()]*\\))/).map(function(bS){return bS.trim();}).filter(function(bS){return bS!=='';})){const boxShadow={offsetX:0,offsetY:0};let offsetX=null;let offsetY=null;let keywordDetectedAfterLength=false;let lengthCount=0;const args=rawBoxShadow.split(/\\s+(?![^(]*\\))/);for(const arg of args){if(isLength(arg)){switch(lengthCount){case 0:offsetX=arg;lengthCount++;break;case 1:if(keywordDetectedAfterLength){return[];}offsetY=arg;lengthCount++;break;case 2:if(keywordDetectedAfterLength){return[];}boxShadow.blurRadius=arg;lengthCount++;break;case 3:if(keywordDetectedAfterLength){return[];}boxShadow.spreadDistance=arg;lengthCount++;break;default:return[];}}else if(arg==='inset'){if(boxShadow.inset){return[];}if(offsetX!==null){keywordDetectedAfterLength=true;}boxShadow.inset=true;continue;}else{if(boxShadow.color){return[];}if(offsetX!=null){keywordDetectedAfterLength=true;}boxShadow.color=arg;continue;}}if(offsetX===null||offsetY===null){return[];}boxShadow.offsetX=offsetX;boxShadow.offsetY=offsetY;result.push(boxShadow);}return result;}" };
let closure_4 = () => {
  function parseBoxShadowString(str) {
    const items = [];
    const parts = str.split(/,(?![^()]*\))/);
    const mapped = parts.map((str) => str.trim());
    const found = mapped.filter((arg0) => "" !== arg0);
    const iter = found[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = { 1650222282: false, 114185812: true };
      let tmp22 = null;
      let tmp20 = null;
      let flag = false;
      let num = 0;
      let parts1 = str.split(/\s+(?![^(]*\))/);
      let tmp32 = parts1;
      for (const item10029 of parts1) {
        let tmp33 = item10029;
        let tmp34 = closure_2;
        if (closure_2(item10029)) {
          let tmp10 = num;
          if (0 === num) {
            tmp22 = item10029;
            let tmp23 = num;
            num = num + 1;
          } else if (1 === num) {
            let tmp19 = flag;
            if (flag) {
              obj2.return();
              iter.return();
              return [];
            } else {
              tmp20 = item10029;
              let tmp21 = num;
              num = num + 1;
            }
          } else if (2 === num) {
            let tmp15 = flag;
            if (flag) {
              obj2.return();
              iter.return();
              return [];
            } else {
              let tmp16 = obj;
              let tmp17 = item10029;
              obj.blurRadius = tmp33;
              let tmp18 = num;
              num = num + 1;
            }
          } else if (3 === num) {
            let tmp11 = flag;
            if (flag) {
              obj2.return();
              iter.return();
              return [];
            } else {
              let tmp12 = obj;
              let tmp13 = item10029;
              obj.spreadDistance = tmp33;
              let tmp14 = num;
              num = num + 1;
            }
          } else {
            obj2.return();
            iter.return();
            return [];
          }
          // continue
        } else {
          let tmp2 = item10029;
          if ("inset" === tmp33) {
            let tmp7 = obj;
            if (obj.inset) {
              obj2.return();
              iter.return();
              return [];
            } else {
              let tmp8 = tmp22;
              if (null !== tmp22) {
                flag = true;
              }
              let tmp9 = obj;
              obj.inset = true;
              // continue
            }
          } else {
            let tmp3 = obj;
            if (obj.color) {
              obj2.return();
              iter.return();
              return [];
            } else {
              let tmp4 = tmp22;
              if (null != tmp22) {
                flag = true;
              }
              let tmp5 = obj;
              let tmp6 = item10029;
              obj.color = tmp33;
            }
          }
        }
        continue;
      }
      let tmp24 = tmp22;
      if (null !== tmp22) {
        let tmp25 = tmp20;
        if (null !== tmp20) {
          let tmp26 = obj;
          let tmp27 = tmp22;
          obj.offsetX = tmp22;
          let tmp28 = tmp20;
          obj.offsetY = tmp20;
          let tmp29 = items;
          let arr = items.push(obj);
          // continue
        }
      }
      iter.return();
      return [];
    }
    return items;
  }
  parseBoxShadowString.__closure = { isLength: pnpm_processBoxShadowTs1 };
  parseBoxShadowString.__workletHash = 13799106280870;
  parseBoxShadowString.__initData = closure_3;
  return parseBoxShadowString;
}();
let closure_5 = { code: "function parseLength_Pnpm_processBoxShadowTs3(length){const{isLength}=this.__closure;const argsWithUnitsRegex=/([+-]?\\d*(\\.\\d+)?)([\\w\\W]+)?/g;const match=argsWithUnitsRegex.exec(length);if(!match||!isLength(length)){return null;}return Number(match[1]);}" };
let closure_6 = () => {
  function parseLength(arg0) {
    const match = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g.exec(arg0);
    let NumberResult = null;
    if (match) {
      NumberResult = null;
      if (callback(arg0)) {
        const _Number = Number;
        NumberResult = Number(match[1]);
      }
    }
    return NumberResult;
  }
  parseLength.__closure = { isLength: pnpm_processBoxShadowTs1 };
  parseLength.__workletHash = 16787390997763;
  parseLength.__initData = closure_5;
  return parseLength;
}();
let closure_7 = { code: "function processBoxShadow_Pnpm_processBoxShadowTs4(props){const{parseBoxShadowString,parseLength}=this.__closure;const result=[];const rawBoxShadows=props.boxShadow;if(rawBoxShadows===null){return result;}let boxShadowList;if(typeof rawBoxShadows==='string'){boxShadowList=parseBoxShadowString(rawBoxShadows.replace(/\\n/g,' '));}else if(Array.isArray(rawBoxShadows)){boxShadowList=rawBoxShadows;}else{throw new ReanimatedError(\"Box shadow value must be an array of shadow objects or a string. Received: \"+JSON.stringify(rawBoxShadows));}for(const rawBoxShadow of boxShadowList){const parsedBoxShadow={offsetX:0,offsetY:0};let value;for(const arg in rawBoxShadow){switch(arg){case'offsetX':value=typeof rawBoxShadow.offsetX==='string'?parseLength(rawBoxShadow.offsetX):rawBoxShadow.offsetX;if(value===null){return[];}parsedBoxShadow.offsetX=value;break;case'offsetY':value=typeof rawBoxShadow.offsetY==='string'?parseLength(rawBoxShadow.offsetY):rawBoxShadow.offsetY;if(value===null){return[];}parsedBoxShadow.offsetY=value;break;case'spreadDistance':value=typeof rawBoxShadow.spreadDistance==='string'?parseLength(rawBoxShadow.spreadDistance):rawBoxShadow.spreadDistance;if(value===null){return[];}parsedBoxShadow.spreadDistance=value;break;case'blurRadius':value=typeof rawBoxShadow.blurRadius==='string'?parseLength(rawBoxShadow.blurRadius):rawBoxShadow.blurRadius;if(value===null||value<0){return[];}parsedBoxShadow.blurRadius=value;break;case'color':parsedBoxShadow.color=rawBoxShadow.color;break;case'inset':parsedBoxShadow.inset=rawBoxShadow.inset;}}result.push(parsedBoxShadow);}props.boxShadow=result;}" };
arg5.processBoxShadow = () => {
  function processBoxShadow(boxShadow) {
    const items = [];
    if (null === boxShadow.boxShadow) {
      return items;
    } else {
      if ("string" === typeof str) {
        let tmp2 = callback2(str.replace(/\n/g, " "));
      } else {
        const _Array = Array;
        tmp2 = str;
        if (!Array.isArray(str)) {
          const ReanimatedError = callback(closure_1[0]).ReanimatedError;
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          const prototype = ReanimatedError.prototype;
          const reanimatedError = new ReanimatedError("Box shadow value must be an array of shadow objects or a string. Received: " + JSON.stringify(str));
          throw reanimatedError;
        }
      }
      const iter = tmp2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp50 = nextResult;
        let obj = { 1650222282: false, 114185812: true };
        let tmp51 = nextResult;
        for (const key10047 in nextResult) {
          let tmp52 = key10047;
          if ("offsetX" === key10047) {
            let tmp39 = nextResult;
            if ("string" === typeof tmp50.offsetX) {
              let tmp41 = closure_6;
              let tmp42 = nextResult;
              let offsetX = closure_6(tmp50.offsetX);
            } else {
              let tmp40 = nextResult;
              offsetX = tmp50.offsetX;
            }
            if (null === offsetX) {
              iter.return();
              return [];
            } else {
              let tmp44 = obj;
              let tmp45 = offsetX;
              obj.offsetX = tmp43;
              // continue
            }
          } else {
            if ("offsetY" === key10047) {
              let tmp32 = nextResult;
              if ("string" === typeof tmp50.offsetY) {
                let tmp34 = closure_6;
                let tmp35 = nextResult;
                let offsetY = closure_6(tmp50.offsetY);
              } else {
                let tmp33 = nextResult;
                offsetY = tmp50.offsetY;
              }
              if (null === offsetY) {
                iter.return();
                return [];
              } else {
                let tmp37 = obj;
                let tmp38 = offsetY;
                obj.offsetY = tmp36;
                // continue
              }
            } else {
              if ("spreadDistance" === key10047) {
                let tmp25 = nextResult;
                if ("string" === typeof tmp50.spreadDistance) {
                  let tmp27 = closure_6;
                  let tmp28 = nextResult;
                  let spreadDistance = closure_6(tmp50.spreadDistance);
                } else {
                  let tmp26 = nextResult;
                  spreadDistance = tmp50.spreadDistance;
                }
                if (null === spreadDistance) {
                  iter.return();
                  return [];
                } else {
                  let tmp30 = obj;
                  let tmp31 = spreadDistance;
                  obj.spreadDistance = tmp29;
                  // continue
                }
              } else {
                if ("blurRadius" === key10047) {
                  let tmp17 = nextResult;
                  if ("string" === typeof tmp50.blurRadius) {
                    let tmp19 = closure_6;
                    let tmp20 = nextResult;
                    let blurRadius = closure_6(tmp50.blurRadius);
                  } else {
                    let tmp18 = nextResult;
                    blurRadius = tmp50.blurRadius;
                  }
                  let tmp21 = blurRadius;
                  if (null !== blurRadius) {
                    let tmp22 = blurRadius;
                    if (tmp21 >= 0) {
                      let tmp23 = obj;
                      let tmp24 = blurRadius;
                      obj.blurRadius = tmp21;
                      // continue
                    }
                  }
                  iter.return();
                  return [];
                } else {
                  if ("color" === key10047) {
                    let tmp15 = obj;
                    let tmp16 = nextResult;
                    obj.color = tmp50.color;
                    // continue
                  } else {
                    if ("inset" !== key10047) {
                      continue;
                    } else {
                      let tmp13 = obj;
                      let tmp14 = nextResult;
                      obj.inset = tmp50.inset;
                      // continue
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        let tmp46 = items;
        let tmp47 = obj;
        let arr = items.push(obj);
        // continue
      }
      boxShadow.boxShadow = items;
    }
  }
  processBoxShadow.__closure = { parseBoxShadowString: closure_4, parseLength: closure_6 };
  processBoxShadow.__workletHash = 5021783745910;
  processBoxShadow.__initData = closure_7;
  return processBoxShadow;
}();
