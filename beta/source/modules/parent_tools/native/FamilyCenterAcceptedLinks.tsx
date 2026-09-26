// Module ID: 15196
// Function ID: 15197
// Name: FamilyCenterAcceptedLinks
// Dependencies: [19, 17, 7812, 21, 4788, 576, 8956, 8955, 12203, 1115, 2482, 4784, 15197, 15199, 5371, 4991, 15202, 1980, 1177, 15204, 2]
// Exports: default

// Module 15196 (FamilyCenterAcceptedLinks)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import _modDef2482 from "module_2482" /* 2482 */;
import Text_Text from "Text/Text" /* 4784 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import useUserLinks from "useUserLinks" /* 8955 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8956 */;
import useAgeSpecificText from "useAgeSpecificText" /* 12203 */;
import FamilyCenterLinkRowDefault from "FamilyCenterLinkRow" /* 15199 */;
import _modDef15204 from "module_15204" /* 15204 */;
import noop from "module_19" /* 19 */;

require = fn;
function FamilyCenterAcceptedLinkRow(otherUser) {
  const str = otherUser.otherUser;
  let tmp4Result = null;
  if (undefined !== str) {
    const obj2 = { otherUser: str, actions: null };
    const intl = str(1115).intl;
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const obj3 = { name: str1 };
    obj.accessibilityLabel = intl.formatToPlainString(_modDef2482.T7DUoU, obj3);
    obj.onPress = function onPress() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15202, dependencyMap.paths), { otherUser: str });
    };
    obj.style = tmp.actionButton;
    const obj4 = { size: str(1177).Icon.Sizes.SMALL, disableColor: true, source: _modDef15204 };
    obj.children = closure_6(str(1177).Icon, obj4);
    obj2.actions = closure_6(str(5371).PressableOpacity, obj);
    tmp4Result = tmp4(FamilyCenterLinkRowDefault, obj2);
  }
  return tmp4Result;
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7812);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_4, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: hasOwnProperty } = FamilyCenterConstants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4788);
let obj2 = { container: { marginTop: 24 }, content: { display: "flex", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md }, empty: { padding: 20, alignSelf: "center" }, header: { marginBottom: 10 } };
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(4788);
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
  const intl = tmp5(1115).intl;
  const tmp5Result = useAgeSpecificText;
  const intl2 = tmp5(1115).intl;
  const obj3 = { style: tmp.container, children: null };
  const ageSpecificText = tmp5Result.useAgeSpecificText(intl.formatToPlainString(_modDef2482["+tnO34"], obj2), intl2.formatToPlainString(tmp2(2482)["pu6/U0"], obj2));
  const items = [timestampProducer(Text_Text.Text, { style: tmp.header, variant: "eyebrow", color: "text-default", children: ageSpecificText }), ];
  const obj5 = { style: tmp.content, children: null };
  if (0 === activeLinkUsers.length) {
    const obj6 = { style: tmp.empty, children: null };
    const obj7 = { text: null };
    const intl3 = tmp5(1115).intl;
    obj7.text = intl3.string(tmp2(2482).C4ScLD);
    obj6.children = tmp10(tmp2(15197), obj7);
    let mapped = tmp10(tmp9, obj6);
    const tmp2Result = tmp2(15197);
  } else {
    mapped = activeLinkUsers.map((otherUser) => closure_1_6(FamilyCenterAcceptedLinkRow, { otherUser }, "accepted-" + otherUser.id));
  }
  obj5.children = mapped;
  items[1] = timestampProducer(View, obj5);
  obj3.children = items;
  return React5(View, obj3);
};
