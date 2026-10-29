// Module ID: 12682
// Function ID: 12683
// Dependencies: [12659]

// Module 12682
import List from "List" /* 12659 */;

function isValidLocation(start) {
  let BooleanResult = Boolean(start);
  if (BooleanResult) {
    const offset = start.offset;
    let isFiniteResult = typeof offset === "number";
    if (typeof offset === "number") {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(offset);
    }
    if (isFiniteResult) {
      const _Math = Math;
      isFiniteResult = Math.floor(offset) === offset;
    }
    if (isFiniteResult) {
      isFiniteResult = offset >= 0;
    }
    BooleanResult = isFiniteResult;
  }
  if (BooleanResult) {
    const line = start.line;
    let isFiniteResult1 = typeof line === "number";
    if (typeof line === "number") {
      const _isFinite2 = isFinite;
      isFiniteResult1 = isFinite(line);
    }
    if (isFiniteResult1) {
      const _Math2 = Math;
      isFiniteResult1 = Math.floor(line) === line;
    }
    if (isFiniteResult1) {
      isFiniteResult1 = line >= 0;
    }
    BooleanResult = isFiniteResult1;
  }
  if (BooleanResult) {
    const column = start.column;
    let isFiniteResult2 = typeof column === "number";
    if (typeof column === "number") {
      const _isFinite3 = isFinite;
      isFiniteResult2 = isFinite(column);
    }
    if (isFiniteResult2) {
      const _Math3 = Math;
      isFiniteResult2 = Math.floor(column) === column;
    }
    if (isFiniteResult2) {
      isFiniteResult2 = column >= 0;
    }
    BooleanResult = isFiniteResult2;
  }
  return BooleanResult;
}
let obj = {
  getStructureFromConfig(node) {
    let key10016;
    const obj = {};
    if (node.node) {
      let num = 0;
      let tmp2 = null;
      let flag = false;
      for (const key10016 in node.node) {
        let tmp15 = key10016;
        if (!hasOwnProperty.call(node.node, key10016)) {
          continue;
        } else {
          let tmp3 = node.node[key10016];
          if (tmp3.structure) {
            let structure = tmp3.structure;
            let obj2 = { type: String, loc: true };
            let _String = String;
            let obj3 = { type: "\"" + key10016 + "\"" };
            let tmp6 = structure;
            for (const key10038 in structure) {
              let tmp16 = key10038;
              if (false === hasOwnProperty.call(structure, key10038)) {
                continue;
              } else {
                let substr;
                let _Array = Array;
                let arr = structure[key10038];
                if (Array.isArray(structure[key10038])) {
                  substr = arr.slice();
                } else {
                  substr = [arr];
                }
                let items = [];
                obj2[key10038] = substr;
                let num3 = 0;
                if (0 < substr.length) {
                  while (true) {
                    let tmp7 = substr[num3];
                    let _String2 = String;
                    let tmp8 = num3;
                    if (tmp7 !== String) {
                      let _Boolean = Boolean;
                      if (tmp7 !== Boolean) {
                        if (null === tmp7) {
                          let arr2 = items.push("null");
                        } else if (typeof tmp7 === "string") {
                          let arr3 = items.push("<" + tmp7 + ">");
                        } else {
                          let _Array2 = Array;
                          if (Array.isArray(tmp7)) {
                            let arr7 = items.push("List");
                          } else {
                            let _Error2 = Error;
                            let str9 = "Wrong value `";
                            let str10 = "` in `";
                            let str11 = ".";
                            let self3 = this;
                            let str12 = "` structure definition";
                            let self4 = this;
                            let error = new Error("Wrong value `" + tmp7 + "` in `" + key10016 + "." + key10038 + "` structure definition");
                            let tmp10 = error;
                            throw error;
                          }
                        }
                      }
                      num3 = num3 + 1;
                      if (num3 >= substr.length) {
                        break;
                      }
                    }
                    let arr8 = items.push(tmp7.name);
                  }
                }
                obj3[key10038] = items.join(" | ");
                continue;
              }
              continue;
            }
            let obj4 = {
              docs: obj3,
              check: function checkNode(type, fn) {
                        if (type) {
                          const _Object = Object;
                          if (type.constructor === Object) {
                            for (const key10005 in type) {
                              if (false === hasOwnProperty.call(type, key10005)) {
                                continue;
                              } else {
                                let tmp4;
                                let flag;
                                if ("type" === key10005) {
                                  flag = true;
                                  tmp4 = key10005;
                                  if (type.type !== key10016) {
                                    let tmp14 = fn(type, "Wrong node type `" + type.type + "`, expected `" + tmp13 + "`");
                                    flag = true;
                                    tmp4 = key10005;
                                  }
                                  if (flag) {
                                    continue;
                                  } else {
                                    let tmp16 = fn(type, "Bad value for `" + key10016 + "." + tmp4 + "`");
                                    continue;
                                  }
                                  continue;
                                } else if ("loc" === key10005) {
                                  if (null === type.loc) {
                                    continue;
                                  } else {
                                    let text = key10005;
                                    if (type.loc) {
                                      let _Object2 = Object;
                                      text = key10005;
                                      if (type.loc.constructor === Object) {
                                        if (typeof type.loc.source !== "string") {
                                          text = `${key10005}.source`;
                                        } else {
                                          let tmp27 = isValidLocation;
                                          if (isValidLocation(type.loc.start)) {
                                            if (tmp27(type.loc.end)) {
                                              continue;
                                            } else {
                                              text = `${key10005}.end`;
                                            }
                                          } else {
                                            text = `${key10005}.start`;
                                          }
                                        }
                                        continue;
                                      }
                                    }
                                    tmp4 = text;
                                    flag = false;
                                  }
                                } else {
                                  let tmp26 = obj2;
                                  if (obj2.hasOwnProperty(key10005)) {
                                    let num = 0;
                                    let flag2 = false;
                                    flag = false;
                                    tmp4 = key10005;
                                    if (0 < tmp26[key10005].length) {
                                      while (true) {
                                        let tmp6 = obj2[key10005][num];
                                        let _String = String;
                                        let tmp8 = flag2;
                                        let tmp5 = obj2;
                                        if (String === tmp6) {
                                          tmp8 = typeof type[key10005] === "string";
                                        } else {
                                          let _Boolean = Boolean;
                                          if (Boolean === tmp6) {
                                            tmp8 = typeof type[key10005] === "boolean";
                                          } else if (null === tmp6) {
                                            tmp8 = null === type[key10005];
                                          } else if (typeof tmp6 === "string") {
                                            let tmp11 = type[key10005] && type[key10005].type === tmp6;
                                            tmp8 = tmp11;
                                          } else {
                                            let _Array = Array;
                                            if (Array.isArray(tmp6)) {
                                              tmp8 = type[key10005] instanceof List;
                                            }
                                          }
                                        }
                                        flag = tmp8;
                                        tmp4 = key10005;
                                        if (tmp8) {
                                          break;
                                        } else {
                                          num = num + 1;
                                          flag2 = tmp8;
                                          flag = tmp8;
                                          tmp4 = key10005;
                                          if (num < tmp5[key10005].length) {
                                            continue;
                                          } else {
                                            break;
                                          }
                                          break;
                                        }
                                      }
                                    }
                                  } else {
                                    let tmp3 = fn(type, "Unknown field `" + key10005 + "` for " + key10016 + " node type");
                                    flag = true;
                                    tmp4 = key10005;
                                  }
                                }
                                continue;
                              }
                              continue;
                            }
                            const keys = Object.keys();
                            if (keys !== undefined) {
                              const first = keys[0];
                              while (first !== undefined) {
                                let tmp20 = hasOwnProperty.call(obj2, first) && false === hasOwnProperty.call(type, first);
                                if (!tmp20) {
                                  continue;
                                } else {
                                  let tmp22 = fn(type, `Field \`${key10016}.${tmp19}\` is missed`);
                                  continue;
                                }
                                continue;
                              }
                            }
                          }
                        }
                        return fn(type, "Type of node should be an Object");
                      }
            };
            obj[key10016] = obj4;
            continue;
          } else {
            let _Error = Error;
            let str7 = "Missed `structure` field in `";
            let self = this;
            let str8 = "` node type definition";
            let self2 = this;
            let error1 = new Error("Missed `structure` field in `" + key10016 + "` node type definition");
            let tmp5 = error1;
            throw error1;
          }
        }
        continue;
      }
    }
    return obj;
  }
};

export default obj;
