// Module ID: 59
// Function ID: 1405
// Name: _iterableToArrayLimit
// Dependencies: []

// Module 59 (_iterableToArrayLimit)

export default function _iterableToArrayLimit(arg0, arg1) {
  let tmp3 = null;
  if (null != arg0) {
    const _Symbol = Symbol;
    iterable = "undefined" !== typeof Symbol;
    if (iterable) {
      const _Symbol2 = Symbol;
      iterable = tmp[Symbol.iterator];
    }
    if (!iterable) {
      iterable = tmp[Symbol.iterator];
    }
    tmp3 = iterable;
  }
  if (null != tmp3) {
    const items = [];
    const iter = tmp3.call(arg0);
    const next = iter.next;
    if (0 === arg1) {
      const _Object = Object;
      if (Object(obj2) !== obj2) {
        // // eliminated: always false
        if (flag2) {
          throw tmp2;
        }
      } else {
        let flag4 = false;
      }
    } else {
      const iter4 = next.call(obj2);
      const done2 = iter4.done;
      flag4 = done2;
      if (!done2) {
        items.push(iter5.value);
        if (items.length !== arg1) {
          const iter2 = next.call(obj2);
          const done = iter2.done;
          flag4 = done;
          while (!done) {
            let tmp15 = items;
            let tmp16 = iter2;
            let arr = items.push(iter3.value);
            let tmp18 = arg1;
            if (items.length !== arg1) {
              continue;
            } else {
              break;
            }
            break;
          }
        }
      }
    }
    while (true) {
      let tmp23 = flag4;
      if (flag4) {
        break;
      } else {
        let tmp24 = iter;
        if (null == obj2.return) {
          break;
        } else {
          let tmp25 = iter;
          let returnResult = obj2.return();
          let tmp27 = globalThis;
          let _Object2 = Object;
          if (Object(returnResult) === returnResult) {
            break;
          } else {
            let tmp28 = flag2;
            if (flag2) {
              let tmp29 = tmp2;
              throw tmp2;
            }
          }
        }
      }
      let tmp30 = flag2;
      if (flag2) {
        let tmp31 = tmp2;
        throw tmp2;
      } else {
        return items;
      }
    }
  }
};
