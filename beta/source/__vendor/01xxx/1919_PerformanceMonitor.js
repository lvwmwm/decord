// Module ID: 1919
// Function ID: 1920
// Name: PerformanceMonitor
// Dependencies: [19, 17, 21, 1821, 1885]
// Exports: PerformanceMonitor

// Module 1919 (PerformanceMonitor)
import _mod1885 from "module_1885" /* 1885 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import NativeEventsManager from "NativeEventsManager" /* 1821 */;

let closure_1_0, dependencyMap;

let StyleSheet;
let TextInput;
let c2;
let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
function push(arg0) {
  this.buffer[this.next] = arg0;
  this.next = (this.next + 1) % this.size;
  const count = this.count;
  const tmp = this.buffer[this.next];
  this.count = Math.min(this.size, this.count + 1);
  let tmp2 = null;
  if (count === this.size) {
    tmp2 = tmp;
  }
  return tmp2;
}
function front() {
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
}
function back() {
  const self = this;
  let tmp = null;
  if (this.count > 0) {
    tmp = self.buffer[self.next];
  }
  return tmp;
}
function JsPerformance(smoothingFrames) {
  let closure_1;
  let float32Array;
  let obj4;
  let tmp15;
  let tmp16;
  let tmpResult;
  smoothingFrames = smoothingFrames.smoothingFrames;
  let sharedValue;
  dependencyMap = undefined;
  const obj = sharedValue(1885);
  const tmp = sharedValue;
  sharedValue = obj.useSharedValue(null);
  sharedValue(1885);
  if (typeof createCircularDoublesBuffer === "function") {
    const _Float32Array = Float32Array;
    const self = this;
    const self2 = this;
    const tmp8 = smoothingFrames;
    const obj2 = { next: 0, buffer: float32Array, size: smoothingFrames, count: 0, push, front, back };
    float32Array = new Float32Array(smoothingFrames);
    dependencyMap = tmp6(obj2);
    const items = [sharedValue, tmp5];
    closure_2(() => {
      const f141909 = (arg0) => {
        if (closure_1_0 > 0) {
          const _Math2 = Math;
          const current = loop.current;
          if (typeof closure_1_9 === "function") {
            const _Math = Math;
            const rounded = Math.round(tmp8);
            let arr = current.push(rounded);
            if (arr == null) {
              arr = rounded;
            }
            const result = 2 * closure_137_0((rounded - arr) / current.count);
            c0.value = result.toFixed(0);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        closure_1_0 = arg0;
        const animationFrame = requestAnimationFrame(closure_1_1);
      };
      let c0 = 0;
      function loop() {
        let animationFrame = requestAnimationFrame(f141909);
      }
      let animationFrame = requestAnimationFrame(f141909);
    }, items);
    const items1 = [closure_10, sharedValue];
    let c0;
    [tmp15, tmp16] = items1;
    function pnpm_PerformanceMonitorTsx4() {
      let str = _undefined.value;
      if (str == null) {
        str = "N/A";
      }
      const text = `${"JS: " + str} `;
      return { text, defaultValue: text };
    }
    const items2 = [tmp16];
    pnpm_PerformanceMonitorTsx4.__closure = items2;
    pnpm_PerformanceMonitorTsx4.__workletHash = 6006834679907;
    pnpm_PerformanceMonitorTsx4.__initData = tmp15;
    const obj3 = { style: closure_15.container, children: closure_5(closure_8, obj4) };
    obj4 = { style: closure_15.text, animatedProps: tmpResult.useAnimatedProps(pnpm_PerformanceMonitorTsx4), editable: false };
    tmpResult = tmp(1885);
    return closure_5(closure_4, obj3);
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
}
function UiPerformance(smoothingFrames) {
  let obj5;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  smoothingFrames = smoothingFrames.smoothingFrames;
  let obj = _mod1885;
  const sharedValue = obj.useSharedValue(null);
  const obj2 = _mod1885;
  const sharedValue1 = obj2.useSharedValue(null);
  const items = [closure_12, sharedValue1, createCircularDoublesBuffer, smoothingFrames, completeBufferRoutine, sharedValue];
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  function pnpm_PerformanceMonitorTsx5(timestamp) {
    timestamp = timestamp.timestamp;
    if (null === _undefined.value) {
      _undefined.value = _undefined2(c2);
    }
    const obj = _undefined3(_undefined.value, Math.round(timestamp));
    c4.value = obj.toFixed(0);
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  pnpm_PerformanceMonitorTsx5.__closure = items1;
  pnpm_PerformanceMonitorTsx5.__workletHash = 2194415751359;
  pnpm_PerformanceMonitorTsx5.__initData = tmp5;
  const obj3 = _mod1885;
  obj3.useFrameCallback(pnpm_PerformanceMonitorTsx5);
  const items2 = [closure_13, sharedValue];
  let c0;
  [tmp12, tmp13] = items2;
  function pnpm_PerformanceMonitorTsx6() {
    let str = _undefined.value;
    if (str == null) {
      str = "N/A";
    }
    const text = `${"UI: " + str} `;
    return { text, defaultValue: text };
  }
  const items3 = [tmp13];
  pnpm_PerformanceMonitorTsx6.__closure = items3;
  pnpm_PerformanceMonitorTsx6.__workletHash = 12499189827236;
  pnpm_PerformanceMonitorTsx6.__initData = tmp12;
  const obj4 = { style: closure_15.container, children: hasOwnProperty(closure_8, obj5) };
  const tmpResult = _mod1885;
  obj5 = { style: closure_15.text, animatedProps: tmpResult.useAnimatedProps(pnpm_PerformanceMonitorTsx6), editable: false };
  return hasOwnProperty(React3, obj4);
}
({ useEffect: c2, useRef: c3 } = react);
({ StyleSheet, View: closure_4, TextInput } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [{ code: "(function createCircularDoublesBuffer_Pnpm_PerformanceMonitorTsx1(size){return{next:0,buffer:new Float32Array(size),size:size,count:0,push:function(value){const oldValue=this.buffer[this.next];const oldCount=this.count;this.buffer[this.next]=value;this.next=(this.next+1)%this.size;this.count=Math.min(this.size,this.count+1);return oldCount===this.size?oldValue:null;},front:function(){const notEmpty=this.count>0;if(notEmpty){const current=this.next-1;const index=current<0?this.size-1:current;return this.buffer[index];}return null;},back:function(){const notEmpty=this.count>0;return notEmpty?this.buffer[this.next]:null;}};})" }];
[tmp5] = items;
function createCircularDoublesBuffer(size) {
  let float32Array;
  const obj = { next: 0, buffer: float32Array, size, count: 0, push, front, back };
  float32Array = new Float32Array(size);
  return obj;
}
createCircularDoublesBuffer.__workletHash = 8460722829114;
createCircularDoublesBuffer.__initData = tmp5;
let closure_8 = NativeEventsManager.createAnimatedComponent(TextInput);
let items1 = [{ code: "(function getFps_Pnpm_PerformanceMonitorTsx2(renderTimeInMs){return 1000/renderTimeInMs;})" }];
[tmp6] = items1;
function getFps(arg0) {
  return 1000 / arg0;
}
getFps.__workletHash = 4570548508373;
getFps.__initData = tmp6;
let items2 = [{ code: "(function completeBufferRoutine_Pnpm_PerformanceMonitorTsx3(buffer,timestamp){let[getFps]=this.__closure;var _buffer$push;timestamp=Math.round(timestamp);const droppedTimestamp=(_buffer$push=buffer.push(timestamp))!==null&&_buffer$push!==void 0?_buffer$push:timestamp;const measuredRangeDuration=timestamp-droppedTimestamp;return getFps(measuredRangeDuration/buffer.count);})" }, getFps];
let c0;
[tmp7, tmp8] = items2;
function completeBufferRoutine(count, arg1) {
  const rounded = Math.round(arg1);
  let arr = count.push(rounded);
  if (arr == null) {
    arr = rounded;
  }
  return _undefined((rounded - arr) / count.count);
}
let items3 = [tmp8];
completeBufferRoutine.__closure = items3;
completeBufferRoutine.__workletHash = 3986155444362;
completeBufferRoutine.__initData = tmp7;
let closure_10 = { code: "(function pnpm_PerformanceMonitorTsx4(){let[jsFps]=this.__closure;var _jsFps$value;const text='JS: '+((_jsFps$value=jsFps.value)!==null&&_jsFps$value!==void 0?_jsFps$value:'N/A')+' ';return{text:text,defaultValue:text};})" };
let closure_12 = { code: "(function pnpm_PerformanceMonitorTsx5({timestamp:timestamp}){let[circularBuffer,createCircularDoublesBuffer,smoothingFrames,completeBufferRoutine,uiFps]=this.__closure;if(circularBuffer.value===null){circularBuffer.value=createCircularDoublesBuffer(smoothingFrames);}timestamp=Math.round(timestamp);const currentFps=completeBufferRoutine(circularBuffer.value,timestamp);uiFps.value=currentFps.toFixed(0);})" };
let closure_13 = { code: "(function pnpm_PerformanceMonitorTsx6(){let[uiFps]=this.__closure;var _uiFps$value;const text='UI: '+((_uiFps$value=uiFps.value)!==null&&_uiFps$value!==void 0?_uiFps$value:'N/A')+' ';return{text:text,defaultValue:text};})" };
let obj = { monitor: { flexDirection: "row", position: "absolute", backgroundColor: "#0006", zIndex: 1000 }, header: { fontSize: 14, color: "#ffff", paddingHorizontal: 5 }, text: { fontSize: 13, fontVariant: ["tabular-nums"], color: "#ffff", fontFamily: "monospace", paddingHorizontal: 3 }, container: { alignItems: "center", justifyContent: "center", flexDirection: "row", flexWrap: "wrap" } };
const styles = StyleSheet.create(obj);

export function PerformanceMonitor(smoothingFrames) {
  let items;
  let num = smoothingFrames.smoothingFrames;
  if (num === undefined) {
    num = 20;
  }
  const obj = { style: closure_15.monitor, children: items };
  items = [hasOwnProperty(JsPerformance, { smoothingFrames: num }), hasOwnProperty(UiPerformance, { smoothingFrames: num })];
  return metroRequire(React3, obj);
}
