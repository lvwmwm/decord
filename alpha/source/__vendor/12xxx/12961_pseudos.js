// Module ID: 12961
// Function ID: 12962
// Name: pseudos
// Dependencies: []
// Exports: verifyPseudoArgs

// Module 12961 (pseudos)

export const pseudos = {
  empty(arg0, adapter) {
    adapter = adapter.adapter;
    const children = adapter.getChildren(arg0);
    return !children.some((item) => {
      let isTagResult = adapter.isTag(item);
      const obj = adapter;
      if (!isTagResult) {
        isTagResult = "" !== obj.getText(item);
      }
      return isTagResult;
    });
  },
  "first-child": (prev, adapter) => {
    adapter = adapter.adapter;
    if (adapter.prevElementSibling) {
      return null == adapter.prevElementSibling(prev);
    } else {
      const siblings = adapter.getSiblings(prev);
      const found = siblings.find((item) => adapter.isTag(item));
      const tmpResult = null != found && tmp(prev, found);
      return tmpResult;
    }
  },
  "last-child": (arg0, arg1) => {
    let adapter;
    let equals;
    ({ adapter, equals } = arg1);
    const siblings = adapter.getSiblings(arg0);
    let diff = siblings.length - 1;
    if (0 <= diff) {
      while (!equals(arg0, siblings[diff])) {
        if (!adapter.isTag(siblings[diff])) {
          diff = diff - 1;
        }
      }
      return true;
    }
    return false;
  },
  "first-of-type": (arg0, arg1) => {
    let adapter;
    let equals;
    ({ adapter, equals } = arg1);
    const siblings = adapter.getSiblings(arg0);
    let num = 0;
    if (0 < siblings.length) {
      while (!equals(arg0, siblings[num])) {
        if (!adapter.isTag(tmp2)) {
          num = num + 1;
        }
      }
      return true;
    }
    return false;
  },
  "last-of-type": (arg0, arg1) => {
    let adapter;
    let equals;
    ({ adapter, equals } = arg1);
    const siblings = adapter.getSiblings(arg0);
    let diff = siblings.length - 1;
    if (0 <= diff) {
      while (!equals(arg0, siblings[diff])) {
        if (!adapter.isTag(tmp3)) {
          diff = diff - 1;
        }
      }
      return true;
    }
    return false;
  },
  "only-of-type": (arg0, adapter) => {
    let closure_3;
    let closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const name = adapter.getName(arg0);
    const siblings = adapter.getSiblings(arg0);
    return siblings.every((item) => {
      const tmp = equals(closure_0, item) || !adapter.isTag(item) || adapter.getName(item) !== closure_3;
      return tmp;
    });
  },
  "only-child": (arg0, adapter) => {
    let closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const siblings = adapter.getSiblings(arg0);
    return siblings.every((item) => {
      const tmp = equals(closure_0, item) || !adapter.isTag(item);
      return tmp;
    });
  }
};
export function verifyPseudoArgs(pseudos, name, data, arg3) {
  if (null === data) {
    if (pseudos.length > arg3) {
      const _Error2 = Error;
      const concat2 = "Pseudo-class :".concat;
      const self3 = this;
      const self4 = this;
      const error = new Error("Pseudo-class :".concat(name, " requires an argument"));
      throw error;
    }
  } else if (pseudos.length === arg3) {
    const _Error = Error;
    const concat = "Pseudo-class :".concat;
    const self = this;
    const self2 = this;
    const error1 = new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
    throw error1;
  }
}
