// Module ID: 15457
// Function ID: 15458
// Name: InAppReportsExternalLinkElement
// Dependencies: [17, 21, 5140, 575, 5751, 1113, 8432, 15458, 5834, 2]
// Exports: default

// Module 15457 (InAppReportsExternalLinkElement)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5751 */;
import LinkingDefault from "Linking" /* 5834 */;
import InAppReportsOptionRowDefault from "InAppReportsOptionRow" /* 8432 */;
import LinkExternalMediumIcon2 from "LinkExternalMediumIcon" /* 15458 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
function ExternalLinkItem(data) {
  let LinkExternalMediumIcon;
  let is_localized;
  let link_description;
  let link_text;
  let obj2;
  let obj3;
  let tmp3Result;
  data = data.data;
  ({ url: require, link_description } = data);
  ({ link_text, is_localized } = data);
  const tmp = closure_6();
  let tmp3Result2 = null;
  if (is_localized) {
    let obj = {
      label: link_text,
      trailing: closure_4(View, obj2),
      onPress: function onLinkPress() {
          const obj = LinkingDefault;
          obj.openURL(require);
        },
      accessibilityRole: "link",
      children: tmp3Result
    };
    obj2 = { style: tmp.linkIcon, children: closure_4(LinkExternalMediumIcon, obj3) };
    obj3 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    const tmp6 = InAppReportsOptionRowDefault;
    LinkExternalMediumIcon = LinkExternalMediumIcon2.LinkExternalMediumIcon;
    tmp3Result = null != link_description;
    const tmp8 = require;
    if (tmp3Result) {
      const obj4 = { style: tmp.linkDescription, variant: "body-xs/medium", color: "text-subtle", children: link_description };
      tmp3Result = tmp3(tmp8(5751).Text, obj4);
    }
    tmp3Result2 = tmp3(tmp6, obj);
  }
  return tmp3Result2;
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { linksContainer: obj2, linkIcon: size, linkDescription: obj3 };
obj2 = { flex: 1, alignSelf: "stretch", paddingHorizontal: 16, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, alignItems: "center", justifyContent: "center" };
obj3 = { marginTop: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
size = size_mod;
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
