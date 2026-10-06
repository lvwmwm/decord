// Module ID: 12451
// Function ID: 12452
// Name: ForumChannelEmptyState
// Dependencies: [19, 17, 21, 4896, 558, 576, 4735, 1618, 12452, 12453, 1126, 4892, 2]

// Module 12451 (ForumChannelEmptyState)
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import shared from "shared" /* 4735 */;
import Text_Text from "Text/Text" /* 4892 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelName;
  let items;
  let tagFilter;
  let tmp8;
  let topViewHeight;
  const obj = react2;
  const cResult = obj.c(26);
  ({ topViewHeight, channelName, tagFilter } = arg0);
  let num = 0;
  if (undefined !== topViewHeight) {
    num = topViewHeight;
  }
  const tmp4 = closure_7();
  const tmpResult = shared;
  const theme = tmpResult.useThemeContext().theme;
  const rect = useSafeAreaInsetsDefault();
  const sum = rect.bottom + rect.top + num;
  if (cResult[0] !== sum) {
    const obj2 = { marginBottom: sum };
    cResult[0] = sum;
    cResult[1] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp4.container) {
    let tmp9;
    let tmp5Result;
    if (cResult[3] === tmp8) {
      tmp9 = cResult[4];
    }
    const tmpResult2 = shared;
    if (tmpResult2.isThemeLight(theme)) {
      tmp5Result = tmp5(12452);
    } else {
      tmp5Result = tmp5(12453);
    }
    if (cResult[5] === tmp4.image) {
      let tmp11;
      let formatToPlainStringResult1;
      if (cResult[6] === tmp5Result) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tagFilter.size > 0) {
        let tmp15;
        if (cResult[9] === tagFilter.size) {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp4.title) {
          let tmp17;
          let formatToPlainStringResult;
          if (cResult[12] === tmp15) {
            tmp17 = cResult[13];
          }
          if (cResult[14] === channelName) {
            if (cResult[15] === tagFilter.size > 0) {
              let tmp20;
              if (cResult[16] === tagFilter.size) {
                tmp20 = cResult[17];
              }
              if (cResult[18] === tmp4.subtext) {
                let tmp22;
                if (cResult[19] === tmp20) {
                  tmp22 = cResult[20];
                }
                if (cResult[21] === tmp9) {
                  if (cResult[22] === tmp11) {
                    if (cResult[23] === tmp17) {
                      let tmp25;
                      if (cResult[24] === tmp22) {
                        tmp25 = cResult[25];
                      }
                      return tmp25;
                    }
                  }
                }
                const obj3 = { style: tmp9, children: items };
                items = [tmp11, tmp17, tmp22];
                const tmp28 = metroRequire(_false, obj3);
                cResult[21] = tmp9;
                cResult[22] = tmp11;
                cResult[23] = tmp17;
                cResult[24] = tmp22;
                cResult[25] = tmp28;
                tmp25 = tmp28;
              }
              const obj4 = { style: tmp4.subtext, variant: "text-sm/medium", color: "text-default", children: tmp20 };
              const tmp24 = hasOwnProperty(Text_Text.Text, obj4);
              cResult[18] = tmp4.subtext;
              cResult[19] = tmp20;
              cResult[20] = tmp24;
              tmp22 = tmp24;
            }
          }
          const intl2 = tmp(1126).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const t = tmp(1126).t;
          if (tagFilter.size > 0) {
            const obj5 = { numTags: tagFilter.size };
            formatToPlainStringResult = formatToPlainString(t.AAeye1, obj5);
          } else {
            const obj6 = { channelName };
            formatToPlainStringResult = formatToPlainString(t.YtsXFD, obj6);
          }
          cResult[14] = channelName;
          cResult[15] = tagFilter.size > 0;
          cResult[16] = tagFilter.size;
          cResult[17] = formatToPlainStringResult;
          tmp20 = formatToPlainStringResult;
        }
        const obj7 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp15 };
        const tmp19 = hasOwnProperty(Text_Text.Text, obj7);
        cResult[11] = tmp4.title;
        cResult[12] = tmp15;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
      const intl = tmp(1126).intl;
      if (tagFilter.size > 0) {
        const obj8 = { numTags: tagFilter.size };
        formatToPlainStringResult1 = intl.formatToPlainString(tmp(1126).t.lvPci0, obj8);
      } else {
        formatToPlainStringResult1 = intl.string(tmp(1126).t.PwTMG0);
      }
      cResult[8] = tagFilter.size > 0;
      cResult[9] = tagFilter.size;
      cResult[10] = formatToPlainStringResult1;
      tmp15 = formatToPlainStringResult1;
    }
    const obj9 = { source: tmp5Result, style: tmp4.image };
    const tmp14 = hasOwnProperty(React3, obj9);
    cResult[5] = tmp4.image;
    cResult[6] = tmp5Result;
    cResult[7] = tmp14;
    tmp11 = tmp14;
  }
  const items1 = [tmp4.container, tmp8];
  cResult[2] = tmp4.container;
  cResult[3] = tmp8;
  cResult[4] = items1;
  tmp9 = items1;
}) : ((topViewHeight) => {
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let items;
  let items1;
  let tmp4Result;
  let num = topViewHeight.topViewHeight;
  if (num === undefined) {
    num = 0;
  }
  const tagFilter = topViewHeight.tagFilter;
  const channelName = topViewHeight.channelName;
  const tmp = closure_7();
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: items, children: items1 };
  items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  const obj3 = shared;
  const tmp6 = metroRequire;
  const tmp7 = _false;
  const tmp9 = React3;
  if (obj3.isThemeLight(theme)) {
    tmp4Result = tmp4(12452);
  } else {
    tmp4Result = tmp4(12453);
  }
  items1 = [, , ];
  const obj4 = { source: tmp4Result, style: tmp.image };
  items1[0] = hasOwnProperty(tmp9, obj4);
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: formatToPlainStringResult };
  const Text = tmp2(4892).Text;
  const intl = tmp2(1126).intl;
  if (tagFilter.size > 0) {
    const obj6 = { numTags: tagFilter.size };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t.lvPci0, obj6);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1126).t.PwTMG0);
  }
  items1[1] = hasOwnProperty(Text, obj5);
  const obj7 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult1 };
  const Text2 = tmp2(4892).Text;
  const intl2 = tmp2(1126).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp2(1126).t;
  if (tagFilter.size > 0) {
    const obj8 = { numTags: tagFilter.size };
    formatToPlainStringResult1 = formatToPlainString(t.AAeye1, obj8);
  } else {
    const obj9 = { channelName };
    formatToPlainStringResult1 = formatToPlainString(t.YtsXFD, obj9);
  }
  items1[2] = hasOwnProperty(Text2, obj7);
  return tmp6(tmp7, obj2);
}));
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;
