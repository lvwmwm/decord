// Module ID: 1758
// Function ID: 19641
// Name: getRelativeCoords
// Dependencies: [527761408]

// Module 1758 (getRelativeCoords)
let closure_2 = { code: "function getRelativeCoords_Pnpm_getRelativeCoordsTs1(animatedRef,absoluteX,absoluteY){const{measure}=this.__closure;const parentCoords=measure(animatedRef);if(parentCoords===null){return null;}return{x:absoluteX-parentCoords.pageX,y:absoluteY-parentCoords.pageY};}" };
arg5.getRelativeCoords = () => {
  function getRelativeCoords(arg0, arg1, arg2) {
    let obj = callback(closure_1[0]);
    const measureResult = obj.measure(arg0);
    let tmp2 = null;
    if (null !== measureResult) {
      obj = { x: arg1 - measureResult.pageX, y: arg2 - measureResult.pageY };
      tmp2 = obj;
    }
    return tmp2;
  }
  getRelativeCoords.__closure = { measure: arg1(arg6[0]).measure };
  getRelativeCoords.__workletHash = 11016839059094;
  getRelativeCoords.__initData = closure_2;
  return getRelativeCoords;
}();
