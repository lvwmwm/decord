// Module ID: 747
// Function ID: 8798
// Name: getTag
// Dependencies: [719, 748, 724, 749, 750, 751, 578]

// Module 747 (getTag)
import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import toSource from "toSource";
import getNative from "getNative";
import getTag from "getTag";
import getNative from "getNative";

if (getNative) {
  let _module6 = require("getNative");
  const _ArrayBuffer = ArrayBuffer;
  const arrayBuffer = new ArrayBuffer(1);
  const prototype2 = _module6.prototype;
  _module6 = new _module6(arrayBuffer);
  getNative = getTag(_module6) != "[object DataView]";
}
if (!getNative) {
  let _module7 = require("getNative");
  if (_module7) {
    let _module8 = require("getNative");
    const prototype3 = _module8.prototype;
    _module8 = new _module8();
    _module7 = getTag(_module8) != "[object Map]";
  }
  getNative = _module7;
}
if (!getNative) {
  let _module9 = require("getNative");
  if (_module9) {
    const _module10 = require("getNative");
    _module9 = getTag(_module10.resolve()) != "[object Promise]";
  }
  getNative = _module9;
}
if (!getNative) {
  let _module11 = require("getNative");
  if (_module11) {
    let _module12 = require("getNative");
    const prototype4 = _module12.prototype;
    _module12 = new _module12();
    _module11 = getTag(_module12) != "[object Set]";
  }
  getNative = _module11;
}
if (!getNative) {
  let _module13 = require("getNative");
  if (_module13) {
    let _module14 = require("getNative");
    const prototype5 = _module14.prototype;
    _module14 = new _module14();
    _module13 = getTag(_module14) != "[object WeakMap]";
  }
  getNative = _module13;
}
if (getNative) {
  getTag = function getTag(_module10) {
    const tmp = require(578) /* getTag */(_module10);
    let constructor;
    if ("[object Object]" == tmp) {
      constructor = _module10.constructor;
    }
    let str = "";
    if (constructor) {
      str = require(719) /* toSource */(constructor);
    }
    if (str) {
      if (getNative === str) {
        return "[object DataView]";
      } else if (getNative === str) {
        return "[object Map]";
      } else if (getNative === str) {
        return "[object Promise]";
      } else if (getNative === str) {
        return "[object Set]";
      } else if (getNative === str) {
        return "[object WeakMap]";
      }
    }
    return tmp;
  };
}

export default getTag;
