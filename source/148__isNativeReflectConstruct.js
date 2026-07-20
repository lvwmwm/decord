// Module ID: 148
// Function ID: 2359
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 148 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);

export default (arg0) => {
  class ReadOnlyCharacterData {
    constructor() {
      self = this;
      tmp = closure_3(this, ReadOnlyCharacterData);
      obj = closure_6(ReadOnlyCharacterData);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ReadOnlyCharacterData;
  callback2(ReadOnlyCharacterData, arg0);
  let obj = {
    key: "nextElementSibling",
    get() {
      return ReadOnlyCharacterData(closure_2[5]).getElementSibling(this, "next");
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "previousElementSibling",
    get() {
      return ReadOnlyCharacterData(closure_2[5]).getElementSibling(this, "previous");
    }
  };
  items[1] = obj;
  obj = {
    key: "data",
    get() {
      const nativeTextReference = ReadOnlyCharacterData(closure_2[6]).getNativeTextReference(this);
      let str = "";
      if (null != nativeTextReference) {
        str = callback(closure_2[7]).getTextContent(nativeTextReference);
        const obj2 = callback(closure_2[7]);
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
}(importDefault(dependencyMap[8]));
