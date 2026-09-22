// Module ID: 15005
// Function ID: 15006
// Name: FamilyCenterAcceptedLinks
// Dependencies: [19, 17, 7641, 21, 4636, 576, 8769, 8768, 12053, 1114, 2396, 4632, 15006, 15008, 5204, 4839, 15011, 1896, 1176, 15013, 2]
// Exports: default

// Module 15005 (FamilyCenterAcceptedLinks)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4632 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import useUserLinks from "useUserLinks" /* 8768 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8769 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12053 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 15008 */;
import _modDef15013 from "module_15013" /* 15013 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  const str = otherUser.otherUser;
  let tmp4Result = null;
  if (undefined !== str) {
    const obj2 = { otherUser: str, actions: null };
    const intl = str(1114).intl;
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const obj3 = { name: str1 };
    obj.accessibilityLabel = intl.formatToPlainString(_modDef2396.T7DUoU, obj3);
    obj.onPress = function onPress() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15011, dependencyMap.paths), { otherUser: str });
    };
    obj.style = tmp.actionButton;
    const obj4 = { size: str(1176).Icon.Sizes.SMALL, disableColor: true, source: _modDef15013 };
    obj.children = closure_6(str(1176).Icon, obj4);
    obj2.actions = closure_6(str(5204).PressableOpacity, obj);
    tmp4Result = tmp4(FamilyCenterLinkRowDefault, obj2);
  }
  return tmp4Result;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7641);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4636);
let obj2 = { container: { marginTop: 24 }, content: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, empty: { padding: 20, alignSelf: "center" }, header: { marginBottom: 10 } };
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(4636);
let obj5 = { actionButton: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", height: 32, width: 32 };
obj5.actionButton = size;
let closure_9 = createStyles.createStyles(obj5);
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterAcceptedLinks.tsx");

export default function FamilyCenterAcceptedLinks() {
  const tmp = closure_8();
  const tmp4 = useIsInAdultAgeGroupDefault();
  const activeLinkUsers = useUserLinks.useActiveLinkUsers();
  const obj2 = { count: activeLinkUsers.length, max: tmp4 ? React4 : hasOwnProperty };
  const intl = tmp5(1114).intl;
  const tmp5Result = useAgeSpecificText;
  const intl2 = tmp5(1114).intl;
  const obj3 = { style: tmp.container, children: null };
  const ageSpecificText = tmp5Result.useAgeSpecificText(intl.formatToPlainString(_modDef2396["+tnO34"], obj2), intl2.formatToPlainString(tmp2(2396)["pu6/U0"], obj2));
  const items = [timestampProducer(Text_Text.Text, { style: tmp.header, variant: "eyebrow", color: "text-default", children: ageSpecificText }), ];
  const obj5 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: null };
    const obj7 = { text: null };
    const intl3 = tmp5(1114).intl;
    obj7.text = intl3.string(tmp2(2396).C4ScLD);
    obj6.children = tmp10(tmp2(15006), obj7);
    let mapped = tmp10(tmp9, obj6);
    const tmp2Result = tmp2(15006);
  } else {
    mapped = activeLinkUsers.map((otherUser) => closure_1_6(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id));
  }
  obj5.children = mapped;
  items[1] = timestampProducer(View, obj5);
  obj3.children = items;
  return React5(View, obj3);
};
