// Module ID: 554
// Function ID: 6694
// Name: getSideChannelMap
// Dependencies: []

// Module 554 (getSideChannelMap)
const tmp = require(dependencyMap[0])("%Map%", true);
let closure_3 = require(dependencyMap[1])("Map.prototype.get", true);
let closure_4 = require(dependencyMap[1])("Map.prototype.set", true);
let closure_5 = require(dependencyMap[1])("Map.prototype.has", true);
let closure_6 = require(dependencyMap[1])("Map.prototype.delete", true);
let closure_7 = require(dependencyMap[1])("Map.prototype.size", true);
let getSideChannelMap = !tmp2;
if (!!tmp) {
  getSideChannelMap = function getSideChannelMap() {
    const obj = {
      assert(arg0) {
        if (!obj.has(arg0)) {
          let tmp3 = callback(obj[2]);
          const prototype = tmp3.prototype;
          tmp3 = new tmp3("Side channel does not contain " + callback(obj[3])(arg0));
          throw tmp3;
        }
      },
      delete: function _delete(arg0) {
        if (closure_0) {
          if (0 === callback6(closure_0)) {
            closure_0 = undefined;
          }
          return callback5(closure_0, arg0);
        } else {
          return false;
        }
      },
      get(arg0) {
        if (closure_0) {
          return callback2(closure_0, arg0);
        }
      },
      has(arg0) {
        let tmp2 = !tmp;
        if (!!closure_0) {
          tmp2 = callback4(closure_0, arg0);
        }
        return tmp2;
      },
      set(arg0, arg1) {
        if (!tmp4) {
          const prototype = ctor.prototype;
          const tmp4 = new ctor();
        }
        callback3(tmp4, arg0, arg1);
      }
    };
    const dependencyMap = obj;
    return obj;
  };
}

export default getSideChannelMap;
