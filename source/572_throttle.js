// Module ID: 572
// Function ID: 6945
// Name: throttle
// Dependencies: []

// Module 572 (throttle)

export default function throttle(arg0, maxWait, leading) {
  if ("function" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected a function");
    throw typeError;
  } else {
    let flag4 = true;
    let flag3 = true;
    if (require(dependencyMap[0])(leading)) {
      let flag = true;
      if ("leading" in leading) {
        flag = leading.leading;
      }
      let flag2 = true;
      if ("trailing" in leading) {
        flag2 = leading.trailing;
      }
      flag3 = flag2;
      flag4 = flag;
    }
    const obj = { leading: flag4, maxWait, trailing: flag3 };
    return require(dependencyMap[1])(arg0, maxWait, obj);
  }
};
