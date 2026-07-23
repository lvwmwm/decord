// Module ID: 148
// Function ID: 2359
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 140, 135, 138, 134]

// Module 148 (_isNativeReflectConstruct)
import getRendererProxy from "getRendererProxy";
import getRawNativeDOMForTests from "getRawNativeDOMForTests";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}

export default ((arg0) => {
  class ReadOnlyCharacterData {
    constructor() {
      self = this;
      tmp = outer1_3(this, ReadOnlyCharacterData);
      obj = outer1_6(ReadOnlyCharacterData);
      tmp2 = outer1_5;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ReadOnlyCharacterData, arg0);
  let obj = {
    key: "nextElementSibling",
    get() {
      return ReadOnlyCharacterData(outer1_2[5]).getElementSibling(this, "next");
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "previousElementSibling",
    get() {
      return ReadOnlyCharacterData(outer1_2[5]).getElementSibling(this, "previous");
    }
  };
  items[1] = obj;
  obj = {
    key: "data",
    get() {
      const nativeTextReference = ReadOnlyCharacterData(outer1_2[6]).getNativeTextReference(this);
      let str = "";
      if (null != nativeTextReference) {
        str = outer1_1(outer1_2[7]).getTextContent(nativeTextReference);
        const obj2 = outer1_1(outer1_2[7]);
      }
      return str;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "length",
    get() {
      return this.data.length;
    }
  };
  items[4] = {
    key: "textContent",
    get() {
      return this.data;
    }
  };
  items[5] = {
    key: "nodeValue",
    get() {
      return this.data;
    }
  };
  items[6] = {
    key: "substringData",
    value: function substringData(arg0, arg1) {
      let length = arg1;
      const data = this.data;
      if (arg0 < 0) {
        const _TypeError2 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const typeError = new TypeError("Failed to execute 'substringData' on 'CharacterData': The offset " + arg0 + " is negative.");
        throw typeError;
      } else if (arg0 > data.length) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError1 = new TypeError("Failed to execute 'substringData' on 'CharacterData': The offset " + arg0 + " is greater than the node's length (" + data.length + ").");
        throw typeError1;
      } else {
        if (length < 0) {
          length = data.length;
        }
        return data.slice(arg0, arg0 + length);
      }
    }
  };
  return callback(ReadOnlyCharacterData, items);
})(require("getChildNodes"));
