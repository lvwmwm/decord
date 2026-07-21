// Module ID: 13693
// Function ID: 103636
// Name: FamilyCenterLinkingBannerParentContent
// Dependencies: []
// Exports: default

// Module 13693 (FamilyCenterLinkingBannerParentContent)
function FamilyCenterLinkingBannerParentContent() {
  let obj = { style: callback4().container };
  obj = { index: 1 };
  const intl = arg1(dependencyMap[7]).intl;
  obj.header = intl.string(importDefault(dependencyMap[8]).7xxAni);
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.description = intl2.string(importDefault(dependencyMap[8]).1M9So2);
  const items = [callback(FamilyCenterLinkingInstructionsRow, obj), , , ];
  obj = { index: 2 };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj.header = intl3.string(importDefault(dependencyMap[8]).AXgx+a);
  const intl4 = arg1(dependencyMap[7]).intl;
  obj.description = intl4.string(importDefault(dependencyMap[8]).GzMFnb);
  items[1] = callback(FamilyCenterLinkingInstructionsRow, obj);
  const obj1 = { index: 3 };
  const intl5 = arg1(dependencyMap[7]).intl;
  obj1.header = intl5.string(importDefault(dependencyMap[8]).MZn1tG);
  const intl6 = arg1(dependencyMap[7]).intl;
  obj1.description = intl6.string(importDefault(dependencyMap[8]).8rLBxD);
  obj1.isLast = true;
  items[2] = callback(FamilyCenterLinkingInstructionsRow, obj1);
  items[3] = callback(arg1(dependencyMap[12]).FamilyCenterParentQRCodeButton, {});
  obj.children = items;
  return callback2(closure_3, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  return callback(closure_3, { style: callback5().container, children: callback(arg1(dependencyMap[12]).FamilyCenterTeenQRCodeButton, {}) });
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  let description;
  let header;
  let index;
  let isLast;
  ({ header, description, index, isLast } = arg0);
  const tmp = callback6();
  let obj = { style: tmp.row };
  obj = { style: tmp.circle, children: callback(arg1(dependencyMap[10]).Text, { children: index }) };
  const items = [callback(closure_3, obj), ];
  obj = {};
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  items1[1] = gap;
  obj.style = items1;
  const items2 = [callback(arg1(dependencyMap[10]).Text, { variant: "heading-sm/bold", children: header }), callback(arg1(dependencyMap[10]).Text, { children: description })];
  obj.children = items2;
  items[1] = closure_6(closure_3, obj);
  obj.children = items;
  return closure_6(closure_3, obj);
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, marginTop: importDefault(dependencyMap[4]).space.PX_16, paddingTop: 0, paddingBottom: importDefault(dependencyMap[4]).space.PX_16, alignItems: "center", borderRadius: importDefault(dependencyMap[4]).radii.md, elevation: 2, overflow: "hidden" };
obj.container = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.content = { padding: importDefault(dependencyMap[4]).space.PX_16 };
const obj2 = { bhk: "hd", bic: "r", marginBottom: importDefault(dependencyMap[4]).space.PX_12 };
obj.art = obj2;
const obj1 = { padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.header = { marginBottom: importDefault(dependencyMap[4]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
let obj6 = arg1(dependencyMap[3]);
const obj4 = {};
const obj3 = { marginBottom: importDefault(dependencyMap[4]).space.PX_8 };
obj4.container = { marginTop: importDefault(dependencyMap[4]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, width: "100%" };
let closure_8 = obj6.createStyles(obj4);
let obj9 = arg1(dependencyMap[3]);
obj6 = {};
const obj5 = { marginTop: importDefault(dependencyMap[4]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, width: "100%" };
obj6.container = { width: "100%", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
let closure_9 = obj9.createStyles(obj6);
const obj7 = { width: "100%", paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
const obj8 = { row: {}, gap: { marginBottom: 12 } };
obj9 = { borderRadius: importDefault(dependencyMap[4]).radii.round, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_NORMAL };
obj8.circle = obj9;
obj8.rowContent = { shrink: null, disabled: 0 };
let closure_10 = arg1(dependencyMap[3]).createStyles(obj8);
const obj13 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  const intl = arg1(dependencyMap[7]).intl;
  const tmp2 = importDefault(dependencyMap[5])();
  const intl2 = arg1(dependencyMap[7]).intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(dependencyMap[8]).zUCWEL), intl2.string(importDefault(dependencyMap[8]).B0NPbp));
  let obj1 = arg1(dependencyMap[6]);
  const intl3 = arg1(dependencyMap[7]).intl;
  const stringResult = intl.string(importDefault(dependencyMap[8]).zUCWEL);
  const intl4 = arg1(dependencyMap[7]).intl;
  obj = { style: tmp.container };
  obj = {};
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.format(importDefault(dependencyMap[8]).yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }), intl4.string(importDefault(dependencyMap[8]).JsAEDi));
  obj.source = importDefault(dependencyMap[9]);
  obj.style = tmp.art;
  obj.resizeMethod = "resize";
  const items = [callback(closure_4, obj), , ];
  obj1 = { style: tmp.content };
  const items1 = [callback(arg1(dependencyMap[10]).Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }), callback(arg1(dependencyMap[11]).TextWithIOSLinkWorkaround, { children: ageSpecificText1 })];
  obj1.children = items1;
  items[1] = callback2(closure_3, obj1);
  items[2] = callback(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  obj.children = items;
  return callback2(closure_3, obj);
};
