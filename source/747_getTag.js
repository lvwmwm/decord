// Module ID: 747
// Function ID: 8797
// Name: getTag
// Dependencies: []

// Module 747 (getTag)
const _module = require(dependencyMap[0]);
let closure_2 = _module(require(dependencyMap[1]));
const _module1 = require(dependencyMap[0]);
let closure_3 = _module1(require(dependencyMap[2]));
const _module2 = require(dependencyMap[0]);
let closure_4 = _module2(require(dependencyMap[3]));
const _module3 = require(dependencyMap[0]);
let closure_5 = _module3(require(dependencyMap[4]));
const _module4 = require(dependencyMap[0]);
let closure_6 = _module4(require(dependencyMap[5]));
let getTag = require(dependencyMap[6]);
let _module5 = require(dependencyMap[1]);
if (_module5) {
  let _module6 = require(dependencyMap[1]);
  const _ArrayBuffer = ArrayBuffer;
  const arrayBuffer = new ArrayBuffer(1);
  const prototype2 = _module6.prototype;
  _module6 = new _module6(arrayBuffer);
  _module5 = getTag(_module6) != "[object DataView]";
}
if (!_module5) {
  let _module7 = require(dependencyMap[2]);
  if (_module7) {
    let _module8 = require(dependencyMap[2]);
    const prototype3 = _module8.prototype;
    _module8 = new _module8();
    _module7 = getTag(_module8) != "[object Map]";
  }
  _module5 = _module7;
}
if (!_module5) {
  let _module9 = require(dependencyMap[3]);
  if (_module9) {
    const _module10 = require(dependencyMap[3]);
    _module9 = getTag(_module10.resolve()) != "[object Promise]";
  }
  _module5 = _module9;
}
if (!_module5) {
  let _module11 = require(dependencyMap[4]);
  if (_module11) {
    let _module12 = require(dependencyMap[4]);
    const prototype4 = _module12.prototype;
    _module12 = new _module12();
    _module11 = getTag(_module12) != "[object Set]";
  }
  _module5 = _module11;
}
if (!_module5) {
  let _module13 = require(dependencyMap[5]);
  if (_module13) {
    let _module14 = require(dependencyMap[5]);
    const prototype5 = _module14.prototype;
    _module14 = new _module14();
    _module13 = getTag(_module14) != "[object WeakMap]";
  }
  _module5 = _module13;
}
if (_module5) {
  getTag = function getTag(_module10) {
    const tmp = require(dependencyMap[6])(_module10);
    let constructor;
    if ("[object Object]" == tmp) {
      constructor = _module10.constructor;
    }
    let str = "";
    if (constructor) {
      str = require(dependencyMap[0])(constructor);
    }
    if (str) {
      if (closure_2 === str) {
        return "[object DataView]";
      } else if (closure_3 === str) {
        return "[object Map]";
      } else if (closure_4 === str) {
        return "[object Promise]";
      } else if (closure_5 === str) {
        return "[object Set]";
      } else if (closure_6 === str) {
        return "[object WeakMap]";
      }
    }
    return tmp;
  };
}

export default getTag;
