// Module ID: 694
// Function ID: 8503
// Name: _createForOfIteratorHelperLoose
// Dependencies: [2]

// Module 694 (_createForOfIteratorHelperLoose)
import set from "set";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    _arrayLikeToArray = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 2147483647;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 2147483647;
    }
  }
};
let obj = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 2147483647;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 2147483647;
    }
  }
};
obj = {
  resolve(density) {
    density = density.density;
    if ("compact" === density) {
      return 20;
    } else {
      if ("default" !== density) {
        if ("cozy" === density) {
          return 28;
        }
      }
      return 24;
    }
  }
};
set = {
  resolve() {
    return 0.15;
  }
};
set = {
  resolve() {
    return 8;
  }
};
set = {
  resolve() {
    return 6;
  }
};
set = {
  resolve() {
    return 0.4;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "heading-md/bold";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "heading-lg/semibold";
      }
      return "heading-md/bold";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 1;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 8;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 4;
      }
      return 8;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 12;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 12;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 12;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 12;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 2147483647;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 2147483647;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-md/medium";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-md/normal";
      }
      return "text-md/medium";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-sm/medium";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-md/normal";
      }
      return "text-sm/medium";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-xs/medium";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-xs/normal";
      }
      return "text-xs/medium";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 12;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 12;
    }
  }
};
set = {
  resolve() {
    return 40;
  }
};
set = {
  resolve() {
    return 20;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 12;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 12;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 2147483647;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 2147483647;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 1;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 24;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 0;
      }
      return 24;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 4;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "icon-default";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "icon-default";
      }
      return "icon-default";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 4;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-default";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-default";
      }
      return "text-default";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-xs/semibold";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-xs/medium";
      }
      return "text-xs/semibold";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 8;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 8;
    }
  }
};
set = {
  resolve() {
    return "row";
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 8;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 8;
    }
  }
};
set = {
  resolve() {
    return 32;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "redesign/channel-title/semibold";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-md/medium";
      }
      return "redesign/channel-title/semibold";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 8;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 8;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 15;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh-floating" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 24;
      }
      return 15;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh-floating" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 24;
      }
      return 0;
    }
  }
};
set = {
  resolve() {
    return 288;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 24;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 24;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 24;
      }
      return 16;
    }
  }
};
set = {
  resolve() {
    return 4;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 12;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 24;
      }
      return 12;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 4;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 4;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 32;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 36;
      }
      return 32;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 0;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 14;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 8;
      }
      return 14;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 8;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 8;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 36;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 32;
      }
      return 36;
    }
  }
};
set = {
  resolve() {
    return 56;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-sm/medium";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-sm/normal";
      }
      return "text-sm/medium";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 60;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 56;
      }
      return 60;
    }
  }
};
set = {
  resolve() {
    return 32;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "mobile-text-heading-primary";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-strong";
      }
      return "mobile-text-heading-primary";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-md/semibold";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-md/medium";
      }
      return "text-md/semibold";
    }
  }
};
set = {
  resolve() {
    return 12;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 22;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 22;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return -6;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return -4;
      }
      return -6;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-xxs/semibold";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-xs/medium";
      }
      return "text-xxs/semibold";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-sm/semibold";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-sm/medium";
      }
      return "text-sm/semibold";
    }
  }
};
set = {
  resolve() {
    return 16;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 22;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 20;
      }
      return 22;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 1;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 14;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 13;
      }
      return 14;
    }
  }
};
set = {
  resolve() {
    return 17;
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return "text-sm/semibold";
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return "text-xs/semibold";
      }
      return "text-sm/semibold";
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 10;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 6;
      }
      return 10;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 32;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 32;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 16;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 4;
      }
      return 16;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 0;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 64;
      }
      return 0;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 12;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 12;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 12;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 12;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 24;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 12;
      }
      return 24;
    }
  }
};
set = {
  resolve(enabledExperiments) {
    enabledExperiments = enabledExperiments.enabledExperiments;
    if (0 === enabledExperiments.length) {
      return 28;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
      let iter = tmp2();
      if (!iter.done) {
        while ("mobile-visual-refresh" !== iter.value) {
          let iter2 = tmp2();
          iter = iter2;
        }
        return 16;
      }
      return 28;
    }
  }
};
set = {
  resolve() {
    return 24;
  }
};
set = {
  resolve() {
    return 16;
  }
};
set = {
  resolve() {
    return 800;
  }
};
set = {
  resolve() {
    return 602;
  }
};
set = {
  resolve() {
    return 442;
  }
};
set = {
  resolve() {
    return 248;
  }
};
set = {
  resolve() {
    return 40;
  }
};
const result = set.fileFinishedImporting("../discord_common/js/packages/tokens/modules/generated/generated-definitions.tsx");

