// Module ID: 15936
// Function ID: 122242
// Name: onClose
// Dependencies: []
// Exports: openInteractionModal

// Module 15936 (onClose)
function onClose() {
  return importDefault(dependencyMap[6]).popWithKey(closure_8);
}
class InteractionModal {
  constructor(arg0) {
    tmp = closure_9();
    obj = arg1(dependencyMap[7]);
    modalState = obj.useModalState(global, onClose);
    error = modalState.error;
    ({ components, applicationIconURL, applicationName, submissionState, validators, validationErrors, setValidationErrors, onSubmit } = modalState);
    insets = importDefault(dependencyMap[8])({ includeKeyboardHeight: true }).insets;
    obj = { style: items };
    items = [, ];
    items[0] = tmp.modal;
    items[1] = { paddingTop: insets.top, paddingBottom: insets.bottom };
    obj1 = { style: tmp.header };
    tmp3 = jsxs;
    tmp4 = View;
    obj2 = { style: tmp.icon };
    obj5 = importDefault(dependencyMap[10]);
    obj2.source = obj5.makeSource(applicationIconURL);
    obj2.size = arg1(dependencyMap[9]).AvatarSizes.SMALL;
    items1 = [, , ];
    items1[0] = jsx(arg1(dependencyMap[9]).Avatar, obj2);
    obj3 = { style: tmp.titleView, children: jsx(arg1(dependencyMap[11]).Text, obj4) };
    obj4 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
    obj4.children = global.title;
    items1[1] = jsx(View, obj3);
    obj5 = { accessibilityRole: "button" };
    intl = arg1(dependencyMap[13]).intl;
    obj5.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.cpT0Cq);
    obj5.onPress = onClose;
    obj5.style = tmp.closeButton;
    obj6 = { color: tmp.closeIcon.color };
    obj5.children = jsx(arg1(dependencyMap[14]).XSmallIcon, obj6);
    items1[2] = jsx(arg1(dependencyMap[12]).PressableOpacity, obj5);
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
        tmp13 = arg1;
        tmp14 = dependencyMap;
        obj10 = {};
        obj10.messageType = arg1(dependencyMap[9]).HelpMessageTypes.ERROR;
        obj10.children = error;
        obj9.children = jsx(arg1(dependencyMap[9]).HelpMessage, obj10);
        tmp9 = jsx(View, obj9);
      }
    }
    items3 = [, ];
    items3[0] = tmp9;
    obj11 = {};
    obj11.messageType = arg1(dependencyMap[9]).HelpMessageTypes.WARNING;
    intl2 = arg1(dependencyMap[13]).intl;
    obj11.children = intl2.format(arg1(dependencyMap[13]).t.dSTy/w, { applicationName });
    items3[1] = jsx(arg1(dependencyMap[9]).HelpMessage, obj11);
    obj8.children = items3;
    items4 = [, , ];
    items4[0] = tmp7(tmp8, obj8);
    obj12 = { modal: global, validators, validationErrors, setValidationErrors };
    obj16 = arg1(dependencyMap[16]);
    obj12.children = obj16.renderComponents(components);
    items4[1] = jsx(arg1(dependencyMap[15]).ComponentStateContextProvider, obj12);
    obj13 = { style: tmp.footer };
    obj14 = {};
    intl3 = arg1(dependencyMap[13]).intl;
    obj14.text = intl3.string(arg1(dependencyMap[13]).t.geKm7t);
    obj14.loading = submissionState === InteractionModalState.IN_FLIGHT;
    obj14.size = "lg";
    obj14.onPress = onSubmit;
    obj13.children = jsx(arg1(dependencyMap[17]).Button, obj14);
    items4[2] = jsx(View, obj13);
    obj7.children = items4;
    items2[1] = tmp5(tmp6, obj7);
    obj.children = items2;
    return tmp3(tmp4, obj);
  }
}
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const InteractionModalState = arg1(dependencyMap[2]).InteractionModalState;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = "interaction_modal";
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.modal = obj;
obj.scroll = { flex: 1 };
const tmp4 = arg1(dependencyMap[3]);
obj.modalContent = { flexGrow: 1, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_16 };
const obj1 = { flexGrow: 1, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_16 };
obj.header = { flexDirection: "row", marginBottom: importDefault(dependencyMap[5]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.titleView = { flex: 1 };
const obj2 = { flexDirection: "row", marginBottom: importDefault(dependencyMap[5]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.icon = { marginRight: importDefault(dependencyMap[5]).space.PX_8 };
const obj3 = { marginRight: importDefault(dependencyMap[5]).space.PX_8 };
obj.footer = { marginTop: "auto", marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.closeButton = { marginLeft: "auto" };
const obj4 = { marginTop: "auto", marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.closeIcon = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
const obj5 = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
obj.error = { marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
let closure_9 = obj.createStyles(obj);
const obj6 = { marginBottom: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/interaction_components/native/InteractionModal.tsx");

export default InteractionModal;
export const openInteractionModal = function openInteractionModal(application) {
  let arr = importDefault(dependencyMap[6]);
  arr = arr.push(InteractionModal, application, closure_8);
};
