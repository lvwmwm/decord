// Module ID: 7492
// Function ID: 60095
// Name: FormHint
// Dependencies: []
// Exports: default

// Module 7492 (FormHint)
let closure_2 = importAll(dependencyMap[0]);
const Platform = arg1(dependencyMap[1]).Platform;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { alignSelf: "_mixedIntoPredicates", justifyContent: "DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN", color: importDefault(dependencyMap[4]).colors.TEXT_MUTED };
obj.formHintText = obj;
obj.redesignHorizontalPadding = { paddingHorizontal: 12 };
obj.horizonatalPadding = { paddingHorizontal: 16 };
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let children;
  let style;
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = callback();
  if (React.useContext(arg1(dependencyMap[5]).RedesignCompatContext)) {
    let obj = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>" };
    let redesignHorizontalPadding = !flag;
    if (redesignHorizontalPadding) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    const items = [redesignHorizontalPadding, style];
    obj.style = items;
    obj.children = children;
    let tmp2Result = tmp2(tmp3(tmp4[6]).Text, obj);
  } else {
    obj = {};
    const items1 = [tmp.formHintText, , ];
    let horizonatalPadding = !flag;
    if (horizonatalPadding) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    items1[1] = horizonatalPadding;
    items1[2] = style;
    obj.style = items1;
    obj.children = children;
    tmp2Result = tmp2(tmp3(tmp4[7]).LegacyText, obj);
  }
  return tmp2Result;
};
