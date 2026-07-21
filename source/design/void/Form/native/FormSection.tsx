// Module ID: 7184
// Function ID: 57830
// Name: hasTrailingError
// Dependencies: []
// Exports: default

// Module 7184 (hasTrailingError)
let Platform;
let StyleSheet;
function hasTrailingError(found) {
  const element = found[found.length - 1];
  if (React.isValidElement(element)) {
    if (element.type !== importDefault(dependencyMap[8])) {
      if (null != element.props) {
        const props = element.props;
        return "error" in props && null != props.error;
      }
    }
  }
  return false;
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet, Platform } = arg1(dependencyMap[1]));
const TitleStyleType = arg1(dependencyMap[2]).TitleStyleType;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { collapsable: "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}\u200D\u27A1\uFE0F", style: true, preventClipping: null, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.titledSectionHeader = obj;
obj.titledSectionNoBorder = { marginTop: 24 };
obj.titledSectionNoBorderOrMargin = {};
obj.emptySectionHeader = { marginTop: 24 };
obj.sectionBody = {};
obj.sectionBodyIOSBorder = {};
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/void/Form/native/FormSection.tsx");

export default function FormSection(arg0) {
  let accessibilityLabel;
  let accessibilityRole;
  let children;
  let description;
  let error;
  let hasIcons;
  let hint;
  let icon;
  let inset;
  let sectionBodyStyle;
  let thinTitle;
  let title;
  let titleStyleType;
  let titleTextStyle;
  let titleViewStyle;
  let uppercaseTitle;
  let wrapperStyle;
  ({ children, inset } = arg0);
  ({ icon, thinTitle } = arg0);
  if (inset === undefined) {
    inset = false;
  }
  ({ title, accessibilityRole, accessibilityLabel, titleStyleType, description, uppercaseTitle } = arg0);
  if (titleStyleType === undefined) {
    titleStyleType = TitleStyleType.DEFAULT;
  }
  ({ error, hint, hasIcons } = arg0);
  ({ titleViewStyle, titleTextStyle, sectionBodyStyle, wrapperStyle } = arg0);
  const tmp2 = callback2();
  if (React.useContext(arg1(dependencyMap[6]).RedesignCompatContext)) {
    const Children = React.Children;
    const toArrayResult = Children.toArray(children);
    let tmp23 = null != toArrayResult.find((type) => {
      let isValidElementResult = closure_3.isValidElement(type);
      if (isValidElementResult) {
        isValidElementResult = type.type === callback(closure_2[7]);
      }
      if (isValidElementResult) {
        const _Boolean = Boolean;
        isValidElementResult = Boolean(type.props.leading);
      }
      return isValidElementResult;
    });
    const found = toArrayResult.filter((type) => {
      const tmp = !closure_3.isValidElement(type);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = type.type !== callback(closure_2[8]);
      }
      return tmp2;
    });
    let obj = {};
    obj = { marginBottom: 24 };
    obj.style = obj;
    let obj1 = {};
    const obj2 = { paddingHorizontal: 12 };
    obj1.style = obj2;
    const obj3 = { title };
    if (null != hasIcons) {
      tmp23 = hasIcons;
    }
    obj3.hasIcons = tmp23;
    obj3.hasTrailingText = hasTrailingError(found);
    obj3.children = found;
    obj1.children = callback(arg1(dependencyMap[9]).TableRowGroup, obj3);
    const items = [callback(closure_4, obj1), ];
    let tmp31 = null;
    if (null != hint) {
      const obj4 = {};
      const obj5 = { marginTop: 8 };
      obj4.style = obj5;
      obj4.children = hint;
      tmp31 = callback(closure_4, obj4);
    }
    items[1] = tmp31;
    obj.children = items;
    return closure_7(closure_4, obj);
  } else {
    let tmp4;
    if (null != title) {
      let str2 = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str2 = "(" + error + ")";
      }
      obj = { textStyle: titleTextStyle, viewStyle: titleViewStyle };
      const _HermesInternal2 = HermesInternal;
      obj.title = "" + title + " " + str2;
      obj.icon = icon;
      obj.error = null != error;
      obj.thinTitle = thinTitle;
      obj.uppercaseTitle = uppercaseTitle;
      obj.inset = inset;
      tmp4 = callback(importDefault(dependencyMap[10]), obj);
      const tmp9 = importDefault(dependencyMap[10]);
    }
    const emptySectionHeader = tmp2.emptySectionHeader;
    let titledSectionNoBorderOrMargin = emptySectionHeader;
    if (null != tmp4) {
      if (TitleStyleType.DEFAULT === titleStyleType) {
        titledSectionNoBorderOrMargin = tmp2.titledSectionHeader;
      } else if (TitleStyleType.ANDROID_NO_BORDER === titleStyleType) {
        obj1 = arg1(dependencyMap[11]);
        titledSectionNoBorderOrMargin = obj1.isAndroid() ? tmp2.titledSectionNoBorder : tmp2.titledSectionHeader;
      } else {
        titledSectionNoBorderOrMargin = emptySectionHeader;
        if (TitleStyleType.NO_BORDER_OR_MARGIN === titleStyleType) {
          titledSectionNoBorderOrMargin = tmp2.titledSectionNoBorderOrMargin;
        }
      }
    }
    const obj6 = {};
    const items1 = [titledSectionNoBorderOrMargin, wrapperStyle];
    obj6.style = items1;
    let str6 = "list";
    if (null != accessibilityRole) {
      str6 = accessibilityRole;
    }
    obj6.accessibilityRole = str6;
    let tmp18 = title;
    if (null != accessibilityLabel) {
      tmp18 = accessibilityLabel;
    }
    obj6.accessibilityLabel = tmp18;
    const items2 = [tmp4, description, , ];
    const obj7 = {};
    const items3 = [tmp2.sectionBody, , ];
    let sectionBodyIOSBorder = !inset;
    if (sectionBodyIOSBorder) {
      sectionBodyIOSBorder = tmp2.sectionBodyIOSBorder;
    }
    items3[1] = sectionBodyIOSBorder;
    items3[2] = sectionBodyStyle;
    obj7.style = items3;
    obj7.children = children;
    items2[2] = callback(closure_4, obj7);
    items2[3] = hint;
    obj6.children = items2;
    return closure_7(closure_4, obj6);
  }
};
