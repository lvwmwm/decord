// Module ID: 1832
// Function ID: 1833
// Name: measurePaper
// Dependencies: [1833]
// Exports: getRelativeCoords

// Module 1832 (measurePaper)
import _mod1833 from "module_1833" /* 1833 */;

const require = globalThis.__r;

function getRelativeCoords(arg0, arg1, arg2) {
  const obj = _mod1833;
  const measureResult = obj.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    const point = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
    tmp2 = point;
  }
  return tmp2;
}
let obj = { measure: require("module_1833").measure };
getRelativeCoords.__closure = obj;
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };

export { getRelativeCoords };
