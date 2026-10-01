// Module ID: 10991
// Function ID: 10992
// Name: SlayerStorefrontGiftPreview
// Dependencies: [19, 17, 21, 4836, 8288, 4832, 1115, 9254, 3585, 2]
// Exports: default

// Module 10991 (SlayerStorefrontGiftPreview)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8288 */;
import InfoBox from "InfoBox" /* 9254 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const InfoBoxDefault = InfoBox;

let closure_4;
let hasOwnProperty;
function WarningBox(application) {
  let canStartAuthorization;
  let hasAccountLinked;
  let mobileAccountLinkingDisabled;
  let name1;
  let sku;
  application = application.application;
  ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku } = application);
  let tmp3Result = null;
  if (!hasAccountLinked) {
    let tmp8;
    const obj = { look: InfoBox.InfoBoxLooks.WARNING, style: tmp.warningBox, children: null };
    const tmp6 = InfoBoxDefault;
    const intl = intl2.intl;
    const tmp3 = React3;
    const tmp4 = importDefault;
    if (mobileAccountLinkingDisabled) {
      const formatToPlainString2 = intl.formatToPlainString;
      let name;
      const BMMo2K = tmp4(3585).BMMo2K;
      if (application != null) {
        name = application.name;
      }
      const obj2 = { applicationName: name };
      obj.children = formatToPlainString2(BMMo2K, obj2);
      tmp8 = obj;
    } else if (canStartAuthorization) {
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { skuName: sku.name, applicationName: name1 };
      name1 = undefined;
      const prop = tmp7(1115).t["EgCl+Q"];
      if (application != null) {
        name1 = application.name;
      }
      obj.children = formatToPlainString(prop, obj3);
      tmp8 = obj;
    } else {
      obj.children = intl.format(intl2.t["3T0cpx"], {});
      tmp8 = obj;
    }
    tmp3Result = tmp3(tmp6, tmp8);
  }
  return tmp3Result;
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }, text: { textAlign: "center", paddingHorizontal: 32 }, warningBox: { marginHorizontal: 16 } });
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

export default function SlayerStorefrontGiftPreview(arg0) {
  let application;
  let canStartAuthorization;
  let formatToPlainString;
  let hasAccountLinked;
  let items;
  let mobileAccountLinkingDisabled;
  let name;
  let obj4;
  let sender;
  let sku;
  let v2tBYtA;
  ({ sku, application, mobileAccountLinkingDisabled } = arg0);
  ({ sender, hasAccountLinked, canStartAuthorization } = arg0);
  if (mobileAccountLinkingDisabled === undefined) {
    mobileAccountLinkingDisabled = false;
  }
  const tmp = closure_6();
  let tmp3Result = null;
  if (null != sku) {
    const obj = { style: tmp.container, children: items };
    const obj2 = { sku };
    items = [React3(SlayerStorefrontItemCardDefault, obj2), , ];
    const obj3 = { variant: "heading-md/normal", color: "mobile-text-heading-primary", style: tmp.text, children: formatToPlainString(v2tBYtA, obj4) };
    const Text = Text_Text.Text;
    const intl = intl2.intl;
    formatToPlainString = intl.formatToPlainString;
    obj4 = { sender, skuName: sku.name, applicationName: name };
    name = undefined;
    v2tBYtA = intl2.t["2tBYtA"];
    const tmp3 = hasOwnProperty;
    const tmp4 = View;
    if (application != null) {
      name = application.name;
    }
    items[1] = React3(Text, obj3);
    const obj5 = { canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku, application };
    items[2] = React3(WarningBox, obj5);
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
};
