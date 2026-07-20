// Module ID: 211
// Function ID: 2951
// Name: FormData
// Dependencies: []

// Module 211 (FormData)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);

export default () => {
  class FormData {
    constructor() {
      tmp = closure_1(this, FormData);
      this._parts = [];
      return;
    }
  }
  let closure_0 = FormData;
  let obj = {
    key: "append",
    value: function append(arg0, arg1) {
      const _parts = this._parts;
      const items = [arg0, arg1];
      _parts.push(items);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getAll",
    value: function getAll(arg0) {
      const FormData = arg0;
      const _parts = this._parts;
      const found = _parts.filter((arg0) => arg0(arg0, 1)[0] === arg0);
      return found.map((arg0) => arg0(arg0, 2)[1]);
    }
  };
  items[1] = obj;
  obj = {
    key: "getParts",
    value: function getParts() {
      const _parts = this._parts;
      return _parts.map((arg0) => {
        const tmp = callback(arg0, 2);
        const first = tmp[0];
        let obj = { content-disposition: `form-data; name="${tmp2}"` };
        if ("object" === typeof tmp[1]) {
          const _Array = Array;
          if (!Array.isArray(tmp3)) {
            if (tmp3) {
              if ("string" === typeof tmp3.name) {
                const _encodeURIComponent = encodeURIComponent;
                const _HermesInternal = HermesInternal;
                obj.content-disposition = obj.content-disposition + "; filename=\"" + encodeURIComponent(tmp3.name.replace(/\//g, "_")) + "\"";
                const str2 = tmp3.name;
              }
              if ("string" === typeof tmp3.type) {
                obj.content-type = tmp3.type;
              }
              const _Object = Object;
              obj = {};
              obj.headers = obj;
              obj.fieldName = first;
              let merged = Object.assign({}, tmp3, obj);
            }
            return merged;
          }
        }
        obj = { string: String(tmp3), headers: obj, fieldName: first };
        merged = obj;
      });
    }
  };
  items[2] = obj;
  return callback(FormData, items);
}();
