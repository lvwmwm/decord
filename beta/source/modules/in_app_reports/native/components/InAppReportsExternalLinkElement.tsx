// Module ID: 12477
// Function ID: 12478
// Name: InAppReportsExternalLinkElement
// Dependencies: [17, 21, 4836, 6400, 4832, 1115, 8055, 5923, 12478, 4525, 2]
// Exports: default

// Module 12477 (InAppReportsExternalLinkElement)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1115 */;
import LinkingDefault from "Linking" /* 4525 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
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
      onPress() {
          const obj = LinkingDefault;
          obj.openURL(url);
        },
      arrow: false,
      accessibilityRole: "link"
    };
    const RowButton = url(8055).RowButton;
    obj2 = { IconComponent: url(12478).LinkExternalMediumIcon };
    TableRowIcon = url(5923).TableRowIcon;
    tmp3 = closure_4(RowButton, obj);
  }
  return tmp3;
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ linksContainer: { flex: 1, alignSelf: "stretch", paddingHorizontal: 16 }, headerText: { marginBottom: 8 } });
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

export default function ExternalLinksElement(elements) {
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
          const Text = tmp2(4832).Text;
          const tmp5 = React3;
          if (null != typeConsolidationEyebrow.style) {
            const items = [tmp.headerText, typeConsolidationEyebrow.style];
            headerText = items;
          } else {
            headerText = tmp.headerText;
          }
          const obj3 = { style: headerText, variant: typeConsolidationEyebrow.variant, color: "text-default", accessibilityRole: "header", children: stringResult };
          if (null != typeConsolidationEyebrow.style) {
            const intl2 = tmp2(1115).intl;
            stringResult = intl2.string(tmp2(1115).t.hvVgAZ);
          } else {
            const intl = tmp2(1115).intl;
            const str = intl.string(intl3.t.hvVgAZ);
            stringResult = str.toUpperCase();
          }
          tmp5Result = tmp5(Text, obj3);
        }
        items1 = [
          tmp5Result,
          elements.map((data, index) => {
                  const obj = { data: data.data };
                  return closure_1_4(ExternalLinkItem, obj, "external-link-" + index);
                })
        ];
        return tmp9(tmp10, obj2);
      }
    }
  }
  return null;
};
