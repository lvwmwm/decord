// Module ID: 15942
// Function ID: 15943
// Name: MemberVerificationAlertUpdate
// Dependencies: [19, 1072, 21, 5243, 6277, 1113, 5949, 5957, 15943, 5866, 2]
// Exports: default

// Module 15942 (MemberVerificationAlertUpdate)
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5866 */;
import LinkingDefault from "Linking" /* 5949 */;
import FastImageDefault from "FastImage" /* 5957 */;
import AlertDefault from "Alert" /* 6277 */;
import AssetRegistryDefault from "AssetRegistry" /* 15943 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const DownloadLinks = Constants.DownloadLinks;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default function MemberVerificationAlertUpdate(onClose) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  const tmp = closure_6();
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
  const obj2 = { source: AssetRegistryDefault, style: tmp.headerImage };
  const tmp4 = FastImageDefault;
  items = [React3(tmp4, obj2), , ];
  const obj3 = { style: tmp.header, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(intl5.t.kkjNHU) };
  const Text = Text_Text.Text;
  intl3 = intl5.intl;
  items[1] = React3(Text, obj3);
  const obj4 = { style: tmp.text, variant: "body-sm/medium", color: "text-default", children: intl4.string(intl5.t.gnkqzQ) };
  const Text2 = Text_Text.Text;
  intl4 = intl5.intl;
  items[2] = React3(Text2, obj4);
  return hasOwnProperty(tmp2, obj);
};
