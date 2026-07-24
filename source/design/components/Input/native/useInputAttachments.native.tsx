// Module ID: 5779
// Function ID: 49466
// Name: estimateAttachmentWidth
// Dependencies: [57, 31, 27, 33, 5511, 4126, 1324, 5780, 2]
// Exports: useInputAttachments

// Module 5779 (estimateAttachmentWidth)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let closure_5;
let closure_6;
const require = arg1;
function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = require(5511) /* ICON_SIZE */.ICON_SIZE.xs + arg1;
  }
  return num;
}
function renderInputAttachment(leadingIcon, leadingText, text) {
  if (null != leadingIcon) {
    let tmp = jsx(leadingIcon, { size: "xs", color: "input-icon-default" });
  } else {
    tmp = null;
    if (null != leadingText) {
      const obj = { variant: "text-md/normal", style: text, children: leadingText };
      tmp = jsx(require(4126) /* Text */.Text, { variant: "text-md/normal", style: text, children: leadingText });
    }
  }
  return tmp;
}
class InputAttachmentContainer {
  constructor(arg0) {
    ({ content, style } = global);
    ({ setWidth, pressableProps } = global);
    if (null == content) {
      return null;
    } else {
      if (null != pressableProps) {
        tmp4 = jsx;
        tmp5 = Pressable;
        obj = {};
        str = "button";
        obj.role = "button";
        tmp6 = obj;
        tmp7 = pressableProps;
        merged = Object.assign(pressableProps);
        str2 = "style";
        obj["style"] = function style(pressed) {
          const items = [style, { pointerEvents: "auto" }, ];
          let tmp;
          if (pressed.pressed) {
            const obj = { opacity: 0.2 };
            tmp = obj;
          }
          items[2] = tmp;
          return items;
        };
        pressableProps = function onLayout(nativeEvent) {
          return callback(nativeEvent.nativeEvent.layout.width);
        };
        str3 = "onLayout";
        obj["onLayout"] = pressableProps;
        str4 = "children";
        obj["children"] = content;
        tmp3 = jsx(Pressable, obj);
      } else {
        tmp = jsx;
        tmp2 = View;
        obj = {};
        obj.style = style;
        obj.onLayout = function onLayout(nativeEvent) {
          return callback(nativeEvent.nativeEvent.layout.width);
        };
        obj.children = content;
        tmp3 = jsx(View, obj);
      }
      tmp9 = tmp3;
    }
    return;
  }
}
({ Platform, Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export { estimateAttachmentWidth };
export { renderInputAttachment };
export { InputAttachmentContainer };
export const useInputAttachments = function useInputAttachments(size, leading) {
  let leadingPressableProps;
  let leadingText;
  let trailingIcon;
  let trailingText;
  let obj = inputStyles(trailingIcon[7]);
  obj = { size: size.size, hasLeadingIcon: null != size.leadingIcon, isRefreshEnabled: leadingIcon(trailingIcon[6])("useInputAttachments") };
  inputStyles = obj.useInputStyles(obj);
  leadingIcon = size.leadingIcon;
  ({ leadingPressableProps, trailingIcon } = size);
  let trailingPressableProps = size.trailingPressableProps;
  leading = undefined;
  ({ leadingText, trailingText } = size);
  if (null != leading) {
    leading = leading.leading;
  }
  if (null == leading) {
    leading = renderInputAttachment(leadingIcon, leadingText, inputStyles.text);
  }
  let trailing;
  if (null != leading) {
    trailing = leading.trailing;
  }
  if (null == trailing) {
    trailing = renderInputAttachment(trailingIcon, trailingText, inputStyles.text);
  }
  if (null == leadingIcon) {
    let leading1;
    if (null != leading) {
      leading1 = leading.leading;
    }
    if (null == leading1) {
      let leadingIcon2 = inputStyles.leadingText;
    }
    if (null == trailingIcon) {
      let trailing1;
      if (null != leading) {
        trailing1 = leading.trailing;
      }
      if (null == trailing1) {
        let trailingIcon2 = inputStyles.trailingText;
      }
      const tmp11 = callback(React.useState(() => outer1_8(leadingIcon, inputStyles.leadingIcon.paddingStart + inputStyles.leadingIcon.paddingEnd)), 2);
      const first = tmp11[0];
      const tmp13 = callback(React.useState(() => outer1_8(trailingIcon, inputStyles.trailingIcon.paddingStart + inputStyles.trailingIcon.paddingEnd)), 2);
      const first1 = tmp13[0];
      obj = {};
      const obj1 = { content: leading, setWidth: tmp11[1] };
      let prop;
      if (null != leading) {
        prop = leading.leadingPressableProps;
      }
      if (null != prop) {
        leadingPressableProps = prop;
      }
      obj1.pressableProps = leadingPressableProps;
      obj1.style = leadingIcon2;
      obj.leading = <InputAttachmentContainer content={leading} setWidth={tmp11[1]} />;
      const obj2 = { content: trailing, setWidth: tmp13[1] };
      let prop1;
      if (null != leading) {
        prop1 = leading.trailingPressableProps;
      }
      if (null != prop1) {
        trailingPressableProps = prop1;
      }
      obj2.pressableProps = trailingPressableProps;
      obj2.style = trailingIcon2;
      obj.trailing = <InputAttachmentContainer content={trailing} setWidth={tmp13[1]} />;
      const obj3 = {};
      let diff;
      if (0 !== first) {
        diff = first - inputStyles.padding.paddingHorizontal;
      }
      obj3.marginStart = diff;
      let diff1;
      if (0 !== first1) {
        diff1 = first1 - inputStyles.padding.paddingHorizontal;
      }
      obj3.marginEnd = diff1;
      obj.inputStyle = obj3;
      return obj;
    }
    trailingIcon2 = inputStyles.trailingIcon;
  }
  leadingIcon2 = inputStyles.leadingIcon;
};
