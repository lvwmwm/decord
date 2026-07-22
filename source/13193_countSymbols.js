// Module ID: 13193
// Function ID: 99728
// Name: countSymbols
// Dependencies: []

// Module 13193 (countSymbols)
function countSymbols(buffer) {
  const ucs2 = arg1(arg6[0]).ucs2;
  return ucs2.decode(buffer).length;
}
function at(dismissOAuthModal) {
  let fromCodePointResult;
  if (!isNaN(dismissOAuthModal[arg1])) {
    const _String = String;
    fromCodePointResult = String.fromCodePoint(tmp);
  }
  return fromCodePointResult;
}
function isSingleDot(buffer) {
  let tmp = "." === buffer;
  if (!tmp) {
    tmp = "%2e" === buffer.toLowerCase();
  }
  return tmp;
}
function isWindowsDriveLetterString(buffer) {
  let isASCIIAlphaResult = 2 === buffer.length;
  if (isASCIIAlphaResult) {
    isASCIIAlphaResult = arg1(arg6[1]).isASCIIAlpha(buffer.codePointAt(0));
    const obj = arg1(arg6[1]);
  }
  if (isASCIIAlphaResult) {
    let tmp4 = ":" === buffer[1];
    if (!tmp4) {
      tmp4 = "|" === buffer[1];
    }
    isASCIIAlphaResult = tmp4;
  }
  return isASCIIAlphaResult;
}
function isSpecialScheme(buffer) {
  return undefined !== closure_3[buffer];
}
function isSpecial(url) {
  return isSpecialScheme(url.scheme);
}
function isNotSpecial(url) {
  return !isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
  return closure_3[scheme];
}
function isC0ControlPercentEncode(arg0) {
  let tmp = arg0 <= 31;
  if (!tmp) {
    tmp = arg0 > 126;
  }
  return tmp;
}
function isUserinfoPercentEncode(arg0) {
  let hasItem = isPathPercentEncode(arg0);
  if (!hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
}
function isFragmentPercentEncode(arg0) {
  let hasItem = isC0ControlPercentEncode(arg0);
  if (!hasItem) {
    hasItem = set1.has(arg0);
  }
  return hasItem;
}
function isPathPercentEncode(arg0) {
  let hasItem = isFragmentPercentEncode(arg0);
  if (!hasItem) {
    hasItem = set2.has(arg0);
  }
  return hasItem;
}
function percentEncodeChar(codePointAtResult, isC0ControlPercentEncode) {
  let length;
  const fromCodePointResult = String.fromCodePoint(codePointAtResult);
  let tmp2 = fromCodePointResult;
  if (isC0ControlPercentEncode(codePointAtResult)) {
    const _Buffer = isC0ControlPercentEncode(arg6[2]).Buffer;
    const fromResult = _Buffer.from(fromCodePointResult);
    let num2 = 0;
    let str = "";
    let str2 = "";
    if (0 < fromResult.length) {
      do {
        let tmp5 = closure_0;
        let tmp6 = closure_2;
        let obj = closure_0(closure_2[3]);
        str = `${obj.percentEncode(arr[num2])}`;
        num2 = num2 + 1;
        str2 = str;
        length = fromResult.length;
      } while (num2 < length);
    }
    tmp2 = str2;
  }
  return tmp2;
}
function parseIPv4Number(replaced) {
  if (replaced.length >= 2) {
    if ("0" === replaced.charAt(0)) {
      if ("x" === str2.toLowerCase()) {
        let substr = replaced.substring(2);
        let num4 = 16;
      }
      if ("" === substr) {
        return 0;
      } else {
        let obj = /[^0-7]/;
        if (10 === num4) {
          obj = /[^0-9]/;
        }
        if (16 === num4) {
          obj = /[^0-9A-Fa-f]/;
        }
        if (obj.test(substr)) {
          let parsed = closure_4;
        } else {
          const _parseInt = parseInt;
          parsed = parseInt(substr, num4);
        }
        return parsed;
      }
      const str2 = replaced.charAt(1);
    }
  }
  let tmp = replaced.length >= 2;
  if (tmp) {
    tmp = "0" === replaced.charAt(0);
  }
  num4 = 10;
  substr = replaced;
  if (tmp) {
    substr = replaced.substring(1);
    num4 = 8;
  }
}
function parseHost(buffer, arg1) {
  if ("[" === buffer[0]) {
    if ("]" !== buffer[buffer.length - 1]) {
      let tmp41 = closure_4;
    } else {
      const items = [null, null, null, null, null, null, null, null];
      const substr = buffer.substring(1, buffer.length - 1);
      const ucs2 = arg1(arg6[0]).ucs2;
      const decodeResult = ucs2.decode(substr);
      let num10 = 0;
      let num11 = null;
      let num9 = 0;
      if (58 === decodeResult[0]) {
        num9 = 2;
        num10 = 1;
        num11 = 1;
        if (58 !== decodeResult[1]) {
          tmp41 = closure_4;
        }
      }
      let tmp32 = num10;
      let tmp33 = num11;
      let tmp34 = num10;
      let tmp35 = num11;
      if (num9 >= decodeResult.length) {
        if (null !== tmp35) {
          let diff = tmp34 - tmp35;
          let num22 = 7;
          tmp41 = items;
          if (diff > 0) {
            items[tmp35 + diff - 1] = items[num22];
            items[num22] = items[tmp35 + diff - 1];
            num22 = num22 - 1;
            diff = diff - 1;
            tmp41 = items;
            while (0 !== num22) {
              tmp41 = items;
              break;
            }
          }
        } else {
          tmp41 = items;
          if (null === tmp35) {
            tmp41 = items;
            if (8 !== tmp34) {
              tmp41 = closure_4;
            }
          }
        }
      } else {
        while (8 !== tmp32) {
          if (58 !== decodeResult[num9]) {
            let tmp42 = arg1;
            let tmp43 = arg6;
            let obj2 = arg1(arg6[1]);
            let tmp44 = num9;
            let num16 = 0;
            let num17 = 0;
            let tmp45 = num9;
            let num18 = 0;
            let num19 = 0;
            if (obj2.isASCIIHex(decodeResult[num9])) {
              let _parseInt = parseInt;
              let tmp46 = at;
              let sum = 16 * num16 + parseInt(at(decodeResult, tmp44), 16);
              let sum1 = tmp44 + 1;
              let sum2 = num17 + 1;
              tmp45 = sum1;
              num18 = sum;
              num19 = sum2;
              while (sum2 < 4) {
                let tmp50 = arg1;
                let tmp51 = arg6;
                let obj3 = arg1(arg6[1]);
                tmp44 = sum1;
                num16 = sum;
                num17 = sum2;
                tmp45 = sum1;
                num18 = sum;
                num19 = sum2;
                if (!obj3.isASCIIHex(decodeResult[sum1])) {
                  break;
                }
              }
            }
            if (46 === decodeResult[tmp45]) {
              if (0 === num19) {
                tmp41 = closure_4;
              } else {
                let diff1 = tmp45 - num19;
                let num25 = 6;
                if (tmp32 > 6) {
                  tmp41 = closure_4;
                } else {
                  let num26 = 256;
                  let num27 = 2;
                  let num28 = 255;
                  let num29 = 10;
                  let tmp72 = tmp32;
                  let num20 = 0;
                  let tmp73 = tmp32;
                  let num21 = 0;
                  if (undefined === decodeResult[diff1]) {
                    tmp34 = tmp73;
                    tmp35 = tmp33;
                    if (4 !== num21) {
                      tmp41 = closure_4;
                    }
                  } else {
                    while (true) {
                      let sum7 = diff1;
                      if (num20 <= 0) {
                        let tmp57 = arg1;
                        let tmp58 = arg6;
                        let obj4 = arg1(arg6[1]);
                        if (obj4.isASCIIDigit(decodeResult[sum7])) {
                          let tmp59 = arg1;
                          let tmp60 = arg6;
                          let obj5 = arg1(arg6[1]);
                          let tmp61 = sum7;
                          let tmp62 = null;
                          diff1 = sum7;
                          let tmp64 = null;
                          if (!obj5.isASCIIDigit(decodeResult[sum7])) {
                            items[tmp72] = 256 * items[tmp72] + tmp64;
                            let sum3 = num20 + 1;
                            let tmp70 = 2 != sum3 && 4 !== sum3;
                            let sum4 = tmp72;
                            if (!tmp70) {
                              sum4 = tmp72 + 1;
                            }
                            tmp72 = sum4;
                            num20 = sum3;
                            tmp73 = sum4;
                            num21 = sum3;
                          } else {
                            while (true) {
                              let _parseInt2 = parseInt;
                              let tmp65 = at;
                              let parsed = parseInt(at(decodeResult, tmp61));
                              let tmp67 = tmp61;
                              let sum6 = parsed;
                              if (null === tmp62) {
                                if (sum6 > 255) {
                                  tmp41 = closure_4;
                                } else {
                                  let sum5 = tmp61 + 1;
                                  let tmp83 = arg1;
                                  let tmp84 = arg6;
                                  let obj7 = arg1(arg6[1]);
                                  tmp61 = sum5;
                                  tmp62 = sum6;
                                  diff1 = sum5;
                                  tmp64 = sum6;
                                  let tmp85 = parsed;
                                }
                              } else if (0 === tmp62) {
                                break;
                              } else {
                                sum6 = 10 * tmp62 + parsed;
                              }
                            }
                            tmp41 = closure_4;
                          }
                        } else {
                          tmp41 = closure_4;
                        }
                      } else if (46 !== decodeResult[diff1]) {
                        break;
                      } else if (num20 >= 4) {
                        break;
                      } else {
                        sum7 = diff1 + 1;
                      }
                    }
                    tmp41 = closure_4;
                  }
                }
              }
            } else {
              if (58 === decodeResult[tmp45]) {
                let sum8 = tmp45 + 1;
                let tmp52 = sum8;
                if (undefined === decodeResult[sum8]) {
                  tmp41 = closure_4;
                }
              } else {
                tmp52 = tmp45;
                if (undefined !== decodeResult[tmp45]) {
                  tmp41 = closure_4;
                }
              }
              items[tmp32] = num18;
              let sum9 = tmp32 + 1;
              let sum10 = tmp52;
              let tmp40 = tmp33;
              let tmp54 = num18;
              let tmp55 = num19;
              tmp32 = sum9;
              tmp33 = tmp40;
              num9 = sum10;
              tmp34 = sum9;
              tmp35 = tmp40;
            }
          } else if (null !== tmp33) {
            tmp41 = closure_4;
          } else {
            sum10 = num9 + 1;
            sum9 = tmp32 + 1;
            tmp40 = sum9;
          }
        }
        tmp41 = closure_4;
      }
    }
    return tmp41;
  } else if (tmp) {
    return function parseOpaqueHost(buffer) {
      let length;
      if (-1 !== buffer.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/)) {
        return closure_4;
      } else {
        let num = 0;
        const ucs2 = callback(closure_2[0]).ucs2;
        const decodeResult = ucs2.decode(buffer);
        let str = "";
        let str2 = "";
        if (0 < decodeResult.length) {
          do {
            let tmp3 = closure_21;
            let tmp4 = closure_17;
            str = `${closure_21(arr[num], closure_17)}`;
            num = num + 1;
            str2 = str;
            length = decodeResult.length;
          } while (num < length);
        }
        return str2;
      }
    }(buffer);
  } else {
    const _Buffer = arg1(arg6[2]).Buffer;
    const obj = arg1(arg6[3]);
    let str2 = arg1(arg6[3]).percentDecode(_Buffer.from(buffer)).toString();
    if (null === str2) {
      str2 = closure_4;
    }
    if (str2 === closure_4) {
      return closure_4;
    } else if (-1 !== str2.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/)) {
      return closure_4;
    } else {
      const parts = str2.split(".");
      if (tmp6) {
        parts.pop();
      }
      if (parts.length > 4) {
        let tmp17 = str2;
      } else {
        const items1 = [];
        for (const item10033 of parts) {
          if ("" === item10033) {
            let tmp18 = str2;
            obj6.return();
            tmp17 = str2;
          } else {
            let tmp9 = closure_22;
            let tmp10 = item10033;
            let tmp11 = closure_22(tmp8);
            let tmp13 = closure_4;
            if (tmp11 === closure_4) {
              tmp17 = str2;
              obj6.return();
            } else {
              let tmp14 = items1;
              let tmp15 = tmp11;
              let arr = items1.push(tmp12);
              // continue
            }
          }
        }
        let num5 = 0;
        if (0 >= items1.length - 1) {
          const _Math = Math;
          if (items1[items1.length - 1] >= Math.pow(256, 5 - items1.length)) {
            tmp17 = closure_4;
          } else {
            let arr1 = items1.pop();
            let num8 = 0;
            for (const item10073 of items1) {
              let tmp26 = arr1;
              let _Math2 = Math;
              let tmp27 = num8;
              arr1 = arr1 + item10073 * Math.pow(256, 3 - num8);
              num8 = num8 + 1;
            }
            tmp17 = arr1;
          }
        } else {
          while (items1[num5] <= 255) {
            num5 = num5 + 1;
            let tmp77 = items1;
          }
          tmp17 = closure_4;
        }
      }
      if ("number" === typeof tmp17) {
        str2 = tmp17;
      }
      return str2;
    }
    const str = arg1(arg6[3]).percentDecode(_Buffer.from(buffer));
  }
  const tmp = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
}
function serializeHost(host) {
  let num = 1;
  let rounded = host;
  if ("number" === typeof host) {
    do {
      let _String = String;
      let text = `${String(tmp2 % 256)}${``}`;
      let text1 = text;
      if (4 !== num) {
        text1 = `.${`${String(tmp2 % 256)}${``}`}`;
      }
      let _Math = Math;
      rounded = Math.floor(rounded / 256);
      num = num + 1;
      let tmp = text1;
      let text2 = text1;
    } while (num <= 4);
  } else {
    const _Array = Array;
    text2 = host;
    if (host instanceof Array) {
      text2 = `${"[" + function serializeIPv6(host) {
        let num = 1;
        let tmp = null;
        let tmp2 = null;
        let num2 = 0;
        let num3 = 0;
        let tmp3 = null;
        let num4 = 1;
        let tmp4 = null;
        let num5 = 0;
        if (0 < host.length) {
          do {
            if (0 !== host[num3]) {
              let tmp8 = num;
              if (num2 > num) {
                tmp = tmp2;
                tmp8 = num2;
              }
              let tmp6 = tmp;
              let tmp7 = tmp8;
              let tmp5 = null;
              let num6 = 0;
            } else {
              tmp5 = tmp2;
              if (null === tmp2) {
                tmp5 = num3;
              }
              num6 = num2 + 1;
              tmp6 = tmp;
              tmp7 = num;
            }
            num3 = num3 + 1;
            tmp = tmp6;
            num = tmp7;
            tmp2 = tmp5;
            num2 = num6;
            tmp3 = tmp6;
            num4 = tmp7;
            tmp4 = tmp5;
            num5 = num6;
          } while (num3 < host.length);
        }
        if (num5 > num4) {
          tmp3 = tmp4;
          num4 = num5;
        }
        const obj = { idx: tmp3, len: num4 };
        let num7 = 0;
        while (true) {
          let tmp9 = flag;
          if (flag) {
            tmp9 = 0 === host[num7];
          }
          let tmp11 = flag;
          if (!tmp9) {
            break;
          } else {
            num7 = num7 + 1;
            if (num7 <= 7) {
              continue;
            } else {
              return tmp10;
            }
          }
        }
        let flag2 = flag;
        if (false) {
          flag2 = false;
        }
        if (obj.idx !== num7) {
          const sum = str + host[num7].toString(16);
          let text = sum;
          if (7 !== num7) {
            text = `${tmp13}:`;
          }
          let sum1 = text;
          const str3 = host[num7];
        } else {
          let str2 = ":";
          if (0 === num7) {
            str2 = "::";
          }
          sum1 = str + str2;
        }
      }(host)}]`;
    }
  }
  return text2;
}
function shortenPath(url) {
  const path = url.path;
  if (0 !== path.length) {
    let isMatch = "file" === url.scheme;
    if (isMatch) {
      isMatch = 1 === path.length;
    }
    if (isMatch) {
      isMatch = /^[A-Za-z]:$/.test(path[0]);
      const obj = /^[A-Za-z]:$/;
    }
    if (!isMatch) {
      path.pop();
    }
  }
}
function includesCredentials(url) {
  return "" !== url.username || "" !== url.password;
}
class URLStateMachine {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    tmp = arg1;
    str = arg2;
    str2 = exports;
    self = this;
    this.pointer = 0;
    this.input = arg0;
    if (!arg1) {
      tmp = null;
    }
    self.base = tmp;
    if (!str) {
      str = "utf-8";
    }
    self.encodingOverride = str;
    self.stateOverride = str2;
    self.url = arg3;
    self.failure = false;
    self.parseError = false;
    if (!self.url) {
      obj = { 9223372036854775807: "french", 0: true, 9223372036854775807: "/assets/.cache/intl/aW50bA==", 0: null, 9223372036854775807: "73f37a28e0c56929cf216c426e5095ce", EXPERIMENT_OVERRIDE_ACTIVE: "el.messages.73f37a28e0c56929cf216c426e5095ce.compiled.messages", pools: "jsona", users: "Deutsch", member_ids_preview: "German" };
      str3 = "";
      obj.path = [];
      self.url = obj;
      str4 = self.input;
      replaced = str4.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
      if (replaced !== self.input) {
        flag = true;
        self.parseError = true;
      }
      self.input = replaced;
    }
    str5 = self.input;
    replaced1 = str5.replace(/\u0009|\u000A|\u000D/g, "");
    if (replaced1 !== self.input) {
      flag2 = true;
      self.parseError = true;
    }
    self.input = replaced1;
    if (!str2) {
      str2 = "scheme start";
    }
    self.state = str2;
    self.buffer = "";
    self.atFlag = false;
    self.arrFlag = false;
    self.passwordTokenSeenFlag = false;
    ucs2 = arg1(arg6[0]).ucs2;
    self.input = ucs2.decode(self.input);
    if (self.pointer <= self.input.length) {
      while (true) {
        tmp4 = self.input[self.pointer];
        _isNaN = isNaN;
        fromCodePointResult = undefined;
        if (!isNaN(tmp4)) {
          _String = String;
          fromCodePointResult = String.fromCodePoint(tmp4);
        }
        tmp6 = self["parse " + self.state](tmp4, fromCodePointResult);
        if (!tmp6) {
          break;
        } else {
          tmp7 = closure_4;
          if (tmp6 === closure_4) {
            flag3 = true;
            self.failure = true;
            // break
          } else {
            self.pointer = self.pointer + 1;
            if (self.pointer <= self.input.length) {
              continue;
            } else {
              // break
            }
            break;
          }
          break;
        }
      }
    }
    return;
  }
  parse scheme start(arg0, arg1) {
    self = this;
    obj = arg1(arg6[1]);
    if (obj.isASCIIAlpha(arg0)) {
      self.buffer = self.buffer + arg1.toLowerCase();
      str2 = "scheme";
      self.state = "scheme";
    } else if (self.stateOverride) {
      flag = true;
      self.parseError = true;
      tmp = closure_4;
      return closure_4;
    } else {
      str = "no scheme";
      self.state = "no scheme";
      self.pointer = self.pointer - 1;
    }
    return true;
  }
  parse scheme(arg0, arg1) {
    self = this;
    obj = arg1(arg6[1]);
    if (!obj.isASCIIAlphanumeric(arg0)) {
      num = 43;
      if (43 !== arg0) {
        num6 = 45;
        if (45 !== arg0) {
          num7 = 46;
          if (46 !== arg0) {
            num8 = 58;
            if (58 === arg0) {
              if (self.stateOverride) {
                tmp2 = isSpecial;
                if (isSpecial(self.url)) {
                  tmp3 = isSpecialScheme;
                  if (!isSpecialScheme(self.buffer)) {
                    flag2 = false;
                    return false;
                  }
                }
                tmp4 = isSpecial;
                if (!isSpecial(self.url)) {
                  tmp5 = isSpecialScheme;
                  if (isSpecialScheme(self.buffer)) {
                    flag3 = false;
                    return false;
                  }
                }
                tmp6 = includesCredentials;
                if (includesCredentials(self.url)) {
                  str3 = "file";
                  if ("file" === self.buffer) {
                    flag8 = false;
                    return false;
                  }
                } else {
                  tmp7 = null;
                }
                str4 = "file";
                if ("file" === self.url.scheme) {
                  str5 = "";
                  if ("" !== self.url.host) {
                    tmp14 = null;
                  }
                  flag7 = false;
                  return false;
                }
              }
              self.url.scheme = self.buffer;
              if (self.stateOverride) {
                tmp12 = defaultPort;
                if (self.url.port === defaultPort(self.url.scheme)) {
                  tmp13 = null;
                  self.url.port = null;
                }
                flag6 = false;
                return false;
              } else {
                str6 = "";
                self.buffer = "";
                str7 = "file";
                if ("file" === self.url.scheme) {
                  num4 = 47;
                  tmp11 = 47 === self.input[self.pointer + 1];
                  if (tmp11) {
                    num5 = 2;
                    tmp11 = 47 === self.input[self.pointer + 2];
                  }
                  if (!tmp11) {
                    flag5 = true;
                    self.parseError = true;
                  }
                  self.state = "file";
                } else {
                  tmp15 = isSpecial;
                  if (isSpecial(self.url)) {
                    tmp8 = null;
                    if (null !== self.base) {
                      if (self.base.scheme === self.url.scheme) {
                        str11 = "special relative or authority";
                        self.state = "special relative or authority";
                      }
                    }
                  }
                  tmp9 = isSpecial;
                  if (isSpecial(self.url)) {
                    str10 = "special authority slashes";
                    self.state = "special authority slashes";
                  } else {
                    num3 = 47;
                    if (47 === self.input[self.pointer + 1]) {
                      str9 = "path or authority";
                      self.state = "path or authority";
                      self.pointer = self.pointer + 1;
                    } else {
                      flag4 = true;
                      self.url.cannotBeABaseURL = true;
                      path = self.url.path;
                      arr = path.push("");
                      str8 = "cannot-be-a-base-URL path";
                      self.state = "cannot-be-a-base-URL path";
                    }
                  }
                }
              }
            } else if (self.stateOverride) {
              flag = true;
              self.parseError = true;
              tmp = closure_4;
              return closure_4;
            } else {
              str = "";
              self.buffer = "";
              str2 = "no scheme";
              self.state = "no scheme";
              num2 = -1;
              self.pointer = -1;
            }
          }
          flag9 = true;
          return true;
        }
      }
    }
    self.buffer = self.buffer + arg1.toLowerCase();
    return;
  }
  parse no scheme(arg0) {
    self = this;
    if (null !== this.base) {
      if (self.base.cannotBeABaseURL) {
        num = 35;
        return flag;
      }
      if (self.base.cannotBeABaseURL) {
        num2 = 35;
        if (35 === arg0) {
          self.url.scheme = self.base.scheme;
          path = self.base.path;
          self.url.path = path.slice();
          self.url.query = self.base.query;
          str3 = "";
          self.url.fragment = "";
          flag2 = true;
          self.url.cannotBeABaseURL = true;
          str4 = "fragment";
          self.state = "fragment";
          flag = true;
        }
      }
      str = "file";
      if ("file" === self.base.scheme) {
        self.state = "file";
        self.pointer = self.pointer - 1;
        flag = true;
      } else {
        str2 = "relative";
        self.state = "relative";
        self.pointer = self.pointer - 1;
        flag = true;
      }
    }
    flag = closure_4;
    return;
  }
  parse special relative or authority(arg0) {
    self = this;
    if (47 === arg0) {
      num = 1;
      if (47 === self.input[self.pointer + 1]) {
        str = "special authority ignore slashes";
        self.state = "special authority ignore slashes";
        self.pointer = self.pointer + 1;
      }
      flag = true;
      return true;
    }
    self.parseError = true;
    self.state = "relative";
    self.pointer = self.pointer - 1;
    return;
  }
  parse path or authority(arg0) {
    self = this;
    if (47 === arg0) {
      str2 = "authority";
      self.state = "authority";
    } else {
      str = "path";
      self.state = "path";
      self.pointer = self.pointer - 1;
    }
    return true;
  }
  parse relative(arg0) {
    self = this;
    this.url.scheme = this.base.scheme;
    if (isNaN(arg0)) {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      path = self.base.path;
      self.url.path = path.slice();
      self.url.query = self.base.query;
    } else {
      num = 47;
      if (47 === arg0) {
        str7 = "relative slash";
        self.state = "relative slash";
      } else {
        num5 = 63;
        if (63 === arg0) {
          self.url.username = self.base.username;
          self.url.password = self.base.password;
          self.url.host = self.base.host;
          self.url.port = self.base.port;
          path1 = self.base.path;
          self.url.path = path1.slice();
          str5 = "";
          self.url.query = "";
          str6 = "query";
          self.state = "query";
        } else {
          num6 = 35;
          if (35 === arg0) {
            self.url.username = self.base.username;
            self.url.password = self.base.password;
            self.url.host = self.base.host;
            self.url.port = self.base.port;
            path2 = self.base.path;
            self.url.path = path2.slice();
            self.url.query = self.base.query;
            str3 = "";
            self.url.fragment = "";
            str4 = "fragment";
            self.state = "fragment";
          } else {
            tmp = isSpecial;
            if (isSpecial(self.url)) {
              num2 = 92;
              if (92 === arg0) {
                flag = true;
                self.parseError = true;
                str2 = "relative slash";
                self.state = "relative slash";
              }
            }
            self.url.username = self.base.username;
            self.url.password = self.base.password;
            self.url.host = self.base.host;
            self.url.port = self.base.port;
            path3 = self.base.path;
            num3 = 1;
            num4 = 0;
            self.url.path = require("module_0");
            str = "path";
            self.state = "path";
            self.pointer = self.pointer - 1;
          }
        }
      }
    }
    return true;
  }
  parse relative slash(arg0) {
    self = this;
    if (isSpecial(this.url)) {
      num = 47;
      if (47 !== arg0) {
        num2 = 92;
        flag2 = true;
        return true;
      }
      num3 = 92;
      if (92 === arg0) {
        flag = true;
        self.parseError = true;
      }
      str = "special authority ignore slashes";
      self.state = "special authority ignore slashes";
    }
    if (47 === arg0) {
      str3 = "authority";
      self.state = "authority";
    } else {
      self.url.username = self.base.username;
      self.url.password = self.base.password;
      self.url.host = self.base.host;
      self.url.port = self.base.port;
      str2 = "path";
      self.state = "path";
      self.pointer = self.pointer - 1;
    }
    return;
  }
  parse special authority slashes(arg0) {
    self = this;
    if (47 === arg0) {
      num = 1;
      if (47 === self.input[self.pointer + 1]) {
        str = "special authority ignore slashes";
        self.state = "special authority ignore slashes";
        self.pointer = self.pointer + 1;
      }
      flag = true;
      return true;
    }
    self.parseError = true;
    self.state = "special authority ignore slashes";
    self.pointer = self.pointer - 1;
    return;
  }
  parse special authority ignore slashes(arg0) {
    self = this;
    if (47 !== arg0) {
      num = 92;
      if (92 !== arg0) {
        str = "authority";
        self.state = "authority";
        self.pointer = self.pointer - 1;
      }
      flag = true;
      return true;
    }
    self.parseError = true;
    return;
  }
  parse authority(arg0, arg1) {
    self = this;
    if (64 === arg0) {
      flag2 = true;
      self.parseError = true;
      if (self.atFlag) {
        str4 = "%40";
        self.buffer = `%40${self.buffer}`;
      }
      self.atFlag = true;
      tmp5 = countSymbols;
      tmp6 = countSymbols(self.buffer);
      num6 = 0;
      num7 = 58;
      if (0 < tmp6) {
        while (true) {
          buffer = self.buffer;
          codePointAtResult = buffer.codePointAt(num6);
          tmp8 = num6;
          if (58 === codePointAtResult) {
            if (!self.passwordTokenSeenFlag) {
              self.passwordTokenSeenFlag = true;
            }
            num6 = num6 + 1;
            if (num6 >= tmp6) {
              break;
            }
          }
          tmp9 = percentEncodeChar;
          tmp10 = isUserinfoPercentEncode;
          tmp11 = percentEncodeChar(codePointAtResult, isUserinfoPercentEncode);
          url = self.url;
          if (self.passwordTokenSeenFlag) {
            url.password = url.password + tmp11;
            tmp13 = tmp11;
          } else {
            url.username = url.username + tmp11;
            tmp12 = tmp11;
          }
        }
      }
      str5 = "";
      self.buffer = "";
    } else {
      tmp14 = globalThis;
      _isNaN = isNaN;
      if (!isNaN(arg0)) {
        num = 47;
        if (47 !== arg0) {
          num2 = 63;
          if (63 !== arg0) {
            num3 = 35;
            if (35 !== arg0) {
              tmp = isSpecial;
              if (isSpecial(self.url)) {
                num4 = 92;
              }
              tmp2 = arg1;
              self.buffer = self.buffer + arg1;
            }
          }
        }
      }
      if (self.atFlag) {
        str = "";
        if ("" === self.buffer) {
          flag = true;
          self.parseError = true;
          tmp4 = closure_4;
          return closure_4;
        }
      }
      tmp3 = countSymbols;
      num5 = 1;
      self.pointer = self.pointer - (countSymbols(self.buffer) + 1);
      str2 = "";
      self.buffer = "";
      str3 = "host";
      self.state = "host";
    }
    return true;
  }
  parse port(arg0, arg1) {
    self = this;
    obj = arg1(arg6[1]);
    if (obj.isASCIIDigit(arg0)) {
      tmp8 = arg1;
      self.buffer = self.buffer + arg1;
    } else {
      tmp = globalThis;
      _isNaN = isNaN;
      if (!isNaN(arg0)) {
        num = 47;
        if (47 !== arg0) {
          num2 = 63;
          if (63 !== arg0) {
            num3 = 35;
            if (35 !== arg0) {
              tmp2 = isSpecial;
              if (!isSpecial(self.url)) {
                if (!self.stateOverride) {
                  flag = true;
                  self.parseError = true;
                  tmp3 = closure_4;
                  return closure_4;
                }
              } else {
                num4 = 92;
              }
            }
          }
        }
      }
      str = "";
      if ("" !== self.buffer) {
        _parseInt = parseInt;
        parsed = parseInt(self.buffer);
        _Math = Math;
        num5 = 2;
        num6 = 16;
        if (parsed > require("module_2") - 1) {
          flag3 = true;
          self.parseError = true;
          tmp7 = closure_4;
          return closure_4;
        } else {
          tmp5 = defaultPort;
          tmp6 = null;
          if (parsed !== defaultPort(self.url.scheme)) {
            tmp6 = parsed;
          }
          self.url.port = tmp6;
          self.buffer = "";
        }
      }
      if (self.stateOverride) {
        flag2 = false;
        return false;
      } else {
        str2 = "path start";
        self.state = "path start";
        self.pointer = self.pointer - 1;
      }
    }
    return true;
  }
  parse file(arg0) {
    self = this;
    this.url.scheme = "file";
    if (47 !== arg0) {
      num2 = 92;
      if (92 !== arg0) {
        tmp4 = null;
        if (null !== self.base) {
          if ("file" === self.base.scheme) {
            tmp = globalThis;
            _isNaN = isNaN;
            if (isNaN(arg0)) {
              self.url.host = self.base.host;
              path = self.base.path;
              self.url.path = path.slice();
              self.url.query = self.base.query;
            } else {
              num = 63;
              if (63 === arg0) {
                self.url.host = self.base.host;
                path1 = self.base.path;
                self.url.path = path1.slice();
                str5 = "";
                self.url.query = "";
                str6 = "query";
                self.state = "query";
              } else {
                num3 = 35;
                if (35 === arg0) {
                  self.url.host = self.base.host;
                  path2 = self.base.path;
                  self.url.path = path2.slice();
                  self.url.query = self.base.query;
                  str3 = "";
                  self.url.fragment = "";
                  str4 = "fragment";
                  self.state = "fragment";
                } else {
                  tmp5 = startsWithWindowsDriveLetter;
                  if (startsWithWindowsDriveLetter(self.input, self.pointer)) {
                    flag = true;
                    self.parseError = true;
                  } else {
                    self.url.host = self.base.host;
                    path3 = self.base.path;
                    self.url.path = path3.slice();
                    tmp2 = shortenPath;
                    tmp3 = shortenPath(self.url);
                  }
                  str2 = "path";
                  self.state = "path";
                  self.pointer = self.pointer - 1;
                }
              }
            }
          }
        }
        str = "path";
        self.state = "path";
        self.pointer = self.pointer - 1;
      }
      flag3 = true;
      return true;
    }
    if (92 === arg0) {
      flag2 = true;
      self.parseError = true;
    }
    self.state = "file slash";
    return;
  }
  parse file slash(arg0) {
    self = this;
    if (47 !== arg0) {
      num5 = 92;
      if (92 !== arg0) {
        tmp7 = null;
        tmp = null === self.base;
        if (!tmp) {
          str = "file";
          tmp = "file" !== self.base.scheme;
        }
        if (!tmp) {
          tmp2 = startsWithWindowsDriveLetter;
          tmp = startsWithWindowsDriveLetter(self.input, self.pointer);
        }
        if (!tmp) {
          num = 0;
          first = self.base.path[0];
          num2 = 2;
          isASCIIAlphaResult = 2 === first.length;
          if (isASCIIAlphaResult) {
            tmp4 = arg1;
            tmp5 = arg6;
            num3 = 1;
            obj = arg1(arg6[1]);
            isASCIIAlphaResult = obj.isASCIIAlpha(require("module_0"));
          }
          if (isASCIIAlphaResult) {
            num4 = 1;
            str2 = ":";
            isASCIIAlphaResult = ":" === first[1];
          }
          url = self.url;
          if (isASCIIAlphaResult) {
            path = url.path;
            arr = path.push(self.base.path[0]);
          } else {
            url.host = self.base.host;
          }
        }
        str3 = "path";
        self.state = "path";
        self.pointer = self.pointer - 1;
      }
      flag2 = true;
      return true;
    }
    if (92 === arg0) {
      flag = true;
      self.parseError = true;
    }
    self.state = "file host";
    return;
  }
  parse file host(arg0, arg1) {
    self = this;
    if (!isNaN(arg0)) {
      num = 47;
      if (47 !== arg0) {
        num2 = 92;
        if (92 !== arg0) {
          num3 = 63;
          if (63 !== arg0) {
            num4 = 35;
            if (35 !== arg0) {
              tmp = arg1;
              self.buffer = self.buffer + arg1;
            }
            flag3 = true;
            return true;
          }
        }
      }
    }
    self.pointer = self.pointer - 1;
    if (!self.stateOverride) {
      tmp2 = isWindowsDriveLetterString;
      if (isWindowsDriveLetterString(self.buffer)) {
        flag = true;
        self.parseError = true;
        str = "path";
        self.state = "path";
      }
    }
    if ("" === self.buffer) {
      self.url.host = "";
      if (self.stateOverride) {
        flag4 = false;
        return false;
      } else {
        str5 = "path start";
        self.state = "path start";
      }
    } else {
      tmp3 = parseHost;
      tmp4 = isNotSpecial;
      str2 = parseHost(self.buffer, isNotSpecial(self.url));
      tmp5 = closure_4;
      if (str2 === closure_4) {
        tmp6 = closure_4;
        return closure_4;
      } else {
        str3 = "localhost";
        if ("localhost" === str2) {
          str2 = "";
        }
        self.url.host = str2;
        if (self.stateOverride) {
          flag2 = false;
          return false;
        } else {
          self.buffer = "";
          str4 = "path start";
          self.state = "path start";
        }
      }
    }
    return;
  }
  parse path start(arg0) {
    self = this;
    if (isSpecial(this.url)) {
      num4 = 92;
      if (92 === arg0) {
        flag = true;
        self.parseError = true;
      }
      str6 = "path";
      self.state = "path";
      num5 = 47;
      tmp = 47 !== arg0 && 92 !== arg0;
      if (tmp) {
        self.pointer = self.pointer - 1;
      }
    } else {
      if (!self.stateOverride) {
        num = 63;
        if (63 === arg0) {
          str = "";
          self.url.query = "";
          str2 = "query";
          self.state = "query";
        }
      }
      if (!self.stateOverride) {
        num2 = 35;
        if (35 === arg0) {
          str3 = "";
          self.url.fragment = "";
          str4 = "fragment";
          self.state = "fragment";
        }
      }
      if (undefined !== arg0) {
        str5 = "path";
        self.state = "path";
        num3 = 47;
        if (47 !== arg0) {
          self.pointer = self.pointer - 1;
        }
      }
    }
    return true;
  }
  parse path(arg0) {
    self = this;
    if (!isNaN(arg0)) {
      num = 47;
      if (47 !== arg0) {
        tmp28 = isSpecial;
        if (!isSpecial(self.url)) {
          if (!self.stateOverride) {
            num3 = 63;
            if (63 !== arg0) {
              num18 = 35;
              flag5 = true;
              return true;
            }
          }
          num4 = 37;
          tmp = 37 !== arg0;
          if (!tmp) {
            tmp2 = arg1;
            tmp3 = arg6;
            num5 = 1;
            obj = arg1(arg6[1]);
            isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
            if (isASCIIHexResult) {
              tmp5 = arg1;
              tmp6 = arg6;
              obj2 = arg1(arg6[1]);
              num6 = 2;
              isASCIIHexResult = obj2.isASCIIHex(self.input[self.pointer + 2]);
            }
            tmp = isASCIIHexResult;
          }
          if (!tmp) {
            flag = true;
            self.parseError = true;
          }
          tmp7 = percentEncodeChar;
          tmp8 = isPathPercentEncode;
          self.buffer = self.buffer + percentEncodeChar(arg0, isPathPercentEncode);
        } else {
          num2 = 92;
        }
      }
    }
    tmp9 = isSpecial(self.url);
    if (tmp9) {
      num7 = 92;
      tmp9 = 92 === arg0;
    }
    if (tmp9) {
      flag2 = true;
      self.parseError = true;
    }
    str = self.buffer;
    formatted = str.toLowerCase();
    tmp11 = ".." === formatted;
    if (!tmp11) {
      str2 = "%2e.";
      tmp11 = "%2e." === formatted;
    }
    if (!tmp11) {
      str3 = ".%2e";
      tmp11 = ".%2e" === formatted;
    }
    if (!tmp11) {
      str4 = "%2e%2e";
      tmp11 = "%2e%2e" === formatted;
    }
    if (tmp11) {
      tmp21 = shortenPath;
      tmp22 = shortenPath(self.url);
      num12 = 47;
      tmp23 = 47 === arg0;
      if (!tmp23) {
        tmp24 = isSpecial;
        tmp25 = isSpecial(self.url);
        if (tmp25) {
          num13 = 92;
          tmp25 = 92 === arg0;
        }
        tmp23 = tmp25;
      }
      if (!tmp23) {
        path = self.url.path;
        str9 = "";
        arr = path.push("");
      }
    } else {
      tmp12 = isSingleDot;
      if (isSingleDot(self.buffer)) {
        num8 = 47;
        if (47 !== arg0) {
          tmp13 = isSpecial;
          if (isSpecial(self.url)) {
            num9 = 92;
          }
          path1 = self.url.path;
          str5 = "";
          arr1 = path1.push("");
        }
      }
      tmp15 = isSingleDot;
      if (!isSingleDot(self.buffer)) {
        str6 = "file";
        tmp16 = "file" === self.url.scheme;
        if (tmp16) {
          num10 = 0;
          tmp16 = 0 === self.url.path.length;
        }
        if (tmp16) {
          tmp17 = isWindowsDriveLetterString;
          tmp16 = isWindowsDriveLetterString(self.buffer);
        }
        if (tmp16) {
          str7 = "";
          tmp18 = "" !== self.url.host;
          if (tmp18) {
            tmp19 = null;
            tmp18 = null !== self.url.host;
          }
          if (tmp18) {
            flag3 = true;
            self.parseError = true;
            self.url.host = "";
          }
          num11 = 0;
          str8 = ":";
          self.buffer = `${self.buffer[0]}:`;
        }
        path2 = self.url.path;
        arr2 = path2.push(self.buffer);
      }
    }
    self.buffer = "";
    if ("file" === self.url.scheme) {
      if (undefined !== arg0) {
        num14 = 63;
        if (63 !== arg0) {
          num15 = 35;
        }
      }
      num16 = 1;
      if (self.url.path.length > 1) {
        num17 = 0;
        flag4 = true;
        if ("" === self.url.path[0]) {
          self.parseError = true;
          path3 = self.url.path;
          arr3 = path3.shift();
          while (self.url.path.length > 1) {
            if ("" !== self.url.path[0]) {
              break;
            }
          }
        }
      }
    }
    if (63 === arg0) {
      self.url.query = "";
      str10 = "query";
      self.state = "query";
    }
    if (35 === arg0) {
      self.url.fragment = "";
      str11 = "fragment";
      self.state = "fragment";
    }
    return;
  }
  parse cannot-be-a-base-URL path(arg0) {
    self = this;
    if (63 === arg0) {
      str3 = "";
      self.url.query = "";
      str4 = "query";
      self.state = "query";
    } else {
      num6 = 35;
      if (35 === arg0) {
        str = "";
        self.url.fragment = "";
        str2 = "fragment";
        self.state = "fragment";
      } else {
        tmp10 = globalThis;
        _isNaN2 = isNaN;
        isNaNResult = isNaN(arg0);
        if (!isNaNResult) {
          num = 37;
          isNaNResult = 37 === arg0;
        }
        if (!isNaNResult) {
          flag = true;
          self.parseError = true;
        }
        num2 = 37;
        tmp2 = 37 !== arg0;
        if (!tmp2) {
          tmp3 = arg1;
          tmp4 = arg6;
          num3 = 1;
          obj = arg1(arg6[1]);
          isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
          if (isASCIIHexResult) {
            tmp6 = arg1;
            tmp7 = arg6;
            obj2 = arg1(arg6[1]);
            num4 = 2;
            isASCIIHexResult = obj2.isASCIIHex(self.input[self.pointer + 2]);
          }
          tmp2 = isASCIIHexResult;
        }
        if (!tmp2) {
          flag2 = true;
          self.parseError = true;
        }
        _isNaN = isNaN;
        if (!isNaN(arg0)) {
          path = self.url.path;
          num5 = 0;
          tmp8 = percentEncodeChar;
          tmp9 = isC0ControlPercentEncode;
          path[0] = path[0] + percentEncodeChar(arg0, isC0ControlPercentEncode);
        }
      }
    }
    return true;
  }
  parse query(arg0, arg1) {
    self = this;
    if (!isNaN(arg0)) {
      if (!self.stateOverride) {
        num = 35;
        flag2 = true;
        return true;
      }
      num2 = 37;
      tmp = 37 !== arg0;
      if (!tmp) {
        tmp2 = arg1;
        tmp3 = arg6;
        num3 = 1;
        obj = arg1(arg6[1]);
        isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
        if (isASCIIHexResult) {
          tmp5 = arg1;
          tmp6 = arg6;
          obj2 = arg1(arg6[1]);
          num4 = 2;
          isASCIIHexResult = obj2.isASCIIHex(self.input[self.pointer + 2]);
        }
        tmp = isASCIIHexResult;
      }
      if (!tmp) {
        flag = true;
        self.parseError = true;
      }
      tmp7 = arg1;
      self.buffer = self.buffer + arg1;
    }
    tmp8 = isSpecial(self.url);
    if (tmp8) {
      str = "ws";
      tmp8 = "ws" !== self.url.scheme;
    }
    if (tmp8) {
      str2 = "wss";
      tmp8 = "wss" !== self.url.scheme;
    }
    if (!tmp8) {
      str3 = "utf-8";
      self.encodingOverride = "utf-8";
    }
    _Buffer = arg1(arg6[2]).Buffer;
    fromResult = _Buffer.from(self.buffer);
    num5 = 0;
    if (0 < fromResult.length) {
      while (true) {
        if (fromResult[num5] >= 33) {
          if (fromResult[num5] <= 126) {
            if (34 !== fromResult[num5]) {
              if (35 !== fromResult[num5]) {
                if (60 !== fromResult[num5]) {
                  if (62 !== fromResult[num5]) {
                    if (39 !== fromResult[num5]) {
                      url = self.url;
                      _String = String;
                      url.query = url.query + String.fromCodePoint(fromResult[num5]);
                    } else {
                      tmp9 = isSpecial;
                    }
                  }
                  num5 = num5 + 1;
                  if (num5 >= fromResult.length) {
                    break;
                  }
                }
              }
            }
          }
        }
        url2 = self.url;
        tmp10 = arg1;
        tmp11 = arg6;
        obj3 = arg1(arg6[3]);
        url2.query = url2.query + obj3.percentEncode(fromResult[num5]);
      }
    }
    self.buffer = "";
    if (35 === arg0) {
      self.url.fragment = "";
      str4 = "fragment";
      self.state = "fragment";
    }
    return;
  }
  parse fragment(arg0) {
    self = this;
    if (!isNaN(arg0)) {
      num = 0;
      if (0 === arg0) {
        flag2 = true;
        self.parseError = true;
      } else {
        num4 = 37;
        tmp6 = 37 !== arg0;
        if (!tmp6) {
          tmp = arg1;
          tmp2 = arg6;
          num2 = 1;
          obj = arg1(arg6[1]);
          isASCIIHexResult = obj.isASCIIHex(self.input[self.pointer + 1]);
          if (isASCIIHexResult) {
            tmp4 = arg1;
            tmp5 = arg6;
            obj2 = arg1(arg6[1]);
            num3 = 2;
            isASCIIHexResult = obj2.isASCIIHex(self.input[self.pointer + 2]);
          }
          tmp6 = isASCIIHexResult;
        }
        if (!tmp6) {
          flag = true;
          self.parseError = true;
        }
        url = self.url;
        tmp7 = percentEncodeChar;
        tmp8 = isFragmentPercentEncode;
        url.fragment = url.fragment + percentEncodeChar(arg0, isFragmentPercentEncode);
      }
    }
    return true;
  }
}
function startsWithWindowsDriveLetter(input, pointer) {
  const diff = input.length - pointer;
  let tmp2 = diff >= 2;
  if (tmp2) {
    let isASCIIAlphaResult = pointer(arg6[1]).isASCIIAlpha(input[pointer]);
    if (isASCIIAlphaResult) {
      let tmp7 = 58 === tmp3;
      if (!tmp7) {
        tmp7 = 124 === tmp3;
      }
      isASCIIAlphaResult = tmp7;
    }
    tmp2 = isASCIIAlphaResult;
    const obj = pointer(arg6[1]);
  }
  if (tmp2) {
    let hasItem = 2 === diff;
    if (!hasItem) {
      hasItem = set3.has(input[pointer + 2]);
    }
    tmp2 = hasItem;
  }
  return tmp2;
}
let closure_3 = {};
let closure_4 = Symbol("failure");
const set = new Set([]);
const set1 = new Set(["id", "Array", "isArray", "__initData", "WireType"]);
const set2 = new Set([]);
function parseHostName(arg0, arg1) {
  const self = this;
  if (this.stateOverride) {
    if ("file" === self.url.scheme) {
      self.pointer = self.pointer - 1;
      self.state = "file host";
    }
    return true;
  }
  if (58 === arg0) {
    if (!self.arrFlag) {
      if ("" === self.buffer) {
        self.parseError = true;
        return closure_4;
      } else {
        const tmp3 = parseHost(self.buffer, isNotSpecial(self.url));
        if (tmp3 === closure_4) {
          return closure_4;
        } else {
          self.url.host = tmp3;
          self.buffer = "";
          self.state = "port";
          if ("hostname" === self.stateOverride) {
            return false;
          }
        }
      }
    }
  }
  if (!isNaN(arg0)) {
    if (47 !== arg0) {
      if (63 !== arg0) {
        if (35 !== arg0) {
          if (91 === arg0) {
            self.arrFlag = true;
          } else if (93 === arg0) {
            self.arrFlag = false;
          }
          self.buffer = self.buffer + arg1;
        }
      }
    }
  }
  self.pointer = self.pointer - 1;
  if (isSpecial(self.url)) {
    if ("" === self.buffer) {
      self.parseError = true;
      return closure_4;
    }
  }
  if (self.stateOverride) {
    if ("" === self.buffer) {
      self.parseError = true;
      return false;
    }
  }
  const tmp11 = parseHost(self.buffer, isNotSpecial(self.url));
  if (tmp11 === closure_4) {
    return closure_4;
  } else {
    self.url.host = tmp11;
    self.buffer = "";
    self.state = "path start";
    if (self.stateOverride) {
      return false;
    }
  }
}
URLStateMachine.prototype.parse host = parseHostName;
URLStateMachine.prototype.parse hostname = parseHostName;
const set3 = new Set([]);
exports.exports.serializeURL = function serializeURL(_url) {
  let tmp = arg1;
  let text = `${_url.scheme}:`;
  if (null !== _url.host) {
    let text1 = `${_url.scheme}://`;
    if (!tmp7) {
      let sum = text1 + _url.username;
      if ("" !== _url.password) {
        sum = `${tmp9}:${_url.password}`;
      }
      text1 = `${tmp9}@`;
    }
    text = text1 + serializeHost(_url.host);
    if (null !== _url.port) {
      text = `${tmp2}:${_url.port}`;
    }
    const tmp7 = "" === _url.username && "" === _url.password;
  } else {
    let tmp3 = null === _url.host;
    if (tmp3) {
      tmp3 = "file" === _url.scheme;
    }
    if (tmp3) {
      text = `${tmp2}//`;
    }
  }
  if (_url.cannotBeABaseURL) {
    text = text + _url.path[0];
  } else {
    const path = _url.path;
    const tmp16 = path[Symbol.iterator]();
    while (tmp16 !== undefined) {
      let tmp19 = text;
      text = `${tmp2}/${tmp17}`;
      // continue
    }
  }
  if (null !== _url.query) {
    text = `${tmp2}?${_url.query}`;
  }
  if (!tmp) {
    tmp = null === _url.fragment;
  }
  if (!tmp) {
    text = `${tmp2}#${_url.fragment}`;
  }
  return text;
};
exports.exports.serializeURLOrigin = (scheme) => {
  let _exports;
  let _exports2;
  scheme = scheme.scheme;
  if ("blob" === scheme) {
    ({ exports: _exports, exports: _exports2 } = arg4);
    return _exports.serializeURLOrigin(_exports2.parseURL(scheme.path[0]));
  } else {
    if ("ftp" !== scheme) {
      if ("http" !== scheme) {
        if ("https" !== scheme) {
          if ("ws" !== scheme) {
            if ("wss" !== scheme) {
              return "null";
            }
          }
        }
      }
    }
    const url = {};
    ({ scheme: url.scheme, host: url.host, port: url.port } = tmp);
    const text = `${url.scheme}://`;
    const text1 = `${url.scheme}://${closure_24(url.host)}`;
    let text2 = text1;
    if (null !== url.port) {
      text2 = `${url.scheme}://${closure_24(url.host)}${":" + url.port}`;
    }
    return text2;
  }
  const tmp = scheme;
};
exports.exports.basicURLParse = (input) => {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const tmp = new URLStateMachine(input, obj.baseURL, obj.encodingOverride, obj.url, obj.stateOverride);
  let url = null;
  if (!tmp.failure) {
    url = tmp.url;
  }
  return url;
};
exports.exports.setTheUsername = (username) => {
  let length;
  username.username = "";
  let num = 0;
  const ucs2 = arg1(arg6[0]).ucs2;
  const decodeResult = ucs2.decode(arg1);
  if (0 < decodeResult.length) {
    do {
      let tmp = closure_21;
      let tmp2 = closure_18;
      username.username = username.username + closure_21(decodeResult[num], closure_18);
      num = num + 1;
      length = decodeResult.length;
    } while (num < length);
  }
};
exports.exports.setThePassword = (password) => {
  let length;
  password.password = "";
  let num = 0;
  const ucs2 = arg1(arg6[0]).ucs2;
  const decodeResult = ucs2.decode(arg1);
  if (0 < decodeResult.length) {
    do {
      let tmp = closure_21;
      let tmp2 = closure_18;
      password.password = password.password + closure_21(decodeResult[num], closure_18);
      num = num + 1;
      length = decodeResult.length;
    } while (num < length);
  }
};
exports.exports.serializeHost = serializeHost;
exports.exports.cannotHaveAUsernamePasswordPort = function cannotHaveAUsernamePasswordPort(_url) {
  let cannotBeABaseURL = null === _url.host;
  if (!cannotBeABaseURL) {
    cannotBeABaseURL = "" === _url.host;
  }
  if (!cannotBeABaseURL) {
    cannotBeABaseURL = _url.cannotBeABaseURL;
  }
  if (!cannotBeABaseURL) {
    cannotBeABaseURL = "file" === _url.scheme;
  }
  return cannotBeABaseURL;
};
exports.exports.serializeInteger = (arg0) => String(arg0);
exports.exports.parseURL = (arg0, arg1) => {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const _exports = arg4.exports;
  obj = {};
  ({ baseURL: obj2.baseURL, encodingOverride: obj2.encodingOverride } = obj);
  return _exports.basicURLParse(arg0, obj);
};
