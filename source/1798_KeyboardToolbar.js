// Module ID: 1798
// Function ID: 19899
// Name: KeyboardToolbar
// Dependencies: []

// Module 1798 (KeyboardToolbar)
let StyleSheet;
let closure_3 = [null, "BoostPurchaseIntent", "variant", "arrow_up_down", "historyAction", "paidURL", "\u017F", "prefixTag", "reviewRowNotLast", "Button", "offsetX", "fileFinishedImporting", "\u012D", "labelType", "roundedCard"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
({ useEffect: closure_6, useMemo: closure_7, useState: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[2]);
({ StyleSheet, View: closure_10 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsxs: closure_11, jsx: closure_12 } = arg1(dependencyMap[4]));
class KeyboardToolbar {
  constructor(arg0) {
    ({ children, theme } = global);
    if (undefined === theme) {
      tmp = arg1;
      tmp2 = closure_2;
      num = 5;
      theme = arg1(closure_2[5]).colors;
    }
    arg1 = theme;
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
      tmp5 = arg1;
      tmp6 = closure_2;
      num2 = 6;
      DEFAULT_OPACITY = arg1(closure_2[6]).DEFAULT_OPACITY;
    }
    importDefault = DEFAULT_OPACITY;
    offset = global.offset;
    if (undefined === offset) {
      offset = {};
    }
    closed = offset.closed;
    num3 = 0;
    if (undefined !== closed) {
      num3 = closed;
    }
    closure_2 = num3;
    opened = offset.opened;
    num4 = 0;
    if (undefined !== opened) {
      num4 = opened;
    }
    closure_3 = num4;
    enabled = global.enabled;
    tmp7 = undefined === enabled || enabled;
    insets = global.insets;
    tmp8 = closure_5(global, closure_3);
    obj2 = arg1(closure_2[7]);
    keyboardState = obj2.useKeyboardState((appearance) => appearance.appearance);
    closure_5 = keyboardState;
    tmp10 = insets(useState({ -1862269746: "%FunctionPrototype%", -1509948210: "paddingStart" }), 2);
    first = tmp10[0];
    useEffect = tmp10[1];
    tmp12 = 0 === first.current;
    useMemo = tmp12;
    tmp13 = first.current === first.count - 1;
    useState = tmp13;
    if (null == button) {
      tmp14 = importDefault;
      tmp15 = closure_2;
      num5 = 8;
      button = importDefault(closure_2[8]);
    }
    if (null == icon) {
      tmp16 = importDefault;
      tmp17 = closure_2;
      num6 = 9;
      icon = importDefault(closure_2[9]);
    }
    tmp18 = useEffect(() => {
      const FocusedInputEvents = theme(num3[10]).FocusedInputEvents;
      return FocusedInputEvents.addListener("focusDidSet", (arg0) => {
        callback(arg0);
      }).remove;
    }, []);
    items = [, , , ];
    items[0] = keyboardState;
    items[1] = DEFAULT_OPACITY;
    items[2] = theme;
    items[3] = insets;
    items1 = [];
    items1[0] = insets;
    tmp19 = useMemo(() => {
      const items = [_null.toolbar, , , ];
      let obj = { backgroundColor: "" + theme[closure_5].background + DEFAULT_OPACITY };
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
        floating = _null.floating;
      }
      items[3] = floating;
      return items;
    }, items);
    items2 = [, ];
    items2[0] = num3;
    items2[1] = num4;
    tmp20 = useMemo(() => {
      const items = [_null.sticky, ];
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
        let num3 = 0;
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
      closure_9 = null;
      closure_10 = null;
      closure_11 = null;
      closure_12 = null;
      closure_13 = null;
      tmp38 = closure_9;
      Children = closure_9.Children;
      item = Children.forEach(children, (type) => {
        if (validElement.isValidElement(type)) {
          type = type.type;
          if (type === theme(num3[11]).Background) {
            let closure_13 = type;
          } else if (type === theme(num3[11]).Content) {
            let closure_11 = type;
          } else if (type === theme(num3[11]).Prev) {
            const validElement = type;
          } else if (type === theme(num3[11]).Next) {
            let closure_10 = type;
          } else if (type === theme(num3[11]).Done) {
            let closure_12 = type;
          }
        }
      });
      tmp42 = closure_9;
      tmp40 = closure_13;
      tmp41 = closure_12;
      if (closure_9) {
        tmp45 = closure_11;
        tmp46 = closure_10;
        obj = {};
        tmp47 = closure_13;
        obj.style = closure_13.arrows;
        tmp48 = closure_9;
        items3 = [, ];
        items3[0] = closure_9;
        tmp49 = closure_10;
        items3[1] = closure_10;
        obj.children = items3;
        tmp44 = closure_11(closure_10, obj);
      } else {
        tmp43 = closure_10;
        tmp44 = null;
      }
      tmp50 = closure_11;
      if (null != closure_11) {
        tmp55 = closure_11;
      } else {
        tmp51 = closure_12;
        tmp52 = arg1;
        tmp53 = closure_2;
        num9 = 11;
        obj1 = {};
        tmp54 = closure_11;
        obj1.children = closure_11;
        tmp55 = closure_12(arg1(closure_2[11]).Content, obj1);
      }
      tmp56 = tmp55;
      tmp57 = tmp40;
      tmp58 = tmp44;
      tmp59 = tmp41;
    } else {
      tmp22 = null;
      if (tmp3) {
        tmp23 = closure_11;
        tmp24 = closure_10;
        obj2 = {};
        tmp25 = closure_13;
        obj2.style = closure_13.arrows;
        tmp26 = closure_12;
        tmp27 = arg1;
        tmp28 = closure_2;
        num7 = 11;
        obj3 = {};
        obj3.button = button;
        obj3.icon = icon;
        obj3.onPress = onPrevCallback;
        items4 = [, ];
        items4[0] = closure_12(arg1(closure_2[11]).Prev, obj3);
        obj4 = {};
        obj4.button = button;
        obj4.icon = icon;
        obj4.onPress = onNextCallback;
        items4[1] = closure_12(arg1(closure_2[11]).Next, obj4);
        obj2.children = items4;
        tmp22 = closure_11(closure_10, obj2);
      }
      tmp29 = closure_12;
      tmp30 = arg1;
      tmp31 = closure_2;
      num8 = 11;
      obj5 = {};
      obj5.children = global.content;
      tmp32 = closure_12(arg1(closure_2[11]).Content, obj5);
      tmp33 = null;
      if (str) {
        tmp34 = closure_12;
        tmp35 = arg1;
        tmp36 = closure_2;
        obj6 = {};
        obj6.button = button;
        obj6.text = str;
        obj6.onPress = onDoneCallback;
        tmp33 = closure_12(arg1(closure_2[11]).Done, obj6);
      }
      tmp37 = tmp32;
      tmp60 = useMemo;
      items5 = [, , ];
      items5[0] = theme;
      items5[1] = tmp12;
      items5[2] = tmp13;
      tmp62 = closure_12;
      tmp63 = arg1;
      tmp64 = closure_2;
      num10 = 12;
      tmp61 = useMemo(() => ({ theme, isPrevDisabled: tmp12, isNextDisabled: tmp13 }), items5);
      obj7 = {};
      obj7.value = tmp61;
      tmp65 = importDefault;
      num11 = 13;
      obj8 = {};
      obj8.enabled = tmp7;
      obj8.offset = tmp21;
      obj8.style = tmp20;
      tmp67 = closure_11;
      tmp68 = closure_10;
      tmp69 = globalThis;
      _Object = Object;
      obj9 = {};
      obj9.style = tmp19;
      num12 = 6;
      tmp66 = importDefault(closure_2[13]);
      obj9.testID = arg1(closure_2[6]).TEST_ID_KEYBOARD_TOOLBAR;
      items6 = [, , , ];
      items6[0] = tmp4;
      items6[1] = tmp22;
      items6[2] = tmp32;
      items6[3] = tmp33;
      obj9.children = items6;
      obj8.children = closure_11(closure_10, Object.assign({}, tmp8, obj9));
      obj7.children = closure_12(tmp66, obj8);
      return closure_12(arg1(closure_2[12]).ToolbarContext.Provider, obj7);
    }
    return;
  }
}
let obj = {};
obj = { <string:80590080>: 131420590, <string:80590336>: -1717986767, <string:80597504>: -644245095, <string:80624128>: 94527, height: arg1(dependencyMap[6]).KEYBOARD_TOOLBAR_HEIGHT };
obj.sticky = obj;
obj = { <string:80553984>: 40, <string:80639488>: 40, <string:80599808>: 20, <string:80553728>: "Closes the keyboard", <string:80639232>: "Done", height: arg1(dependencyMap[6]).KEYBOARD_TOOLBAR_HEIGHT };
obj.toolbar = obj;
obj.arrows = {};
obj.floating = { createStyles: 49450240, guild_id: 49450240, body: 49450240 };
const styles = StyleSheet.create(obj);
KeyboardToolbar.Background = arg1(dependencyMap[11]).Background;
KeyboardToolbar.Content = arg1(dependencyMap[11]).Content;
KeyboardToolbar.Prev = arg1(dependencyMap[11]).Prev;
KeyboardToolbar.Next = arg1(dependencyMap[11]).Next;
KeyboardToolbar.Done = arg1(dependencyMap[11]).Done;
KeyboardToolbar.Group = arg1(dependencyMap[10]).RCTKeyboardToolbarGroupView;

export default KeyboardToolbar;
export const DefaultKeyboardToolbarTheme = arg1(dependencyMap[5]).colors;
