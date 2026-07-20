// Module ID: 1718
// Function ID: 19297
// Name: ProgressTransitionManager
// Dependencies: []

// Module 1718 (ProgressTransitionManager)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Platform = arg1(dependencyMap[2]).Platform;
let closure_5 = { code: "function pnpm_ProgressTransitionManagerTs1(){const{viewTag,progressAnimation}=this.__closure;global.ProgressTransitionRegister.addProgressAnimation(viewTag,progressAnimation);}" };
let closure_6 = { code: "function pnpm_ProgressTransitionManagerTs2(){const{viewTag,isUnmounting}=this.__closure;global.ProgressTransitionRegister.removeProgressAnimation(viewTag,isUnmounting);}" };
let closure_7 = { code: "function pnpm_ProgressTransitionManagerTs3(event){const{lastProgressValue}=this.__closure;const progress=event.progress;if(progress===lastProgressValue){return;}lastProgressValue=progress;global.ProgressTransitionRegister.frame(progress);}" };
let closure_8 = { code: "function pnpm_ProgressTransitionManagerTs4(){global.ProgressTransitionRegister.onTransitionEnd();}" };
let closure_9 = { code: "function pnpm_ProgressTransitionManagerTs5(){global.ProgressTransitionRegister.onAndroidFinishTransitioning();}" };
let closure_10 = { code: "function createProgressTransitionRegister_Pnpm_ProgressTransitionManagerTs8(){const{IS_ANDROID}=this.__closure;const progressAnimations=new Map();const snapshots=new Map();const currentTransitions=new Set();const toRemove=new Set();let skipCleaning=false;let isTransitionRestart=false;const progressTransitionManager={addProgressAnimation:function(viewTag,progressAnimation){if(currentTransitions.size>0&&!progressAnimations.has(viewTag)){isTransitionRestart=!IS_ANDROID;}progressAnimations.set(viewTag,progressAnimation);},removeProgressAnimation:function(viewTag,isUnmounting){if(currentTransitions.size>0){isTransitionRestart=!IS_ANDROID;}if(isUnmounting){toRemove.add(viewTag);}else{progressAnimations.delete(viewTag);}},onTransitionStart:function(viewTag,snapshot){skipCleaning=isTransitionRestart;snapshots.set(viewTag,snapshot);currentTransitions.add(viewTag);progressTransitionManager.frame(0);},frame:function(progress){for(const viewTag of currentTransitions){const progressAnimation=progressAnimations.get(viewTag);if(!progressAnimation){continue;}const snapshot=snapshots.get(viewTag);progressAnimation(viewTag,snapshot,progress);}},onAndroidFinishTransitioning:function(){if(toRemove.size>0){progressTransitionManager.onTransitionEnd();}},onTransitionEnd:function(removeViews=false){if(currentTransitions.size===0){toRemove.clear();return;}if(skipCleaning){skipCleaning=false;isTransitionRestart=false;return;}for(const viewTag of currentTransitions){global._notifyAboutEnd(viewTag,removeViews);}currentTransitions.clear();if(isTransitionRestart){return;}snapshots.clear();if(toRemove.size>0){for(const viewTag of toRemove){progressAnimations.delete(viewTag);global._notifyAboutEnd(viewTag,removeViews);}toRemove.clear();}}};return progressTransitionManager;}" };
const tmp3 = () => {
  function createProgressTransitionRegister() {
    const map = new Map();
    const map1 = new Map();
    const set = new Set();
    const set1 = new Set();
    const obj = {
      addProgressAnimation(arg0, arg1) {
        if (set.size > 0) {
          !map.has(arg0);
        }
        const result = map.set(arg0, arg1);
      },
      removeProgressAnimation(arg0, arg1) {
        if (arg1) {
          set1.add(arg0);
        } else {
          map.delete(arg0);
        }
      },
      onTransitionStart(arg0, arg1) {
        const result = map1.set(arg0, arg1);
        set.add(arg0);
        obj.frame(0);
      },
      frame(arg0) {
        for (const item10007 of closure_2) {
          let tmp = item10007;
          let tmp2 = closure_0;
          let value = closure_0.get(item10007);
          if (value) {
            let tmp5 = value;
            let tmp6 = item10007;
            let tmp7 = closure_1;
            let tmp8 = arg0;
            let tmp4Result = tmp4(tmp, closure_1.get(tmp), arg0);
          }
        }
      },
      onAndroidFinishTransitioning() {
        if (set1.size > 0) {
          obj.onTransitionEnd();
        }
      },
      onTransitionEnd() {
        const tmp = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        if (0 !== set.size) {
          for (const item10016 of closure_2) {
            let tmp7 = closure_0;
            let tmp8 = tmp;
            let _notifyAboutEndResult = closure_0._notifyAboutEnd(item10016, tmp2);
          }
          set.clear();
          map1.clear();
          if (set1.size > 0) {
            for (const item10034 of closure_3) {
              let tmp17 = closure_0;
              let deleteResult = closure_0.delete(item10034);
              let tmp19 = closure_0;
              let tmp20 = tmp;
              let _notifyAboutEndResult1 = closure_0._notifyAboutEnd(item10034, tmp2);
            }
            set1.clear();
          }
        } else {
          set1.clear();
        }
      }
    };
    return obj;
  }
  createProgressTransitionRegister.__closure = { IS_ANDROID: true };
  createProgressTransitionRegister.__workletHash = 2226368593346;
  createProgressTransitionRegister.__initData = closure_10;
  return createProgressTransitionRegister;
}();
let obj = arg1(dependencyMap[5]);
if (obj.shouldBeUseWeb()) {
  function maybeThrowError() {
    if (!obj.isJest()) {
      const ReanimatedError = arg1(dependencyMap[6]).ReanimatedError;
      const prototype = ReanimatedError.prototype;
      const reanimatedError = new ReanimatedError("`ProgressTransitionRegister` is not available on non-native platform.");
      throw reanimatedError;
    }
    const obj = arg1(dependencyMap[5]);
  }
  const _Proxy = Proxy;
  obj = {
    get: maybeThrowError,
    set() {
        maybeThrowError();
        return false;
      }
  };
  const proxy = new Proxy({}, obj);
  global.ProgressTransitionRegister = proxy;
} else {
  /* worklet (recovered source) */ function pnpm_ProgressTransitionManagerTs9(){const{createProgressTransitionRegister}=this.__closure;global.ProgressTransitionRegister=createProgressTransitionRegister();}
  obj = { createProgressTransitionRegister: tmp3 };
  pnpm_ProgressTransitionManagerTs9.__closure = obj;
  pnpm_ProgressTransitionManagerTs9.__workletHash = 1488439266980;
  pnpm_ProgressTransitionManagerTs9.__initData = { code: "function pnpm_ProgressTransitionManagerTs9(){const{createProgressTransitionRegister}=this.__closure;global.ProgressTransitionRegister=createProgressTransitionRegister();}" };
  arg1(dependencyMap[3]).runOnUIImmediately(pnpm_ProgressTransitionManagerTs9)();
  const obj2 = arg1(dependencyMap[3]);
}

