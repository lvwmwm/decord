// Module ID: 8342
// Function ID: 66183
// Name: w
// Dependencies: []

// Module 8342 (w)
const self = this;
const fn = function w() {
  return () => {
    function y(arg0, arg1, arg2) {
      let str = arg2;
      if (undefined === arg2) {
        str = " ";
      }
      const StringResult = String(arg0);
      if (StringResult.length > arg1 >> 0) {
        const _String2 = String;
        let StringResult1 = String(StringResult);
      } else {
        const diff = tmp - StringResult.length;
        let sum = str;
        if (diff > str.length) {
          sum = str + fn3(str, diff / str.length);
        }
        const _String = String;
        const substr = sum.slice(0, diff);
        StringResult1 = substr + String(StringResult);
      }
      return StringResult1;
    }
    function W(arg0, arg1) {
      let fn = function n() {
        this.constructor = arg0;
      };
      if ("function" !== typeof arg1) {
        if (null !== arg1) {
          const _TypeError = TypeError;
          const _String = String;
          const typeError = new TypeError("Class extends value " + String(arg1) + " is not a constructor or null");
          throw typeError;
        }
      }
      j(arg0, arg1);
      if (null === arg1) {
        const _Object = Object;
        fn = Object.create(arg1);
      } else {
        fn.prototype = arg1.prototype;
        const prototype = fn.prototype;
        fn = new fn();
      }
      arg0.prototype = fn;
    }
    const fn = function q(fnResult, fn2Result3, arg2) {
      if (arg2) {
        let num3 = 0;
        if (0 < fn2Result3.length) {
          do {
            let tmp4 = !tmp3 && num3 in fn2Result3;
            let tmp5 = tmp3;
            if (!tmp4) {
              let callResult = tmp3;
              if (!tmp3) {
                let _Array = Array;
                callResult = slice.call(fn2Result3, 0, num3);
              }
              callResult[num3] = fn2Result3[num3];
              tmp5 = callResult;
            }
            num3 = num3 + 1;
            let tmp3 = tmp5;
            let callResult1 = tmp5;
          } while (num3 < length);
        }
      }
      if (!callResult1) {
        const _Array2 = Array;
        callResult1 = slice2.call(fn2Result3);
      }
      return fnResult.concat(callResult1);
    };
    function Q(arg0, arg1) {
      let tmp = arg1;
      function i() {
        if (acceptResult) {
          while (true) {
            let tmp4 = s;
            let tmp5 = s();
            let tmp6 = a;
            let tmp7 = a();
            let tmp8 = o;
            let tmp9 = o();
            if (tmp5) {
              if (tmp7) {
                let tmp60 = obj2;
                let nextSymbolResult = obj2.nextSymbol();
                let tmp62 = obj;
                if (!obj.byweekday) {
                  let tmp63 = obj;
                  obj.byweekday = [];
                }
                let tmp64 = obj;
                let byweekday = obj.byweekday;
                let tmp65 = constants;
                let obj2 = constants[tmp7];
                let arr = byweekday.push(obj2.nth(tmp5));
                let tmp16 = tmp3;
              } else {
                let tmp54 = obj;
                if (!obj.bymonthday) {
                  let tmp55 = obj;
                  obj.bymonthday = [];
                }
                let tmp56 = obj;
                let bymonthday = obj.bymonthday;
                arr = bymonthday.push(tmp5);
                let tmp58 = obj2;
                let str7 = "day(s)";
                let acceptResult1 = obj2.accept("day(s)");
                tmp16 = tmp3;
              }
            } else {
              let obj = obj2;
              if (tmp7) {
                let nextSymbolResult1 = obj.nextSymbol();
                let tmp49 = obj;
                if (!obj.byweekday) {
                  let tmp50 = obj;
                  obj.byweekday = [];
                }
                let tmp51 = obj;
                let byweekday1 = obj.byweekday;
                let tmp52 = constants;
                let arr1 = byweekday1.push(constants[tmp7]);
                tmp16 = tmp3;
              } else {
                let str = "weekday(s)";
                if ("weekday(s)" === obj.symbol) {
                  let tmp39 = obj2;
                  let nextSymbolResult2 = obj2.nextSymbol();
                  let tmp41 = obj;
                  tmp16 = tmp3;
                  if (!obj.byweekday) {
                    let tmp42 = obj;
                    let tmp43 = constants;
                    let items = [constants.MO, , , , ];
                    let tmp44 = constants;
                    items[1] = constants.TU;
                    let tmp45 = constants;
                    items[2] = constants.WE;
                    let tmp46 = constants;
                    items[3] = constants.TH;
                    let tmp47 = constants;
                    items[4] = constants.FR;
                    obj.byweekday = items;
                    tmp16 = tmp3;
                  }
                } else {
                  let tmp70 = obj2;
                  let str9 = "week(s)";
                  if ("week(s)" === obj2.symbol) {
                    let tmp17 = obj2;
                    let nextSymbolResult3 = obj2.nextSymbol();
                    let tmp19 = obj2;
                    let acceptNumberResult = obj2.acceptNumber();
                    let tmp21 = globalThis;
                    if (acceptNumberResult) {
                      let tmp27 = obj;
                      let _parseInt = parseInt;
                      let num = 0;
                      let num2 = 10;
                      let items1 = [parseInt(acceptNumberResult[0], 10)];
                      obj.byweekno = items1;
                      let tmp28 = obj2;
                      let str4 = "comma";
                      tmp16 = acceptNumberResult;
                      if (obj2.accept("comma")) {
                        let tmp29 = obj2;
                        let acceptNumberResult1 = obj2.acceptNumber();
                        while (acceptNumberResult1) {
                          let tmp36 = obj;
                          let byweekno = obj.byweekno;
                          let _parseInt2 = parseInt;
                          let arr2 = byweekno.push(parseInt(acceptNumberResult1[0], 10));
                          let tmp38 = obj2;
                          tmp16 = acceptNumberResult1;
                          continue;
                        }
                        let _Error2 = Error;
                        let tmp31 = obj2;
                        let str5 = "Unexpected symbol ";
                        let tmp32 = new.target;
                        let str6 = "; expected monthday";
                        let tmp33 = new.target;
                        let error = new Error("Unexpected symbol " + obj2.symbol + "; expected monthday");
                        let tmp35 = error;
                        throw error;
                      }
                    } else {
                      let _Error = Error;
                      let tmp22 = obj2;
                      let str2 = "Unexpected symbol ";
                      let tmp23 = new.target;
                      let str3 = ", expected week number";
                      let tmp24 = new.target;
                      let error1 = new Error("Unexpected symbol " + obj2.symbol + ", expected week number");
                      let tmp26 = error1;
                      throw error1;
                    }
                  } else if (!tmp9) {
                    break;
                  } else {
                    let tmp10 = obj2;
                    let nextSymbolResult4 = obj2.nextSymbol();
                    let tmp12 = obj;
                    if (!obj.bymonth) {
                      let tmp13 = obj;
                      obj.bymonth = [];
                    }
                    let tmp14 = obj;
                    let bymonth = obj.bymonth;
                    let arr3 = bymonth.push(tmp9);
                    tmp16 = tmp3;
                  }
                }
              }
            }
            let tmp67 = obj2;
            let str8 = "comma";
            let tmp3 = tmp16;
            if (obj2.accept("comma")) {
              continue;
            } else {
              let tmp68 = obj2;
              tmp3 = tmp16;
              if (obj2.accept("the")) {
                continue;
              } else {
                let tmp69 = obj2;
                tmp3 = tmp16;
              }
              continue;
            }
            continue;
          }
        }
      }
      function o() {
        const symbol = obj2.symbol;
        if ("january" === symbol) {
          return 1;
        } else if ("february" === symbol) {
          return 2;
        } else if ("march" === symbol) {
          return 3;
        } else if ("april" === symbol) {
          return 4;
        } else if ("may" === symbol) {
          return 5;
        } else if ("june" === symbol) {
          return 6;
        } else if ("july" === symbol) {
          return 7;
        } else if ("august" === symbol) {
          return 8;
        } else if ("september" === symbol) {
          return 9;
        } else if ("october" === symbol) {
          return 10;
        } else if ("november" === symbol) {
          return 11;
        } else if ("december" === symbol) {
          return 12;
        } else {
          return false;
        }
      }
      function a() {
        const symbol = obj2.symbol;
        if ("monday" !== symbol) {
          if ("tuesday" !== symbol) {
            if ("wednesday" !== symbol) {
              if ("thursday" !== symbol) {
                if ("friday" !== symbol) {
                  if ("saturday" !== symbol) {
                    if ("sunday" !== symbol) {
                      return false;
                    }
                  }
                }
              }
            }
          }
        }
        return obj2.symbol.substr(0, 2).toUpperCase();
      }
      function s() {
        const symbol = obj2.symbol;
        if ("last" === symbol) {
          obj2.nextSymbol();
          return -1;
        } else if ("first" === symbol) {
          obj2.nextSymbol();
          return 1;
        } else if ("second" === symbol) {
          obj2.nextSymbol();
          let num6 = 2;
          if (obj2.accept("last")) {
            num6 = -2;
          }
          return num6;
        } else if ("third" === symbol) {
          obj2.nextSymbol();
          let num5 = 3;
          if (obj2.accept("last")) {
            num5 = -3;
          }
          return num5;
        } else if ("nth" === symbol) {
          const _parseInt = parseInt;
          const parsed = parseInt(obj2.value[1], 10);
          if (parsed >= -366) {
            if (parsed <= 366) {
              obj2.nextSymbol();
              let tmp7 = parsed;
              if (obj2.accept("last")) {
                tmp7 = -parsed;
              }
              return tmp7;
            }
          }
          const _Error = Error;
          const error = new Error("Nth out of range: " + parsed);
          throw error;
        } else {
          return false;
        }
      }
      function u() {
        if ("until" === obj2.symbol) {
          const _Date = Date;
          const parsed = Date.parse(obj2.text);
          if (parsed) {
            const _Date2 = Date;
            const date = new Date(parsed);
            obj.until = date;
          } else {
            const _Error = Error;
            const error = new Error("Cannot parse until date:" + obj2.text);
            throw error;
          }
        } else if (obj2.accept("for")) {
          const _parseInt = parseInt;
          obj.count = parseInt(obj2.value[0], 10);
          obj2.expect("number");
        }
      }
      if (undefined === arg1) {
        tmp = closure_39;
      }
      const obj = {};
      const obj2 = new closure_44(tmp.tokens);
      let closure_1 = obj2;
      let tmp2 = null;
      if (obj2.start(arg0)) {
        () => {
          let expectResult = obj2.expect("every");
          const acceptNumberResult = obj2.acceptNumber();
          if (acceptNumberResult) {
            const _parseInt = parseInt;
            obj.interval = parseInt(acceptNumberResult[0], 10);
          }
          if (obj2.isDone()) {
            expectResult = globalThis;
            const _Error9 = Error;
            expectResult = new.target;
            expectResult = new.target;
            expectResult = new Error("Unexpected end");
            throw expectResult;
          } else {
            const symbol = obj2.symbol;
            if ("day(s)" === symbol) {
              expectResult = obj;
              expectResult = constants;
              obj.freq = constants.DAILY;
              expectResult = obj2;
              if (obj2.nextSymbol()) {
                expectResult = obj2;
                expectResult = globalThis;
                if (obj2.accept("at")) {
                  expectResult = obj2;
                  expectResult = obj2.acceptNumber();
                  while (expectResult) {
                    expectResult = obj;
                    let _parseInt2 = parseInt;
                    let items = [parseInt(expectResult[0], 10)];
                    obj.byhour = items;
                    expectResult = obj2;
                    if (obj2.accept("comma")) {
                      expectResult = obj2;
                      expectResult = obj2.acceptNumber();
                      while (expectResult) {
                        expectResult = obj;
                        let byhour = obj.byhour;
                        let _parseInt3 = parseInt;
                        expectResult = byhour.push(parseInt(expectResult[0], 10));
                        expectResult = obj2;
                        continue;
                      }
                      let _Error8 = Error;
                      expectResult = obj2;
                      let str29 = "Unexpected symbol ";
                      expectResult = new.target;
                      let str30 = "; expected hour";
                      expectResult = new.target;
                      expectResult = new Error("Unexpected symbol " + obj2.symbol + "; expected hour");
                      throw expectResult;
                    }
                    expectResult = obj2;
                    if (obj2.accept("comma")) {
                      continue;
                    } else {
                      expectResult = obj2;
                    }
                    continue;
                  }
                  const _Error7 = Error;
                  expectResult = obj2;
                  expectResult = new.target;
                  expectResult = new.target;
                  expectResult = new Error("Unexpected symbol " + obj2.symbol + ", expected hour");
                  throw expectResult;
                }
                expectResult = u;
                expectResult = u();
              }
            } else if ("weekday(s)" === symbol) {
              expectResult = obj;
              expectResult = constants;
              obj.freq = constants.WEEKLY;
              expectResult = obj;
              expectResult = constants;
              const items1 = [constants.MO, , , , ];
              expectResult = constants;
              items1[1] = constants.TU;
              expectResult = constants;
              items1[2] = constants.WE;
              expectResult = constants;
              items1[3] = constants.TH;
              expectResult = constants;
              items1[4] = constants.FR;
              obj.byweekday = items1;
              expectResult = obj2;
              expectResult = obj2.nextSymbol();
              expectResult = u;
              expectResult = u();
            } else if ("week(s)" === symbol) {
              expectResult = obj;
              expectResult = constants;
              obj.freq = constants.WEEKLY;
              expectResult = obj2;
              if (obj2.nextSymbol()) {
                expectResult = i;
                expectResult = i();
                expectResult = u;
                expectResult = u();
              }
            } else if ("hour(s)" === symbol) {
              expectResult = obj;
              expectResult = constants;
              obj.freq = constants.HOURLY;
              expectResult = obj2;
              if (obj2.nextSymbol()) {
                expectResult = i;
                expectResult = i();
                expectResult = u;
                expectResult = u();
              }
            } else if ("minute(s)" === symbol) {
              expectResult = obj;
              expectResult = constants;
              obj.freq = constants.MINUTELY;
              expectResult = obj2;
              if (obj2.nextSymbol()) {
                expectResult = i;
                expectResult = i();
                expectResult = u;
                expectResult = u();
              }
            } else if ("month(s)" === symbol) {
              expectResult = constants;
              obj.freq = constants.MONTHLY;
              expectResult = obj2;
              if (obj2.nextSymbol()) {
                expectResult = i;
                expectResult = i();
                expectResult = u;
                expectResult = u();
              }
            } else if ("year(s)" === symbol) {
              obj.freq = constants.YEARLY;
              if (obj2.nextSymbol()) {
                i();
                u();
              }
            } else {
              if ("monday" !== symbol) {
                if ("tuesday" !== symbol) {
                  if ("wednesday" !== symbol) {
                    if ("thursday" !== symbol) {
                      if ("friday" !== symbol) {
                        if ("saturday" !== symbol) {
                          if ("sunday" !== symbol) {
                            if ("january" !== symbol) {
                              if ("february" !== symbol) {
                                if ("march" !== symbol) {
                                  if ("april" !== symbol) {
                                    if ("may" !== symbol) {
                                      if ("june" !== symbol) {
                                        if ("july" !== symbol) {
                                          if ("august" !== symbol) {
                                            if ("september" !== symbol) {
                                              if ("october" !== symbol) {
                                                if ("november" !== symbol) {
                                                  if ("december" !== symbol) {
                                                    const _Error = Error;
                                                    const error = new Error("Unknown symbol");
                                                    throw error;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            obj.freq = constants.YEARLY;
                            const items2 = [o()];
                            obj.bymonth = items2;
                            if (obj2.nextSymbol()) {
                              if (obj2.accept("comma")) {
                                while (!obj2.isDone()) {
                                  let tmp18 = o;
                                  let tmp19 = o();
                                  if (tmp19) {
                                    let tmp26 = obj;
                                    let bymonth = obj.bymonth;
                                    let arr = bymonth.push(tmp19);
                                    let tmp28 = obj2;
                                    let nextSymbolResult = obj2.nextSymbol();
                                    let tmp30 = obj2;
                                  } else {
                                    let tmp20 = globalThis;
                                    let _Error2 = Error;
                                    let tmp21 = obj2;
                                    let str12 = "Unexpected symbol ";
                                    let tmp22 = new.target;
                                    let str13 = ", expected month";
                                    let tmp23 = new.target;
                                    let error1 = new Error("Unexpected symbol " + obj2.symbol + ", expected month");
                                    let tmp25 = error1;
                                    throw error1;
                                  }
                                }
                                const _Error3 = Error;
                                const error2 = new Error("Unexpected end");
                                throw error2;
                              }
                              i();
                              u();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              obj.freq = constants.WEEKLY;
              const str16 = obj2.symbol.substr(0, 2);
              const items3 = [constants[str16.toUpperCase(str16)]];
              obj.byweekday = items3;
              if (obj2.nextSymbol()) {
                if (obj2.accept("comma")) {
                  while (!obj2.isDone()) {
                    let tmp48 = a;
                    let tmp49 = a();
                    if (tmp49) {
                      let tmp56 = obj;
                      let byweekday = obj.byweekday;
                      let tmp57 = constants;
                      arr = byweekday.push(constants[tmp49]);
                      let tmp59 = obj2;
                      let nextSymbolResult1 = obj2.nextSymbol();
                      let tmp61 = obj2;
                    } else {
                      let tmp50 = globalThis;
                      let _Error4 = Error;
                      let tmp51 = obj2;
                      let str18 = "Unexpected symbol ";
                      let tmp52 = new.target;
                      let str19 = ", expected weekday";
                      let tmp53 = new.target;
                      let error3 = new Error("Unexpected symbol " + obj2.symbol + ", expected weekday");
                      let tmp55 = error3;
                      throw error3;
                    }
                  }
                  const _Error6 = Error;
                  const error4 = new Error("Unexpected end");
                  throw error4;
                }
                obj2.accept("on");
                obj2.accept("the");
                const tmp67 = s();
                if (tmp67) {
                  const items4 = [tmp67];
                  obj.bymonthday = items4;
                  obj2.nextSymbol();
                  if (obj2.accept("comma")) {
                    const tmp73 = s();
                    while (tmp73) {
                      let tmp80 = obj;
                      let bymonthday = obj.bymonthday;
                      let arr1 = bymonthday.push(tmp73);
                      let tmp82 = obj2;
                      let nextSymbolResult3 = obj2.nextSymbol();
                      let tmp84 = obj2;
                    }
                    const _Error5 = Error;
                    const error5 = new Error("Unexpected symbol " + obj2.symbol + "; expected monthday");
                    throw error5;
                  }
                }
                u();
              }
              const str15 = obj2.symbol;
            }
          }
        }();
        tmp2 = obj;
      }
      return tmp2;
    }
    function $(arg0) {
      return arg0 < obj2.HOURLY;
    }
    function rt(arg0) {
      const items = [];
      const keys = Object.keys(arg0);
      for (let num = 0; num < keys.length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = p;
        let tmp3 = closure_62;
        if (!p(closure_62, tmp)) {
          let arr = items.push(tmp);
        }
        let tmp5 = E;
        let tmp6 = E(arg0[tmp]);
        if (tmp6) {
          let tmp7 = T;
          tmp6 = !T(arg0[tmp]);
        }
        if (tmp6) {
          arr = items.push(tmp);
        }
      }
      if (items.length) {
        const _Error = Error;
        const error = new Error("Invalid options: " + items.join(", "));
        throw error;
      } else {
        return H({}, arg0);
      }
    }
    function ot(str) {
      const parts = str.split("\n");
      const mapped = parts.map(st);
      const found = mapped.filter((arg0) => null !== arg0);
      return H(H({}, found[0]), found[1]);
    }
    function at(arg0) {
      const obj = {};
      const match = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(arg0);
      if (match) {
        if (match[1]) {
          obj.tzid = tmp2;
        }
        obj.dtstart = A(match[2]);
        return obj;
      } else {
        return obj;
      }
      const obj2 = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i;
    }
    function st(str) {
      const replaced = str.replace(/^\s+|\s+$/, "");
      if (replaced.length) {
        const match = /^([A-Z]+?)[:;]/.exec(replaced.toUpperCase());
        if (match) {
          const formatted = str.toUpperCase();
          if ("RRULE" !== formatted) {
            if ("EXRULE" !== formatted) {
              if ("DTSTART" === formatted) {
                return at(replaced);
              } else {
                const _Error = Error;
                const concat = "Unsupported RFC prop ".concat;
                const combined = "Unsupported RFC prop ".concat(str, " in ");
                const error = new Error(combined.concat(replaced));
                throw error;
              }
            }
          }
          return ut(replaced);
        } else {
          return ut(replaced);
        }
        const obj = /^([A-Z]+?)[:;]/;
      } else {
        return null;
      }
    }
    function ut(str) {
      const tmp = at(str.replace(/^RRULE:/i, ""));
      let closure_1 = tmp;
      const parts = str.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
      const item = parts.forEach((str) => {
        const parts = str.split("=");
        const formatted = str.toUpperCase();
        if ("FREQ" === formatted) {
          tmp.freq = closure_37[str2.toUpperCase(str2)];
        } else if ("WKST" === formatted) {
          tmp.wkst = closure_60[str2.toUpperCase(str2)];
        } else {
          if ("COUNT" !== formatted) {
            if ("INTERVAL" !== formatted) {
              if ("BYSETPOS" !== formatted) {
                if ("BYMONTH" !== formatted) {
                  if ("BYMONTHDAY" !== formatted) {
                    if ("BYYEARDAY" !== formatted) {
                      if ("BYWEEKNO" !== formatted) {
                        if ("BYHOUR" !== formatted) {
                          if ("BYMINUTE" !== formatted) {
                            if ("BYSECOND" !== formatted) {
                              if ("BYWEEKDAY" !== formatted) {
                                if ("BYDAY" !== formatted) {
                                  if ("DTSTART" !== formatted) {
                                    if ("TZID" !== formatted) {
                                      if ("UNTIL" === formatted) {
                                        tmp.until = callback(str2);
                                      } else if ("BYEASTER" === formatted) {
                                        const _Number = Number;
                                        tmp.byeaster = Number(str2);
                                      } else {
                                        const _Error = Error;
                                        const error = new Error("Unknown RRULE property '" + str + "'");
                                        throw error;
                                      }
                                    }
                                  }
                                  ({ tzid: closure_1.tzid, dtstart: closure_1.dtstart } = callback2(str));
                                  const tmp14 = callback2(str);
                                }
                              }
                              tmp.byweekday = (str) => {
                                const parts = str.split(",");
                                return parts.map(() => { ... });
                              }(str2);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (-1 !== str2.indexOf(",")) {
            const parts1 = str2.split(",");
            let mapped = parts1.map(callback3);
          } else {
            mapped = callback3(str2);
          }
          tmp[str.toLowerCase()] = mapped;
        }
      });
      return tmp;
    }
    function ht(arg0) {
      let NumberResult = arg0;
      if (obj.test(arg0)) {
        const _Number = Number;
        NumberResult = Number(arg0);
      }
      return NumberResult;
    }
    function ct(tzid) {
      const items = [];
      const keys = Object.keys(tzid);
      let str = "";
      let str2 = "";
      let num = 0;
      let str3 = "";
      if (0 < keys.length) {
        do {
          let tmp8 = tmp2;
          let tmp9 = str2;
          let tmp10 = tmp3;
          let tmp11 = tmp4;
          let tmp12 = tmp5;
          let tmp13 = tmp6;
          let tmp14 = tmp7;
          if ("tzid" !== keys[num]) {
            let tmp36 = closure_13;
            tmp8 = tmp2;
            tmp9 = str2;
            tmp10 = tmp3;
            tmp11 = tmp4;
            tmp12 = tmp5;
            tmp13 = tmp6;
            tmp14 = tmp7;
            if (closure_13(tmp, keys[num])) {
              let str4 = keys[num];
              let formatted = str4.toUpperCase();
              let str5 = tzid[keys[num]];
              let tmp16 = closure_3;
              tmp8 = tmp2;
              tmp9 = str2;
              tmp10 = formatted;
              tmp11 = str5;
              tmp12 = str;
              tmp13 = tmp6;
              tmp14 = tmp7;
              if (closure_3(str5)) {
                let tmp17 = closure_6;
                if (!closure_6(str5)) {
                  if ("FREQ" === formatted) {
                    let tmp33 = closure_63;
                    let str1 = closure_63.FREQUENCIES[tzid.freq];
                    let tmp19 = tmp2;
                    let tmp20 = str2;
                    let str6 = formatted;
                    let tmp21 = tmp6;
                    let tmp22 = tmp7;
                  } else if ("WKST" === formatted) {
                    let tmp26 = closure_4;
                    if (closure_4(str5)) {
                      let tmp28 = closure_2;
                      let prototype = closure_2.prototype;
                      let tmp29 = new.target;
                      let tmp30 = new.target;
                      let tmp31 = str5;
                      let str8 = new closure_2(str5);
                      let tmp32 = str8;
                      str = str8.toString();
                    } else {
                      str = str5.toString();
                    }
                    str1 = str;
                    tmp19 = tmp2;
                    tmp20 = str2;
                    str6 = formatted;
                    tmp21 = tmp6;
                    tmp22 = tmp7;
                  } else if ("BYWEEKDAY" === formatted) {
                    let tmp25 = closure_6;
                    let arr4 = str5;
                    if (!closure_6(str5)) {
                      let items1 = [str5];
                      arr4 = items1;
                    }
                    let str7 = arr4.map((arg0) => {
                      let tmp8;
                      let tmp9;
                      let tmp = arg0;
                      if (arg0 instanceof closure_2) {
                        return tmp;
                      } else {
                        let tmp3 = closure_2;
                        if (callback(tmp)) {
                          const prototype2 = tmp3.prototype;
                          [tmp8, tmp9] = tmp;
                          tmp = new.target;
                          tmp3 = new tmp3(tmp8, tmp9);
                        } else {
                          const prototype = tmp3.prototype;
                          tmp3 = new tmp3(tmp);
                        }
                      }
                    });
                    str1 = str7.toString();
                    tmp19 = str5;
                    tmp20 = str2;
                    str6 = "BYDAY";
                    tmp21 = tmp6;
                    tmp22 = tmp7;
                  } else if ("DTSTART" === formatted) {
                    let tmp24 = closure_77;
                    tmp20 = closure_77(str5, tzid.tzid);
                    tmp19 = tmp2;
                    str6 = formatted;
                    str1 = str;
                    tmp21 = tmp6;
                    tmp22 = tmp7;
                  } else if ("UNTIL" === formatted) {
                    let tmp23 = closure_31;
                    str1 = closure_31(str5, !tzid.tzid);
                    tmp19 = tmp2;
                    tmp20 = str2;
                    str6 = formatted;
                    tmp21 = tmp6;
                    tmp22 = tmp7;
                  } else {
                    let tmp37 = closure_6;
                    if (closure_6(str5)) {
                      let items2 = [];
                      let num2 = 0;
                      let num3 = 0;
                      if (0 < str5.length) {
                        do {
                          let _String2 = String;
                          items2[num2] = String(str5[num2]);
                          num2 = num2 + 1;
                          num3 = num2;
                          let length = str5.length;
                        } while (num2 < length);
                      }
                      str1 = items2.toString();
                      tmp22 = num3;
                      tmp19 = tmp2;
                      tmp20 = str2;
                      str6 = formatted;
                      tmp21 = items2;
                    } else {
                      let _String = String;
                      str1 = String(str5);
                      tmp19 = tmp2;
                      tmp20 = str2;
                      str6 = formatted;
                      tmp21 = tmp6;
                      tmp22 = tmp7;
                    }
                  }
                  tmp8 = tmp19;
                  tmp9 = tmp20;
                  tmp10 = str6;
                  tmp11 = str5;
                  tmp13 = tmp21;
                  tmp14 = tmp22;
                  tmp12 = str1;
                  if (str1) {
                    let items3 = [str6, str1];
                    let arr = items.push(items3);
                    tmp8 = tmp19;
                    tmp9 = tmp20;
                    tmp10 = str6;
                    tmp11 = str5;
                    tmp12 = str1;
                    tmp13 = tmp21;
                    tmp14 = tmp22;
                  }
                } else {
                  tmp8 = tmp2;
                  tmp9 = str2;
                  tmp10 = formatted;
                  tmp11 = str5;
                  tmp12 = str;
                  tmp13 = tmp6;
                  tmp14 = tmp7;
                }
              }
            }
          }
          num = num + 1;
          let tmp2 = tmp8;
          str2 = tmp9;
          let tmp3 = tmp10;
          let tmp4 = tmp11;
          let tmp5 = tmp12;
          let tmp6 = tmp13;
          let tmp7 = tmp14;
          str3 = tmp9;
        } while (num < keys.length);
      }
      const mapped = items.map((arg0) => {
        const combined = "".concat(arg0[0], "=");
        return combined.concat(arg0[1].toString());
      });
      const joined = mapped.join(";");
      if (str !== joined) {
        const concat = "RRULE:".concat;
        str = "RRULE:".concat(joined);
      }
      const items4 = [str3, str];
      const found = items4.filter((arg0) => arg0);
      return found.join("\n");
    }
    function dt(arg0, arg1) {
      let str = "";
      if (arg0) {
        const _Date = Date;
        const date = new Date(arg0);
        const prototype2 = ctor.prototype;
        const str2 = new ctor(date, arg1);
        str = `DTSTART${str2.toString()}`;
      }
      return str;
    }
    function lt(arr, getTime) {
      if (Array.isArray(arr)) {
        const _Array = Array;
        const tmp4 = !Array.isArray(getTime);
        let everyResult = !tmp4;
        if (!tmp4) {
          everyResult = arr.length === getTime.length;
        }
        if (everyResult) {
          everyResult = arr.every((getTime) => {
            const time = getTime.getTime();
            return time === arg1[arg1].getTime();
          });
        }
        let tmp = everyResult;
      } else {
        const _Date = Date;
        if (arr instanceof Date) {
          const _Date2 = Date;
          let tmp2 = getTime instanceof Date;
          if (tmp2) {
            const time = arr.getTime();
            tmp2 = time === getTime.getTime();
          }
          tmp = tmp2;
        } else {
          tmp = arr === getTime;
        }
      }
      return tmp;
    }
    function Nt(arg0, arg1, arg2, arg3, yearordinal) {
      const items = [];
      for (let num = 0; num < arg0.length; num = num + 1) {
        let tmp = arg0[num];
        if (tmp < 0) {
          let _Math2 = Math;
          let rounded = Math.floor(tmp / arg1.length);
          let tmp5 = c;
          let tmp4 = c(tmp, arg1.length);
        } else {
          let _Math = Math;
          rounded = Math.floor((tmp - 1) / arg1.length);
          let tmp3 = c;
          tmp4 = c(tmp - 1, arg1.length);
        }
        let items1 = [];
        let sum = arg2;
        if (arg2 < arg3) {
          do {
            let tmp7 = arg5[sum];
            let tmp8 = closure_3;
            if (closure_3(tmp7)) {
              let arr = items1.push(tmp7);
            }
            sum = sum + 1;
            let tmp10 = tmp7;
          } while (sum < arg3);
        }
        if (rounded < 0) {
          let first = items1.slice(rounded)[0];
        } else {
          first = items1[rounded];
        }
        let tmp12 = D;
        let tmp13 = L;
        let tmp14 = L(D(yearordinal.yearordinal + first), arg1[tmp4]);
        let tmp15 = p;
        if (!p(items, tmp14)) {
          arr = items.push(tmp14);
        }
      }
      R(items);
      return items;
    }
    function At(accept, interval) {
      let bysetpos;
      let count;
      let dtstart;
      let freq;
      let tmp2;
      let tmp3;
      let tmp4;
      let until;
      ({ dtstart, freq, until, bysetpos, count } = interval);
      if (0 !== count) {
        if (0 !== interval.interval) {
          const fromDateResult = closure_47.fromDate(dtstart);
          const prototype = ctor2.prototype;
          const obj2 = new ctor2(interval);
          obj2.rebuild(fromDateResult.year, fromDateResult.month);
          let arr2 = (gettimeset, fromDateResult, interval) => {
            let byhour;
            let byminute;
            let bysecond;
            let freq;
            ({ freq, byhour, byminute, bysecond } = interval);
            if (callback3(freq)) {
              let items = (dtstart) => {
                dtstart = dtstart.dtstart;
                let closure_1 = dtstart.getTime() % 1000;
                const items = [];
                if (callback(dtstart.freq)) {
                  const byhour = dtstart.byhour;
                  const item = byhour.forEach(() => { ... });
                  return items;
                } else {
                  return items;
                }
              }(interval);
            } else {
              if (freq >= constants.HOURLY) {
                items = [];
              }
              items = gettimeset.gettimeset(freq)(fromDateResult.hour, fromDateResult.minute, fromDateResult.second, fromDateResult.millisecond);
            }
            return items;
          }(obj2, fromDateResult, interval);
          while (true) {
            let tmp = obj2.getdayset(freq)(fromDateResult.year, fromDateResult.month, fromDateResult.day);
            [tmp2, tmp3, tmp4] = tmp;
            let tmp5 = Wt;
            let tmp6 = tmp2;
            let tmp7 = tmp3;
            let tmp8 = tmp4;
            let tmp9 = obj2;
            let tmp10 = interval;
            let tmp12 = f;
            let tmp11 = Wt(tmp2, tmp3, tmp4, tmp65, interval);
            if (f(bysetpos)) {
              let tmp37 = Nt;
              let tmp38 = bysetpos;
              let tmp39 = arr2;
              let tmp40 = tmp3;
              let tmp41 = tmp4;
              let tmp42 = obj2;
              let tmp43 = tmp2;
              let arr = Nt(bysetpos, arr2, tmp3, tmp4, tmp65, tmp2);
              let tmp44 = count;
              let num3 = 0;
              let tmp16 = count;
              let tmp17 = arr;
              let tmp18 = tmp53;
              let tmp19 = tmp54;
              let tmp20 = tmp55;
              let tmp21 = tmp56;
              if (0 < arr.length) {
                while (true) {
                  let tmp45 = arr[num3];
                  if (until) {
                    if (tmp45 > until) {
                      break;
                    }
                  }
                  let diff = tmp44;
                  if (tmp45 >= dtstart) {
                    let tmp47 = It;
                    if (accept.accept(It(tmp45, interval))) {
                      diff = tmp44;
                      if (tmp44) {
                        diff = tmp44 - 1;
                        if (!diff) {
                          let tmp49 = jt;
                          return jt(accept);
                        }
                      }
                    } else {
                      let tmp48 = jt;
                      return jt(accept);
                    }
                  }
                  num3 = num3 + 1;
                  tmp44 = diff;
                  tmp16 = diff;
                  tmp17 = arr;
                  tmp18 = tmp45;
                  tmp19 = tmp54;
                  tmp20 = tmp55;
                  tmp21 = tmp56;
                  continue;
                }
                let tmp59 = jt;
                return jt(accept);
              }
            } else {
              let tmp13 = count;
              let tmp14 = tmp53;
              let tmp15 = tmp55;
              let num = tmp56;
              tmp16 = count;
              tmp17 = tmp52;
              tmp18 = tmp53;
              tmp19 = tmp54;
              tmp20 = tmp55;
              tmp21 = tmp56;
              let sum = tmp3;
              if (tmp3 < tmp4) {
                while (true) {
                  let tmp23 = tmp2[sum];
                  let tmp24 = i;
                  let tmp25 = tmp13;
                  let tmp26 = tmp14;
                  if (i(tmp23)) {
                    let tmp27 = D;
                    let tmp28 = D(obj2.yearordinal + tmp23);
                    let tmp29 = tmp13;
                    let num2 = 0;
                    tmp25 = tmp13;
                    tmp26 = tmp14;
                    tmp15 = tmp28;
                    num = 0;
                    if (0 < arr2.length) {
                      while (true) {
                        let tmp30 = L;
                        let tmp31 = L(tmp28, arr2[num2]);
                        if (until) {
                          if (tmp31 > until) {
                            break;
                          }
                        }
                        let diff1 = tmp29;
                        if (tmp31 >= dtstart) {
                          let tmp33 = It;
                          if (accept.accept(It(tmp31, interval))) {
                            diff1 = tmp29;
                            if (tmp29) {
                              diff1 = tmp29 - 1;
                              if (!diff1) {
                                let tmp35 = jt;
                                return jt(accept);
                              }
                            }
                          } else {
                            let tmp34 = jt;
                            return jt(accept);
                          }
                        }
                        num2 = num2 + 1;
                        tmp29 = diff1;
                        tmp25 = diff1;
                        tmp26 = tmp31;
                        tmp15 = tmp28;
                        num = num2;
                        continue;
                      }
                      let tmp36 = jt;
                      return jt(accept);
                    }
                  }
                  sum = sum + 1;
                  tmp13 = tmp25;
                  tmp14 = tmp26;
                  tmp16 = tmp25;
                  tmp17 = tmp52;
                  tmp18 = tmp26;
                  tmp19 = tmp23;
                  tmp20 = tmp15;
                  tmp21 = num;
                  continue;
                }
              }
            }
            if (0 === interval.interval) {
              let tmp58 = jt;
              return jt(accept);
            } else {
              let addResult = fromDateResult.add(interval, tmp11);
              if (fromDateResult.year > 9999) {
                let tmp57 = jt;
                return jt(accept);
              } else {
                let tmp50 = $;
                if (!$(freq)) {
                  let num4 = 0;
                  arr2 = obj2.gettimeset(freq)(fromDateResult.hour, fromDateResult.minute, fromDateResult.second, 0);
                }
                let rebuildResult1 = obj2.rebuild(fromDateResult.year, fromDateResult.month);
                count = tmp16;
                let tmp52 = tmp17;
                let tmp53 = tmp18;
                let tmp54 = tmp19;
                let tmp55 = tmp20;
                let tmp56 = tmp21;
                // continue
              }
            }
          }
        }
      }
      return jt(accept);
    }
    function Ct(nwdaymask) {
      let byeaster;
      let bymonth;
      let bymonthday;
      let bynmonthday;
      let byweekday;
      let byweekno;
      let byyearday;
      ({ bymonth, byweekday, bymonthday, bynmonthday, byyearday } = arg2);
      ({ byweekno, byeaster } = arg2);
      let tmp = f(bymonth);
      if (tmp) {
        tmp = !p(bymonth, nwdaymask.mmask[arg1]);
      }
      if (!tmp) {
        tmp = f(byweekno) && !nwdaymask.wnomask[arg1];
        const tmp4 = f(byweekno) && !nwdaymask.wnomask[arg1];
      }
      if (!tmp) {
        let tmp6 = f(byweekday);
        if (tmp6) {
          tmp6 = !p(byweekday, nwdaymask.wdaymask[arg1]);
        }
        tmp = tmp6;
      }
      if (!tmp) {
        tmp = f(nwdaymask.nwdaymask) && !nwdaymask.nwdaymask[arg1];
        const tmp9 = f(nwdaymask.nwdaymask) && !nwdaymask.nwdaymask[arg1];
      }
      if (!tmp) {
        let tmp11 = null !== byeaster;
        if (tmp11) {
          tmp11 = !p(nwdaymask.eastermask, arg1);
        }
        tmp = tmp11;
      }
      if (!tmp) {
        let tmp14 = f(bymonthday);
        if (!tmp14) {
          tmp14 = f(bynmonthday);
        }
        if (tmp14) {
          tmp14 = !p(bymonthday, nwdaymask.mdaymask[arg1]);
        }
        if (tmp14) {
          tmp14 = !p(bynmonthday, nwdaymask.nmdaymask[arg1]);
        }
        tmp = tmp14;
      }
      if (!tmp) {
        let tmp19 = f(byyearday);
        if (tmp19) {
          let tmp20 = arg1 < nwdaymask.yearlen;
          if (tmp20) {
            tmp20 = !p(byyearday, arg1 + 1);
          }
          if (tmp20) {
            tmp20 = !p(byyearday, -nwdaymask.yearlen + arg1);
          }
          if (!tmp20) {
            let tmp23 = arg1 >= nwdaymask.yearlen;
            if (tmp23) {
              tmp23 = !p(byyearday, arg1 + 1 - nwdaymask.yearlen);
            }
            if (tmp23) {
              tmp23 = !p(byyearday, -nwdaymask.nextyearlen + arg1 - nwdaymask.yearlen);
            }
            tmp20 = tmp23;
          }
          tmp19 = tmp20;
        }
        tmp = tmp19;
      }
      return tmp;
    }
    function It(arg0, tzid) {
      return new closure_48(arg0, tzid.tzid).rezonedDate();
    }
    function jt(getValue) {
      return getValue.getValue();
    }
    function Wt(arg0, arg1, arg2, arg3, arg4) {
      let sum = arg1;
      let flag = false;
      if (arg1 < arg2) {
        do {
          let tmp2 = arg0[sum];
          let tmp3 = closure_81;
          let tmp4 = closure_81(arg3, tmp2, arg4);
          if (tmp4) {
            arg0[tmp2] = null;
          }
          sum = sum + 1;
          flag = tmp4;
        } while (sum < arg2);
      }
      return flag;
    }
    function Bt(arg0, arg1) {
      let obj = arg1;
      if (undefined === arg1) {
        obj = {};
      }
      return (arg0, cache) => {
        let dtstart;
        let exdatevals;
        let exrulevals;
        let rdatevals;
        let rrulevals;
        const tmp = function Kt(str, unfold) {
          let sum;
          const items = [];
          const dtstart = items;
          let closure_1 = [];
          const items1 = [];
          let closure_3 = [];
          const tmp = callback(str);
          const tzid = tmp.tzid;
          let flag = unfold.unfold;
          if (undefined === flag) {
            flag = false;
          }
          if (str) {
            str = str.trim();
          }
          if (str) {
            const split = str.split;
            if (flag) {
              const parts = split("\n");
              let num3 = 0;
              let parts1 = parts;
              if (0 < parts.length) {
                do {
                  let str6 = parts[num3];
                  let replaced = str6.replace(/\s+$/g, "");
                  parts[num3] = replaced;
                  if (replaced) {
                    if (num3 > 0) {
                      if (" " === replaced[0]) {
                        let diff = num3 - 1;
                        parts[diff] = parts[diff] + replaced.slice(1);
                        let spliceResult = parts.splice(num3, 1);
                        sum = num3;
                      }
                    }
                    sum = num3 + 1;
                  } else {
                    let spliceResult1 = parts.splice(num3, 1);
                    sum = num3;
                  }
                  num3 = sum;
                  parts1 = parts;
                } while (sum < parts.length);
              }
            } else {
              parts1 = split(/\s/);
            }
            const item = parts1.forEach(() => { ... });
            const obj = { dtstart: tmp.dtstart, tzid, rrulevals: items, rdatevals: closure_1, exrulevals: items1, exdatevals: closure_3 };
            return obj;
          } else {
            const _Error = Error;
            const error = new Error("Invalid empty string");
            throw error;
          }
        }(arg0, cache);
        ({ rrulevals, rdatevals, exrulevals, exdatevals, dtstart } = tmp);
        const tzid = tmp.tzid;
        const tmp2 = false === cache.cache;
        if (cache.compatible) {
          cache.forceset = true;
          cache.unfold = true;
        }
        if (!cache.forceset) {
          if (rrulevals.length <= 1) {
            if (!rdatevals.length) {
              if (!exrulevals.length) {
                if (!exdatevals.length) {
                  const tmp3 = rrulevals[0] || {};
                  let tmp4 = closure_63;
                  let dtstart2 = tmp3.dtstart;
                  if (!dtstart2) {
                    dtstart2 = cache.dtstart;
                  }
                  if (!dtstart2) {
                    dtstart2 = dtstart;
                  }
                  const prototype = tmp4.prototype;
                  tmp4 = new tmp4(closure_86(tmp3, dtstart2, tmp3.tzid || cache.tzid || tzid), tmp2);
                  return tmp4;
                }
              }
            }
          }
        }
        const obj = new closure_65(tmp2);
        obj.dtstart(dtstart);
        obj.tzid(tzid);
        const item = rrulevals.forEach((arg0) => {
          obj.rrule(new closure_63(callback2(arg0, dtstart, tzid), tmp2));
        });
        const item1 = rdatevals.forEach((arg0) => {
          obj.rdate(arg0);
        });
        const item2 = exrulevals.forEach((arg0) => {
          obj.exrule(new closure_63(callback2(arg0, dtstart, tzid), tmp2));
        });
        const item3 = exdatevals.forEach((arg0) => {
          obj.exdate(arg0);
        });
        if (tmp18) {
          obj.rdate(dtstart);
        }
        return obj;
      }(arg0, (arg0) => {
        const items = [];
        const keys = Object.keys(arg0);
        let closure_1 = Object.keys(closure_64);
        const item = keys.forEach((arg0) => {
          if (!callback(closure_1, arg0)) {
            items.push(arg0);
          }
        });
        if (items.length) {
          const _Error = Error;
          const error = new Error("Invalid options: " + items.join(", "));
          throw error;
        } else {
          return callback(callback({}, closure_64), arg0);
        }
      }(obj));
    }
    function Zt(arg0, dtstart, tzid) {
      return H(H({}, arg0), { dtstart, tzid });
    }
    function Xt(str, arr) {
      (arr) => {
        const item = arr.forEach((arg0) => {
          if (!obj.test(arg0)) {
            const _Error = Error;
            const error = new Error("unsupported RDATE/EXDATE parm: " + arg0);
            throw error;
          }
          const obj = /(VALUE=DATE(-TIME)?)|(TZID=)/;
        });
      }(arr);
      const parts = str.split(",");
      return parts.map((arg0) => callback(arg0));
    }
    function Gt(arg0) {
      let closure_1 = this;
      return (arg0) => {
        if (undefined !== arg0) {
          const concat = "_".concat;
          self["_".concat(arg0)] = arg0;
        }
        if (undefined !== self["_".concat("_", closure_0)]) {
          const concat2 = "_".concat;
          return self["_".concat("_", closure_0)];
        } else {
          let num = 0;
          if (0 < self._rrule.length) {
            while (!self._rrule[num].origOptions[closure_0]) {
              num = num + 1;
              let tmp7 = self;
            }
            return self._rrule[num].origOptions[closure_0];
          }
        }
      };
    }
    function $t(arg0, arr) {
      if (arg0 instanceof tmp49) {
        const _String2 = String;
        const _String3 = String;
        const mapped = arr.map(String);
        if (!p(mapped, String(arg0))) {
          arr.push(arg0);
        }
      } else {
        const _TypeError = TypeError;
        const _String = String;
        const typeError = new TypeError(String(arg0) + " is not RRule instance");
        throw typeError;
      }
    }
    function Jt(arg0, arr) {
      if (arg0 instanceof Date) {
        const _Number = Number;
        const _Number2 = Number;
        const mapped = arr.map(Number);
        if (!p(mapped, Number(arg0))) {
          arr.push(arg0);
          R(arr);
        }
      } else {
        const _TypeError = TypeError;
        const _String = String;
        const typeError = new TypeError(String(arg0) + " is not Date instance");
        throw typeError;
      }
    }
    function Vt(arg0, arr, str) {
      let tmp = !str;
      if (!tmp) {
        tmp = "UTC" === str.toUpperCase();
      }
      const concat = "".concat;
      if (tmp) {
        let combined = concat(arg0, ":");
      } else {
        const combined1 = concat(arg0, ";TZID=");
        combined = combined1.concat(str, ":");
      }
      const mapped = arr.map((arg0) => callback(arg0.valueOf(), tmp));
      const joined = mapped.join(",");
      const combined2 = "".concat(combined);
      return combined2.concat(joined);
    }
    let obj = {
      d(arg0, obj) {
        for (const key10006 in arg1) {
          let tmp4 = key10006;
          let tmp5 = closure_0;
          let oResult = closure_0.o(arg1, key10006);
          if (oResult) {
            let tmp = closure_0;
            oResult = !closure_0.o(arg0, key10006);
          }
          if (!oResult) {
            continue;
          } else {
            let _Object = Object;
            obj = { enumerable: true, get: arg1[key10006] };
            let definePropertyResult = Object.defineProperty(arg0, key10006, obj);
            // continue
          }
          continue;
        }
      },
      o(arg0, arg1) {
        return hasOwnProperty.call(arg0, arg1);
      },
      r(arg0) {
        let toStringTag = "undefined" !== typeof Symbol;
        if (toStringTag) {
          const _Symbol = Symbol;
          toStringTag = Symbol.toStringTag;
        }
        if (toStringTag) {
          const _Object = Object;
          const _Symbol2 = Symbol;
          const obj = { value: "Module" };
          Object.defineProperty(arg0, Symbol.toStringTag, obj);
        }
      }
    };
    obj = {};
    obj.r(obj);
    obj = {
      Frequency() {
        return obj2;
      },
      RRule(arg0) {
        return tmp49;
      },
      RRuleSet() {
        return closure_65;
      },
      Weekday(day, arg1) {
        return tmp3;
      },
      datetime() {
        return fn4;
      },
      rrulestr() {
        return Bt;
      }
    };
    obj.d(obj, obj);
    let closure_1 = ["<string:2726412131>", "<string:2570982608>", "<string:2211228194>", "<string:2710020484>", "<string:3784091632>", "<string:3308744951>", "<string:2816559628>"];
    let tmp3 = () => {
      class t {
        constructor(arg0, arg1) {
          self = this;
          if (0 === arg1) {
            tmp2 = globalThis;
            _Error = Error;
            prototype = Error.prototype;
            tmp3 = new.target;
            str = "Can't create weekday with n == 0";
            tmp4 = new.target;
            error = new Error("Can't create weekday with n == 0");
            tmp6 = error;
            throw error;
          } else {
            tmp = arg0;
            self.weekday = arg0;
            self.n = arg1;
            return;
          }
        }
        static fromStr(arg0) {
          tmp = new t(closure_1.indexOf(arg0));
          return tmp;
        }
        nth(arg0) {
          self = this;
          if (this.n !== arg0) {
            tmp2 = t;
            prototype = t.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = arg0;
            self = new t(tmp.weekday, arg0);
          }
          return self;
        }
        equals(arg0) {
          tmp = this.weekday === arg0.weekday && this.n === arg0.n;
          return tmp;
        }
        toString() {
          self = this;
          tmp = closure_1[this.weekday];
          sum = tmp;
          if (this.n) {
            num = 0;
            str = "";
            if (self.n > 0) {
              str = "+";
            }
            tmp3 = globalThis;
            _String = String;
            sum = str + String(self.n) + tmp;
          }
          return sum;
        }
        getJsWeekday() {
          num = 0;
          if (6 !== this.weekday) {
            num2 = 1;
            num = this.weekday + 1;
          }
          return num;
        }
      }
      return t;
    }();
    function i(arg0) {
      return null != arg0;
    }
    function o(arg0) {
      return "number" === typeof arg0;
    }
    function a(arg0) {
      let hasItem = "string" === typeof arg0;
      if (hasItem) {
        hasItem = closure_1.includes(arg0);
      }
      return hasItem;
    }
    const fn2 = function u(arg0, arg1) {
      let tmp = arg1;
      if (undefined === arg1) {
        tmp = arg0;
      }
      let num = arg0;
      if (1 === arguments.length) {
        num = 0;
        tmp = arg0;
      }
      const items = [];
      if (num < tmp) {
        do {
          let arr = items.push(num);
          num = num + 1;
        } while (num < tmp);
      }
      return items;
    };
    const fn3 = function h(arg0, arg1) {
      const items = [];
      if (isArray(arg0)) {
        let num2 = 0;
        if (tmp) {
          do {
            let items1 = [];
            items[num2] = items1.concat(arg0);
            num2 = num2 + 1;
          } while (num2 < arg1);
        }
      } else {
        let num = 0;
        if (tmp) {
          do {
            items[num] = arg0;
            num = num + 1;
          } while (num < arg1);
        }
      }
      return items;
    };
    function c(arg0, arg1) {
      const result = arg0 % arg1;
      let sum = result;
      if (result * arg1 < 0) {
        sum = result + arg1;
      }
      return sum;
    }
    function d(arg0, arg1) {
      return { div: Math.floor(arg0 / arg1), mod: c(arg0, arg1) };
    }
    function l(arg0) {
      let tmp = !i(arg0);
      if (!tmp) {
        tmp = 0 === arg0.length;
      }
      return tmp;
    }
    function f(arg0) {
      return !l(arg0);
    }
    function p(arr) {
      let tmp = f(arr);
      if (tmp) {
        tmp = -1 !== arr.indexOf(arg1);
      }
      return tmp;
    }
    const fn4 = function b(arg0, arg1, arg2) {
      let num = arg3;
      let num2 = arg4;
      let num3 = arg5;
      if (undefined === arg3) {
        num = 0;
      }
      if (undefined === num2) {
        num2 = 0;
      }
      if (undefined === num3) {
        num3 = 0;
      }
      return new Date(Date.UTC(arg0, arg1 - 1, arg2, num, num2, num3));
    };
    let closure_15 = [null, null, "k", "t", "T", "a", "B", "H", "k", "t", "T", "a"];
    let closure_16 = fn4(1970, 1, 1);
    let closure_17 = [false, false, false, false, false, false, false];
    function k(arg0) {
      let tmp = arg0 % 4 === 0;
      if (tmp) {
        tmp = arg0 % 100 !== 0;
      }
      if (!tmp) {
        tmp = arg0 % 400 === 0;
      }
      return tmp;
    }
    function E(arg0) {
      return arg0 instanceof Date;
    }
    function T(getTime) {
      let tmp = E(getTime);
      if (tmp) {
        const _isNaN = isNaN;
        tmp = !isNaN(getTime.getTime());
      }
      return tmp;
    }
    function x(getTimezoneOffset) {
      return 60 * getTimezoneOffset.getTimezoneOffset() * 1000;
    }
    function O(getTime) {
      const time = getTime.getTime();
      const diff = time - x(getTime);
      const time1 = store.getTime();
      return Math.round((diff - (time1 - x(store))) / 86400000);
    }
    function D(arg0) {
      return new Date(store.getTime() + arg0 * 86400000);
    }
    function S(getUTCMonth) {
      const uTCMonth = getUTCMonth.getUTCMonth();
      if (1 !== uTCMonth) {
        let num = closure_15[uTCMonth];
      } else {
        num = 29;
      }
      return num;
    }
    function U(arg0) {
      return closure_17[arg0.getUTCDay(arg0)];
    }
    function Y(arg0, arg1) {
      const tmp = fn4(arg0, arg1 + 1, 1);
      const items = [U(tmp), S(tmp)];
      return items;
    }
    function L(getUTCFullYear) {
      let obj = arg1;
      if (!arg1) {
        obj = getUTCFullYear;
      }
      const uTCFullYear = getUTCFullYear.getUTCFullYear();
      const uTCMonth = getUTCFullYear.getUTCMonth();
      const uTCDate = getUTCFullYear.getUTCDate();
      const hours = obj.getHours();
      const minutes = obj.getMinutes();
      const seconds = obj.getSeconds();
      return new Date(Date.UTC(uTCFullYear, uTCMonth, uTCDate, hours, minutes, seconds, obj.getMilliseconds()));
    }
    function M(getTime) {
      return new Date(getTime.getTime());
    }
    function _(arg0) {
      let length;
      const items = [];
      let num = 0;
      if (0 < arg0.length) {
        do {
          let tmp = closure_28;
          let arr = items.push(closure_28(arg0[num]));
          num = num + 1;
          length = arg0.length;
        } while (num < length);
      }
      return items;
    }
    function R(arr) {
      const sorted = arr.sort((getTime, getTime2) => {
        const time = getTime.getTime();
        return time - getTime2.getTime();
      });
    }
    function N(arg0, arg1) {
      let flag = arg1;
      if (undefined === arg1) {
        flag = true;
      }
      const date = new Date(arg0);
      const items = [y(date.getUTCFullYear().toString(), 4, "0"), y(date.getUTCMonth() + 1, 2, "0"), y(date.getUTCDate(), 2, "0"), "T", y(date.getUTCHours(), 2, "0"), y(date.getUTCMinutes(), 2, "0"), y(date.getUTCSeconds(), 2, "0"), ];
      let str2 = "";
      if (flag) {
        str2 = "Z";
      }
      items[7] = str2;
      return items.join("");
    }
    function A(arg0) {
      const match = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(arg0);
      if (match) {
        let _Date = Date;
        const _Date2 = Date;
        const _parseInt = parseInt;
        const parsed = parseInt(match[1], 10);
        const _parseInt2 = parseInt;
        const diff = parseInt(match[2], 10) - 1;
        const _parseInt3 = parseInt;
        const parsed1 = parseInt(match[3], 10);
        const _parseInt4 = parseInt;
        const tmp9 = parseInt(match[5], 10) || 0;
        const _parseInt5 = parseInt;
        const tmp10 = parseInt(match[6], 10) || 0;
        const _parseInt6 = parseInt;
        const tmp11 = parseInt(match[7], 10) || 0;
        const prototype2 = _Date.prototype;
        _Date = new _Date(Date.UTC(parsed, diff, parsed1, tmp9, tmp10, tmp11));
        return _Date;
      } else {
        const _Error = Error;
        const concat = "Invalid UNTIL value: ".concat;
        const error = new Error("Invalid UNTIL value: ".concat(arg0));
        throw error;
      }
      const obj = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/;
    }
    function C(toLocaleString, timeZone) {
      return toLocaleString.toLocaleString("sv-SE", { timeZone }).replace(" ", "T") + "Z";
    }
    const tmp4 = () => {
      class t {
        constructor(arg0, arg1) {
          self = this;
          this.minDate = null;
          this.maxDate = null;
          this._result = [];
          this.total = 0;
          this.method = arg0;
          this.args = arg1;
          if ("between" === arg0) {
            if (arg1.inc) {
              before2 = arg1.before;
            } else {
              tmp7 = globalThis;
              _Date3 = Date;
              before = arg1.before;
              num3 = 1;
              prototype3 = Date.prototype;
              tmp8 = new.target;
              tmp9 = new.target;
              before2 = new Date(before.getTime() - 1);
            }
            self.maxDate = before2;
            if (arg1.inc) {
              after2 = arg1.after;
            } else {
              tmp10 = globalThis;
              _Date4 = Date;
              after = arg1.after;
              num4 = 1;
              prototype4 = Date.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              after2 = new Date(after.getTime() + 1);
            }
            self.minDate = after2;
          } else {
            str2 = "before";
            if ("before" === arg0) {
              if (arg1.inc) {
                dt4 = arg1.dt;
              } else {
                tmp4 = globalThis;
                _Date2 = Date;
                dt3 = arg1.dt;
                num2 = 1;
                prototype2 = Date.prototype;
                tmp5 = new.target;
                tmp6 = new.target;
                dt4 = new Date(dt3.getTime() - 1);
              }
              self.maxDate = dt4;
            } else {
              str = "after";
              if ("after" === arg0) {
                if (arg1.inc) {
                  dt2 = arg1.dt;
                } else {
                  tmp = globalThis;
                  _Date = Date;
                  dt = arg1.dt;
                  num = 1;
                  prototype = Date.prototype;
                  tmp2 = new.target;
                  tmp3 = new.target;
                  dt2 = new Date(dt.getTime() + 1);
                }
                self.minDate = dt2;
              }
            }
            return;
          }
          return;
        }
        accept(arg0) {
          self = this;
          this.total = this.total + 1;
          tmp = this.minDate && arg0 < self.minDate;
          tmp2 = self.maxDate && arg0 > self.maxDate;
          if ("between" === self.method) {
            if (tmp) {
              flag4 = true;
              return true;
            } else if (tmp2) {
              flag3 = false;
              return false;
            }
          } else {
            str = "before";
            if ("before" === self.method) {
              if (tmp2) {
                flag2 = false;
                return false;
              }
            } else {
              str2 = "after";
              if ("after" === self.method) {
                tmp3 = !tmp;
                flag = !tmp3;
                if (tmp3) {
                  addResult = self.add(arg0);
                  flag = false;
                }
                return flag;
              }
            }
          }
          return self.add(arg0);
        }
        add(arg0) {
          _result = this._result;
          arr = _result.push(arg0);
          return true;
        }
        getValue() {
          ({ _result, method } = this);
          if ("all" !== method) {
            str = "between";
            if ("between" !== method) {
              tmp = null;
              if (_result.length) {
                num = 1;
                tmp = _result[_result.length - 1];
              }
              return tmp;
            }
          }
          return _result;
        }
        clone() {
          tmp = new t(this.method, this.args);
          return tmp;
        }
      }
      return t;
    }();
    function j(arg0, arg1) {
      let fn = Object.setPrototypeOf;
      if (!fn) {
        const _Array = Array;
        fn = Object.create([]) instanceof Array && (arg0, arg1) => {
          arg0.__proto__ = arg1;
        };
        const tmp = Object.create([]) instanceof Array && (arg0, arg1) => {
          arg0.__proto__ = arg1;
        };
      }
      if (!fn) {
        fn = (arg0, obj) => {
          for (const key10005 in arg1) {
            let tmp = key10005;
            let _Object = Object;
            if (!hasOwnProperty.call(arg1, key10005)) {
              continue;
            } else {
              arg0[key10005] = arg1[key10005];
              // continue
            }
            continue;
          }
        };
      }
      const j = fn;
      return fn(arg0, arg1);
    }
    function H() {
      const obj = Object.assign || (arg0) => {
        for (let num = 1; num < length; num = num + 1) {
          let tmp3 = arguments[num];
          let tmp4 = tmp3;
          let tmp5 = tmp2;
          let keys = Object.keys();
          if (keys !== undefined) {
            let tmp2 = tmp5;
            let tmp7 = keys[tmp];
            while (tmp7 !== undefined) {
              let tmp8 = tmp7;
              let _Object = Object;
              tmp5 = tmp7;
              if (!hasOwnProperty.call(tmp3, tmp7)) {
                continue;
              } else {
                arg0[tmp7] = tmp3[tmp7];
                tmp5 = tmp7;
                // continue
              }
              continue;
            }
          }
        }
        return arg0;
      };
      const H = obj;
      return obj(...arguments);
    }
    let closure_38 = (arg0) => {
      class e {
        constructor(arg0, arg1, arg2) {
          tmp = arg0.call(this, arg0, arg1) || this;
          tmp.iterator = arg2;
          return tmp;
        }
        add(arg0) {
          tmp = !this.iterator(arg0, this._result.length);
          flag = !tmp;
          if (!tmp) {
            _result = this._result;
            arr = _result.push(arg0);
            flag = true;
          }
          return flag;
        }
      }
      W(e, arg0);
      return e;
    }(tmp4);
    let closure_39 = { dayNames: [], monthNames: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "cara", "cara durmiendo", "dormido", "sue\u00F1o", "zzz", 823346595756444300000000000000000000000000000000000000000000000, 12563289287386380000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004245795279341505], tokens: { SKIP: /^[ \r\n\t]+|^\.$/, number: /^[1-9][0-9]*/, numberAsText: /^(one|two|three)/i, every: /^every/i, day(s): /^days?/i, weekday(s): /^weekdays?/i, week(s): /^weeks?/i, hour(s): /^hours?/i, minute(s): /^minutes?/i, month(s): /^months?/i, year(s): /^years?/i, on: /^(on|in)/i, at: /^(at)/i, the: /^the/i, first: /^first/i, second: /^second/i, third: /^third/i, nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i, last: /^last/i, for: /^for/i, time(s): /^times?/i, until: /^(un)?til/i, monday: /^mo(n(day)?)?/i, tuesday: /^tu(e(s(day)?)?)?/i, wednesday: /^we(d(n(esday)?)?)?/i, thursday: /^th(u(r(sday)?)?)?/i, friday: /^fr(i(day)?)?/i, saturday: /^sa(t(urday)?)?/i, sunday: /^su(n(day)?)?/i, january: /^jan(uary)?/i, february: /^feb(ruary)?/i, march: /^mar(ch)?/i, april: /^apr(il)?/i, may: /^may/i, june: /^june?/i, july: /^july?/i, august: /^aug(ust)?/i, september: /^sep(t(ember)?)?/i, october: /^oct(ober)?/i, november: /^nov(ember)?/i, december: /^dec(ember)?/i, comma: /^(,\s*|(and|or)\s*)+/i } };
    function z(arr) {
      return -1 !== arr.indexOf(arg1);
    }
    function K(arg0) {
      return arg0.toString();
    }
    function B(arg0, arg1, arg2) {
      const combined = "".concat(arg1, " ");
      const combined1 = combined.concat(arg2, ", ");
      return combined1.concat(arg0);
    }
    const tmp5 = () => {
      class t {
        constructor(arg0, arg1, arg2, arg3) {
          tmp = arg1;
          tmp2 = arg2;
          tmp3 = arg3;
          self = this;
          if (undefined === arg1) {
            tmp = closure_41;
          }
          if (undefined === tmp2) {
            tmp2 = closure_39;
          }
          if (undefined === tmp3) {
            tmp3 = closure_42;
          }
          self.text = [];
          if (!tmp2) {
            tmp2 = closure_39;
          }
          self.language = tmp2;
          self.gettext = tmp;
          self.dateFormatter = tmp3;
          self.rrule = arg0;
          ({ options: self.options, origOptions: self.origOptions } = arg0);
          if (self.origOptions.bymonthday) {
            items = [];
            combined = items.concat(self.options.bymonthday);
            items1 = [];
            combined1 = items1.concat(self.options.bynmonthday);
            sorted = combined.sort((arg0, arg1) => arg0 - arg1);
            sorted1 = combined1.sort((arg0, arg1) => arg1 - arg0);
            self.bymonthday = combined.concat(combined1);
            if (!self.bymonthday.length) {
              tmp6 = null;
              self.bymonthday = null;
            }
          }
          if (closure_3(self.origOptions.byweekday)) {
            tmp8 = closure_6;
            byweekday = self.origOptions.byweekday;
            if (closure_6(self.origOptions.byweekday)) {
              items2 = byweekday;
            } else {
              items2 = [];
              items2[0] = byweekday;
            }
            tmp9 = globalThis;
            _String = String;
            StringResult = String(items2);
            obj = {};
            obj.allWeeks = items2.filter((arg0) => !arg0.n);
            obj.someWeeks = items2.filter((arg0) => Boolean(arg0.n));
            str = "MO";
            num = -1;
            tmp10 = -1 !== StringResult.indexOf("MO");
            if (tmp10) {
              str2 = "TU";
              tmp10 = -1 !== StringResult.indexOf("TU");
            }
            if (tmp10) {
              str3 = "WE";
              tmp10 = -1 !== StringResult.indexOf("WE");
            }
            if (tmp10) {
              str4 = "TH";
              tmp10 = -1 !== StringResult.indexOf("TH");
            }
            if (tmp10) {
              str5 = "FR";
              tmp10 = -1 !== StringResult.indexOf("FR");
            }
            if (tmp10) {
              str6 = "SA";
              tmp10 = -1 === StringResult.indexOf("SA");
            }
            if (tmp10) {
              str7 = "SU";
              tmp10 = -1 === StringResult.indexOf("SU");
            }
            obj.isWeekdays = tmp10;
            tmp11 = -1 !== StringResult.indexOf("MO");
            if (tmp11) {
              str8 = "TU";
              tmp11 = -1 !== StringResult.indexOf("TU");
            }
            if (tmp11) {
              str9 = "WE";
              tmp11 = -1 !== StringResult.indexOf("WE");
            }
            if (tmp11) {
              str10 = "TH";
              tmp11 = -1 !== StringResult.indexOf("TH");
            }
            if (tmp11) {
              str11 = "FR";
              tmp11 = -1 !== StringResult.indexOf("FR");
            }
            if (tmp11) {
              str12 = "SA";
              tmp11 = -1 !== StringResult.indexOf("SA");
            }
            if (tmp11) {
              str13 = "SU";
              tmp11 = -1 !== StringResult.indexOf("SU");
            }
            obj.isEveryDay = tmp11;
            self.byweekday = obj;
            fn = function y(weekday, weekday2) {
              return weekday.weekday - weekday2.weekday;
            };
            allWeeks = self.byweekday.allWeeks;
            sorted2 = allWeeks.sort(fn);
            someWeeks = self.byweekday.someWeeks;
            sorted3 = someWeeks.sort(fn);
            if (!self.byweekday.allWeeks.length) {
              tmp14 = null;
              self.byweekday.allWeeks = null;
            }
            if (!self.byweekday.someWeeks.length) {
              tmp15 = null;
              self.byweekday.someWeeks = null;
            }
          } else {
            tmp7 = null;
            self.byweekday = null;
          }
          return;
        }
        static isFullyConvertible(arg0) {
          if (arg0.options.freq in t.IMPLEMENTED) {
            if (arg0.origOptions.until) {
              if (arg0.origOptions.count) {
                flag5 = false;
                return false;
              }
            }
            for (const key10014 in arg0.origOptions) {
              tmp3 = key10014;
              tmp4 = closure_40;
              if (closure_40([true, true, true], key10014)) {
                flag3 = true;
                return true;
              } else {
                tmp = closure_40;
                tmp2 = closure_0;
                if (closure_40(closure_0.IMPLEMENTED[arg0.options.freq], key10014)) {
                  continue;
                } else {
                  flag2 = false;
                  return false;
                }
              }
            }
            flag4 = true;
            return true;
          } else {
            flag = false;
            return false;
          }
        }
        isFullyConvertible() {
          return t.isFullyConvertible(this.rrule);
        }
        toString() {
          self = this;
          gettext = this.gettext;
          if (this.options.freq in t.IMPLEMENTED) {
            str2 = "every";
            items = [];
            items[0] = gettext("every");
            self.text = items;
            tmp = closure_63;
            tmp2 = self[closure_63.FREQUENCIES[self.options.freq]]();
            if (self.options.until) {
              str7 = "until";
              addResult = self.add(gettext("until"));
              until = self.options.until;
              ({ add, dateFormatter } = self);
              uTCFullYear = until.getUTCFullYear();
              addResult1 = add(dateFormatter(uTCFullYear, self.language.monthNames[until.getUTCMonth(until)], until.getUTCDate()));
            } else if (self.options.count) {
              str3 = "for";
              addResult2 = self.add(gettext("for"));
              str4 = self.options.count;
              addResult3 = addResult2.add(str4.toString());
              if (self.plural(self.options.count)) {
                str6 = "times";
                gettextResult = gettext("times");
              } else {
                str5 = "time";
                gettextResult = gettext("time");
              }
              addResult4 = addResult3.add(gettextResult);
            }
            if (!self.isFullyConvertible()) {
              str8 = "(~ approximate)";
              addResult5 = self.add(gettext("(~ approximate)"));
            }
            text = self.text;
            str9 = "";
            return text.join("");
          } else {
            str = "RRule error: Unable to fully convert this rrule to text";
            return gettext("RRule error: Unable to fully convert this rrule to text");
          }
        }
        HOURLY() {
          self = this;
          gettext = this.gettext;
          if (1 !== this.options.interval) {
            str = self.options.interval;
            addResult = self.add(str.toString());
          }
          if (self.plural(self.options.interval)) {
            str3 = "hours";
            gettextResult = gettext("hours");
          } else {
            str2 = "hour";
            gettextResult = gettext("hour");
          }
          addResult1 = self.add(gettextResult);
          return;
        }
        MINUTELY() {
          self = this;
          gettext = this.gettext;
          if (1 !== this.options.interval) {
            str = self.options.interval;
            addResult = self.add(str.toString());
          }
          if (self.plural(self.options.interval)) {
            str3 = "minutes";
            gettextResult = gettext("minutes");
          } else {
            str2 = "minute";
            gettextResult = gettext("minute");
          }
          addResult1 = self.add(gettextResult);
          return;
        }
        DAILY() {
          self = this;
          gettext = this.gettext;
          if (1 !== this.options.interval) {
            str = self.options.interval;
            addResult = self.add(str.toString());
          }
          if (self.byweekday) {
            if (self.byweekday.isWeekdays) {
              if (self.plural(self.options.interval)) {
                str5 = "weekdays";
                gettextResult = gettext("weekdays");
              } else {
                str4 = "weekday";
                gettextResult = gettext("weekday");
              }
              addResult1 = self.add(gettextResult);
            }
          }
          if (self.plural(self.options.interval)) {
            str3 = "days";
            gettextResult1 = gettext("days");
          } else {
            str2 = "day";
            gettextResult1 = gettext("day");
          }
          addResult2 = self.add(gettextResult1);
          if (self.origOptions.bymonth) {
            str6 = "in";
            addResult3 = self.add(gettext("in"));
            _bymonthResult = self._bymonth();
          }
          if (self.bymonthday) {
            _bymonthdayResult = self._bymonthday();
          } else if (self.byweekday) {
            _byweekdayResult = self._byweekday();
          } else if (self.origOptions.byhour) {
            _byhourResult = self._byhour();
          }
          return;
        }
        WEEKLY() {
          self = this;
          gettext = this.gettext;
          if (1 === this.options.interval) {
            if (self.byweekday) {
              if (self.byweekday.isWeekdays) {
                if (1 === self.options.interval) {
                  if (self.plural(self.options.interval)) {
                    str11 = "weekdays";
                    gettextResult = gettext("weekdays");
                  } else {
                    str10 = "weekday";
                    gettextResult = gettext("weekday");
                  }
                  addResult = self.add(gettextResult);
                } else {
                  str8 = "on";
                  addResult1 = self.add(gettext("on"));
                  str9 = "weekdays";
                  addResult2 = addResult1.add(gettext("weekdays"));
                }
              }
              return;
            }
            if (self.byweekday) {
              if (self.byweekday.isEveryDay) {
                if (self.plural(self.options.interval)) {
                  str7 = "days";
                  gettextResult1 = gettext("days");
                } else {
                  str6 = "day";
                  gettextResult1 = gettext("day");
                }
                addResult3 = self.add(gettextResult1);
              }
            }
            if (1 === self.options.interval) {
              str4 = "week";
              addResult4 = self.add(gettext("week"));
            }
            if (self.origOptions.bymonth) {
              str5 = "in";
              addResult5 = self.add(gettext("in"));
              _bymonthResult = self._bymonth();
            }
            if (self.bymonthday) {
              _bymonthdayResult = self._bymonthday();
            } else if (self.byweekday) {
              _byweekdayResult = self._byweekday();
            }
          } else {
            str = self.options.interval;
            addResult6 = self.add(str.toString());
            if (self.plural(self.options.interval)) {
              str3 = "weeks";
              gettextResult2 = gettext("weeks");
            } else {
              str2 = "week";
              gettextResult2 = gettext("week");
            }
            addResult7 = addResult6.add(gettextResult2);
          }
          return;
        }
        MONTHLY() {
          self = this;
          gettext = this.gettext;
          interval = this.options.interval;
          if (this.origOptions.bymonth) {
            if (1 !== interval) {
              str4 = self.options.interval;
              addResult = self.add(str4.toString());
              str5 = "months";
              addResult1 = addResult.add(gettext("months"));
              if (self.plural(self.options.interval)) {
                str6 = "in";
                addResult2 = self.add(gettext("in"));
              }
            }
            _bymonthResult = self._bymonth();
          } else {
            if (1 !== interval) {
              str = self.options.interval;
              addResult3 = self.add(str.toString());
            }
            if (self.plural(self.options.interval)) {
              str3 = "months";
              gettextResult = gettext("months");
            } else {
              str2 = "month";
              gettextResult = gettext("month");
            }
            addResult4 = self.add(gettextResult);
          }
          if (self.bymonthday) {
            _bymonthdayResult = self._bymonthday();
          } else {
            if (self.byweekday) {
              if (self.byweekday.isWeekdays) {
                str7 = "on";
                addResult5 = self.add(gettext("on"));
                str8 = "weekdays";
                addResult6 = addResult5.add(gettext("weekdays"));
              }
            }
            if (self.byweekday) {
              _byweekdayResult = self._byweekday();
            }
          }
          return;
        }
        YEARLY() {
          self = this;
          gettext = this.gettext;
          interval = this.options.interval;
          if (this.origOptions.bymonth) {
            if (1 !== interval) {
              str4 = self.options.interval;
              addResult = self.add(str4.toString());
              str5 = "years";
              addResult1 = self.add(gettext("years"));
            }
            _bymonthResult = self._bymonth();
          } else {
            if (1 !== interval) {
              str = self.options.interval;
              addResult2 = self.add(str.toString());
            }
            if (self.plural(self.options.interval)) {
              str3 = "years";
              gettextResult = gettext("years");
            } else {
              str2 = "year";
              gettextResult = gettext("year");
            }
            addResult3 = self.add(gettextResult);
          }
          if (self.bymonthday) {
            _bymonthdayResult = self._bymonthday();
          } else if (self.byweekday) {
            _byweekdayResult = self._byweekday();
          }
          if (self.options.byyearday) {
            str6 = "on the";
            addResult4 = self.add(gettext("on the"));
            str7 = "and";
            addResult5 = addResult4.add(self.list(self.options.byyearday, self.nth, gettext("and")));
            str8 = "day";
            addResult6 = addResult5.add(gettext("day"));
          }
          if (!self.options.byweekno) {
            return;
          } else {
            str9 = "in";
            addResult7 = self.add(gettext("in"));
            add = addResult7.add;
            if (self.plural(self.options.byweekno.length)) {
              str11 = "weeks";
              gettextResult1 = gettext("weeks");
            } else {
              str10 = "week";
              gettextResult1 = gettext("week");
            }
            addResult7 = add(gettextResult1);
            add = addResult7.add;
            str12 = "and";
            addResult8 = add(self.list(self.options.byweekno, undefined, gettext("and")));
          }
          return;
        }
        _bymonthday() {
          self = this;
          gettext = this.gettext;
          if (this.byweekday) {
            if (self.byweekday.allWeeks) {
              str = "on";
              addResult = self.add(gettext("on"));
              str2 = "or";
              addResult1 = addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext, gettext("or")));
              str3 = "the";
              addResult2 = addResult1.add(gettext("the"));
              ({ list: list2, bymonthday: bymonthday2, nth: nth2 } = self);
              addResult3 = addResult2.add(list2(bymonthday2, nth2, gettext("or")));
            }
            return;
          }
          addResult4 = self.add(gettext("on the"));
          ({ list, bymonthday, nth } = self);
          addResult5 = addResult4.add(list(bymonthday, nth, gettext("and")));
          return;
        }
        _byweekday() {
          self = this;
          gettext = this.gettext;
          tmp = this.byweekday.allWeeks && !self.byweekday.isWeekdays;
          if (tmp) {
            str = "on";
            addResult = self.add(gettext("on"));
            addResult1 = addResult.add(self.list(self.byweekday.allWeeks, self.weekdaytext));
          }
          if (self.byweekday.someWeeks) {
            if (self.byweekday.allWeeks) {
              str2 = "and";
              addResult2 = self.add(gettext("and"));
            }
            str3 = "on the";
            addResult3 = self.add(gettext("on the"));
            str4 = "and";
            addResult4 = addResult3.add(self.list(self.byweekday.someWeeks, self.weekdaytext, gettext("and")));
          }
          return;
        }
        _byhour() {
          gettext = this.gettext;
          addResult = this.add(gettext("at"));
          addResult1 = addResult.add(this.list(this.origOptions.byhour, undefined, gettext("and")));
          return;
        }
        _bymonth() {
          ({ add, list } = this);
          addResult = add(list(this.options.bymonth, this.monthtext, this.gettext("and")));
          return;
        }
        nth(arg0) {
          parsed = parseInt(arg0.toString(), 10);
          gettext = this.gettext;
          if (-1 === parsed) {
            str7 = "last";
            return gettext("last");
          } else {
            _Math = Math;
            absolute = Math.abs(parsed);
            num8 = 1;
            if (1 !== absolute) {
              num = 21;
              if (21 !== absolute) {
                num2 = 31;
                if (31 !== absolute) {
                  num3 = 2;
                  if (2 !== absolute) {
                    num4 = 22;
                    if (22 !== absolute) {
                      num5 = 3;
                      if (3 !== absolute) {
                        num6 = 23;
                        if (23 !== absolute) {
                          str = "th";
                          sum = absolute + gettext("th");
                        }
                      }
                      str2 = "rd";
                      sum = absolute + gettext("rd");
                    }
                  }
                  str3 = "nd";
                  sum = absolute + gettext("nd");
                }
                num7 = 0;
                text = sum;
                if (parsed < 0) {
                  str5 = "last";
                  str6 = " ";
                  text = `${tmp2} ${gettext("last")}`;
                }
                return text;
              }
            }
            str4 = "st";
            sum = absolute + gettext("st");
          }
          return;
        }
        monthtext(arg0) {
          return this.language.monthNames[arg0 - 1];
        }
        weekdaytext(arg0) {
          self = this;
          if (closure_4(arg0)) {
            num = 1;
            num2 = 7;
            result = (arg0 + 1) % 7;
          } else {
            result = arg0.getJsWeekday();
          }
          str = "";
          if (arg0.n) {
            str2 = " ";
            str = `${self.nth(arg0.n)} `;
          }
          return str + self.language.dayNames[result];
        }
        plural(arg0) {
          return arg0 % 100 !== 1;
        }
        add(arg0) {
          text = this.text;
          arr = text.push(" ");
          text1 = this.text;
          arr1 = text1.push(arg0);
          return this;
        }
        list(arg0, arg1, arg2, arg3) {
          fn = arg1;
          str = arg3;
          f66335 = arg1;
          self = this;
          if (undefined === arg3) {
            str = ",";
          }
          arr = arg0;
          if (!closure_6(arg0)) {
            items = [];
            items[0] = arg0;
            arr = items;
          }
          if (!fn) {
            fn = (arg0) => arg0.toString();
          }
          f66335 = fn;
          mapped = arr.map(function o(arg0) {
            let callResult = fn;
            if (fn) {
              callResult = fn.call(self, arg0);
            }
            return callResult;
          });
          if (arg2) {
            num = 0;
            str3 = "";
            str4 = " ";
            num2 = 1;
            num3 = 0;
            str5 = "";
            if (0 < mapped.length) {
              tmp2 = str3;
              while (0 === num3) {
                str3 = `${arr3[num3]}`;
                num3 = num3 + 1;
                str5 = str3;
              }
              if (num3 === mapped.length - 1) {
                text = `${str3} ${arg2} `;
              } else {
                text = `${str3}${str} `;
              }
              tmp4 = text;
            }
            joined = str5;
          } else {
            str2 = " ";
            joined = mapped.join(`${str} `);
          }
          return joined;
        }
      }
      return t;
    }();
    let closure_44 = () => {
      class t {
        constructor(arg0) {
          this.done = true;
          this.rules = arg0;
          return;
        }
        start(arg0) {
          this.text = arg0;
          this.done = false;
          return this.nextSymbol();
        }
        isDone() {
          done = this.done;
          if (done) {
            tmp = null;
            done = null === this.symbol;
          }
          return done;
        }
        nextSymbol() {
          self = this;
          this.symbol = null;
          this.value = null;
          while (!self.done) {
            tmp5 = null;
            tmp6 = tmp2;
            tmp7 = tmp3;
            tmp8 = tmp4;
            tmp9 = null;
            tmp10 = tmp2;
            keys = Object.keys();
            if (keys !== undefined) {
              tmp3 = tmp7;
              tmp4 = tmp8;
              tmp9 = tmp5;
              tmp10 = tmp6;
              tmp12 = keys[tmp];
              while (tmp12 !== undefined) {
                tmp15 = tmp12;
                obj = self.rules[tmp12];
                match = obj.exec(self.text);
                tmp14 = match;
                if (match) {
                  tmp13 = null === tmp5 || match[0].length > tmp5[0].length;
                  tmp14 = tmp13;
                }
                tmp7 = tmp12;
                tmp8 = match;
                if (!tmp14) {
                  continue;
                } else {
                  tmp5 = match;
                  tmp6 = tmp12;
                  tmp7 = tmp12;
                  tmp8 = match;
                  // continue
                }
                continue;
              }
            }
            if (null != tmp9) {
              str = self.text;
              self.text = str.substr(tmp9[0].length);
              if ("" === self.text) {
                self.done = true;
              }
            }
            if (null == tmp9) {
              self.done = true;
              self.symbol = null;
              self.value = null;
              return;
            } else {
              tmp2 = tmp10;
              if ("SKIP" === tmp10) {
                continue;
              } else {
                self.symbol = tmp10;
                self.value = tmp9;
                return true;
              }
            }
          }
          return false;
        }
        accept(arg0) {
          self = this;
          if (this.symbol === arg0) {
            if (self.value) {
              nextSymbolResult = self.nextSymbol();
              return self.value;
            } else {
              nextSymbolResult1 = self.nextSymbol();
              flag2 = true;
              return true;
            }
          } else {
            flag = false;
            return false;
          }
        }
        acceptNumber() {
          return this.accept("number");
        }
        expect(arg0) {
          if (this.accept(arg0)) {
            flag = true;
            return true;
          } else {
            tmp = globalThis;
            _Error = Error;
            str = "expected ";
            str2 = " but found ";
            prototype = Error.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            error = new Error("expected " + arg0 + " but found " + this.symbol);
            tmp5 = error;
            throw error;
          }
        }
      }
      return t;
    }();
    const obj2 = { YEARLY: 0 };
    obj2[0] = "YEARLY";
    obj2.MONTHLY = 1;
    obj2[1] = "MONTHLY";
    obj2.WEEKLY = 2;
    obj2[2] = "WEEKLY";
    obj2.DAILY = 3;
    obj2[3] = "DAILY";
    obj2.HOURLY = 4;
    obj2[4] = "HOURLY";
    obj2.MINUTELY = 5;
    obj2[5] = "MINUTELY";
    obj2.SECONDLY = 6;
    obj2[6] = "SECONDLY";
    const items = ["to", "next", "loadJsonAsset", "accessibilityRole", "window", "Icon"];
    tmp5.IMPLEMENTED = [];
    tmp5.IMPLEMENTED[obj2.HOURLY] = items;
    tmp5.IMPLEMENTED[obj2.MINUTELY] = items;
    const items1 = [true];
    tmp5.IMPLEMENTED[obj2.DAILY] = items1.concat(items);
    tmp5.IMPLEMENTED[obj2.WEEKLY] = items;
    tmp5.IMPLEMENTED[obj2.MONTHLY] = items;
    const items2 = [true, true];
    tmp5.IMPLEMENTED[obj2.YEARLY] = items2.concat(items);
    const isFullyConvertible = tmp5.isFullyConvertible;
    const tmp6 = () => {
      class t {
        constructor(arg0, arg1, arg2, arg3) {
          num = arg3;
          this.hour = arg0;
          this.minute = arg1;
          this.second = arg2;
          if (!arg3) {
            num = 0;
          }
          this.millisecond = num;
          return;
        }
        getHours() {
          return this.hour;
        }
        getMinutes() {
          return this.minute;
        }
        getSeconds() {
          return this.second;
        }
        getMilliseconds() {
          return this.millisecond;
        }
        getTime() {
          return 1000 * (60 * this.hour * 60 + 60 * this.minute + this.second) + this.millisecond;
        }
      }
      return t;
    }();
    let closure_47 = (arg0) => {
      class e {
        constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
          tmp = arg0.call(this, arg3, arg4, arg5, arg6) || this;
          tmp.year = arg0;
          tmp.month = arg1;
          tmp.day = arg2;
          return tmp;
        }
        static fromDate(arg0) {
          uTCFullYear = arg0.getUTCFullYear();
          sum = arg0.getUTCMonth() + 1;
          uTCDate = arg0.getUTCDate();
          uTCHours = arg0.getUTCHours();
          uTCMinutes = arg0.getUTCMinutes();
          uTCSeconds = arg0.getUTCSeconds();
          tmp7 = new this(uTCFullYear, sum, uTCDate, uTCHours, uTCMinutes, uTCSeconds, arg0.valueOf() % 1000);
          return tmp7;
        }
        getWeekday() {
          date = new Date(this.getTime());
          return closure_25(date);
        }
        getTime() {
          date = new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond));
          return date.getTime();
        }
        getDay() {
          return this.day;
        }
        getMonth() {
          return this.month;
        }
        getYear() {
          return this.year;
        }
        addYears(arg0) {
          this.year = this.year + arg0;
          return;
        }
        addMonths(arg0) {
          self = this;
          this.month = this.month + arg0;
          if (this.month > 12) {
            tmp = globalThis;
            _Math = Math;
            tmp3 = closure_9;
            rounded = Math.floor(self.month / 12);
            self.month = closure_9(self.month, 12);
            self.year = self.year + rounded;
            num = 0;
            if (0 === self.month) {
              self.month = 12;
              self.year = self.year - 1;
            }
          }
          return;
        }
        addWeekly(arg0, arg1) {
          self = this;
          if (arg1 > this.getWeekday()) {
            num2 = 1;
            num3 = 6;
            num4 = 7;
            self.day = self.day + (-self.getWeekday() + 1 + (6 - arg1) + 7 * arg0);
          } else {
            num = 7;
            self.day = self.day + (-self.getWeekday() - arg1 + 7 * arg0);
          }
          fixDayResult = self.fixDay();
          return;
        }
        addDaily(arg0) {
          this.day = this.day + arg0;
          fixDayResult = this.fixDay();
          return;
        }
        addHours(arg0, arg1, arg2) {
          self = this;
          if (arg1) {
            tmp = globalThis;
            _Math = Math;
            num = 23;
            self.hour = self.hour + Math.floor((23 - self.hour) / arg0) * arg0;
          }
          while (true) {
            self.hour = self.hour + arg0;
            tmp2 = closure_10;
            tmp3 = closure_10(self.hour, 24);
            div = tmp3.div;
            if (div) {
              self.hour = tmp3.mod;
              addDailyResult = self.addDaily(div);
            }
            tmp5 = closure_11;
            if (closure_11(arg2)) {
              break;
            } else {
              tmp6 = closure_13;
              if (closure_13(arg2, self.hour)) {
                break;
              }
            }
          }
          return;
        }
        addMinutes(arg0, arg1, arg2, arg3) {
          self = this;
          if (arg1) {
            tmp = globalThis;
            _Math = Math;
            num = 1439;
            self.minute = self.minute + Math.floor((1439 - (60 * self.hour + self.minute)) / arg0) * arg0;
          }
          while (true) {
            self.minute = self.minute + arg0;
            tmp2 = closure_10;
            tmp3 = closure_10(self.minute, 60);
            div = tmp3.div;
            if (div) {
              self.minute = tmp3.mod;
              addHoursResult = self.addHours(div, false, arg2);
            }
            tmp5 = closure_11;
            if (closure_11(arg2)) {
              tmp7 = closure_11;
              if (closure_11(arg3)) {
                break;
              } else {
                tmp8 = closure_13;
                if (closure_13(arg3, self.minute)) {
                  break;
                }
              }
            } else {
              tmp6 = closure_13;
            }
            continue;
          }
          return;
        }
        addSeconds(arg0, arg1, arg2, arg3, arg4) {
          self = this;
          if (arg1) {
            tmp = globalThis;
            _Math = Math;
            num = 3600;
            num2 = 86399;
            self.second = self.second + Math.floor((86399 - (3600 * self.hour + 60 * self.minute + self.second)) / arg0) * arg0;
          }
          while (true) {
            self.second = self.second + arg0;
            tmp2 = closure_10;
            tmp3 = closure_10(self.second, 60);
            div = tmp3.div;
            if (div) {
              self.second = tmp3.mod;
              tmp4 = self;
              tmp5 = div;
              flag = false;
              tmp6 = arg2;
              tmp7 = arg3;
              addMinutesResult = self.addMinutes(div, false, arg2, arg3);
            }
            tmp9 = closure_11;
            if (closure_11(arg2)) {
              tmp11 = closure_11;
              if (closure_11(arg3)) {
                tmp13 = closure_11;
                if (closure_11(arg4)) {
                  break;
                } else {
                  tmp14 = closure_13;
                  if (closure_13(arg4, self.second)) {
                    break;
                  }
                }
              } else {
                tmp12 = closure_13;
              }
              continue;
            } else {
              tmp10 = closure_13;
            }
            continue;
          }
          return;
        }
        fixDay() {
          self = this;
          if (this.day > 28) {
            tmp3 = closure_26;
            num = 1;
            tmp2 = closure_26(self.year, self.month - 1)[1];
            if (self.day > tmp2) {
              num2 = 9999;
              num3 = 13;
              if (self.day > tmp2) {
                while (true) {
                  self.day = self.day - tmp2;
                  self.month = self.month + 1;
                  if (13 === self.month) {
                    self.month = 1;
                    self.year = self.year + 1;
                    if (self.year > 9999) {
                      break;
                    }
                  }
                  tmp = closure_26;
                  tmp2 = closure_26(self.year, self.month - 1)[1];
                }
                return;
              }
            }
          }
          return;
        }
        add(arg0, arg1) {
          self = this;
          ({ freq, interval, byhour, byminute, bysecond } = arg0);
          if (closure_37.YEARLY === freq) {
            return self.addYears(interval);
          } else {
            tmp16 = closure_37;
            if (closure_37.MONTHLY === freq) {
              return self.addMonths(interval);
            } else {
              tmp17 = closure_37;
              if (closure_37.WEEKLY === freq) {
                return self.addWeekly(interval, tmp);
              } else {
                tmp18 = closure_37;
                if (closure_37.DAILY === freq) {
                  return self.addDaily(interval);
                } else {
                  tmp2 = closure_37;
                  if (closure_37.HOURLY === freq) {
                    return self.addHours(interval, arg1, byhour);
                  } else {
                    tmp3 = closure_37;
                    if (closure_37.MINUTELY === freq) {
                      tmp11 = self;
                      tmp12 = interval;
                      tmp13 = arg1;
                      tmp14 = byhour;
                      tmp15 = byminute;
                      return self.addMinutes(interval, arg1, byhour, byminute);
                    } else {
                      tmp4 = closure_37;
                      if (closure_37.SECONDLY === freq) {
                        tmp5 = self;
                        tmp6 = interval;
                        tmp7 = arg1;
                        tmp8 = byhour;
                        tmp9 = byminute;
                        tmp10 = bysecond;
                        return self.addSeconds(interval, arg1, byhour, byminute, bysecond);
                      } else {
                        return;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      W(e, arg0);
      return e;
    }(tmp6);
    let closure_48 = () => {
      class t {
        constructor(arg0, arg1) {
          self = this;
          if (isNaN(arg0.getTime())) {
            _RangeError = RangeError;
            prototype = RangeError.prototype;
            tmp2 = new.target;
            str = "Invalid date passed to DateWithZone";
            tmp3 = new.target;
            rangeError = new RangeError("Invalid date passed to DateWithZone");
            tmp5 = rangeError;
            throw rangeError;
          } else {
            self.date = arg0;
            tmp = arg1;
            self.tzid = arg1;
            return;
          }
        }
        toString() {
          date = this.date;
          tmp = closure_31(date.getTime(), this.isUTC);
          if (this.isUTC) {
            concat2 = ":".concat;
            combined = ":".concat(tmp);
          } else {
            str = ";TZID=";
            concat = ";TZID=".concat;
            combined1 = ";TZID=".concat(this.tzid, ":");
            combined = combined1.concat(tmp);
          }
          return combined;
        }
        getTime() {
          date = this.date;
          return date.getTime();
        }
        rezonedDate() {
          date = this.date;
          if (this.isUTC) {
            date1 = date;
          } else {
            tzid = tmp.tzid;
            tmp2 = globalThis;
            _Intl = Intl;
            DateTimeFormatResult = Intl.DateTimeFormat();
            _Date = Date;
            tmp3 = closure_33;
            prototype = Date.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            date = new Date(closure_33(date, DateTimeFormatResult.resolvedOptions().timeZone));
            tmp6 = date;
            _Date2 = Date;
            tmp7 = null;
            str = "UTC";
            if (null != tzid) {
              str = tzid;
            }
            prototype2 = _Date2.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            _Date2 = new _Date2(tmp3(date, str));
            tmp10 = _Date2;
            time = _Date2.getTime();
            _Date3 = Date;
            diff = time - date.getTime();
            prototype3 = Date.prototype;
            tmp13 = new.target;
            tmp14 = new.target;
            date1 = new Date(date.getTime() - diff);
          }
          return date1;
        }
      }
      const obj = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          let tmp = !this.tzid;
          if (!tmp) {
            tmp = "UTC" === this.tzid.toUpperCase();
            const str = this.tzid;
          }
          return tmp;
        }
      };
      Object.defineProperty(t.prototype, "isUTC", obj);
      return t;
    }();
    let closure_49 = () => {
      class t {
        constructor() {
          this.all = false;
          this.before = [];
          this.after = [];
          this.between = [];
          return;
        }
        _cacheAdd(arg0, arg1, arg2) {
          self = this;
          if (!arg1) {
            str = "all";
            if ("all" === arg0) {
              self.all = arg1;
            } else {
              arg2._value = arg1;
              arr = self[arg0];
              arr = arr.push(arg2);
            }
            return;
          } else {
            tmp = globalThis;
            _Date = Date;
            if (arg1 instanceof Date) {
              tmp4 = closure_28;
              tmp3 = closure_28(arg1);
            } else {
              tmp2 = closure_29;
              tmp3 = closure_29(arg1);
            }
            tmp5 = tmp3;
          }
          return;
        }
        _cacheGet(arg0, arg1) {
          self = this;
          if (arg1) {
            tmp = globalThis;
            _Object = Object;
            keys = Object.keys(arg1);
          } else {
            keys = [];
          }
          arr2 = self[arg0];
          if ("all" === arg0) {
            flag = self.all;
          } else {
            tmp18 = closure_6;
            flag = false;
            if (closure_6(arr2)) {
              num = 0;
              num2 = 0;
              flag = false;
              if (0 < arr2.length) {
                tmp2 = arr2[num2];
                while (keys.length) {
                  num3 = 0;
                  flag2 = false;
                  if (0 < keys.length) {
                    tmp3 = keys[num3];
                    tmp4 = closure_78;
                    flag2 = true;
                    while (closure_78(arg1[tmp3], tmp2[tmp3])) {
                      num3 = num3 + 1;
                      flag2 = false;
                      if (num3 >= keys.length) {
                        break;
                      }
                    }
                  }
                  if (!flag2) {
                    break;
                  } else {
                    num2 = num2 + 1;
                    flag = false;
                  }
                }
                flag = tmp2._value;
              }
            }
          }
          tmp5 = flag;
          if (!flag) {
            tmp5 = flag;
            if (self.all) {
              tmp6 = closure_34;
              prototype = closure_34.prototype;
              tmp7 = new.target;
              tmp8 = new.target;
              tmp9 = arg0;
              tmp10 = arg1;
              obj = new closure_34(arg0, arg1);
              tmp11 = obj;
              num4 = 0;
              if (0 < self.all.length) {
                num5 = 0;
                if (obj.accept(self.all[0])) {
                  num5 = num5 + 1;
                  while (num5 < self.all.length) {
                    if (!obj.accept(self.all[num5])) {
                      break;
                    }
                  }
                }
              }
              value = obj.getValue();
              _cacheAddResult = self._cacheAdd(arg0, value, arg1);
              tmp5 = value;
            }
          }
          if (closure_6(tmp5)) {
            tmp17 = closure_29;
            tmp15 = closure_29(tmp5);
          } else {
            tmp14 = globalThis;
            _Date = Date;
            tmp15 = tmp5;
            if (tmp5 instanceof Date) {
              tmp16 = closure_28;
              tmp15 = closure_28(tmp5);
            }
          }
          return tmp15;
        }
      }
      return t;
    }();
    const fnResult = fn([], fn3(1, 31), true);
    const obj1 = { SKIP: /^[ \r\n\t]+|^\.$/, number: /^[1-9][0-9]*/, numberAsText: /^(one|two|three)/i, every: /^every/i, day(s): /^days?/i, weekday(s): /^weekdays?/i, week(s): /^weeks?/i, hour(s): /^hours?/i, minute(s): /^minutes?/i, month(s): /^months?/i, year(s): /^years?/i, on: /^(on|in)/i, at: /^(at)/i, the: /^the/i, first: /^first/i, second: /^second/i, third: /^third/i, nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i, last: /^last/i, for: /^for/i, time(s): /^times?/i, until: /^(un)?til/i, monday: /^mo(n(day)?)?/i, tuesday: /^tu(e(s(day)?)?)?/i, wednesday: /^we(d(n(esday)?)?)?/i, thursday: /^th(u(r(sday)?)?)?/i, friday: /^fr(i(day)?)?/i, saturday: /^sa(t(urday)?)?/i, sunday: /^su(n(day)?)?/i, january: /^jan(uary)?/i, february: /^feb(ruary)?/i, march: /^mar(ch)?/i, april: /^apr(il)?/i, may: /^may/i, june: /^june?/i, july: /^july?/i, august: /^aug(ust)?/i, september: /^sep(t(ember)?)?/i, october: /^oct(ober)?/i, november: /^nov(ember)?/i, december: /^dec(ember)?/i, comma: /^(,\s*|(and|or)\s*)+/i };
    const fnResult1 = fn(fn([], fn3(1, 31), true), fn3(2, 28), true);
    const fnResult2 = fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true);
    const fnResult3 = fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true);
    const fnResult4 = fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true);
    const fnResult5 = fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true);
    const fnResult6 = fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true);
    const fnResult7 = fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true);
    const fnResult8 = fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true);
    const fnResult9 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true);
    const fnResult10 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true), fn3(11, 30), true);
    let closure_50 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true), fn3(11, 30), true), fn3(12, 31), true), fn3(1, 7), true);
    const fnResult11 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 28), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true), fn3(11, 30), true), fn3(12, 31), true);
    const fnResult12 = fn([], fn3(1, 31), true);
    const fnResult13 = fn(fn([], fn3(1, 31), true), fn3(2, 29), true);
    const fnResult14 = fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true);
    const fnResult15 = fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true);
    const fnResult16 = fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true);
    const fnResult17 = fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true);
    const fnResult18 = fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true);
    const fnResult19 = fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true);
    const fnResult20 = fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true);
    const fnResult21 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true);
    const fnResult22 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true), fn3(11, 30), true);
    let closure_51 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true), fn3(11, 30), true), fn3(12, 31), true), fn3(1, 7), true);
    const fnResult23 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn3(1, 31), true), fn3(2, 29), true), fn3(3, 31), true), fn3(4, 30), true), fn3(5, 31), true), fn3(6, 30), true), fn3(7, 31), true), fn3(8, 31), true), fn3(9, 30), true), fn3(10, 31), true), fn3(11, 30), true), fn3(12, 31), true);
    const fn2Result = fn2(1, 29);
    const fn2Result2 = fn2(1, 31);
    const fn2Result3 = fn2(1, 32);
    const fn2Result1 = fn2(1, 30);
    let closure_52 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result3, true), fn2(1, 30), true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result3.slice(0, 7), true);
    const fnResult24 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result3, true), fn2(1, 30), true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true);
    let closure_53 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result3, true), fn2Result, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result3.slice(0, 7), true);
    const fnResult25 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result3, true), fn2Result, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result3, true), fn2Result2, true), fn2Result3, true), fn2Result2, true), fn2Result3, true);
    const fn2Result4 = fn2(-28, 0);
    const fn2Result6 = fn2(-30, 0);
    const fn2Result7 = fn2(-31, 0);
    const fn2Result5 = fn2(-29, 0);
    let closure_54 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result7, true), fn2(-29, 0), true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result7.slice(0, 7), true);
    const fnResult26 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result7, true), fn2(-29, 0), true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true);
    let closure_55 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result7, true), fn2Result4, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result7.slice(0, 7), true);
    let closure_56 = ["<string:2846330700>", "<string:2724309416>", "<string:580468308>", "<string:3435180202>", "<string:2793820547>", "<string:4095776881>", "<string:3481694464>", "<string:1723858959>", "363445589247131668", "700136079562375258", "1402418696126992445", "1402418491272986635", "1158877933042143272"];
    let closure_57 = [];
    let items3 = [];
    let num = 0;
    do {
      let combined = items3.concat(fn2(7));
      num = num + 1;
      items3 = combined;
    } while (num < 55);
    let closure_59 = () => {
      class t {
        constructor(arg0) {
          this.options = arg0;
          return;
        }
        rebuild(arg0, arg1) {
          self = this;
          options = this.options;
          if (arg0 !== this.lastyear) {
            self.yearinfo = function _t(lastyear, options) {
              const tmp = callback5(lastyear, 1, 1);
              let num = 365;
              let num2 = 365;
              if (callback6(lastyear)) {
                num2 = 366;
              }
              let num3 = num;
              if (callback6(lastyear + 1)) {
                num3 = 366;
              }
              const tmp3 = callback8(tmp);
              let obj = { yearlen: num2, nextyearlen: num3, yearordinal: callback7(tmp), yearweekday: tmp3 };
              let num4 = num;
              if (callback6(lastyear)) {
                num4 = 366;
              }
              const tmp5 = callback8(callback5(lastyear, 1, 1));
              if (num === num4) {
                obj = { mmask: closure_50, mdaymask: closure_53, nmdaymask: closure_55, wdaymask: arr.slice(tmp5), mrange: closure_57 };
              } else {
                obj = { mmask: closure_51, mdaymask: closure_52, nmdaymask: closure_54, wdaymask: arr.slice(tmp5), mrange: closure_56 };
              }
              const tmp4Result = closure_36(closure_36(obj, obj), { wnomask: null });
              if (callback3(options.byweekno)) {
                return tmp4Result;
              } else {
                tmp4Result.wnomask = callback(0, num2 + 7);
                const tmp19 = callback2(7 - tmp3 + options.wkst, 7);
                let num7 = 4;
                if (tmp19 >= 4) {
                  let sum = tmp4Result.yearlen + callback2(tmp3 - options.wkst, 7);
                  let num8 = 0;
                } else {
                  sum = num2 - tmp19;
                  num8 = tmp19;
                }
                let sum9 = globalThis;
                const _Math = Math;
                const rounded = Math.floor(sum / 7);
                const _Math2 = Math;
                const rounded1 = Math.floor(rounded + callback2(sum, 7) / num7);
                let num9 = 0;
                if (0 < options.byweekno.length) {
                  do {
                    let tmp28 = options.byweekno[num9];
                    let sum1 = tmp28;
                    if (tmp28 < 0) {
                      sum1 = tmp28 + (rounded1 + 1);
                    }
                    let tmp30 = tmp26;
                    let num10 = tmp27;
                    if (sum1 > 0) {
                      tmp30 = tmp26;
                      num10 = tmp27;
                      if (sum1 <= rounded1) {
                        let diff = num8;
                        if (sum1 > 1) {
                          let sum2 = num8 + 7 * (sum1 - 1);
                          diff = sum2;
                          if (num8 !== tmp19) {
                            diff = sum2 - (7 - tmp19);
                          }
                        }
                        tmp4Result.wnomask[diff] = 1;
                        let sum3 = diff + 1;
                        let tmp34 = sum3;
                        let num11 = 0;
                        tmp30 = sum3;
                        num10 = 0;
                        if (tmp4Result.wdaymask[sum3] !== options.wkst) {
                          let sum4 = num11 + 1;
                          tmp30 = tmp34;
                          num10 = sum4;
                          while (sum4 < 7) {
                            tmp4Result.wnomask[tmp34] = 1;
                            let sum5 = tmp34 + 1;
                            tmp34 = sum5;
                            num11 = sum4;
                            tmp30 = sum5;
                            num10 = sum4;
                            if (tmp4Result.wdaymask[sum5] === options.wkst) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    num9 = num9 + 1;
                    let tmp26 = tmp30;
                    let tmp27 = num10;
                  } while (num9 < options.byweekno.length);
                }
                if (callback4(options.byweekno, 1)) {
                  const sum6 = num8 + 7 * rounded1;
                  let diff1 = sum6;
                  if (num8 !== tmp19) {
                    diff1 = sum6 - (7 - tmp19);
                  }
                  if (diff1 < num2) {
                    tmp4Result.wnomask[diff1] = 1;
                    let sum7 = diff1 + 1;
                    let num12 = 0;
                    if (tmp4Result.wdaymask[sum7] !== options.wkst) {
                      num12 = num12 + 1;
                      while (num12 < 7) {
                        tmp4Result.wnomask[sum7] = 1;
                        sum7 = sum7 + 1;
                        if (tmp4Result.wdaymask[sum7] === options.wkst) {
                          break;
                        }
                      }
                    }
                  }
                }
                if (num8) {
                  if (callback4(options.byweekno, -1)) {
                    if (callback4(options.byweekno, -1)) {
                      for (let num15 = 0; num15 < num8; num15 = num15 + 1) {
                        tmp4Result.wnomask[num15] = 1;
                      }
                    }
                  } else {
                    const obj4 = callback8(callback5(lastyear - 1, 1, 1));
                    if (callback6(lastyear - 1)) {
                      num = 366;
                    }
                    if (tmp45 >= num7) {
                      let sum8 = num + callback2(obj4 - options.wkst, 7);
                    } else {
                      sum8 = num2 - num8;
                    }
                    num = sum9.Math;
                    num7 = callback2(sum8, 7) / num7;
                    sum9 = 52 + num7;
                    num.floor(sum9);
                    const tmp45 = callback2(7 - obj4.valueOf() + options.wkst, 7);
                  }
                }
                return tmp4Result;
              }
              const tmp2 = callback7(tmp);
            }(arg0, options);
          }
          if (closure_12(options.bynweekday)) {
            if (arg1 !== self.lastmonth) {
              ({ yearlen, mrange, wdaymask } = self.yearinfo);
              obj = {};
              obj.lastyear = arg0;
              obj.lastmonth = arg1;
              obj.nwdaymask = [];
              items = [];
              tmp = closure_63;
              if (options.freq === closure_63.YEARLY) {
                tmp3 = closure_11;
                if (closure_11(options.bymonth)) {
                  items1 = [0.229];
                  items1[1] = yearlen;
                  items2 = [];
                  items2[0] = items1;
                  arr2 = items2;
                } else {
                  num = 0;
                  num2 = 1;
                  arr2 = items;
                  if (0 < options.bymonth.length) {
                    do {
                      tmp4 = options.bymonth[num];
                      arr = items.push(mrange.slice(tmp4 - 1, tmp4 + 1));
                      num = num + 1;
                      arr2 = items;
                      length = options.bymonth.length;
                    } while (num < length);
                  }
                }
              } else {
                tmp2 = closure_63;
                arr2 = items;
                if (options.freq === closure_63.MONTHLY) {
                  num28 = 1;
                  items3 = [];
                  items3[0] = mrange.slice(arg1 - 1, arg1 + 1);
                  arr2 = items3;
                }
              }
              tmp6 = closure_11;
              tmp7 = arr2;
              if (!closure_11(arr2)) {
                tmp8 = closure_8;
                num3 = 0;
                obj.nwdaymask = closure_8(0, yearlen);
                num4 = 1;
                num5 = 7;
                for (let num6 = 0; num6 < arr2.length; num6 = num6 + 1) {
                  tmp9 = arr2[num6];
                  first = tmp9[0];
                  diff = tmp9[1] - 1;
                  num7 = 0;
                  if (0 < options.bynweekday.length) {
                    do {
                      [tmp12, tmp13] = options.bynweekday[num7];
                      if (tmp13 < 0) {
                        sum = diff + 7 * (tmp13 + 1);
                        tmp18 = closure_9;
                        diff1 = sum - closure_9(wdaymask[sum] - tmp12, 7);
                      } else {
                        sum1 = first + 7 * (tmp13 - 1);
                        tmp15 = closure_9;
                        diff1 = sum1 + closure_9(7 - wdaymask[sum1] + tmp12, 7);
                      }
                      tmp19 = first <= diff1 && diff1 <= diff;
                      if (tmp19) {
                        obj.nwdaymask[diff1] = 1;
                      }
                      num7 = num7 + 1;
                      tmp20 = diff1;
                      tmp21 = tmp12;
                      tmp22 = tmp13;
                    } while (num7 < options.bynweekday.length);
                  }
                }
              }
              self.monthinfo = obj;
            }
          }
          if (closure_3(options.byeaster)) {
            num8 = options.byeaster;
            if (undefined === num8) {
              num8 = 0;
            }
            num9 = 19;
            result = arg0 % 19;
            tmp24 = globalThis;
            _Math = Math;
            num10 = 100;
            rounded = Math.floor(arg0 / 100);
            result1 = arg0 % 100;
            _Math2 = Math;
            num11 = 4;
            _Math3 = Math;
            num12 = 8;
            num13 = 25;
            rounded1 = Math.floor(rounded / 4);
            result2 = rounded % 4;
            _Math4 = Math;
            num14 = 1;
            num15 = 3;
            _Math5 = Math;
            num16 = 15;
            num17 = 30;
            result3 = Math.floor(19 * result + rounded - rounded1 - Math.floor((rounded - Math.floor((rounded + 8) / 25) + 1) / 3) + 15) % 30;
            _Math6 = Math;
            _Math7 = Math;
            num18 = 2;
            num19 = 32;
            num20 = 7;
            result4 = Math.floor(32 + 2 * result2 + 2 * Math.floor(result1 / 4) - result3 - result1 % 4) % 7;
            _Math8 = Math;
            num21 = 11;
            num22 = 22;
            num23 = 451;
            rounded2 = Math.floor((result + 11 * result3 + 22 * result4) / 451);
            _Math9 = Math;
            sum2 = result3 + result4;
            num24 = 114;
            num25 = 31;
            _Date = Date;
            _Date2 = Date;
            num26 = 0;
            UTCResult = Date.UTC(arg0, Math.floor((sum2 - 7 * rounded2 + 114) / 31) - 1, (sum2 - 7 * rounded2 + 114) % 31 + 1 + num8);
            _Math10 = Math;
            num27 = 86400000;
            items4 = [];
            items4[0] = Math.ceil((UTCResult - Date.UTC(arg0, 0, 1)) / 86400000);
            self.eastermask = items4;
          }
          return;
        }
        ydayset() {
          items = [, , ];
          items[0] = closure_7(this.yearlen);
          items[1] = 0;
          items[2] = this.yearlen;
          return items;
        }
        mdayset(arg0, arg1) {
          tmp = this.mrange[arg1 - 1];
          tmp2 = this.mrange[arg1];
          tmp3 = closure_8(null, this.yearlen);
          sum = tmp;
          if (tmp < tmp2) {
            do {
              tmp3[sum] = sum;
              sum = sum + 1;
            } while (sum < tmp2);
          }
          items = [, , ];
          items[0] = tmp3;
          items[1] = tmp;
          items[2] = tmp2;
          return items;
        }
        wdayset(arg0, arg1, arg2) {
          self = this;
          tmp = closure_8(null, this.yearlen + 7);
          diff = closure_22(closure_14(arg0, arg1, arg2)) - this.yearordinal;
          tmp[diff] = diff;
          sum = diff + 1;
          tmp4 = sum;
          num = 0;
          tmp5 = sum;
          if (this.wdaymask[sum] !== this.options.wkst) {
            num = num + 1;
            tmp5 = tmp4;
            while (num < 7) {
              tmp[tmp4] = tmp4;
              sum1 = tmp4 + 1;
              tmp4 = sum1;
              tmp5 = sum1;
              if (self.wdaymask[sum1] === self.options.wkst) {
                break;
              }
            }
          }
          items = [, , ];
          items[0] = tmp;
          items[1] = diff;
          items[2] = tmp5;
          return items;
        }
        ddayset(arg0, arg1, arg2) {
          tmp = closure_8(null, this.yearlen);
          diff = closure_22(closure_14(arg0, arg1, arg2)) - this.yearordinal;
          tmp[diff] = diff;
          items = [, , ];
          items[0] = tmp;
          items[1] = diff;
          items[2] = diff + 1;
          return items;
        }
        htimeset(arg0, arg1, arg2, arg3) {
          arg0 = arg0;
          arg2 = arg2;
          arg3 = arg3;
          self = this;
          arg3 = [];
          byminute = this.options.byminute;
          item = byminute.forEach((arg0) => {
            closure_4 = closure_4.concat(self.mtimeset(arg0, arg0, arg2, arg3));
          });
          tmp2 = closure_30(arg3);
          return arg3;
        }
        mtimeset(arg0, arg1, arg2, arg3) {
          arg0 = arg0;
          arg1 = arg1;
          arg3 = arg3;
          bysecond = this.options.bysecond;
          mapped = bysecond.map((arg0) => new closure_46(arg0, arg1, arg0, arg3));
          tmp2 = closure_30(mapped);
          return mapped;
        }
        stimeset(arg0, arg1, arg2, arg3) {
          tmp = new closure_46(arg0, arg1, arg2, arg3);
          items = [];
          items[0] = tmp;
          return items;
        }
        getdayset(arg0) {
          self = this;
          if (closure_37.YEARLY === arg0) {
            ydayset = self.ydayset;
            return ydayset.bind(self);
          } else {
            tmp = closure_37;
            if (closure_37.MONTHLY === arg0) {
              mdayset = self.mdayset;
              return mdayset.bind(self);
            } else {
              tmp2 = closure_37;
              if (closure_37.WEEKLY === arg0) {
                wdayset = self.wdayset;
                return wdayset.bind(self);
              } else {
                tmp3 = closure_37;
                DAILY = closure_37.DAILY;
                ddayset = self.ddayset;
                return ddayset.bind(self);
              }
            }
          }
        }
        gettimeset(arg0) {
          self = this;
          if (closure_37.HOURLY === arg0) {
            htimeset = self.htimeset;
            return htimeset.bind(self);
          } else {
            tmp = closure_37;
            if (closure_37.MINUTELY === arg0) {
              mtimeset = self.mtimeset;
              return mtimeset.bind(self);
            } else {
              tmp2 = closure_37;
              if (closure_37.SECONDLY === arg0) {
                stimeset = self.stimeset;
                return stimeset.bind(self);
              } else {
                return;
              }
            }
          }
        }
      }
      let obj = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          let lastyear = null;
          if (this.monthinfo) {
            lastyear = this.monthinfo.lastyear;
          }
          return lastyear;
        }
      };
      Object.defineProperty(t.prototype, "lastyear", obj);
      obj = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          let lastmonth = null;
          if (this.monthinfo) {
            lastmonth = this.monthinfo.lastmonth;
          }
          return lastmonth;
        }
      };
      Object.defineProperty(t.prototype, "lastmonth", obj);
      obj = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.yearlen;
        }
      };
      Object.defineProperty(t.prototype, "yearlen", obj);
      const obj1 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.yearordinal;
        }
      };
      Object.defineProperty(t.prototype, "yearordinal", obj1);
      const obj2 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.mrange;
        }
      };
      Object.defineProperty(t.prototype, "mrange", obj2);
      const obj3 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.wdaymask;
        }
      };
      Object.defineProperty(t.prototype, "wdaymask", obj3);
      const obj4 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.mmask;
        }
      };
      Object.defineProperty(t.prototype, "mmask", obj4);
      const obj5 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.wnomask;
        }
      };
      Object.defineProperty(t.prototype, "wnomask", obj5);
      const obj6 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          if (this.monthinfo) {
            let nwdaymask = this.monthinfo.nwdaymask;
          } else {
            nwdaymask = [];
          }
          return nwdaymask;
        }
      };
      Object.defineProperty(t.prototype, "nwdaymask", obj6);
      const obj7 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.nextyearlen;
        }
      };
      Object.defineProperty(t.prototype, "nextyearlen", obj7);
      const obj8 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.mdaymask;
        }
      };
      Object.defineProperty(t.prototype, "mdaymask", obj8);
      const obj9 = {
        <string:508650076>: 60,
        <string:2874434054>: 0,
        <string:1677985361>: 0,
        get() {
          return this.yearinfo.nmdaymask;
        }
      };
      Object.defineProperty(t.prototype, "nmdaymask", obj9);
      return t;
    }();
    const obj3 = {};
    tmp3 = new tmp3(0);
    obj3.MO = tmp3;
    tmp3 = new tmp3(1);
    obj3.TU = tmp3;
    const fnResult27 = fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn([], fn2Result7, true), fn2Result4, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result7, true), fn2Result6, true), fn2Result7, true), fn2Result6, true), fn2Result7, true);
    obj3.WE = new tmp3(2);
    const tmp31 = new tmp3(2);
    obj3.TH = new tmp3(3);
    const tmp32 = new tmp3(3);
    obj3.FR = new tmp3(4);
    const tmp33 = new tmp3(4);
    obj3.SA = new tmp3(5);
    const tmp34 = new tmp3(5);
    obj3.SU = new tmp3(6);
    const obj4 = { freq: obj2.YEARLY, wkst: obj3.MO };
    let closure_62 = Object.keys(obj4);
    const tmp49 = () => {
      class t {
        constructor(arg0, arg1) {
          obj = arg0;
          flag = arg1;
          self = this;
          if (undefined === arg0) {
            obj = {};
          }
          if (undefined === flag) {
            flag = false;
          }
          tmp = null;
          if (!flag) {
            tmp2 = closure_49;
            prototype = closure_49.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp = new closure_49();
          }
          self._cache = tmp;
          self.origOptions = closure_70(obj);
          tmp5 = closure_36({}, closure_61);
          tmp6 = closure_36(tmp5, closure_70(obj));
          if (closure_3(tmp6.byeaster)) {
            tmp7 = closure_63;
            tmp6.freq = closure_63.YEARLY;
          }
          if (closure_3(tmp6.freq)) {
            tmp8 = closure_63;
            if (closure_63.FREQUENCIES[tmp6.freq]) {
              if (!tmp6.dtstart) {
                tmp10 = globalThis;
                _Date = Date;
                _Date2 = Date;
                prototype2 = Date.prototype;
                tmp11 = new.target;
                tmp12 = new.target;
                date = new Date();
                tmp13 = date;
                num = 0;
                prototype3 = Date.prototype;
                tmp14 = new.target;
                tmp15 = new.target;
                date1 = new Date(date.setMilliseconds(0));
                tmp17 = date1;
                tmp6.dtstart = date1;
              }
              tmp18 = closure_3;
              if (closure_3(tmp6.wkst)) {
                tmp20 = closure_4;
                if (!closure_4(tmp6.wkst)) {
                  tmp6.wkst = tmp6.wkst.weekday;
                }
              } else {
                tmp19 = closure_63;
                tmp6.wkst = closure_63.MO.weekday;
              }
              tmp21 = closure_3;
              if (closure_3(tmp6.bysetpos)) {
                tmp22 = closure_4;
                if (closure_4(tmp6.bysetpos)) {
                  items = [];
                  items[0] = tmp6.bysetpos;
                  tmp6.bysetpos = items;
                }
                num2 = 0;
                num3 = 366;
                num4 = -366;
                num5 = 0;
                if (0 < tmp6.bysetpos.length) {
                  tmp23 = tmp6.bysetpos[num5];
                  while (0 !== tmp23) {
                    if (tmp23 < -366) {
                      break;
                    } else if (tmp23 > 366) {
                      break;
                    } else {
                      num5 = num5 + 1;
                    }
                  }
                  tmp80 = globalThis;
                  _Error = Error;
                  prototype4 = Error.prototype;
                  tmp81 = new.target;
                  str = "bysetpos must be between 1 and 366, or between -366 and -1";
                  tmp82 = new.target;
                  error = new Error("bysetpos must be between 1 and 366, or between -366 and -1");
                  tmp84 = error;
                  throw error;
                }
              }
              tmp24 = globalThis;
              _Boolean = Boolean;
              if (!Boolean(tmp6.byweekno)) {
                tmp25 = closure_12;
                if (!closure_12(tmp6.byweekno)) {
                  tmp26 = closure_12;
                  if (!closure_12(tmp6.byyearday)) {
                    _Boolean2 = Boolean;
                    if (!Boolean(tmp6.bymonthday)) {
                      tmp27 = closure_12;
                      if (!closure_12(tmp6.bymonthday)) {
                        tmp28 = closure_3;
                        if (!closure_3(tmp6.byweekday)) {
                          tmp29 = closure_3;
                          if (!closure_3(tmp6.byeaster)) {
                            freq = tmp6.freq;
                            tmp30 = closure_63;
                            if (closure_63.YEARLY === freq) {
                              if (!tmp6.bymonth) {
                                dtstart2 = tmp6.dtstart;
                                num6 = 1;
                                tmp6.bymonth = dtstart2.getUTCMonth() + 1;
                              }
                              dtstart3 = tmp6.dtstart;
                              tmp6.bymonthday = dtstart3.getUTCDate();
                            } else {
                              tmp31 = closure_63;
                              if (closure_63.MONTHLY === freq) {
                                dtstart = tmp6.dtstart;
                                tmp6.bymonthday = dtstart.getUTCDate();
                              } else {
                                tmp32 = closure_63;
                                if (closure_63.WEEKLY === freq) {
                                  tmp33 = closure_25;
                                  items1 = [];
                                  items1[0] = closure_25(tmp6.dtstart);
                                  tmp6.byweekday = items1;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              tmp34 = closure_3;
              tmp35 = closure_3(tmp6.bymonth);
              if (tmp35) {
                tmp36 = closure_6;
                tmp35 = !closure_6(tmp6.bymonth);
              }
              if (tmp35) {
                items2 = [];
                items2[0] = tmp6.bymonth;
                tmp6.bymonth = items2;
              }
              tmp37 = closure_3;
              tmp38 = closure_3(tmp6.byyearday);
              if (tmp38) {
                tmp39 = closure_6;
                tmp38 = !closure_6(tmp6.byyearday);
              }
              if (tmp38) {
                tmp40 = closure_4;
                tmp38 = closure_4(tmp6.byyearday);
              }
              if (tmp38) {
                items3 = [];
                items3[0] = tmp6.byyearday;
                tmp6.byyearday = items3;
              }
              tmp41 = closure_3;
              if (closure_3(tmp6.bymonthday)) {
                tmp42 = closure_6;
                bymonthday = tmp6.bymonthday;
                num7 = 0;
                if (closure_6(tmp6.bymonthday)) {
                  items4 = [];
                  items5 = [];
                  num8 = 0;
                  if (0 < bymonthday.length) {
                    do {
                      tmp43 = tmp6.bymonthday[num8];
                      if (tmp43 > 0) {
                        arr = items4.push(tmp43);
                      } else if (tmp43 < 0) {
                        arr1 = items5.push(tmp43);
                      }
                      num8 = num8 + 1;
                    } while (num8 < tmp6.bymonthday.length);
                  }
                  tmp6.bymonthday = items4;
                  tmp6.bynmonthday = items5;
                } else if (bymonthday < 0) {
                  items6 = [];
                  items6[0] = tmp6.bymonthday;
                  tmp6.bynmonthday = items6;
                  tmp6.bymonthday = [];
                } else {
                  tmp6.bynmonthday = [];
                  items7 = [];
                  items7[0] = tmp6.bymonthday;
                  tmp6.bymonthday = items7;
                }
              } else {
                tmp6.bymonthday = [];
                tmp6.bynmonthday = [];
              }
              tmp46 = closure_3;
              tmp47 = closure_3(tmp6.byweekno);
              if (tmp47) {
                tmp48 = closure_6;
                tmp47 = !closure_6(tmp6.byweekno);
              }
              if (tmp47) {
                items8 = [];
                items8[0] = tmp6.byweekno;
                tmp6.byweekno = items8;
              }
              tmp49 = closure_3;
              if (closure_3(tmp6.byweekday)) {
                tmp50 = closure_4;
                if (closure_4(tmp6.byweekday)) {
                  items9 = [];
                  items9[0] = tmp6.byweekday;
                  tmp6.byweekday = items9;
                  tmp6.bynweekday = null;
                } else {
                  tmp51 = closure_5;
                  if (closure_5(tmp6.byweekday)) {
                    tmp67 = closure_2;
                    items10 = [];
                    items10[0] = closure_2.fromStr(tmp6.byweekday).weekday;
                    tmp6.byweekday = items10;
                    tmp6.bynweekday = null;
                  } else {
                    tmp52 = closure_2;
                    byweekday = tmp6.byweekday;
                    if (tmp6.byweekday instanceof closure_2) {
                      if (byweekday.n) {
                        tmp66 = closure_63;
                        if (tmp6.freq <= closure_63.MONTHLY) {
                          items11 = [, ];
                          items11[0] = tmp6.byweekday.weekday;
                          items11[1] = tmp6.byweekday.n;
                          items12 = [];
                          items12[0] = items11;
                          tmp6.bynweekday = items12;
                          tmp6.byweekday = null;
                        }
                      }
                      items13 = [];
                      items13[0] = tmp6.byweekday.weekday;
                      tmp6.byweekday = items13;
                      tmp6.bynweekday = null;
                    } else {
                      items14 = [];
                      items15 = [];
                      num9 = 0;
                      if (0 < byweekday.length) {
                        do {
                          tmp53 = tmp6.byweekday[num9];
                          tmp54 = closure_4;
                          if (closure_4(tmp53)) {
                            arr2 = items14.push(tmp53);
                          } else {
                            tmp55 = closure_5;
                            if (closure_5(tmp53)) {
                              tmp59 = closure_2;
                              arr3 = items14.push(closure_2.fromStr(tmp53).weekday);
                            } else {
                              if (tmp53.n) {
                                tmp56 = closure_63;
                                if (tmp6.freq <= closure_63.MONTHLY) {
                                  items16 = [, ];
                                  ({ weekday: arr14[0], n: arr14[1] } = tmp53);
                                  arr4 = items15.push(items16);
                                }
                              }
                              arr5 = items14.push(tmp53.weekday);
                            }
                          }
                          num9 = num9 + 1;
                        } while (num9 < tmp6.byweekday.length);
                      }
                      tmp62 = closure_12;
                      tmp63 = null;
                      if (closure_12(items14)) {
                        tmp63 = items14;
                      }
                      tmp6.byweekday = tmp63;
                      tmp64 = closure_12;
                      tmp65 = null;
                      if (closure_12(items15)) {
                        tmp65 = items15;
                      }
                      tmp6.bynweekday = tmp65;
                    }
                  }
                }
              } else {
                tmp6.bynweekday = null;
              }
              tmp68 = closure_3;
              if (closure_3(tmp6.byhour)) {
                tmp71 = closure_4;
                if (closure_4(tmp6.byhour)) {
                  items17 = [];
                  items17[0] = tmp6.byhour;
                  tmp6.byhour = items17;
                }
              } else {
                tmp69 = closure_63;
                tmp70 = null;
                if (tmp6.freq < closure_63.HOURLY) {
                  dtstart4 = tmp6.dtstart;
                  items18 = [];
                  items18[0] = dtstart4.getUTCHours();
                  tmp70 = items18;
                }
                tmp6.byhour = tmp70;
              }
              tmp72 = closure_3;
              if (closure_3(tmp6.byminute)) {
                tmp75 = closure_4;
                if (closure_4(tmp6.byminute)) {
                  items19 = [];
                  items19[0] = tmp6.byminute;
                  tmp6.byminute = items19;
                }
              } else {
                tmp73 = closure_63;
                tmp74 = null;
                if (tmp6.freq < closure_63.MINUTELY) {
                  dtstart5 = tmp6.dtstart;
                  items20 = [];
                  items20[0] = dtstart5.getUTCMinutes();
                  tmp74 = items20;
                }
                tmp6.byminute = tmp74;
              }
              tmp76 = closure_3;
              if (closure_3(tmp6.bysecond)) {
                tmp79 = closure_4;
                if (closure_4(tmp6.bysecond)) {
                  items21 = [];
                  items21[0] = tmp6.bysecond;
                  tmp6.bysecond = items21;
                }
              } else {
                tmp77 = closure_63;
                tmp78 = null;
                if (tmp6.freq < closure_63.SECONDLY) {
                  dtstart6 = tmp6.dtstart;
                  items22 = [];
                  items22[0] = dtstart6.getUTCSeconds();
                  tmp78 = items22;
                }
                tmp6.bysecond = tmp78;
              }
              obj = {};
              obj.parsedOptions = tmp6;
              self.options = obj.parsedOptions;
              return;
            }
          }
          combined = "Invalid frequency: ".concat(tmp6.freq, " ");
          error1 = new Error(combined.concat(obj.freq));
          throw error1;
        }
        static parseText(arg0, arg1) {
          return closure_68(arg0, arg1);
        }
        static fromText(arg0, arg1) {
          tmp = arg1;
          if (undefined === arg1) {
            tmp = closure_39;
          }
          tmp2 = closure_63;
          tmp3 = closure_68(arg0, tmp) || undefined;
          tmp2 = new tmp2(tmp3);
          return tmp2;
        }
        static fromString(arg0) {
          tmp = t;
          tmp2 = t.parseString(arg0) || undefined;
          tmp = new tmp(tmp2);
          return tmp;
        }
        _iter(arg0) {
          return closure_80(arg0, this.options);
        }
        _cacheGet(arg0, arg1) {
          tmp = !this._cache;
          _cacheGetResult = !tmp;
          if (!tmp) {
            _cache = this._cache;
            tmp3 = arg0;
            tmp4 = arg1;
            _cacheGetResult = _cache._cacheGet(arg0, arg1);
          }
          return _cacheGetResult;
        }
        _cacheAdd(arg0, arg1, arg2) {
          if (this._cache) {
            _cache = this._cache;
            tmp = arg0;
            tmp2 = arg1;
            tmp3 = arg2;
            return _cache._cacheAdd(arg0, arg1, arg2);
          } else {
            return;
          }
        }
        all(arg0) {
          self = this;
          if (arg0) {
            tmp9 = closure_38;
            prototype2 = closure_38.prototype;
            tmp10 = new.target;
            str3 = "all";
            tmp11 = new.target;
            tmp12 = arg0;
            tmp13 = new closure_38("all", {}, arg0);
            tmp14 = tmp13;
            return self._iter(tmp13);
          } else {
            str = "all";
            _cacheGetResult = self._cacheGet("all");
            flag = false;
            if (false === _cacheGetResult) {
              tmp2 = closure_34;
              prototype = closure_34.prototype;
              tmp3 = new.target;
              tmp4 = new.target;
              str2 = "all";
              tmp5 = new closure_34("all", {});
              tmp6 = tmp5;
              _iterResult = self._iter(tmp5);
              _cacheAddResult = self._cacheAdd("all", _iterResult);
              _cacheGetResult = _iterResult;
            }
            return _cacheGetResult;
          }
        }
        between(arg0, arg1, arg2, arg3) {
          flag = arg2;
          self = this;
          if (undefined === arg2) {
            flag = false;
          }
          if (closure_20(arg0)) {
            tmp = closure_20;
            if (closure_20(arg1)) {
              obj = {};
              obj.before = arg1;
              obj.after = arg0;
              obj.inc = flag;
              if (arg3) {
                tmp12 = closure_38;
                prototype2 = closure_38.prototype;
                tmp13 = new.target;
                str3 = "between";
                tmp14 = new.target;
                tmp15 = obj;
                tmp16 = arg3;
                tmp17 = new closure_38("between", obj, arg3);
                tmp18 = tmp17;
                return self._iter(tmp17);
              } else {
                str = "between";
                _cacheGetResult = self._cacheGet("between", obj);
                flag2 = false;
                if (false === _cacheGetResult) {
                  tmp4 = closure_34;
                  prototype = closure_34.prototype;
                  tmp5 = new.target;
                  tmp6 = new.target;
                  str2 = "between";
                  tmp7 = obj;
                  tmp8 = new closure_34("between", obj);
                  tmp9 = tmp8;
                  _iterResult = self._iter(tmp8);
                  _cacheAddResult = self._cacheAdd("between", _iterResult, obj);
                  _cacheGetResult = _iterResult;
                }
                return _cacheGetResult;
              }
            }
          }
          error = new Error("Invalid date passed in to RRule.between");
          throw error;
        }
        before(arg0, arg1) {
          flag = arg1;
          self = this;
          if (undefined === arg1) {
            flag = false;
          }
          if (closure_20(arg0)) {
            obj = {};
            obj.dt = arg0;
            obj.inc = flag;
            str2 = "before";
            _cacheGetResult = self._cacheGet("before", obj);
            flag2 = false;
            if (false === _cacheGetResult) {
              tmp7 = closure_34;
              prototype2 = closure_34.prototype;
              tmp8 = new.target;
              tmp9 = new.target;
              str3 = "before";
              tmp10 = obj;
              tmp11 = new closure_34("before", obj);
              tmp12 = tmp11;
              _iterResult = self._iter(tmp11);
              _cacheAddResult = self._cacheAdd("before", _iterResult, obj);
              _cacheGetResult = _iterResult;
            }
            return _cacheGetResult;
          } else {
            tmp = globalThis;
            _Error = Error;
            prototype = Error.prototype;
            tmp2 = new.target;
            str = "Invalid date passed in to RRule.before";
            tmp3 = new.target;
            error = new Error("Invalid date passed in to RRule.before");
            tmp5 = error;
            throw error;
          }
        }
        after(arg0, arg1) {
          flag = arg1;
          self = this;
          if (undefined === arg1) {
            flag = false;
          }
          if (closure_20(arg0)) {
            obj = {};
            obj.dt = arg0;
            obj.inc = flag;
            str2 = "after";
            _cacheGetResult = self._cacheGet("after", obj);
            flag2 = false;
            if (false === _cacheGetResult) {
              tmp7 = closure_34;
              prototype2 = closure_34.prototype;
              tmp8 = new.target;
              tmp9 = new.target;
              str3 = "after";
              tmp10 = obj;
              tmp11 = new closure_34("after", obj);
              tmp12 = tmp11;
              _iterResult = self._iter(tmp11);
              _cacheAddResult = self._cacheAdd("after", _iterResult, obj);
              _cacheGetResult = _iterResult;
            }
            return _cacheGetResult;
          } else {
            tmp = globalThis;
            _Error = Error;
            prototype = Error.prototype;
            tmp2 = new.target;
            str = "Invalid date passed in to RRule.after";
            tmp3 = new.target;
            error = new Error("Invalid date passed in to RRule.after");
            tmp5 = error;
            throw error;
          }
        }
        count() {
          return this.all().length;
        }
        toString() {
          return closure_76(this.origOptions);
        }
        toText(arg0, arg1, arg2) {
          str = new closure_43(this, arg0, arg1, arg2);
          return str.toString();
        }
        isFullyConvertibleToText() {
          return closure_45(this);
        }
        clone() {
          tmp = new t(this.origOptions);
          return tmp;
        }
      }
      t.FREQUENCIES = ["<string:1325400918>", "<string:603980630>", "<string:1073742601>", "<string:687866632>", "<string:1107296690>", "fvt", "vt"];
      t.YEARLY = obj2.YEARLY;
      t.MONTHLY = obj2.MONTHLY;
      t.WEEKLY = obj2.WEEKLY;
      t.DAILY = obj2.DAILY;
      t.HOURLY = obj2.HOURLY;
      t.MINUTELY = obj2.MINUTELY;
      t.SECONDLY = obj2.SECONDLY;
      t.MO = obj3.MO;
      t.TU = obj3.TU;
      t.WE = obj3.WE;
      t.TH = obj3.TH;
      t.FR = obj3.FR;
      t.SA = obj3.SA;
      t.SU = obj3.SU;
      t.parseString = ot;
      t.optionsToString = ct;
      return t;
    }();
    let closure_64 = { "Bool(false)": null, "Bool(false)": "#000000", "Bool(false)": 0.08, "Bool(false)": 8, "Bool(false)": 3, "Bool(false)": "#a5abb3" };
    let closure_65 = (arg0) => {
      class e {
        constructor(arg0) {
          flag = arg0;
          self = this;
          if (undefined === arg0) {
            flag = false;
          }
          tmp = arg0.call(self, {}, flag) || self;
          tmp.dtstart = closure_88.apply(tmp, []);
          tmp.tzid = closure_88.apply(tmp, [null]);
          tmp._rrule = [];
          tmp._rdate = [];
          tmp._exrule = [];
          tmp._exdate = [];
          return tmp;
        }
        _iter(arg0) {
          ({ _rrule, _exrule, _rdate, _exdate } = this);
          return (accept, _rrule, _exrule, _rdate, _exdate, arg5) => {
            const fn = function u(after, before) {
              const arg2 = before;
              const item = arg2.forEach(() => { ... });
            };
            let closure_3 = {};
            accept = accept.accept;
            const item = _exdate.forEach((arg0) => {
              closure_3[Number(new closure_48(arg0, arg5).rezonedDate())] = true;
            });
            accept.accept = function(arg0) {
              const self = this;
              const NumberResult = Number(arg0);
              if (isNaN(NumberResult)) {
                let callResult = accept.call(self, arg0);
              } else {
                let tmp3 = !closure_3[NumberResult];
                if (tmp3) {
                  const _Date = Date;
                  const date = new Date(NumberResult - 1);
                  const _Date2 = Date;
                  const date1 = new Date(NumberResult + 1);
                  fn(date, date1);
                  tmp3 = !closure_3[NumberResult];
                }
                callResult = !tmp3;
                if (tmp3) {
                  closure_3[NumberResult] = true;
                  callResult = accept.call(self, arg0);
                }
              }
              return callResult;
            };
            if ("between" === accept.method) {
              fn(accept.args.after, accept.args.before);
              accept.accept = function(arg0) {
                const NumberResult = Number(arg0);
                let callResult = !tmp2;
                if (!closure_3[NumberResult]) {
                  closure_3[NumberResult] = true;
                  const self = this;
                  callResult = accept.call(this, arg0);
                }
                return callResult;
              };
            }
            let num = 0;
            if (0 < _rdate.length) {
              const prototype = ctor.prototype;
              const obj = new ctor(_rdate[num], arg5);
              const _Date = Date;
              const date = new Date(obj.rezonedDate().getTime());
              while (tmp8(date)) {
                num = num + 1;
                if (num >= _rdate.length) {
                  break;
                }
              }
              const rezonedDateResult = obj.rezonedDate();
            }
            const item1 = _rrule.forEach((options) => {
              callback(options, options.options);
            });
            const _result = accept._result;
            callback(_result);
            const method = accept.method;
            if ("all" !== method) {
              if ("between" !== method) {
                if ("before" === method) {
                  let length = _result.length;
                  if (length) {
                    length = _result[_result.length - 1];
                  }
                  if (!length) {
                    length = null;
                  }
                  return length;
                } else {
                  return _result.length && _result[0] || null;
                }
              }
            }
            return _result;
          }(arg0, _rrule, _exrule, _rdate, _exdate, this.tzid());
        }
        rrule(arg0) {
          tmp = closure_89(arg0, this._rrule);
          return;
        }
        exrule(arg0) {
          tmp = closure_89(arg0, this._exrule);
          return;
        }
        rdate(arg0) {
          tmp = closure_90(arg0, this._rdate);
          return;
        }
        exdate(arg0) {
          tmp = closure_90(arg0, this._exdate);
          return;
        }
        rrules() {
          _rrule = this._rrule;
          return _rrule.map((arg0) => callback(arg0.toString()));
        }
        exrules() {
          _exrule = this._exrule;
          return _exrule.map((arg0) => callback(arg0.toString()));
        }
        rdates() {
          _rdate = this._rdate;
          return _rdate.map((getTime) => new Date(getTime.getTime()));
        }
        exdates() {
          _exdate = this._exdate;
          return _exdate.map((getTime) => new Date(getTime.getTime()));
        }
        valueOf() {
          self = this;
          closure_0 = [];
          tmp = !this._rrule.length && self._dtstart;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_76;
            obj = {};
            obj.dtstart = self._dtstart;
            closure_0 = closure_0.concat(closure_76(obj));
          }
          _rrule = self._rrule;
          item = _rrule.forEach((arg0) => {
            closure_0 = closure_0.concat(arg0.toString().split("\n"));
          });
          _exrule = self._exrule;
          item1 = _exrule.forEach((arg0) => {
            const parts = arg0.toString().split("\n");
            const mapped = parts.map((str) => str.replace(/^RRULE:/, "EXRULE:"));
            closure_0 = closure_0.concat(mapped.filter((arg0) => !/^DTSTART/.test(arg0)));
          });
          if (self._rdate.length) {
            tmp6 = closure_0;
            tmp7 = closure_91;
            str = "RDATE";
            arr = closure_0.push(closure_91("RDATE", self._rdate, self.tzid()));
          }
          if (self._exdate.length) {
            tmp9 = closure_0;
            tmp10 = closure_91;
            str2 = "EXDATE";
            arr1 = closure_0.push(closure_91("EXDATE", self._exdate, self.tzid()));
          }
          return closure_0;
        }
        toString() {
          valueOfResult = this.valueOf();
          return valueOfResult.join("\n");
        }
        clone() {
          tmp = new e(this._cache);
          arg0 = tmp;
          _rrule = this._rrule;
          item = _rrule.forEach((clone) => tmp.rrule(clone.clone()));
          _exrule = this._exrule;
          item1 = _exrule.forEach((clone) => tmp.exrule(clone.clone()));
          _rdate = this._rdate;
          item2 = _rdate.forEach((getTime) => tmp.rdate(new Date(getTime.getTime())));
          _exdate = this._exdate;
          item3 = _exdate.forEach((getTime) => tmp.exdate(new Date(getTime.getTime())));
          return tmp;
        }
      }
      let closure_1 = e;
      W(e, arg0);
      return e;
    }(tmp49);
    return obj;
  }();
};
if ("object" === typeof exports) {
  if ("object" === typeof module) {
    module.exports = fn();
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
const fnResult = fn();
if ("object" === typeof exports) {
  exports.rrule = fnResult;
} else {
  self.rrule = fnResult;
}
