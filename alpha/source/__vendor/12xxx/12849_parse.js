// Module ID: 12849
// Function ID: 12850
// Name: parse
// Dependencies: [12850]

// Module 12849 (parse)
import parse from "parse" /* 12850 */;

function buildGroupMatchGraph(combinator, terms, arg2) {
  let match;
  let match2;
  let match3;
  let match4;
  let match5;
  let obj;
  let obj4;
  let then;
  let then2;
  let then3;
  let then4;
  let then5;
  if (" " === combinator) {
    let diff = terms.length - 1;
    let tmp65 = obj;
    let tmp66 = obj;
    if (0 <= diff) {
      do {
        let tmp72;
        let tmp67 = terms[diff];
        let closure_0 = tmp67;
        let tmp68 = obj2;
        let tmp69 = obj;
        let tmp70 = tmp65 === obj;
        then5 = tmp65;
        if (!tmp70) {
          if (tmp67 === tmp69) {
            if (tmp70) {
              tmp72 = tmp67;
            }
          }
          let tmp73 = "If" === tmp67.type && tmp67.else === tmp68 && tmp70;
          match5 = tmp67;
          if (tmp73) {
            ({ then: then5, match: match5 } = tmp67);
          }
          obj2 = { type: "If", match: match5, then: then5, else: tmp68 };
          tmp72 = obj2;
        } else {
          tmp72 = tmp67;
        }
        diff = diff - 1;
        tmp65 = tmp72;
        tmp66 = tmp72;
      } while (0 <= diff);
    }
    return tmp66;
  } else if ("|" === combinator) {
    let diff1 = terms.length - 1;
    let tmp32 = null;
    let tmp33 = obj2;
    let tmp34 = obj2;
    if (0 <= diff1) {
      while (true) {
        let tmp59;
        let tmp35 = terms[diff1];
        closure_0 = tmp35;
        let tmp36 = "Keyword" === tmp35.type;
        let tmp37 = tmp32;
        if (!tmp36) {
          tmp36 = "AtKeyword" === tmp35.type;
        }
        if (!tmp36) {
          tmp36 = "Function" === tmp35.type;
        }
        if (!tmp36) {
          let tmp40 = "Type" === tmp35.type;
          if (tmp40) {
            let name = tmp35.name;
            let tmp41 = name.length > 2 && 40 === name.charCodeAt(name.length - 2) && 41 === name.charCodeAt(name.length - 1);
            tmp40 = tmp41;
          }
          tmp36 = tmp40;
        }
        let tmp42 = tmp33;
        if (tmp36) {
          let tmp43 = null === tmp37 && diff1 > 0;
          if (tmp43) {
            let tmp44 = terms[diff1 - 1];
            let tmp45 = "Keyword" === tmp44.type || "AtKeyword" === tmp44.type || "Function" === tmp44.type;
            if (!tmp45) {
              let tmp46 = "Type" === tmp44.type;
              if (tmp46) {
                let name1 = tmp44.name;
                let tmp47 = name1.length > 2 && 40 === name1.charCodeAt(name1.length - 2) && 41 === name1.charCodeAt(name1.length - 1);
                tmp46 = tmp47;
              }
              tmp45 = tmp46;
            }
            tmp43 = tmp45;
          }
          let tmp48 = tmp33;
          if (tmp43) {
            let tmp52;
            obj3 = { type: "Enum", map: obj4 };
            let _Object = Object;
            obj4 = Object.create(null);
            then3 = obj;
            let tmp50 = obj === obj;
            if (!tmp50) {
              if (obj3 === then3) {
                if (tmp50) {
                  tmp52 = obj3;
                }
              }
              let tmp53 = "If" === obj3.type;
              if (tmp53) {
                tmp53 = obj3.else === obj2;
              }
              if (tmp53) {
                tmp53 = tmp50;
              }
              match3 = obj3;
              if (tmp53) {
                ({ then: then3, match: match3 } = obj3);
              }
              let obj5 = { type: "If", match: match3, then: then3, else: tmp33 };
              tmp52 = obj5;
            } else {
              tmp52 = obj3;
            }
            tmp48 = tmp52;
            tmp37 = obj4;
          }
          tmp42 = tmp48;
          if (null !== tmp37) {
            let str7;
            let name2 = tmp35.name;
            let tmp55 = name2.length > 2 && 40 === name2.charCodeAt(name2.length - 2) && 41 === name2.charCodeAt(name2.length - 1);
            let name3 = tmp35.name;
            if (tmp55) {
              str7 = name3.slice(0, -1);
            } else {
              str7 = name3;
            }
            let formatted = str7.toLowerCase();
            tmp42 = tmp48;
            if (formatted in tmp37 === false) {
              tmp37[formatted] = tmp35;
              let tmp62 = tmp37;
              tmp59 = tmp48;
              diff1 = diff1 - 1;
              tmp32 = tmp62;
              tmp33 = tmp59;
              tmp34 = tmp59;
              if (0 > diff1) {
                break;
              }
            }
          }
        }
        then4 = obj;
        let tmp57 = obj === obj;
        if (!tmp57) {
          if (tmp35 === then4) {
            if (tmp57) {
              tmp59 = tmp35;
            }
          }
          let tmp60 = "If" === tmp35.type;
          if (tmp60) {
            tmp60 = tmp35.else === obj2;
          }
          if (tmp60) {
            tmp60 = tmp57;
          }
          match4 = tmp35;
          if (tmp60) {
            ({ then: then4, match: match4 } = tmp35);
          }
          let obj6 = { type: "If", match: match4, then: then4, else: tmp42 };
          tmp59 = obj6;
        } else {
          tmp59 = tmp35;
        }
        tmp62 = null;
      }
    }
    return tmp34;
  } else if ("&&" === combinator) {
    if (terms.length > 5) {
      return { type: "MatchOnce", terms, all: true };
    } else {
      let diff2 = terms.length - 1;
      let tmp26 = obj2;
      let tmp27 = obj2;
      if (0 <= diff2) {
        do {
          let tmp22;
          let tmp15 = terms[diff2];
          closure_0 = tmp15;
          if (terms.length > 1) {
            then2 = buildGroupMatchGraph(combinator, terms.filter((item) => item !== closure_0), false);
          } else {
            then2 = obj;
          }
          let tmp19 = obj;
          let tmp20 = then2 === obj;
          if (!tmp20) {
            if (tmp15 === tmp19) {
              if (tmp20) {
                tmp22 = tmp15;
              }
            }
            let tmp23 = "If" === tmp15.type;
            if (tmp23) {
              tmp23 = tmp15.else === obj2;
            }
            if (tmp23) {
              tmp23 = tmp20;
            }
            match2 = tmp15;
            if (tmp23) {
              ({ then: then2, match: match2 } = tmp15);
            }
            let obj8 = { type: "If", match: match2, then: then2, else: tmp26 };
            tmp22 = obj8;
          } else {
            tmp22 = tmp15;
          }
          diff2 = diff2 - 1;
          tmp26 = tmp22;
          tmp27 = tmp22;
        } while (0 <= diff2);
      }
      return tmp27;
    }
  } else if ("||" === combinator) {
    if (terms.length > 5) {
      return { type: "MatchOnce", terms, all: false };
    } else {
      const tmp = arg2 ? obj : obj2;
      let diff3 = terms.length - 1;
      let tmp3 = tmp;
      let tmp4 = tmp;
      if (0 <= diff3) {
        do {
          let tmp12;
          let tmp5 = terms[diff3];
          closure_0 = tmp5;
          if (terms.length > 1) {
            then = buildGroupMatchGraph(combinator, terms.filter((item) => item !== closure_0), true);
          } else {
            then = obj;
          }
          let tmp9 = obj;
          let tmp10 = then === obj;
          if (!tmp10) {
            if (tmp5 === tmp9) {
              if (tmp10) {
                tmp12 = tmp5;
              }
            }
            let tmp13 = "If" === tmp5.type;
            if (tmp13) {
              tmp13 = tmp5.else === obj2;
            }
            if (tmp13) {
              tmp13 = tmp10;
            }
            match = tmp5;
            if (tmp13) {
              ({ then, match } = tmp5);
            }
            obj = { type: "If", match, then, else: tmp3 };
            tmp12 = obj;
          } else {
            tmp12 = tmp5;
          }
          diff3 = diff3 - 1;
          tmp3 = tmp12;
          tmp4 = tmp12;
        } while (0 <= diff3);
      }
      return tmp4;
    }
  }
}
function buildMatchGraph(type) {
  let obj;
  let str;
  let str3;
  let tmp29;
  if (typeof type === "function") {
    return { type: "Generic", fn: type };
  } else {
    let obj22;
    switch (type.type) {
      case "Group":
      {
        let match11;
        let then12;
        const terms = type.terms;
        const tmp54 = buildGroupMatchGraph(type.combinator, terms.map(buildMatchGraph), false);
        let tmp55 = tmp54;
        if (type.disallowEmpty) {
          let tmp59;
          then12 = obj3;
          if (obj3 !== obj) {
            if (tmp54 === obj) {
              if (obj3 === obj) {
                tmp59 = tmp54;
              }
            }
            match11 = tmp54;
            const tmp60 = "If" === tmp54.type && tmp54.else === tmp56 && tmp58;
            if (tmp60) {
              ({ then: then12, match: match11 } = tmp54);
            }
            tmp59 = { type: "If", match: match11, then: then12, else: obj2 };
            const obj8 = { type: "If", match: match11, then: then12, else: obj2 };
          } else {
            tmp59 = tmp54;
          }
          tmp55 = tmp59;
        }
        return tmp55;
      }
      case "Multiplier":
      {
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp47;
        let match;
        let match10;
        let match2;
        let match3;
        let match4;
        let match5;
        let match6;
        let match7;
        let match8;
        let match9;
        let then;
        let then10;
        let then11;
        let then2;
        let then3;
        let then4;
        let then5;
        let then6;
        let then8;
        let then9;
        const tmp3 = buildMatchGraph(type.term);
        if (0 === type.max) {
          let tmp27;
          then4 = obj3;
          if (obj3 !== obj) {
            if (tmp3 === obj) {
              if (obj3 === obj) {
                tmp27 = tmp3;
              }
            }
            match4 = tmp3;
            const tmp28 = "If" === tmp3.type && tmp3.else === tmp25 && tmp26;
            if (tmp28) {
              ({ then: then4, match: match4 } = tmp3);
            }
            tmp27 = { type: "If", match: match4, then: then4, else: obj2 };
            const obj9 = { type: "If", match: match4, then: then4, else: obj2 };
          } else {
            tmp27 = tmp3;
          }
          then5 = null;
          match5 = tmp27;
          const flag = "If" === tmp27.type && tmp27.else === tmp25 && false;
          if (flag) {
            ({ then: then5, match: match5 } = tmp27);
          }
          const obj10 = { type: "If", match: match5, then: tmp29, else: obj2 };
          if (!true) {
            if (true) {
              if (true) {
                tmp29 = tmp;
              }
            }
            then6 = tmp;
            match6 = tmp;
            const tmp30 = "If" === tmp.type && tmp.else === tmp25 && flag2;
            if (tmp30) {
              ({ then: then6, match: match6 } = obj);
            }
            tmp29 = { type: "If", match: match6, then: then6, else: obj10 };
            const obj11 = { type: "If", match: match6, then: then6, else: obj10 };
          } else {
            tmp29 = tmp;
          }
          tmp5 = tmp;
          tmp6 = tmp27;
          tmp7 = obj10;
          if (type.comma) {
            let tmp32;
            const obj12 = { type: "Comma", syntax: type };
            const then7 = obj10.then;
            if (obj10 !== obj) {
              if (obj12 === obj) {
                if (obj10 === obj) {
                  tmp32 = obj12;
                }
              }
              then8 = obj10;
              match7 = obj12;
              const tmp33 = "If" === obj12.type && obj12.else === tmp25 && tmp31;
              if (tmp33) {
                ({ then: then8, match: match7 } = obj12);
              }
              tmp32 = { type: "If", match: match7, then: then8, else: obj2 };
              const obj13 = { type: "If", match: match7, then: then8, else: obj2 };
            } else {
              tmp32 = obj12;
            }
            then7.else = tmp32;
            tmp5 = tmp;
            tmp6 = tmp27;
            tmp7 = obj10;
          }
        } else {
          let num6 = type.min || 1;
          let tmp4 = tmp;
          tmp5 = tmp;
          tmp6 = tmp3;
          tmp7 = tmp;
          while (num6 <= type.max) {
            let tmp23;
            let comma = type.comma;
            then = tmp4;
            if (comma) {
              comma = then !== obj;
            }
            let tmp10 = then;
            if (comma) {
              let tmp14;
              let obj14 = { type: "Comma", syntax: type };
              let tmp11 = obj2;
              let tmp12 = obj;
              let tmp13 = then === obj;
              if (!tmp13) {
                if (obj14 === tmp12) {
                  if (tmp13) {
                    tmp14 = obj14;
                  }
                }
                let tmp15 = "If" === obj14.type && obj14.else === tmp11 && tmp13;
                match = obj14;
                if (tmp15) {
                  ({ then, match } = obj14);
                }
                let obj15 = { type: "If", match, then, else: tmp11 };
                tmp14 = obj15;
              } else {
                tmp14 = obj14;
              }
              tmp10 = tmp14;
            }
            let tmp16 = obj;
            let tmp17 = obj === obj;
            if (!tmp17) {
              if (tmp17) {
                if (tmp17) {
                  then2 = tmp16;
                }
              }
              let tmp19 = "If" === tmp16.type;
              if (tmp19) {
                tmp19 = tmp16.else === obj2;
              }
              if (tmp19) {
                tmp19 = tmp17;
              }
              then3 = tmp16;
              match2 = tmp16;
              if (tmp19) {
                ({ then: then3, match: match2 } = tmp16);
              }
              let obj16 = { type: "If", match: match2, then: then3, else: tmp10 };
              then2 = obj16;
            } else {
              then2 = tmp16;
            }
            let tmp21 = obj2;
            let tmp22 = then2 === tmp16;
            if (!tmp22) {
              if (tmp3 === tmp16) {
                if (tmp22) {
                  tmp23 = tmp3;
                }
              }
              let tmp24 = "If" === tmp3.type && tmp3.else === tmp21 && tmp22;
              match3 = tmp3;
              if (tmp24) {
                ({ then: then2, match: match3 } = tmp3);
              }
              let obj17 = { type: "If", match: match3, then: then2, else: tmp21 };
              tmp23 = obj17;
            } else {
              tmp23 = tmp3;
            }
            num6 = num6 + 1;
            tmp4 = tmp23;
            tmp5 = tmp16;
            tmp6 = tmp3;
            tmp7 = tmp23;
          }
        }
        if (0 === type.min) {
          let tmp49;
          if (!true) {
            if (true) {
              if (true) {
                tmp49 = tmp5;
              }
            }
            then11 = tmp5;
            match10 = tmp5;
            const tmp50 = "If" === tmp5.type && tmp5.else === obj2 && flag3;
            if (tmp50) {
              ({ then: then11, match: match10 } = tmp5);
            }
            tmp49 = { type: "If", match: match10, then: then11, else: tmp7 };
            const obj18 = { type: "If", match: match10, then: then11, else: tmp7 };
          } else {
            tmp49 = tmp5;
          }
          tmp47 = tmp49;
        } else {
          let tmp46 = tmp7;
          tmp47 = tmp7;
          let num7 = 0;
          if (0 < type.min - 1) {
            do {
              let tmp44;
              let comma2 = type.comma;
              then9 = tmp46;
              if (comma2) {
                comma2 = then9 !== obj;
              }
              then10 = then9;
              if (comma2) {
                let tmp39;
                let obj19 = { type: "Comma", syntax: type };
                let tmp36 = obj2;
                let tmp37 = obj;
                let tmp38 = then9 === obj;
                if (!tmp38) {
                  if (obj19 === tmp37) {
                    if (tmp38) {
                      tmp39 = obj19;
                    }
                  }
                  let tmp40 = "If" === obj19.type && obj19.else === tmp36 && tmp38;
                  match8 = obj19;
                  if (tmp40) {
                    ({ then: then9, match: match8 } = obj19);
                  }
                  let obj20 = { type: "If", match: match8, then: then9, else: tmp36 };
                  tmp39 = obj20;
                } else {
                  tmp39 = obj19;
                }
                then10 = tmp39;
              }
              let tmp41 = obj2;
              let tmp42 = obj;
              let tmp43 = then10 === obj;
              if (!tmp43) {
                if (tmp6 === tmp42) {
                  if (tmp43) {
                    tmp44 = tmp6;
                  }
                }
                let tmp45 = "If" === tmp6.type && tmp6.else === tmp41 && tmp43;
                match9 = tmp6;
                if (tmp45) {
                  ({ then: then10, match: match9 } = tmp6);
                }
                let obj21 = { type: "If", match: match9, then: then10, else: tmp41 };
                tmp44 = obj21;
              } else {
                tmp44 = tmp6;
              }
              num7 = num7 + 1;
              tmp46 = tmp44;
              tmp47 = tmp44;
            } while (num7 < type.min - 1);
          }
        }
        return tmp47;
      }
      case "Type":
      {
        obj22 = { type: type.type, name: type.name, syntax: type };
        return obj22;
      }
      case "Property":
      {
        obj22 = { type: type.type, name: type.name, syntax: type };
        return obj22;
      }
      case "Keyword":
      {
        let name3;
        const obj23 = { type: null, name: name3.toLowerCase(), syntax: type };
        ({ type: obj7.type, name: name3 } = type);
        return obj23;
      }
      case "AtKeyword":
      {
        let name2;
        const obj45 = { type: null, name: "@" + name2.toLowerCase(), syntax: type };
        ({ type: obj6.type, name: name2 } = type);
        return obj45;
      }
      case "Function":
      {
        let name;
        const obj46 = { type: null, name: name.toLowerCase() + "(", syntax: type };
        ({ type: obj5.type, name } = type);
        return obj46;
      }
      case "String":
      {
        let obj48;
        let value;
        if (3 === type.value.length) {
          const obj47 = { type: "Token", value: str3.charAt(1), syntax: type };
          obj48 = obj47;
          str3 = type.value;
        } else {
          obj48 = { type: null, value: str.replace(/\\'/g, "'"), syntax: type };
          ({ type: obj3.type, value } = type);
          str = value.substr(1, type.value.length - 2);
        }
        return obj48;
      }
      case "Token":
      {
        const obj49 = { type: null, value: null, syntax: type };
        ({ type: obj2.type, value: obj2.value } = type);
        return obj49;
      }
      case "Comma":
      {
        obj = { type: type.type, syntax: type };
        return obj;
      }
      default:
      {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unknown node type:", type.type);
        throw error;
      }
    }
  }
}
const MATCH = { type: "Match" };
let obj2 = { type: "Mismatch" };
let obj3 = { type: "DisallowEmpty" };
let obj4 = {
  MATCH,
  MISMATCH: obj2,
  DISALLOW_EMPTY: obj3,
  buildMatchGraph(str, arg1) {
    let tmp = str;
    if (typeof str === "string") {
      tmp = parse(str);
    }
    let tmp2 = arg1;
    const obj = { type: "MatchGraph", match: buildMatchGraph(tmp), syntax: tmp2, source: tmp };
    if (!arg1) {
      tmp2 = null;
    }
    return obj;
  }
};

export default obj4;
