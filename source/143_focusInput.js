// Module ID: 143
// Function ID: 2331
// Name: focusInput
// Dependencies: [117, 144]

// Module 143 (focusInput)
const require = arg1;
const dependencyMap = arg6;
function focusInput(current) {
  let tmp = closure_2 !== current;
  if (tmp) {
    tmp = null != current;
  }
  if (tmp) {
    closure_2 = current;
  }
}
function blurInput(current) {
  let tmp = c2 === current;
  if (tmp) {
    tmp = null != current;
  }
  if (tmp) {
    c2 = null;
  }
}
let c2 = null;
const set = new Set();
arg5.default = {
  currentlyFocusedInput() {
    return c2;
  },
  focusInput,
  blurInput,
  currentlyFocusedField() {
    return require(117) /* renderElement */.findNodeHandle(c2);
  },
  focusField(arg0) {

  },
  blurField(arg0) {

  },
  focusTextInput(currentProps) {
    if ("number" !== typeof currentProps) {
      if (null != currentProps) {
        if (c2 !== currentProps) {
          currentProps = currentProps.currentProps;
          let editable;
          if (null != currentProps) {
            editable = currentProps.editable;
          }
          if (false !== editable) {
            focusInput(currentProps);
            const Commands = require(144) /* Commands */.Commands;
            Commands.focus(currentProps);
          }
        }
      }
    }
  },
  blurTextInput(result) {
    let tmp = "number" !== typeof result;
    if (tmp) {
      tmp = c2 === result;
    }
    if (tmp) {
      tmp = null != result;
    }
    if (tmp) {
      blurInput(result);
      const Commands = require(144) /* Commands */.Commands;
      Commands.blur(result);
    }
  },
  registerInput(current) {
    if ("number" !== typeof current) {
      set.add(current);
    }
  },
  unregisterInput(current) {
    if ("number" !== typeof current) {
      set.delete(current);
    }
  },
  isTextInput(result) {
    let hasItem = "number" !== typeof result;
    if (hasItem) {
      hasItem = set.has(result);
    }
    return hasItem;
  }
};
