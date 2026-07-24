// Module ID: 3744
// Function ID: 28580
// Name: isIterable
// Dependencies: [57]
// Exports: shallow

// Module 3744 (isIterable)
import _slicedToArray from "_slicedToArray";

function isIterable(arg0) {
  return Symbol.iterator in arg0;
}
function hasIterableEntries(current) {
  return "entries" in current;
}
function compareEntries(arr, arr2) {
  let tmp11;
  let tmp13;
  let map = arr;
  if (!(arr instanceof Map)) {
    const _Map = Map;
    map = new Map(arr.entries());
  }
  let map1 = arr2;
  if (!(arr2 instanceof Map)) {
    const _Map2 = Map;
    map1 = new Map(arr2.entries());
  }
  if (map.size !== map1.size) {
    return false;
  } else {
    const obj2 = map[Symbol.iterator]();
    while (obj2 !== undefined) {
      let tmp9 = _slicedToArray;
      let tmp10 = _slicedToArray(tmp7, 2);
      [tmp11, tmp13] = tmp10;
      let tmp14 = map1;
      let tmp12 = tmp11;
      if (obj.has(tmp11)) {
        let _Object = Object;
        let tmp15 = tmp13;
        let tmp16 = map1;
        let tmp17 = tmp11;
      }
      obj2.return();
      let flag = false;
      return false;
    }
    return true;
  }
}

export const shallow = function shallow(current, current2) {
  let closure_0 = current;
  const isIterable = current2;
  const tmp = !Object.is(current, current2);
  let tmp2 = !tmp;
  if (tmp) {
    let tmp3 = "object" === typeof current;
    if (tmp3) {
      tmp3 = null !== current;
    }
    if (tmp3) {
      tmp3 = "object" === typeof current2;
    }
    if (tmp3) {
      tmp3 = null !== current2;
    }
    if (tmp3) {
      const _Object = Object;
      const _Object2 = Object;
      const prototypeOf = Object.getPrototypeOf(current);
      const tmp7 = prototypeOf === Object.getPrototypeOf(current2);
      if (!tmp7) {
        tmp3 = tmp7;
      } else {
        if (!isIterable(current)) {
          let obj = {
            entries() {
                      return Object.entries(closure_0);
                    }
          };
          obj = {
            entries() {
                      return Object.entries(closure_1);
                    }
          };
          compareEntries(obj, obj);
        }
        if (!hasIterableEntries(current)) {
          const _Symbol = Symbol;
          const iter = current[Symbol.iterator]();
          const _Symbol2 = Symbol;
          const iter2 = current2[Symbol.iterator]();
          const iter3 = iter.next();
          const iter4 = iter2.next();
          let iter5 = iter3;
          let iter6 = iter4;
          if (!iter3.done) {
            let iter7 = iter3;
            let iter8 = iter4;
            iter5 = iter3;
            iter6 = iter4;
            if (!iter4.done) {
              const _Object3 = Object;
              let flag = false;
              while (Object.is(iter7.value, iter8.value)) {
                let iter9 = iter.next();
                let iter10 = iter2.next();
                iter5 = iter9;
                iter6 = iter10;
                if (!iter9.done) {
                  iter7 = iter9;
                  iter8 = iter10;
                  iter5 = iter9;
                  iter6 = iter10;
                }
              }
            }
          }
          let done = !tmp13;
          if (!!iter5.done) {
            done = iter6.done;
          }
          flag = done;
        }
        flag = compareEntries(current, current2);
      }
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
