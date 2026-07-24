// Module ID: 16119
// Function ID: 124851
// Name: onClose
// Dependencies: [31, 27, 13383, 33, 4130, 689, 4337, 16120, 5160, 1273, 1392, 4126, 4660, 1212, 5119, 7885, 16121, 4543, 2]
// Exports: openInteractionModal

// Module 16119 (onClose)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { InteractionModalState } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
function onClose() {
  return importDefault(4337).popWithKey(interaction_modal);
}
class InteractionModal {
  constructor(arg0) {
    tmp = c9();
    obj = require("useApplicationInfo");
    modalState = obj.useModalState(global, onClose);
    error = modalState.error;
    ({ components, applicationIconURL, applicationName, submissionState, validators, validationErrors, setValidationErrors, onSubmit } = modalState);
    insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
    obj = { style: items };
    items = [, ];
    items[0] = tmp.modal;
    items[1] = { paddingTop: insets.top, paddingBottom: insets.bottom };
    obj1 = { style: tmp.header };
    tmp3 = jsxs;
    tmp4 = View;
    obj2 = { style: tmp.icon };
    obj5 = require("getAvatarURL");
    obj2.source = obj5.makeSource(applicationIconURL);
    obj2.size = require("Button").AvatarSizes.SMALL;
    items1 = [, , ];
    items1[0] = jsx(require("Button").Avatar, obj2);
    obj3 = { style: tmp.titleView, children: jsx(require("Text").Text, obj4) };
    obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary" };
    obj4.children = global.title;
    items1[1] = jsx(View, obj3);
    obj5 = { accessibilityRole: "button" };
    intl = require("getSystemLocale").intl;
    obj5.accessibilityLabel = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj5.onPress = onClose;
    obj5.style = tmp.closeButton;
    obj6 = { color: tmp.closeIcon.color };
    obj5.children = jsx(require("XSmallIcon").XSmallIcon, obj6);
    items1[2] = jsx(require("PressableBase").PressableOpacity, obj5);
    obj1.children = items1;
    items2 = [, ];
    items2[0] = jsxs(View, obj1);
    obj7 = { style: tmp.scroll, contentContainerStyle: tmp.modalContent, keyboardShouldPersistTaps: "handled" };
    obj8 = {};
    tmp9 = null;
    tmp5 = jsxs;
    tmp6 = ScrollView;
    tmp7 = jsxs;
    tmp8 = View;
    if (null != error) {
      str = "";
      tmp9 = null;
      if ("" !== error) {
        tmp10 = jsx;
        tmp11 = View;
        obj9 = {};
        obj9.style = tmp.error;
        tmp12 = jsx;
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj10 = {};
        obj10.messageType = require("Button").HelpMessageTypes.ERROR;
        obj10.children = error;
        obj9.children = jsx(require("Button").HelpMessage, obj10);
        tmp9 = jsx(View, obj9);
      }
    }
    items3 = [, ];
    items3[0] = tmp9;
    obj11 = {};
    obj11.messageType = require("Button").HelpMessageTypes.WARNING;
    intl2 = require("getSystemLocale").intl;
    obj11.children = intl2.format(require("getSystemLocale").t["dSTy/w"], { applicationName });
    items3[1] = jsx(require("Button").HelpMessage, obj11);
    obj8.children = items3;
    items4 = [, , ];
    items4[0] = tmp7(tmp8, obj8);
    obj12 = { modal: global, validators, validationErrors, setValidationErrors };
    obj16 = require("renderComponents");
    obj12.children = obj16.renderComponents(components);
    items4[1] = jsx(require("isInteractionComponent").ComponentStateContextProvider, obj12);
    obj13 = { style: tmp.footer };
    obj14 = {};
    intl3 = require("getSystemLocale").intl;
    obj14.text = intl3.string(require("getSystemLocale").t.geKm7t);
    obj14.loading = submissionState === InteractionModalState.IN_FLIGHT;
    obj14.size = "lg";
    obj14.onPress = onSubmit;
    obj13.children = jsx(require("Button").Button, obj14);
    items4[2] = jsx(View, obj13);
    obj7.children = items4;
    items2[1] = tmp5(tmp6, obj7);
    obj.children = items2;
    return tmp3(tmp4, obj);
  }
}
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
const interaction_modal = "interaction_modal";
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
_createForOfIteratorHelperLoose.modal = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scroll = { flex: 1 };
_createForOfIteratorHelperLoose.modalContent = { flexGrow: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { flexGrow: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.header = { flexDirection: "row", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.titleView = { flex: 1 };
let obj2 = { flexDirection: "row", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.icon = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj3 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footer = { marginTop: "auto", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.closeButton = { marginLeft: "auto" };
let obj4 = { marginTop: "auto", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.closeIcon = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.error = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default InteractionModal;
export const openInteractionModal = function openInteractionModal(application) {
  let arr = importDefault(4337);
  arr = arr.push(InteractionModal, application, interaction_modal);
};
