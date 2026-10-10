// Module ID: 12533
// Function ID: 12534
// Name: ForumChannelEmptyState
// Dependencies: [19, 17, 21, 5092, 558, 576, 4969, 1631, 12534, 12535, 6156, 1126, 5088, 2]

// Module 12533 (ForumChannelEmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import shared from "shared" /* 4969 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flex: 1, alignSelf: "stretch", justifyContent: "center", alignItems: "center" }, image: { width: 120, height: 80 }, title: { textAlign: "center", marginTop: 16, marginHorizontal: 20 }, subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 20 } });
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ForumChannelEmptyState(arg0) {
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
  const tmp4 = closure_6();
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
      tmp5Result = tmp5(12534);
    } else {
      tmp5Result = tmp5(12535);
    }
    if (cResult[5] === tmp4.image) {
      let tmp11;
      let formatToPlainStringResult1;
      if (cResult[6] === tmp5Result) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tagFilter.size > 0) {
        let tmp14;
        if (cResult[9] === tagFilter.size) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4.title) {
          let tmp16;
          let formatToPlainStringResult;
          if (cResult[12] === tmp14) {
            tmp16 = cResult[13];
          }
          if (cResult[14] === channelName) {
            if (cResult[15] === tagFilter.size > 0) {
              let tmp19;
              if (cResult[16] === tagFilter.size) {
                tmp19 = cResult[17];
              }
              if (cResult[18] === tmp4.subtext) {
                let tmp21;
                if (cResult[19] === tmp19) {
                  tmp21 = cResult[20];
                }
                if (cResult[21] === tmp9) {
                  if (cResult[22] === tmp11) {
                    if (cResult[23] === tmp16) {
                      let tmp24;
                      if (cResult[24] === tmp21) {
                        tmp24 = cResult[25];
                      }
                      return tmp24;
                    }
                  }
                }
                const obj3 = { style: tmp9, children: items };
                items = [tmp11, tmp16, tmp21];
                const tmp27 = hasOwnProperty(View, obj3);
                cResult[21] = tmp9;
                cResult[22] = tmp11;
                cResult[23] = tmp16;
                cResult[24] = tmp21;
                cResult[25] = tmp27;
                tmp24 = tmp27;
              }
              const obj4 = { style: tmp4.subtext, variant: "text-sm/medium", color: "text-default", children: tmp19 };
              const tmp23 = React3(Text_Text.Text, obj4);
              cResult[18] = tmp4.subtext;
              cResult[19] = tmp19;
              cResult[20] = tmp23;
              tmp21 = tmp23;
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
          tmp19 = formatToPlainStringResult;
        }
        const obj7 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp14 };
        const tmp18 = React3(Text_Text.Text, obj7);
        cResult[11] = tmp4.title;
        cResult[12] = tmp14;
        cResult[13] = tmp18;
        tmp16 = tmp18;
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
      tmp14 = formatToPlainStringResult1;
    }
    const obj9 = { source: tmp5Result, style: tmp4.image };
    const tmp13 = React3(FastImageDefault, obj9);
    cResult[5] = tmp4.image;
    cResult[6] = tmp5Result;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const items1 = [tmp4.container, tmp8];
  cResult[2] = tmp4.container;
  cResult[3] = tmp8;
  cResult[4] = items1;
  tmp9 = items1;
}) : (function ForumChannelEmptyState(topViewHeight) {
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
  const tmp = closure_6();
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: items, children: items1 };
  items = [tmp.container, { marginBottom: rect.bottom + rect.top + num }];
  const tmp9 = FastImageDefault;
  const obj3 = shared;
  const tmp6 = hasOwnProperty;
  const tmp7 = View;
  if (obj3.isThemeLight(theme)) {
    tmp4Result = tmp4(12534);
  } else {
    tmp4Result = tmp4(12535);
  }
  items1 = [, , ];
  const obj4 = { source: tmp4Result, style: tmp.image };
  items1[0] = React3(tmp9, obj4);
  const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: formatToPlainStringResult };
  const Text = tmp2(5088).Text;
  const intl = tmp2(1126).intl;
  if (tagFilter.size > 0) {
    const obj6 = { numTags: tagFilter.size };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t.lvPci0, obj6);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1126).t.PwTMG0);
  }
  items1[1] = React3(Text, obj5);
  const obj7 = { style: tmp.subtext, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult1 };
  const Text2 = tmp2(5088).Text;
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
  items1[2] = React3(Text2, obj7);
  return tmp6(tmp7, obj2);
}));
const result = size.fileFinishedImporting("modules/forums/native/ForumChannelEmptyState.tsx");

export default memoResult;
