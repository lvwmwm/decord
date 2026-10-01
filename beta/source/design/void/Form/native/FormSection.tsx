// Module ID: 8062
// Function ID: 8063
// Name: FormSection
// Dependencies: [19, 17, 1181, 21, 4836, 576, 5998, 6558, 8059, 5999, 8063, 1364, 2]
// Exports: default

// Module 8062 (FormSection)
import nativeDefault from "native" /* 576 */;
import FormConstants from "FormConstants" /* 1181 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import RedesignCompat from "RedesignCompat" /* 5998 */;
import FormRowDefault from "FormRow" /* 6558 */;
import FormDividerDefault from "FormDivider" /* 8059 */;
import FormTitleDefault from "FormTitle" /* 8063 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Platform;
let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, StyleSheet, Platform } = react_native);
const TitleStyleType = FormConstants.TitleStyleType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const obj = { titledSectionHeader: obj2, titledSectionNoBorder: { marginTop: 24 }, titledSectionNoBorderOrMargin: {}, emptySectionHeader: { marginTop: 24 }, sectionBody: {}, sectionBodyIOSBorder: {} };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 16 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormSection.tsx");

export default function FormSection(arg0) {
  let TableRowGroup;
  let accessibilityLabel;
  let accessibilityRole;
  let children;
  let description;
  let error;
  let flag;
  let hasIcons;
  let hint;
  let icon;
  let inset;
  let items;
  let items1;
  let items2;
  let obj4;
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
  const tmp2 = closure_8();
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    const Children = obj.Children;
    const toArrayResult = Children.toArray(children);
    const tmp17 = null != toArrayResult.find((type) => {
      let isValidElementResult = react.isValidElement(type) && type.type === FormRowDefault;
      if (isValidElementResult) {
        const _Boolean = Boolean;
        isValidElementResult = Boolean(type.props.leading);
      }
      return isValidElementResult;
    });
    const found = toArrayResult.filter((type) => {
      const isValidElementResult = react.isValidElement(type) && type.type !== FormDividerDefault;
      return isValidElementResult;
    });
    const obj2 = { style: { marginBottom: 24 }, children: items };
    const obj3 = { style: { paddingHorizontal: 12 }, children: metroRequire(TableRowGroup, obj4) };
    obj4 = { title, hasIcons, hasTrailingText: flag, children: found };
    TableRowGroup = tmp3(5999).TableRowGroup;
    const tmp18 = metroImportDefault;
    if (hasIcons == null) {
      hasIcons = tmp17;
    }
    const element = found[found.length - 1];
    flag = false;
    if (react.isValidElement(element)) {
      flag = false;
      if (element.type !== FormDividerDefault) {
        flag = false;
        if (null != element.props) {
          const props = element.props;
          flag = "error" in props && null != props.error;
        }
      }
    }
    items = [metroRequire(React3, obj3), ];
    let tmp20Result = null;
    if (null != hint) {
      const obj5 = { style: { marginTop: 8 }, children: hint };
      tmp20Result = tmp20(tmp19, obj5);
    }
    items[1] = tmp20Result;
    return tmp18(React3, obj2);
  } else {
    let tmp6;
    if (null != title) {
      let str2 = "";
      if (null != error) {
        const _HermesInternal = HermesInternal;
        str2 = "(" + error + ")";
      }
      const _HermesInternal2 = HermesInternal;
      const obj6 = { textStyle: titleTextStyle, viewStyle: titleViewStyle, title: "" + title + " " + str2, icon, error: null != error, thinTitle, uppercaseTitle, inset };
      const tmp10 = FormTitleDefault;
      tmp6 = metroRequire(tmp10, obj6);
    }
    const emptySectionHeader = tmp2.emptySectionHeader;
    let titledSectionNoBorderOrMargin = emptySectionHeader;
    if (null != tmp6) {
      if (TitleStyleType.DEFAULT === titleStyleType) {
        titledSectionNoBorderOrMargin = tmp2.titledSectionHeader;
      } else if (TitleStyleType.ANDROID_NO_BORDER === titleStyleType) {
        const tmp3Result = PlatformUtils;
        titledSectionNoBorderOrMargin = tmp3Result.isAndroid() ? tmp2.titledSectionNoBorder : tmp2.titledSectionHeader;
      } else {
        titledSectionNoBorderOrMargin = emptySectionHeader;
        if (TitleStyleType.NO_BORDER_OR_MARGIN === titleStyleType) {
          titledSectionNoBorderOrMargin = tmp2.titledSectionNoBorderOrMargin;
        }
      }
    }
    const obj7 = { style: items1, accessibilityRole, accessibilityLabel, children: items2 };
    items1 = [titledSectionNoBorderOrMargin, wrapperStyle];
    const tmp13 = metroImportDefault;
    if (accessibilityRole == null) {
      accessibilityRole = "list";
    }
    if (accessibilityLabel == null) {
      accessibilityLabel = title;
    }
    items2 = [tmp6, description, , ];
    const items3 = [tmp2.sectionBody, , ];
    let sectionBodyIOSBorder = !inset;
    const tmp15 = metroRequire;
    if (!inset) {
      sectionBodyIOSBorder = tmp2.sectionBodyIOSBorder;
    }
    const obj8 = { style: items3, children };
    items3[1] = sectionBodyIOSBorder;
    items3[2] = sectionBodyStyle;
    items2[2] = tmp15(React3, obj8);
    items2[3] = hint;
    return tmp13(React3, obj7);
  }
};
