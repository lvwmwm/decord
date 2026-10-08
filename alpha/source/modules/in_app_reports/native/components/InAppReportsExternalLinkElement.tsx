// Module ID: 13405
// Function ID: 13406
// Name: InAppReportsExternalLinkElement
// Dependencies: [17, 21, 5090, 558, 576, 6654, 5086, 1126, 4763, 6192, 13406, 8557, 2]

// Module 13405 (InAppReportsExternalLinkElement)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import LinkingDefault from "Linking" /* 4763 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6654 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 }, headerText: { marginBottom: 8 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalLinksElement(elements) {
  let items;
  let stringResult;
  let obj = react;
  const cResult = obj.c(14);
  elements = elements.elements;
  const tmp4 = closure_6();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("InAppReportsExternalLink", "heading-deprecated-12/extrabold");
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        let tmp6;
        if (cResult[0] !== elements) {
          let tmp8;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function p(data) {
              return data.data.is_header_hidden;
            };
            cResult[2] = fn;
            tmp8 = fn;
          } else {
            tmp8 = cResult[2];
          }
          const someResult = elements.some(tmp8);
          cResult[0] = elements;
          cResult[1] = someResult;
          tmp6 = someResult;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[3] === typeConsolidationEyebrow) {
          if (cResult[4] === tmp6) {
            let tmp11;
            let tmp15;
            if (cResult[5] === tmp4.headerText) {
              tmp11 = cResult[6];
            }
            if (cResult[7] !== elements) {
              let tmp17;
              const _Symbol2 = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const fn2 = function f(data, arg1) {
                  const obj = { data: data.data };
                  return closure_1_4(closure_1_7, obj, "external-link-" + arg1);
                };
                cResult[9] = fn2;
                tmp17 = fn2;
              } else {
                tmp17 = cResult[9];
              }
              const mapped = elements.map(tmp17);
              cResult[7] = elements;
              cResult[8] = mapped;
              tmp15 = mapped;
            } else {
              tmp15 = cResult[8];
            }
            if (cResult[10] === tmp4.linksContainer) {
              if (cResult[11] === tmp11) {
                let tmp19;
                if (cResult[12] === tmp15) {
                  tmp19 = cResult[13];
                }
                return tmp19;
              }
            }
            const obj3 = { style: tmp10, children: items };
            items = [tmp11, tmp15];
            const tmp22 = hasOwnProperty(View, obj3);
            cResult[10] = tmp4.linksContainer;
            cResult[11] = tmp11;
            cResult[12] = tmp15;
            cResult[13] = tmp22;
            tmp19 = tmp22;
          }
        }
        let tmp13Result = !tmp6;
        if (tmp13Result) {
          let headerText;
          const Text = tmp(5086).Text;
          const tmp13 = React3;
          if (null != typeConsolidationEyebrow.style) {
            const items1 = [tmp4.headerText, typeConsolidationEyebrow.style];
            headerText = items1;
          } else {
            headerText = tmp4.headerText;
          }
          const obj4 = { style: headerText, variant: typeConsolidationEyebrow.variant, color: "text-default", accessibilityRole: "header", children: stringResult };
          if (null != typeConsolidationEyebrow.style) {
            const intl2 = tmp(1126).intl;
            stringResult = intl2.string(tmp(1126).t.hvVgAZ);
          } else {
            const intl = tmp(1126).intl;
            const str2 = intl.string(intl3.t.hvVgAZ);
            stringResult = str2.toUpperCase();
          }
          tmp13Result = tmp13(Text, obj4);
        }
        cResult[3] = typeConsolidationEyebrow;
        cResult[4] = tmp6;
        cResult[5] = tmp4.headerText;
        cResult[6] = tmp13Result;
        tmp11 = tmp13Result;
      }
    }
  }
  return null;
}) : (function ExternalLinksElement(elements) {
  let items1;
  let stringResult;
  elements = elements.elements;
  const tmp = closure_6();
  let obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsExternalLink", "heading-deprecated-12/extrabold");
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        const someResult = elements.some((data) => data.data.is_header_hidden);
        let tmp5Result = !someResult;
        const obj2 = { style: tmp.linksContainer, children: items1 };
        const tmp10 = View;
        const tmp9 = hasOwnProperty;
        if (!someResult) {
          let headerText;
          const Text = tmp2(5086).Text;
          const tmp5 = React3;
          if (null != typeConsolidationEyebrow.style) {
            const items = [tmp.headerText, typeConsolidationEyebrow.style];
            headerText = items;
          } else {
            headerText = tmp.headerText;
          }
          const obj3 = { style: headerText, variant: typeConsolidationEyebrow.variant, color: "text-default", accessibilityRole: "header", children: stringResult };
          if (null != typeConsolidationEyebrow.style) {
            const intl2 = tmp2(1126).intl;
            stringResult = intl2.string(tmp2(1126).t.hvVgAZ);
          } else {
            const intl = tmp2(1126).intl;
            const str = intl.string(intl3.t.hvVgAZ);
            stringResult = str.toUpperCase();
          }
          tmp5Result = tmp5(Text, obj3);
        }
        items1 = [
          tmp5Result,
          elements.map((data, index) => {
                  const obj = { data: data.data };
                  return closure_1_4(closure_1_7, obj, "external-link-" + index);
                })
        ];
        return tmp9(tmp10, obj2);
      }
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalLinkItem(data) {
  let link_description;
  let link_text;
  let url;
  let obj = url(576);
  const cResult = obj.c(7);
  data = data.data;
  url = data.url;
  ({ link_text, link_description } = data);
  if (data.is_localized) {
    let tmp5;
    let tmp7;
    if (cResult[0] !== url) {
      function onLinkPress() {
        const obj = LinkingDefault;
        obj.openURL(url);
      }
      cResult[0] = url;
      cResult[1] = onLinkPress;
      tmp5 = onLinkPress;
    } else {
      tmp5 = cResult[1];
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { IconComponent: url(13406).LinkExternalMediumIcon };
      const TableRowIcon = tmp(6192).TableRowIcon;
      const tmp9 = closure_4(TableRowIcon, obj2);
      cResult[2] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] === link_description) {
      if (cResult[4] === link_text) {
        let tmp10;
        if (cResult[5] === tmp5) {
          tmp10 = cResult[6];
        }
        return tmp10;
      }
    }
    const obj3 = { label: link_text, subLabel: link_description, trailing: tmp7, onPress: tmp5, arrow: false, accessibilityRole: "link" };
    const tmp12 = closure_4(url(8557).RowButton, obj3);
    cResult[3] = link_description;
    cResult[4] = link_text;
    cResult[5] = tmp5;
    cResult[6] = tmp12;
    tmp10 = tmp12;
  } else {
    return null;
  }
}) : (function ExternalLinkItem(data) {
  let TableRowIcon;
  let obj2;
  data = data.data;
  const url = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    let obj = {
      label: tmp,
      subLabel: tmp2,
      trailing: closure_4(TableRowIcon, obj2),
      onPress: function onLinkPress() {
          const obj = LinkingDefault;
          obj.openURL(url);
        },
      arrow: false,
      accessibilityRole: "link"
    };
    const RowButton = url(8557).RowButton;
    obj2 = { IconComponent: url(13406).LinkExternalMediumIcon };
    TableRowIcon = url(6192).TableRowIcon;
    tmp3 = closure_4(RowButton, obj);
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

export default tmp3;
