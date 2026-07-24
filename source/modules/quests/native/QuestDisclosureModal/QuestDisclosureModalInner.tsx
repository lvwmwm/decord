// Module ID: 14056
// Function ID: 107554
// Name: QuestDisclosureModalInner
// Dependencies: [27, 653, 33, 4130, 689, 3803, 9048, 1212, 9062, 10997, 8979, 5807, 4126, 9504, 5167, 1920, 4543, 2]
// Exports: default

// Module 14056 (QuestDisclosureModalInner)
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { flex: 1, padding: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_16, maxWidth: 480 };
obj.container = obj;
obj.illustration = { alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.closeButton = { marginTop: "auto", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.targetList = { padding: 0 };
let obj3 = { flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.targetItem = obj3;
obj.lastTargetItem = { borderBottomWidth: 0 };
let obj4 = { flex: 1, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.disclosureText = obj4;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { marginTop: "auto", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx");

export default function QuestDisclosureModalInner(isTargetedDisclosure) {
  let cosponsorName;
  let gamePublisher;
  let gameTitle;
  let isVideoQuest;
  let onClose;
  isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
  let items1;
  ({ gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = isTargetedDisclosure);
  const tmp = callback2();
  const require = tmp;
  const DropsOptedOut = require(3803) /* explicitContentFromProto */.DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  let obj = {};
  if (setting) {
    obj = { size: "xs" };
    obj.icon = tmp3(tmp4(9048).ServerIcon, obj);
    const intl4 = tmp4(1212).intl;
    obj.text = intl4.string(tmp4(1212).t["2bL0wT"]);
    let items = [obj];
    items1 = items;
  } else {
    obj = { size: "xs" };
    obj.icon = tmp3(tmp4(9062).GlobeEarthIcon, obj);
    const intl = tmp4(1212).intl;
    obj.text = intl.string(tmp4(1212).t.xQSdPv);
    items1 = [obj, , ];
    const obj1 = {};
    const obj2 = { size: "xs" };
    obj1.icon = tmp3(tmp4(10997).UserIcon, obj2);
    const intl2 = tmp4(1212).intl;
    obj1.text = intl2.string(tmp4(1212).t.mYt7hQ);
    items1[1] = obj1;
    const obj3 = {};
    const obj4 = { size: "xs" };
    obj3.icon = tmp3(tmp4(8979).GameControllerIcon, obj4);
    const intl3 = tmp4(1212).intl;
    obj3.text = intl3.string(tmp4(1212).t.XAsWxQ);
    items1[2] = obj3;
  }
  const obj5 = { style: tmp.container };
  const items2 = [callback(View, { style: tmp.illustration, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.WumpusCouchSpotIllustration, {}) }), , , , ];
  const obj7 = { variant: "text-md/normal", color: "mobile-text-heading-primary" };
  let obj10 = require(9504) /* getQuestUrl */;
  const obj8 = { gamePublisher, gameTitle, isTargetedDisclosure, isContextualDisclosure: setting, cosponsorName, isVideoQuest };
  obj7.children = obj10.getDisclosureText(obj8);
  items2[1] = callback(require(4126) /* Text */.Text, obj7);
  if (isTargetedDisclosure) {
    const obj9 = {
      radius: 16,
      style: tmp.targetList,
      children: items1.map((children) => {
          let obj = { style: tmp.targetItem };
          const items = [children.icon, ];
          obj = {};
          const items1 = [tmp.disclosureText, ];
          let lastTargetItem = arg1 === items1.length - 1;
          if (lastTargetItem) {
            lastTargetItem = tmp.lastTargetItem;
          }
          items1[1] = lastTargetItem;
          obj.style = items1;
          obj.children = outer1_5(outer1_6(outer1_2[12]).Text, { variant: "text-md/semibold", children: children.text });
          items[1] = outer1_5(outer1_3, obj);
          obj.children = items;
          return outer1_6(outer1_3, obj, arg1);
        })
    };
    isTargetedDisclosure = callback(require(5167) /* getCardBackgroundToken */.Card, obj9);
  }
  items2[2] = isTargetedDisclosure;
  obj10 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  const obj11 = {};
  const obj6 = { style: tmp.illustration, children: callback(require(5807) /* AccountAgeTier10LargeBadge */.WumpusCouchSpotIllustration, {}) };
  const tmp6 = closure_6;
  const tmp7 = View;
  obj11.privacySettingsUrl = items1(1920).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj10.children = intl5.format(require(1212) /* getSystemLocale */.t.tzq9Wa, obj11);
  items2[3] = callback(require(4126) /* Text */.Text, obj10);
  const obj12 = { style: tmp.closeButton };
  const obj13 = { variant: "primary", grow: true, size: "lg" };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj13.text = intl6.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj13.onPress = onClose;
  obj12.children = callback(require(4543) /* Button */.Button, obj13);
  items2[4] = callback(View, obj12);
  obj5.children = items2;
  return tmp6(tmp7, obj5);
};
