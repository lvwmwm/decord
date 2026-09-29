// Module ID: 11194
// Function ID: 11195
// Name: PerLetterEffect
// Dependencies: [19, 17, 21, 4788, 11195, 11196, 4784, 2]
// Exports: default

// Module 11194 (PerLetterEffect)
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Text: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let closure_7 = createStyles.createStyles({ container: { overflow: "hidden" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  name = name.name;
  ({ textProps, colors } = name);
  ({ containerStyle, textStyle } = name);
  const items = [name, colors];
  let obj = { style: null, children: null };
  const items1 = [closure_7().container, containerStyle];
  obj.style = items1;
  const memo = noop.useMemo(() => {
    const regex = colors(11195)();
    closure_1 = 0;
    let obj = name(11196);
    return name(11196).splitGraphemes(regex).map((children, index) => {
      regex.lastIndex = 0;
      const tmp = regex.test(children) || 0 === children.trim().length;
      let tmp2;
      if (null != colors) {
        if (arr.length > 0) {
          if (!tmp) {
            tmp2 = arr[closure_1 % arr.length];
          }
        }
      }
      if (!tmp) {
        closure_1 = closure_1 + 1;
      }
      let tmp7;
      if (null != tmp2) {
        const obj = { color: tmp2 };
        tmp7 = obj;
      }
      return <hasOwnProperty key={arg1} style={tmp7}>{arg0}</hasOwnProperty>;
    });
  }, items);
  const obj2 = {};
  const merged = Object.assign(textProps);
  obj2.textBreakStrategy = "simple";
  let accessibilityLabel = textProps.accessibilityLabel;
  if (accessibilityLabel == null) {
    accessibilityLabel = name;
  }
  obj2.accessibilityLabel = accessibilityLabel;
  const items2 = [textStyle, { lineHeight: "r" }];
  obj2.style = items2;
  obj2.children = memo;
  obj.children = jsx(name(4784).Text, {});
  return <closure_4 style={null}>{null}</closure_4>;
};
