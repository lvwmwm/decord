// Module ID: 11530
// Function ID: 11531
// Name: NoResults
// Dependencies: [19, 17, 21, 5091, 558, 576, 5087, 2]

// Module 11530 (NoResults)
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 5087 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ View: c2, ScrollView: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ headerContainer: { paddingHorizontal: 16 }, container: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16, paddingBottom: 16, paddingTop: 32 }, image: { marginBottom: 12 }, textContainer: { justifyContent: "center", alignItems: "center" }, text: { textAlign: "center", marginTop: 4 }, fullHeightContentContainer: { paddingBottom: 0, paddingTop: 0 }, fullHeightScrollContent: { flexGrow: 1 } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function NoResults(arg0) {
  let children;
  let containerStyle;
  let fullHeight;
  let illustration;
  let items;
  let items1;
  let items2;
  let subtitle;
  let title;
  const obj = react2;
  const cResult = obj.c(26);
  ({ title, subtitle, children, containerStyle, fullHeight, illustration } = arg0);
  let fullHeightContentContainer = undefined !== fullHeight && fullHeight;
  const tmp4 = closure_6();
  if (fullHeightContentContainer) {
    fullHeightContentContainer = tmp4.fullHeightContentContainer;
  }
  if (cResult[0] === containerStyle) {
    if (cResult[1] === tmp4.container) {
      let tmp6;
      if (cResult[2] === fullHeightContentContainer) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === illustration) {
        let tmp7;
        if (cResult[5] === tmp4.image) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp4.text) {
          let tmp12;
          if (cResult[8] === title) {
            tmp12 = cResult[9];
          }
          if (cResult[10] === tmp4.text) {
            let tmp15;
            if (cResult[11] === subtitle) {
              tmp15 = cResult[12];
            }
            if (cResult[13] === tmp4.textContainer) {
              if (cResult[14] === tmp12) {
                let tmp18;
                if (cResult[15] === tmp15) {
                  tmp18 = cResult[16];
                }
                if (cResult[17] === tmp6) {
                  if (cResult[18] === tmp7) {
                    let tmp22;
                    if (cResult[19] === tmp18) {
                      tmp22 = cResult[20];
                    }
                    if (cResult[21] === children) {
                      if (cResult[22] === tmp4.headerContainer) {
                        if (cResult[23] === (fullHeightContentContainer && tmp4.fullHeightScrollContent)) {
                          let tmp26;
                          if (cResult[24] === tmp22) {
                            tmp26 = cResult[25];
                          }
                          return tmp26;
                        }
                      }
                    }
                    const obj2 = { style: tmp4.headerContainer, alwaysBounceVertical: false, contentContainerStyle: fullHeightContentContainer && tmp4.fullHeightScrollContent, children: items };
                    items = [tmp22, children];
                    const tmp29 = hasOwnProperty(_false, obj2);
                    cResult[21] = children;
                    cResult[22] = tmp4.headerContainer;
                    cResult[23] = fullHeightContentContainer && tmp4.fullHeightScrollContent;
                    cResult[24] = tmp22;
                    cResult[25] = tmp29;
                    tmp26 = tmp29;
                  }
                }
                const obj3 = { style: tmp6, children: items1 };
                items1 = [tmp7, tmp18];
                const tmp25 = hasOwnProperty(React2, obj3);
                cResult[17] = tmp6;
                cResult[18] = tmp7;
                cResult[19] = tmp18;
                cResult[20] = tmp25;
                tmp22 = tmp25;
              }
            }
            const obj4 = { style: tmp4.textContainer, children: items2 };
            items2 = [tmp12, tmp15];
            const tmp21 = hasOwnProperty(React2, obj4);
            cResult[13] = tmp4.textContainer;
            cResult[14] = tmp12;
            cResult[15] = tmp15;
            cResult[16] = tmp21;
            tmp18 = tmp21;
          }
          let tmp16 = null;
          if (null != subtitle) {
            const obj5 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp4.text, children: subtitle };
            tmp16 = React3(tmp(5087).Text, obj5);
          }
          cResult[10] = tmp4.text;
          cResult[11] = subtitle;
          cResult[12] = tmp16;
          tmp15 = tmp16;
        }
        const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp4.text, children: title };
        const tmp14 = React3(Text_Text.Text, obj6);
        cResult[7] = tmp4.text;
        cResult[8] = title;
        cResult[9] = tmp14;
        tmp12 = tmp14;
      }
      let tmp9 = null != illustration;
      if (tmp9) {
        const obj7 = { style: tmp4.image, children: React3(illustration, {}) };
        tmp9 = React3(React2, obj7);
      }
      cResult[4] = illustration;
      cResult[5] = tmp4.image;
      cResult[6] = tmp9;
      tmp7 = tmp9;
    }
  }
  const items3 = [tmp4.container, fullHeightContentContainer, containerStyle];
  cResult[0] = containerStyle;
  cResult[1] = tmp4.container;
  cResult[2] = fullHeightContentContainer;
  cResult[3] = items3;
  tmp6 = items3;
}) : (function NoResults(illustration) {
  let children;
  let containerStyle;
  let fullHeight;
  let fullHeightScrollContent;
  let items1;
  let items2;
  let items3;
  let subtitle;
  let title;
  ({ subtitle, fullHeight } = illustration);
  ({ title, children, containerStyle } = illustration);
  if (fullHeight === undefined) {
    fullHeight = false;
  }
  illustration = illustration.illustration;
  const tmp = closure_6();
  const obj = { style: tmp.headerContainer, alwaysBounceVertical: false, contentContainerStyle: fullHeightScrollContent, children: items3 };
  fullHeightScrollContent = fullHeight;
  const tmp3 = _false;
  if (fullHeight) {
    fullHeightScrollContent = tmp.fullHeightScrollContent;
  }
  const items = [tmp.container, , ];
  if (fullHeight) {
    fullHeight = tmp.fullHeightContentContainer;
  }
  const obj2 = { style: items, children: items1 };
  items[1] = fullHeight;
  items[2] = containerStyle;
  let tmp5 = null != illustration;
  if (tmp5) {
    const obj3 = { style: tmp.image, children: React3(illustration, {}) };
    tmp5 = React3(tmp4, obj3);
  }
  items1 = [tmp5, ];
  const obj4 = { style: tmp.textContainer, children: items2 };
  items2 = [, ];
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp.text, children: title };
  items2[0] = React3(Text_Text.Text, obj5);
  let tmp7Result = null;
  const tmp7 = React3;
  if (null != subtitle) {
    const obj6 = { variant: "text-xs/medium", color: "interactive-text-default", style: tmp.text, children: subtitle };
    tmp7Result = tmp7(Text_Text.Text, obj6);
  }
  items2[1] = tmp7Result;
  items1[1] = hasOwnProperty(React2, obj4);
  items3 = [hasOwnProperty(React2, obj2), children];
  return hasOwnProperty(tmp3, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NoResults.tsx");

export default tmp5;
