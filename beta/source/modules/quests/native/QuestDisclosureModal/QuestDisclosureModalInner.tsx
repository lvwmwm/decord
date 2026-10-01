// Module ID: 14644
// Function ID: 14645
// Name: QuestDisclosureModalInner
// Dependencies: [17, 1074, 21, 4836, 576, 2021, 8587, 1115, 8354, 11303, 8535, 14645, 4832, 10699, 5919, 2111, 5281, 2]
// Exports: default

// Module 14644 (QuestDisclosureModalInner)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ ScrollView: c3, View: closure_4 } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, width: "100%", maxWidth: 480, alignSelf: "center" }, contentContainer: obj2, illustration: obj3, closeButton: obj4, targetList: { padding: 0 }, targetItem: obj5, lastTargetItem: { borderBottomWidth: 0 }, disclosureText: obj6 };
obj2 = { flexGrow: 1, padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginTop: "auto", paddingHorizontal: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_24 };
obj5 = { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingLeft: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj6 = { flex: 1, paddingVertical: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx");

export default function QuestDisclosureModalInner(isTargetedDisclosure) {
  let Button;
  let adCreativeType;
  let closure_0;
  let cosponsorName;
  let format;
  let gamePublisher;
  let gameTitle;
  let intl2;
  let intl3;
  let intl6;
  let isVideoQuest;
  let items2;
  let obj11;
  let obj12;
  let obj9;
  let onClose;
  let tmp2Result;
  let tmp6;
  let tzq9Wa;
  isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
  let items1;
  ({ adCreativeType, gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = isTargetedDisclosure);
  let tmp = closure_8();
  _require = tmp;
  const DropsOptedOut = require("UserSettings").DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  let obj = { icon: null, text: null };
  if (setting) {
    obj.icon = closure_6(require("ServerIcon").ServerIcon, { size: "xs" });
    const intl4 = tmp2(1115).intl;
    obj.text = intl4.string(require("intl").t["2bL0wT"]);
    let items = [obj];
    tmp6 = tmp5;
    items1 = items;
  } else {
    obj.icon = closure_6(require("GlobeEarthIcon").GlobeEarthIcon, { size: "xs" });
    const intl = tmp2(1115).intl;
    obj.text = intl.string(require("intl").t.xQSdPv);
    items1 = [obj, , ];
    let obj2 = { icon: closure_6(tmp2(11303).UserIcon, { size: "xs" }), text: intl2.string(tmp2(1115).t.mYt7hQ) };
    intl2 = tmp2(1115).intl;
    items1[1] = obj2;
    const obj3 = { icon: closure_6(require("GameControllerIcon").GameControllerIcon, { size: "xs" }), text: intl3.string(require("intl").t.XAsWxQ) };
    intl3 = tmp2(1115).intl;
    items1[2] = obj3;
    tmp6 = tmp5;
  }
  const obj4 = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: items2 };
  items2 = [, , , , ];
  const obj5 = { style: tmp.illustration, children: tmp6(require("WumpusCouchSpotIllustration").WumpusCouchSpotIllustration, {}) };
  items2[0] = tmp6(closure_4, obj5);
  const obj6 = { variant: "text-md/normal", color: "mobile-text-heading-primary", children: tmp2Result.getDisclosureText({ adCreativeType, gamePublisher, gameTitle, isTargetedDisclosure, isContextualDisclosure: setting, cosponsorName, isVideoQuest }) };
  const Text = tmp2(4832).Text;
  tmp2Result = require("QuestCopyUtils");
  items2[1] = tmp6(Text, obj6);
  const tmp7 = closure_7;
  const tmp8 = closure_3;
  const tmp9 = closure_4;
  if (isTargetedDisclosure) {
    const obj7 = {
      radius: 16,
      style: tmp.targetList,
      children: items1.map((icon, index) => {
          let items;
          const obj = { style: closure_0.targetItem, children: items };
          items = [icon.icon, ];
          items1 = [closure_0.disclosureText, ];
          let lastTargetItem = index === items1.length - 1;
          const text = icon.text;
          const tmp = metroImportDefault;
          if (lastTargetItem) {
            lastTargetItem = closure_0.lastTargetItem;
          }
          items1[1] = lastTargetItem;
          const obj2 = { style: items1, children: metroRequire(Text_Text.Text, { variant: "text-md/semibold", children: text }) };
          items[1] = metroRequire(React3, obj2);
          return tmp(React3, obj, index);
        })
    };
    const Card = tmp2(5919).Card;
    isTargetedDisclosure = tmp6(Card, obj7);
  }
  items2[2] = isTargetedDisclosure;
  const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: format(tzq9Wa, obj9) };
  const Text2 = tmp2(4832).Text;
  const intl5 = tmp2(1115).intl;
  format = intl5.format;
  obj9 = { privacySettingsUrl: obj11.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  tzq9Wa = tmp2(1115).t.tzq9Wa;
  obj11 = items1(2111);
  items2[3] = tmp6(Text2, obj8);
  const obj10 = { style: tmp.closeButton, children: tmp6(Button, obj12) };
  obj12 = { variant: "primary", grow: true, size: "lg", text: intl6.string(require("intl").t.cpT0Cq), onPress: onClose };
  Button = tmp2(5281).Button;
  intl6 = tmp2(1115).intl;
  items2[4] = tmp6(tmp9, obj10);
  return tmp7(tmp8, obj4);
};
