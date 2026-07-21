// Module ID: 12882
// Function ID: 98382
// Name: GradientBorder
// Dependencies: []

// Module 12882 (GradientBorder)
class GradientBorder {
  constructor(arg0) {
    ({ children, borderWidth } = global);
    ({ direction, style } = global);
    if (borderWidth === undefined) {
      borderWidth = 1;
    }
    borderRadius = global.borderRadius;
    if (borderRadius === undefined) {
      tmp = importDefault;
      tmp2 = dependencyMap;
      num = 5;
      num2 = 1;
      borderRadius = importDefault(dependencyMap[5]).radii.sm + 1;
    }
    obj = { "Null": null, "Null": null, "Null": null, flexDirection: null, justifyContent: null };
    setPrototypeOfResult = Object.setPrototypeOf(null);
    merged = Object.assign(global, obj);
    tmp5 = function getStartEnd(direction) {
      const match = callback(closure_2[4]).match(direction);
      const str = callback(closure_2[4]);
      const withResult = match.with(constants.HORIZONTAL, () => closure_5);
      const withResult1 = match.with(constants.HORIZONTAL, () => closure_5).with(constants.VERTICAL, () => closure_6);
      const withResult2 = match.with(constants.HORIZONTAL, () => closure_5).with(constants.VERTICAL, () => closure_6).with(constants.DIAGONAL, () => ({ START: {}, END: {} }));
      return match.with(constants.HORIZONTAL, () => closure_5).with(constants.VERTICAL, () => closure_6).with(constants.DIAGONAL, () => ({ START: {}, END: {} })).with(constants.ANTI_DIAGONAL, () => ({ START: {}, END: {} })).exhaustive();
    }(direction);
    tmp8 = null;
    if (null != children) {
      tmp9 = importAll;
      tmp8 = null;
      if (importAll.isValidElement(children)) {
        tmp11 = importDefault;
        tmp12 = dependencyMap;
        num3 = 6;
        tmp10 = jsx;
        obj = {};
        obj.start = tmp6;
        obj.end = tmp7;
        items = [, ];
        items[0] = style;
        obj1 = {};
        obj1.borderRadius = borderRadius;
        obj1.padding = borderWidth;
        items[1] = obj1;
        obj.style = items;
        tmp14 = obj;
        tmp15 = merged;
        tmp13 = importDefault(dependencyMap[6]);
        merged1 = Object.assign(merged);
        cloneElementResult = null;
        if (null != children) {
          tmp18 = importAll;
          cloneElementResult = null;
          if (importAll.isValidElement(children)) {
            tmp19 = View;
            if (children.type === View) {
              tmp20 = importAll;
              Children = importAll.Children;
              onlyResult = Children.only(children);
              tmp22 = importAll;
              obj2 = {};
              tmp23 = obj2;
              merged2 = Object.assign(onlyResult.props);
              obj3 = {};
              tmp25 = obj3;
              merged3 = Object.assign(onlyResult.props.style);
              str = "borderRadius";
              obj3["borderRadius"] = borderRadius - borderWidth;
              str2 = "hidden";
              str3 = "overflow";
              obj3["overflow"] = "hidden";
              str4 = "style";
              obj2["style"] = obj3;
              cloneElementResult = importAll.cloneElement(onlyResult, obj2);
            }
          }
          tmp27 = jsx;
          tmp28 = View;
          obj4 = {};
          obj5 = {};
          borderRadius = borderRadius - borderWidth;
          obj5.borderRadius = borderRadius;
          obj4.style = obj5;
          obj4.children = children;
          cloneElementResult = jsx(View, obj4);
        }
        str5 = "children";
        obj["children"] = cloneElementResult;
        tmp10Result = tmp10(tmp13, obj);
      }
    }
    return tmp8;
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ HorizontalGradient: closure_5, VerticalGradient: closure_6 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const obj = { HORIZONTAL: "horizontal", VERTICAL: "vertical", DIAGONAL: "diagonal", ANTI_DIAGONAL: "anti-diagonal" };
GradientBorder.Direction = obj;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/void/GradientBorder/native/GradientBorder.tsx");

export default GradientBorder;
