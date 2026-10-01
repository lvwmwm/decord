// Module ID: 14449
// Function ID: 14450
// Name: FamilyCenterLinkingBanner
// Dependencies: [19, 17, 21, 4836, 576, 8106, 11398, 1115, 2487, 14450, 4832, 14412, 2]
// Exports: default

// Module 14449 (FamilyCenterLinkingBanner)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import Text_Text from "Text/Text" /* 4832 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8106 */;
import useAgeSpecificText3 from "useAgeSpecificText" /* 11398 */;
import FamilyCenterBannerButton from "FamilyCenterBannerButton" /* 14412 */;
import AssetRegistryDefault from "AssetRegistry" /* 14450 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let size1;
function FamilyCenterLinkingBannerParentContent() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  const obj = { style: closure_8().container, children: items };
  const obj2 = { index: 1, header: intl.string(_modDef2487["7xxAni"]), description: intl2.string(_modDef2487["1M9So2"]) };
  intl = intl7.intl;
  intl2 = intl7.intl;
  items = [hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj2), , , ];
  const obj3 = { index: 2, header: intl3.string(_modDef2487["AXgx+a"]), description: intl4.string(_modDef2487.GzMFnb) };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj3);
  const obj4 = { index: 3, header: intl5.string(_modDef2487.MZn1tG), description: intl6.string(_modDef2487["8rLBxD"]), isLast: true };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = hasOwnProperty(FamilyCenterLinkingInstructionsRow, obj4);
  items[3] = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
  return metroRequire(_false, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  const obj = { style: closure_10().container, children: hasOwnProperty(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}) };
  return hasOwnProperty(_false, obj);
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  let description;
  let header;
  let index;
  let isLast;
  let items;
  let items2;
  ({ header, description, index, isLast } = arg0);
  const tmp = closure_12();
  const obj = { style: tmp.row, children: items };
  items = [, ];
  const obj2 = { style: tmp.circle, children: hasOwnProperty(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) };
  items[0] = hasOwnProperty(_false, obj2);
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  const obj3 = { style: items1, children: items2 };
  items1[1] = gap;
  items2 = [hasOwnProperty(Text_Text.Text, { variant: "heading-sm/bold", children: header }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  items[1] = metroRequire(_false, obj3);
  return metroRequire(_false, obj);
}
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, art: size, header: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
size = { width: "100%", height: 175, marginBottom: nativeDefault.space.PX_12 };
obj4 = { marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
createStyles = createStyles_mod;
const obj5 = { container: { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" } };
({ marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" });
let closure_8 = createStyles.createStyles(obj5);
createStyles = createStyles_mod;
const obj7 = { container: { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 } };
({ width: "100%", paddingHorizontal: nativeDefault.space.PX_16 });
let closure_10 = createStyles.createStyles(obj7);
createStyles = createStyles_mod;
const obj9 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: size1, rowContent: { marginLeft: 12, flex: 1 } };
size1 = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_12 = createStyles.createStyles(obj9);
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  let items;
  let items1;
  const tmp = closure_7();
  const tmp2 = useIsInAdultAgeGroupDefault();
  const useAgeSpecificText = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl = intl7.intl;
  const stringResult = intl.string(_modDef2487.zUCWEL);
  const intl2 = intl7.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2487.B0NPbp));
  const useAgeSpecificText2 = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl3 = intl7.intl;
  const formatResult = intl3.format(_modDef2487.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" });
  const intl4 = intl7.intl;
  const obj = { style: tmp.container, children: items };
  const obj2 = { source: AssetRegistryDefault, style: tmp.art, resizeMethod: "resize" };
  const ageSpecificText2 = useAgeSpecificText2(formatResult, intl4.string(_modDef2487.JsAEDi));
  items = [hasOwnProperty(React3, obj2), , ];
  const obj3 = { style: tmp.content, children: items1 };
  items1 = [, ];
  const obj4 = { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items1[0] = hasOwnProperty(Text_Text.Text, obj4);
  items1[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText2 });
  items[1] = metroRequire(_false, obj3);
  items[2] = hasOwnProperty(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  return metroRequire(_false, obj);
};
