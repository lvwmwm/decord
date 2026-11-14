// Module ID: 1950
// Function ID: 1951
// Name: EntryExitTransition
// Dependencies: [41, 42, 93, 95, 98, 1939, 1842, 1668, 1875]

// Module 1950 (EntryExitTransition)
import _mod1875 from "module_1875" /* 1875 */;
import Fade from "Fade" /* 1939 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let _undefined, _undefined2, size;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let c3 = c3_mod;
let closure_6 = { code: "(function pnpm_EntryExitTransitionTs1(values){let[enteringAnimation,exitingAnimation,delayFunction,delay,withSequence,withTiming,exitingDuration,logger,callback]=this.__closure;const enteringValues=enteringAnimation(values);const exitingValues=exitingAnimation(values);const animations={transform:[]};for(const prop of Object.keys(exitingValues.animations)){if(prop==='transform'){if(!Array.isArray(exitingValues.animations.transform)){continue;}exitingValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay,withSequence(value[transformProp],withTiming(exitingValues.initialValues.transform?exitingValues.initialValues.transform[index][transformProp]:0,{duration:0})))});}});}else{const sequence=enteringValues.animations[prop]!==undefined?[exitingValues.animations[prop],withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]]:[exitingValues.animations[prop],withTiming(Object.keys(values).includes(prop)?values[prop]:exitingValues.initialValues[prop],{duration:0})];animations[prop]=delayFunction(delay,withSequence(...sequence));}}for(const prop of Object.keys(enteringValues.animations)){if(prop==='transform'){if(!Array.isArray(enteringValues.animations.transform)){continue;}enteringValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay+exitingDuration,withSequence(withTiming(enteringValues.initialValues.transform?enteringValues.initialValues.transform[index][transformProp]:0,{duration:exitingDuration}),value[transformProp]))});}});}else if(animations[prop]!==undefined){continue;}else{animations[prop]=delayFunction(delay,withSequence(withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]));}}const mergedTransform=(Array.isArray(exitingValues.initialValues.transform)?exitingValues.initialValues.transform:[]).concat((Array.isArray(enteringValues.animations.transform)?enteringValues.animations.transform:[]).map(function(value){const objectKeys=Object.keys(value);if((objectKeys===null||objectKeys===void 0?void 0:objectKeys.length)<1){logger.error(\"${value} is not a valid Transform object\");return value;}const transformProp=objectKeys[0];const current=value[transformProp].current;if(typeof current==='string'){if(current.includes('deg')){return{[transformProp]:'0deg'};}else{return{[transformProp]:'0'};}}else if(transformProp.includes('translate')){return{[transformProp]:0};}else{return{[transformProp]:1};}}));return{initialValues:{...exitingValues.initialValues,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight,transform:mergedTransform},animations:{originX:delayFunction(delay+exitingDuration,withTiming(values.targetOriginX,{duration:exitingDuration})),originY:delayFunction(delay+exitingDuration,withTiming(values.targetOriginY,{duration:exitingDuration})),width:delayFunction(delay+exitingDuration,withTiming(values.targetWidth,{duration:exitingDuration})),height:delayFunction(delay+exitingDuration,withTiming(values.targetHeight,{duration:exitingDuration})),...animations},callback:callback};})" };
class EntryExitTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, EntryExitTransition);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(EntryExitTransition);
    let tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      let tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.enteringV = Fade.FadeIn;
    tmp3Result.exitingV = Fade.FadeOut;
    tmp3Result.build = () => {
      let callbackV;
      let enteringV;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const delayFunction = closure_0.getDelayFunction();
      ({ callbackV, enteringV } = closure_0);
      const delay = closure_0.getDelay();
      const exitingV = closure_0.exitingV;
      const exitingV2 = closure_0.exitingV;
      const buildResult = enteringV.build();
      let items = [closure_2_6, buildResult, exitingV.build(), delayFunction, delay, , , , , ];
      exitingV.build();
      const duration = exitingV2.getDuration();
      items[5] = EntryExitTransition(closure_2_1[6]).withSequence;
      items[6] = EntryExitTransition(closure_2_1[6]).withTiming;
      items[7] = duration;
      items[8] = EntryExitTransition(closure_2_1[7]).logger;
      items[9] = callbackV;
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
      function pnpm_EntryExitTransitionTs1(targetOriginX) {
        let closure_1;
        let combined;
        let logger;
        let obj3;
        let obj5;
        let obj6;
        let obj7;
        let obj8;
        let sum;
        let sum1;
        let sum2;
        let sum3;
        let transform2;
        let transform3;
        let tmp2 = _undefined(targetOriginX);
        _undefined = tmp2;
        let tmp3 = _undefined2(targetOriginX);
        _undefined2 = tmp3;
        let obj = { transform: [] };
        let keys = Object.keys(tmp3.animations);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp6 = nextResult;
          if ("transform" === nextResult) {
            let _Array = Array;
            if (Array.isArray(tmp3.animations.transform)) {
              let transform = tmp3.animations.transform;
              let item = transform.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let transform = obj.transform;
                  let num = 0;
                  let push = transform.push;
                  let tmp4 = c2;
                  let tmp5 = c3;
                  let tmp6 = c4;
                  let tmp7 = item[item10011];
                  let tmp8 = c5;
                  if (closure_1.initialValues.transform) {
                    num = closure_1.initialValues.transform[index][tmp2];
                  }
                  obj = {};
                  obj[item10011] = tmp4(tmp5, tmp6(tmp7, tmp8(num, { duration: 0 })));
                  let arr = push(obj);
                  continue;
                }
              });
            }
            continue;
          } else {
            let items1;
            if (undefined !== tmp2.animations[tmp6]) {
              let items = [tmp3.animations[tmp6], , ];
              items[1] = _undefined4(tmp2.initialValues[tmp6], { duration: 0 });
              items[2] = tmp2.animations[tmp6];
              items1 = items;
            } else {
              let tmp10;
              let tmp7 = nextResult;
              items1 = [tmp3.animations[tmp6], ];
              let _Object = Object;
              let tmp8 = _undefined4;
              let keys1 = Object.keys(targetOriginX);
              if (keys1.includes(tmp6)) {
                let tmp11 = nextResult;
                tmp10 = targetOriginX[tmp6];
              } else {
                let tmp9 = nextResult;
                tmp10 = tmp3.initialValues[tmp6];
              }
              items1[1] = tmp8(tmp10, { duration: 0 });
            }
            let items2 = [];
            let num = 0;
            let arraySpreadResult = HermesBuiltin.arraySpread(items2, items1, 0);
            obj[tmp6] = obj(c3, HermesBuiltin.apply(_undefined3, items2, undefined));
          }
          continue;
        }
        const keys2 = Object.keys(tmp2.animations);
        for (const item10081 of keys2) {
          let tmp25 = item10081;
          if ("transform" === item10081) {
            let _Array2 = Array;
            if (Array.isArray(tmp2.animations.transform)) {
              let transform1 = tmp2.animations.transform;
              let item1 = transform1.forEach((item, index) => {
                const keys = Object.keys(item);
                for (const item10011 of keys) {
                  let tmp2 = item10011;
                  let transform = obj.transform;
                  let num = 0;
                  let push = transform.push;
                  let tmp4 = c2;
                  let tmp6 = c6;
                  let sum = c3 + c6;
                  let tmp8 = c4;
                  let tmp9 = c5;
                  if (closure_0.initialValues.transform) {
                    num = closure_0.initialValues.transform[index][tmp2];
                  }
                  obj = {};
                  let obj2 = { duration: tmp6 };
                  obj[item10011] = tmp4(sum, tmp8(tmp9(num, obj2), item[tmp2]));
                  let arr = push(obj);
                  continue;
                }
              });
              continue;
            }
            continue;
          } else if (undefined !== obj[tmp25]) {
            continue;
          } else {
            obj[tmp25] = obj(c3, _undefined3(_undefined4(tmp2.initialValues[tmp25], { duration: 0 }), tmp2.animations[tmp25]));
          }
          continue;
        }
        if (Array.isArray(tmp3.initialValues.transform)) {
          transform2 = tmp3.initialValues.transform;
        } else {
          transform2 = [];
        }
        const concat = transform2.concat;
        if (Array.isArray(tmp2.animations.transform)) {
          transform3 = tmp2.animations.transform;
        } else {
          transform3 = [];
        }
        let obj2 = { initialValues: obj3, animations: size, callback };
        obj3 = { transform: combined };
        combined = concat(transform3.map((item) => {
          const keys = Object.keys(item);
          let length;
          if (keys != null) {
            length = keys.length;
          }
          if (length < 1) {
            logger.error("${value} is not a valid Transform object");
            return item;
          } else {
            let tmp2;
            const first = keys[0];
            const current = item[first].current;
            if (typeof current === "string") {
              let tmp3;
              obj = {};
              if (current.includes("deg")) {
                obj[first] = "0deg";
                tmp3 = obj;
              } else {
                obj[first] = "0";
                tmp3 = obj;
              }
              tmp2 = tmp3;
            } else {
              const obj2 = {};
              if (first.includes("translate")) {
                obj2[first] = 0;
                tmp2 = obj2;
              } else {
                obj2[first] = 1;
                tmp2 = obj2;
              }
            }
            return tmp2;
          }
        }));
        const merged = Object.assign(tmp3.initialValues);
        ({ currentOriginX: obj4.originX, currentOriginY: obj4.originY, currentWidth: obj4.width, currentHeight: obj4.height } = targetOriginX);
        size = { originX: obj(sum, _undefined4(targetOriginX.targetOriginX, obj5)), originY: obj(sum1, _undefined4(targetOriginX.targetOriginY, obj6)), width: obj(sum2, _undefined4(targetOriginX.targetWidth, obj7)), height: obj(sum3, _undefined4(targetOriginX.targetHeight, obj8)) };
        sum = c3 + duration;
        sum1 = c3 + duration;
        sum2 = c3 + duration;
        sum3 = c3 + duration;
        obj5 = { duration };
        obj6 = { duration };
        obj7 = { duration };
        obj8 = { duration };
        const merged1 = Object.assign(obj);
        return obj2;
      }
      let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
      pnpm_EntryExitTransitionTs1.__closure = items1;
      pnpm_EntryExitTransitionTs1.__workletHash = 14458531784903;
      pnpm_EntryExitTransitionTs1.__initData = tmp6;
      return pnpm_EntryExitTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(EntryExitTransition, _mod1875.BaseAnimationBuilder);
const entry = {
  key: "entering",
  value: function entering(enteringV) {
    this.enteringV = enteringV;
    return this;
  }
};
let items = [
  entry,
  {
    key: "exiting",
    value: function exiting(exitingV) {
      this.exitingV = exitingV;
      return this;
    }
  }
];
const entry1 = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = EntryExitTransition();
    return tmp;
  }
};
let items1 = [
  entry1,
  {
    key: "entering",
    value: function entering(arg0) {
      const instance = this.createInstance();
      return instance.entering(arg0);
    }
  },
  {
    key: "exiting",
    value: function exiting(arg0) {
      const instance = this.createInstance();
      return instance.exiting(arg0);
    }
  }
];
const importDefaultResultResult = _createClass(EntryExitTransition, items, items1);
importDefaultResultResult.presetName = "EntryExitTransition";
const EntryExitTransition_export = importDefaultResultResult;

export { EntryExitTransition_export as EntryExitTransition };
