// Module ID: 10990
// Function ID: 85420
// Name: MessageGameIconActionSheet
// Dependencies: [31, 27, 4167, 653, 33, 4130, 477, 689, 566, 5187, 1273, 4126, 1212, 1920, 2]
// Exports: default

// Module 10990 (MessageGameIconActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_6;
let closure_7;
const require = arg1;
let num = 0;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: 24, paddingTop: 8 };
if (set.isAndroid()) {
  num = 16;
}
_createForOfIteratorHelperLoose.paddingBottom = num;
_createForOfIteratorHelperLoose.contentWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gameDescriptionWrapper = { flexDirection: "column", justifyContent: "flex-start", flex: 1 };
let obj1 = { width: 56, height: 56, marginRight: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gameIcon = obj1;
_createForOfIteratorHelperLoose.gameDescriptionWrapperOuter = { flexDirection: "row" };
_createForOfIteratorHelperLoose.timestamp = { marginBottom: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/messages/native/MessageGameIconActionSheet.tsx");

export default function MessageGameIconActionSheet(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = applicationId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getApplication(applicationId));
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
    const items1 = [callback(applicationId(1273).Icon, obj2), ];
    const obj4 = { style: tmp.gameDescriptionWrapper };
    const obj5 = { style: tmp.timestamp, variant: "text-xs/medium", color: "text-muted", children: applicationId.messageTimestamp };
    const items2 = [callback(applicationId(4126).Text, obj5), ];
    const obj6 = { variant: "text-sm/medium" };
    const intl = applicationId(1212).intl;
    const obj7 = { applicationName: stateFromStores.name };
    const items3 = [intl.format(applicationId(1212).t.J3s8JP, obj7), " ", ];
    const intl2 = applicationId(1212).intl;
    const obj8 = { helpdeskArticle: importDefault(1920).getArticleURL(HelpdeskArticles.SOCIAL_LAYER_CONNECTIONS) };
    items3[2] = intl2.format(applicationId(1212).t.BPDKoA, obj8);
    obj6.children = items3;
    items2[1] = callback2(applicationId(4126).Text, obj6);
    obj4.children = items2;
    items1[1] = callback2(View, obj4);
    obj1.children = items1;
    obj.children = callback2(View, obj1);
    obj.children = callback(View, obj);
    tmp3Result = tmp3(applicationId(5187).BottomSheet, obj);
    const obj13 = importDefault(1920);
    const tmp7 = callback2;
  }
  return tmp3Result;
};
