// Module ID: 15316
// Function ID: 15317
// Name: InAppReportsExternalLinkElement
// Dependencies: [17, 21, 5141, 575, 5747, 1113, 8303, 7109, 15317, 5829, 2]
// Exports: default

// Module 15316 (InAppReportsExternalLinkElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5747 */;
import LinkingDefault from "Linking" /* 5829 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
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
    const RowButton = url(8303).RowButton;
    obj2 = { IconComponent: url(15317).LinkExternalMediumIcon };
    TableRowIcon = url(7109).TableRowIcon;
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
  let intl;
  let items;
  elements = elements.elements;
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        const someResult = elements.some((data) => data.data.is_header_hidden);
        let tmp5 = !someResult;
        const obj2 = { style: tmp.linksContainer, children: items };
        const tmp7 = hasOwnProperty;
        const tmp8 = View;
        if (!someResult) {
          let obj = { variant: "body-sm/medium", color: "text-default", accessibilityRole: "header", children: intl.string(intl2.t.hvVgAZ) };
          const Text = Text_Text.Text;
          intl = intl2.intl;
          tmp5 = React3(Text, obj);
        }
        items = [
          tmp5,
          elements.map((data, index) => {
                  const obj = { data: data.data };
                  return closure_1_4(ExternalLinkItem, obj, "external-link-" + index);
                })
        ];
        return tmp7(tmp8, obj2);
      }
    }
  }
  return null;
};
