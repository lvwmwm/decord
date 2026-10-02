// Module ID: 1331
// Function ID: 1332
// Name: getSideChannelList
// Dependencies: [1294, 1328]

// Module 1331 (getSideChannelList)
import _mod1294 from "module_1294" /* 1294 */;
import inspect_ from "inspect_" /* 1328 */;


export default function getSideChannelList() {
  let obj = {
    assert(arg0) {
      if (!obj.has(arg0)) {
        const self = this;
        const self2 = this;
        const tmp3 = _mod1294;
        const tmp32 = new tmp3("Side channel does not contain " + inspect_(arg0));
        throw tmp32;
      }
    },
    delete: (arg0) => {
      let iter = obj;
      let tmp2;
      if (obj) {
        let iter2 = iter.next;
        let tmp4;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next = iter2.next;
            iter = iter2;
            iter2 = next;
          }
          iter.next = iter2.next;
          tmp4 = iter2;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    },
    get(arg0) {
      let tmp;
      if (obj) {
        let iter2 = iter.next;
        let tmp3 = iter;
        let tmp4;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next = iter2.next;
            tmp3 = iter2;
            iter2 = next;
          }
          tmp3.next = iter2.next;
          iter2.next = obj.next;
          obj.next = iter2;
          tmp4 = iter2;
        }
        tmp = tmp4 && tmp4.value;
      }
      return tmp;
    },
    has(arg0) {
      let tmp = obj;
      if (tmp) {
        let iter2 = iter.next;
        let tmp3 = iter;
        let tmp4;
        if (null != iter2) {
          while (iter2.key !== arg0) {
            let next = iter2.next;
            tmp3 = iter2;
            iter2 = next;
          }
          tmp3.next = iter2.next;
          iter2.next = obj.next;
          obj.next = iter2;
          tmp4 = iter2;
        }
        tmp = tmp4;
      }
      return tmp;
    },
    set(key, value) {
      let iter = obj;
      if (!iter) {
        obj = { next: "call" };
        iter = obj;
      }
      let iter2 = iter.next;
      let tmp = iter;
      let tmp2;
      if (null != iter2) {
        while (iter2.key !== key) {
          let next = iter2.next;
          tmp = iter2;
          iter2 = next;
        }
        tmp.next = iter2.next;
        iter2.next = iter.next;
        iter.next = iter2;
        tmp2 = iter2;
      }
      if (tmp2) {
        tmp2.value = value;
      } else {
        const entry = { key, next: iter.next, value };
        iter.next = entry;
      }
    }
  };
  return obj;
};
