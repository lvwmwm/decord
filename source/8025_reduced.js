// Module ID: 8025
// Function ID: 63745
// Name: reduced
// Dependencies: []

// Module 8025 (reduced)
const obj = {};
const items = [];
const reduced = items.reduce((arg0, arg1) => {
  arg0[arg1] = arg1;
  return arg0;
}, {});
let closure_2 = /\s+/;
arg5.default = function extractViewBox(arg0) {
  let preserveAspectRatio;
  let viewBox;
  ({ viewBox, preserveAspectRatio } = arg0);
  if (viewBox) {
    const _Array = Array;
    let parts = viewBox;
    if (!Array.isArray(viewBox)) {
      const str = viewBox.trim();
      parts = viewBox.trim().replace(/,/g, " ").split(closure_2);
      const str3 = viewBox.trim().replace(/,/g, " ");
    }
    const _Number = Number;
    const mapped = parts.map(Number);
    if (4 === mapped.length) {
      const _isNaN = isNaN;
      if (!mapped.some(isNaN)) {
        if (preserveAspectRatio) {
          let parts1 = preserveAspectRatio.trim().split(closure_2);
          const str4 = preserveAspectRatio.trim();
        } else {
          parts1 = [];
        }
        const obj = {};
        [obj.minX, obj.minY] = mapped;
        obj.vbWidth = mapped[2];
        obj.vbHeight = mapped[3];
        let str5 = reduced[parts1[0]];
        if (!str5) {
          str5 = "xMidYMid";
        }
        obj.align = str5;
        obj.meetOrSlice = obj[parts1[1]] || 0;
        return obj;
      }
    }
    const _console = console;
    console.warn(`Invalid `viewBox` prop:${viewBox}`);
    return null;
  } else {
    return null;
  }
};
arg5.meetOrSliceTypes = obj;
arg5.alignEnum = reduced;
