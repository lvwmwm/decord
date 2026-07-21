// Module ID: 16071
// Function ID: 123503
// Name: handleTouch
// Dependencies: []
// Exports: default

// Module 16071 (handleTouch)
function handleTouch() {
  closure_7.dismiss();
}
function handleMoreActions() {
  let obj = arg1(dependencyMap[9]);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj.label = intl.string(arg1(dependencyMap[10]).t.2jxGer);
  obj.isDestructive = true;
  obj.onPress = function onPress() {
    return callback(closure_2[11]).logout("new_terms_modal");
  };
  const items = [obj];
  obj.options = items;
  const result = obj.showSimpleActionSheet(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Keyboard: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ MarketingURLs: closure_10, UserRequiredActions: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
obj.contentContainer = obj;
obj.scrollView = { flex: 1 };
const tmp4 = arg1(dependencyMap[6]);
obj.container = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, flex: 1 };
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.description = { marginTop: importDefault(dependencyMap[8]).space.PX_24, marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
const obj2 = { marginTop: importDefault(dependencyMap[8]).space.PX_24, marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
obj.agreementDescription = { marginTop: importDefault(dependencyMap[8]).space.PX_24 };
const obj3 = { marginTop: importDefault(dependencyMap[8]).space.PX_24 };
obj.navbarRight = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj4 = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.stickyFooter = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingVertical: importDefault(dependencyMap[8]).space.PX_16, marginTop: importDefault(dependencyMap[8]).space.PX_24, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
let closure_14 = obj.createStyles(obj);
const obj5 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingVertical: importDefault(dependencyMap[8]).space.PX_16, marginTop: importDefault(dependencyMap[8]).space.PX_24, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default function NewTermsModal() {
  const tmp = callback5();
  const rect = importDefault(closure_2[12])();
  const top = rect.top;
  const memo = React.useMemo(() => action.getAction(), []);
  const arg1 = memo;
  const tmp3 = callback2(React.useState(false), 2);
  const importDefault = tmp3[1];
  let obj = arg1(closure_2[13]);
  // CreateGeneratorClosureLongIndex (0x67)
  closure_2 = React.useCallback(callback(obj.useNavigatorBackPressHandler(arg1(closure_2[14]).BackPressHandler.minimize)), []);
  obj = { type: arg1(closure_2[17]).ImpressionTypes.VIEW, name: arg1(closure_2[17]).ImpressionNames.USER_AGREEMENTS, properties: { required_action: memo } };
  importDefault(closure_2[16])(obj, {}, []);
  let tmp6 = null;
  if (null != memo) {
    obj = {};
    const items = [tmp.container, ];
    const obj1 = { paddingTop: top, paddingBottom: rect.bottom };
    items[1] = obj1;
    obj.style = items;
    const obj2 = {};
    const items1 = [tmp.scrollView];
    obj2.style = items1;
    obj2.contentContainerStyle = tmp.contentContainer;
    obj2.onTouchStart = handleTouch;
    const obj3 = {};
    const intl = arg1(closure_2[10]).intl;
    obj3.children = intl.string(arg1(closure_2[10]).t.7glvXu);
    const items2 = [callback3(arg1(closure_2[18]).Text, obj3), , , , , , ];
    const obj4 = { variant: "text-md/normal", style: tmp.description };
    const intl2 = arg1(closure_2[10]).intl;
    const obj5 = { url: constants.TERMS_SUMMARY };
    obj4.children = intl2.format(arg1(closure_2[10]).t.CN0Hvb, obj5);
    items2[1] = callback3(arg1(closure_2[19]).TextWithIOSLinkWorkaround, obj4);
    const obj6 = { variant: "text-md/normal" };
    const intl3 = arg1(closure_2[10]).intl;
    const obj7 = { url: constants.TERMS };
    obj6.children = intl3.format(arg1(closure_2[10]).t.iw0hFi, obj7);
    items2[2] = callback3(arg1(closure_2[19]).TextWithIOSLinkWorkaround, obj6);
    const obj8 = { variant: "text-md/normal" };
    const intl4 = arg1(closure_2[10]).intl;
    const obj9 = { url: constants.PAID_TERMS };
    obj8.children = intl4.format(arg1(closure_2[10]).t.36klnD, obj9);
    items2[3] = callback3(arg1(closure_2[19]).TextWithIOSLinkWorkaround, obj8);
    const obj10 = { variant: "text-md/normal" };
    const intl5 = arg1(closure_2[10]).intl;
    const obj11 = { url: constants.PRIVACY };
    obj10.children = intl5.format(arg1(closure_2[10]).t.TquFBF, obj11);
    items2[4] = callback3(arg1(closure_2[19]).TextWithIOSLinkWorkaround, obj10);
    const obj12 = { variant: "text-md/normal" };
    const intl6 = arg1(closure_2[10]).intl;
    const obj13 = { url: constants.GUIDELINES };
    obj12.children = intl6.format(arg1(closure_2[10]).t.ia96Tb, obj13);
    items2[5] = callback3(arg1(closure_2[19]).TextWithIOSLinkWorkaround, obj12);
    const obj14 = { variant: "text-md/normal", style: tmp.agreementDescription };
    const intl7 = arg1(closure_2[10]).intl;
    obj14.children = intl7.string(arg1(closure_2[10]).t.+USXQE);
    items2[6] = callback3(arg1(closure_2[18]).Text, obj14);
    obj2.children = items2;
    const items3 = [callback4(closure_8, obj2), , ];
    const obj15 = { style: tmp.stickyFooter };
    const obj16 = {
      loading: tmp3[0],
      onPress() {
          if (memo === constants.AGREEMENTS) {
            callback();
          }
        }
    };
    const intl8 = arg1(closure_2[10]).intl;
    obj16.text = intl8.string(arg1(closure_2[10]).t.+TBKL1);
    obj15.children = callback3(arg1(closure_2[20]).Button, obj16);
    items3[1] = callback3(closure_6, obj15);
    const obj17 = {};
    const items4 = [tmp.navbarRight, ];
    const obj18 = { top };
    items4[1] = obj18;
    obj17.style = items4;
    obj17.source = importDefault(closure_2[22]);
    obj17.color = tmp.navbarRight.tintColor;
    obj17.onPress = handleMoreActions;
    obj17.accessibilityRole = "button";
    const intl9 = arg1(closure_2[10]).intl;
    obj17.accessibilityLabel = intl9.string(arg1(closure_2[10]).t.UKOtz+);
    items3[2] = callback3(importDefault(closure_2[21]), obj17);
    obj.children = items3;
    tmp6 = callback4(closure_6, obj);
    const tmp16 = importDefault(closure_2[21]);
  }
  return tmp6;
};
