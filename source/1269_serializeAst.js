// Module ID: 1269
// Function ID: 14330
// Name: serializeAst
// Dependencies: [57, 6, 7, 1255]

// Module 1269 (serializeAst)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function serializeAst(arg0, value) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp52 = nextResult;
    if ("string" !== typeof nextResult) {
      let tmp4 = nextResult;
      let first = tmp52[0];
      let tmp6 = require;
      let tmp7 = dependencyMap;
      if (require(1255) /* hydrateArray */.FormatJsNodeType.Argument === first) {
        let tmp50 = value;
        let tmp51 = nextResult;
        value.value = `${value.value}{${tmp52[1]}}`;
      } else {
        let tmp53 = require;
        let tmp54 = dependencyMap;
        if (require(1255) /* hydrateArray */.FormatJsNodeType.Date === first) {
          let tmp45 = value;
          let tmp46 = nextResult;
          value.value = `${value.value}{${tmp52[1]}, date`;
          if (null != tmp52[2]) {
            let tmp47 = value;
            let tmp48 = nextResult;
            value.value = `${value.value}, ${tmp52[2]}`;
          }
          let tmp49 = value;
          value.value = `${value.value}}`;
        } else {
          let tmp55 = require;
          let tmp56 = dependencyMap;
          if (require(1255) /* hydrateArray */.FormatJsNodeType.Time === first) {
            let tmp40 = value;
            let tmp41 = nextResult;
            value.value = `${value.value}{${tmp52[1]}, time`;
            if (null != tmp52[2]) {
              let tmp42 = value;
              let tmp43 = nextResult;
              value.value = `${value.value}, ${tmp52[2]}`;
            }
            let tmp44 = value;
            value.value = `${value.value}}`;
          } else {
            let tmp57 = require;
            let tmp58 = dependencyMap;
            if (require(1255) /* hydrateArray */.FormatJsNodeType.Number === first) {
              let tmp35 = value;
              let tmp36 = nextResult;
              value.value = `${value.value}{${tmp52[1]}, number`;
              if (null != tmp52[2]) {
                let tmp37 = value;
                let tmp38 = nextResult;
                value.value = `${value.value}, ${tmp52[2]}`;
              }
              let tmp39 = value;
              value.value = `${value.value}}`;
            } else {
              let tmp59 = require;
              let tmp60 = dependencyMap;
              if (require(1255) /* hydrateArray */.FormatJsNodeType.Plural === first) {
                let tmp21 = nextResult;
                let str = "plural";
                if ("ordinal" == tmp52[4]) {
                  str = "selectordinal";
                }
                let tmp22 = value;
                let tmp23 = nextResult;
                value.value = `${value.value}{${tmp52[1]}, ${str},`;
                if (tmp52[3]) {
                  let tmp24 = value;
                  let tmp25 = nextResult;
                  value.value = `${value.value} offset:${tmp52[3]}`;
                }
                let _Object2 = Object;
                let tmp26 = nextResult;
                let entries = Object.entries(tmp52[2]);
                let tmp28 = entries;
                for (const item10110 of entries) {
                  let tmp29 = _slicedToArray;
                  let tmp30 = _slicedToArray(item10110, 2);
                  let tmp31 = arg1;
                  arg1.value = arg1.value + (" " + tmp30[0] + " {");
                  let tmp32 = serializeAst;
                  let tmp33 = serializeAst(tmp30[1], arg1);
                  arg1.value = arg1.value + "}";
                  continue;
                }
                let tmp34 = value;
                value.value = `${value.value}}`;
              } else {
                let tmp61 = require;
                let tmp62 = dependencyMap;
                if (require(1255) /* hydrateArray */.FormatJsNodeType.Pound === first) {
                  let tmp20 = value;
                  value.value = `${value.value}#`;
                } else {
                  let tmp63 = require;
                  let tmp64 = dependencyMap;
                  if (require(1255) /* hydrateArray */.FormatJsNodeType.Select === first) {
                    let tmp10 = value;
                    let tmp11 = nextResult;
                    value.value = `${value.value}{${tmp52[1]}, select,`;
                    let _Object = Object;
                    let entries1 = Object.entries(tmp52[2]);
                    let tmp13 = entries1;
                    for (const item10061 of entries1) {
                      let tmp14 = _slicedToArray;
                      let tmp15 = _slicedToArray(item10061, 2);
                      let tmp16 = arg1;
                      arg1.value = arg1.value + (" " + tmp15[0] + " {");
                      let tmp17 = serializeAst;
                      let tmp18 = serializeAst(tmp15[1], arg1);
                      arg1.value = arg1.value + "}";
                      continue;
                    }
                    let tmp19 = value;
                    value.value = `${value.value}}`;
                  } else {
                    let tmp8 = require;
                    let tmp9 = dependencyMap;
                    if (require(1255) /* hydrateArray */.FormatJsNodeType.Tag === first) {
                      let tmp65 = serializeAstTag;
                      let tmp66 = nextResult;
                      let tmp67 = value;
                      let tmp68 = serializeAstTag(tmp52, value);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      let tmp2 = value;
      let tmp3 = nextResult;
      value.value = value.value + tmp52;
    }
    continue;
  }
}
function serializeAstTag(arg0, value) {
  if ("$b" === arg0[1]) {
    value.value = `${value.value}**`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}**`;
  } else if ("$i" === tmp) {
    value.value = `${value.value}*`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}*`;
  } else if ("$code" === tmp) {
    value.value = `${value.value}\``;
    serializeAst(arg0[2], value);
    value.value = `${value.value}\``;
  } else if ("$p" === tmp) {
    serializeAst(arg0[2], value);
    value.value = `${value.value}

  `;
  } else if ("$link" === tmp) {
    value.value = `${value.value}[`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}](`;
    if (null != arg0[3]) {
      serializeAst(tmp4, value);
    }
    value.value = `${value.value})`;
  } else {
    value.value = `${value.value}$[`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}](${arg0[1]})`;
  }
}

export const InternalIntlMessage = (() => {
  class InternalIntlMessage {
    constructor(arg0, arg1) {
      tmp = outer1_3(this, InternalIntlMessage);
      this.locale = arg1;
      result = arg0;
      if (!InternalIntlMessage(outer1_1[3]).isCompressedAst(arg0)) {
        tmp3 = InternalIntlMessage;
        tmp4 = outer1_1;
        result = InternalIntlMessage(outer1_1[3]).compressFormatJsToAst(arg0);
      }
      this.ast = result;
      return;
    }
  }
  const items = [
    {
      key: "reserialize",
      value: function reserialize() {
        const self = this;
        if ("string" === typeof this.ast) {
          return self.ast;
        } else {
          const obj = { value: "" };
          outer1_5(self.ast, obj);
          return obj.value;
        }
      }
    }
  ];
  return _defineProperties(InternalIntlMessage, items);
})();
