// Module ID: 1002
// Function ID: 10730
// Name: mergeOptions
// Dependencies: []
// Exports: buildFeedbackIntegration, feedbackModalIntegration, feedbackScreenshotIntegration, getFeedback

// Module 1002 (mergeOptions)
function mergeOptions(tags, tags2) {
  const require = tags;
  const dependencyMap = tags2;
  return Object.assign({}, tags, tags2, {
    tags: Object.assign({}, tags.tags, tags2.tags),
    onFormOpen() {
      if (null != arg1.onFormOpen) {
        arg1.onFormOpen();
      }
      if (null != arg0.onFormOpen) {
        arg0.onFormOpen();
      }
    },
    onFormClose() {
      if (null != arg1.onFormClose) {
        arg1.onFormClose();
      }
      if (null != arg0.onFormClose) {
        arg0.onFormClose();
      }
    },
    onSubmitSuccess(arg0, arg1) {
      if (null != arg1.onSubmitSuccess) {
        arg1.onSubmitSuccess(arg0, arg1);
      }
      if (null != arg0.onSubmitSuccess) {
        arg0.onSubmitSuccess(arg0, arg1);
      }
    },
    onSubmitError(arg0) {
      if (null != arg1.onSubmitError) {
        arg1.onSubmitError(arg0);
      }
      if (null != arg0.onSubmitError) {
        arg0.onSubmitError(arg0);
      }
    },
    onFormSubmitted() {
      if (null != arg1.onFormSubmitted) {
        arg1.onFormSubmitted();
      }
      if (null != arg0.onFormSubmitted) {
        arg0.onFormSubmitted();
      }
    },
    themeDark: Object.assign({}, tags.themeDark, tags2.themeDark),
    themeLight: Object.assign({}, tags.themeLight, tags2.themeLight)
  });
}
function setAttributesNS(elementNS, arg1) {
  const require = elementNS;
  const entries = Object.entries(arg1);
  const item = entries.forEach((arg0) => {
    const tmp = callback(arg0, 2);
    arg0.setAttributeNS(null, tmp[0], tmp[1]);
  });
  return elementNS;
}
function Actor(arg0) {
  let styleNonce;
  let triggerAriaLabel;
  let triggerLabel;
  ({ triggerLabel, triggerAriaLabel, shadow: closure_0, styleNonce } = arg0);
  const element = <button />;
  const dependencyMap = element;
  element.type = "button";
  element.className = "widget__actor";
  element.ariaHidden = "false";
  if (!triggerAriaLabel) {
    triggerAriaLabel = triggerLabel;
  }
  if (!triggerAriaLabel) {
    triggerAriaLabel = closure_10;
  }
  element.ariaLabel = triggerAriaLabel;
  element.appendChild(function FeedbackIcon() {
    function createElementNS(clipPath) {
      const _document = callback(closure_1[5]).GLOBAL_OBJ.document;
      return _document.createElementNS("http://www.w3.org/2000/svg", clipPath);
    }
    const elementNS = createElementNS("svg");
    callback2(elementNS, { bhk: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008444608251384724, bic: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000819230700813058, bih: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000383230856640803, bis: -8947972451225649000000 });
    const elementNS1 = createElementNS("g");
    callback2(elementNS1, { clipPath: "url(#clip0_57_80)" });
    const elementNS2 = createElementNS("path");
    callback2(elementNS2, callback(callback(callback({}, "fill-rule", "evenodd"), "clip-rule", "evenodd"), "d", "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"));
    elementNS.appendChild(elementNS1).appendChild(elementNS2);
    const elementNS3 = createElementNS("defs");
    const elementNS4 = createElementNS("clipPath");
    callback2(elementNS4, { id: "clip0_57_80" });
    const elementNS5 = createElementNS("rect");
    callback2(elementNS5, {});
    elementNS4.appendChild(elementNS5);
    elementNS3.appendChild(elementNS4);
    const appendChildResult = elementNS.appendChild(elementNS1);
    const appendChildResult4 = elementNS.appendChild(elementNS3);
    elementNS.appendChild(elementNS3).appendChild(elementNS4).appendChild(elementNS5);
    return elementNS;
  }());
  if (triggerLabel) {
    const element1 = <span />;
    element1.appendChild(document.createTextNode(triggerLabel));
    element.appendChild(element1);
  }
  const element2 = <style />;
  element2.textContent = "\n.widget__actor {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: var(--page-margin);\n  inset: var(--actor-inset);\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  line-height: 1.14em;\n  text-decoration: none;\n\n  background: var(--actor-background, var(--background));\n  border-radius: var(--actor-border-radius, 1.7em/50%);\n  border: var(--actor-border, var(--border));\n  box-shadow: var(--actor-box-shadow, var(--box-shadow));\n  color: var(--actor-color, var(--foreground));\n  fill: var(--actor-color, var(--foreground));\n  cursor: pointer;\n  opacity: 1;\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n.widget__actor[aria-hidden=\"true\"] {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n  transform: translate(0, 16px) scale(0.98);\n}\n\n.widget__actor:hover {\n  background: var(--actor-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n\n.widget__actor svg {\n  width: 1.14em;\n  height: 1.14em;\n}\n\n@media (max-width: 600px) {\n  .widget__actor span {\n    display: none;\n  }\n}\n";
  if (styleNonce) {
    const attr = element2.setAttribute("nonce", styleNonce);
  }
  let closure_2 = element2;
  return {
    el: element,
    appendToDom() {
      closure_0.appendChild(element2);
      closure_0.appendChild(element);
    },
    removeFromDom() {
      element.remove();
      element2.remove();
    },
    show() {
      element.ariaHidden = "false";
    },
    hide() {
      element.ariaHidden = "true";
    }
  };
}
function getThemedCssVariables(foreground) {
  return "\n  --foreground: " + foreground.foreground + ";\n  --background: " + foreground.background + ";\n  --accent-foreground: " + foreground.accentForeground + ";\n  --accent-background: " + foreground.accentBackground + ";\n  --success-color: " + foreground.successColor + ";\n  --error-color: " + foreground.errorColor + ";\n  --border: " + foreground.border + ";\n  --box-shadow: " + foreground.boxShadow + ";\n  --outline: " + foreground.outline + ";\n  --interactive-filter: " + foreground.interactiveFilter + ";\n  ";
}
function v$1(__s, __s2) {
  for (const key10004 in arg1) {
    let tmp = key10004;
    arg0[key10004] = arg1[key10004];
  }
  return __s;
}
function p$1(__e) {
  const parentNode = __e.parentNode;
  if (parentNode) {
    parentNode.removeChild(__e);
  }
}
function y$1(div, arg1, cancelButtonLabel, arg3) {
  let tmp3;
  let tmp4;
  let callResult = cancelButtonLabel;
  const obj = {};
  let tmp5;
  let tmp6;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp5 = tmp3;
    tmp6 = tmp4;
    while (keys[tmp] !== undefined) {
      let tmp14 = tmp10;
      if ("key" == tmp10) {
        tmp3 = arg1[tmp10];
        // continue
      } else {
        if ("ref" == tmp10) {
          tmp4 = arg1[tmp10];
          // continue
        } else {
          obj[tmp10] = arg1[tmp10];
          // continue
        }
        continue;
      }
      continue;
    }
  }
  let num = arguments.length;
  if (num > 2) {
    num = 3;
    if (arguments.length > 3) {
      callResult = slice.call(arguments, 2);
    }
    obj.children = callResult;
  }
  if ("function" === typeof div) {
    if (null != div.defaultProps) {
      for (const key10029 in arg0.defaultProps) {
        let tmp15 = key10029;
        if (undefined !== obj[key10029]) {
          continue;
        } else {
          obj[key10029] = arg0.defaultProps[key10029];
          // continue
        }
        continue;
      }
    }
  }
  return d$1(div, obj, tmp5, tmp6, null);
}
function d$1(type, props, key, ref, arg4) {
  const obj = { type, props, key, ref, __k: null, __: null, __b: 0, __e: null, __d: undefined, __c: null, constructor: undefined };
  let tmp = arg4;
  if (null == arg4) {
    const sum = closure_17 + 1;
    closure_17 = sum;
    tmp = sum;
  }
  obj.__v = tmp;
  obj.__i = -1;
  obj.__u = 0;
  let tmp4 = null == arg4;
  if (tmp4) {
    tmp4 = null != obj.vnode;
  }
  if (tmp4) {
    obj.vnode(obj);
  }
  return obj;
}
function g$1(children) {
  return children.children;
}
class b$1 {
  constructor(arg0, arg1) {
    this.props = global;
    this.context = require;
    return;
  }
  setState(arg0, arg1) {
    self = this;
    if (null != this.__s) {
      if (self.__s !== self.state) {
        __s = self.__s;
      }
      str = "function";
      tmp2 = global;
      if ("function" === typeof global) {
        tmp3 = v$1;
        obj = {};
        tmp4 = v$1(obj, __s);
        tmp2 = global(obj, self.props);
      }
      if (tmp2) {
        tmp5 = v$1;
        tmp6 = v$1(__s, tmp2);
      }
      tmp7 = null != tmp2 && self.__v;
      if (tmp7) {
        if (require) {
          _sb = self._sb;
          arr = _sb.push(require);
        }
        tmp9 = x$1;
        tmp10 = x$1(self);
      }
      return;
    }
    obj = {};
    tmp = v$1(obj, self.state);
    self.__s = obj;
    __s = obj;
    return;
  }
  forceUpdate(arg0) {
    self = this;
    if (this.__v) {
      flag = true;
      self.__e = true;
      if (global) {
        __h = self.__h;
        arr = __h.push(global);
      }
      tmp2 = x$1;
      tmp3 = x$1(self);
    }
    return;
  }
}
function m$1(__v, arg1) {
  let tmp2;
  let sum = arg1;
  if (null == arg1) {
    let tmp5 = null;
    if (__v.__) {
      tmp5 = m$1(__v.__, __v.__i + 1);
    }
    return tmp5;
  } else {
    if (sum < __v.__k.length) {
      while (true) {
        tmp2 = __v.__k[sum];
        if (null != tmp2) {
          if (null != tmp2.__e) {
            break;
          }
        }
        sum = sum + 1;
      }
      return tmp2.__e;
    }
    let tmp3 = null;
    if ("function" === typeof __v.type) {
      tmp3 = m$1(__v);
    }
    return tmp3;
  }
}
function w$1(arr, items, items1) {
  const __v = arr.__v;
  const __e = __v.__e;
  const __P = arr.__P;
  if (__P) {
    const obj = {};
    v$1(obj, __v);
    obj.__v = __v.__v + 1;
    if (obj.vnode) {
      obj.vnode(obj);
    }
    const __n = arr.__n;
    let tmp8 = null;
    if (32 & __v.__u) {
      items = [__e];
      tmp8 = items;
    }
    let tmp9 = __e;
    if (null == __e) {
      tmp9 = m$1(__v);
    }
    M(__P, obj, __v, __n, undefined !== __P.ownerSVGElement, tmp8, items, tmp9, 32 & __v.__u, items1);
    obj.__.__k[obj.__i] = obj;
    obj.__d = undefined;
    if (obj.__e != __e) {
      k$1(obj);
    }
    return obj;
  }
}
function k$1(arg0) {
  let tmp;
  const __ = arg0.__;
  if (null != __) {
    if (null != __.__c) {
      __.__c.base = null;
      __.__e = null;
      let num = 0;
      if (0 < __.__k.length) {
        while (true) {
          tmp = __.__k[num];
          if (null != tmp) {
            if (null != tmp.__e) {
              break;
            }
          }
          num = num + 1;
        }
        const __e = tmp.__e;
        __.__c.base = __e;
        __.__e = __e;
      }
      return k$1(__);
    }
  }
}
function x$1(self) {
  let flag = !self.__d;
  if (flag) {
    self.__d = true;
    flag = true;
  }
  if (flag) {
    flag = arr.push(self);
  }
  if (flag) {
    C$1.__r = +C$1.__r + 1;
    flag = !tmp3;
  }
  if (!flag) {
    flag = debounceRendering !== obj.debounceRendering;
  }
  if (flag) {
    let debounceRendering = obj.debounceRendering;
    if (!debounceRendering) {
      debounceRendering = _setTimeout;
    }
    debounceRendering(C$1);
  }
}
class C$1 {
  constructor() {
    items = [];
    items1 = [];
    sorted = b$1.sort(f$1);
    arr = b$1.shift();
    tmp4 = undefined;
    if (arr) {
      tmp5 = tmp3;
      while (!arr.__d) {
        tmp21 = b$1;
        arr = b$1.shift();
        tmp4 = tmp3;
      }
      tmp6 = b$1;
      length = b$1.length;
      tmp7 = w$1;
      sort = w$1(arr, items, items1) || tmp3;
      if (0 !== length) {
        tmp8 = b$1;
        if (b$1.length <= length) {
          __c = sort;
          if (sort) {
            tmp9 = slice;
            __c = slice.__c;
          }
          tmp10 = sort;
          if (__c) {
            tmp11 = slice;
            tmp12 = __SENTRY_DEBUG__;
            __cResult = slice.__c(sort, __SENTRY_DEBUG__);
            tmp10 = sort;
          }
        }
        tmp19 = tmp10;
        tmp20 = length;
      }
      tmp14 = j$1;
      tmp15 = j$1(items, sort, items1);
      items.length = 0;
      items1.length = 0;
      tmp16 = b$1;
      sort = b$1.sort;
      tmp17 = f$1;
      sorted1 = sort(f$1);
    }
    if (tmp4) {
      tmp22 = j$1;
      tmp23 = j$1(items, tmp4, items1);
    }
    C$1.__r = 0;
    return;
  }
}
function P$1(arg0, arg1, __k, __k2, arg4, arg5, arg6, arg7, __d, arg9, arr) {
  let key;
  let props;
  let tmp56;
  let type;
  __k = __k2;
  if (__k2) {
    __k = __k2.__k;
  }
  if (!__k) {
    __k = items;
  }
  __k.__d = __d;
  __k.__k = [];
  let num = 0;
  let tmp3 = length3;
  let num2 = 0;
  let tmp4 = length3;
  if (0 < arg1.length) {
    do {
      let tmp5 = arg1[num];
      let tmp6 = null;
      if (null != tmp5) {
        let tmp7 = typeof tmp5;
        tmp6 = null;
        if ("boolean" !== tmp7) {
          tmp6 = null;
          if ("function" !== tmp7) {
            if ("string" !== tmp7) {
              if ("number" !== tmp7) {
                if ("bigint" !== tmp7) {
                  let _String = String;
                  if (tmp5.constructor != String) {
                    let tmp83 = closure_25;
                    if (closure_25(tmp5)) {
                      let tmp15 = closure_49;
                      let tmp16 = closure_50;
                      let obj = { children: tmp5 };
                      let tmp17 = obj;
                      let tmp18 = null;
                      let tmp19 = null;
                      let tmp20 = null;
                      let tmp9Result = closure_49(closure_50, obj, null, null, null);
                    } else {
                      tmp9Result = tmp5;
                      if (undefined === tmp5.constructor) {
                        tmp9Result = tmp5;
                        if (tmp5.__b > 0) {
                          ({ type, props, key } = tmp5);
                          let ref = null;
                          let tmp9 = closure_49;
                          if (tmp5.ref) {
                            ref = tmp5.ref;
                          }
                          let tmp11 = type;
                          let tmp12 = props;
                          let tmp13 = key;
                          let tmp14 = ref;
                          tmp9Result = tmp9(type, props, key, ref, tmp5.__v);
                        }
                      }
                    }
                  }
                  let tmp27 = tmp9Result;
                }
              }
            }
            let tmp21 = closure_49;
            let tmp22 = null;
            let tmp23 = tmp5;
            let tmp24 = null;
            let tmp25 = null;
            let tmp26 = tmp5;
            tmp9Result = closure_49(null, tmp5, null, null, tmp5);
          }
        }
      }
      __k.__k[num] = tmp6;
      if (null != tmp6) {
        tmp6.__ = __k;
        tmp6.__b = __k.__b + 1;
        let tmp36 = closure_59;
        let sum = num + num2;
        let tmp38 = tmp6;
        let tmp39 = __k;
        let tmp40 = sum;
        let tmp41 = tmp3;
        let tmp42 = closure_59(tmp6, __k, sum, tmp3);
        tmp6.__i = tmp42;
        let tmp43 = null;
        let tmp44 = tmp3;
        if (-1 !== tmp42) {
          let diff = tmp3 - 1;
          let tmp46 = __k[tmp42];
          tmp43 = tmp46;
          tmp44 = diff;
          if (tmp46) {
            tmp46.__u = tmp46.__u | 131072;
            tmp43 = tmp46;
            tmp44 = diff;
          }
        }
        if (null != tmp43) {
          if (null !== tmp43.__v) {
            let tmp29 = sum;
            let tmp30 = tmp42;
            let diff2 = tmp44;
            let tmp32 = num2;
            if (tmp42 !== sum) {
              if (tmp42 === sum + 1) {
                let num3 = num2 + 1;
              } else if (tmp42 > sum) {
                if (tmp44 > length2 - sum) {
                  num3 = num2 + (tmp42 - sum);
                } else {
                  num3 = num2 - 1;
                }
              } else {
                num3 = 0;
                if (tmp42 < sum) {
                  num3 = 0;
                  if (tmp42 == sum - 1) {
                    num3 = tmp42 - sum;
                  }
                }
              }
              tmp29 = sum;
              tmp30 = tmp42;
              diff2 = tmp44;
              tmp32 = num3;
              if (tmp42 !== num + num3) {
                tmp6.__u = tmp6.__u | 65536;
                tmp29 = sum;
                tmp30 = tmp42;
                diff2 = tmp44;
                tmp32 = num3;
              }
            }
          }
        }
        let diff1 = num2;
        if (-1 == tmp42) {
          diff1 = num2 - 1;
        }
        tmp29 = sum;
        tmp30 = tmp42;
        diff2 = tmp44;
        tmp32 = diff1;
        if ("function" !== typeof tmp6.type) {
          tmp6.__u = tmp6.__u | 65536;
          tmp29 = sum;
          tmp30 = tmp42;
          diff2 = tmp44;
          tmp32 = diff1;
        }
      } else {
        let tmp28 = __k[num];
        let __e = tmp28;
        if (tmp28) {
          __e = null == tmp28.key;
        }
        if (__e) {
          __e = tmp28.__e;
        }
        tmp29 = tmp;
        tmp30 = tmp2;
        diff2 = tmp3;
        tmp32 = num2;
        if (__e) {
          if (tmp28.__e == __k.__d) {
            let tmp33 = closure_52;
            __k.__d = closure_52(tmp28);
          }
          let tmp34 = closure_68;
          let tmp35 = closure_68(tmp28, tmp28, false);
          __k[num] = null;
          diff2 = tmp3 - 1;
          tmp29 = tmp;
          tmp30 = tmp2;
          tmp32 = num2;
        }
      }
      num = num + 1;
      let tmp = tmp29;
      let tmp2 = tmp30;
      tmp3 = diff2;
      num2 = tmp32;
      tmp4 = diff2;
    } while (num < length2);
  }
  if (tmp4) {
    for (let num4 = 0; num4 < length3; num4 = num4 + 1) {
      let tmp48 = __k[num4];
      let tmp49 = null != tmp48 && !(131072 & tmp48.__u);
      if (tmp49) {
        if (tmp48.__e == __k.__d) {
          let tmp50 = m$1;
          __k.__d = m$1(tmp48);
        }
        let tmp51 = O;
        let tmp52 = O(tmp48, tmp48);
      }
    }
  }
  const ___d = __k.__d;
  let num5 = 0;
  let tmp54 = ___d;
  let tmp55;
  if (0 < arg1.length) {
    while (true) {
      tmp56 = __k.__k[num5];
      let tmp57 = null != tmp56 && "boolean" !== typeof tmp56 && "function" !== typeof tmp56;
      let tmp58 = ___d;
      let tmp59 = tmp53;
      if (tmp57) {
        break;
      } else {
        num5 = num5 + 1;
        tmp54 = ___d;
        tmp55 = tmp53;
      }
    }
    if (-1 === tmp56.__i) {
      let tmp60 = closure_22;
    } else {
      tmp60 = __k[tmp56.__i] || closure_22;
    }
    tmp56.__i = num5;
    M(arg0, tmp56, tmp60, arg4, arg5, arg6, arg7, ___d, arg9, arr);
    const __e2 = tmp56.__e;
    if (tmp73) {
      if (tmp60.ref) {
        N(tmp60.ref, null, tmp56);
      }
      let __c = tmp56.__c;
      if (!__c) {
        __c = __e2;
      }
      arr.push(tmp56.ref, __c, tmp56);
    }
    if (!(65536 & tmp56.__u)) {
      if (tmp60.__k !== tmp56.__k) {
        if ("function" !== typeof tmp56.type) {
          let ___d2 = ___d;
          if (__e2) {
            ___d2 = __e2.nextSibling;
          }
        }
        ___d2 = tmp56.__d;
      }
      tmp56.__d = undefined;
      tmp56.__u = tmp56.__u & -196609;
    }
    ___d2 = $(tmp56, ___d, arg0);
    const tmp73 = tmp56.ref && tmp60.ref != tmp56.ref;
    const tmp77 = null == tmp53 && null != __e2;
  }
  __k.__d = tmp54;
  __k.__e = tmp55;
}
function $(type, arg1, insertBefore) {
  let nextSibling;
  if ("function" === typeof type.type) {
    const __k = type.__k;
    let tmp4 = arg1;
    if (__k) {
      let num2 = 0;
      let tmp5 = arg1;
      tmp4 = arg1;
      if (0 < __k.length) {
        while (true) {
          let tmp6 = tmp5;
          if (__k[num2]) {
            __k[num2].__ = type;
            let tmp7 = $;
            tmp6 = $(__k[num2], tmp5, insertBefore);
          }
          num2 = num2 + 1;
          tmp4 = tmp6;
          if (!__k) {
            break;
          } else {
            tmp5 = tmp6;
            tmp4 = tmp6;
            if (num2 >= __k.length) {
              break;
            }
          }
        }
      }
    }
    return tmp4;
  } else {
    let __e = arg1;
    if (type.__e != arg1) {
      let tmp2 = arg1;
      if (!arg1) {
        tmp2 = null;
      }
      insertBefore.insertBefore(type.__e, tmp2);
      __e = type.__e;
    }
    while (true) {
      nextSibling = __e;
      if (__e) {
        nextSibling = __e.nextSibling;
      }
      if (null == nextSibling) {
        break;
      } else {
        __e = nextSibling;
        if (8 !== nextSibling.nodeType) {
          break;
        }
      }
    }
    return nextSibling;
  }
}
function I(arg0, arg1, arg2, arg3) {
  let key;
  let type;
  ({ key, type } = arg0);
  let num = 1;
  const diff = arg2 - 1;
  const sum = arg2 + 1;
  if (null !== arg1[arg2]) {
    if (null == tmp3) {
      num = 0;
    }
    if (arg3 > num) {
      let tmp5 = diff;
      let tmp7 = sum;
      let tmp6 = tmp3;
      if (diff >= 0) {
        while (true) {
          let diff1 = tmp5;
          if (tmp5 >= 0) {
            let tmp9 = arg1[tmp5];
            if (tmp9) {
              let num3 = 131072;
              if (!(131072 & tmp9.__u)) {
                if (key == tmp9.key) {
                  if (type === tmp9.type) {
                    break;
                  }
                }
              }
            }
            diff1 = tmp5 - 1;
            tmp6 = tmp9;
          }
          let sum1 = tmp7;
          if (tmp7 < arg1.length) {
            let tmp11 = arg1[tmp7];
            if (tmp11) {
              let num4 = 131072;
              if (!(131072 & tmp11.__u)) {
                if (key == tmp11.key) {
                  if (type === tmp11.type) {
                    return tmp7;
                  }
                }
              }
            }
            sum1 = tmp7 + 1;
            tmp6 = tmp11;
          }
          tmp5 = diff1;
          tmp7 = sum1;
          let tmp12 = tmp6;
          if (diff1 >= 0) {
            continue;
          } else {
            tmp5 = diff1;
            tmp6 = tmp12;
            tmp7 = sum1;
          }
          continue;
        }
        return tmp5;
      } else {
        tmp5 = diff;
        tmp6 = tmp3;
        tmp7 = sum;
      }
    }
    return -1;
  }
  return arg2;
}
function T$1(setProperty) {
  if ("-" === arg1[0]) {
    let str4 = "";
    if (null != arg2) {
      str4 = arg2;
    }
    setProperty.setProperty(arg1, str4);
  } else {
    let str = "";
    if (null != arg2) {
      let text = arg2;
      if ("number" === typeof arg2) {
        text = arg2;
        if (!regex.test(arg1)) {
          text = `${arg2}px`;
        }
      }
      str = text;
    }
    setProperty[arg1] = str;
  }
}
function A$1(iter, checked, cssText, checked2, flag) {
  let str = checked2;
  let str2 = checked;
  if ("style" === checked) {
    if ("string" === typeof cssText) {
      iter.style.cssText = cssText;
    } else {
      if ("string" === typeof str) {
        iter.style.cssText = "";
        str = "";
      }
      if (str) {
        for (const key10105 in str) {
          let tmp71 = key10105;
          let tmp45 = arg2;
          if (arg2) {
            let tmp43 = key10105;
            let tmp44 = arg2;
            tmp45 = tmp71 in arg2;
          }
          if (tmp45) {
            continue;
          } else {
            let tmp46 = closure_60;
            let tmp47 = arg0;
            let tmp48 = key10105;
            let tmp49 = closure_60(arg0.style, tmp71, "");
            // continue
          }
          continue;
        }
      }
      if (cssText) {
        for (const key10118 in arg2) {
          let tmp72 = key10118;
          let tmp54 = str;
          if (str) {
            let tmp52 = arg2;
            let tmp53 = key10118;
            tmp54 = arg2[tmp72] === str[tmp72];
          }
          if (tmp54) {
            continue;
          } else {
            let tmp55 = closure_60;
            let tmp56 = arg0;
            let tmp57 = key10118;
            let tmp58 = arg2;
            let tmp59 = closure_60(arg0.style, tmp72, arg2[tmp72]);
            // continue
          }
          continue;
        }
      }
    }
  } else {
    if ("o" === str2[0]) {
      if ("n" === str2[1]) {
        const str13 = str2.replace(/(PointerCapture)$|Capture$/i, "$1");
        if (str13.toLowerCase() in iter) {
          const formatted = str14.toLowerCase();
          let substr = formatted.slice(2);
        } else {
          substr = str14.slice(2);
        }
        if (!iter.l) {
          iter.l = {};
        }
        iter.l[substr + (str2 !== str13)] = cssText;
        if (cssText) {
          if (str) {
            cssText.u = str.u;
          } else {
            const _Date = Date;
            cssText.u = Date.now();
            const listener = iter.addEventListener(tmp26, tmp22 ? L : D$1, tmp22);
          }
        } else {
          const removed = iter.removeEventListener(tmp26, tmp22 ? L : D$1, tmp22);
        }
      }
    }
    if (flag) {
      str2 = str2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      const str8 = str2.replace(/xlink(H|:h)/, "h");
    } else if ("width" !== str2) {
      if ("height" !== str2) {
        if ("href" !== str2) {
          if ("list" !== str2) {
            if ("form" !== str2) {
              if ("tabIndex" !== str2) {
                if ("download" !== str2) {
                  if ("rowSpan" !== str2) {
                    if ("colSpan" !== str2) {
                      if ("role" !== str2) {
                        if (str2 in iter) {
                          let str6 = "";
                          if (null != cssText) {
                            str6 = cssText;
                          }
                          iter[str2] = str6;
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
    while (true) {
      let tmp11 = cssText;
      let str10 = "function";
      if ("function" === typeof cssText) {
        break;
      } else {
        let tmp69 = cssText;
        let tmp70 = null;
        if (null == cssText) {
          let tmp18 = iter;
          let tmp19 = str2;
          let removeAttributeResult = iter.removeAttribute(str2);
          // break
        } else {
          let tmp12 = cssText;
          flag = false;
          if (false === cssText) {
            let tmp13 = str2;
            let num2 = 4;
            let str11 = "-";
            break;
          }
          let tmp14 = iter;
          let tmp15 = str2;
          let tmp16 = cssText;
          let attr = iter.setAttribute(str2, cssText);
          // break
        }
        break;
      }
      break;
    }
  }
}
function D$1(arg0) {
  if (this.l) {
    const tmp = this.l[arg0.type + false];
    if (!arg0.t) {
      const _Date = Date;
      arg0.t = Date.now();
    }
    let eventResult = arg0;
    if (obj.event) {
      eventResult = obj.event(arg0);
    }
    return tmp(eventResult);
  }
}
function L(arg0) {
  if (this.l) {
    const l = this.l;
    let eventResult = arg0;
    if (obj.event) {
      eventResult = obj.event(arg0);
    }
    return l[arg0.type + true](eventResult);
  }
}
function M(__P, type, __u, __s2, flag, arg5, arr) {
  let length;
  let length2;
  let componentWillMountResult = type;
  const require = type;
  let tmp2 = __s2;
  let tmp3 = arg5;
  let tmp4 = arg7;
  let tmp5 = arg8;
  type = type.type;
  if (undefined !== type.constructor) {
    componentWillMountResult = null;
    return null;
  } else {
    componentWillMountResult = __u;
    if (128 & __u.__u) {
      tmp5 = 32 & __u.__u;
      const __e = __u.__e;
      componentWillMountResult.__e = __e;
      tmp4 = __e;
      const items = [__e];
      tmp3 = items;
    }
    const __b = obj.__b;
    if (__b) {
      tmp10(componentWillMountResult);
    }
    if ("function" === typeof type) {
      const props = componentWillMountResult.props;
      const contextType = type.contextType;
      let tmp33 = contextType;
      if (contextType) {
        tmp33 = tmp2[tmp32.__c];
      }
      let obj = tmp33;
      if (contextType) {
        if (obj) {
          let __ = obj.props.value;
        } else {
          __ = tmp32.__;
        }
      } else {
        if (__u.__c) {
          const __c = __u.__c;
          componentWillMountResult.__c = __c;
          let obj2 = __c;
          let dependencyMap = __c;
          const __E = __c.__E;
          __c.__ = __E;
          const tmp6 = __E;
        } else {
          if ("prototype" in type) {
            if (type.prototype.render) {
              const prototype2 = type.prototype;
              type = new type(props, tmp42);
              obj2 = type;
              dependencyMap = type;
              componentWillMountResult.__c = type;
            }
            if (obj) {
              obj.sub(obj2);
            }
            obj2.props = props;
            if (!obj2.state) {
              obj2.state = {};
            }
            obj2.context = tmp42;
            obj2.__n = tmp2;
            obj2.__d = true;
            obj2.__h = [];
            obj2._sb = [];
          }
          const prototype = b$1.prototype;
          const tmp52 = new b$1(props, tmp42);
          obj2 = tmp52;
          dependencyMap = tmp52;
          componentWillMountResult.__c = tmp52;
          tmp52.constructor = type;
          tmp52.render = q$1;
        }
        if (null == obj2.__s) {
          obj2.__s = obj2.state;
        }
        if (null != type.getDerivedStateFromProps) {
          if (obj2.__s == obj2.state) {
            obj = {};
            v$1(obj, obj2.__s);
            obj2.__s = obj;
          }
          v$1(obj2.__s, type.getDerivedStateFromProps(props, obj2.__s));
        }
        const props2 = obj2.props;
        let closure_2 = props2;
        const state = obj2.state;
        let closure_3 = state;
        obj2.__v = componentWillMountResult;
        if (flag) {
          componentWillMountResult = type;
          componentWillMountResult = null == type.getDerivedStateFromProps;
          if (componentWillMountResult) {
            componentWillMountResult = obj2;
            componentWillMountResult = null != obj2.componentWillMount;
          }
          if (componentWillMountResult) {
            componentWillMountResult = obj2;
            componentWillMountResult = obj2.componentWillMount();
          }
          componentWillMountResult = obj2;
          if (null != obj2.componentDidMount) {
            componentWillMountResult = obj2;
            const __h = obj2.__h;
            componentWillMountResult = __h.push(obj2.componentDidMount);
          }
        } else {
          let tmp96 = tmp95;
          if (null == type.getDerivedStateFromProps) {
            tmp96 = props !== tmp90;
          }
          let tmp99 = tmp96;
          if (tmp96) {
            componentWillMountResult = obj2;
            tmp99 = null != obj2.componentWillReceiveProps;
          }
          if (tmp99) {
            componentWillMountResult = obj2;
            componentWillMountResult = props;
            componentWillMountResult = tmp37;
            componentWillMountResult = obj2.componentWillReceiveProps(props, tmp42);
          }
          componentWillMountResult = obj2;
          if (!obj2.__e) {
            componentWillMountResult = obj2;
            if (null == obj2.shouldComponentUpdate) {
              componentWillMountResult = type;
              componentWillMountResult = __u;
            } else {
              componentWillMountResult = obj2;
              componentWillMountResult = props;
              componentWillMountResult = tmp37;
            }
            componentWillMountResult = type;
            componentWillMountResult = __u;
            if (componentWillMountResult.__v !== __u.__v) {
              componentWillMountResult = obj2;
              componentWillMountResult = props;
              obj2.props = props;
              obj2.state = obj2.__s;
              obj2.__d = false;
            }
            componentWillMountResult = type;
            componentWillMountResult = __u;
            ({ __e: tmp.__e, __k: tmp.__k } = __u);
            const __k = componentWillMountResult.__k;
            componentWillMountResult = __k.forEach((arg0) => {
              if (arg0) {
                arg0.__ = arg1;
              }
            });
            let num3 = 0;
            componentWillMountResult = obj2;
            if (0 < obj2._sb.length) {
              do {
                componentWillMountResult = obj2;
                let __h1 = obj2.__h;
                componentWillMountResult = num3;
                componentWillMountResult = __h1.push(obj2._sb[num3]);
                componentWillMountResult = num3 + 1;
                num3 = componentWillMountResult;
                length = obj2._sb.length;
              } while (componentWillMountResult < length);
            }
            componentWillMountResult = obj2;
            obj2._sb = [];
            if (obj2.__h.length) {
              componentWillMountResult = arr;
              componentWillMountResult = obj2;
              componentWillMountResult = arr.push(obj2);
            }
          }
          componentWillMountResult = obj2;
          if (null != obj2.componentWillUpdate) {
            componentWillMountResult = obj2;
            componentWillMountResult = props;
            componentWillMountResult = tmp37;
            componentWillMountResult = obj2.componentWillUpdate(props, obj2.__s, tmp42);
          }
          componentWillMountResult = obj2;
          if (null != obj2.componentDidUpdate) {
            componentWillMountResult = obj2;
            const __h2 = obj2.__h;
            componentWillMountResult = __h2.push(() => {
              tmp52.componentDidUpdate(props2, state, closure_4);
            });
          }
        }
        componentWillMountResult = obj2;
        obj2.context = tmp2;
        obj2.props = props;
        componentWillMountResult = __P;
        obj2.__P = __P;
        obj2.__e = false;
        componentWillMountResult = obj;
        const ___r = obj.__r;
        let num5 = 0;
        componentWillMountResult = type;
        if ("prototype" in type) {
          if (type.prototype.render) {
            componentWillMountResult = obj2;
            obj2.state = obj2.__s;
            obj2.__d = false;
            componentWillMountResult = ___r;
            if (___r) {
              componentWillMountResult = ___r;
              componentWillMountResult = type;
              componentWillMountResult = ___r(componentWillMountResult);
            }
            componentWillMountResult = obj2;
            let element = obj2.render(obj2.props, obj2.state, obj2.context);
            let num7 = 0;
            if (0 < obj2._sb.length) {
              do {
                componentWillMountResult = obj2;
                let __h3 = obj2.__h;
                componentWillMountResult = num7;
                componentWillMountResult = __h3.push(obj2._sb[num7]);
                componentWillMountResult = num7 + 1;
                num7 = componentWillMountResult;
                length2 = obj2._sb.length;
              } while (componentWillMountResult < length2);
            }
            componentWillMountResult = obj2;
            obj2._sb = [];
          }
          componentWillMountResult = obj2;
          obj2.state = obj2.__s;
          if (null != obj2.getChildContext) {
            componentWillMountResult = v$1;
            obj = {};
            componentWillMountResult = tmp2;
            componentWillMountResult = v$1(obj, tmp2);
            componentWillMountResult = obj2;
            componentWillMountResult = v$1(obj, obj2.getChildContext());
            tmp2 = obj;
          }
          componentWillMountResult = flag;
          if (!flag) {
            componentWillMountResult = obj2;
            componentWillMountResult = null == obj2.getSnapshotBeforeUpdate;
          }
          if (!componentWillMountResult) {
            componentWillMountResult = obj2;
            const snapshotBeforeUpdate = obj2.getSnapshotBeforeUpdate(props2, state);
          }
          componentWillMountResult = element;
          if (null != element) {
            componentWillMountResult = element;
            componentWillMountResult = g$1;
            if (element.type === g$1) {
              componentWillMountResult = element;
              if (null == element.key) {
                componentWillMountResult = element;
                let children = element.props.children;
              }
              componentWillMountResult = children;
              if (componentWillMountResult(children)) {
                let items1 = children;
              } else {
                items1 = [children];
              }
              componentWillMountResult = type;
              componentWillMountResult = __u;
              componentWillMountResult = tmp2;
              componentWillMountResult = flag;
              componentWillMountResult = tmp3;
              componentWillMountResult = arr;
              componentWillMountResult = tmp4;
              componentWillMountResult = tmp5;
              componentWillMountResult = arg9;
              componentWillMountResult = __P;
              componentWillMountResult = items1;
              componentWillMountResult = componentWillMountResult(componentWillMountResult, items1, type, __u, tmp2, flag, tmp3, arr, tmp4, tmp5, arg9);
              componentWillMountResult = obj2;
              obj2.base = componentWillMountResult.__e;
              componentWillMountResult.__u = componentWillMountResult.__u & -161;
              if (obj2.__h.length) {
                componentWillMountResult = arr;
                componentWillMountResult = obj2;
                componentWillMountResult = arr.push(obj2);
              }
              if (tmp6) {
                obj2.__ = null;
                obj2.__E = null;
              }
            }
          }
          children = element;
        }
        while (true) {
          componentWillMountResult = obj2;
          obj2.__d = false;
          componentWillMountResult = ___r;
          if (___r) {
            componentWillMountResult = ___r;
            componentWillMountResult = type;
            componentWillMountResult = ___r(componentWillMountResult);
          }
          componentWillMountResult = obj2;
          element = obj2.render(obj2.props, obj2.state, obj2.context);
          obj2.state = obj2.__s;
          if (!obj2.__d) {
            break;
          } else {
            componentWillMountResult = num5;
            componentWillMountResult = num5 + 1;
            num5 = componentWillMountResult;
            break;
          }
        }
      }
    } else {
      componentWillMountResult = tmp3;
      componentWillMountResult = null;
      if (null == tmp3) {
        if (componentWillMountResult.__v === __u.__v) {
          ({ __k: tmp.__k, __e: tmp.__e } = __u);
        }
      }
      componentWillMountResult.__e = z$1(__u.__e, type, __u, tmp2, flag, tmp3, arr, tmp5, arg9);
    }
    componentWillMountResult = obj;
    const diffed = obj.diffed;
    componentWillMountResult = diffed;
    if (diffed) {
      componentWillMountResult = diffed(type);
    }
  }
}
function j$1(items, sort, items1) {
  let length;
  const require = items;
  let num = 0;
  if (0 < items1.length) {
    do {
      let tmp = closure_67;
      let sum = num + 1;
      let sum1 = sum + 1;
      let tmp4 = closure_67(items1[num], items1[sum], items1[sum1]);
      num = sum1 + 1;
      length = items1.length;
    } while (num < length);
  }
  if (obj.__c) {
    obj.__c(sort, require);
  }
  require.some((__h) => {
    __h = __h.__h;
    __h.__h = [];
    __h.some((call) => {
      call.call(__h);
    });
  });
}
function z$1(__e, type, props, __s2, flag, arg5, arr, arg7, arg8) {
  let length;
  let tmp26;
  let tmp3;
  let tmp67;
  let callResult = arg5;
  let tmp2 = arg7;
  ({ props, type } = type);
  if ("svg" === type) {
    flag = true;
  }
  let iter = __e;
  if (null != callResult) {
    let num = 0;
    iter = __e;
    if (0 < callResult.length) {
      while (true) {
        tmp3 = callResult[num];
        let tmp4 = num;
        if (tmp3) {
          if ("setAttribute" in tmp3 === type) {
            if (type) {
              let tmp5 = tmp3.localName === type;
            } else {
              tmp5 = 3 === tmp3.nodeType;
            }
            if (tmp5) {
              break;
            }
          }
        }
        num = num + 1;
        iter = __e;
      }
      callResult[num] = null;
      iter = tmp3;
    }
  }
  if (null != iter) {
    if (null === type) {
      let tmp85 = props.props === props;
      if (!tmp85) {
        if (tmp2) {
          tmp2 = iter.data === props;
        }
        tmp85 = tmp2;
      }
      if (!tmp85) {
        iter.data = props;
      }
    } else {
      if (callResult) {
        callResult = slice.call(iter.childNodes);
      }
      let iter2 = tmp10;
      if (!tmp2) {
        iter2 = tmp10;
        if (null != callResult) {
          const obj = {};
          let num3 = 0;
          iter2 = obj;
          if (0 < iter.attributes.length) {
            do {
              let iter3 = iter.attributes[num3];
              obj[iter3.name] = iter3.value;
              num3 = num3 + 1;
              iter2 = obj;
              length = iter.attributes.length;
            } while (num3 < length);
          }
        }
      }
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[__e] !== undefined) {
          let tmp89 = iter2[tmp16];
          if ("children" == tmp16) {
            continue;
          } else {
            let tmp12 = tmp89;
            if ("dangerouslySetInnerHTML" != tmp16) {
              let tmp17 = "key" === tmp16 || tmp16 in props;
              tmp12 = tmp15;
              if (!tmp17) {
                let tmp18 = A$1;
                let tmp19 = iter;
                let tmp20 = tmp16;
                let tmp21 = null;
                let tmp22 = tmp89;
                let tmp23 = flag;
                let tmp24 = A$1(iter, tmp88, null, tmp89, flag);
                tmp12 = tmp15;
              }
            }
            // continue
          }
          continue;
        }
      }
      let tmp30;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        tmp30 = tmp26;
        while (keys1[tmp] !== undefined) {
          let tmp91 = props[tmp39];
          let tmp27 = tmp91;
          if ("children" == tmp39) {
            continue;
          } else {
            tmp26 = tmp91;
            tmp27 = tmp36;
            let tmp28 = tmp37;
            let tmp29 = tmp38;
            if ("dangerouslySetInnerHTML" == tmp39) {
              continue;
            } else {
              tmp26 = tmp35;
              tmp27 = tmp36;
              tmp28 = tmp91;
              tmp29 = tmp38;
              if ("value" == tmp39) {
                continue;
              } else {
                tmp26 = tmp35;
                tmp27 = tmp36;
                tmp28 = tmp37;
                tmp29 = tmp91;
                if ("checked" == tmp39) {
                  continue;
                } else {
                  let tmp40 = "key" === tmp39;
                  if (!tmp40) {
                    let tmp41 = tmp2;
                    if (tmp2) {
                      tmp41 = "function" !== typeof tmp91;
                    }
                    tmp40 = tmp41;
                  }
                  if (!tmp40) {
                    tmp40 = iter2[tmp39] === tmp91;
                  }
                  tmp26 = tmp35;
                  tmp27 = tmp36;
                  tmp28 = tmp37;
                  tmp29 = tmp38;
                  if (tmp40) {
                    continue;
                  } else {
                    let tmp42 = A$1;
                    let tmp43 = iter;
                    let tmp44 = tmp39;
                    let tmp45 = tmp91;
                    let tmp46 = flag;
                    let tmp47 = A$1(iter, tmp90, tmp91, iter2[tmp39], flag);
                    tmp26 = tmp35;
                    tmp27 = tmp36;
                    tmp28 = tmp37;
                    tmp29 = tmp38;
                    // continue
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
      }
      if (tmp30) {
        let tmp69 = tmp2;
        if (!tmp2) {
          let tmp70 = tmp13;
          if (tmp13) {
            tmp70 = tmp30.__html === tmp13.__html || tmp30.__html === iter.innerHTML;
            const tmp71 = tmp30.__html === tmp13.__html || tmp30.__html === iter.innerHTML;
          }
          tmp69 = tmp70;
        }
        if (!tmp69) {
          iter.innerHTML = tmp30.__html;
        }
        type.__k = [];
      } else {
        if (tmp13) {
          iter.innerHTML = "";
        }
        let tmp50 = tmp31;
        if (!isArray(tmp31)) {
          const items = [tmp31];
          tmp50 = items;
        }
        let tmp51 = flag;
        if (flag) {
          tmp51 = "foreignObject" !== type;
        }
        if (callResult) {
          let __k = callResult[0];
        } else {
          __k = props.__k;
          if (__k) {
            __k = m$1(props, 0);
          }
        }
        P$1(iter, tmp50, type, props, __s2, tmp51, callResult, arr, __k, tmp2, arg8);
        if (null != callResult) {
          let diff = tmp92 - 1;
          if (+callResult.length) {
            do {
              if (null != callResult[diff]) {
                let tmp65 = closure_47;
                let tmp66 = closure_47(callResult[diff]);
              }
              tmp67 = +diff;
              diff = tmp67 - 1;
            } while (tmp67);
          }
        }
        const tmp48 = P$1;
      }
      if (!tmp2) {
        let tmp72 = undefined !== tmp32;
        if (tmp72) {
          let tmp73 = tmp32 !== iter.value;
          if (!tmp73) {
            tmp73 = "progress" === type && !tmp32;
            const tmp74 = "progress" === type && !tmp32;
          }
          if (!tmp73) {
            tmp73 = "option" === type && tmp32 !== iter2.value;
            const tmp75 = "option" === type && tmp32 !== iter2.value;
          }
          tmp72 = tmp73;
        }
        if (tmp72) {
          A$1(iter, "value", tmp32, iter2.value, false);
        }
        if (tmp80) {
          A$1(iter, "checked", tmp33, iter2.checked, false);
        }
        const tmp80 = undefined !== tmp33 && tmp33 !== iter.checked;
      }
    }
    return iter;
  } else if (null === type) {
    const _document = document;
    return document.createTextNode(props);
  } else {
    const _document2 = document;
    if (flag) {
      let elementNS = _document2.createElementNS("http://www.w3.org/2000/svg", type);
    } else {
      let is = props.is;
      if (is) {
        is = props;
      }
      elementNS = <type {......is} />;
    }
  }
}
function N(arg0, current) {
  if ("function" === typeof arg0) {
    arg0(current);
  } else {
    arg0.current = current;
  }
}
function O(ref, __v) {
  let tmp = arg2;
  if (obj.unmount) {
    obj.unmount(ref);
  }
  if (ref.ref) {
    let current = tmp4.current;
    if (current) {
      current = tmp4.current !== ref.__e;
    }
    if (!current) {
      N(tmp4, null, __v);
    }
  }
  const __c = ref.__c;
  if (null == __c) {
    const __k = ref.__k;
    if (__k) {
      let num = 0;
      if (0 < arr.length) {
        do {
          let tmp20 = __k;
          if (arr[num]) {
            let tmp22 = __k;
            let tmp23 = __v;
            let tmp24 = tmp;
            let tmp21 = closure_68;
            if (!tmp) {
              tmp24 = "function" !== typeof ref.type;
            }
            let tmp21Result = tmp21(arr[num], __v, tmp24);
          }
          num = num + 1;
          let tmp26 = __k;
        } while (num < arr.length);
      }
    }
    if (!tmp) {
      tmp = null == ref.__e;
    }
    if (!tmp) {
      p$1(ref.__e);
    }
    ref.__d = undefined;
    ref.__e = undefined;
    ref.__ = undefined;
  } else {
    if (obj.componentWillUnmount) {
      obj.componentWillUnmount();
    }
    obj.__P = null;
    obj.base = null;
    ref.__c = undefined;
    while (true) {
      let tmp15 = obj;
      let tmp16 = __v;
      let __eResult = obj.__e(__exception, __v);
      // continue
    }
  }
}
function q$1(arg0, arg1, arg2) {
  return this.constructor(arg0, arg2);
}
function h(arg0, arg1) {
  if (obj.__h) {
    let tmp3 = closure_30;
    if (!closure_30) {
      tmp3 = arg1;
    }
    obj.__h(closure_27, arg0, tmp3);
    const tmp2 = closure_27;
  }
  closure_30 = 0;
  let __H = closure_27.__H;
  if (!__H) {
    let obj = { __: [], __h: [] };
    closure_27.__H = obj;
    __H = obj;
  }
  if (arg0 >= __H.__.length) {
    const __ = __H.__;
    obj = { __V: closure_32 };
    __.push(obj);
  }
  return __H.__[arg0];
}
const fn = function p(arg0) {
  let closure_30 = 1;
  return fn2(D, arg0);
};
const fn2 = function y(arg0) {
  let closure_26 = tmp + 1;
  const tmp2 = h(+closure_26, 2);
  const require = tmp2;
  tmp2.t = arg0;
  if (!tmp2.__c) {
    if (arg2) {
      let tmp4 = arg2(arg1);
    } else {
      tmp4 = D(undefined, arg1);
    }
    const items = [
      tmp4,
      (arg0) => {
          if (tmp2.__N) {
            let first = tmp.__N[0];
          } else {
            first = tmp.__[0];
          }
          const tResult = tmp2.t(first, arg0);
          if (first !== tResult) {
            const items = [tResult, tmp2.__[1]];
            tmp2.__N = items;
            const __c = tmp2.__c;
            __c.setState({});
          }
        }
    ];
    tmp2.__ = items;
    tmp2.__c = closure_27;
    if (!closure_27.u) {
      const fn = function f(arg0, arg1, arg2) {
        const self = this;
        if (tmp2.__c.__H) {
          const __ = tmp2.__c.__H.__;
          const found = __.filter((__c) => __c.__c);
          if (found.every((__N) => !__N.__N)) {
            let callResult = !shouldComponentUpdate;
            if (!callResult) {
              callResult = shouldComponentUpdate.call(self, arg0, arg1, arg2);
            }
            return callResult;
          } else {
            const item = found.forEach((__N) => {
              if (__N.__N) {
                __N.__ = __N.__N;
                __N.__N = undefined;
                if (__N.__[0] !== __N.__[0]) {
                  let closure_0 = true;
                }
              }
            });
            let tmp4 = !tmp2;
            if (!false) {
              tmp4 = tmp2.__c.props === arg0;
            }
            let tmp6 = !tmp4;
            if (!tmp4) {
              let callResult1 = !shouldComponentUpdate;
              if (!callResult1) {
                callResult1 = shouldComponentUpdate.call(self, arg0, arg1, arg2);
              }
              tmp6 = callResult1;
            }
            return tmp6;
          }
        } else {
          return true;
        }
      };
      const dependencyMap = fn;
      closure_27.u = true;
      let closure_2 = closure_27.shouldComponentUpdate;
      const componentWillUpdate = closure_27.componentWillUpdate;
      closure_27.componentWillUpdate = function(arg0, arg1, arg2) {
        const self = this;
        if (this.__e) {
          let closure_2;
          fn(arg0, arg1, arg2);
        }
        if (componentWillUpdate) {
          componentWillUpdate.call(self, arg0, arg1, arg2);
        }
      };
      closure_27.shouldComponentUpdate = fn;
    }
  }
  return tmp2.__N || tmp2.__;
};
class A {
  constructor(arg0, arg1) {
    tmp = +closure_26;
    closure_26 = tmp + 1;
    tmp2 = h(tmp, 4);
    tmp3 = !slice.__s;
    if (tmp3) {
      tmp4 = C;
      tmp3 = C(tmp2.__H, require);
    }
    if (tmp3) {
      tmp5 = global;
      tmp2.__ = global;
      tmp2.i = require;
      tmp6 = closure_27;
      __h = closure_27.__h;
      arr = __h.push(tmp2);
    }
    return;
  }
}
const fn3 = function q(__h, arg1) {
  let closure_26 = tmp + 1;
  const tmp2 = h(+closure_26, 7);
  if (C(tmp2.__H, arg1)) {
    tmp2.__V = __h();
    tmp2.i = arg1;
    tmp2.__h = __h;
    let __ = tmp2.__V;
  } else {
    __ = tmp2.__;
  }
  return __;
};
const fn4 = function x(arg0, arg1) {
  const require = arg0;
  let closure_30 = 8;
  return fn3(() => arg0, arg1);
};
function j() {
  let arr = arr2.shift();
  let tmp2 = arr;
  if (arr) {
    while (true) {
      let tmp3 = tmp2;
      if (tmp2.__P) {
        let tmp4 = tmp2;
        if (tmp2.__H) {
          let tmp5 = tmp2;
          let __h = tmp2.__H.__h;
          let tmp6 = z;
          let item = __h.forEach(z);
          let __h1 = tmp2.__H.__h;
          let tmp8 = B;
          let item1 = __h1.forEach(B);
          tmp2.__H.__h = [];
        }
      }
      while (true) {
        let tmp10 = arr2;
        arr = arr2.shift();
        tmp2 = arr;
        if (arr) {
          break;
        } else {
          break label0;
        }
      }
    }
  }
}
function w(arg0) {
  const require = arg0;
  const fn = function r() {
    clearTimeout(closure_2);
    if (closure_40) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(closure_1);
    }
    const timerId = setTimeout(arg0);
  };
  const timeout = setTimeout(fn, 100);
  if (closure_40) {
    const _requestAnimationFrame = requestAnimationFrame;
    let closure_1 = requestAnimationFrame(fn);
  }
}
function z(__c) {
  __c = __c.__c;
  if ("function" === typeof __c) {
    __c.__c = undefined;
    __c();
  }
}
function B(arg0) {
  arg0.__c = arg0.__();
}
function C(arg0, arr) {
  const require = arg0;
  return !arg0 || arg0.length !== arr.length || arr.some((arg0, arg1) => arg0 !== arg0[arg1]);
}
function D(arg0, arg1) {
  let tmp = arg1;
  if ("function" === typeof arg1) {
    tmp = arg1(arg0);
  }
  return tmp;
}
function DialogHeader(options) {
  options = options.options;
  let obj = { class: "dialog__header" };
  const tmp = fn3(() => {
    const obj = {};
    function createElementNS(path) {
      return closure_8.createElementNS("http://www.w3.org/2000/svg", path);
    }
    const elementNS = createElementNS("svg");
    callback(elementNS, {});
    const elementNS1 = createElementNS("path");
    callback(elementNS1, { priority: false, backgroundColor: false });
    elementNS.appendChild(elementNS1);
    obj.__html = elementNS.outerHTML;
    return obj;
  }, []);
  const tmp2 = y$1;
  let tmp4 = null;
  if (options.showBranding) {
    obj = { dangerouslySetInnerHTML: tmp };
    tmp4 = y$1("a", obj);
  }
  return tmp2("h2", obj, y$1("span", { class: "dialog__title" }, options.formTitle), tmp4);
}
function retrieveStringValue(get) {
  const str = get.get(arg1);
  let str2 = "";
  if ("string" === typeof str) {
    str2 = str.trim();
  }
  return str2;
}
function Form(onSubmitError) {
  let addScreenshotButtonLabel;
  let cancelButtonLabel;
  let defaultEmail;
  let defaultName;
  let emailLabel;
  let emailPlaceholder;
  let messagePlaceholder;
  let namePlaceholder;
  let onFormClose;
  let onSubmitSuccess;
  let options;
  let removeScreenshotButtonLabel;
  let showEmail;
  let showName;
  let submitButtonLabel;
  let tmp4;
  let tmp9;
  ({ options, defaultEmail, defaultName, onSubmit: closure_0, onSubmitSuccess } = onSubmitError);
  const dependencyMap = onSubmitSuccess;
  onSubmitError = onSubmitError.onSubmitError;
  let closure_2 = onSubmitError;
  let screenshotInput = onSubmitError.screenshotInput;
  let closure_3 = screenshotInput;
  ({ tags: closure_4, addScreenshotButtonLabel, emailLabel } = options);
  let closure_5 = emailLabel;
  const isEmailRequired = options.isEmailRequired;
  const callback3 = isEmailRequired;
  const isNameRequired = options.isNameRequired;
  let closure_7 = isNameRequired;
  const messageLabel = options.messageLabel;
  const document = messageLabel;
  const nameLabel = options.nameLabel;
  const navigator = nameLabel;
  const isRequiredLabel = options.isRequiredLabel;
  ({ onFormClose, showEmail, showName } = onSubmitError);
  ({ removeScreenshotButtonLabel, cancelButtonLabel, emailPlaceholder, messagePlaceholder, namePlaceholder, submitButtonLabel } = options);
  const tmp = callback3(fn(false), 2);
  const first = tmp[0];
  let closure_10 = tmp[1];
  [tmp4, closure_11] = callback3(fn(null), 2);
  const tmp5 = callback3(fn(false), 2);
  const first1 = tmp5[0];
  let closure_12 = first1;
  let closure_13 = tmp5[1];
  let input;
  if (null != screenshotInput) {
    input = screenshotInput.input;
  }
  const tmp3 = callback3(fn(null), 2);
  [tmp9, closure_14] = callback3(fn(null), 2);
  const items = [emailLabel, isEmailRequired, isNameRequired, messageLabel, nameLabel];
  const tmp10 = fn4;
  const tmp8 = callback3(fn(null), 2);
  let closure_15 = fn4((name) => {
    const obj = { emailLabel, isEmailRequired, isNameRequired, messageLabel, nameLabel };
    const items = [];
    if (tmp) {
      items.push(obj.nameLabel);
    }
    if (tmp3) {
      items.push(obj.emailLabel);
    }
    if (!name.message) {
      items.push(obj.messageLabel);
    }
    if (items.length > 0) {
      const _HermesInternal = HermesInternal;
      callback2("Please enter in the following required fields: " + items.join(", "));
    } else {
      callback2(null);
    }
    return 0 === items.length;
  }, items);
  const tmp11 = fn4((arg0) => {
    callback4(arg0);
    callback3(false);
  }, []);
  if (screenshotInput) {
    screenshotInput = first1;
  }
  const items1 = [screenshotInput, onSubmitSuccess, onSubmitError];
  let obj = {
    class: "form",
    onSubmit: tmp10(() => {
      let closure_0 = callback(async (arg0) => {
        callback2(true);
        arg0.preventDefault();
        if (arg0.target instanceof globalThis.HTMLFormElement) {
          const _FormData = FormData;
          const formData = new FormData(arg0.target);
          if (closure_3) {
            if (closure_12) {
              const valueResult = closure_3.value();
            }
          }
          const tmp13 = yield valueResult;
          let obj = { name: callback4(formData, "name"), email: callback4(formData, "email"), message: callback4(formData, "message") };
          let tmp17;
          if (tmp13) {
            const items = [tmp14];
            tmp17 = items;
          }
          obj.attachments = tmp17;
          if (callback3(obj)) {
            obj = {};
            ({ name: obj2.name, email: obj2.email, message: obj2.message } = tmp19);
            obj.source = "widget";
            obj.tags = closure_4;
            obj = { attachments: tmp19.attachments };
            callback(obj, yield closure_0(obj, obj));
            callback2(false);
          } else {
            callback2(false);
          }
          const tmp14 = tmp13;
        } else {
          callback2(false);
        }
      });
      return function(arg0) {
        return callback(...arguments);
      };
    }(), items1)
  };
  let tmp14 = null;
  if (input) {
    tmp14 = null;
    if (first1) {
      obj = { onError: tmp11 };
      tmp14 = y$1(input, obj);
    }
  }
  obj = { <string:1383948728>: "Opera", <string:1859479967>: "OPR", disabled: first };
  let tmp17 = null;
  if (tmp4) {
    const obj2 = { class: "form__error-container" };
    tmp17 = y$1("div", obj2, tmp4);
  }
  if (showName) {
    const obj3 = { label: nameLabel, isRequiredLabel, isRequired: isNameRequired };
    const obj4 = { defaultValue: defaultName, placeholder: namePlaceholder, required: isNameRequired };
    let tmp19Result = tmp19(LabelText, obj3);
    tmp19Result = tmp19("label", { 0: "paddingHorizontal", 0: "status" }, tmp19Result, tmp19("input", obj4));
  } else {
    const obj5 = { <string:2277903557>: null, <string:1476637104>: null, <string:875988451>: null, <string:3788855749>: null, value: defaultName };
    tmp19Result = tmp19("input", obj5);
  }
  if (showEmail) {
    const obj6 = { label: emailLabel, isRequiredLabel, isRequired: isEmailRequired };
    const obj7 = { defaultValue: defaultEmail, placeholder: emailPlaceholder, required: isEmailRequired };
    let tmp23Result = tmp23(LabelText, obj6);
    tmp23Result = tmp23("label", { 0: "isArray", 0: "construct" }, tmp23Result, tmp23("input", obj7));
  } else {
    const obj8 = { value: defaultEmail };
    tmp23Result = tmp23("input", obj8);
  }
  const obj1 = { class: "form__top" };
  const tmp12 = () => {
    let closure_0 = callback(async (arg0) => {
      callback2(true);
      arg0.preventDefault();
      if (arg0.target instanceof globalThis.HTMLFormElement) {
        const _FormData = FormData;
        const formData = new FormData(arg0.target);
        if (closure_3) {
          if (closure_12) {
            const valueResult = closure_3.value();
          }
        }
        const tmp13 = yield valueResult;
        let obj = { name: callback4(formData, "name"), email: callback4(formData, "email"), message: callback4(formData, "message") };
        let tmp17;
        if (tmp13) {
          const items = [tmp14];
          tmp17 = items;
        }
        obj.attachments = tmp17;
        if (callback3(obj)) {
          obj = {};
          ({ name: obj2.name, email: obj2.email, message: obj2.message } = tmp19);
          obj.source = "widget";
          obj.tags = closure_4;
          obj = { attachments: tmp19.attachments };
          callback(obj, yield closure_0(obj, obj));
          callback2(false);
        } else {
          callback2(false);
        }
        const tmp14 = tmp13;
      } else {
        callback2(false);
      }
    });
    return function(arg0) {
      return callback(...arguments);
    };
  }();
  const tmp13 = y$1;
  const tmp27 = y$1(LabelText, { label: messageLabel, isRequiredLabel, isRequired: true });
  let tmp30Result = null;
  if (input) {
    const obj9 = {
      header: false,
      subheader: false,
      videoLink: false,
      disabled: first,
      onClick() {
          callback4(null);
          callback3((arg0) => !arg0);
        }
    };
    if (first1) {
      addScreenshotButtonLabel = removeScreenshotButtonLabel;
    }
    tmp30Result = tmp30("button", obj9, addScreenshotButtonLabel);
    let tmp32 = null;
    if (tmp9) {
      const obj10 = { class: "form__error-container" };
      tmp32 = y$1("div", obj10, tmp9.message);
    }
    tmp30Result = tmp30("label", {}, tmp30Result, tmp32);
  }
  const tmp28 = y$1("label", { 0: 256, 0: 256 }, y$1(LabelText, { label: messageLabel, isRequiredLabel, isRequired: true }), y$1("textarea", { placeholder: messagePlaceholder }));
  const obj11 = { class: "btn-group" };
  const tmp16Result = y$1("div", obj1, tmp17, tmp19Result, tmp23Result, y$1("label", { 0: 256, 0: 256 }, y$1(LabelText, { label: messageLabel, isRequiredLabel, isRequired: true }), y$1("textarea", { placeholder: messagePlaceholder })), tmp30Result);
  const obj12 = { header: false, subheader: false, videoLink: false, disabled: first, onClick: onFormClose };
  return tmp13("form", obj, tmp14, y$1("fieldset", obj, tmp16Result, y$1("div", obj11, y$1("button", { disabled: first }, submitButtonLabel), y$1("button", obj12, cancelButtonLabel))));
}
function LabelText(arg0) {
  let isRequired;
  let label;
  ({ label, isRequired } = arg0);
  let obj = { class: "form__label__text" };
  if (isRequired) {
    obj = { class: "form__label__text--required" };
    isRequired = y$1("span", obj, tmp);
  }
  return y$1("span", obj, label, isRequired);
}
function SuccessIcon() {
  function createElementNS(path) {
    const _document = callback(closure_1[5]).GLOBAL_OBJ.document;
    return _document.createElementNS("http://www.w3.org/2000/svg", path);
  }
  const elementNS = createElementNS("svg");
  setAttributesNS(elementNS, {});
  const elementNS1 = createElementNS("g");
  setAttributesNS(elementNS1, { clipPath: "url(#clip0_57_156)" });
  const elementNS2 = createElementNS("path");
  setAttributesNS(elementNS2, callback2(callback2(callback2({}, "fill-rule", "evenodd"), "clip-rule", "evenodd"), "d", "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"));
  const elementNS3 = createElementNS("path");
  setAttributesNS(elementNS3, { d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z" });
  elementNS.appendChild(elementNS1).append(elementNS3, elementNS2);
  const elementNS4 = createElementNS("defs");
  const elementNS5 = createElementNS("clipPath");
  setAttributesNS(elementNS5, { id: "clip0_57_156" });
  const elementNS6 = createElementNS("rect");
  setAttributesNS(elementNS6, {});
  elementNS5.appendChild(elementNS6);
  elementNS4.appendChild(elementNS5);
  const appendChildResult = elementNS.appendChild(elementNS1);
  const appendChildResult3 = elementNS.appendChild(elementNS4);
  elementNS.appendChild(elementNS4).appendChild(elementNS5).appendChild(elementNS6);
  return elementNS;
}
function Dialog(onFormSubmitted) {
  onFormSubmitted = onFormSubmitted.onFormSubmitted;
  const require = onFormSubmitted;
  const tmp = callback(onFormSubmitted, closure_7);
  const dependencyMap = tmp;
  const options = tmp.options;
  const tmp3 = callback3(fn(null), 2);
  const first = tmp3[0];
  let closure_2 = first;
  const callback = tmp3[1];
  const items = [first];
  [][0] = onFormSubmitted;
  const tmp2 = fn3(() => ({ __html: callback2().outerHTML }), []);
  if (first) {
    let obj = { class: "success__position", onClick: tmp5 };
    obj = { class: "success__content" };
    const obj1 = { class: "success__icon", dangerouslySetInnerHTML: tmp2 };
    let tmp9Result = tmp9("div", obj, tmp9("div", obj, options.successMessageText, tmp9("span", obj1)));
  } else {
    obj = { class: "dialog", onClick: options.onFormClose, open: onFormSubmitted.open };
    const obj2 = { class: "dialog__position" };
    const obj3 = {
      class: "dialog__content",
      onClick(stopPropagation) {
          stopPropagation.stopPropagation();
        }
    };
    const obj4 = { options };
    tmp9Result = tmp9(DialogHeader, obj4);
    const _Object = Object;
    const obj5 = { onSubmitSuccess: tmp6 };
    tmp9Result = tmp9("dialog", obj, tmp9("div", obj2, tmp9("div", obj3, tmp9Result, tmp9(Form, Object.assign({}, tmp, obj5)))));
  }
  return y$1(g$1, null, tmp9Result);
}
function useTakeScreenshotFactory(hooks) {
  const require = hooks.hooks;
  return function useTakeScreenshot(arg0) {
    ({ onBeforeScreenshot: closure_0, onScreenshot: closure_1, onAfterScreenshot: closure_2, onError: closure_3 } = arg0);
    let closure_4 = function useDpi() {
      const devicePixelRatio = React(closure_1[5]).GLOBAL_OBJ.devicePixelRatio;
      let num = 1;
      if (null != devicePixelRatio) {
        num = devicePixelRatio;
      }
      const tmp2 = callback(React.useState(num), 2);
      const React = tmp2[1];
      const effect = React.useEffect(() => {
        function onChange() {
          onChange(onChange(matchMediaResult[5]).GLOBAL_OBJ.devicePixelRatio);
        }
        const callback = onChange;
        const matchMediaResult = globalThis.matchMedia("(resolution: " + callback(matchMediaResult[5]).GLOBAL_OBJ.devicePixelRatio + "dppx)");
        const listener = matchMediaResult.addEventListener("change", onChange);
        return () => {
          const removed = matchMediaResult.removeEventListener("change", onChange);
        };
      }, []);
      return tmp2[0];
    }();
    const effect = hooks.useEffect(() => {
      () => {
        let closure_0 = callback(async () => {
          let callback;
          let closure_1;
          callback();
          const mediaDevices = mediaDevices.mediaDevices;
          let obj = {};
          obj = { width: callback(closure_1[5]).GLOBAL_OBJ.innerWidth * closure_4, height: callback(closure_1[5]).GLOBAL_OBJ.innerHeight * closure_4 };
          obj.video = obj;
          callback = yield mediaDevices.getDisplayMedia(obj);
          closure_1 = <video />;
          yield new Promise(() => { ... });
          callback2();
        });
        return function takeScreenshot() {
          return callback(...arguments);
        };
      }()().catch(closure_3);
    }, []);
  };
}
function with2dContext(getContext, arg1, arg2) {
  if (getContext) {
    const context = getContext.getContext("2d", arg1);
    if (context) {
      arg2(getContext, context);
    }
  }
}
function paintImage(getContext) {
  const require = arg1;
  with2dContext(getContext, { alpha: true }, (width, drawImage) => {
    drawImage.drawImage(drawImage, 0, 0, drawImage.width, drawImage.height, 0, 0, width.width, width.height);
  });
}
function paintForeground(getContext) {
  const require = arg1;
  const dependencyMap = arg2;
  with2dContext(getContext, { alpha: true }, (width, fillRect) => {
    if (arg2.length) {
      fillRect.fillStyle = "rgba(0, 0, 0, 0.25)";
      fillRect.fillRect(0, 0, width.width, width.height);
    }
    const item = arg2.forEach((type) => {
      type = type.type;
      if ("highlight" === type) {
        obj.shadowColor = "rgba(0, 0, 0, 0.7)";
        obj.shadowBlur = 50;
        obj.fillStyle = tmp;
        obj.fillRect(type.x - 1, type.y - 1, type.w + 2, type.h + 2);
        obj.clearRect(type.x, type.y, type.w, type.h);
      } else if ("hide" === type) {
        obj.fillStyle = "rgb(0, 0, 0)";
        obj.fillRect(type.x, type.y, type.w, type.h);
      }
    });
  });
}
function ScreenshotEditorFactory(h) {
  let options;
  h = h.h;
  const require = h;
  const hooks = h.hooks;
  const dependencyMap = hooks;
  ({ outputBuffer: closure_2, options } = h);
  let closure_3 = options;
  let closure_4 = useTakeScreenshotFactory({ hooks });
  let closure_5 = function ToolbarFactory(h) {
    h = h.h;
    return function Toolbar(action) {
      let options;
      action = action.action;
      const h = action;
      ({ setAction: closure_1, options } = action);
      let obj = { class: "editor__tool-bar" };
      obj = { type: "button" };
      let str = "";
      let str2 = "";
      if ("highlight" === action) {
        str2 = "editor__tool--active";
      }
      obj.class = `editor__tool ${str2}`;
      obj.onClick = function onClick() {
        let str = "highlight";
        if ("highlight" === action) {
          str = "";
        }
        closure_1(str);
      };
      obj = { type: "button" };
      if ("hide" === action) {
        str = "editor__tool--active";
      }
      obj.class = `editor__tool ${str}`;
      obj.onClick = function onClick() {
        let str = "hide";
        if ("hide" === action) {
          str = "";
        }
        closure_1(str);
      };
      return h("div", { class: "editor__tool-container" }, h("div", obj, h("button", obj, options.highlightToolText), h("button", obj, options.hideToolText)));
    };
  }({ h });
  let closure_6 = function IconCloseFactory(h) {
    h = h.h;
    return function IconClose() {
      const tmp = h("circle", {});
      const tmp2 = h("path", {});
      return h("svg", {}, tmp, tmp2, h("path", {}), h("path", {}));
    };
  }({ h });
  const obj = {};
  const styleNonce = options.styleNonce;
  const element = <style />;
  element.textContent = "\n.editor {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.editor__image-container {\n  justify-items: center;\n  padding: 15px;\n  position: relative;\n  height: 100%;\n  border-radius: var(--menu-border-radius, 6px);\n\n  background-color: " + "#1A141F" + ";\n  background-image: repeating-linear-gradient(\n      -145deg,\n      transparent,\n      transparent 8px,\n      " + "#1A141F" + " 8px,\n      " + "#1A141F" + " 11px\n    ),\n    repeating-linear-gradient(\n      -45deg,\n      transparent,\n      transparent 15px,\n      " + "#302735" + " 15px,\n      " + "#302735" + " 16px\n    );\n}\n\n.editor__canvas-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.editor__canvas-container > * {\n  object-fit: contain;\n  position: absolute;\n}\n\n.editor__tool-container {\n  padding-top: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.editor__tool-bar {\n  display: flex;\n  gap: 8px;\n}\n\n.editor__tool {\n  display: flex;\n  padding: 8px 12px;\n  justify-content: center;\n  align-items: center;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  background: var(--button-background, var(--background));\n  color: var(--button-color, var(--foreground));\n}\n\n.editor__tool--active {\n  background: var(--button-primary-background, var(--accent-background));\n  color: var(--button-primary-color, var(--accent-foreground));\n}\n\n.editor__rect {\n  position: absolute;\n  z-index: 2;\n}\n\n.editor__rect button {\n  opacity: 0;\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  cursor: pointer;\n  padding: 0;\n  z-index: 3;\n  border: none;\n  background: none;\n}\n\n.editor__rect:hover button {\n  opacity: 1;\n}\n";
  if (styleNonce) {
    const attr = element.setAttribute("nonce", styleNonce);
  }
  obj.__html = element.innerText;
  let closure_7 = obj;
  const document = h.dialog.el.style;
  function ScreenshotEditor(screenshot) {
    screenshot = screenshot.screenshot;
    const h = screenshot;
    const tmp = callback2(hooks.useState("highlight"), 2);
    const first = tmp[0];
    const hooks = first;
    const tmp3 = callback2(hooks.useState([]), 2);
    const first1 = tmp3[0];
    const options = tmp3[1];
    const ref = hooks.useRef(null);
    let closure_4 = ref;
    const ref1 = hooks.useRef(null);
    let closure_5 = ref1;
    const ref2 = hooks.useRef(null);
    const callback2 = ref2;
    const ref3 = hooks.useRef(null);
    let obj = ref3;
    const tmp8 = callback2(hooks.useState(1), 2);
    const first2 = tmp8[0];
    const style = first2;
    let closure_9 = tmp8[1];
    const items = [options.id];
    const memo = hooks.useMemo(() => {
      const element = first2.getElementById(closure_3.id);
      if (element) {
        const computedStyle = globalThis.getComputedStyle(element);
        let propertyValue = computedStyle.getPropertyValue("--button-primary-background");
        if (!propertyValue) {
          propertyValue = computedStyle.getPropertyValue("--accent-background");
        }
        return propertyValue;
      } else {
        return "white";
      }
    }, items);
    const items1 = [screenshot];
    const layoutEffect = hooks.useLayoutEffect(() => {
      function handleResize() {
        const current = ref.current;
        const handleResize = current;
        if (current) {
          const obj = { alpha: false };
          callback(handleResize.canvas, obj, (width) => {
            callback(Math.min(current.clientWidth / width.width, current.clientHeight / width.height));
          });
          if (!tmp4) {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(handleResize, 0);
          }
          const tmp4 = 0 !== current.clientHeight && 0 !== current.clientWidth;
        }
      }
      const screenshot = handleResize;
      handleResize();
      const GLOBAL_OBJ = screenshot(first[5]).GLOBAL_OBJ;
      const listener = GLOBAL_OBJ.addEventListener("resize", handleResize);
      return () => {
        const GLOBAL_OBJ = handleResize(closure_1[5]).GLOBAL_OBJ;
        const removed = GLOBAL_OBJ.removeEventListener("resize", handleResize);
      };
    }, items1);
    const items2 = [screenshot];
    let closure_11 = hooks.useCallback((arg0, arg1) => {
      const screenshot = arg1;
      callback3(arg0, { alpha: true }, (arg0, scale) => {
        scale.scale(scale, scale);
        arg0.width = scale.canvas.width;
        arg0.height = scale.canvas.height;
      });
    }, items2);
    const items3 = [screenshot];
    const effect = hooks.useEffect(() => {
      callback(ref1.current, screenshot.dpi);
      callback4(ref1.current, screenshot.canvas);
    }, items3);
    const items4 = [first1, memo];
    const effect1 = hooks.useEffect(() => {
      callback(ref2.current, screenshot.dpi);
      callback3(ref2.current, { alpha: true }, (width, clearRect) => {
        clearRect.clearRect(0, 0, width.width, width.height);
      });
      callback5(ref2.current, memo, first1);
    }, items4);
    const items5 = [first1, screenshot, memo];
    const effect2 = hooks.useEffect(() => {
      callback(first1, screenshot.dpi);
      callback4(first1, screenshot.canvas);
      callback3(<canvas />, { alpha: true }, (arg0, scale) => {
        scale.scale(closure_0.dpi, closure_0.dpi);
        arg0.width = closure_0.canvas.width;
        arg0.height = closure_0.canvas.height;
        callback2(arg0, closure_10, closure_2);
        callback(closure_2, arg0);
      });
    }, items5);
    let closure_12 = hooks.useCallback((arg0) => {
      const screenshot = arg0;
      return (preventDefault) => {
        preventDefault.preventDefault();
        preventDefault.stopPropagation();
        callback((arg0) => {
          const arr = callback(arg0);
          arr.splice(closure_0, 1);
          return arr;
        });
      };
    }, []);
    obj = { width: `${screenshot.canvas.width * tmp9}px`, height: `${screenshot.canvas.height * tmp9}px` };
    function handleStopPropagation(stopPropagation) {
      stopPropagation.stopPropagation();
    }
    obj = { class: "editor" };
    obj = { nonce: options.styleNonce, dangerouslySetInnerHTML: obj };
    const obj1 = { class: "editor__canvas-container", ref };
    const tmp15 = h("style", obj);
    const obj2 = {
      ref: ref3,
      onMouseDown: function handleMouseDown(offsetX) {
        if (first) {
          if (ref3.current) {
            const current = ref3.current;
            const boundingClientRect = current.getBoundingClientRect();
            const obj = { type: first, x: offsetX.offsetX / first2, y: offsetX.offsetY / first2 };
            const first = obj;
            function getDrawCommand(getDrawCommand, clientX) {
              const result = (clientX.clientX - closure_0.x) / closure_8;
              const result1 = (clientX.clientY - closure_0.y) / closure_8;
              return { type: getDrawCommand.type, x: Math.min(getDrawCommand.x, result), y: Math.min(getDrawCommand.y, result1), w: Math.abs(result - getDrawCommand.x), h: Math.abs(result1 - getDrawCommand.y) };
            }
            function handleMouseMove(clientX) {
              callback(ref.current, { alpha: true }, (width, clearRect) => {
                clearRect.clearRect(0, 0, width.width, width.height);
              });
              const items = [];
              const items1 = [getDrawCommand(obj, clientX)];
              callback2(ref.current, closure_10, items.concat(getDrawCommand(getDrawCommand), items1));
            }
            let closure_3 = handleMouseMove;
            function handleMouseUp(clientX) {
              const tmp = getDrawCommand(obj, clientX);
              let closure_0 = tmp;
              let tmp2 = tmp.w * closure_8 >= 1;
              if (tmp2) {
                tmp2 = tmp.h * closure_8 >= 1;
              }
              if (tmp2) {
                handleMouseMove((arg0) => {
                  const items = [];
                  const items1 = [tmp];
                  return items.concat(callback(arg0), items1);
                });
              }
              const removed = closure_8.removeEventListener("mousemove", handleMouseMove);
              const removed1 = closure_8.removeEventListener("mouseup", handleMouseUp);
            }
            const listener = first2.addEventListener("mousemove", handleMouseMove);
            const listener1 = first2.addEventListener("mouseup", handleMouseUp);
          }
        }
      },
      style: obj
    };
    const tmp16 = h("canvas", { ref: ref1, id: "background", style: obj });
    const obj3 = { options, action: first, setAction: tmp[1] };
    const tmp17 = h("canvas", { ref: ref2, id: "foreground", style: obj });
    return h("div", obj, tmp15, h("div", { class: "editor__image-container" }, h("div", obj1, tmp16, h("canvas", { ref: ref2, id: "foreground", style: obj }), h("div", obj2, first1.map((arg0, key) => {
      let obj = { key, class: "editor__rect", style: obj };
      obj = { top: `${arg0.y * closure_8}px`, left: `${arg0.x * closure_8}px`, width: `${arg0.w * closure_8}px`, height: `${arg0.h * closure_8}px` };
      obj = { aria-label: closure_3.removeHighlightText, onClick: callback2(key), onMouseDown: handleStopPropagation, onMouseUp: handleStopPropagation, type: "button" };
      return screenshot("div", obj, screenshot("button", obj, screenshot(ref2, null)));
    })))), h(closure_5, obj3));
  }
  return function Wrapper(onError) {
    const h = onError.onError;
    const tmp = callback2(React.useState(), 2);
    const first = tmp[0];
    const React = tmp[1];
    let obj = {
      onBeforeScreenshot: React.useCallback(() => {
        closure_8.display = "none";
      }, []),
      onScreenshot: React.useCallback((arg0, arg1) => {
        const onError = arg0;
        let closure_1 = arg1;
        callback(<canvas />, { alpha: false }, (canvas, scale) => {
          scale.scale(scale, scale);
          ({ videoWidth: canvas.width, videoHeight: canvas.height } = canvas);
          scale.drawImage(canvas, 0, 0, canvas.width, canvas.height);
          scale({ canvas, dpi: scale });
        });
        ({ videoWidth: closure_2.width, videoHeight: closure_2.height } = arg0);
      }, []),
      onAfterScreenshot: React.useCallback(() => {
        closure_8.display = "block";
      }, []),
      onError: React.useCallback((arg0) => {
        closure_8.display = "block";
        onError(arg0);
      }, [])
    };
    callback(obj);
    if (first) {
      obj = { screenshot: first };
      let tmp4Result = tmp4(ScreenshotEditor, obj);
    } else {
      tmp4Result = tmp4("div", null);
    }
    return tmp4Result;
  };
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
let closure_7 = [];
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const document = require(dependencyMap[5]).GLOBAL_OBJ.document;
const navigator = require(dependencyMap[5]).GLOBAL_OBJ.navigator;
let closure_10 = "Report a Bug";
function sendFeedback(message) {
  if (arguments.length > 1) {
    if (message.message) {
      let obj = require(closure_1[5]);
      const client = obj.getClient();
      const require = client;
      if (client) {
        let length = message.tags;
        if (length) {
          const _Object = Object;
          length = Object.keys(message.tags).length;
        }
        if (length) {
          const currentScope = require(closure_1[5]).getCurrentScope();
          currentScope.setTags(message.tags);
          const obj2 = require(closure_1[5]);
        }
        const _Object2 = Object;
        obj = { source: "api" };
        const obj4 = require(closure_1[5]);
        obj.url = require(closure_1[5]).getLocationHref();
        closure_1 = obj4.captureFeedback(Object.assign(obj, message), { includeReplay: true });
        const promise = new Promise((arg0, arg1) => {
          const client = arg0;
          let closure_1 = arg1;
          const timeout = setTimeout(() => arg1("Unable to determine if Feedback was correctly sent."), 30000);
          let closure_3 = client.on("afterSendEvent", (event_id, statusCode) => {
            if (event_id.event_id === statusCode) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_2);
              callback();
              if (null != statusCode) {
                if (statusCode.statusCode) {
                  if (statusCode.statusCode >= 200) {
                    if (statusCode.statusCode < 300) {
                      let tmp9 = event_id(statusCode);
                    }
                    return tmp9;
                  }
                }
              }
              statusCode = undefined;
              if (null != statusCode) {
                statusCode = statusCode.statusCode;
              }
              if (403 === statusCode) {
                tmp9 = statusCode("Unable to send feedback. This could be because this domain is not in your list of allowed domains.");
              } else {
                tmp9 = statusCode("Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.");
              }
            }
          });
        });
        return promise;
      } else {
        const _Error2 = Error;
        const error = new Error("No client setup, cannot send feedback.");
        throw error;
      }
    } else {
      const _Error = Error;
      const error1 = new Error("Unable to submit feedback with empty message");
      throw error1;
    }
  }
}
let closure_12 = "undefined" === typeof globalThis.__SENTRY_DEBUG__ || globalThis.__SENTRY_DEBUG__;
let closure_13 = {};
let closure_14 = {};
let closure_22 = {};
const items = [];
let closure_24 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const slice = items.slice;
let obj = {
  __e(__exception, __v) {
    let obj;
    let __ = __v.__;
    if (__) {
      while (true) {
        let __c = __.__c;
        obj = __c;
        if (__c) {
          let tmp2 = __c;
          if (!obj.__) {
            let tmp3 = __c;
            let constructor = obj.constructor;
            let obj2 = constructor;
            let tmp4 = constructor;
            if (constructor) {
              let tmp5 = constructor;
              tmp4 = null != obj2.getDerivedStateFromError;
            }
            if (tmp4) {
              let tmp6 = __c;
              let tmp7 = constructor;
              let tmp8 = tmp;
              let setStateResult = obj.setState(obj2.getDerivedStateFromError(tmp));
              let ___d = obj.__d;
            }
            let tmp10 = __c;
            if (null != obj.componentDidCatch) {
              let tmp11 = __c;
              let tmp12 = tmp;
              let tmp13 = arg3;
              obj = arg3;
              if (!arg3) {
                obj = {};
              }
              let componentDidCatchResult = obj.componentDidCatch(tmp, obj);
              let tmp15 = __c;
              ___d = obj.__d;
            }
            let tmp16 = ___d;
            if (___d) {
              break;
            }
          }
        }
        do {
          __ = __.__;
        } while (!__);
      }
      obj.__E = obj;
      return obj;
    }
    throw __exception;
  }
};
let closure_17 = 0;
b$1.prototype.render = g$1;
let closure_18 = [];
if ("function" === typeof Promise) {
  let _setTimeout = then.bind(Promise.resolve());
} else {
  _setTimeout = setTimeout;
}
function f$1(__v, __v2) {
  return __v.__v.__b - __v2.__v.__b;
}
C$1.__r = 0;
let closure_30 = 0;
let closure_31 = [];
let closure_32 = [];
({ __b: closure_34, __r: closure_35, diffed: closure_36, __c: closure_37, unmount: closure_38, __: closure_39 } = obj);
obj.__b = (arg0) => {
  let closure_27 = null;
  if (callback4) {
    callback4(arg0);
  }
};
obj.__ = (arg0, __k) => {
  if (tmp) {
    arg0.__m = __k.__k.__m;
  }
  if (callback9) {
    callback9(arg0, __k);
  }
};
obj.__r = (__c) => {
  if (callback5) {
    callback5(__c);
  }
  let closure_26 = 0;
  __c = __c.__c;
  const __H = __c.__H;
  if (__H) {
    if (closure_28 === __c) {
      __H.__h = [];
      __c.__h = [];
      const __ = __H.__;
      const item = __.forEach((__N) => {
        if (__N.__N) {
          __N.__ = __N.__N;
        }
        __N.__V = closure_32;
        __N.i = undefined;
        __N.__N = undefined;
      });
    } else {
      const __h = __H.__h;
      const item1 = __h.forEach(z);
      const __h1 = __H.__h;
      const item2 = __h1.forEach(B);
      __H.__h = [];
      closure_26 = 0;
    }
  }
  closure_28 = __c;
};
obj.diffed = (__c) => {
  if (callback6) {
    callback6(__c);
  }
  __c = __c.__c;
  let __H = __c;
  if (__c) {
    __H = __c.__H;
  }
  if (__H) {
    if (__c.__H.__h.length) {
      let tmp4 = 1 !== arr2.push(__c);
      if (tmp4) {
        tmp4 = _requestAnimationFrame === obj.requestAnimationFrame;
      }
      if (!tmp4) {
        let _requestAnimationFrame = obj.requestAnimationFrame;
        if (!_requestAnimationFrame) {
          _requestAnimationFrame = w;
        }
        const result = _requestAnimationFrame(j);
      }
    }
    const __ = __c.__H.__;
    const item = __.forEach((arg0) => {
      if (arg0.i) {
        arg0.__H = arg0.i;
      }
      if (arg0.__V !== closure_32) {
        arg0.__ = arg0.__V;
      }
      arg0.i = undefined;
      arg0.__V = closure_32;
    });
  }
  let closure_27 = null;
  let closure_28 = null;
};
obj.__c = (arg0, arr) => {
  const require = arr;
  arr.some((__h) => {
    __h = __h.__h;
    const item = __h.forEach(closure_78);
    const __h1 = __h.__h;
    __h.__h = __h1.filter((arg0) => {
      if (!!arg0.__) {
        callback(arg0);
      }
      return !arg0.__;
    });
  });
  if (callback7) {
    callback7(arg0, require);
  }
};
obj.unmount = (__c) => {
  if (callback8) {
    callback8(__c);
  }
  __c = __c.__c;
  let __H = __c;
  if (__c) {
    __H = __c.__H;
  }
  if (__H) {
    const __ = __c.__H.__;
    const item = __.forEach((arg0) => {
      callback(arg0);
    });
    __c.__H = undefined;
    if (require) {
      obj.__e(require, __c.__v);
    }
  }
};
let closure_40 = "function" === typeof requestAnimationFrame;
obj = Object.create(null);
obj.useCallback = fn4;
obj.useContext = function P(arg0) {
  let closure_26 = tmp + 1;
  const tmp2 = h(+closure_26, 9);
  tmp2.c = arg0;
  if (closure_27.context[arg0.__c]) {
    if (null == tmp2.__) {
      tmp2.__ = true;
      obj.sub(closure_27);
    }
    let __ = obj.props.value;
  } else {
    __ = arg0.__;
  }
  return __;
};
obj.useDebugValue = function V(arg0, arg1) {
  if (obj.useDebugValue) {
    let tmp2 = arg0;
    if (arg1) {
      tmp2 = arg1(arg0);
    }
    const debugValue = obj.useDebugValue(tmp2);
  }
};
obj.useEffect = function _(arg0, arg1) {
  let closure_26 = tmp + 1;
  const tmp2 = h(+closure_26, 3);
  let tmp3 = !obj.__s;
  if (tmp3) {
    tmp3 = C(tmp2.__H, arg1);
  }
  if (tmp3) {
    tmp2.__ = arg0;
    tmp2.i = arg1;
    const __h = closure_27.__H.__h;
    __h.push(tmp2);
  }
};
obj.useErrorBoundary = function b(arg0) {
  let closure_26 = tmp + 1;
  const tmp2 = h(+closure_26, 10);
  const require = tmp2;
  const tmp3 = fn();
  const dependencyMap = tmp3;
  tmp2.__ = arg0;
  if (!closure_27.componentDidCatch) {
    closure_27.componentDidCatch = (tmpResult) => {
      if (tmp2.__) {
        arg1.__(tmpResult, arg1);
      }
      tmp3[1](tmpResult);
    };
  }
  const items = [
    tmp3[0],
    () => {
      tmp3[1](undefined);
    }
  ];
  return items;
};
obj.useId = function g() {
  let closure_26 = tmp + 1;
  const tmp2 = h(+closure_26, 11);
  if (!tmp2.__) {
    const __v = closure_27.__v;
    let tmp5 = __v;
    if (null !== __v) {
      tmp5 = __v;
      if (!__v.__m) {
        let tmp6 = __v;
        tmp5 = __v;
        if (null !== __v.__) {
          const __ = tmp6.__;
          tmp5 = __;
          while (null !== __) {
            tmp5 = __;
            if (__.__m) {
              break;
            } else {
              tmp6 = __;
              tmp5 = __;
              if (null === __.__) {
                break;
              }
            }
          }
        }
      }
    }
    let __m = tmp5.__m;
    if (!__m) {
      const items = [];
      tmp5.__m = items;
      __m = items;
    }
    __m[1] = +__m[1] + 1;
    tmp2.__ = `P${__m[0]}-${+__m[1]}`;
  }
  return tmp2.__;
};
obj.useImperativeHandle = function T(arg0, arg1, arr) {
  const require = arg0;
  const dependencyMap = arg1;
  let closure_30 = 6;
  let combined = arr;
  if (null != arr) {
    combined = arr.concat(arg0);
  }
  A(() => {
    if ("function" === typeof arg0) {
      arg0(arg1());
      let fn = () => callback(null);
    } else if (arg0) {
      arg0.current = arg1();
      fn = () => {
        closure_0.current = null;
        return null;
      };
    }
    return fn;
  }, combined);
};
obj.useLayoutEffect = A;
obj.useMemo = fn3;
obj.useReducer = fn2;
obj.useRef = function F(arg0) {
  const require = arg0;
  let closure_30 = 5;
  return fn3(() => ({ current: arg0 }), []);
};
obj.useState = fn;
let closure_41 = Object.defineProperty(obj, Symbol.toStringTag, { value: "Module" });

export const buildFeedbackIntegration = function buildFeedbackIntegration(arg0) {
  ({ lazyLoadIntegration: closure_0, getModalIntegration: closure_1, getScreenshotIntegration: closure_2 } = arg0);
  return function feedbackIntegration() {
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let first = arguments[0];
      }
      const id = first.id;
      let str = "sentry-feedback";
      if (undefined !== id) {
        str = id;
      }
      const autoInject = first.autoInject;
      const showBranding = first.showBranding;
      const isEmailRequired = first.isEmailRequired;
      const isNameRequired = first.isNameRequired;
      const showEmail = first.showEmail;
      const showName = first.showName;
      const enableScreenshot = first.enableScreenshot;
      let useSentryUser = first.useSentryUser;
      if (undefined === useSentryUser) {
        useSentryUser = {};
      }
      const styleNonce = first.styleNonce;
      const scriptNonce = first.scriptNonce;
      const colorScheme = first.colorScheme;
      let str2 = "system";
      if (undefined !== colorScheme) {
        str2 = colorScheme;
      }
      let themeLight = first.themeLight;
      if (undefined === themeLight) {
        themeLight = {};
      }
      let themeDark = first.themeDark;
      if (undefined === themeDark) {
        themeDark = {};
      }
      const addScreenshotButtonLabel = first.addScreenshotButtonLabel;
      let str3 = "Add a screenshot";
      if (undefined !== addScreenshotButtonLabel) {
        str3 = addScreenshotButtonLabel;
      }
      const cancelButtonLabel = first.cancelButtonLabel;
      let str4 = "Cancel";
      if (undefined !== cancelButtonLabel) {
        str4 = cancelButtonLabel;
      }
      const confirmButtonLabel = first.confirmButtonLabel;
      let str5 = "Confirm";
      if (undefined !== confirmButtonLabel) {
        str5 = confirmButtonLabel;
      }
      const emailLabel = first.emailLabel;
      let str6 = "Email";
      if (undefined !== emailLabel) {
        str6 = emailLabel;
      }
      const emailPlaceholder = first.emailPlaceholder;
      let str7 = "your.email@example.org";
      if (undefined !== emailPlaceholder) {
        str7 = emailPlaceholder;
      }
      const formTitle = first.formTitle;
      let str8 = "Report a Bug";
      if (undefined !== formTitle) {
        str8 = formTitle;
      }
      const isRequiredLabel = first.isRequiredLabel;
      let str9 = "(required)";
      if (undefined !== isRequiredLabel) {
        str9 = isRequiredLabel;
      }
      const messageLabel = first.messageLabel;
      let str10 = "Description";
      if (undefined !== messageLabel) {
        str10 = messageLabel;
      }
      const messagePlaceholder = first.messagePlaceholder;
      let str11 = "What's the bug? What did you expect?";
      if (undefined !== messagePlaceholder) {
        str11 = messagePlaceholder;
      }
      const nameLabel = first.nameLabel;
      let str12 = "Name";
      if (undefined !== nameLabel) {
        str12 = nameLabel;
      }
      const namePlaceholder = first.namePlaceholder;
      let str13 = "Your Name";
      if (undefined !== namePlaceholder) {
        str13 = namePlaceholder;
      }
      const removeScreenshotButtonLabel = first.removeScreenshotButtonLabel;
      let str14 = "Remove screenshot";
      if (undefined !== removeScreenshotButtonLabel) {
        str14 = removeScreenshotButtonLabel;
      }
      const submitButtonLabel = first.submitButtonLabel;
      let str15 = "Send Bug Report";
      if (undefined !== submitButtonLabel) {
        str15 = submitButtonLabel;
      }
      const successMessageText = first.successMessageText;
      let str16 = "Thank you for your report!";
      if (undefined !== successMessageText) {
        str16 = successMessageText;
      }
      let triggerLabel = first.triggerLabel;
      if (undefined === triggerLabel) {
        triggerLabel = closure_10;
      }
      const triggerAriaLabel = first.triggerAriaLabel;
      let str17 = "";
      if (undefined !== triggerAriaLabel) {
        str17 = triggerAriaLabel;
      }
      const highlightToolText = first.highlightToolText;
      let str18 = "Highlight";
      if (undefined !== highlightToolText) {
        str18 = highlightToolText;
      }
      const hideToolText = first.hideToolText;
      let str19 = "Hide";
      if (undefined !== hideToolText) {
        str19 = hideToolText;
      }
      const removeHighlightText = first.removeHighlightText;
      let str20 = "Remove";
      if (undefined !== removeHighlightText) {
        str20 = removeHighlightText;
      }
      let obj = { id: str, autoInject: undefined === autoInject || autoInject, showBranding: undefined === showBranding || showBranding, isEmailRequired: undefined !== isEmailRequired && isEmailRequired, isNameRequired: undefined !== isNameRequired && isNameRequired, showEmail: undefined === showEmail || showEmail, showName: undefined === showName || showName, enableScreenshot: undefined === enableScreenshot || enableScreenshot, useSentryUser, tags: first.tags, styleNonce, scriptNonce, colorScheme: str2, themeDark, themeLight, triggerLabel, triggerAriaLabel: str17, cancelButtonLabel: str4, submitButtonLabel: str15, confirmButtonLabel: str5, formTitle: str8, emailLabel: str6, emailPlaceholder: str7, messageLabel: str10, messagePlaceholder: str11, nameLabel: str12, namePlaceholder: str13, successMessageText: str16, isRequiredLabel: str9, addScreenshotButtonLabel: str3, removeScreenshotButtonLabel: str14, highlightToolText: str18, hideToolText: str19, removeHighlightText: str20 };
      ({ onFormClose: obj5.onFormClose, onFormOpen: obj5.onFormOpen, onSubmitError: obj5.onSubmitError, onSubmitSuccess: obj5.onSubmitSuccess, onFormSubmitted: obj5.onFormSubmitted } = first);
      const callback = null;
      let closure_5 = [];
      function _createShadow(tmpResult) {
        let colorScheme;
        let styleNonce;
        let themeDark;
        if (!closure_4) {
          const element = <div />;
          const _String = String;
          element.id = String(tmpResult.id);
          const body = _attachTo.body;
          body.appendChild(element);
          const obj = { mode: "open" };
          const attachShadowResult = element.attachShadow(obj);
          closure_4 = attachShadowResult;
          ({ colorScheme, themeDark, styleNonce } = tmpResult);
          const element1 = <style />;
          let str4 = "";
          let str6 = "";
          if ("system" !== colorScheme) {
            const _HermesInternal = HermesInternal;
            str6 = "color-scheme: only " + colorScheme + ";";
          }
          if ("dark" === colorScheme) {
            const _Object2 = Object;
            let merged = Object.assign({}, closure_14, themeDark);
          } else {
            const _Object = Object;
            merged = Object.assign({}, closure_13, tmpResult.themeLight);
          }
          const tmp6Result = callback3(merged);
          if ("system" === colorScheme) {
            const _Object3 = Object;
            const _HermesInternal2 = HermesInternal;
            str4 = "\n@media (prefers-color-scheme: dark) {\n  :host {\n    color-scheme: only dark;\n\n    " + callback3(Object.assign({}, closure_14, themeDark)) + "\n  }\n}";
          }
          const _HermesInternal3 = HermesInternal;
          element1.textContent = "\n:host {\n  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;\n  --font-size: 14px;\n  --z-index: 100000;\n\n  --page-margin: 16px;\n  --inset: auto 0 0 auto;\n  --actor-inset: var(--inset);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  " + str6 + "\n\n  " + tmp6Result + "\n}\n\n" + str4 + "\n";
          if (styleNonce) {
            const attr = element1.setAttribute("nonce", styleNonce);
          }
          attachShadowResult.appendChild(element1);
          const tmp6 = callback3;
        }
        return closure_4;
      }
      let closure_7 = () => {
        let closure_0 = _null(async (arg0) => {
          let callback;
          const enableScreenshot = arg0.enableScreenshot;
          let tmp2 = enableScreenshot;
          if (enableScreenshot) {
            let obj = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            let isMatch = obj.test(closure_9.userAgent);
            if (!isMatch) {
              let maxTouchPoints = /Macintosh/i.test(closure_9.userAgent);
              if (maxTouchPoints) {
                maxTouchPoints = closure_9.maxTouchPoints;
              }
              if (maxTouchPoints) {
                maxTouchPoints = closure_9.maxTouchPoints > 1;
              }
              isMatch = maxTouchPoints;
              const obj2 = /Macintosh/i;
            }
            if (!isMatch) {
              isMatch = !globalThis.isSecureContext;
            }
            tmp2 = !isMatch;
          }
          if (callback) {
            const tmp15 = callback()();
            arg0(callback[5]).addIntegration(tmp15);
            let tmp20;
            if (tmp9) {
              if (callback2) {
                tmp20 = callback2();
              } else {
                const tmp24 = yield closure_0("feedbackScreenshotIntegration", closure_2);
                return tmp24;
              }
            }
            if (tmp20) {
              const tmp20Result = tmp20();
              arg0(callback[5]).addIntegration(tmp20Result);
              const obj5 = arg0(callback[5]);
              const tmp = tmp20Result;
            }
            obj = {};
            const _Object = Object;
            obj = {
              onFormClose() {
                  if (null != closure_1) {
                    closure_1.close();
                  }
                  if (null != arg0.onFormClose) {
                    arg0.onFormClose();
                  }
                },
              onFormSubmitted() {
                  if (null != closure_1) {
                    closure_1.close();
                  }
                  if (null != arg0.onFormSubmitted) {
                    arg0.onFormSubmitted();
                  }
                }
            };
            obj.options = Object.assign({}, arg0, obj);
            obj.screenshotIntegration = tmp;
            obj.sendFeedback = closure_11;
            obj.shadow = callback3(arg0);
            callback = tmp15.createDialog(obj);
            const obj3 = tmp15;
            const obj4 = arg0(callback[5]);
          } else {
            const tmp12 = yield closure_0("feedbackModalIntegration", closure_2);
            return tmp12;
          }
        });
        return function _loadAndRenderDialog(arg0) {
          return callback(...arguments);
        };
      }();
      function _attachTo(el, arg1) {
        if (arguments.length > 1) {
          const callback = tmp(tmp2, {});
          if ("string" === typeof el) {
            let element = _attachTo.querySelector(el);
          } else {
            element = null;
            if ("function" === typeof el.addEventListener) {
              element = el;
            }
          }
          const styleNonce = element;
          if (element) {
            let closure_2 = null;
            const tmp16 = () => {
              let closure_0 = unsubscribe(async () => {
                if (!closure_2) {
                  const _Object = Object;
                  const obj = { onFormSubmitted() { ... } };
                  closure_2 = yield closure_7(Object.assign({}, closure_0, obj));
                }
                closure_2.appendToDom();
                closure_2.open();
              });
              return function handleClick() {
                return callback(...arguments);
              };
            }();
            const listener = element.addEventListener("click", tmp16);
            function unsubscribe() {
              closure_5 = closure_5.filter((arg0) => arg0 !== closure_4);
              if (null != closure_2) {
                closure_2.removeFromDom();
              }
              closure_2 = null;
              const removed = element.removeEventListener("click", tmp16);
            }
            let closure_4 = unsubscribe;
            const arr = arr.push(unsubscribe);
            return unsubscribe;
          } else {
            if (closure_12) {
              const debug = callback(styleNonce[5]).debug;
              debug.error("[Feedback] Unable to attach to target element");
            }
            const _Error = Error;
            const error = new Error("Unable to attach to target element");
            throw error;
          }
        }
      }
      function _createActor() {
        if (arguments.length > 0) {
          if (undefined !== arguments[0]) {
            const first = arguments[0];
          }
          const tmpResult = tmp(tmp2, {});
          let obj = {};
          ({ triggerLabel: obj.triggerLabel, triggerAriaLabel: obj.triggerAriaLabel } = tmpResult);
          obj.shadow = _createShadow(tmpResult);
          obj.styleNonce = styleNonce;
          const tmp8 = callback2(obj);
          let closure_0 = tmp8;
          const _Object = Object;
          obj = {
            onFormOpen() {
                tmp8.hide();
              },
            onFormClose() {
                tmp8.show();
              },
            onFormSubmitted() {
                tmp8.show();
              }
          };
          _attachTo(tmp8.el, Object.assign({}, tmpResult, obj));
          return tmp8;
        }
      }
      obj = {
        name: "Feedback",
        setupOnce() {
            const obj = callback(styleNonce[5]);
            let autoInject = obj.isBrowser();
            if (autoInject) {
              autoInject = obj.autoInject;
            }
            if (autoInject) {
              if ("loading" === _attachTo.readyState) {
                const listener = _attachTo.addEventListener("DOMContentLoaded", () => callback().appendToDom());
              } else {
                _createActor().appendToDom();
                const obj2 = _createActor();
              }
            }
          },
        attachTo: _attachTo,
        createWidget() {
            if (arguments.length > 0) {
              if (undefined !== arguments[0]) {
                const first = arguments[0];
              }
              const tmpResult = tmp(tmp2(tmp3, {}));
              tmpResult.appendToDom();
              return tmpResult;
            }
          }
      };
      let closure_0 = callback(async () => {
        if (obj) {
          return obj.resume();
        } else {
          if (arguments.length > 0) {
            if (undefined !== arguments[0]) {
              let first = arguments[0];
            }
            return tmp(tmp2(tmp3, first));
          }
          first = {};
        }
      });
      obj.createForm = function createForm() {
        return callback(...arguments);
      };
      obj.remove = function remove() {
        if (_null) {
          const parentElement = _null.parentElement;
          if (null != parentElement) {
            parentElement.remove();
          }
          const _null = null;
        }
        const item = arr.forEach((arg0) => arg0());
      };
      return obj;
    }
    first = {};
  };
};
export const feedbackModalIntegration = function feedbackModalIntegration() {
  return {
    name: "FeedbackModal",
    setupOnce() {

    },
    createDialog(options) {
      let screenshotIntegration;
      options = options.options;
      ({ screenshotIntegration, sendFeedback: closure_1, shadow: closure_2 } = options);
      const useSentryUser = options.useSentryUser;
      let obj = options(closure_1[5]);
      const currentScope = obj.getCurrentScope();
      let user = currentScope.getUser();
      const isolationScope = options(closure_1[5]).getIsolationScope();
      const user1 = isolationScope.getUser();
      const obj3 = options(closure_1[5]);
      const globalScope = options(closure_1[5]).getGlobalScope();
      const user2 = globalScope.getUser();
      if (!user) {
        let tmp5 = user2;
        if (user1) {
          const _Object2 = Object;
          tmp5 = user2;
          if (Object.keys(user1).length) {
            tmp5 = user1;
          }
        }
        user = tmp5;
      } else {
        const _Object = Object;
      }
      let closure_5 = <div />;
      const styleNonce = options.styleNonce;
      const element = <style />;
      element.textContent = "\n:host {\n  --dialog-inset: var(--inset);\n}\n\n\n.dialog {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: 0;\n  inset: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n\n  color: var(--dialog-color, var(--foreground));\n  fill: var(--dialog-color, var(--foreground));\n  line-height: 1.75em;\n\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  inset: 0;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog__position {\n  position: fixed;\n  z-index: var(--z-index);\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  display: flex;\n  max-height: calc(100vh - (2 * var(--page-margin)));\n}\n@media (max-width: 600px) {\n  .dialog__position {\n    inset: var(--page-margin);\n    padding: 0;\n  }\n}\n\n.dialog__position:has(.editor) {\n  inset: var(--page-margin);\n  padding: 0;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: var(--dialog-padding, 24px);\n  max-width: 100%;\n  width: 100%;\n  max-height: 100%;\n  overflow: auto;\n\n  background: var(--dialog-background, var(--background));\n  border-radius: var(--dialog-border-radius, 20px);\n  border: var(--dialog-border, var(--border));\n  box-shadow: var(--dialog-box-shadow, var(--box-shadow));\n  transform: translate(0, 0) scale(1);\n  transition: transform 0.2s ease-in-out;\n}\n\n\n\n.dialog__header {\n  display: flex;\n  gap: 4px;\n  justify-content: space-between;\n  font-weight: var(--dialog-header-weight, 600);\n  margin: 0;\n}\n.dialog__title {\n  align-self: center;\n  width: var(--form-width, 272px);\n}\n\n@media (max-width: 600px) {\n  .dialog__title {\n    width: auto;\n  }\n}\n\n.dialog__position:has(.editor) .dialog__title {\n  width: auto;\n}\n\n\n.brand-link {\n  display: inline-flex;\n}\n.brand-link:focus-visible {\n  outline: var(--outline);\n}\n\n\n.form {\n  display: flex;\n  overflow: auto;\n  flex-direction: row;\n  gap: 16px;\n  flex: 1 0;\n}\n\n.form fieldset {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n.form__right {\n  flex: 0 0 auto;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  width: var(--form-width, 100%);\n}\n\n.dialog__position:has(.editor) .form__right {\n  width: var(--form-width, 272px);\n}\n\n.form__top {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form__error-container {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background: transparent;\n  box-sizing: border-box;\n  border: var(--input-border, var(--border));\n  border-radius: var(--input-border-radius, 6px);\n  color: var(--input-color, inherit);\n  fill: var(--input-color, inherit);\n  font-size: var(--input-font-size, inherit);\n  font-weight: var(--input-font-weight, 500);\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  opacity: 0.65;\n  color: var(--input-placeholder-color, inherit);\n  filter: var(--interactive-filter);\n}\n\n.form__input:focus-visible {\n  outline: var(--input-focus-outline, var(--outline));\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.error {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--button-font-size, inherit);\n  font-weight: var(--button-font-weight, 600);\n  padding: var(--button-padding, 6px 16px);\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  color: var(--button-primary-color, var(--accent-foreground));\n  fill: var(--button-primary-color, var(--accent-foreground));\n  background: var(--button-primary-background, var(--accent-background));\n  border: var(--button-primary-border, var(--border));\n  border-radius: var(--button-primary-border-radius, 6px);\n  font-weight: var(--button-primary-font-weight, 500);\n}\n.btn--primary:hover {\n  color: var(--button-primary-hover-color, var(--accent-foreground));\n  fill: var(--button-primary-hover-color, var(--accent-foreground));\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n}\n.btn--primary:focus-visible {\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n  outline: var(--button-primary-focus-outline, var(--outline));\n}\n\n.btn--default {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-background, var(--background));\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  font-weight: var(--button-font-weight, 500);\n}\n.btn--default:hover {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n.btn--default:focus-visible {\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n  outline: var(--button-focus-outline, var(--outline));\n}\n\n\n.success__position {\n  position: fixed;\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  z-index: var(--z-index);\n}\n.success__content {\n  background: var(--success-background, var(--background));\n  border: var(--success-border, var(--border));\n  border-radius: var(--success-border-radius, 1.7em/50%);\n  box-shadow: var(--success-box-shadow, var(--box-shadow));\n  font-weight: var(--success-font-weight, 600);\n  color: var(--success-color);\n  fill: var(--success-color);\n  padding: 12px 24px;\n  line-height: 1.75em;\n\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success__icon {\n  display: flex;\n}\n\n";
      if (styleNonce) {
        const attr = element.setAttribute("nonce", styleNonce);
      }
      let closure_7 = "";
      obj = {};
      Object.defineProperty(obj, "el", { get: () => closure_5, set: undefined });
      obj.appendToDom = function appendToDom() {
        let hasItem = closure_2.contains(element);
        if (!hasItem) {
          hasItem = closure_2.contains(closure_5);
        }
        if (!hasItem) {
          closure_2.appendChild(element);
          closure_2.appendChild(closure_5);
        }
      };
      obj.removeFromDom = function removeFromDom() {
        closure_5.remove();
        element.remove();
        input.body.style.overflow = closure_7;
      };
      obj.open = function open() {
        renderContent(true);
        if (null != options.onFormOpen) {
          options.onFormOpen();
        }
        const client = options(closure_1[5]).getClient();
        if (null != client) {
          client.emit("openFeedbackWidget");
        }
        const overflow = input.body.style.overflow;
        input.body.style.overflow = "hidden";
      };
      obj.close = function close() {
        renderContent(false);
        input.body.style.overflow = closure_7;
      };
      let input;
      if (null != screenshotIntegration) {
        obj = { h: closure_48, hooks: closure_41 };
        obj.dialog = obj;
        obj.options = options;
        input = screenshotIntegration.createInput(obj);
      }
      function renderContent(open) {
        const obj = { options, screenshotInput: input };
        let isNameRequired = options.showName;
        if (!isNameRequired) {
          isNameRequired = options.isNameRequired;
        }
        obj.showName = isNameRequired;
        let isEmailRequired = options.showEmail;
        if (!isEmailRequired) {
          isEmailRequired = options.isEmailRequired;
        }
        obj.showEmail = isEmailRequired;
        let str = useSentryUser;
        if (useSentryUser) {
          let tmp7;
          if (null != user) {
            tmp7 = user[closure_3.name];
          }
          str = tmp7;
        }
        if (!str) {
          str = "";
        }
        obj.defaultName = String(str);
        let str2 = useSentryUser;
        if (useSentryUser) {
          let tmp12;
          if (null != user) {
            tmp12 = user[closure_3.email];
          }
          str2 = tmp12;
        }
        if (!str2) {
          str2 = "";
        }
        obj.defaultEmail = String(str2);
        obj.onFormClose = function onFormClose() {
          callback(false);
          if (null != closure_0.onFormClose) {
            closure_0.onFormClose();
          }
        };
        obj.onSubmit = closure_1;
        obj.onSubmitSuccess = function onSubmitSuccess(arg0, arg1) {
          callback(false);
          if (null != closure_0.onSubmitSuccess) {
            closure_0.onSubmitSuccess(arg0, arg1);
          }
        };
        obj.onSubmitError = function onSubmitError(arg0) {
          if (null != closure_0.onSubmitError) {
            closure_0.onSubmitError(arg0);
          }
        };
        obj.onFormSubmitted = function onFormSubmitted() {
          if (null != closure_0.onFormSubmitted) {
            closure_0.onFormSubmitted();
          }
        };
        obj.open = open;
        const tmpResult = callback2(closure_87, obj);
        if (closure_16.__) {
          closure_16.__(tmpResult, tmp16);
        }
        const __k = tmp16.__k;
        const items = [];
        const items1 = [];
        const items2 = [tmpResult];
        const tmp20 = callback2(closure_50, null, items2);
        closure_5.__k = tmp20;
        let tmp21 = __k;
        if (!__k) {
          tmp21 = closure_22;
        }
        let tmp23 = null;
        if (!__k) {
          let callResult = null;
          if (tmp16.firstChild) {
            callResult = callback.call(tmp16.childNodes);
          }
          tmp23 = callResult;
        }
        closure_64(closure_5, tmp20, tmp21, closure_22, undefined !== closure_5.ownerSVGElement, tmp23, items, __k ? __k.__e : closure_5.firstChild, false, items1);
        tmp20.__d = undefined;
        callback3(items, tmp20, items1);
      }
      return obj;
    }
  };
};
export const feedbackScreenshotIntegration = function feedbackScreenshotIntegration() {
  return {
    name: "FeedbackScreenshot",
    setupOnce() {

    },
    createInput(arg0) {
      let dialog;
      let h;
      let hooks;
      let options;
      ({ h, hooks, dialog, options } = arg0);
      const element = <canvas />;
      const obj = { input: callback2({ h, hooks, outputBuffer: element, dialog, options }) };
      let closure_0 = callback(async () => {
        let obj = yield new Promise((arg0) => {
          closure_1.toBlob(arg0, "image/png");
        });
        if (obj) {
          obj = {};
          let _Uint8Array = Uint8Array;
          const tmp = yield obj.arrayBuffer();
          const prototype = _Uint8Array.prototype;
          _Uint8Array = new _Uint8Array(tmp);
          obj.data = _Uint8Array;
          return obj;
        }
      });
      obj.value = function value() {
        return callback(...arguments);
      };
      return obj;
    }
  };
};
export const getFeedback = function getFeedback() {
  let integrationByName;
  const client = require(dependencyMap[5]).getClient();
  if (null != client) {
    integrationByName = client.getIntegrationByName("Feedback");
  }
  return integrationByName;
};
export { sendFeedback };
