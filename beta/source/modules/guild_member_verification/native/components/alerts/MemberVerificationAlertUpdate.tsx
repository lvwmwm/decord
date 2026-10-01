// Module ID: 6511
// Function ID: 6512
// Name: MemberVerificationAlertUpdate
// Dependencies: [19, 17, 1074, 21, 4836, 5300, 1115, 4525, 6512, 4832, 2]
// Exports: default

// Module 6511 (MemberVerificationAlertUpdate)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import AssetRegistryDefault from "AssetRegistry" /* 6512 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const Image = react_native.Image;
const DownloadLinks = Constants.DownloadLinks;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default function MemberVerificationAlertUpdate(onClose) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  const tmp = closure_7();
  let obj = {
    confirmText: intl.string(intl5.t.b8siyY),
    cancelText: intl2.string(intl5.t["ETE/oC"]),
    onConfirm() {
      const obj = LinkingDefault;
      return obj.openURL(constants.IOS);
    },
    onCancel: onClose.onClose,
    children: items
  };
  const tmp2 = AlertDefault;
  const merged = Object.assign(onClose);
  intl = intl5.intl;
  intl2 = intl5.intl;
  items = [, , ];
  const obj2 = { source: AssetRegistryDefault, style: tmp.headerImage };
  items[0] = hasOwnProperty(Image, obj2);
  const obj3 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl3.string(intl5.t.kkjNHU) };
  const Text = Text_Text.Text;
  intl3 = intl5.intl;
  items[1] = hasOwnProperty(Text, obj3);
  const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: intl4.string(intl5.t.gnkqzQ) };
  const Text2 = Text_Text.Text;
  intl4 = intl5.intl;
  items[2] = hasOwnProperty(Text2, obj4);
  return metroRequire(tmp2, obj);
};
