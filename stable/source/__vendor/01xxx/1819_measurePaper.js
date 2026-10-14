// Module ID: 1819
// Function ID: 1820
// Name: measurePaper
// Dependencies: [1820]
// Exports: getRelativeCoords

// Module 1819 (measurePaper)
import _mod1820 from "module_1820" /* 1820 */;

const require = globalThis.__r;

function getRelativeCoords(arg0, arg1, arg2) {
  const obj = _mod1820;
  const measureResult = obj.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    const point = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
    tmp2 = point;
  }
  return tmp2;
}
let obj = { measure: require("module_1820").measure };
getRelativeCoords.__closure = obj;
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };

export { getRelativeCoords };
