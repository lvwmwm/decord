// Module ID: 5774
// Function ID: 49417
// Name: estimateAttachmentWidth
// Dependencies: []
// Exports: useInputAttachments

// Module 5774 (estimateAttachmentWidth)
let Platform;
function estimateAttachmentWidth(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg1(dependencyMap[4]).ICON_SIZE.xs + arg1;
  }
  return num;
}
function renderInputAttachment(leadingIcon, leadingText, text) {
  if (null != leadingIcon) {
    let tmp = jsx(leadingIcon, { accessibilityRole: "<string:979453122>", "": "<string:3678716498>" });
  } else {
    tmp = null;
    if (null != leadingText) {
      const obj = { variant: "text-md/normal", style: text, children: leadingText };
      tmp = jsx(leadingText(dependencyMap[5]).Text, obj);
    }
  }
  return tmp;
}
class InputAttachmentContainer {
  constructor(arg0) {
    ({ content, style } = global);
    arg1 = style;
    ({ setWidth: closure_1, pressableProps } = global);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Platform, Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Input/native/useInputAttachments.native.tsx");

export { estimateAttachmentWidth };
export { renderInputAttachment };
export { InputAttachmentContainer };
export const useInputAttachments = function useInputAttachments(size, leading) {
  let leadingPressableProps;
  let leadingText;
  let trailingIcon;
  let trailingText;
  let obj = leading(dependencyMap[7]);
  obj = { size: size.size, hasLeadingIcon: null != size.leadingIcon, isRefreshEnabled: importDefault(dependencyMap[6])("useInputAttachments") };
  const inputStyles = obj.useInputStyles(obj);
  leading = inputStyles;
  const leadingIcon = size.leadingIcon;
  const importDefault = leadingIcon;
  ({ leadingPressableProps, trailingIcon } = size);
  const dependencyMap = trailingIcon;
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
      const tmp11 = callback(React.useState(() => callback(leadingIcon, inputStyles.leadingIcon.paddingStart + inputStyles.leadingIcon.paddingEnd)), 2);
      const first = tmp11[0];
      const tmp13 = callback(React.useState(() => callback(trailingIcon, inputStyles.trailingIcon.paddingStart + inputStyles.trailingIcon.paddingEnd)), 2);
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
      obj.leading = <InputAttachmentContainer {...obj1} />;
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
      obj.trailing = <InputAttachmentContainer {...obj2} />;
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
