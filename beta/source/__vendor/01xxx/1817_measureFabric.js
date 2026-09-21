// Module ID: 1817
// Function ID: 1818
// Name: measureFabric
// Dependencies: [1818]
// Exports: getRelativeCoords

// Module 1817 (measureFabric)
import _mod1818 from "module_1818" /* 1818 */;

require = fn;
const dependencyMap = arg6;
function getRelativeCoords(arg0, arg1, arg2) {
  const measureResult = _mod1818.measure(arg0);
  let tmp2 = null;
  if (null !== measureResult) {
    const point = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
    tmp2 = point;
  }
  return tmp2;
}
getRelativeCoords.__closure = { measure: fn(1818).measure };
getRelativeCoords.__workletHash = 11016839059094;
getRelativeCoords.__initData = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };

export { getRelativeCoords };
