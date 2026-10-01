// Module ID: 6037
// Function ID: 6038
// Name: useInputAttachments
// Dependencies: [32, 19, 17, 21, 6038, 4832, 6039, 2]
// Exports: estimateAttachmentWidth, renderInputAttachment, useInputAttachments

// Module 6037 (useInputAttachments)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import IconSize from "IconSize" /* 6038 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
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
({ Platform, Pressable: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export const estimateAttachmentWidth = function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = IconSize.ICON_SIZE.xs + arg1;
  }
  return num;
};
export const renderInputAttachment = function renderInputAttachment(arg0, leadingText, text) {
  let tmp2;
  if (null != arg0) {
    tmp2 = jsx(arg0, { size: "xs", color: "input-icon-default" });
  } else {
    tmp2 = null;
    if (null != leadingText) {
      tmp2 = jsx(Text_Text.Text, { variant: "text-md/normal", style: text, children: leadingText });
    }
  }
  return tmp2;
};
export { InputAttachmentContainer };
export const useInputAttachments = function useInputAttachments(size, leading) {
  let diff1;
  let inputStyles;
  let leadingIcon;
  let leadingPressableProps;
  let leadingText;
  let obj8;
  let tmp19;
  let tmp20;
  let trailingIcon;
  let trailingPressableProps;
  const f81348 = () => {
    let num = 0;
    if (null != leadingIcon) {
      num = IconSize.ICON_SIZE.xs + tmp;
    }
    return num;
  };
  const tmp = inputStyles;
  const obj = inputStyles(leadingIcon[6]);
  const obj2 = { size: size.size, hasLeadingIcon: null != size.leadingIcon };
  inputStyles = obj.useInputStyles(obj2);
  leadingIcon = size.leadingIcon;
  ({ leadingText, trailingIcon } = size);
  const trailingText = size.trailingText;
  leading = undefined;
  ({ leadingPressableProps, trailingPressableProps } = size);
  if (leading != null) {
    leading = leading.leading;
  }
  if (leading == null) {
    let tmp6;
    if (null != leadingIcon) {
      tmp6 = <leadingIcon size="xs" color="input-icon-default" />;
    } else {
      tmp6 = null;
      if (null != leadingText) {
        tmp6 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp5, children: leadingText });
      }
    }
    leading = tmp6;
  }
  let trailing;
  if (leading != null) {
    trailing = leading.trailing;
  }
  if (trailing == null) {
    let tmp11;
    if (null != trailingIcon) {
      tmp11 = <trailingIcon size="xs" color="input-icon-default" />;
    } else {
      tmp11 = null;
      if (null != trailingText) {
        tmp11 = jsx(tmp(tmp2[5]).Text, { variant: "text-md/normal", style: tmp10, children: trailingText });
      }
    }
    trailing = tmp11;
  }
  if (null == leadingIcon) {
    let leading1;
    if (leading != null) {
      leading1 = leading.leading;
    }
    if (null == leading1) {
      let leadingIcon2 = inputStyles.leadingText;
    }
    if (null == trailingIcon) {
      let trailing1;
      if (leading != null) {
        trailing1 = leading.trailing;
      }
      if (null == trailing1) {
        let trailingIcon2 = inputStyles.trailingText;
      }
      let num = 2;
      [tmp19, tmp20] = trailingIcon(react.useState(f81348), 2);
      trailingIcon(react.useState(f81348), 2);
      const tmp21 = trailingIcon(react.useState(() => {
        let num = 0;
        if (null != trailingIcon) {
          num = IconSize.ICON_SIZE.xs + tmp;
        }
        return num;
      }), 2);
      const first = tmp21[0];
      let prop;
      if (leading != null) {
        prop = leading.leadingPressableProps;
      }
      if (prop == null) {
        prop = leadingPressableProps;
      }
      let prop1;
      const obj6 = { leading: null, trailing: null, inputStyle: obj8 };
      if (leading != null) {
        prop1 = leading.trailingPressableProps;
      }
      if (prop1 == null) {
        prop1 = trailingPressableProps;
      }
      let diff;
      if (0 !== tmp19) {
        diff = tmp19 - inputStyles.padding.paddingHorizontal;
      }
      obj8 = { marginStart: diff, marginEnd: diff1 };
      diff1 = undefined;
      if (0 !== first) {
        diff1 = first - inputStyles.padding.paddingHorizontal;
      }
      return obj6;
    }
    trailingIcon2 = inputStyles.trailingIcon;
  }
  leadingIcon2 = inputStyles.leadingIcon;
};
