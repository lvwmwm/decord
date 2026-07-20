// Module ID: 555
// Function ID: 6701
// Name: listGetNode
// Dependencies: []

// Module 555 (listGetNode)
function listGetNode(next) {
  let iter = next.next;
  let tmp = next;
  if (null != iter) {
    while (iter.key !== arg1) {
      iter = iter.next;
      tmp = tmp2;
    }
    tmp.next = iter.next;
    if (!arg2) {
      iter.next = next.next;
      next.next = iter;
    }
    return iter;
  }
}

export default function getSideChannelList() {
  const obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        let tmp3 = lib(obj[0]);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3("Side channel does not contain " + lib(obj[1])(arg0));
        throw tmp3;
      }
    },
    delete: function _delete(arg0) {
      let next = lib;
      if (lib) {
        next = lib.next;
      }
      let tmp3;
      if (lib) {
        tmp3 = callback(tmp2, arg0, true);
      }
      let tmp6 = tmp3;
      if (tmp3) {
        tmp6 = next;
      }
      if (tmp6) {
        tmp6 = next === tmp3;
      }
      if (tmp6) {
        let lib;
      }
      return tmp3;
    },
    get(arg0) {
      let tmp2;
      if (closure_0) {
        const iter = callback(tmp, arg0);
        let value = iter;
        if (iter) {
          value = iter.value;
        }
        tmp2 = value;
      }
      return tmp2;
    },
    has(arg0) {
      let tmp3 = !tmp2;
      if (!!closure_0) {
        tmp3 = callback(tmp, arg0);
      }
      return tmp3;
    },
    set(key, value) {
      if (!obj) {
        let obj = { next: undefined };
      }
      const tmp = callback(obj, key);
      if (tmp) {
        tmp.value = value;
      } else {
        obj = { key, next: iter.next, value };
        iter.next = obj;
      }
    }
  };
  const dependencyMap = obj;
  return obj;
};
