// Module ID: 1475
// Function ID: 17144
// Name: findFocusedRoute
// Dependencies: []

// Module 1475 (findFocusedRoute)
arg5.default = function findFocusedRoute(index) {
  let state1;
  let state;
  if (null != index) {
    index = index.index;
    let num = 0;
    if (null != index) {
      num = index;
    }
    state = index.routes[num].state;
  }
  let tmp3 = index;
  let tmp4 = index;
  if (null != state) {
    do {
      let index2 = tmp3.index;
      let num2 = 0;
      if (null != index2) {
        num2 = index2;
      }
      state = tmp3.routes[num2].state;
      state1 = undefined;
      if (null != state) {
        let index3 = state.index;
        let num3 = 0;
        if (null != index3) {
          num3 = index3;
        }
        state1 = state.routes[num3].state;
        let tmp6 = index3;
      }
      tmp3 = state;
      tmp4 = state;
    } while (null != state1);
  }
  let tmp7;
  if (null != tmp4) {
    index = undefined;
    if (null != tmp4) {
      index = tmp4.index;
    }
    let num4 = 0;
    if (null != index) {
      num4 = index;
    }
    tmp7 = tmp4.routes[num4];
  }
  return tmp7;
};
