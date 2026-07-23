// Module ID: 211
// Function ID: 2951
// Name: FormData
// Dependencies: [57, 6, 7]

// Module 211 (FormData)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export default (() => {
  class FormData {
    constructor() {
      tmp = outer1_1(this, FormData);
      this._parts = [];
      return;
    }
  }
  let obj = {
    key: "append",
    value: function append(arg0, arg1) {
      const _parts = this._parts;
      const items = [arg0, arg1];
      _parts.push(items);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getAll",
    value: function getAll(arg0) {
      let _slicedToArray = arg0;
      const _parts = this._parts;
      const found = _parts.filter((target) => FormData(target, 1)[0] === _slicedToArray);
      return found.map((target) => FormData(target, 2)[1]);
    }
  };
  items[1] = obj;
  obj = {
    key: "getParts",
    value: function getParts() {
      const _parts = this._parts;
      return _parts.map((target) => {
        const tmp = FormData(target, 2);
        const first = tmp[0];
        let obj = { "content-disposition": `form-data; name="${tmp2}"` };
        if ("object" === typeof tmp[1]) {
          const _Array = Array;
          if (!Array.isArray(tmp3)) {
            if (tmp3) {
              if ("string" === typeof tmp3.name) {
                const _encodeURIComponent = encodeURIComponent;
                const _HermesInternal = HermesInternal;
                obj["content-disposition"] = obj["content-disposition"] + "; filename=\"" + encodeURIComponent(tmp3.name.replace(/\//g, "_")) + "\"";
                const str2 = tmp3.name;
              }
              if ("string" === typeof tmp3.type) {
                obj["content-type"] = tmp3.type;
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
})();
