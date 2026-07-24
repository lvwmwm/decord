// Module ID: 1653
// Function ID: 18374
// Name: BaseAnimationBuilder
// Dependencies: [6, 7, 1607, 1593, 1654, 1622]

// Module 1653 (BaseAnimationBuilder)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let closure_4 = { code: "function pnpm_BaseAnimationBuilderTs1(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}" };
let closure_5 = { code: "function pnpm_BaseAnimationBuilderTs2(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;}" };

export const BaseAnimationBuilder = (() => {
  class BaseAnimationBuilder {
    constructor() {
      tmp = outer1_2(this, BaseAnimationBuilder);
      this.reduceMotionV = BaseAnimationBuilder(outer1_1[2]).ReduceMotion.System;
      this.randomizeDelay = false;
      this.build = () => {
        const reanimatedError = new BaseAnimationBuilder(outer2_1[3]).ReanimatedError("Unimplemented method in child class.");
        throw reanimatedError;
      };
      return;
    }
  }
  let obj = {
    key: "duration",
    value: function duration(durationV) {
      this.durationV = durationV;
      return this;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "delay",
    value: function delay(delayV) {
      this.delayV = delayV;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "withCallback",
    value: function withCallback(callbackV) {
      this.callbackV = callbackV;
      return this;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "reduceMotion",
    value: function reduceMotion(reduceMotionV) {
      this.reduceMotionV = reduceMotionV;
      return this;
    }
  };
  items[4] = {
    key: "getDuration",
    value: function getDuration() {
      const durationV = this.durationV;
      let num = 300;
      if (null != durationV) {
        num = durationV;
      }
      return num;
    }
  };
  items[5] = {
    key: "randomDelay",
    value: function randomDelay() {
      this.randomizeDelay = true;
      return this;
    }
  };
  items[6] = {
    key: "getDelay",
    value: function getDelay() {
      const self = this;
      if (this.randomizeDelay) {
        const _Math = Math;
        const delayV2 = self.delayV;
        let num2 = 1000;
        const random = Math.random();
        if (null != delayV2) {
          num2 = delayV2;
        }
        let num = random * num2;
      } else {
        const delayV = self.delayV;
        num = 0;
        if (null != delayV) {
          num = delayV;
        }
      }
      return num;
    }
  };
  items[7] = {
    key: "getReduceMotion",
    value: function getReduceMotion() {
      return this.reduceMotionV;
    }
  };
  items[8] = {
    key: "getDelayFunction",
    value: function getDelayFunction() {
      const self = this;
      const reduceMotion = self.getReduceMotion();
      if (tmp) {
        /* worklet (recovered source) */ function pnpm_BaseAnimationBuilderTs1(delay,animation){const{withDelay,reduceMotion}=this.__closure;return withDelay(delay,animation,reduceMotion);}
        let obj = { withDelay: BaseAnimationBuilder(outer1_1[4]).withDelay, reduceMotion };
        pnpm_BaseAnimationBuilderTs1.__closure = obj;
        pnpm_BaseAnimationBuilderTs1.__workletHash = 15544853359686;
        pnpm_BaseAnimationBuilderTs1.__initData = outer1_4;
        let pnpm_BaseAnimationBuilderTs2 = pnpm_BaseAnimationBuilderTs1;
      } else {
        pnpm_BaseAnimationBuilderTs2 = /* worklet (recovered source) */ function pnpm_BaseAnimationBuilderTs2(_,animation){const{getReduceMotionFromConfig,reduceMotion}=this.__closure;animation.reduceMotion=getReduceMotionFromConfig(reduceMotion);return animation;};
        obj = { getReduceMotionFromConfig: BaseAnimationBuilder(outer1_1[5]).getReduceMotionFromConfig, reduceMotion };
        pnpm_BaseAnimationBuilderTs2.__closure = obj;
        pnpm_BaseAnimationBuilderTs2.__workletHash = 8417033392474;
        pnpm_BaseAnimationBuilderTs2.__initData = outer1_5;
      }
      return pnpm_BaseAnimationBuilderTs2;
    }
  };
  const items1 = [
    {
      key: "duration",
      value: function duration(arg0) {
        const instance = this.createInstance();
        return instance.duration(arg0);
      }
    },
    {
      key: "delay",
      value: function delay(arg0) {
        const instance = this.createInstance();
        return instance.delay(arg0);
      }
    },
    {
      key: "withCallback",
      value: function withCallback(arg0) {
        const instance = this.createInstance();
        return instance.withCallback(arg0);
      }
    },
    {
      key: "reduceMotion",
      value: function reduceMotion(arg0) {
        const instance = this.createInstance();
        return instance.reduceMotion(arg0);
      }
    },
    {
      key: "getDuration",
      value: function getDuration() {
        return 300;
      }
    },
    {
      key: "randomDelay",
      value: function randomDelay() {
        const instance = this.createInstance();
        return instance.randomDelay();
      }
    },
    {
      key: "build",
      value: function build(arg0) {
        const instance = this.createInstance();
        return instance.build();
      }
    }
  ];
  return callback(BaseAnimationBuilder, items, items1);
})();
