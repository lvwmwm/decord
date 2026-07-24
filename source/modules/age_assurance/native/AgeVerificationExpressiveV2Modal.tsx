// Module ID: 7604
// Function ID: 60598
// Name: MethodsScreen
// Dependencies: [31, 27, 653, 33, 1867, 7605, 7607, 7609, 4130, 689, 7588, 7611, 7613, 7614, 4541, 5807, 4126, 4347, 7581, 1920, 1212, 2716, 4965, 4543, 5501, 5165, 5087, 4337, 5517, 2]
// Exports: default

// Module 7604 (MethodsScreen)
import result from "result";
import { ActivityIndicator } from "module_4337";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function MethodsScreen(arg0) {
  let entryPoint;
  let error;
  let loading;
  let methods;
  let refetch;
  let require;
  ({ entryPoint, navigation: require } = arg0);
  const tmp = callback3();
  let obj = require(7588) /* parseMessageEmbedForProps */;
  const isSuspendedUser = obj.useIsSuspendedUser();
  let obj1 = require(7611) /* useAgeVerificationMethodsV2 */;
  const ageVerificationMethodsV2 = obj1.useAgeVerificationMethodsV2();
  ({ loading, methods } = ageVerificationMethodsV2);
  ({ error, refetch } = ageVerificationMethodsV2);
  obj = {};
  obj = {};
  obj1 = { align: "stretch", spacing: 24, style: tmp.container };
  let obj2 = { align: "center", justify: "center", spacing: 16 };
  let items = [callback(require(5807) /* AccountAgeTier10LargeBadge */.AgeVerificationSpotIllustration, { width: 150, height: 100 }), ];
  const obj3 = { align: "center", justify: "center", spacing: 8 };
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  let obj8 = require(4347) /* isReactiveCheckEnabled */;
  obj4.children = obj8.getAgeVerificationGetStartedTitle(entryPoint);
  const items1 = [callback(require(4126) /* Text */.Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-strong", style: tmp.header };
  let obj10 = require(4347) /* isReactiveCheckEnabled */;
  obj5.children = obj10.getAgeVerificationGetStartedSubtitle(entryPoint, () => {
    const obj = outer1_1(outer1_2[18]);
    obj.openUrl(outer1_1(outer1_2[19]).getArticleURL(outer1_5.TIGGER_PAWTECT_LEARN_MORE));
  }, isSuspendedUser);
  items1[1] = callback(require(4126) /* Text */.Text, obj5);
  obj3.children = items1;
  items[1] = callback2(require(4541) /* Stack */.Stack, obj3);
  obj2.children = items;
  const items2 = [callback2(require(4541) /* Stack */.Stack, obj2), , , ];
  let tmp8 = loading;
  if (loading) {
    const obj6 = { align: "center", justify: "center", style: tmp.loadingContainer };
    const obj7 = { size: "large" };
    obj6.children = callback(ActivityIndicator, obj7);
    tmp8 = callback(require(4541) /* Stack */.Stack, obj6);
  }
  items2[1] = tmp8;
  if (!(!loading && methods.length <= 0)) {
    items2[2] = tmp14;
    let tmp27 = !loading && tmp4;
    if (tmp27) {
      obj8 = {
        hasIcons: true,
        children: methods.map((title) => {
              let obj = { arrow: true };
              let tmp3;
              if (null != outer1_8[title.method]) {
                obj = { IconComponent: tmp, variant: "secondary" };
                tmp3 = outer1_6(outer1_0(outer1_2[25]).TableRow.Icon, obj);
              }
              obj.icon = tmp3;
              obj.label = title.title;
              obj = { direction: "vertical", spacing: 4 };
              const obj1 = { variant: "text-sm/normal", color: "text-muted", children: title.description };
              const items = [outer1_6(outer1_0(outer1_2[16]).Text, obj1), ];
              let tmp8 = null != title.providedBy;
              if (tmp8) {
                const obj2 = { variant: "text-sm/normal", color: "text-subtle", children: title.providedBy };
                tmp8 = outer1_6(outer1_0(outer1_2[16]).Text, obj2);
              }
              items[1] = tmp8;
              obj.children = items;
              obj.subLabel = outer1_7(outer1_0(outer1_2[14]).Stack, obj);
              obj.onPress = function onPress() {
                return outer1_0.navigate(outer2_10.METHOD_ERROR);
              };
              return outer1_6(outer1_0(outer1_2[25]).TableRow, obj, "" + title.method + "-" + title.vendor);
            })
      };
      tmp27 = callback(require(5501) /* TableRowGroupTitle */.TableRowGroup, obj8);
    }
    items2[3] = tmp27;
    obj1.children = items2;
    obj.children = callback2(require(4541) /* Stack */.Stack, obj1);
    obj.children = callback(require(7614) /* ModalContent */.ModalContent, obj);
    return callback(require(7613) /* ModalScreen */.ModalScreen, obj);
  } else {
    const obj9 = { direction: "vertical", align: "center", spacing: 16, style: tmp.emptyContainer };
    let ButtonGroup = callback;
    let Text = require(4126) /* Text */.Text;
    obj10 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.emptyText };
    let num = 20;
    let Button = require(1212) /* getSystemLocale */.intl;
    let string = Button.string;
    let tmp20 = importDefault(2716);
    obj10.children = string(error ? tmp20.Bkmk4Y : tmp20.cR6336);
    obj10 = [, ];
    obj10[0] = ButtonGroup(Text, obj10);
    ButtonGroup = require(4965) /* ButtonGroup */.ButtonGroup;
    const obj11 = {};
    tmp20 = callback;
    Button = require(4543) /* Button */.Button;
    const obj12 = { variant: "primary", size: "lg" };
    const intl = require(dependencyMap[num]).intl;
    num = intl.string;
    obj12.text = num(importDefault(2716).hDvmYP);
    obj12.onPress = refetch;
    string = callback(Button, obj12);
    obj11.children = string;
    Text = callback(ButtonGroup, obj11);
    obj10[1] = Text;
    obj9.children = obj10;
    callback2(require(4541) /* Stack */.Stack, obj9);
    const ButtonGroupResult = ButtonGroup(Text, obj10);
    const tmp15 = callback2;
  }
}
function MethodErrorScreen() {
  let obj = {};
  obj = {};
  obj = { variant: "text-md/normal", color: "text-default", style: callback3().errorMessage };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(importDefault(2716)["1RD2jW"]);
  obj.children = callback(require(4126) /* Text */.Text, obj);
  obj.children = callback(require(7614) /* ModalContent */.ModalContent, obj);
  return callback(require(7613) /* ModalScreen */.ModalScreen, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj[require("_callSuper").AgeAssuranceMethod.GOOGLE_WALLET] = require("WalletIcon").WalletIcon;
obj[require("_callSuper").AgeAssuranceMethod.FACIAL_AGE_ESTIMATION] = require("UserCircleIcon").UserCircleIcon;
obj[require("_callSuper").AgeAssuranceMethod.ID_SELFIE_MATCH] = require("IdIcon").IdIcon;
obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, shadowColor: "transparent" };
obj.headerStyle = obj;
obj.container = { alignSelf: "stretch" };
obj.header = { textAlign: "center" };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.loadingContainer = _createForOfIteratorHelperLoose;
obj.emptyContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.emptyText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_40, textAlign: "center" };
let obj3 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_40, textAlign: "center" };
obj.errorMessage = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_10 = { METHODS: "METHODS", METHOD_ERROR: "METHOD_ERROR" };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
const result = require("ME").fileFinishedImporting("modules/age_assurance/native/AgeVerificationExpressiveV2Modal.tsx");

