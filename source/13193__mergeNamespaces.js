// Module ID: 13193
// Function ID: 99822
// Name: _mergeNamespaces
// Dependencies: [0]

// Module 13193 (_mergeNamespaces)
import __exportStarResult1 from "__exportStarResult1";

function _mergeNamespaces(arg0, items) {
  const defaultExportFromCjs = arg0;
  const item = items.forEach((arg0) => {
    let tmp = arg0;
    if (arg0) {
      tmp = "string" !== typeof arg0;
    }
    if (tmp) {
      const _Array = Array;
      tmp = !Array.isArray(arg0);
    }
    if (tmp) {
      const _Object = Object;
      const keys = Object.keys(arg0);
      const item = keys.forEach((arg0) => {
        if ("default" !== arg0) {
          if (!(arg0 in arg0)) {
            const _Object = Object;
            let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arg0, arg0);
            if (!ownPropertyDescriptor.get) {
              const obj = {
                enumerable: true,
                get() {
                        return arg0[closure_0];
                      }
              };
              ownPropertyDescriptor = obj;
            }
            Object.defineProperty(arg0, arg0, ownPropertyDescriptor);
            const tmp5 = arg0;
          }
        }
      });
    }
  });
  return Object.freeze(arg0);
}
function getDefaultExportFromCjs(exports) {
  let _default = exports;
  if (exports) {
    _default = exports;
    if (exports.__esModule) {
      const _Object = Object;
      _default = exports;
      if (hasOwnProperty.call(exports, "default")) {
        _default = exports.default;
      }
    }
  }
  return _default;
}
if (__exportStarResult1) {
  if ("object" === typeof __exportStarResult1) {
    let obj = __exportStarResult1;
  }
  const _globalThis = globalThis;
  if ("undefined" !== typeof globalThis) {
    const _globalThis2 = globalThis;
  } else {
    const _window = window;
    if ("undefined" !== typeof window) {
      const _window2 = window;
    } else if (undefined === global) {
      const _self = self;
      if ("undefined" !== typeof self) {
        const _self2 = self;
      }
    }
  }
  obj = { exports: {} };
  obj = {};
  const fn = function a(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      if (1 == arg0) {
        str = "one";
      }
      str2 = str;
    }
    return str2;
  };
  obj.af = fn;
  const fn2 = function b(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      if (0 == arg0) {
        str = "one";
      }
      str2 = str;
    }
    return str2;
  };
  obj.ak = fn2;
  const fn3 = function c(arg0, arg1) {
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 <= 1) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  };
  obj.am = fn3;
  obj.an = fn;
  obj.ar = function ar(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    let str2 = "other";
    if (!arg1) {
      let str3 = "zero";
      if (0 != arg0) {
        let str4 = "one";
        if (1 != arg0) {
          let str5 = "two";
          if (2 != arg0) {
            if (substr < 3) {
              let str7 = "other";
              if (substr >= 11) {
                str7 = "other";
                if (substr <= 99) {
                  str7 = "many";
                }
              }
              let str6 = str7;
            } else {
              str6 = "few";
            }
            str5 = str6;
          }
          str4 = str5;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    return str2;
  };
  obj.ars = function ars(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    let str2 = "other";
    if (!arg1) {
      let str3 = "zero";
      if (0 != arg0) {
        let str4 = "one";
        if (1 != arg0) {
          let str5 = "two";
          if (2 != arg0) {
            if (substr < 3) {
              let str7 = "other";
              if (substr >= 11) {
                str7 = "other";
                if (substr <= 99) {
                  str7 = "many";
                }
              }
              let str6 = str7;
            } else {
              str6 = "few";
            }
            str5 = str6;
          }
          str4 = str5;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    return str2;
  };
  obj.as = function as(arg0, arg1) {
    if (arg1) {
      let str4 = "one";
      if (1 != arg0) {
        str4 = "one";
        if (5 != arg0) {
          str4 = "one";
          if (7 != arg0) {
            str4 = "one";
            if (8 != arg0) {
              str4 = "one";
              if (9 != arg0) {
                str4 = "one";
                if (10 != arg0) {
                  let str6 = "two";
                  if (2 != arg0) {
                    str6 = "two";
                    if (3 != arg0) {
                      let str7 = "few";
                      if (4 != arg0) {
                        let str8 = "other";
                        if (6 == arg0) {
                          str8 = "many";
                        }
                        str7 = str8;
                      }
                      str6 = str7;
                    }
                  }
                  str4 = str6;
                }
              }
            }
          }
        }
      }
      let str2 = str4;
    } else {
      str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 <= 1) {
          str2 = "one";
        }
      }
    }
    return str2;
  };
  obj.asa = fn;
  const fn4 = function d(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (1 == arg0) {
        str2 = "other";
        if (tmp2) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  };
  obj.ast = fn4;
  obj.az = function az(arg0, arg1) {
    const first = String(arg0).split(".")[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = first.slice(-3);
    if (arg1) {
      let str4 = "one";
      if (1 != substr) {
        str4 = "one";
        if (2 != substr) {
          str4 = "one";
          if (5 != substr) {
            str4 = "one";
            if (7 != substr) {
              str4 = "one";
              if (8 != substr) {
                str4 = "one";
                if (20 != substr1) {
                  str4 = "one";
                  if (50 != substr1) {
                    str4 = "one";
                    if (70 != substr1) {
                      str4 = "one";
                      if (80 != substr1) {
                        let str6 = "few";
                        if (3 != substr) {
                          str6 = "few";
                          if (4 != substr) {
                            str6 = "few";
                            if (100 != substr2) {
                              str6 = "few";
                              if (200 != substr2) {
                                str6 = "few";
                                if (300 != substr2) {
                                  str6 = "few";
                                  if (400 != substr2) {
                                    str6 = "few";
                                    if (500 != substr2) {
                                      str6 = "few";
                                      if (600 != substr2) {
                                        str6 = "few";
                                        if (700 != substr2) {
                                          str6 = "few";
                                          if (800 != substr2) {
                                            str6 = "few";
                                            if (900 != substr2) {
                                              if (0 != first) {
                                                if (6 != substr) {
                                                  if (40 != substr1) {
                                                    if (60 != substr1) {
                                                      let str7 = "other";
                                                    }
                                                    str6 = str7;
                                                  }
                                                }
                                              }
                                              str7 = "many";
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
                        str4 = str6;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      let str2 = str4;
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj.bal = function bal(arg0, arg1) {
    let str = "other";
    if (1 == arg0) {
      str = "one";
    }
    return str;
  };
  obj.be = function be(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (2 == substr) {
        if (12 != substr1) {
          let str7 = "few";
        }
        let str2 = str7;
      }
      str7 = "other";
    } else if (1 != substr) {
      if (substr >= 2) {
        if (substr <= 4) {
          let str4 = "few";
          if (substr1 >= 12) {
            str4 = "few";
          }
        }
        str2 = str4;
      }
      if (!tmp2) {
        if (substr < 5) {
          let str6 = "other";
          if (substr1 >= 11) {
            str6 = "other";
          }
          str4 = str6;
        }
      }
      str6 = "many";
    } else {
      str2 = "one";
    }
    return str2;
  };
  obj.bem = fn;
  obj.bez = fn;
  obj.bg = fn;
  obj.bho = fn2;
  const fn5 = function e(arg0, arg1) {
    return "other";
  };
  obj.bm = fn5;
  obj.bn = function bn(arg0, arg1) {
    if (arg1) {
      let str4 = "one";
      if (1 != arg0) {
        str4 = "one";
        if (5 != arg0) {
          str4 = "one";
          if (7 != arg0) {
            str4 = "one";
            if (8 != arg0) {
              str4 = "one";
              if (9 != arg0) {
                str4 = "one";
                if (10 != arg0) {
                  let str6 = "two";
                  if (2 != arg0) {
                    str6 = "two";
                    if (3 != arg0) {
                      let str7 = "few";
                      if (4 != arg0) {
                        let str8 = "other";
                        if (6 == arg0) {
                          str8 = "many";
                        }
                        str7 = str8;
                      }
                      str6 = str7;
                    }
                  }
                  str4 = str6;
                }
              }
            }
          }
        }
      }
      let str2 = str4;
    } else {
      str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 <= 1) {
          str2 = "one";
        }
      }
    }
    return str2;
  };
  obj.bo = fn5;
  obj.br = function br(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    let substr2 = tmp2;
    if (tmp2) {
      const first2 = parts[0];
      substr2 = first2.slice(-6);
    }
    let str2 = "other";
    if (!arg1) {
      if (1 == substr) {
        if (11 != substr1) {
          if (71 != substr1) {
            let str3 = "one";
          }
          str2 = str3;
        }
      }
      if (2 == substr) {
        if (12 != substr1) {
          if (72 != substr1) {
            let str4 = "two";
          }
          str3 = str4;
        }
      }
      if (3 != substr) {
        let str7 = "other";
        if (0 != arg0) {
          str7 = "other";
          if (tmp2) {
            str7 = "other";
            if (0 == substr2) {
              str7 = "many";
            }
          }
        }
        let str6 = str7;
        str4 = str6;
      }
      if (substr1 < 10) {
        if (substr1 < 70) {
          str6 = "few";
          if (substr1 >= 90) {
            str6 = "few";
          }
        }
      }
    }
    return str2;
  };
  obj.brx = fn;
  obj.bs = function bs(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              if (substr1 >= 12) {
                str3 = str4;
              }
            }
            let str4 = "few";
          }
        }
        str4 = "other";
        if (substr2 >= 2) {
          str4 = "other";
          if (substr2 <= 4) {
            if (substr3 >= 12) {
              str4 = "other";
            }
          }
        }
      } else {
        str3 = "one";
      }
    }
    return str2;
  };
  obj.ca = function ca(arg0, arg1) {
    const parts = String(arg0).split(".");
    if (arg1) {
      let str6 = "one";
      if (1 != arg0) {
        str6 = "one";
        if (3 != arg0) {
          let str7 = "two";
          if (2 != arg0) {
            let str8 = "other";
            if (4 == arg0) {
              str8 = "few";
            }
            str7 = str8;
          }
          str6 = str7;
        }
      }
      let str2 = str6;
    } else if (1 != arg0) {
      let str4 = "other";
      if (0 != parts[0]) {
        str4 = "other";
        if (0 == tmp3) {
          str4 = "other";
          if (tmp2) {
            str4 = "many";
          }
        }
      }
      str2 = str4;
    } else {
      str2 = "one";
    }
    return str2;
  };
  obj.ce = fn;
  obj.ceb = function ceb(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = parts[1] || "".slice(-1);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (tmp2) {
          if (4 != substr) {
            if (6 != substr) {
              str2 = str3;
            }
          }
        }
        let str3 = "other";
        if (!tmp2) {
          str3 = "other";
          if (4 != substr1) {
            str3 = "other";
            if (6 != substr1) {
              str3 = "other";
            }
          }
        }
      }
      str3 = "one";
    }
    return str2;
  };
  obj.cgg = fn;
  obj.chr = fn;
  obj.ckb = fn;
  obj.cs = function cs(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (first >= 2) {
          if (first <= 4) {
            let str4 = "few";
          }
          let str3 = str4;
        }
        let str5 = "many";
        if (tmp3) {
          str5 = "other";
        }
        str4 = str5;
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.cy = function cy(arg0, arg1) {
    if (arg1) {
      let str6 = "zero";
      if (!tmp) {
        str6 = "zero";
        if (7 != arg0) {
          str6 = "zero";
          if (8 != arg0) {
            str6 = "zero";
            if (9 != arg0) {
              let str7 = "one";
              if (1 != arg0) {
                let str8 = "two";
                if (2 != arg0) {
                  let str10 = "few";
                  if (3 != arg0) {
                    str10 = "few";
                    if (4 != arg0) {
                      if (5 == arg0) {
                        let str11 = "many";
                      } else {
                        str11 = "other";
                      }
                      str10 = str11;
                    }
                  }
                  str8 = str10;
                }
                str7 = str8;
              }
              str6 = str7;
            }
          }
        }
      }
      let str = str6;
    } else {
      str = "zero";
      if (!tmp) {
        let str2 = "one";
        if (1 != arg0) {
          let str3 = "two";
          if (2 != arg0) {
            let str4 = "few";
            if (3 != arg0) {
              let str5 = "other";
              if (6 == arg0) {
                str5 = "many";
              }
              str4 = str5;
            }
            str3 = str4;
          }
          str2 = str3;
        }
        str = str2;
      }
    }
    return str;
  };
  obj.da = function da(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    if (arg1) {
      let str3 = "other";
    } else {
      str3 = "one";
      if (1 != arg0) {
        if (!tmp3) {
          str3 = "one";
          if (0 != first) {
            str3 = "one";
          }
        }
      }
    }
    return str3;
  };
  obj.de = fn4;
  obj.doi = fn3;
  obj.dsb = function dsb(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-2);
    const substr1 = parts[1] || "".slice(-2);
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (!tmp2) {
        let str4 = "one";
        if (1 != substr1) {
          if (!tmp2) {
            let str5 = "two";
            if (2 != substr1) {
              if (!tmp2) {
                str5 = str2;
              }
              str2 = "few";
            }
          } else {
            str5 = "two";
          }
          str4 = str5;
        }
      } else {
        str4 = "one";
      }
      str3 = str4;
    }
    return str3;
  };
  obj.dv = fn;
  obj.dz = fn5;
  obj.ee = fn;
  obj.el = fn;
  obj.en = function en(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (1 != substr) {
        if (2 != substr) {
          let str7 = "other";
          if (3 == substr) {
            str7 = "other";
            if (13 != substr1) {
              str7 = "few";
            }
          }
          let str5 = str7;
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (tmp2) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj.eo = fn;
  obj.es = function es(arg0, arg1) {
    const parts = String(arg0).split(".");
    let str2 = "other";
    if (!arg1) {
      let str3 = "one";
      if (1 != arg0) {
        let str4 = "other";
        if (0 != parts[0]) {
          str4 = "other";
          if (0 == tmp3) {
            str4 = "other";
            if (tmp2) {
              str4 = "many";
            }
          }
        }
        str3 = str4;
      }
      str2 = str3;
    }
    return str2;
  };
  obj.et = fn4;
  obj.eu = fn;
  obj.fa = fn3;
  obj.ff = function ff(arg0, arg1) {
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 < 2) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  };
  obj.fi = fn4;
  obj.fil = function fil(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = parts[1] || "".slice(-1);
    if (arg1) {
      let str4 = "other";
      if (1 == arg0) {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      if (!tmp2) {
        str3 = "other";
        if (!tmp2) {
          str3 = "other";
          if (4 != substr1) {
            str3 = "other";
            if (6 != substr1) {
              str3 = "other";
            }
          }
        }
      }
      str3 = "one";
    }
    return str3;
  };
  obj.fo = fn;
  obj.fr = function fr(arg0, arg1) {
    const parts = String(arg0).split(".");
    if (arg1) {
      let str5 = "other";
      if (1 == arg0) {
        str5 = "one";
      }
      let str2 = str5;
    } else if (arg0 < 0) {
      let str4 = "other";
      if (0 != parts[0]) {
        str4 = "other";
        if (0 == tmp3) {
          str4 = "other";
          if (tmp2) {
            str4 = "many";
          }
        }
      }
      str2 = str4;
    } else {
      str2 = "one";
    }
    return str2;
  };
  obj.fur = fn;
  obj.fy = fn4;
  obj.ga = function ga(arg0, arg1) {
    const tmp = Number(String(arg0).split(".")[0]) == arg0;
    if (arg1) {
      let str7 = "other";
      if (tmp2) {
        str7 = "one";
      }
      let str2 = str7;
    } else {
      str2 = "one";
      if (!tmp2) {
        let str3 = "two";
        if (2 != arg0) {
          if (tmp) {
            if (arg0 >= 3) {
              let str4 = "few";
            }
            str3 = str4;
          }
          let str6 = "other";
          if (tmp) {
            str6 = "other";
            if (arg0 >= 7) {
              str6 = "other";
              if (arg0 <= 10) {
                str6 = "many";
              }
            }
          }
          str4 = str6;
        }
        str2 = str3;
      }
    }
    return str2;
  };
  obj.gd = function gd(arg0, arg1) {
    const tmp = Number(String(arg0).split(".")[0]) == arg0;
    if (arg1) {
      let str7 = "one";
      if (!tmp2) {
        str7 = "one";
        if (11 != arg0) {
          let str9 = "two";
          if (2 != arg0) {
            str9 = "two";
            if (12 != arg0) {
              if (3 == arg0) {
                let str10 = "few";
              } else {
                str10 = "other";
              }
              str9 = str10;
            }
          }
          str7 = str9;
        }
      }
      let str2 = str7;
    } else {
      str2 = "one";
      if (!tmp2) {
        str2 = "one";
        if (11 != arg0) {
          let str4 = "two";
          if (2 != arg0) {
            str4 = "two";
            if (12 != arg0) {
              if (tmp) {
                if (arg0 >= 3) {
                  str4 = str6;
                }
                let str6 = "few";
              }
              str6 = "other";
              if (tmp) {
                str6 = "other";
                if (arg0 >= 13) {
                  str6 = "other";
                }
              }
            }
          }
          str2 = str4;
        }
      }
    }
    return str2;
  };
  obj.gl = fn4;
  obj.gsw = fn;
  obj.gu = function gu(arg0, arg1) {
    if (arg1) {
      let str3 = "one";
      if (1 != arg0) {
        let str5 = "two";
        if (2 != arg0) {
          str5 = "two";
          if (3 != arg0) {
            let str6 = "few";
            if (4 != arg0) {
              let str7 = "other";
              if (6 == arg0) {
                str7 = "many";
              }
              str6 = str7;
            }
            str5 = str6;
          }
        }
        str3 = str5;
      }
      let str2 = str3;
    } else {
      str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 <= 1) {
          str2 = "one";
        }
      }
    }
    return str2;
  };
  obj.guw = fn2;
  obj.gv = function gv(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (!tmp2) {
          if (!tmp2) {
            let str7 = "many";
            if (tmp2) {
              str7 = "other";
            }
            let str6 = str7;
          } else {
            str6 = "few";
            if (0 != substr1) {
              str6 = "few";
              if (20 != substr1) {
                str6 = "few";
                if (40 != substr1) {
                  str6 = "few";
                  if (60 != substr1) {
                    str6 = "few";
                  }
                }
              }
            }
          }
          let str4 = str6;
        } else {
          str4 = "two";
        }
        let str3 = str4;
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.ha = fn;
  obj.haw = fn;
  obj.he = function he(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    let str2 = "other";
    if (!arg1) {
      if (1 != first) {
        if (0 != first) {
          let str4 = "other";
          if (2 == first) {
            str4 = "other";
            if (tmp3) {
              str4 = "two";
            }
          }
          let str3 = str4;
        } else {
          str3 = "one";
        }
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.hi = function hi(arg0, arg1) {
    if (arg1) {
      let str3 = "one";
      if (1 != arg0) {
        let str5 = "two";
        if (2 != arg0) {
          str5 = "two";
          if (3 != arg0) {
            let str6 = "few";
            if (4 != arg0) {
              let str7 = "other";
              if (6 == arg0) {
                str7 = "many";
              }
              str6 = str7;
            }
            str5 = str6;
          }
        }
        str3 = str5;
      }
      let str2 = str3;
    } else {
      str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 <= 1) {
          str2 = "one";
        }
      }
    }
    return str2;
  };
  obj.hnj = fn5;
  obj.hr = function hr(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              if (substr1 >= 12) {
                str3 = str4;
              }
            }
            let str4 = "few";
          }
        }
        str4 = "other";
        if (substr2 >= 2) {
          str4 = "other";
          if (substr2 <= 4) {
            if (substr3 >= 12) {
              str4 = "other";
            }
          }
        }
      } else {
        str3 = "one";
      }
    }
    return str2;
  };
  obj.hsb = function hsb(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-2);
    const substr1 = parts[1] || "".slice(-2);
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (!tmp2) {
        let str4 = "one";
        if (1 != substr1) {
          if (!tmp2) {
            let str5 = "two";
            if (2 != substr1) {
              if (!tmp2) {
                str5 = str2;
              }
              str2 = "few";
            }
          } else {
            str5 = "two";
          }
          str4 = str5;
        }
      } else {
        str4 = "one";
      }
      str3 = str4;
    }
    return str3;
  };
  obj.hu = function hu(arg0, arg1) {
    if (arg1) {
      if (1 == arg0) {
        let str2 = "one";
      } else {
        str2 = "other";
      }
      let str = str2;
    } else {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.hy = function hy(arg0, arg1) {
    if (arg1) {
      let str3 = "other";
      if (1 == arg0) {
        str3 = "one";
      }
      let str2 = str3;
    } else {
      str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 < 2) {
          str2 = "one";
        }
      }
    }
    return str2;
  };
  obj.ia = fn4;
  obj.id = fn5;
  obj.ig = fn5;
  obj.ii = fn5;
  obj.io = fn4;
  obj.is = function is(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const replaced = parts[1] || "".replace(/0+$/, "");
    const str = String(arg0);
    const str2 = parts[1] || "";
    const substr = first.slice(-1);
    let str3 = "other";
    if (!arg1) {
      if (tmp3) {
        if (1 == substr) {
          str3 = str4;
        }
        let str4 = "one";
      }
      str4 = "other";
      if (replaced % 10 === 1) {
        str4 = "other";
      }
    }
    return str3;
  };
  obj.it = function it(arg0, arg1) {
    const parts = String(arg0).split(".");
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str5 = "other";
          }
          let str2 = str5;
        }
      }
      str5 = "many";
    } else if (1 != arg0) {
      let str4 = "other";
      if (0 != parts[0]) {
        str4 = "other";
        if (0 == tmp3) {
          str4 = "other";
          if (tmp2) {
            str4 = "many";
          }
        }
      }
      str2 = str4;
    } else {
      str2 = "one";
    }
    return str2;
  };
  const fn6 = function f(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      let str3 = "one";
      if (1 != arg0) {
        if (2 == arg0) {
          str = "two";
        }
        str3 = str;
      }
      str2 = str3;
    }
    return str2;
  };
  obj.iu = fn6;
  obj.ja = fn5;
  obj.jbo = fn5;
  obj.jgo = fn;
  obj.jmc = fn;
  obj.jv = fn5;
  obj.jw = fn5;
  obj.ka = function ka(arg0, arg1) {
    const first = String(arg0).split(".")[0];
    const substr = first.slice(-2);
    if (arg1) {
      let str3 = "one";
      if (1 != first) {
        if (0 != first) {
          if (substr < 2) {
            if (40 != substr) {
              if (60 != substr) {
                let str4 = "other";
              }
              str3 = str4;
            }
          }
        }
        str4 = "many";
      }
      let str2 = str3;
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj.kab = function kab(arg0, arg1) {
    let str = "other";
    if (!arg1) {
      let str2 = "other";
      if (arg0 >= 0) {
        str2 = "other";
        if (arg0 < 2) {
          str2 = "one";
        }
      }
      str = str2;
    }
    return str;
  };
  obj.kaj = fn;
  obj.kcg = fn;
  obj.kde = fn5;
  obj.kea = fn5;
  obj.kk = function kk(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (arg1) {
      if (6 != substr) {
        if (9 != substr) {
          let str4 = "other";
          if (tmp2) {
            str4 = "other";
            if (0 == substr) {
              str4 = "other";
            }
          }
        }
        let str2 = str4;
      }
      str4 = "many";
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj.kkj = fn;
  obj.kl = fn;
  obj.km = fn5;
  obj.kn = fn3;
  obj.ko = fn5;
  obj.ks = fn;
  obj.ksb = fn;
  obj.ksh = function ksh(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      let str3 = "zero";
      if (0 != arg0) {
        if (1 == arg0) {
          str = "one";
        }
        str3 = str;
      }
      str2 = str3;
    }
    return str2;
  };
  obj.ku = fn;
  obj.kw = function kw(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-3);
    }
    let substr2 = tmp2;
    if (tmp2) {
      const first2 = parts[0];
      substr2 = first2.slice(-5);
    }
    let substr3 = tmp2;
    if (tmp2) {
      const first3 = parts[0];
      substr3 = first3.slice(-6);
    }
    if (arg1) {
      if (tmp2) {
        if (arg0 >= 1) {
          let str10 = "one";
        }
        let str2 = str10;
      }
      if (substr < 1) {
        if (substr < 21) {
          if (substr < 41) {
            if (substr < 61) {
              if (substr < 81) {
                if (5 == arg0) {
                  let str11 = "many";
                } else {
                  str11 = "other";
                }
                str10 = str11;
              } else {
                str10 = "one";
              }
            } else {
              str10 = "one";
            }
          } else {
            str10 = "one";
          }
        } else {
          str10 = "one";
        }
      } else {
        str10 = "one";
      }
    } else {
      str2 = "zero";
      if (0 != arg0) {
        let str3 = "one";
        if (1 != arg0) {
          let str5 = "two";
          if (2 != substr) {
            str5 = "two";
            if (22 != substr) {
              str5 = "two";
              if (42 != substr) {
                str5 = "two";
                if (62 != substr) {
                  str5 = "two";
                  if (82 != substr) {
                    if (tmp2) {
                      if (0 == substr1) {
                        if (substr2 < 1000) {
                          str5 = "two";
                          if (40000 != substr2) {
                            str5 = "two";
                            if (60000 != substr2) {
                              str5 = "two";
                            }
                          }
                        } else {
                          str5 = "two";
                        }
                      }
                    }
                    if (0 == arg0) {
                      let str7 = "few";
                      if (3 != substr) {
                        str7 = "few";
                        if (23 != substr) {
                          str7 = "few";
                          if (43 != substr) {
                            str7 = "few";
                            if (63 != substr) {
                              str7 = "few";
                              if (83 != substr) {
                                if (1 == arg0) {
                                  let str9 = "other";
                                } else {
                                  str9 = "many";
                                  if (1 != substr) {
                                    str9 = "many";
                                    if (21 != substr) {
                                      str9 = "many";
                                      if (41 != substr) {
                                        str9 = "many";
                                        if (61 != substr) {
                                          str9 = "many";
                                        }
                                      }
                                    }
                                  }
                                }
                                str7 = str9;
                              }
                            }
                          }
                        }
                      }
                      str5 = str7;
                    } else {
                      str5 = "two";
                    }
                  }
                }
              }
            }
          }
          str3 = str5;
        }
        str2 = str3;
      }
    }
    return str2;
  };
  obj.ky = fn;
  obj.lag = function lag(arg0, arg1) {
    const first = String(arg0).split(".")[0];
    let str2 = "other";
    if (!arg1) {
      let str3 = "zero";
      if (0 != arg0) {
        if (0 == first) {
          let str4 = "one";
          str3 = str4;
        }
        str4 = "other";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.lb = fn;
  obj.lg = fn;
  obj.lij = function lij(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp3 = Number(parts[0]) == arg0;
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          let str5 = "other";
          if (tmp3) {
            str5 = "other";
            if (arg0 >= 800) {
              str5 = "other";
            }
          }
        }
        let str3 = str5;
      }
      str5 = "many";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (tmp2) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj.lkt = fn5;
  obj.ln = fn2;
  obj.lo = function lo(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.lt = function lt(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (1 != substr) {
        if (substr >= 2) {
          if (substr <= 9) {
            let str7 = "few";
            if (substr1 >= 11) {
              str7 = "few";
            }
          }
          let str5 = str7;
        }
        if (0 != tmp2) {
          str2 = "many";
        }
        str7 = str2;
      } else {
        str5 = "one";
        if (substr1 >= 11) {
          str5 = "one";
        }
      }
      str3 = str5;
    }
    return str3;
  };
  obj.lv = function lv(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    const substr2 = arr.slice(-2);
    const substr3 = arr.slice(-1);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (substr1 < 11) {
          if (2 == length) {
            if (substr2 >= 11) {
              let str3 = "zero";
            }
          }
          if (1 != substr) {
            if (2 == length) {
              if (1 == substr3) {
                str3 = str4;
              }
            }
            let str4 = "other";
            if (2 != length) {
              str4 = "other";
            }
          }
          str4 = "one";
        } else {
          str3 = "zero";
        }
      } else {
        str3 = "zero";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.mas = fn;
  obj.mg = fn2;
  obj.mgo = fn;
  obj.mk = function mk(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = parts[1] || "".slice(-1);
    if (arg1) {
      if (1 != substr) {
        if (2 != substr) {
          if (7 == substr) {
            if (17 != substr1) {
              let str6 = "many";
            }
            let str5 = str6;
          }
          str6 = "other";
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      if (tmp2) {
        str3 = "one";
      }
      str3 = "other";
      if (1 == substr2) {
        str3 = "other";
      }
    }
    return str3;
  };
  obj.ml = fn;
  obj.mn = fn;
  obj.mo = function mo(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    if (arg1) {
      let str5 = "other";
      if (1 == arg0) {
        str5 = "one";
      }
      let str2 = str5;
    } else if (1 != arg0) {
      if (tmp2) {
        if (0 != arg0) {
          let str4 = "other";
          if (1 != arg0) {
            str4 = "other";
            if (substr >= 1) {
              str4 = "other";
            }
          }
        }
        str2 = str4;
      }
      str4 = "few";
    } else {
      str2 = "one";
    }
    return str2;
  };
  obj.mr = function mr(arg0, arg1) {
    if (arg1) {
      let str2 = "one";
      if (!tmp) {
        let str4 = "two";
        if (2 != arg0) {
          str4 = "two";
          if (3 != arg0) {
            let str5 = "other";
            if (4 == arg0) {
              str5 = "few";
            }
            str4 = str5;
          }
        }
        str2 = str4;
      }
      let str = str2;
    } else {
      str = "other";
      if (tmp) {
        str = "one";
      }
    }
    return str;
  };
  obj.ms = function ms(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.mt = function mt(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    let str2 = "other";
    if (!arg1) {
      let str3 = "one";
      if (1 != arg0) {
        let str4 = "two";
        if (2 != arg0) {
          let str6 = "few";
          if (0 != arg0) {
            if (substr < 3) {
              let str7 = "other";
              if (substr >= 11) {
                str7 = "other";
                if (substr <= 19) {
                  str7 = "many";
                }
              }
              str6 = str7;
            } else {
              str6 = "few";
            }
          }
          str4 = str6;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    return str2;
  };
  obj.my = fn5;
  obj.nah = fn;
  obj.naq = fn6;
  obj.nb = fn;
  obj.nd = fn;
  obj.ne = function ne(arg0, arg1) {
    String(arg0);
    if (arg1) {
      let str2 = "other";
      if (tmp2) {
        str2 = "other";
        if (arg0 >= 1) {
          str2 = "other";
          if (arg0 <= 4) {
            str2 = "one";
          }
        }
      }
      let str = str2;
    } else {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.nl = fn4;
  obj.nn = fn;
  obj.nnh = fn;
  obj.no = fn;
  obj.nqo = fn5;
  obj.nr = fn;
  obj.nso = fn2;
  obj.ny = fn;
  obj.nyn = fn;
  obj.om = fn;
  obj.or = function or(arg0, arg1) {
    String(arg0);
    if (arg1) {
      let str3 = "one";
      if (!tmp3) {
        str3 = "one";
        if (5 != arg0) {
          if (tmp2) {
            if (arg0 >= 7) {
              str3 = "one";
            }
          }
          let str5 = "two";
          if (2 != arg0) {
            str5 = "two";
            if (3 != arg0) {
              let str6 = "few";
              if (4 != arg0) {
                let str7 = "other";
                if (6 == arg0) {
                  str7 = "many";
                }
                str6 = str7;
              }
              str5 = str6;
            }
          }
          str3 = str5;
        }
      }
      let str = str3;
    } else {
      str = "other";
      if (tmp3) {
        str = "one";
      }
    }
    return str;
  };
  obj.os = fn;
  obj.osa = fn5;
  obj.pa = fn2;
  obj.pap = fn;
  obj.pcm = fn3;
  obj.pl = function pl(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              let str5 = "few";
              if (substr1 >= 12) {
                str5 = "few";
              }
            }
            let str3 = str5;
          }
        }
        if (tmp2) {
          if (1 != first) {
            if (0 != substr) {
              str5 = str6;
            }
          }
          let str6 = "many";
        }
        str6 = "other";
        if (tmp2) {
          str6 = "other";
          if (substr1 >= 12) {
            str6 = "other";
          }
        }
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.prg = function prg(arg0, arg1) {
    const parts = String(arg0).split(".");
    const tmp2 = Number(parts[0]) == arg0;
    let substr = tmp2;
    if (tmp2) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    let substr1 = tmp2;
    if (tmp2) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    const substr2 = arr.slice(-2);
    const substr3 = arr.slice(-1);
    let str2 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (substr1 < 11) {
          if (2 == length) {
            if (substr2 >= 11) {
              let str3 = "zero";
            }
          }
          if (1 != substr) {
            if (2 == length) {
              if (1 == substr3) {
                str3 = str4;
              }
            }
            let str4 = "other";
            if (2 != length) {
              str4 = "other";
            }
          }
          str4 = "one";
        } else {
          str3 = "zero";
        }
      } else {
        str3 = "zero";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.ps = fn;
  obj.pt = function pt(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    let str2 = "other";
    if (!arg1) {
      let str4 = "one";
      if (0 != first) {
        str4 = "one";
        if (1 != first) {
          let str5 = "other";
          if (0 != first) {
            str5 = "other";
            if (0 == tmp4) {
              str5 = "other";
              if (tmp3) {
                str5 = "many";
              }
            }
          }
          str4 = str5;
        }
      }
      str2 = str4;
    }
    return str2;
  };
  obj.pt_PT = function pt_PT(arg0, arg1) {
    const parts = String(arg0).split(".");
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        let str4 = "other";
        if (0 != parts[0]) {
          str4 = "other";
          if (0 == tmp3) {
            str4 = "other";
            if (tmp2) {
              str4 = "many";
            }
          }
        }
        let str3 = str4;
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.rm = fn;
  obj.ro = function ro(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-2);
    }
    if (arg1) {
      let str5 = "other";
      if (1 == arg0) {
        str5 = "one";
      }
      let str2 = str5;
    } else if (1 != arg0) {
      if (tmp2) {
        if (0 != arg0) {
          let str4 = "other";
          if (1 != arg0) {
            str4 = "other";
            if (substr >= 1) {
              str4 = "other";
            }
          }
        }
        str2 = str4;
      }
      str4 = "few";
    } else {
      str2 = "one";
    }
    return str2;
  };
  obj.rof = fn;
  obj.ru = function ru(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (tmp2) {
        if (substr >= 2) {
          if (substr <= 4) {
            let str5 = "few";
            if (substr1 >= 12) {
              str5 = "few";
            }
          }
          str3 = str5;
        }
      }
      if (!tmp2) {
        if (tmp2) {
          if (substr >= 5) {
            str5 = str6;
          }
        }
        let str6 = "other";
        if (tmp2) {
          str6 = "other";
          if (substr1 >= 11) {
            str6 = "other";
          }
        }
      }
      str6 = "many";
    }
    return str2;
  };
  obj.rwk = fn;
  obj.sah = fn5;
  obj.saq = fn;
  obj.sat = fn6;
  obj.sc = function sc(arg0, arg1) {
    String(arg0);
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str3 = "other";
          }
          let str2 = str3;
        }
      }
      str3 = "many";
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "other";
        if (tmp2) {
          str2 = "one";
        }
      }
    }
    return str2;
  };
  obj.scn = function scn(arg0, arg1) {
    String(arg0);
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str3 = "other";
          }
          let str2 = str3;
        }
      }
      str3 = "many";
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "other";
        if (tmp2) {
          str2 = "one";
        }
      }
    }
    return str2;
  };
  obj.sd = fn;
  obj.sdh = fn;
  obj.se = fn6;
  obj.seh = fn;
  obj.ses = fn5;
  obj.sg = fn5;
  obj.sh = function sh(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              if (substr1 >= 12) {
                str3 = str4;
              }
            }
            let str4 = "few";
          }
        }
        str4 = "other";
        if (substr2 >= 2) {
          str4 = "other";
          if (substr2 <= 4) {
            if (substr3 >= 12) {
              str4 = "other";
            }
          }
        }
      } else {
        str3 = "one";
      }
    }
    return str2;
  };
  obj.shi = function shi(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      if (arg0 < 0) {
        let str3 = "other";
        if (tmp2) {
          str3 = "other";
          if (arg0 >= 2) {
            str3 = "other";
            if (arg0 <= 10) {
              str3 = "few";
            }
          }
        }
        let str2 = str3;
      } else {
        str2 = "one";
      }
      str = str2;
    }
    return str;
  };
  obj.si = function si(arg0, arg1) {
    let str2;
    let tmp2;
    const parts = String(arg0).split(".");
    [tmp2, str2] = parts;
    let str3 = "other";
    if (!arg1) {
      if (0 != arg0) {
        if (1 != arg0) {
          let str4 = "other";
          if (0 == tmp2) {
            str4 = "other";
          }
        }
        str3 = str4;
      }
      str4 = "one";
    }
    return str3;
  };
  obj.sk = function sk(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    let str2 = "other";
    if (!arg1) {
      if (1 != arg0) {
        if (first >= 2) {
          if (first <= 4) {
            let str4 = "few";
          }
          let str3 = str4;
        }
        let str5 = "many";
        if (tmp3) {
          str5 = "other";
        }
        str4 = str5;
      } else {
        str3 = "one";
      }
      str2 = str3;
    }
    return str2;
  };
  obj.sl = function sl(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-2);
    let str2 = "other";
    let str3 = "other";
    if (!arg1) {
      if (!tmp2) {
        if (!tmp2) {
          if (!tmp2) {
            let str5 = str2;
          }
          str2 = "few";
        } else {
          str5 = "two";
        }
        let str4 = str5;
      } else {
        str4 = "one";
      }
      str3 = str4;
    }
    return str3;
  };
  obj.sma = fn6;
  obj.smi = fn6;
  obj.smj = fn6;
  obj.smn = fn6;
  obj.sms = fn6;
  obj.sn = fn;
  obj.so = fn;
  obj.sq = function sq(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      let str3 = "one";
      if (!tmp4) {
        let str5 = "other";
        if (4 == substr) {
          str5 = "other";
          if (14 != substr1) {
            str5 = "many";
          }
        }
        str3 = str5;
      }
      let str2 = str3;
    } else {
      str2 = "other";
      if (tmp4) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj.sr = function sr(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = first.slice(-2);
    const substr2 = arr2.slice(-1);
    const substr3 = arr2.slice(-2);
    let str2 = "other";
    if (!arg1) {
      if (tmp2) {
        if (1 == substr) {
          let str3 = "one";
        }
        str2 = str3;
      }
      if (1 != substr2) {
        if (tmp2) {
          if (substr >= 2) {
            if (substr <= 4) {
              if (substr1 >= 12) {
                str3 = str4;
              }
            }
            let str4 = "few";
          }
        }
        str4 = "other";
        if (substr2 >= 2) {
          str4 = "other";
          if (substr2 <= 4) {
            if (substr3 >= 12) {
              str4 = "other";
            }
          }
        }
      } else {
        str3 = "one";
      }
    }
    return str2;
  };
  obj.ss = fn;
  obj.ssy = fn;
  obj.st = fn;
  obj.su = fn5;
  obj.sv = function sv(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (substr1) {
      const first1 = parts[0];
      substr1 = first1.slice(-2);
    }
    if (arg1) {
      if (1 == substr) {
        if (11 != substr1) {
          let str4 = "one";
        }
        let str3 = str4;
      }
      str4 = "other";
    } else {
      str3 = "other";
      if (1 == arg0) {
        str3 = "other";
        if (tmp2) {
          str3 = "one";
        }
      }
    }
    return str3;
  };
  obj.sw = fn4;
  obj.syr = fn;
  obj.ta = fn;
  obj.te = fn;
  obj.teo = fn;
  obj.th = fn5;
  obj.ti = fn2;
  obj.tig = fn;
  obj.tk = function tk(arg0, arg1) {
    const parts = String(arg0).split(".");
    let substr = Number(parts[0]) == arg0;
    if (substr) {
      const first = parts[0];
      substr = first.slice(-1);
    }
    if (arg1) {
      if (6 != substr) {
        if (9 != substr) {
          let str3 = "other";
        }
        let str2 = str3;
      }
      str3 = "few";
    } else {
      str2 = "other";
      if (1 == arg0) {
        str2 = "one";
      }
    }
    return str2;
  };
  obj.tl = function tl(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    const substr = first.slice(-1);
    const substr1 = parts[1] || "".slice(-1);
    if (arg1) {
      let str4 = "other";
      if (1 == arg0) {
        str4 = "one";
      }
      let str3 = str4;
    } else {
      if (!tmp2) {
        str3 = "other";
        if (!tmp2) {
          str3 = "other";
          if (4 != substr1) {
            str3 = "other";
            if (6 != substr1) {
              str3 = "other";
            }
          }
        }
      }
      str3 = "one";
    }
    return str3;
  };
  obj.tn = fn;
  obj.to = fn5;
  obj.tpi = fn5;
  obj.tr = fn;
  obj.ts = fn;
  obj.tzm = function tzm(arg0, arg1) {
    String(arg0);
    let str = "other";
    if (!arg1) {
      if (0 != arg0) {
        if (1 != arg0) {
          let str2 = "other";
          if (tmp2) {
            str2 = "other";
            if (arg0 >= 11) {
              str2 = "other";
            }
          }
        }
        str = str2;
      }
      str2 = "one";
    }
    return str;
  };
  obj.ug = fn;
  obj.uk = function uk(arg0, arg1) {
    const parts = String(arg0).split(".");
    const first = parts[0];
    let substr1 = Number(parts[0]) == arg0;
    let substr = substr1;
    if (substr1) {
      const first1 = parts[0];
      substr = first1.slice(-1);
    }
    if (substr1) {
      const first2 = parts[0];
      substr1 = first2.slice(-2);
    }
    const substr2 = first.slice(-1);
    const substr3 = first.slice(-2);
    if (arg1) {
      let str8 = "other";
      if (3 == substr) {
        str8 = "other";
        if (13 != substr1) {
          str8 = "few";
        }
      }
      let str2 = str8;
    } else {
      if (tmp2) {
        if (1 == substr2) {
          str2 = "one";
        }
      }
      if (tmp2) {
        if (substr2 >= 2) {
          if (substr2 <= 4) {
            let str4 = "few";
            if (substr3 >= 12) {
              str4 = "few";
            }
          }
          str2 = str4;
        }
      }
      if (!tmp2) {
        if (tmp2) {
          if (substr2 >= 5) {
            str4 = str6;
          }
        }
        let str6 = "other";
        if (tmp2) {
          str6 = "other";
          if (substr3 >= 11) {
            str6 = "other";
          }
        }
      }
      str6 = "many";
    }
    return str2;
  };
  obj.und = fn5;
  obj.ur = fn4;
  obj.uz = fn;
  obj.ve = fn;
  obj.vec = function vec(arg0, arg1) {
    const parts = String(arg0).split(".");
    if (arg1) {
      if (11 != arg0) {
        if (8 != arg0) {
          if (80 != arg0) {
            let str5 = "other";
          }
          let str2 = str5;
        }
      }
      str5 = "many";
    } else if (1 != arg0) {
      let str4 = "other";
      if (0 != parts[0]) {
        str4 = "other";
        if (0 == tmp3) {
          str4 = "other";
          if (tmp2) {
            str4 = "many";
          }
        }
      }
      str2 = str4;
    } else {
      str2 = "one";
    }
    return str2;
  };
  obj.vi = function vi(arg0, arg1) {
    let str = "other";
    if (arg1) {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  };
  obj.vo = fn;
  obj.vun = fn;
  obj.wa = fn2;
  obj.wae = fn;
  obj.wo = fn5;
  obj.xh = fn;
  obj.xog = fn;
  obj.yi = fn4;
  obj.yo = fn5;
  obj.yue = fn5;
  obj.zh = fn5;
  obj.zu = fn3;
  const _Object = Object;
  const obj1 = { value: true };
  obj.exports = obj;
  let defaultExportFromCjs = getDefaultExportFromCjs(obj.exports);
  const obj2 = Object.create(null);
  obj2.default = defaultExportFromCjs;
  const items = [obj.exports];
  const obj3 = { exports: {} };
  (arg0) => {
    let obj = { cardinal: items, ordinal: items1 };
    let items = ["one", "other"];
    const items1 = ["other"];
    obj = { cardinal: items2, ordinal: items3 };
    const items2 = ["one", "other"];
    const items3 = ["one", "other"];
    obj = { cardinal: items4, ordinal: items5 };
    const items4 = ["other"];
    const items5 = ["other"];
    const obj1 = { cardinal: items6, ordinal: items7 };
    const items6 = ["one", "two", "other"];
    const items7 = ["other"];
    const obj2 = { af: obj, ak: obj, am: obj, an: obj, ar: { cardinal: items8, ordinal: items9 }, ars: { cardinal: items10, ordinal: items11 }, as: { cardinal: items12, ordinal: items13 }, asa: obj, ast: obj, az: { cardinal: items14, ordinal: items15 }, bal: obj, be: { cardinal: items16, ordinal: items17 }, bem: obj, bez: obj, bg: obj, bho: obj, bm: obj, bn: { cardinal: items18, ordinal: items19 }, bo: obj, br: { cardinal: items20, ordinal: items21 }, brx: obj, bs: { cardinal: items22, ordinal: items23 }, ca: { cardinal: items24, ordinal: items25 }, ce: obj, ceb: obj, cgg: obj, chr: obj, ckb: obj, cs: { cardinal: items26, ordinal: items27 }, cy: { cardinal: items28, ordinal: items29 }, da: obj, de: obj, doi: obj, dsb: { cardinal: items30, ordinal: items31 }, dv: obj, dz: obj, ee: obj, el: obj, en: { cardinal: items32, ordinal: items33 }, eo: obj, es: { cardinal: items34, ordinal: items35 }, et: obj, eu: obj, fa: obj, ff: obj, fi: obj, fil: obj, fo: obj, fr: { cardinal: items36, ordinal: items37 }, fur: obj, fy: obj, ga: { cardinal: items38, ordinal: items39 }, gd: { cardinal: items40, ordinal: items41 }, gl: obj, gsw: obj, gu: { cardinal: items42, ordinal: items43 }, guw: obj, gv: { cardinal: items44, ordinal: items45 }, ha: obj, haw: obj, he: obj1, hi: { cardinal: items46, ordinal: items47 }, hnj: obj, hr: { cardinal: items48, ordinal: items49 }, hsb: { cardinal: items50, ordinal: items51 }, hu: obj, hy: obj, ia: obj, id: obj, ig: obj, ii: obj, io: obj, is: obj, it: { cardinal: items52, ordinal: items53 }, iu: obj1, ja: obj, jbo: obj, jgo: obj, jmc: obj, jv: obj, jw: obj, ka: { cardinal: items54, ordinal: items55 }, kab: obj, kaj: obj, kcg: obj, kde: obj, kea: obj, kk: { cardinal: items56, ordinal: items57 }, kkj: obj, kl: obj, km: obj, kn: obj, ko: obj, ks: obj, ksb: obj, ksh: { cardinal: items58, ordinal: items59 }, ku: obj, kw: { cardinal: items60, ordinal: items61 }, ky: obj, lag: { cardinal: items62, ordinal: items63 }, lb: obj, lg: obj, lij: { cardinal: items64, ordinal: items65 }, lkt: obj, ln: obj, lo: { cardinal: items66, ordinal: items67 }, lt: { cardinal: items68, ordinal: items69 }, lv: { cardinal: items70, ordinal: items71 }, mas: obj, mg: obj, mgo: obj, mk: { cardinal: items72, ordinal: items73 }, ml: obj, mn: obj, mo: { cardinal: items74, ordinal: items75 }, mr: { cardinal: items76, ordinal: items77 }, ms: { cardinal: items78, ordinal: items79 }, mt: { cardinal: items80, ordinal: items81 }, my: obj, nah: obj, naq: obj1, nb: obj, nd: obj, ne: obj, nl: obj, nn: obj, nnh: obj, no: obj, nqo: obj, nr: obj, nso: obj, ny: obj, nyn: obj, om: obj, or: { cardinal: items82, ordinal: items83 }, os: obj, osa: obj, pa: obj, pap: obj, pcm: obj, pl: { cardinal: items84, ordinal: items85 }, prg: { cardinal: items86, ordinal: items87 }, ps: obj, pt: { cardinal: items88, ordinal: items89 }, pt_PT: { cardinal: items90, ordinal: items91 }, rm: obj, ro: { cardinal: items92, ordinal: items93 }, rof: obj, ru: { cardinal: items94, ordinal: items95 }, rwk: obj, sah: obj, saq: obj, sat: obj1, sc: { cardinal: items96, ordinal: items97 }, scn: { cardinal: items98, ordinal: items }, sd: obj, sdh: obj, se: obj1, seh: obj, ses: obj, sg: obj, sh: { cardinal: items, ordinal: items }, shi: { cardinal: items, ordinal: items }, si: obj, sk: { cardinal: items, ordinal: items }, sl: { cardinal: items, ordinal: items }, sma: obj1, smi: obj1, smj: obj1, smn: obj1, sms: obj1, sn: obj, so: obj, sq: { cardinal: items, ordinal: items }, sr: { cardinal: items, ordinal: items }, ss: obj, ssy: obj, st: obj, su: obj, sv: obj, sw: obj, syr: obj, ta: obj, te: obj, teo: obj, th: obj, ti: obj, tig: obj, tk: { cardinal: items, ordinal: items }, tl: obj, tn: obj, to: obj, tpi: obj, tr: obj, ts: obj, tzm: obj, ug: obj, uk: { cardinal: items, ordinal: items }, und: obj, ur: obj, uz: obj, ve: obj, vec: { cardinal: items, ordinal: items }, vi: { cardinal: items, ordinal: items }, vo: obj, vun: obj, wa: obj, wae: obj, wo: obj, xh: obj, xog: obj, yi: obj, yo: obj, yue: obj, zh: obj, zu: obj };
    const items8 = ["zero", "one", "two", "few", "many", "other"];
    const items9 = ["other"];
    const items10 = ["zero", "one", "two", "few", "many", "other"];
    const items11 = ["other"];
    const items12 = ["one", "other"];
    const items13 = ["one", "two", "few", "many", "other"];
    const items14 = ["one", "other"];
    const items15 = ["one", "few", "many", "other"];
    const items16 = ["one", "few", "many", "other"];
    const items17 = ["few", "other"];
    const items18 = ["one", "other"];
    const items19 = ["one", "two", "few", "many", "other"];
    const items20 = ["one", "two", "few", "many", "other"];
    const items21 = ["other"];
    const items22 = ["one", "few", "other"];
    const items23 = ["other"];
    const items24 = ["one", "many", "other"];
    const items25 = ["one", "two", "few", "other"];
    const items26 = ["one", "few", "many", "other"];
    const items27 = ["other"];
    const items28 = ["zero", "one", "two", "few", "many", "other"];
    const items29 = ["zero", "one", "two", "few", "many", "other"];
    const items30 = ["one", "two", "few", "other"];
    const items31 = ["other"];
    const items32 = ["one", "other"];
    const items33 = ["one", "two", "few", "other"];
    const items34 = ["one", "many", "other"];
    const items35 = ["other"];
    const items36 = ["one", "many", "other"];
    const items37 = ["one", "other"];
    const items38 = ["one", "two", "few", "many", "other"];
    const items39 = ["one", "other"];
    const items40 = ["one", "two", "few", "other"];
    const items41 = ["one", "two", "few", "other"];
    const items42 = ["one", "other"];
    const items43 = ["one", "two", "few", "many", "other"];
    const items44 = ["one", "two", "few", "many", "other"];
    const items45 = ["other"];
    const items46 = ["one", "other"];
    const items47 = ["one", "two", "few", "many", "other"];
    const items48 = ["one", "few", "other"];
    const items49 = ["other"];
    const items50 = ["one", "two", "few", "other"];
    const items51 = ["other"];
    const items52 = ["one", "many", "other"];
    const items53 = ["many", "other"];
    const items54 = ["one", "other"];
    const items55 = ["one", "many", "other"];
    const items56 = ["one", "other"];
    const items57 = ["many", "other"];
    const items58 = ["zero", "one", "other"];
    const items59 = ["other"];
    const items60 = ["zero", "one", "two", "few", "many", "other"];
    const items61 = ["one", "many", "other"];
    const items62 = ["zero", "one", "other"];
    const items63 = ["other"];
    const items64 = ["one", "other"];
    const items65 = ["many", "other"];
    const items66 = ["other"];
    const items67 = ["one", "other"];
    const items68 = ["one", "few", "many", "other"];
    const items69 = ["other"];
    const items70 = ["zero", "one", "other"];
    const items71 = ["other"];
    const items72 = ["one", "other"];
    const items73 = ["one", "two", "many", "other"];
    const items74 = ["one", "few", "other"];
    const items75 = ["one", "other"];
    const items76 = ["one", "other"];
    const items77 = ["one", "two", "few", "other"];
    const items78 = ["other"];
    const items79 = ["one", "other"];
    const items80 = ["one", "two", "few", "many", "other"];
    const items81 = ["other"];
    const items82 = ["one", "other"];
    const items83 = ["one", "two", "few", "many", "other"];
    const items84 = ["one", "few", "many", "other"];
    const items85 = ["other"];
    const items86 = ["zero", "one", "other"];
    const items87 = ["other"];
    const items88 = ["one", "many", "other"];
    const items89 = ["other"];
    const items90 = ["one", "many", "other"];
    const items91 = ["other"];
    const items92 = ["one", "few", "other"];
    const items93 = ["one", "other"];
    const items94 = ["one", "few", "many", "other"];
    const items95 = ["other"];
    const items96 = ["one", "other"];
    const items97 = ["many", "other"];
    const items98 = ["one", "other"];
    items = ["many", "other"];
    items = ["one", "few", "other"];
    items = ["other"];
    items = ["one", "few", "other"];
    items = ["other"];
    items = ["one", "few", "many", "other"];
    items = ["other"];
    items = ["one", "two", "few", "other"];
    items = ["other"];
    items = ["one", "other"];
    items = ["one", "many", "other"];
    items = ["one", "few", "other"];
    items = ["other"];
    items = ["one", "other"];
    items = ["few", "other"];
    items = ["one", "few", "many", "other"];
    items = ["few", "other"];
    items = ["one", "many", "other"];
    items = ["many", "other"];
    items = ["other"];
    items = ["one", "other"];
    arg0.exports = obj2;
  }(obj3);
  let defaultExportFromCjs1 = getDefaultExportFromCjs(obj3.exports);
  const obj4 = Object.create(null);
  obj4.default = defaultExportFromCjs1;
  const items1 = [obj3.exports];
  const obj5 = { exports: {} };
  const _mergeNamespacesResult = _mergeNamespaces(obj2, items);
  (arg0) => {
    const fn = function a(arg0, arg1) {
      return "other";
    };
    const fn2 = function b(arg0, arg1) {
      let str = "other";
      if ("other" === arg0) {
        str = "other";
        if ("one" === arg1) {
          str = "one";
        }
      }
      return str;
    };
    const fn3 = function c(arg0, arg1) {
      let str = arg1;
      if (!arg1) {
        str = "other";
      }
      return str;
    };
    const obj = {
      af: fn,
      ak: fn2,
      am: fn3,
      an: fn,
      ar(arg0, arg1) {
        let str = "few";
        if ("few" !== arg1) {
          let str2 = "many";
          if ("many" !== arg1) {
            if ("zero" !== arg0) {
              let str6 = "other";
              if (tmp2) {
                str6 = "other";
              }
              str2 = str6;
            }
            str6 = "zero";
          }
          str = str2;
        }
        return str;
      },
      as: fn3,
      az: fn3,
      be: fn3,
      bg: fn,
      bn: fn3,
      bs: fn3,
      ca: fn,
      cs: fn3,
      cy: fn3,
      da: fn3,
      de: fn3,
      el: fn3,
      en: fn,
      es: fn,
      et: fn,
      eu: fn,
      fa: fn2,
      fi: fn,
      fil: fn3,
      fr: fn3,
      ga: fn3,
      gl: fn3,
      gsw: fn3,
      gu: fn3,
      he: fn,
      hi: fn3,
      hr: fn3,
      hu: fn3,
      hy: fn3,
      ia: fn,
      id: fn,
      io: fn,
      is: fn3,
      it: fn3,
      ja: fn,
      ka(arg0, arg1) {
        let str = arg0;
        if (!arg0) {
          str = "other";
        }
        return str;
      },
      kk: fn3,
      km: fn,
      kn: fn3,
      ko: fn,
      ky: fn3,
      lij: fn3,
      lo: fn,
      lt: fn3,
      lv(arg0, arg1) {
        let str = "other";
        if ("one" === arg1) {
          str = "one";
        }
        return str;
      },
      mk: fn,
      ml: fn3,
      mn: fn3,
      mr: fn3,
      ms: fn,
      my: fn,
      nb: fn,
      ne: fn3,
      nl: fn3,
      no: fn,
      or: fn2,
      pa: fn3,
      pcm: fn,
      pl: fn3,
      ps: fn3,
      pt: fn3,
      ro(arg0, arg1) {
        if ("few" === arg1) {
          let str = "few";
        } else {
          str = "other";
        }
        return str;
      },
      ru: fn3,
      sc: fn3,
      scn: fn3,
      sd: fn2,
      si(arg0, arg1) {
        let str = "other";
        if ("one" === arg0) {
          str = "other";
          if ("one" === arg1) {
            str = "one";
          }
        }
        return str;
      },
      sk: fn3,
      sl(arg0, arg1) {
        let str = "few";
        if ("few" !== arg1) {
          str = "few";
          if ("one" !== arg1) {
            let str3 = "other";
            if ("two" === arg1) {
              str3 = "two";
            }
            str = str3;
          }
        }
        return str;
      },
      sq: fn3,
      sr: fn3,
      sv: fn,
      sw: fn3,
      ta: fn3,
      te: fn3,
      th: fn,
      tk: fn3,
      tr: fn3,
      ug: fn3,
      uk: fn3,
      ur: fn,
      uz: fn3,
      vi: fn,
      yue: fn,
      zh: fn,
      zu: fn3
    };
    arg0.exports = obj;
  }(obj5);
  const defaultExportFromCjs2 = getDefaultExportFromCjs(obj5.exports);
  if (!defaultExportFromCjs) {
    defaultExportFromCjs = _mergeNamespacesResult;
  }
  if (!defaultExportFromCjs1) {
    defaultExportFromCjs1 = _mergeNamespacesResult1;
  }
  let _mergeNamespacesResult2 = defaultExportFromCjs2;
  if (!defaultExportFromCjs2) {
    const obj6 = Object.create(null);
    obj6.default = defaultExportFromCjs2;
    const items2 = [obj5.exports];
    _mergeNamespacesResult2 = _mergeNamespaces(obj6, items2);
  }
  function id(arg0) {
    let str = "pt_PT";
    if ("pt-PT" !== arg0) {
      str = arg0;
    }
    return str;
  }
  const _Intl = Intl;
  module.exports = obj.default(Intl.NumberFormat, function getSelector(arg0) {
    return defaultExportFromCjs[closure_3(undefined, arg0)];
  }, function getCategories(arg0, arg1) {
    let str = "cardinal";
    if (arg1) {
      str = "ordinal";
    }
    return defaultExportFromCjs1[closure_3(undefined, arg0)][str];
  }, function getRangeSelector(arg0) {
    return _mergeNamespacesResult2[closure_3(undefined, arg0)];
  });
}
obj = { default: __exportStarResult1 };
