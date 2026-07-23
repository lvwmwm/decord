// Module ID: 3963
// Function ID: 32805
// Name: z
// Dependencies: []

// Module 3963 (z)
const fn = function z($$typeof) {
  if ("object" === typeof $$typeof) {
    if (null !== $$typeof) {
      $$typeof = $$typeof.$$typeof;
      if (num === $$typeof) {
        const type = $$typeof.type;
        if (num9 !== type) {
          if (num8 !== type) {
            if (num3 !== type) {
              if (num5 !== type) {
                if (num4 !== type) {
                  if (num11 !== type) {
                    let $$typeof2 = type;
                    if (type) {
                      $$typeof2 = type.$$typeof;
                    }
                    if (num7 !== $$typeof2) {
                      if (num10 !== $$typeof2) {
                        if (num14 !== $$typeof2) {
                          if (num13 !== $$typeof2) {
                            if (num6 !== $$typeof2) {
                              return $$typeof;
                            }
                          }
                        }
                      }
                    }
                    return $$typeof2;
                  }
                }
              }
            }
          }
        }
        return type;
      } else if (num2 === $$typeof) {
        return $$typeof;
      }
    }
  }
};
class A {
  constructor(arg0) {
    return z(arg0) === c8;
  }
}
let closure_19 = A;
let _for = "function" === typeof Symbol;
if (_for) {
  const _Symbol = Symbol;
  _for = Symbol.for;
}
let num = 60103;
if (_for) {
  const _Symbol2 = Symbol;
  num = Symbol.for("react.element");
}
let num2 = 60106;
if (_for) {
  const _Symbol3 = Symbol;
  num2 = Symbol.for("react.portal");
}
let num3 = 60107;
if (_for) {
  const _Symbol4 = Symbol;
  num3 = Symbol.for("react.fragment");
}
let num4 = 60108;
if (_for) {
  const _Symbol5 = Symbol;
  num4 = Symbol.for("react.strict_mode");
}
let num5 = 60114;
if (_for) {
  const _Symbol6 = Symbol;
  num5 = Symbol.for("react.profiler");
}
let num6 = 60109;
if (_for) {
  const _Symbol7 = Symbol;
  num6 = Symbol.for("react.provider");
}
let num7 = 60110;
if (_for) {
  const _Symbol8 = Symbol;
  num7 = Symbol.for("react.context");
}
let num8 = 60111;
let num9 = 60111;
if (_for) {
  const _Symbol9 = Symbol;
  num9 = Symbol.for("react.async_mode");
}
if (_for) {
  const _Symbol10 = Symbol;
  num8 = Symbol.for("react.concurrent_mode");
}
let num10 = 60112;
if (_for) {
  const _Symbol11 = Symbol;
  num10 = Symbol.for("react.forward_ref");
}
let num11 = 60113;
if (_for) {
  const _Symbol12 = Symbol;
  num11 = Symbol.for("react.suspense");
}
let num12 = 60120;
if (_for) {
  const _Symbol13 = Symbol;
  num12 = Symbol.for("react.suspense_list");
}
let num13 = 60115;
if (_for) {
  const _Symbol14 = Symbol;
  num13 = Symbol.for("react.memo");
}
let num14 = 60116;
if (_for) {
  const _Symbol15 = Symbol;
  num14 = Symbol.for("react.lazy");
}
let num15 = 60121;
if (_for) {
  const _Symbol16 = Symbol;
  num15 = Symbol.for("react.block");
}
let num16 = 60117;
if (_for) {
  const _Symbol17 = Symbol;
  num16 = Symbol.for("react.fundamental");
}
let num17 = 60118;
if (_for) {
  const _Symbol18 = Symbol;
  num17 = Symbol.for("react.responder");
}
let num18 = 60119;
if (_for) {
  const _Symbol19 = Symbol;
  num18 = Symbol.for("react.scope");
}
arg5.AsyncMode = num9;
arg5.ConcurrentMode = num8;
arg5.ContextConsumer = num7;
arg5.ContextProvider = num6;
arg5.Element = num;
arg5.ForwardRef = num10;
arg5.Fragment = num3;
arg5.Lazy = num14;
arg5.Memo = num13;
arg5.Portal = num2;
arg5.Profiler = num5;
arg5.StrictMode = num4;
arg5.Suspense = num11;
arg5.isAsyncMode = (prototype) => {
  let tmp = A(prototype);
  if (!tmp) {
    tmp = fn(prototype) === num9;
  }
  return tmp;
};
arg5.isConcurrentMode = A;
arg5.isContextConsumer = (prototype) => fn(prototype) === num7;
arg5.isContextProvider = (prototype) => fn(prototype) === num6;
arg5.isElement = ($$typeof) => {
  let tmp = "object" === typeof $$typeof;
  if (tmp) {
    tmp = null !== $$typeof;
  }
  if (tmp) {
    tmp = $$typeof.$$typeof === num;
  }
  return tmp;
};
arg5.isForwardRef = (prototype) => fn(prototype) === num10;
arg5.isFragment = (prototype) => fn(prototype) === num3;
arg5.isLazy = (prototype) => fn(prototype) === num14;
arg5.isMemo = (prototype) => fn(prototype) === num13;
arg5.isPortal = (prototype) => fn(prototype) === num2;
arg5.isProfiler = (prototype) => fn(prototype) === num5;
arg5.isStrictMode = (prototype) => fn(prototype) === num4;
arg5.isSuspense = (prototype) => fn(prototype) === num11;
arg5.isValidElementType = ($$typeof) => {
  let tmp2 = "string" === tmp;
  if (!tmp2) {
    tmp2 = "function" === tmp;
  }
  if (!tmp2) {
    tmp2 = $$typeof === num3;
  }
  if (!tmp2) {
    tmp2 = $$typeof === num8;
  }
  if (!tmp2) {
    tmp2 = $$typeof === num5;
  }
  if (!tmp2) {
    tmp2 = $$typeof === num4;
  }
  if (!tmp2) {
    tmp2 = $$typeof === num11;
  }
  if (!tmp2) {
    tmp2 = $$typeof === num12;
  }
  if (!tmp2) {
    let tmp9 = "object" === tmp;
    if (tmp9) {
      tmp9 = null !== $$typeof;
    }
    if (tmp9) {
      let tmp12 = $$typeof.$$typeof === num14;
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num13;
      }
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num6;
      }
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num7;
      }
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num10;
      }
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num16;
      }
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num17;
      }
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num18;
      }
      if (!tmp12) {
        tmp12 = $$typeof.$$typeof === num15;
      }
      tmp9 = tmp12;
    }
    tmp2 = tmp9;
  }
  return tmp2;
};
arg5.typeOf = fn;
