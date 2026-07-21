// Module ID: 10952
// Function ID: 85169
// Name: MessageGameIconActionSheet
// Dependencies: []
// Exports: default

// Module 10952 (MessageGameIconActionSheet)
let num = 0;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const HelpdeskArticles = arg1(dependencyMap[3]).HelpdeskArticles;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Bool(true)": "<string:1091687288>", "Bool(true)": "/assets/design/components/Icon/native/redesign/generated/images" };
const tmp3 = arg1(dependencyMap[4]);
if (obj4.isAndroid()) {
  num = 16;
}
obj.paddingBottom = num;
obj.contentWrapper = obj;
obj.gameDescriptionWrapper = {};
const obj4 = arg1(dependencyMap[6]);
obj.gameIcon = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.gameDescriptionWrapperOuter = { flexDirection: "row" };
obj.timestamp = { marginBottom: 4 };
let closure_8 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default function MessageGameIconActionSheet(applicationId) {
  const arg1 = applicationId.applicationId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => application.getApplication(applicationId));
  let tmp3Result = null;
  if (null != stateFromStores) {
    obj = { startExpanded: true };
    obj = { style: tmp.contentWrapper };
    const obj1 = { style: tmp.gameDescriptionWrapperOuter };
    const obj2 = { style: tmp.gameIcon, resizeMode: "contain" };
    const obj3 = {};
    let iconURL;
    if (null != stateFromStores) {
      iconURL = stateFromStores.getIconURL(56);
    }
    let str2 = "";
    if (null != iconURL) {
      str2 = iconURL;
    }
    obj3.uri = str2;
    obj2.source = obj3;
    obj2.disableColor = true;
    const items1 = [callback(arg1(dependencyMap[10]).Icon, obj2), ];
    const obj4 = { style: tmp.gameDescriptionWrapper };
    const obj5 = { style: tmp.timestamp, children: applicationId.messageTimestamp };
    const items2 = [callback(arg1(dependencyMap[11]).Text, obj5), ];
    const obj6 = { variant: "text-sm/medium" };
    const intl = arg1(dependencyMap[13]).intl;
    const obj7 = { applicationName: stateFromStores.name };
    const items3 = [intl.format(arg1(dependencyMap[13]).t.J3s8JP, obj7), " ", ];
    const intl2 = arg1(dependencyMap[13]).intl;
    const obj8 = { helpdeskArticle: importDefault(dependencyMap[14]).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    items3[2] = intl2.format(arg1(dependencyMap[13]).t.BPDKoA, obj8);
    obj6.children = items3;
    items2[1] = callback2(arg1(dependencyMap[12]).TextWithIOSLinkWorkaround, obj6);
    obj4.children = items2;
    items1[1] = callback2(View, obj4);
    obj1.children = items1;
    obj.children = callback2(View, obj1);
    obj.children = callback(View, obj);
    tmp3Result = tmp3(arg1(dependencyMap[9]).BottomSheet, obj);
    const obj13 = importDefault(dependencyMap[14]);
    const tmp7 = callback2;
  }
  return tmp3Result;
};