export const ProgressTransitionManager = () => {
  class ProgressTransitionManager {
    constructor() {
      tmp = closure_3(this, ProgressTransitionManager);
      this._sharedElementCount = 0;
      this._eventHandler = {};
      return;
    }
  }
  const global = ProgressTransitionManager;
  let obj = {
    key: "addProgressAnimation",
    value: function addProgressAnimation(viewTag, progressAnimation) {
      const ProgressTransitionManager = viewTag;
      /* worklet (recovered source) */ function pnpm_ProgressTransitionManagerTs1(){const{viewTag,progressAnimation}=this.__closure;global.ProgressTransitionRegister.addProgressAnimation(viewTag,progressAnimation);}
      pnpm_ProgressTransitionManagerTs1.__closure = { viewTag, progressAnimation };
      pnpm_ProgressTransitionManagerTs1.__workletHash = 1345064651573;
      pnpm_ProgressTransitionManagerTs1.__initData = closure_5;
      progressAnimation(closure_2[3]).runOnUIImmediately(pnpm_ProgressTransitionManagerTs1)();
      const result = this.registerEventHandlers();
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "removeProgressAnimation",
    value: function removeProgressAnimation(viewTag) {
      const self = this;
      const ProgressTransitionManager = viewTag;
      const tmp = arguments.length > 1 && undefined !== arguments[1];
      let tmp2 = !tmp;
      if (tmp) {
        tmp2 = arguments[1];
      }
      const result = self.unregisterEventHandlers();
      let obj = tmp2(closure_2[3]);
      /* worklet (recovered source) */ function pnpm_ProgressTransitionManagerTs2(){const{viewTag,isUnmounting}=this.__closure;global.ProgressTransitionRegister.removeProgressAnimation(viewTag,isUnmounting);}
      obj = { viewTag, isUnmounting: tmp2 };
      pnpm_ProgressTransitionManagerTs2.__closure = obj;
      pnpm_ProgressTransitionManagerTs2.__workletHash = 3239143402257;
      pnpm_ProgressTransitionManagerTs2.__initData = closure_6;
      obj.runOnUIImmediately(pnpm_ProgressTransitionManagerTs2)();
    }
  };
  items[1] = obj;
  obj = {
    key: "registerEventHandlers",
    value: function registerEventHandlers() {
      this._sharedElementCount = this._sharedElementCount + 1;
      const _eventHandler = this._eventHandler;
      if (!_eventHandler.isRegistered) {
        _eventHandler.isRegistered = true;
        let closure_0 = -1;
        let obj = callback(closure_2[4]);
        /* worklet (recovered source) */ function pnpm_ProgressTransitionManagerTs3(event){const{lastProgressValue}=this.__closure;const progress=event.progress;if(progress===lastProgressValue){return;}lastProgressValue=progress;global.ProgressTransitionRegister.frame(progress);}
        obj = { lastProgressValue: closure_0 };
        pnpm_ProgressTransitionManagerTs3.__closure = obj;
        pnpm_ProgressTransitionManagerTs3.__workletHash = 1831800135022;
        pnpm_ProgressTransitionManagerTs3.__initData = closure_7;
        _eventHandler.onTransitionProgress = obj.registerEventHandler(pnpm_ProgressTransitionManagerTs3, "onTransitionProgress");
        /* worklet (recovered source) */ function pnpm_ProgressTransitionManagerTs4(){global.ProgressTransitionRegister.onTransitionEnd();}
        pnpm_ProgressTransitionManagerTs4.__closure = {};
        pnpm_ProgressTransitionManagerTs4.__workletHash = 10114828892519;
        pnpm_ProgressTransitionManagerTs4.__initData = closure_8;
        _eventHandler.onAppear = callback(closure_2[4]).registerEventHandler(pnpm_ProgressTransitionManagerTs4, "onAppear");
        const obj3 = callback(closure_2[4]);
        /* worklet (recovered source) */ function pnpm_ProgressTransitionManagerTs5(){global.ProgressTransitionRegister.onAndroidFinishTransitioning();}
        pnpm_ProgressTransitionManagerTs5.__closure = {};
        pnpm_ProgressTransitionManagerTs5.__workletHash = 13733013860161;
        pnpm_ProgressTransitionManagerTs5.__initData = closure_9;
        _eventHandler.onDisappear = callback(closure_2[4]).registerEventHandler(pnpm_ProgressTransitionManagerTs5, "onFinishTransitioning");
        const obj4 = callback(closure_2[4]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "unregisterEventHandlers",
    value: function unregisterEventHandlers() {
      this._sharedElementCount = this._sharedElementCount - 1;
      if (0 === this._sharedElementCount) {
        const _eventHandler = this._eventHandler;
        _eventHandler.isRegistered = false;
        if (-1 !== _eventHandler.onTransitionProgress) {
          const result = callback(closure_2[4]).unregisterEventHandler(_eventHandler.onTransitionProgress);
          _eventHandler.onTransitionProgress = -1;
          const obj = callback(closure_2[4]);
        }
        if (-1 !== _eventHandler.onAppear) {
          const result1 = callback(closure_2[4]).unregisterEventHandler(_eventHandler.onAppear);
          _eventHandler.onAppear = -1;
          const obj2 = callback(closure_2[4]);
        }
        if (-1 !== _eventHandler.onDisappear) {
          const result2 = callback(closure_2[4]).unregisterEventHandler(_eventHandler.onDisappear);
          _eventHandler.onDisappear = -1;
          const obj3 = callback(closure_2[4]);
        }
        if (-1 !== _eventHandler.onSwipeDismiss) {
          const result3 = callback(closure_2[4]).unregisterEventHandler(_eventHandler.onSwipeDismiss);
          _eventHandler.onSwipeDismiss = -1;
          const obj4 = callback(closure_2[4]);
        }
      }
    }
  };
  return callback(ProgressTransitionManager, items);
}();
