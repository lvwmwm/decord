// Module ID: 16804
// Function ID: 16805
// Name: FamilyCenterLinkingBanner
// Dependencies: [19, 17, 21, 5014, 575, 8370, 13347, 1113, 2538, 16805, 5624, 16767, 2]
// Exports: default

// Module 16804 (FamilyCenterLinkingBanner)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef2538 from "module_2538" /* 2538 */;
import Text_Text from "Text/Text" /* 5624 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8370 */;
import useAgeSpecificText3 from "useAgeSpecificText" /* 13347 */;
import FamilyCenterBannerButton from "FamilyCenterBannerButton" /* 16767 */;
import WizardHatAndBookSpotIllustration from "WizardHatAndBookSpotIllustration" /* 16805 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
function FamilyCenterLinkingBannerParentContent() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  const obj = { style: closure_7().container, children: items };
  const obj2 = { index: 1, header: intl.string(_modDef2538["7xxAni"]), description: intl2.string(_modDef2538["1M9So2"]) };
  intl = intl7.intl;
  intl2 = intl7.intl;
  items = [React3(FamilyCenterLinkingInstructionsRow, obj2), , , ];
  const obj3 = { index: 2, header: intl3.string(_modDef2538["AXgx+a"]), description: intl4.string(_modDef2538.GzMFnb) };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = React3(FamilyCenterLinkingInstructionsRow, obj3);
  const obj4 = { index: 3, header: intl5.string(_modDef2538.MZn1tG), description: intl6.string(_modDef2538["8rLBxD"]), isLast: true };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = React3(FamilyCenterLinkingInstructionsRow, obj4);
  items[3] = React3(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
  return hasOwnProperty(View, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  const obj = { style: closure_9().container, children: React3(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}) };
  return React3(View, obj);
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  let description;
  let header;
  let index;
  let isLast;
  let items;
  let items2;
  ({ header, description, index, isLast } = arg0);
  const tmp = closure_11();
  const obj = { style: tmp.row, children: items };
  items = [, ];
  const obj2 = { style: tmp.circle, children: React3(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) };
  items[0] = React3(View, obj2);
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  const obj3 = { style: items1, children: items2 };
  items1[1] = gap;
  items2 = [React3(Text_Text.Text, { variant: "heading-sm/bold", children: header }), React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  items[1] = hasOwnProperty(View, obj3);
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, art: obj4, header: { marginBottom: nativeDefault.space.PX_8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_12 };
({ marginBottom: nativeDefault.space.PX_8 });
let closure_6 = createStyles(obj);
createStyles = createStyles_mod;
const obj6 = { container: { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" } };
({ marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" });
let closure_7 = createStyles.createStyles(obj6);
createStyles = createStyles_mod;
const obj8 = { container: { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 } };
({ width: "100%", paddingHorizontal: nativeDefault.space.PX_16 });
let closure_9 = createStyles.createStyles(obj8);
createStyles = createStyles_mod;
const obj10 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: size, rowContent: { marginLeft: 12, flex: 1 } };
size = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_11 = createStyles.createStyles(obj10);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  let items;
  let items1;
  const tmp = closure_6();
  const tmp2 = useIsInAdultAgeGroupDefault();
  const useAgeSpecificText = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl = intl7.intl;
  const stringResult = intl.string(_modDef2538.zUCWEL);
  const intl2 = intl7.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2538.B0NPbp));
  const useAgeSpecificText2 = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl3 = intl7.intl;
  const formatResult = intl3.format(_modDef2538.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" });
  const intl4 = intl7.intl;
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.art, children: React3(WizardHatAndBookSpotIllustration.WizardHatAndBookSpotIllustration, { accessible: false }) };
  const ageSpecificText2 = useAgeSpecificText2(formatResult, intl4.string(_modDef2538.JsAEDi));
  items = [React3(View, obj2), , ];
  const obj3 = { style: tmp.content, children: items1 };
  items1 = [, ];
  const obj4 = { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items1[0] = React3(Text_Text.Text, obj4);
  items1[1] = React3(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText2 });
  items[1] = hasOwnProperty(View, obj3);
  items[2] = React3(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  return hasOwnProperty(View, obj);
};
