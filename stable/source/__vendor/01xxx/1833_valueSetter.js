// Module ID: 1833
// Function ID: 1834
// Name: valueSetter
// Dependencies: []
// Exports: valueSetter

// Module 1833 (valueSetter)
let tmp2;
const items = [{ code: "(function valueSetter_Pnpm_valueSetterTs1(mutable,value,forceUpdate=false){const previousAnimation=mutable._animation;if(previousAnimation){mutable._animation=null;if(!previousAnimation.finished){var _previousAnimation$ca;previousAnimation.cancelled=true;(_previousAnimation$ca=previousAnimation.callback)===null||_previousAnimation$ca===void 0||_previousAnimation$ca.call(previousAnimation,false);}}if(typeof value==='function'||value!==null&&typeof value==='object'&&value.onFrame!==undefined&&value.onStart!==undefined){const animation=typeof value==='function'?value():value;if(mutable._value===animation.current&&!animation.isHigherOrder&&!forceUpdate){var _animation$callback;(_animation$callback=animation.callback)===null||_animation$callback===void 0||_animation$callback.call(animation,true);return;}const initializeAnimation=function(timestamp){animation.onStart(animation,mutable.value,timestamp,previousAnimation);};const currentTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();initializeAnimation(currentTimestamp);const step=function(timestamp){if(animation.cancelled){return;}const finished=animation.onFrame(animation,timestamp);animation.timestamp=timestamp;mutable._value=animation.current;if(finished){var _animation$callback2;animation.finished=true;(_animation$callback2=animation.callback)===null||_animation$callback2===void 0||_animation$callback2.call(animation,true);}else{requestAnimationFrame(step);}};mutable._animation=animation;step(currentTimestamp);}else{if(mutable._value===value&&!forceUpdate){return;}mutable._value=value;}})" }];
[tmp2] = items;
function valueSetter(_animation, onFrame) {
  let closure_0 = _animation;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj;
  let step;
  _animation = _animation._animation;
  if (_animation) {
    _animation._animation = null;
    if (!_animation.finished) {
      _animation.cancelled = true;
      let callback = _animation.callback;
      if (callback != null) {
        callback(false);
      }
    }
  }
  if (typeof onFrame === "function") {
    obj = onFrame;
    if (typeof onFrame === "function") {
      obj = onFrame();
    }
    if (_animation._value === obj.current) {
      if (!obj.isHigherOrder) {
        if (!flag) {
          const callback2 = obj.callback;
          if (callback2 != null) {
            callback2(true);
          }
        }
      }
    }
    const tmp5 = global.__frameTimestamp || global._getAnimationTimestamp();
    obj.onStart(obj, _animation.value, tmp5, _animation);
    step = function step(timestamp) {
      if (!obj.cancelled) {
        obj.timestamp = timestamp;
        closure_0._value = obj.current;
        if (obj.onFrame(obj, timestamp)) {
          obj.finished = true;
          const callback = obj.callback;
          if (callback != null) {
            callback(true);
          }
        } else {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(step);
        }
      }
    };
    _animation._animation = obj;
    if (!obj.cancelled) {
      obj.timestamp = tmp5;
      _animation._value = obj.current;
      if (obj.onFrame(obj, tmp5)) {
        obj.finished = true;
        const callback3 = obj.callback;
        if (callback3 != null) {
          callback3(true);
        }
      } else {
        let _requestAnimationFrame = requestAnimationFrame;
        let animationFrame = requestAnimationFrame(step);
      }
    }
  } else {
    _animation._value = onFrame;
  }
}
valueSetter.__workletHash = 1294788161356;
valueSetter.__initData = tmp2;

export { valueSetter };
