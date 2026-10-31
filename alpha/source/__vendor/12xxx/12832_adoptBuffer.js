// Module ID: 12832
// Function ID: 12833
// Name: adoptBuffer
// Dependencies: []

// Module 12832 (adoptBuffer)
let closure_0 = typeof Uint32Array !== "undefined" ? Uint32Array : Array;

export default function adoptBuffer(arg0, arg1) {
  let arr = arg0;
  if (null === arg0) {
    const _Math = Math;
    const self = this;
    const self2 = this;
    arr = new closure_0(Math.max(arg1 + 1024, 16384));
  }
  return arr;
};
