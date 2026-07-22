// Module ID: 13892
// Function ID: 105075
// Name: QuestDisclosureModalInner
// Dependencies: []
// Exports: default

// Module 13892 (QuestDisclosureModalInner)
const View = require(dependencyMap[0]).View;
const HelpdeskArticles = require(dependencyMap[1]).HelpdeskArticles;
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { flex: 1, padding: importDefault(dependencyMap[4]).space.PX_24, gap: importDefault(dependencyMap[4]).space.PX_16, maxWidth: 480 };
obj.container = obj;
obj.illustration = { alignSelf: "center", marginBottom: importDefault(dependencyMap[4]).space.PX_8 };
const obj1 = { alignSelf: "center", marginBottom: importDefault(dependencyMap[4]).space.PX_8 };
obj.closeButton = { marginTop: "auto", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.targetList = { padding: 0 };
const obj3 = { onValueChange: "r", value: "isArray", start: "Boolean", paddingLeft: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_16 };
obj.targetItem = obj3;
obj.lastTargetItem = { borderBottomWidth: 0 };
const obj2 = { marginTop: "auto", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_8, marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.disclosureText = { paddingVertical: importDefault(dependencyMap[4]).space.PX_12, borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[18]);
const result = _module2.fileFinishedImporting("modules/quests/native/QuestDisclosureModal/QuestDisclosureModalInner.tsx");

export default function QuestDisclosureModalInner(isTargetedDisclosure) {
  let cosponsorName;
  let gamePublisher;
  let gameTitle;
  let isVideoQuest;
  let onClose;
  isTargetedDisclosure = isTargetedDisclosure.isTargetedDisclosure;
  let importDefault;
  ({ gamePublisher, gameTitle, isVideoQuest, onClose, cosponsorName } = isTargetedDisclosure);
  const tmp = callback2();
  const require = tmp;
  const DropsOptedOut = require(dependencyMap[5]).DropsOptedOut;
  const setting = DropsOptedOut.useSetting();
  let obj = {};
  if (setting) {
    obj = { size: "xs" };
    obj.icon = tmp3(tmp4(tmp5[6]).ServerIcon, obj);
    const intl4 = tmp4(tmp5[7]).intl;
    obj.text = intl4.string(tmp4(tmp5[7]).t.2bL0wT);
    const items = [obj];
    let items1 = items;
  } else {
    obj = { size: "xs" };
    obj.icon = tmp3(tmp4(tmp5[8]).GlobeEarthIcon, obj);
    const intl = tmp4(tmp5[7]).intl;
    obj.text = intl.string(tmp4(tmp5[7]).t.xQSdPv);
    items1 = [obj, , ];
    const obj1 = {};
    const obj2 = { size: "xs" };
    obj1.icon = tmp3(tmp4(tmp5[9]).UserIcon, obj2);
    const intl2 = tmp4(tmp5[7]).intl;
    obj1.text = intl2.string(tmp4(tmp5[7]).t.mYt7hQ);
    items1[1] = obj1;
    const obj3 = {};
    const obj4 = { size: "xs" };
    obj3.icon = tmp3(tmp4(tmp5[10]).GameControllerIcon, obj4);
    const intl3 = tmp4(tmp5[7]).intl;
    obj3.text = intl3.string(tmp4(tmp5[7]).t.XAsWxQ);
    items1[2] = obj3;
  }
  importDefault = items1;
  const obj5 = { style: tmp.container };
  const items2 = [callback(View, { style: tmp.illustration, children: callback(require(dependencyMap[11]).WumpusCouchSpotIllustration, {}) }), , , , ];
  const obj7 = {};
  let obj10 = require(dependencyMap[13]);
  const obj8 = { gamePublisher, gameTitle, isTargetedDisclosure, isContextualDisclosure: setting, cosponsorName, isVideoQuest };
  obj7.children = obj10.getDisclosureText(obj8);
  items2[1] = callback(require(dependencyMap[12]).Text, obj7);
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
          obj.children = callback(closure_6(closure_2[12]).Text, { variant: "text-md/semibold", children: children.text });
          items[1] = callback(closure_3, obj);
          obj.children = items;
          return closure_6(closure_3, obj, arg1);
        })
    };
    isTargetedDisclosure = callback(require(dependencyMap[14]).Card, obj9);
  }
  items2[2] = isTargetedDisclosure;
  obj10 = {};
  const intl5 = require(dependencyMap[7]).intl;
  const obj11 = {};
  const obj6 = { style: tmp.illustration, children: callback(require(dependencyMap[11]).WumpusCouchSpotIllustration, {}) };
  const tmp6 = closure_6;
  const tmp7 = View;
  obj11.privacySettingsUrl = importDefault(dependencyMap[16]).getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS);
  obj10.children = intl5.format(require(dependencyMap[7]).t.tzq9Wa, obj11);
  items2[3] = callback(require(dependencyMap[15]).TextWithIOSLinkWorkaround, obj10);
  const obj12 = { style: tmp.closeButton };
  const obj13 = {};
  const intl6 = require(dependencyMap[7]).intl;
  obj13.text = intl6.string(require(dependencyMap[7]).t.cpT0Cq);
  obj13.onPress = onClose;
  obj12.children = callback(require(dependencyMap[17]).Button, obj13);
  items2[4] = callback(View, obj12);
  obj5.children = items2;
  return tmp6(tmp7, obj5);
};