export default function AgeVerificationExpressiveV2Modal(entryPoint) {
  entryPoint = entryPoint.entryPoint;
  const onClose = entryPoint.onClose;
  const tmp = callback3();
  const dependencyMap = tmp;
  const items = [tmp, entryPoint, onClose];
  const memo = React.useMemo(() => (function getScreens(closure_2, entryPoint, onClose) {
    let closure_0 = entryPoint;
    let closure_1 = onClose;
    let obj = {};
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: entryPoint(5087).getHeaderCloseButton(() => {
        let arr = onClose(table[27]);
        arr = arr.pop();
        onClose();
      }),
      render(arg0, navigation) {
        return outer3_6(outer3_11, { entryPoint: closure_0, navigation });
      }
    };
    obj[outer2_10.METHODS] = obj;
    obj = {
      headerStyle: closure_2.headerStyle,
      headerTitle() {
        return null;
      }
    };
    const obj3 = entryPoint(5087);
    obj.headerLeft = entryPoint(5087).getHeaderBackButton();
    obj.render = function render() {
      return outer3_6(outer3_12, {});
    };
    obj[outer2_10.METHOD_ERROR] = obj;
    return obj;
  })(closure_2, entryPoint, onClose), items);
  let obj = { screens: memo, initialRouteName: constants.METHODS };
  const intl = entryPoint(1212).intl;
  obj.headerBackTitle = intl.string(entryPoint(1212).t["13/7kX"]);
  return callback(entryPoint(5517).Navigator, obj);
};
