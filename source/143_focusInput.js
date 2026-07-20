// Module ID: 143
// Function ID: 2331
// Name: focusInput
// Dependencies: []

// Module 143 (focusInput)
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
  let tmp = closure_2 === current;
  if (tmp) {
    tmp = null != current;
  }
  if (tmp) {
    closure_2 = null;
  }
}
let closure_2 = null;
const set = new Set();
arg5.default = {
  currentlyFocusedInput() {
    return closure_2;
  },
  focusInput,
  blurInput,
  currentlyFocusedField() {
    return arg1(arg6[0]).findNodeHandle(closure_2);
  },
  focusField(arg0) {

  },
  blurField(arg0) {

  },
  focusTextInput(currentProps) {
    if ("number" !== typeof currentProps) {
      if (null != currentProps) {
        if (closure_2 !== currentProps) {
          currentProps = currentProps.currentProps;
          let editable;
          if (null != currentProps) {
            editable = currentProps.editable;
          }
          if (false !== editable) {
            focusInput(currentProps);
            const Commands = arg1(arg6[1]).Commands;
            Commands.focus(currentProps);
          }
        }
      }
    }
  },
  blurTextInput(result) {
    let tmp = "number" !== typeof result;
    if (tmp) {
      tmp = closure_2 === result;
    }
    if (tmp) {
      tmp = null != result;
    }
    if (tmp) {
      blurInput(result);
      const Commands = arg1(arg6[1]).Commands;
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
