// Module ID: 1798
// Function ID: 19901
// Name: KeyboardToolbar
// Dependencies: [57, 29, 31, 27, 33, 1799, 1800, 1776, 1801, 1802, 1572, 1803, 1807, 1791]

// Module 1798 (KeyboardToolbar)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import closure_9 from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
let closure_3 = ["children", "content", "theme", "doneText", "button", "icon", "showArrows", "onNextCallback", "onPrevCallback", "onDoneCallback", "blur", "opacity", "offset", "enabled", "insets"];
({ useEffect: closure_6, useMemo: closure_7, useState: closure_8 } = result);
({ StyleSheet, View: closure_10 } = get_ActivityIndicator);
({ jsxs: closure_11, jsx: closure_12 } = jsxProd);
class KeyboardToolbar {
  constructor(arg0) {
    ({ children, theme } = global);
    if (undefined === theme) {
      tmp = colors;
      tmp2 = c2;
      num = 5;
      theme = require("colors").colors;
    }
    colors = theme;
    doneText = global.doneText;
    str = "Done";
    if (undefined !== doneText) {
      str = doneText;
    }
    ({ button, icon, showArrows } = global);
    tmp3 = undefined === showArrows || showArrows;
    blur = global.blur;
    tmp4 = null;
    ({ onNextCallback, onPrevCallback, onDoneCallback } = global);
    if (undefined !== blur) {
      tmp4 = blur;
    }
    DEFAULT_OPACITY = global.opacity;
    if (undefined === DEFAULT_OPACITY) {
      tmp5 = colors;
      tmp6 = c2;
      num2 = 6;
      DEFAULT_OPACITY = require("TEST_ID_KEYBOARD_TOOLBAR").DEFAULT_OPACITY;
    }
    offset = global.offset;
    if (undefined === offset) {
      offset = {};
    }
    closed = offset.closed;
    num3 = 0;
    if (undefined !== closed) {
      num3 = closed;
    }
    c2 = num3;
    opened = offset.opened;
    num4 = 0;
    if (undefined !== opened) {
      num4 = opened;
    }
    c3 = num4;
    enabled = global.enabled;
    tmp7 = undefined === enabled || enabled;
    insets = global.insets;
    tmp8 = c5(global, c3);
    obj2 = require("useGenericKeyboardHandler");
    keyboardState = obj2.useKeyboardState((appearance) => appearance.appearance);
    c5 = keyboardState;
    tmp10 = insets(count({ current: 0, count: 0 }), 2);
    first = tmp10[0];
    useKeyboardState = tmp10[1];
    tmp12 = 0 === first.current;
    current = tmp12;
    tmp13 = first.current === first.count - 1;
    count = tmp13;
    if (null == button) {
      tmp14 = DEFAULT_OPACITY;
      tmp15 = c2;
      num5 = 8;
      button = require("ButtonAndroid");
    }
    if (null == icon) {
      tmp16 = DEFAULT_OPACITY;
      tmp17 = c2;
      num6 = 9;
      icon = require("ArrowComponent");
    }
    tmp18 = useKeyboardState(() => {
      const FocusedInputEvents = theme(num3[10]).FocusedInputEvents;
      return FocusedInputEvents.addListener("focusDidSet", (arg0) => {
        outer1_6(arg0);
      }).remove;
    }, []);
    items = [, , , ];
    items[0] = keyboardState;
    items[1] = DEFAULT_OPACITY;
    items[2] = theme;
    items[3] = insets;
    items1 = [];
    items1[0] = insets;
    tmp19 = current(() => {
      const items = [_null2.toolbar, , , ];
      let obj = { backgroundColor: "" + theme[keyboardState].background + DEFAULT_OPACITY };
      items[1] = obj;
      let tmp = null;
      if (!theme(num3[6]).KEYBOARD_HAS_ROUNDED_CORNERS) {
        obj = {};
        let left;
        if (null != insets) {
          left = insets.left;
        }
        obj.paddingLeft = left;
        let right;
        if (null != insets) {
          right = insets.right;
        }
        obj.paddingRight = right;
        tmp = obj;
      }
      items[2] = tmp;
      let floating = null;
      if (theme(num3[6]).KEYBOARD_HAS_ROUNDED_CORNERS) {
        floating = _null2.floating;
      }
      items[3] = floating;
      return items;
    }, items);
    items2 = [, ];
    items2[0] = num3;
    items2[1] = num4;
    tmp20 = current(() => {
      const items = [_null2.sticky, ];
      let tmp = null;
      if (theme(num3[6]).KEYBOARD_HAS_ROUNDED_CORNERS) {
        const obj = {};
        let left;
        if (null != insets) {
          left = insets.left;
        }
        let num = 0;
        if (null != left) {
          num = left;
        }
        obj.left = num + 16;
        let right;
        if (null != insets) {
          right = insets.right;
        }
        num3 = 0;
        if (null != right) {
          num3 = right;
        }
        obj.right = num3 + 16;
        tmp = obj;
      }
      items[1] = tmp;
      return items;
    }, items1);
    if (children) {
      c9 = null;
      c10 = null;
      c11 = null;
      c12 = null;
      c13 = null;
      tmp38 = c9;
      Children = c9.Children;
      item = Children.forEach(children, (type) => {
        if (_null.isValidElement(type)) {
          type = type.type;
          if (type === theme(num3[11]).Background) {
            let closure_13 = type;
          } else if (type === theme(num3[11]).Content) {
            let closure_11 = type;
          } else if (type === theme(num3[11]).Prev) {
            let closure_9 = type;
          } else if (type === theme(num3[11]).Next) {
            let closure_10 = type;
          } else if (type === theme(num3[11]).Done) {
            let closure_12 = type;
          }
        }
      });
      tmp42 = c9;
      tmp40 = c13;
      tmp41 = c12;
      if (c9) {
        tmp45 = c11;
        tmp46 = c10;
        obj = {};
        tmp47 = c13;
        obj.style = c13.arrows;
        tmp48 = c9;
        items3 = [, ];
        items3[0] = c9;
        tmp49 = c10;
        items3[1] = c10;
        obj.children = items3;
        tmp44 = c11(c10, obj);
      } else {
        tmp43 = c10;
        tmp44 = null;
      }
      tmp50 = c11;
      if (null != c11) {
        tmp55 = c11;
      } else {
        tmp51 = c12;
        tmp52 = colors;
        tmp53 = c2;
        num9 = 11;
        obj1 = {};
        tmp54 = c11;
        obj1.children = c11;
        tmp55 = c12(require("Background").Content, obj1);
      }
      tmp56 = tmp55;
      tmp57 = tmp40;
      tmp58 = tmp44;
      tmp59 = tmp41;
    } else {
      tmp22 = null;
      if (tmp3) {
        tmp23 = c11;
        tmp24 = c10;
        obj2 = {};
        tmp25 = c13;
        obj2.style = c13.arrows;
        tmp26 = c12;
        tmp27 = colors;
        tmp28 = c2;
        num7 = 11;
        obj3 = {};
        obj3.button = button;
        obj3.icon = icon;
        obj3.onPress = onPrevCallback;
        items4 = [, ];
        items4[0] = c12(require("Background").Prev, obj3);
        obj4 = {};
        obj4.button = button;
        obj4.icon = icon;
        obj4.onPress = onNextCallback;
        items4[1] = c12(require("Background").Next, obj4);
        obj2.children = items4;
        tmp22 = c11(c10, obj2);
      }
      tmp29 = c12;
      tmp30 = colors;
      tmp31 = c2;
      num8 = 11;
      obj5 = {};
      obj5.children = global.content;
      tmp32 = c12(require("Background").Content, obj5);
      tmp33 = null;
      if (str) {
        tmp34 = c12;
        tmp35 = colors;
        tmp36 = c2;
        obj6 = {};
        obj6.button = button;
        obj6.text = str;
        obj6.onPress = onDoneCallback;
        tmp33 = c12(require("Background").Done, obj6);
      }
      tmp37 = tmp32;
      tmp60 = current;
      items5 = [, , ];
      items5[0] = theme;
      items5[1] = tmp12;
      items5[2] = tmp13;
      tmp62 = c12;
      tmp63 = colors;
      tmp64 = c2;
      num10 = 12;
      tmp61 = current(() => ({ theme, isPrevDisabled: closure_7, isNextDisabled: closure_8 }), items5);
      obj7 = {};
      obj7.value = tmp61;
      tmp65 = DEFAULT_OPACITY;
      num11 = 13;
      obj8 = {};
      obj8.enabled = tmp7;
      obj8.offset = tmp21;
      obj8.style = tmp20;
      tmp67 = c11;
      tmp68 = c10;
      tmp69 = globalThis;
      _Object = Object;
      obj9 = {};
      obj9.style = tmp19;
      num12 = 6;
      tmp66 = require("forwardRef");
      obj9.testID = require("TEST_ID_KEYBOARD_TOOLBAR").TEST_ID_KEYBOARD_TOOLBAR;
      items6 = [, , , ];
      items6[0] = tmp4;
      items6[1] = tmp22;
      items6[2] = tmp32;
      items6[3] = tmp33;
      obj9.children = items6;
      obj8.children = c11(c10, Object.assign({}, tmp8, obj9));
      obj7.children = c12(tmp66, obj8);
      return c12(require("context").ToolbarContext.Provider, obj7);
    }
    return;
  }
}
let obj = {};
obj = { position: "absolute", left: 0, right: 0, bottom: 0, height: require("TEST_ID_KEYBOARD_TOOLBAR").KEYBOARD_TOOLBAR_HEIGHT };
obj.sticky = obj;
obj = { position: "absolute", bottom: 0, alignItems: "center", width: "100%", flexDirection: "row", height: require("TEST_ID_KEYBOARD_TOOLBAR").KEYBOARD_TOOLBAR_HEIGHT };
obj.toolbar = obj;
obj.arrows = { flexDirection: "row", paddingLeft: 8 };
obj.floating = { alignSelf: "center", borderRadius: 20, overflow: "hidden" };
const styles = StyleSheet.create(obj);
KeyboardToolbar.Background = require("Background").Background;
KeyboardToolbar.Content = require("Background").Content;
KeyboardToolbar.Prev = require("Background").Prev;
KeyboardToolbar.Next = require("Background").Next;
KeyboardToolbar.Done = require("Background").Done;
KeyboardToolbar.Group = require("nativeEventEmitter").RCTKeyboardToolbarGroupView;

export default KeyboardToolbar;
export const DefaultKeyboardToolbarTheme = require("colors").colors;