export const _private = {
  Modules: {
    button: { BORDER_RADIUS: set, BORDER_RADIUS_LG: obj },
    channels: {
      NAME_LINE_HEIGHT: obj,
      SPINE_INVERTED_OFFSET_TOP: {
        resolve(density) {
          density = density.density;
          if ("compact" === density) {
            return 2;
          } else {
            if ("default" !== density) {
              if ("cozy" === density) {
                return 9;
              }
            }
            return 6;
          }
        }
      },
      SPINE_OFFSET_LEFT: {
        resolve(density) {
          density = density.density;
          if ("compact" === density) {
            return 20;
          } else {
            if ("default" !== density) {
              if ("cozy" === density) {
                return 28;
              }
            }
            return 24;
          }
        }
      }
    },
    chat: {
      AVATAR_SIZE: {
        resolve() {
          return 40;
        }
      },
      INPUT_ICON_SIZE: {
        resolve() {
          return 20;
        }
      },
      MARKUP_LINE_HEIGHT: {
        resolve() {
          return "1.375rem";
        }
      },
      RESIZE_HANDLE_WIDTH: {
        resolve() {
          return 8;
        }
      }
    },
    control: {
      INPUT_HEIGHT_MD: {
        resolve() {
          return 40;
        }
      },
      INPUT_HEIGHT_SM: {
        resolve() {
          return 32;
        }
      },
      ITEM_HEIGHT_MD: {
        resolve() {
          return 40;
        }
      },
      ITEM_HEIGHT_SM: {
        resolve() {
          return 32;
        }
      }
    },
    form: {
      INPUT_HEIGHT: {
        resolve() {
          return 44;
        }
      }
    },
    guildbar: {
      AVATAR_SIZE: {
        resolve(arg0) {
          let density;
          let enabledExperiments;
          ({ enabledExperiments, density } = arg0);
          if (0 === enabledExperiments.length) {
            return 40;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("refresh-fast-follow-avatars" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              if ("compact" !== density) {
                return 44;
              }
              return 40;
            }
            return 40;
          }
        }
      },
      FOLDER_SIZE: {
        resolve(arg0) {
          let density;
          let enabledExperiments;
          ({ enabledExperiments, density } = arg0);
          if (0 === enabledExperiments.length) {
            return 48;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("refresh-fast-follow-avatars" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              if ("compact" !== density) {
                return 52;
              }
              return 48;
            }
            return 48;
          }
        }
      }
    },
    icon: {
      SIZE_LG: {
        resolve() {
          return 32;
        }
      },
      SIZE_MD: {
        resolve() {
          return 24;
        }
      },
      SIZE_SM: {
        resolve() {
          return 18;
        }
      },
      SIZE_XS: {
        resolve() {
          return 16;
        }
      },
      SIZE_XXS: {
        resolve() {
          return 12;
        }
      }
    },
    mobile: {
      BOUNTY_TILE_BORDER_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 24;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 12;
            }
            return 24;
          }
        }
      },
      CARD_DEFAULT_RADIUS: {
        resolve() {
          return 16;
        }
      },
      CHANNEL_DETAILS_NAV_BUTTONS_GAP: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 12;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 12;
          }
        }
      },
      CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "sm";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "lg";
            }
            return "sm";
          }
        }
      },
      CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "tertiary";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "icon-only";
            }
            return "tertiary";
          }
        }
      },
      CHANNEL_DRAWER_CORNER_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 8;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 8;
          }
        }
      },
      CHANNEL_DRAWER_DIVIDER_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 1;
            }
            return 0;
          }
        }
      },
      CHANNEL_DRAWER_SPACING: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 8;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 8;
          }
        }
      },
      CHANNEL_HEADER_ICON_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "md";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "xs";
            }
            return "md";
          }
        }
      },
      CHANNEL_ITEM_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 12;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 12;
          }
        }
      },
      CHANNEL_LIST_SUBTITLE_TEXT_STYLE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "text-xs/medium";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "text-sm/medium";
            }
            return "text-xs/medium";
          }
        }
      },
      CHANNEL_LIST_TITLE_TEXT_STYLE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "redesign/heading-18/bold";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "heading-lg/semibold";
            }
            return "redesign/heading-18/bold";
          }
        }
      },
      CHANNEL_NAME_CHANNEL_BORDER_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 1;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 1;
          }
        }
      },
      CHANNEL_NAME_CHANNEL_ICON_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 12;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 12;
          }
        }
      },
      CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "background-base-low";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "background-base-lower";
            }
            return "background-base-low";
          }
        }
      },
      CHAT_INPUT_ACTION_BUTTON_GAP: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              const value = iter.value;
              while ("mobile-visual-refresh" !== value) {
                if ("mobile-visual-refresh-legacy-send-button" === value) {
                  break;
                } else if ("mobile-visual-refresh-floating" === value) {
                  let num = 10;
                  return 10;
                } else {
                  let iter2 = tmp2();
                  iter = iter2;
                }
              }
              return 8;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_ACTION_BUTTON_MARGIN: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 4;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 4;
          }
        }
      },
      CHAT_INPUT_ACTION_BUTTON_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 40;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 32;
            }
            return 40;
          }
        }
      },
      CHAT_INPUT_ACTION_ICON_ACTIVE_TINT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "text-brand";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "icon-strong";
            }
            return "text-brand";
          }
        }
      },
      CHAT_INPUT_ACTION_ICON_PIXEL_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 24;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 20;
            }
            return 24;
          }
        }
      },
      CHAT_INPUT_BORDER_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 24;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 24;
          }
        }
      },
      CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE: {
        resolve() {
          return 44;
        }
      },
      CHAT_INPUT_COMMAND_CATEGORIES_BORDER_TOP_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 1;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 8;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 8;
          }
        }
      },
      CHAT_INPUT_CONTEXT_BAR_GAP: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 12;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_EXPRESSION_OFFSET_LEFT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 6;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 12;
            }
            return 6;
          }
        }
      },
      CHAT_INPUT_EXPRESSION_OFFSET_TOP: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 6;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 10;
            }
            return 6;
          }
        }
      },
      CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 1;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_BOTTOM: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_ACCESSORY_MARGIN_HORIZONTAL: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_ACCESSORY_PADDING_TOP: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 4;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 4;
          }
        }
      },
      CHAT_INPUT_FLOATING_ACCESSORY_TOP_BORDER_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 1;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 1;
          }
        }
      },
      CHAT_INPUT_FLOATING_BORDER_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_CONTENT_GAP: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              const value = iter.value;
              while ("mobile-visual-refresh-floating" !== value) {
                if ("mobile-visual-refresh-legacy-send-button" === value) {
                  let num = 12;
                  return 12;
                } else {
                  let iter2 = tmp2();
                  iter = iter2;
                }
              }
              return 10;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              const value = iter.value;
              while ("mobile-visual-refresh-floating" !== value) {
                if ("mobile-visual-refresh-legacy-send-button" === value) {
                  let num = 12;
                  return 12;
                } else {
                  let iter2 = tmp2();
                  iter = iter2;
                }
              }
              return 10;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_INLINE_FULL_GRADIENT_HEIGHT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 20;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_OFFSET_MINIMUM: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 56;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT_AT_BOTTOM: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 36;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_SCRIM_OFFSET_TOP: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 24;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_FLOATING_TYPING_GRADIENT_HEIGHT_REDUCED: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 12;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_ICON_DEFAULT_TINT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "interactive-text-default";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "interactive-icon-default";
            }
            return "interactive-text-default";
          }
        }
      },
      CHAT_INPUT_ICON_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return "medium";
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return "small20";
            }
            return "medium";
          }
        }
      },
      CHAT_INPUT_PILL_BORDER_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 1;
            }
            return 0;
          }
        }
      },
      CHAT_INPUT_PILL_MARGIN_HORIZONTAL: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 4;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 4;
          }
        }
      },
      CHAT_INPUT_PILL_PADDING: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 2;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 2;
          }
        }
      },
      CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 4;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 0;
            }
            return 4;
          }
        }
      },
      CHAT_INPUT_REPLY_MENTION_ICON_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 20;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh-floating" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 20;
          }
        }
      },
      CHAT_INPUT_SEND_BUTTON_HEIGHT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 40;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              const value = iter.value;
              while ("mobile-visual-refresh" !== value) {
                if ("mobile-visual-refresh-legacy-send-button" === value) {
                  break;
                } else if ("mobile-visual-refresh-floating" === value) {
                  let num = 36;
                  return 36;
                } else {
                  let iter2 = tmp2();
                  iter = iter2;
                }
              }
              return 32;
            }
            return 40;
          }
        }
      },
      CHAT_INPUT_SEND_BUTTON_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 40;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              const value = iter.value;
              while ("mobile-visual-refresh" !== value) {
                if ("mobile-visual-refresh-floating" === value) {
                  let num2 = 36;
                  return 36;
                } else if ("mobile-visual-refresh-legacy-send-button" === value) {
                  let num = 40;
                  return 40;
                } else {
                  let iter2 = tmp2();
                  iter = iter2;
                }
              }
              return 32;
            }
            return 40;
          }
        }
      },
      COACHMARK_BODY_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 260;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 240;
            }
            return 260;
          }
        }
      },
      COACHMARK_BUTTON_SPACING: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 12;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 12;
          }
        }
      },
      CONTROL_CHECKBOX_BORDER_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 8;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 4;
            }
            return 8;
          }
        }
      },
      CONTROL_CHECKBOX_BORDER_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 2;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 1.2;
            }
            return 2;
          }
        }
      },
      CONTROL_CHECKBOX_SIZE_DEFAULT: {
        resolve() {
          return 24;
        }
      },
      CONTROL_RADIO_ICON_BORDER_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 2;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 1.2;
            }
            return 2;
          }
        }
      },
      CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 10;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 10;
          }
        }
      },
      CONTROL_RADIO_ICON_SIZE_DEFAULT: {
        resolve() {
          return 24;
        }
      },
      CONTROL_SWITCH_HEIGHT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 32;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 28;
            }
            return 32;
          }
        }
      },
      CONTROL_SWITCH_KNOB_CHECKED_OFFSET: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 16;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 28;
            }
            return 16;
          }
        }
      },
      CONTROL_SWITCH_KNOB_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 24;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 20;
            }
            return 24;
          }
        }
      },
      CONTROL_SWITCH_WIDTH: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 48;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 56;
            }
            return 48;
          }
        }
      },
      EMOJI_ROW_EMOJI_CONTAINER_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 48;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 48;
            }
            return 48;
          }
        }
      },
      EMOJI_ROW_EMOJI_FONT_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 28;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 22;
            }
            return 28;
          }
        }
      },
      EMOJI_ROW_EMOJI_LINE_HEIGHT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 33;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 28;
            }
            return 33;
          }
        }
      },
      EMOJI_ROW_EMOJI_MIN_SPACING: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 12;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 12;
            }
            return 12;
          }
        }
      },
      EMOJI_ROW_EMOJI_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 28;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 24;
            }
            return 28;
          }
        }
      },
      GIFTING_SETTINGS_PADDING_HORIZONTAL: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 0;
          }
        }
      },
      GROUP_AVATAR_SIZE: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 72;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 64;
            }
            return 72;
          }
        }
      },
      GUILD_BAR_ITEM_MARGIN: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 4;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 6;
            }
            return 4;
          }
        }
      },
      GUILD_BAR_ITEM_PADDING: {
        resolve() {
          return 8;
        }
      },
      GUILD_BAR_ITEM_SIZE: {
        resolve() {
          return 48;
        }
      },
      GUILD_FOLDER_BACKGROUND_LEFT: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 12;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 12;
          }
        }
      },
      GUILD_FOLDER_BACKGROUND_RADIUS: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 2147483647;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 16;
            }
            return 2147483647;
          }
        }
      },
      GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET: {
        resolve(enabledExperiments) {
          enabledExperiments = enabledExperiments.enabledExperiments;
          if (0 === enabledExperiments.length) {
            return 0;
          } else {
            const tmp2 = _createForOfIteratorHelperLoose(enabledExperiments);
            let iter = tmp2();
            if (!iter.done) {
              while ("mobile-visual-refresh" !== iter.value) {
                let iter2 = tmp2();
                iter = iter2;
              }
              return 8;
            }
            return 0;
          }
        }
      },
      GUILD_FOLDER_COLOR_OPACITY: set,
      GUILD_FOLDER_PADDING: set,
      GUILD_FOLDER_PREVIEW_ICON_MARGIN: set,
      GUILD_FOLDER_PREVIEW_OPACITY: set,
      GUILD_ITEM_SELECTED_BORDER_RADIUS: set,
      HEADER_TITLE_TEXT_STYLE: set,
      INPUT_FIELD_BORDER_WIDTH: set,
      INPUT_FIELD_PADDING_VERTICAL_SM_IOS: set,
      INPUT_FIELD_RADIUS_LG: set,
      INPUT_FIELD_RADIUS_MD: set,
      INPUT_FIELD_RADIUS_SM: set,
      INPUT_FIELD_ROUND_RADIUS: set,
      INPUT_FIELD_TEXT_STYLE_LG: set,
      INPUT_FIELD_TEXT_STYLE_MD: set,
      INPUT_FIELD_TEXT_STYLE_SM: set,
      JUMP_TO_PRESENT_BOTTOM_SPACING: set,
      JUMP_TO_PRESENT_BUTTON_SIZE: set,
      JUMP_TO_PRESENT_ICON_SIZE: set,
      JUMP_TO_PRESENT_RIGHT_SPACING: set,
      MEDIA_KEYBOARD_BAR_BORDER_RADIUS: set,
      MEDIA_KEYBOARD_BAR_BORDER_WIDTH: set,
      MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL: set,
      MEDIA_KEYBOARD_BAR_GAP: set,
      MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL: set,
      MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL: set,
      MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS: set,
      MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE: set,
      MEDIA_KEYBOARD_BUTTON_PADDING: set,
      MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE: set,
      MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT: set,
      MEDIA_KEYBOARD_SEND_VERTICAL_INSET: set,
      MESSAGES_HEADER_BUTTON_GAP: set,
      MESSAGES_HEADER_BUTTON_LAYOUT: set,
      MESSAGES_HEADER_PADDING_BOTTOM: set,
      MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END: set,
      MESSAGES_ITEM_CHANNEL_AVATAR_SIZE: set,
      MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE: set,
      MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM: set,
      MOBILE_KEYBOARD_TOP_BORDER_RADIUS: set,
      MOBILE_MEDIA_KEYBOARD_TOP_BORDER_RADIUS: set,
      PROMO_SHEET_GRAPHIC_MAX_WIDTH: set,
      QUEST_DOCK_BORDER_RADIUS: set,
      SEGMENTED_CONTROL_BORDER_RADIUS: set,
      SETTINGS_PADDING_TOP: set,
      SHEET_HANDLE_HEIGHT: set,
      SHEET_HANDLE_MARGIN_BOTTOM: set,
      SHEET_HANDLE_MARGIN_TOP: set,
      SHEET_HANDLE_WIDTH: set,
      SHEET_HEADER_PADDING_HORIZONTAL: set,
      TABLE_ROW_ARROW_MARGIN_END: set,
      TABLE_ROW_ARROW_MARGIN_START: set,
      TABLE_ROW_ARROW_WIDTH: set,
      TABLE_ROW_BORDER_RADIUS: set,
      TABLE_ROW_CONTENT_HEIGHT: set,
      TABLE_ROW_DIVIDER_PADDING: set,
      TABLE_ROW_GROUP_HELPER_TEXT_STYLE: set,
      TABLE_ROW_HEIGHT: set,
      TABLE_ROW_ICON_SIZE: set,
      TABLE_ROW_LABEL_COLOR: set,
      TABLE_ROW_LABEL_TEXT_STYLE: set,
      TABLE_ROW_PADDING: set,
      TAB_BAR_UNREAD_BADGE_SIZE: set,
      TAB_LABEL_MARGIN_TOP: set,
      TAB_LABEL_TEXT_STYLE: set,
      USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE: set,
      USER_ROW_LABEL_LINE_HEIGHT_ANDROID: set,
      USER_ROW_LABEL_LINE_HEIGHT_IOS: set,
      VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH: set,
      VOICE_MESSAGE_DURATION_LINE_HEIGHT_ANDROID: set,
      VOICE_MESSAGE_DURATION_LINE_HEIGHT_IOS: set,
      VOICE_MESSAGE_DURATION_TEXT_STYLE: set,
      VOICE_MESSAGE_RECORDING_CONTAINER_PADDING_VERTICAL: set,
      VOICE_PANEL_CONTROLS_BORDER_RADIUS: set,
      VOICE_PANEL_CONTROLS_PADDING: set,
      VOICE_PANEL_DISCONNECT_BUTTON_MIN_WIDTH: set,
      VOICE_PANEL_GUTTER: set,
      VOICE_PANEL_PADDING: set,
      VOICE_TILE_BORDER_RADIUS: set,
      YOU_BAR_BORDER_RADIUS: set
    },
    modal: { HORIZONTAL_PADDING: set, VERTICAL_PADDING: set, WIDTH_LARGE: set, WIDTH_MEDIUM: set, WIDTH_SMALL: set },
    select: { MAX_WIDTH: set, OPTION_HEIGHT: set }
  }
};
