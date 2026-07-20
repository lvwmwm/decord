// Module ID: 11530
// Function ID: 89809
// Name: PromoSheet
// Dependencies: []
// Exports: PromoSheet

// Module 11530 (PromoSheet)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { content: { "Bool(false)": 0, "Bool(false)": 3 }, title: { textAlign: "center" }, description: { textAlign: "center" }, illustration: { 9223372036854775807: "100%", -9223372036854775808: 106 } };
obj = { alignSelf: "center", maxWidth: importDefault(dependencyMap[5]).modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
obj.graphic = obj;
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = function PromoSheet(arg0) {
  let actions;
  let description;
  let gradientColor;
  let graphic;
  let illustration;
  let title;
  ({ description, illustration, graphic, gradientColor } = arg0);
  const arg1 = gradientColor;
  ({ title, actions } = arg0);
  const tmp2 = importDefault(dependencyMap[6])("PromoSheet");
  const importDefault = tmp2;
  const tmp3 = callback3();
  const items = [tmp2, gradientColor];
  const memo = React.useMemo(() => {
    if (tmp2) {
      if (null != gradientColor) {
        return (arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = { offsetBottom: 0.25, color: callback, backgroundColor: callback2(closure_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
          obj["children"] = callback3(callback(closure_2[7]).ExpressiveGradient, obj);
          return callback3(closure_6, obj);
        };
      }
    }
  }, items);
  let obj = {};
  const merged = Object.assign(callback(arg0, closure_3));
  obj["startExpanded"] = true;
  obj["contentStyles"] = tmp3.content;
  obj["backgroundComponent"] = memo;
  obj = { spacing: 24 };
  if (tmp2) {
    if (null != graphic) {
      obj = {};
      const merged1 = Object.assign(graphic);
      obj["style"] = tmp3.graphic;
      let tmp10 = callback2(arg1(dependencyMap[10]).Graphic, obj);
    }
    const items1 = [tmp10, , ];
    const obj1 = {};
    const obj2 = {};
    let str2 = "heading-xl/bold";
    if (tmp2) {
      str2 = "heading-xl/semibold";
    }
    obj2.variant = str2;
    obj2.color = "mobile-text-heading-primary";
    obj2.style = tmp3.title;
    obj2.children = title;
    const items2 = [callback2(arg1(dependencyMap[11]).Text, obj2), ];
    let tmp24Result = null;
    if (null != description) {
      const obj3 = {};
      let str4 = "text-md/medium";
      if (tmp2) {
        str4 = "redesign/heading-18/medium";
      }
      obj3.variant = str4;
      let str5 = "text-default";
      if (tmp2) {
        str5 = "text-subtle";
      }
      obj3.color = str5;
      obj3.style = tmp3.description;
      obj3.children = description;
      tmp24Result = callback2(arg1(dependencyMap[11]).Text, obj3);
      const tmp24 = callback2;
    }
    items2[1] = tmp24Result;
    obj1.children = items2;
    items1[1] = closure_8(arg1(dependencyMap[9]).Stack, obj1);
    items1[2] = actions;
    obj.children = items1;
    obj["children"] = closure_8(tmp8, obj);
    return callback2(arg1(dependencyMap[8]).BottomSheet, obj);
  }
  tmp10 = null;
  if (null != illustration) {
    const obj4 = { style: tmp3.illustration, children: illustration };
    tmp10 = callback2(View, obj4);
  }
};
