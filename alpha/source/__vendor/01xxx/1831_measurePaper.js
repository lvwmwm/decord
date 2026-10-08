// Module ID: 1831
// Function ID: 1832
// Name: measurePaper
// Dependencies: [1832]
// Exports: getRelativeCoords

// Module 1831 (measurePaper)
import _mod1832 from "module_1832" /* 1832 */;

const require = globalThis.__r;

function getRelativeCoords(arg0, arg1, arg2) {
  const obj = _mod1832;
  const measureResult = obj.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    const point = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
    tmp2 = point;
  }
  return tmp2;
}
let obj = { measure: require("module_1832").measure };
getRelativeCoords.__closure = obj;
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };

export { getRelativeCoords };
