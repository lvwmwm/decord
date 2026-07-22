// Module ID: 8514
// Function ID: 67914
// Name: PerLetterEffect
// Dependencies: []
// Exports: default

// Module 8514 (PerLetterEffect)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Text: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: { overflow: "hidden" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  let colors;
  let textProps;
  name = name.name;
  const arg1 = name;
  ({ textProps, colors } = name);
  const importDefault = colors;
  const items = [name, colors];
  let obj = { style: callback().container };
  const memo = React.useMemo(() => {
    const name = colors(closure_2[4])();
    const colors = 0;
    const obj = name(closure_2[5]);
    return name(closure_2[5]).splitGraphemes(name).map((str) => {
      regex.lastIndex = 0;
      const tmp = regex.test(str) || 0 === str.trim().length;
      let tmp2;
      if (null != length) {
        if (length.length > 0) {
          if (!tmp) {
            tmp2 = length[closure_1 % closure_1.length];
          }
        }
      }
      let obj = {};
      let tmp9;
      if (null != tmp2) {
        obj = { color: tmp2 };
        tmp9 = obj;
      }
      obj.style = tmp9;
      obj.children = str;
      return closure_6(closure_5, obj, arg1);
    });
  }, items);
  obj = {};
  const merged = Object.assign(textProps);
  obj["textBreakStrategy"] = "simple";
  obj["accessible"] = true;
  const accessibilityLabel = textProps.accessibilityLabel;
  if (null != accessibilityLabel) {
    name = accessibilityLabel;
  }
  obj["accessibilityLabel"] = name;
  const items1 = [name.textStyle, { lineHeight: undefined }];
  obj["style"] = items1;
  obj["children"] = memo;
  obj.children = jsx(arg1(dependencyMap[6]).Text, obj);
  return <closure_4 {...obj} />;
};
