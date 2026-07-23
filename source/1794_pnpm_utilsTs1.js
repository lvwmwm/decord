// Module ID: 1794
// Function ID: 19881
// Name: pnpm_utilsTs1
// Dependencies: []

// Module 1794 (pnpm_utilsTs1)
let closure_0 = { code: "function pnpm_utilsTs2(...args){const{value,wait,worklet}=this.__closure;const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);}" };
/* worklet (recovered source) */ function pnpm_utilsTs1(worklet,wait=0){const value={time:0};return function(...args){"worklet";const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);};}
pnpm_utilsTs1.__closure = {};
pnpm_utilsTs1.__workletHash = 1678132827161;
pnpm_utilsTs1.__initData = { code: "function pnpm_utilsTs1(worklet,wait=0){const value={time:0};return function(...args){\"worklet\";const t=Date.now();const now=t-value.time;if(now<wait){value.time=t;return;}value.time=t;return worklet(...args);};}" };
/* worklet (recovered source) */ function pnpm_utilsTs3(defaultScrollValue,snapPoints){let snapPoint;if(snapPoints){snapPoint=snapPoints.find(function(offset){return offset>=defaultScrollValue;});}return snapPoint!==null&&snapPoint!==void 0?snapPoint:defaultScrollValue;}
pnpm_utilsTs3.__closure = {};
pnpm_utilsTs3.__workletHash = 10680474034033;
pnpm_utilsTs3.__initData = { code: "function pnpm_utilsTs3(defaultScrollValue,snapPoints){let snapPoint;if(snapPoints){snapPoint=snapPoints.find(function(offset){return offset>=defaultScrollValue;});}return snapPoint!==null&&snapPoint!==void 0?snapPoint:defaultScrollValue;}" };
arg5.debounce = pnpm_utilsTs1;
arg5.scrollDistanceWithRespectToSnapPoints = pnpm_utilsTs3;
