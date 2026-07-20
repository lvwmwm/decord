// Module ID: 1620
// Function ID: 18015
// Name: valueSetter
// Dependencies: []

// Module 1620 (valueSetter)
let closure_1 = { code: "function valueSetter_Pnpm_valueSetterTs1(mutable,value,forceUpdate=false){const previousAnimation=mutable._animation;if(previousAnimation){previousAnimation.cancelled=true;mutable._animation=null;}if(typeof value==='function'||value!==null&&typeof value==='object'&&value.onFrame!==undefined){const animation=typeof value==='function'?value():value;if(mutable._value===animation.current&&!animation.isHigherOrder&&!forceUpdate){animation.callback&&animation.callback(true);return;}const initializeAnimation=function(timestamp){animation.onStart(animation,mutable.value,timestamp,previousAnimation);};const currentTimestamp=global.__frameTimestamp||global._getAnimationTimestamp();initializeAnimation(currentTimestamp);const step=function(newTimestamp){const timestamp=newTimestamp<(animation.timestamp||0)?animation.timestamp:newTimestamp;if(animation.cancelled){animation.callback&&animation.callback(false);return;}const finished=animation.onFrame(animation,timestamp);animation.finished=true;animation.timestamp=timestamp;mutable._value=animation.current;if(finished){animation.callback&&animation.callback(true);}else{requestAnimationFrame(step);}};mutable._animation=animation;step(currentTimestamp);}else{if(mutable._value===value&&!forceUpdate){return;}mutable._value=value;}}" };
arg5.valueSetter = () => {
  function valueSetter(_animation, value, arg2) {
    const tmp = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
    _animation = _animation._animation;
    if (_animation) {
      _animation.cancelled = true;
      _animation._animation = null;
    }
    if ("function" === typeof value) {
      let obj = value;
      if (tmp4) {
        obj = value();
      }
      if (_animation._value === obj.current) {
        if (!obj.isHigherOrder) {
          if (!tmp) {
            if (obj.callback) {
              obj.callback(true);
            }
          }
        }
      }
      let __frameTimestamp = _animation.__frameTimestamp;
      if (!__frameTimestamp) {
        __frameTimestamp = _animation._getAnimationTimestamp();
      }
      obj.onStart(obj, _animation.value, __frameTimestamp, _animation);
      function step(__frameTimestamp) {
        let timestamp = __frameTimestamp;
        if (timestamp < tmp) {
          timestamp = obj.timestamp;
        }
        if (obj.cancelled) {
          if (obj.callback) {
            obj.callback(false);
          }
        } else {
          obj.finished = true;
          obj.timestamp = timestamp;
          __frameTimestamp._value = obj.current;
          if (obj.onFrame(obj, timestamp)) {
            if (obj.callback) {
              obj.callback(true);
            }
          } else {
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(step);
          }
        }
      }
      _animation._animation = obj;
      step(__frameTimestamp);
    } else {
      _animation._value = value;
    }
  }
  valueSetter.__closure = {};
  valueSetter.__workletHash = 13584629644803;
  valueSetter.__initData = closure_1;
  return valueSetter;
}();
