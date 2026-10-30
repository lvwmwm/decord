// Module ID: 1827
// Function ID: 1828
// Name: measurePaper
// Dependencies: [1828]
// Exports: getRelativeCoords

// Module 1827 (measurePaper)
import _mod1828 from "module_1828" /* 1828 */;

const require = globalThis.__r;

function getRelativeCoords(arg0, arg1, arg2) {
  const obj = _mod1828;
  const measureResult = obj.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    const point = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
    tmp2 = point;
  }
  return tmp2;
}
let obj = { measure: require("module_1828").measure };
getRelativeCoords.__closure = obj;
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };

export { getRelativeCoords };
