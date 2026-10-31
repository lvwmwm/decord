// Module ID: 15171
// Function ID: 15172
// Name: InAppReportsExternalLinkElement
// Dependencies: [17, 21, 5014, 575, 7148, 5624, 1113, 8179, 6983, 15172, 5709, 2]
// Exports: default

// Module 15171 (InAppReportsExternalLinkElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import LinkingDefault from "Linking" /* 5709 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function ExternalLinkItem(data) {
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
    const RowButton = url(8179).RowButton;
    obj2 = { IconComponent: url(15172).LinkExternalMediumIcon };
    TableRowIcon = url(6983).TableRowIcon;
    tmp3 = closure_4(RowButton, obj);
  }
  return tmp3;
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { linksContainer: obj2 };
obj2 = { flex: 1, alignSelf: "stretch", paddingHorizontal: 16, gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

export default function ExternalLinksElement(elements) {
  let items;
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
        const obj3 = { style: tmp.linksContainer, children: items };
        const tmp10 = View;
        const tmp9 = hasOwnProperty;
        if (!someResult) {
          const obj5 = { style: null, variant: null, color: "text-default", accessibilityRole: "header", children: stringResult };
          ({ style: obj2.style, variant: obj2.variant } = typeConsolidationEyebrow);
          const Text = tmp2(5624).Text;
          const tmp5 = React3;
          if (null != typeConsolidationEyebrow.style) {
            const intl2 = tmp2(1113).intl;
            stringResult = intl2.string(tmp2(1113).t.hvVgAZ);
          } else {
            const intl = tmp2(1113).intl;
            const str = intl.string(intl3.t.hvVgAZ);
            stringResult = str.toUpperCase();
          }
          tmp5Result = tmp5(Text, obj5);
        }
        items = [
          tmp5Result,
          elements.map((data, index) => {
                  const obj = { data: data.data };
                  return closure_1_4(ExternalLinkItem, obj, "external-link-" + index);
                })
        ];
        return tmp9(tmp10, obj3);
      }
    }
  }
  return null;
};
