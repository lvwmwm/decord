// Module ID: 7551
// Function ID: 60241
// Name: baseOrderBy
// Dependencies: [741, 591, 704, 618, 609, 697, 7552, 7553, 7554]

// Module 7551 (baseOrderBy)

export default function baseOrderBy(arg0, arg1, arg2) {
  let _require = arg1;
  const dependencyMap = arg2;
  if (arg1.length) {
    let items = tmp(741)(arg1, (arg0) => {
      let fn = arg0;
      const callback = arg0;
      if (callback(591)(arg0)) {
        fn = (arg0) => {
          if (1 === lib.length) {
            let first = lib[0];
          } else {
            first = lib;
          }
          return lib(table[2])(arg0, first);
        };
      }
      return fn;
    });
  } else {
    items = [tmp(618)];
  }
  _require = items;
  let c2 = -1;
  const tmp3 = _require(741);
  _require = tmp3(items, _require(609)(_require(697)));
  const tmp4 = _require(609);
  return _require(7553)(_require(7552)(arg0, (value) => {
    const callback = value;
    const sum = c2 + 1;
    c2 = sum;
    return { criteria: callback(741)(callback, (arg0) => arg0(closure_0)), index: sum, value };
  }), (arg0, arg1) => callback(7554)(arg0, arg1, dependencyMap));
};
