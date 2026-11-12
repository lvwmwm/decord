// Module ID: 7571
// Function ID: 7572
// Name: useInputAttachments
// Dependencies: [32, 19, 17, 21, 7572, 5866, 7573, 2]
// Exports: estimateAttachmentWidth, renderInputAttachment, useInputAttachments

// Module 7571 (useInputAttachments)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5866 */;
import IconSize from "IconSize" /* 7572 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let Platform;
let closure_4;
let hasOwnProperty;
class InputAttachmentContainer {
  constructor(arg0) {
    let closure_129_1;
    let content;
    let pressableProps;
    let style;
    ({ content, style } = arg0);
    ({ setWidth: closure_129_1, pressableProps } = arg0);
    let tmp = null;
    if (null != content) {
      let tmp4;
      if (null != pressableProps) {
        const merged = Object.assign(pressableProps);
        tmp4 = <React3 role="button" style={function style(pressed) {
          const items = [style, { pointerEvents: "auto" }, ];
          let obj;
          if (pressed.pressed) {
            obj = { opacity: 0.2 };
          }
          items[2] = obj;
          return items;
        }} onLayout={function onLayout(nativeEvent) {
          return closure_1_1(nativeEvent.nativeEvent.layout.width);
        }}>{content}</React3>;
      } else {
        tmp4 = <hasOwnProperty style={style} onLayout={function onLayout(nativeEvent) {
          return closure_1_1(nativeEvent.nativeEvent.layout.width);
        }}>{content}</hasOwnProperty>;
      }
      tmp = tmp4;
    }
    return tmp;
  }
}
let react = react_mod;
({ Platform, Pressable: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let c7 = "input-icon-default";
const result = size.fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = IconSize.ICON_SIZE.xs + arg1;
  }
  return num;
}
export function renderInputAttachment(arg0, leadingText, text) {
  let tmp3;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = c7;
  }
  if (null != arg0) {
    tmp3 = jsx(arg0, { size: "xs", color: tmp });
  } else {
    tmp3 = null;
    if (null != leadingText) {
      tmp3 = jsx(Text_Text.Text, { variant: "body-md/normal", style: text, children: leadingText });
    }
  }
  return tmp3;
}
export { InputAttachmentContainer };
export function useInputAttachments(merged, leadingPressableProps) {
  let closure_3;
  let diff1;
  let inputStyles;
  let leadingIcon;
  let leadingText;
  let obj11;
  let tmp25;
  let tmp26;
  let tmp28;
  let tmp29;
  let trailingIcon;
  const f93237 = () => {
    let num = 0;
    if (null != leadingIcon) {
      num = IconSize.ICON_SIZE.xs + tmp;
    }
    return num;
  };
  const f93238 = () => {
    let num = 0;
    if (null != trailingIcon) {
      num = IconSize.ICON_SIZE.xs + tmp;
    }
    return num;
  };
  const tmp = inputStyles;
  let tmp2 = leadingIcon;
  let obj = inputStyles(leadingIcon[6]);
  const obj2 = { size: merged.size, hasLeadingIcon: null != merged.leadingIcon };
  inputStyles = obj.useInputStyles(obj2);
  leadingIcon = merged.leadingIcon;
  ({ leadingText, leadingPressableProps, trailingIcon } = merged);
  const trailingText = merged.trailingText;
  let prop;
  const trailingPressableProps = merged.trailingPressableProps;
  if (leadingPressableProps != null) {
    prop = leadingPressableProps.leadingPressableProps;
  }
  if (prop == null) {
    prop = leadingPressableProps;
  }
  react = tmp5;
  let tmp6 = null == leadingIcon;
  if (tmp6) {
    let leading;
    if (leadingPressableProps != null) {
      leading = leadingPressableProps.leading;
    }
    tmp6 = null == leading;
  }
  let closure_4 = tmp8;
  let items = [null != prop, , , ];
  ({ text: arr[1], leadingDividerText: arr[2], placeholderText: arr[3] } = inputStyles);
  let leading1;
  const memo = react.useMemo(() => {
    let tmp2;
    const items = [inputStyles.text, ];
    if (closure_3) {
      items[1] = inputStyles.leadingDividerText;
      tmp2 = items;
    } else {
      items[1] = inputStyles.placeholderText;
      tmp2 = items;
    }
    return tmp2;
  }, items);
  if (leadingPressableProps != null) {
    leading1 = leadingPressableProps.leading;
  }
  if (leading1 == null) {
    let tmp11;
    let str = "icon-default";
    if (null == prop) {
      str = c7;
    }
    if (str === undefined) {
      str = c7;
    }
    if (null != leadingIcon) {
      tmp11 = <leadingIcon size="xs" color={str} />;
    } else {
      tmp11 = null;
      if (null != leadingText) {
        tmp11 = jsx(tmp(tmp2[5]).Text, { variant: "body-md/normal", style: memo, children: leadingText });
      }
    }
    leading1 = tmp11;
  }
  let trailing;
  if (leadingPressableProps != null) {
    trailing = leadingPressableProps.trailing;
  }
  if (trailing == null) {
    let tmp17;
    if (null != trailingIcon) {
      tmp17 = <trailingIcon size="xs" color={tmp16} />;
    } else {
      tmp17 = null;
      if (null != trailingText) {
        tmp17 = jsx(tmp(tmp2[5]).Text, { variant: "body-md/normal", style: tmp15, children: trailingText });
      }
    }
    trailing = tmp17;
  }
  const tmp20 = tmp6 ? inputStyles.leadingText : inputStyles.leadingIcon;
  let closure_5 = tmp20;
  const items1 = [tmp20, null != prop && tmp6 && null != leadingText, inputStyles.leadingDivider];
  if (null == trailingIcon) {
    let trailing1;
    if (leadingPressableProps != null) {
      trailing1 = leadingPressableProps.trailing;
    }
    if (null == trailing1) {
      let trailingIcon2 = inputStyles.trailingText;
    }
    let num = 2;
    [tmp25, tmp26] = trailingIcon(react.useState(f93237), 2);
    trailingIcon(react.useState(f93237), 2);
    let num3 = 0;
    [tmp28, tmp29] = trailingIcon(react.useState(f93238), 2);
    trailingIcon(react.useState(f93238), 2);
    if (null != prop && tmp6 && null != leadingText) {
      num3 = inputStyles.padding.paddingHorizontal;
    }
    let num4 = 0;
    if (null != leading1) {
      num4 = tmp25 + num3;
    }
    let num5 = 0;
    if (null != trailing) {
      num5 = tmp28;
    }
    let prop1;
    if (leadingPressableProps != null) {
      prop1 = leadingPressableProps.leadingPressableProps;
    }
    if (prop1 == null) {
      prop1 = leadingPressableProps;
    }
    let prop2;
    const obj9 = { leading: null, trailing: null, inputStyle: obj11 };
    if (leadingPressableProps != null) {
      prop2 = leadingPressableProps.trailingPressableProps;
    }
    if (prop2 == null) {
      prop2 = trailingPressableProps;
    }
    let diff;
    if (0 !== num4) {
      diff = num4 - inputStyles.padding.paddingHorizontal;
    }
    obj11 = { marginStart: diff, marginEnd: diff1 };
    diff1 = undefined;
    if (0 !== num5) {
      diff1 = num5 - inputStyles.padding.paddingHorizontal;
    }
    return obj9;
  }
  trailingIcon2 = inputStyles.trailingIcon;
}
