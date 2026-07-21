// Module ID: 1748
// Function ID: 19543
// Name: JsPerformance
// Dependencies: []
// Exports: PerformanceMonitor

// Module 1748 (JsPerformance)
let StyleSheet;
function JsPerformance(smoothingFrames) {
  let obj = require(closure_1[5]);
  const sharedValue = obj.useSharedValue(null);
  const require = sharedValue;
  const sharedValue1 = require(closure_1[5]).useSharedValue(0);
  closure_1 = callback2(callback5(smoothingFrames.smoothingFrames));
  const items = [sharedValue, sharedValue1];
  callback(() => {
    function loopAnimationFrame(arg0) {
      let closure_1 = 0;
      function loop() {
        const animationFrame = requestAnimationFrame((arg0) => {
          if (arg0 > 0) {
            callback(arg0, arg0);
          }
          const animationFrame = requestAnimationFrame(closure_2);
        });
      }
      loop();
    }((arg0, arg1) => {
      const result = 2 * callback(ref.current, Math.round(arg1));
      closure_0.value = result.toFixed(0);
    });
  }, items);
  const obj2 = require(closure_1[5]);
  /* worklet (recovered source) */ function pnpm_PerformanceMonitorTsx4(){const{jsFps}=this.__closure;var _jsFps$value;const text='JS: '+((_jsFps$value=jsFps.value)!==null&&_jsFps$value!==void 0?_jsFps$value:'N/A')+' ';return{text:text,defaultValue:text};}
  pnpm_PerformanceMonitorTsx4.__closure = { jsFps: sharedValue };
  pnpm_PerformanceMonitorTsx4.__workletHash = 12993491204154;
  pnpm_PerformanceMonitorTsx4.__initData = closure_14;
  obj = { style: closure_17.container };
  obj = { style: closure_17.text, animatedProps: require(closure_1[5]).useAnimatedProps(pnpm_PerformanceMonitorTsx4), editable: false };
  obj.children = callback3(closure_9, obj);
  return callback3(closure_4, obj);
}
function UiPerformance(smoothingFrames) {
  smoothingFrames = smoothingFrames.smoothingFrames;
  const require = smoothingFrames;
  let obj = require(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(null);
  const dependencyMap = sharedValue;
  let obj1 = require(dependencyMap[5]);
  const sharedValue1 = obj1.useSharedValue(null);
  /* worklet (recovered source) */ function pnpm_PerformanceMonitorTsx5({timestamp:timestamp}){const{circularBuffer,createCircularDoublesBuffer,smoothingFrames,completeBufferRoutine,uiFps}=this.__closure;if(circularBuffer.value===null){circularBuffer.value=createCircularDoublesBuffer(smoothingFrames);}timestamp=Math.round(timestamp);const currentFps=completeBufferRoutine(circularBuffer.value,timestamp);uiFps.value=currentFps.toFixed(0);}
  obj = { circularBuffer: sharedValue1, createCircularDoublesBuffer: closure_8, smoothingFrames, completeBufferRoutine: closure_13, uiFps: sharedValue };
  pnpm_PerformanceMonitorTsx5.__closure = obj;
  pnpm_PerformanceMonitorTsx5.__workletHash = 10137562113926;
  pnpm_PerformanceMonitorTsx5.__initData = closure_15;
  require(dependencyMap[5]).useFrameCallback(pnpm_PerformanceMonitorTsx5);
  const obj3 = require(dependencyMap[5]);
  /* worklet (recovered source) */ function pnpm_PerformanceMonitorTsx6(){const{uiFps}=this.__closure;var _uiFps$value;const text='UI: '+((_uiFps$value=uiFps.value)!==null&&_uiFps$value!==void 0?_uiFps$value:'N/A')+' ';return{text:text,defaultValue:text};}
  pnpm_PerformanceMonitorTsx6.__closure = { uiFps: sharedValue };
  pnpm_PerformanceMonitorTsx6.__workletHash = 1865752198941;
  pnpm_PerformanceMonitorTsx6.__initData = closure_16;
  obj = { style: closure_17.container };
  obj1 = { style: closure_17.text, animatedProps: require(dependencyMap[5]).useAnimatedProps(pnpm_PerformanceMonitorTsx6), editable: false };
  obj.children = callback3(closure_9, obj1);
  return callback3(closure_4, obj);
}
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);
importDefault(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
({ StyleSheet, View: closure_4 } = _module1);
const _module2 = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module2);
let closure_7 = { code: "function createCircularDoublesBuffer_Pnpm_PerformanceMonitorTsx1(size){return{next:0,buffer:new Float32Array(size),size:size,count:0,push:function(value){const oldValue=this.buffer[this.next];const oldCount=this.count;this.buffer[this.next]=value;this.next=(this.next+1)%this.size;this.count=Math.min(this.size,this.count+1);return oldCount===this.size?oldValue:null;},front:function(){const notEmpty=this.count>0;if(notEmpty){const current=this.next-1;const index=current<0?this.size-1:current;return this.buffer[index];}return null;},back:function(){const notEmpty=this.count>0;return notEmpty?this.buffer[this.next]:null;}};}" };
let closure_8 = () => {
  function createCircularDoublesBuffer(size) {
    const obj = { next: 0 };
    const float32Array = new Float32Array(size);
    obj.buffer = float32Array;
    obj.size = size;
    obj.count = 0;
    obj.push = function push(arg0) {
      this.buffer[this.next] = arg0;
      this.next = (this.next + 1) % this.size;
      this.count = Math.min(this.size, this.count + 1);
      let tmp = null;
      if (this.count === this.size) {
        tmp = this.buffer[this.next];
      }
      return tmp;
    };
    obj.front = function front() {
      const self = this;
      if (this.count > 0) {
        let diff = self.next - 1;
        if (diff < 0) {
          diff = self.size - 1;
        }
        return self.buffer[diff];
      } else {
        return null;
      }
    };
    obj.back = function back() {
      const self = this;
      let tmp = null;
      if (this.count > 0) {
        tmp = self.buffer[self.next];
      }
      return tmp;
    };
    return obj;
  }
  createCircularDoublesBuffer.__closure = {};
  createCircularDoublesBuffer.__workletHash = 7814494919003;
  createCircularDoublesBuffer.__initData = closure_7;
  return createCircularDoublesBuffer;
}();
const _module3 = require(dependencyMap[3]);
const result = _module3.addWhitelistedNativeProps({ text: true });
const _module4 = require(dependencyMap[4]);
let closure_9 = _module4.createAnimatedComponent(_module1.TextInput);
let closure_10 = { code: "function getFps_Pnpm_PerformanceMonitorTsx2(renderTimeInMs){return 1000/renderTimeInMs;}" };
let closure_11 = () => {
  function getFps(arg0) {
    return 1000 / arg0;
  }
  getFps.__closure = {};
  getFps.__workletHash = 14651351045012;
  getFps.__initData = closure_10;
  return getFps;
}();
let closure_12 = { code: "function completeBufferRoutine_Pnpm_PerformanceMonitorTsx3(buffer,timestamp){const{getFps}=this.__closure;var _buffer$push;timestamp=Math.round(timestamp);const droppedTimestamp=(_buffer$push=buffer.push(timestamp))!==null&&_buffer$push!==void 0?_buffer$push:timestamp;const measuredRangeDuration=timestamp-droppedTimestamp;return getFps(measuredRangeDuration/buffer.count);}" };
let closure_13 = () => {
  function completeBufferRoutine(arr) {
    const rounded = Math.round(arg1);
    arr = arr.push(rounded);
    let tmp3 = rounded;
    if (null != arr) {
      tmp3 = arr;
    }
    return callback((rounded - tmp3) / arr.count);
  }
  completeBufferRoutine.__closure = { getFps: closure_11 };
  completeBufferRoutine.__workletHash = 5653450315763;
  completeBufferRoutine.__initData = closure_12;
  return completeBufferRoutine;
}();
let closure_14 = { code: "function pnpm_PerformanceMonitorTsx4(){const{jsFps}=this.__closure;var _jsFps$value;const text='JS: '+((_jsFps$value=jsFps.value)!==null&&_jsFps$value!==void 0?_jsFps$value:'N/A')+' ';return{text:text,defaultValue:text};}" };
let closure_15 = { code: "function pnpm_PerformanceMonitorTsx5({timestamp:timestamp}){const{circularBuffer,createCircularDoublesBuffer,smoothingFrames,completeBufferRoutine,uiFps}=this.__closure;if(circularBuffer.value===null){circularBuffer.value=createCircularDoublesBuffer(smoothingFrames);}timestamp=Math.round(timestamp);const currentFps=completeBufferRoutine(circularBuffer.value,timestamp);uiFps.value=currentFps.toFixed(0);}" };
let closure_16 = { code: "function pnpm_PerformanceMonitorTsx6(){const{uiFps}=this.__closure;var _uiFps$value;const text='UI: '+((_uiFps$value=uiFps.value)!==null&&_uiFps$value!==void 0?_uiFps$value:'N/A')+' ';return{text:text,defaultValue:text};}" };
const obj = { <string:1636689489>: null, <string:53236355>: null, <string:140616468>: null, <string:76540993>: null, <string:1710182656>: null, fontVariant: [true] };
const styles = StyleSheet.create({ monitor: {}, header: {}, text: obj, container: {} });

export const PerformanceMonitor = function PerformanceMonitor(smoothingFrames) {
  smoothingFrames = smoothingFrames.smoothingFrames;
  let num = 20;
  if (undefined !== smoothingFrames) {
    num = smoothingFrames;
  }
  let obj = { style: closure_17.monitor };
  obj = { smoothingFrames: num };
  const items = [callback3(JsPerformance, obj), ];
  obj = { smoothingFrames: num };
  items[1] = callback3(UiPerformance, obj);
  obj.children = items;
  return callback4(closure_4, obj);
};
