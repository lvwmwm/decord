// Module ID: 141
// Function ID: 2295
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: createReactNativeDocument

// Module 141 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class ReactNativeDocument {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_3(this, ReactNativeDocument);
      items = [, ];
      items[0] = arg1;
      items[1] = null;
      obj = closure_6(ReactNativeDocument);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = ReactNativeDocument(closure_2[7]);
      reactNativeDocumentElementInstanceHandle = obj2.createReactNativeDocumentElementInstanceHandle();
      tmp8 = closure_1(closure_2[8]);
      tmp8 = new tmp8(arg0, null, reactNativeDocumentElementInstanceHandle, tmp2Result);
      obj3 = closure_1(closure_2[9]);
      linkRootNodeResult = obj3.linkRootNode(arg0, reactNativeDocumentElementInstanceHandle);
      obj4 = ReactNativeDocument(closure_2[7]);
      result = obj4.setNativeElementReferenceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, linkRootNodeResult);
      obj5 = ReactNativeDocument(closure_2[7]);
      result1 = obj5.setPublicInstanceForReactNativeDocumentElementInstanceHandle(reactNativeDocumentElementInstanceHandle, tmp8);
      tmp2Result._documentElement = tmp8;
      return tmp2Result;
    }
  }
  const arg1 = ReactNativeDocument;
  callback2(ReactNativeDocument, arg0);
  let obj = {
    key: "childElementCount",
    get() {
      return 1;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "children",
    get() {
      const items = [this.documentElement];
      return ReactNativeDocument(closure_2[5]).createHTMLCollection(items);
    }
  };
  items[1] = obj;
  obj = {
    key: "documentElement",
    get() {
      return this._documentElement;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "firstElementChild",
    get() {
      return this.documentElement;
    }
  };
  items[4] = {
    key: "lastElementChild",
    get() {
      return this.documentElement;
    }
  };
  items[5] = {
    key: "nodeName",
    get() {
      return "#document";
    }
  };
  items[6] = {
    key: "nodeType",
    get() {
      return callback(closure_2[6]).DOCUMENT_NODE;
    }
  };
  items[7] = {
    key: "nodeValue",
    get() {
      return null;
    }
  };
  items[8] = {
    key: "textContent",
    get() {
      return null;
    }
  };
  return callback(ReactNativeDocument, items);
}(importDefault(dependencyMap[6]));

export default tmp2;
export const createReactNativeDocument = function createReactNativeDocument(containerTag) {
  const obj = arg1(dependencyMap[10]);
  return new tmp2(containerTag, arg1(dependencyMap[10]).createReactNativeDocumentInstanceHandle(containerTag));
};
