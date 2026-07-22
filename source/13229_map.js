// Module ID: 13229
// Function ID: 100340
// Name: map
// Dependencies: []

// Module 13229 (map)

export default (arg0) => {
  let map = arg0;
  map = arg0;
  const obj = {};
  if (!arg0) {
    const _Map = Map;
    map = new Map();
  }
  obj.all = map;
  obj.on = function on(arg0, arg1) {
    const value = map.get(arg0);
    if (value) {
      value.push(arg1);
    } else {
      const items = [arg1];
      const result = map.set(arg0, items);
    }
  };
  obj.off = function off(arg0, arg1) {
    const value = map.get(arg0);
    if (value) {
      if (arg1) {
        value.splice(value.indexOf(arg1) >>> 0, 1);
      } else {
        const result = map.set(arg0, []);
      }
    }
  };
  obj.emit = function emit(arg0, arg1) {
    let value = map.get(arg0);
    if (value) {
      const substr = value.slice();
      const mapped = substr.map((arg0) => {
        arg0(arg1);
      });
    }
    value = map.get("*");
    if (value) {
      const substr1 = value.slice();
      const mapped1 = substr1.map((arg0) => {
        arg0(arg0, arg1);
      });
    }
  };
  return obj;
};
