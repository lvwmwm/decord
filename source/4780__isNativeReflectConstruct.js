// Module ID: 4780
// Function ID: 41532
// Name: _isNativeReflectConstruct
// Dependencies: [57, 7, 6, 15, 17, 18, 162, 4745, 4781, 4782, 4783]

// Module 4780 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import getStringFromDataView from "getStringFromDataView";
import _wrapNativeSuper from "_wrapNativeSuper";
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
function combineChunks(buffer, arr) {
  let length;
  let num = 0;
  const uint8Array = new Uint8Array(arr.reduce((arg0, arg1) => arg0 + arg1.length, 0));
  let num2 = 0;
  if (0 < arr.length) {
    do {
      arr = arr[num];
      buffer = buffer.buffer;
      let _Uint8Array = Uint8Array;
      let tmp = new.target;
      let tmp2 = new.target;
      let uint8Array1 = new Uint8Array(buffer.slice(arr.dataOffset, arr.dataOffset + arr.length));
      let tmp4 = uint8Array1;
      let result = uint8Array.set(uint8Array1, num2);
      num2 = num2 + arr.length;
      num = num + 1;
      length = arr.length;
    } while (num < length);
  }
  const dataView = new DataView(uint8Array.buffer);
  return dataView;
}
function readTags(_raw, byteLength, arg2) {
  let doc;
  let raw;
  _raw = _raw._raw;
  let str = _raw;
  ({ doc, raw } = (function getDocument(byteLength, arg1) {
    let obj = outer1_1(outer1_2[8]);
    const value = obj.get(arg1);
    if (value) {
      let str3 = byteLength;
      if ("string" !== typeof byteLength) {
        str3 = outer1_0(outer1_2[7]).getStringFromDataView(byteLength, 0, byteLength.byteLength);
        const obj2 = outer1_0(outer1_2[7]);
      }
      obj = { doc: outer1_13(value, str3.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1")), raw: str3 };
      return obj;
    } else {
      const _console = console;
      console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags.");
      const _Error = Error;
      const error = new Error();
      throw error;
    }
  })(byteLength, arg2));
  if (!_raw) {
    str = "";
  }
  _raw._raw = str + raw;
  const tmp = (function getDocument(byteLength, arg1) {
    let obj = outer1_1(outer1_2[8]);
    const value = obj.get(arg1);
    if (value) {
      let str3 = byteLength;
      if ("string" !== typeof byteLength) {
        str3 = outer1_0(outer1_2[7]).getStringFromDataView(byteLength, 0, byteLength.byteLength);
        const obj2 = outer1_0(outer1_2[7]);
      }
      obj = { doc: outer1_13(value, str3.replace(/^.+(<\?xpacket begin)/, "$1").replace(/(<\?xpacket end=".*"\?>).+$/, "$1")), raw: str3 };
      return obj;
    } else {
      const _console = console;
      console.warn("Warning: DOMParser is not available. It is needed to be able to parse XMP tags.");
      const _Error = Error;
      const error = new Error();
      throw error;
    }
  })(byteLength, arg2);
  const tmp2 = getRDF(doc);
  require(4745) /* getStringFromDataView */.objectAssign(_raw, parseXMPObject(convertToObject(tmp2, true)));
  return true;
}
function parseFromString(parseFromString, parseFromString) {
  const tmp = arguments.length > 2 && undefined !== arguments[2];
  const parseFromStringResult = parseFromString.parseFromString(parseFromString, "application/xml");
  const elements = parseFromStringResult.getElementsByTagName("parsererror");
  if (elements.length > 0) {
    const prototype = ctor.prototype;
    const tmp6 = new ctor(elements[0].textContent);
    throw tmp6;
  } else {
    return parseFromStringResult;
  }
}
function getRDF(doc) {
  let num = 0;
  if (0 < doc.childNodes.length) {
    while ("x:xmpmeta" !== doc.childNodes[num].tagName) {
      if ("rdf:RDF" === doc.childNodes[num].tagName) {
        return doc.childNodes[num];
      } else {
        num = num + 1;
      }
    }
    return getRDF(doc.childNodes[num]);
  }
  const error = new Error();
  throw error;
}
function convertToObject(childNodes, arg1) {
  let length;
  let items = [];
  let num = 0;
  if (0 < childNodes.childNodes.length) {
    do {
      let arr = items.push(childNodes.childNodes[num]);
      num = num + 1;
      length = childNodes.childNodes.length;
    } while (num < length);
  }
  let tmp3 = 1 === items.length;
  if (tmp3) {
    tmp3 = "#text" === items[0].nodeName;
  }
  if (tmp3) {
    if (tmp) {
      let nodeValue = {};
    } else {
      nodeValue = items[0].nodeValue;
    }
  } else {
    return (function getElementsFromNodes(items) {
      let obj = {};
      const item = items.forEach((nodeName) => {
        nodeName = nodeName.nodeName;
        if (nodeName) {
          nodeName = "#text" !== nodeName.nodeName;
        }
        if (nodeName) {
          const obj = { attributes: outer2_16(nodeName), value: outer2_15(nodeName) };
          if (undefined !== obj[nodeName.nodeName]) {
            const _Array = Array;
            if (!Array.isArray(obj[nodeName.nodeName])) {
              const items = [obj[nodeName.nodeName]];
              obj[nodeName.nodeName] = items;
            }
            obj[nodeName.nodeName].push(obj);
            const arr2 = obj[nodeName.nodeName];
          } else {
            obj[nodeName.nodeName] = obj;
          }
        }
      });
      return obj;
    })(items);
  }
}
function getAttributes(attributes) {
  let length;
  const obj = {};
  let num = 0;
  if (0 < attributes.attributes.length) {
    do {
      let _decodeURIComponent = decodeURIComponent;
      let _escape = escape;
      obj[attributes.attributes[num].nodeName] = decodeURIComponent(escape(attributes.attributes[num].value));
      num = num + 1;
      length = attributes.attributes.length;
    } while (num < length);
  }
  return obj;
}
function parseXMPObject(value) {
  let obj = {};
  if ("string" === typeof value) {
    return value;
  } else {
    for (const key10007 in arg0) {
      let tmp4 = key10007;
      let tmp5 = arg0[key10007];
      let _Array = Array;
      let arr2 = tmp5;
      if (!Array.isArray(tmp5)) {
        let items = [tmp5];
        arr2 = items;
      }
      let item = arr2.forEach((attributes) => {
        obj = obj(outer1_2[7]);
        obj.objectAssign(obj, outer1_18(attributes.attributes));
        if ("object" === typeof attributes.value) {
          obj(outer1_2[7]).objectAssign(obj, outer1_24(attributes.value));
          const obj2 = obj(outer1_2[7]);
        }
      });
      continue;
    }
    return obj;
  }
}
function parseNodeAttributesAsTags(attributes) {
  let obj = {};
  for (const key10007 in arg0) {
    let tmp8 = key10007;
    let tmp9 = isTagAttribute;
    let tmp10 = key10007;
    if (isTagAttribute(key10007)) {
      let tmp2 = obj;
      let tmp3 = getLocalName;
      let tmp4 = key10007;
      obj = {};
      let tmp6 = arg0;
      obj.value = tmp[tmp8];
      obj.attributes = {};
      let tmp7 = getDescription;
      let tmp5 = getLocalName(tmp8);
      obj.description = getDescription(tmp[tmp8], tmp8);
      obj[tmp5] = obj;
    }
    continue;
  }
  return obj;
}
function isTagAttribute(key10007) {
  let tmp = "rdf:parseType" !== key10007;
  if (tmp) {
    tmp = !isNamespaceDefinition(key10007);
  }
  return tmp;
}
function isNamespaceDefinition(key10007) {
  return "xmlns" === key10007.split(":")[0];
}
function getLocalName(key10007) {
  let str = "RatingPercent";
  if (!obj.test(key10007)) {
    str = key10007.split(":")[1];
  }
  return str;
}
function getDescription(arr) {
  let tmp;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      tmp = arguments[1];
    }
  }
  if (Array.isArray(arr)) {
    const tmp16 = (function getDescriptionOfArray(arr) {
      const mapped = arr.map((value) => {
        if (undefined !== value.value) {
          let tmp2 = outer2_22(value.value);
        } else {
          tmp2 = outer2_22(value);
        }
        return tmp2;
      });
      return mapped.join(", ");
    })(arr);
    let tmp18 = tmp16;
    if (tmp2) {
      tmp18 = tmp16;
      if ("function" === typeof importDefault(4783)[tmp2]) {
        tmp18 = importDefault(4783)[tmp](arr, tmp16);
        const tmp24 = importDefault(4783);
      }
    }
    return tmp18;
  } else if ("object" === typeof arr) {
    const items = [];
    for (const key10048 in arg0) {
      let tmp25 = key10048;
      let tmp26 = getClearTextKey;
      let tmp28 = getDescription;
      let tmp27 = getClearTextKey(key10048);
      let _HermesInternal = HermesInternal;
      arr = items.push("" + tmp27 + ": " + getDescription(arg0[key10048].value));
      continue;
    }
    return items.join("; ");
  } else {
    if (tmp2) {
      if ("function" === typeof importDefault(4783)[tmp2]) {
        let decodeURIComponentResult = importDefault(4783)[tmp2](arr);
        const tmp11 = importDefault(4783);
      }
      return decodeURIComponentResult;
    }
    const _decodeURIComponent = decodeURIComponent;
    const _escape = escape;
    decodeURIComponentResult = decodeURIComponent(escape(arr));
  }
}
function getClearTextKey(key10048) {
  let str = "CreatorCity";
  if ("CiAdrCity" !== key10048) {
    let str14 = "CreatorCountry";
    if ("CiAdrCtry" !== key10048) {
      let str2 = "CreatorAddress";
      if ("CiAdrExtadr" !== key10048) {
        let str4 = "CreatorPostalCode";
        if ("CiAdrPcode" !== key10048) {
          let str6 = "CreatorRegion";
          if ("CiAdrRegion" !== key10048) {
            let str8 = "CreatorWorkEmail";
            if ("CiEmailWork" !== key10048) {
              let str10 = "CreatorWorkPhone";
              if ("CiTelWork" !== key10048) {
                let str12 = "CreatorWorkUrl";
                if ("CiUrlWork" !== key10048) {
                  str12 = key10048;
                }
                str10 = str12;
              }
              str8 = str10;
            }
            str6 = str8;
          }
          str4 = str6;
        }
        str2 = str4;
      }
      str14 = str2;
    }
    str = str14;
  }
  return str;
}
function parseNodeChildrenAsTags(value) {
  const obj = {};
  for (const key10007 in arg0) {
    let tmp8 = key10007;
    let tmp9 = isNamespaceDefinition;
    let tmp10 = key10007;
    if (!isNamespaceDefinition(key10007)) {
      let tmp2 = obj;
      let tmp3 = getLocalName;
      let tmp4 = key10007;
      let tmp6 = parseNodeAsTag;
      let tmp7 = arg0;
      let tmp5 = getLocalName(tmp8);
      obj[tmp5] = parseNodeAsTag(tmp[tmp8], tmp8);
    }
    continue;
  }
  return obj;
}
function parseNodeAsTag(attributes, arg1) {
  if (Array.isArray(attributes)) {
    let tmp7 = parseNodeAsSimpleValue(attributes[attributes.length - 1], arg1);
  } else {
    let tmp = "Resource" === attributes.attributes["rdf:parseType"];
    if (tmp) {
      tmp = "string" === typeof attributes.value;
    }
    if (tmp) {
      tmp = "" === attributes.value.trim();
      const str3 = attributes.value;
    }
    if (tmp) {
      const obj = { value: "", attributes: {}, description: "" };
      tmp7 = obj;
    } else if (hasNestedSimpleRdfDescription(attributes)) {
      tmp7 = parseNodeAsSimpleRdfDescription(attributes, arg1);
    } else if (hasNestedStructureRdfDescription(attributes)) {
      tmp7 = parseNodeAsStructureRdfDescription(attributes, arg1);
    } else if (isCompactStructure(attributes)) {
      tmp7 = parseNodeAsCompactStructure(attributes, arg1);
    } else if (undefined !== getArrayChild(attributes.value)) {
      tmp7 = (function parseNodeAsArray(value, arg1) {
        rdf_li = outer1_33(value.value).value["rdf:li"];
        const items = [];
        if (undefined === rdf_li) {
          let items1 = [];
        } else {
          const _Array = Array;
          items1 = rdf_li;
          if (!Array.isArray(rdf_li)) {
            const items2 = [rdf_li];
            items1 = items2;
          }
        }
        const item = items1.forEach((arg0) => {
          if (outer2_26(arg0)) {
            let value = outer2_27(arg0);
          } else if (outer2_29(arg0)) {
            value = outer2_30(arg0).value;
          } else if (outer2_31(arg0)) {
            value = outer2_32(arg0).value;
          } else {
            value = outer2_34(arg0);
          }
          items.push(value);
        });
        const tmp = outer1_28(value);
        return { value: items, attributes: outer1_28(value), description: outer1_22(items, arg1) };
      })(attributes, arg1);
    } else {
      tmp7 = parseNodeAsSimpleValue(attributes, arg1);
    }
  }
  return tmp7;
}
function hasNestedSimpleRdfDescription(attributes) {
  let tmp = "Resource" === attributes.attributes["rdf:parseType"];
  if (tmp) {
    tmp = undefined !== attributes.value["rdf:value"];
  }
  if (!tmp) {
    tmp = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
    const tmp2 = undefined !== attributes.value["rdf:Description"] && undefined !== attributes.value["rdf:Description"].value["rdf:value"];
  }
  return tmp;
}
function parseNodeAsSimpleRdfDescription(value, arg1) {
  const tmp = parseNodeAttributes(value);
  let iter = value;
  if (undefined !== value.value["rdf:Description"]) {
    iter = value.value["rdf:Description"];
  }
  let obj = require(4745) /* getStringFromDataView */;
  obj = {};
  for (const key10020 in iter.value) {
    let tmp8 = key10020;
    let tmp4 = "rdf:value" === key10020;
    if (!tmp4) {
      let tmp3 = isNamespaceDefinition;
      tmp4 = isNamespaceDefinition(key10020);
    }
    if (tmp4) {
      continue;
    } else {
      let tmp5 = getLocalName;
      obj[getLocalName(key10020)] = iter.value[key10020].value;
      continue;
    }
    continue;
  }
  obj.objectAssign(tmp, parseNodeAttributes(iter), obj);
  const tmp7 = getURIValue(iter.value["rdf:value"]) || iter.value["rdf:value"].value;
  obj = { value: tmp7, attributes: tmp, description: getDescription(tmp7, arg1) };
  return obj;
}
function parseNodeAttributes(iter) {
  const obj = {};
  for (const key10007 in arg0.attributes) {
    let tmp4 = key10007;
    let tmp = "rdf:parseType" === key10007;
    if (!tmp) {
      tmp = "rdf:resource" === key10007;
    }
    if (!tmp) {
      let tmp2 = isNamespaceDefinition;
      tmp = isNamespaceDefinition(key10007);
    }
    if (tmp) {
      continue;
    } else {
      let tmp3 = getLocalName;
      obj[getLocalName(key10007)] = arg0.attributes[key10007];
      continue;
    }
    continue;
  }
  return obj;
}
function hasNestedStructureRdfDescription(attributes) {
  let tmp = "Resource" === attributes.attributes["rdf:parseType"];
  if (!tmp) {
    tmp = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
    const tmp2 = undefined !== attributes.value["rdf:Description"] && undefined === attributes.value["rdf:Description"].value["rdf:value"];
  }
  return tmp;
}
function parseNodeAsStructureRdfDescription(value, arg1) {
  const obj = { value: {}, attributes: {} };
  let iter = value;
  if (undefined !== value.value["rdf:Description"]) {
    require(4745) /* getStringFromDataView */.objectAssign(obj.value, parseNodeAttributesAsTags(value.value["rdf:Description"].attributes));
    const obj2 = require(4745) /* getStringFromDataView */;
    require(4745) /* getStringFromDataView */.objectAssign(obj.attributes, parseNodeAttributes(value));
    iter = value.value["rdf:Description"];
    const obj3 = require(4745) /* getStringFromDataView */;
  }
  require(4745) /* getStringFromDataView */.objectAssign(obj.value, parseNodeChildrenAsTags(iter.value));
  obj.description = getDescription(obj.value, arg1);
  return obj;
}
function isCompactStructure(value) {
  let tmp = 0 === Object.keys(value.value).length;
  if (tmp) {
    tmp = undefined === value.attributes["xml:lang"];
  }
  if (tmp) {
    tmp = undefined === value.attributes["rdf:resource"];
  }
  return tmp;
}
function parseNodeAsCompactStructure(attributes, arg1) {
  const tmp = parseNodeAttributesAsTags(attributes.attributes);
  return { value: tmp, attributes: {}, description: getDescription(tmp, arg1) };
}
function getArrayChild(value) {
  return value["rdf:Bag"] || value["rdf:Seq"] || value["rdf:Alt"];
}
function parseNodeAsSimpleValue(value, arg1) {
  let tmp = getURIValue(value);
  if (!tmp) {
    tmp = parseXMPObject(value.value);
  }
  const obj = { value: tmp, attributes: parseNodeAttributes(value), description: getDescription(tmp, arg1) };
  return obj;
}
function getURIValue(rdf_value) {
  return rdf_value.attributes && rdf_value.attributes["rdf:resource"];
}
let closure_9 = ((arg0) => {
  class ParseError {
    constructor(arg0) {
      self = this;
      tmp = outer1_5(this, ParseError);
      items = [];
      items[0] = arg0;
      obj = outer1_7(ParseError);
      tmp2 = outer1_6;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "ParseError";
      return tmp2Result;
    }
  }
  callback3(ParseError, arg0);
  return callback2(ParseError);
})(require("_wrapNativeSuper")(Error));

export default {
  read(buffer, arr) {
    const obj = {};
    if ("string" === typeof buffer) {
      readTags(obj, buffer, arg2);
      return obj;
    } else {
      if (0 === arr.length) {
        let items = [];
      } else {
        const items1 = [combineChunks(buffer, arr.slice(0, 1))];
        items = items1;
        if (arr.length > 1) {
          items1.push(combineChunks(buffer, arr.slice(1)));
          items = items1;
        }
      }
      const tmp6 = callback(items, 2);
      let tmp9 = readTags(obj, tmp6[0], arg2);
      if (tmp6[1]) {
        if (!tmp9) {
          tmp9 = readTags(obj, tmp7, arg2);
        }
        if (!tmp9) {
          delete tmp._raw;
          readTags(obj, combineChunks(buffer, arr), arg2);
        }
      }
      return obj;
    }
  }
};
