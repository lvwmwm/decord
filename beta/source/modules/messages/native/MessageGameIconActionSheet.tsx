// Module ID: 11296
// Function ID: 11297
// Name: MessageGameIconActionSheet
// Dependencies: [19, 17, 5063, 1074, 21, 4836, 1364, 576, 504, 6571, 1177, 4832, 1115, 2111, 2]
// Exports: default

// Module 11296 (MessageGameIconActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = { contentWrapper: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: num }, gameDescriptionWrapper: { flexDirection: "column", justifyContent: "flex-start", flex: 1 }, gameIcon: size, gameDescriptionWrapperOuter: { flexDirection: "row" }, timestamp: { marginBottom: 4 } };
size = { width: 56, height: 56, marginRight: 8, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default function MessageGameIconActionSheet(applicationId) {
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj3;
  let obj6;
  applicationId = applicationId.applicationId;
  const messageTimestamp = applicationId.messageTimestamp;
  const tmp = closure_8();
  const items = [ApplicationStore];
  const obj = applicationId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  let tmp5Result = null;
  if (null != stateFromStores) {
    const obj2 = { style: tmp.contentWrapper, children: closure_7(View, obj3) };
    obj3 = { style: tmp.gameDescriptionWrapperOuter, children: items1 };
    BottomSheet = tmp2(6571).BottomSheet;
    let str;
    const obj4 = { style: tmp.gameIcon, resizeMode: "contain", source: obj6, disableColor: true };
    const Icon = tmp2(1177).Icon;
    if (stateFromStores != null) {
      str = stateFromStores.getIconURL(56);
    }
    if (str == null) {
      str = "";
    }
    const obj5 = { startExpanded: true, children: closure_6(View, obj2) };
    obj6 = { uri: str };
    items1 = [closure_6(Icon, obj4), ];
    const obj7 = { style: tmp.gameDescriptionWrapper, children: items2 };
    const obj8 = { style: tmp.timestamp, variant: "text-xs/medium", color: "text-muted", children: messageTimestamp };
    items2 = [closure_6(applicationId(4832).Text, obj8), ];
    const obj9 = { variant: "text-sm/medium", children: items3 };
    const Text = tmp2(4832).Text;
    const intl = tmp2(1115).intl;
    const obj10 = { applicationName: stateFromStores.name };
    items3 = [intl.format(applicationId(1115).t.J3s8JP, obj10), " ", ];
    const intl2 = tmp2(1115).intl;
    const format = intl2.format;
    const obj11 = { helpdeskArticle: obj13.getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    const BPDKoA = tmp2(1115).t.BPDKoA;
    obj13 = HelpdeskUtilsDefault;
    items3[2] = format(BPDKoA, obj11);
    items2[1] = closure_7(Text, obj9);
    items1[1] = closure_7(View, obj7);
    tmp5Result = tmp5(BottomSheet, obj5);
  }
  return tmp5Result;
};
