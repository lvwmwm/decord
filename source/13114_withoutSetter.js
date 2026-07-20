// Module ID: 13114
// Function ID: 99451
// Name: withoutSetter
// Dependencies: []

// Module 13114 (withoutSetter)
let closure_2 = require(dependencyMap[0])("wks");
const _module = require(dependencyMap[1]);
const _Symbol = require(dependencyMap[2]).Symbol;
if (_module) {
  let withoutSetter = _Symbol.for || require(dependencyMap[2]).Symbol;
  const tmp2 = _Symbol.for || require(dependencyMap[2]).Symbol;
} else {
  withoutSetter = _Symbol;
  if (_Symbol) {
    withoutSetter = require(dependencyMap[2]).Symbol.withoutSetter;
  }
  if (!withoutSetter) {
    withoutSetter = require(dependencyMap[3]);
  }
}

export default (arg0) => {
  if (require(dependencyMap[4])(closure_2, arg0)) {
    return closure_2[arg0];
  } else {
    let num = dependencyMap;
    if (!require(dependencyMap[5])) {
      let tmp7 = withoutSetter(`Symbol.${arg0}`);
      tmp[arg0] = tmp7;
    } else {
      num = 2;
      const tmp5 = require(dependencyMap[4]);
    }
    tmp7 = require(dependencyMap[num]).Symbol[arg0];
    const tmp = closure_2;
  }
};
