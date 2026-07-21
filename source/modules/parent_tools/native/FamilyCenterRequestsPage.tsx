// Module ID: 13694
// Function ID: 103654
// Name: FamilyCenterMaxConnectionsBlurb
// Dependencies: []
// Exports: default

// Module 13694 (FamilyCenterMaxConnectionsBlurb)
function FamilyCenterMaxConnectionsBlurb() {
  let obj = arg1(dependencyMap[7]);
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp = callback3();
  arg1(dependencyMap[9]);
  const intl = arg1(dependencyMap[10]).intl;
  intl.formatToPlainString(importDefault(dependencyMap[11]).1/PzIj, { maxConnections: importDefault(dependencyMap[8])() ? closure_5 : closure_6 });
  const intl2 = arg1(dependencyMap[10]).intl;
  let tmp7 = null;
  if (hasMaxConnections) {
    obj = { style: tmp.container };
    obj = { children: tmp6 };
    obj.children = callback(arg1(dependencyMap[12]).Text, obj);
    tmp7 = callback(closure_3, obj);
  }
  return tmp7;
}
function FamilyCenterHelpLineInfo() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[13]);
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  arg1(dependencyMap[13]);
  if (shouldShowHelplineLink) {
    const intl2 = arg1(dependencyMap[10]).intl;
    obj = { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" };
    let formatResult = intl2.format(importDefault(dependencyMap[11]).KOwsf/, obj);
  } else {
    formatResult = null;
    if (tmp4) {
      const intl = arg1(dependencyMap[10]).intl;
      obj = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(importDefault(dependencyMap[11]).6tsC8u, obj);
    }
  }
  let tmp13 = null;
  if (null != formatResult) {
    const obj1 = { style: tmp.container };
    const obj2 = { style: tmp.supportHeader, variant: "heading-sm/semibold" };
    const intl3 = arg1(dependencyMap[10]).intl;
    obj2.children = intl3.string(importDefault(dependencyMap[11]).7/tVhv);
    const items = [callback(arg1(dependencyMap[12]).Text, obj2), ];
    const obj3 = { hasMaxConnections: 0.0392156862745098, isBoostOnlySubscription: "OPACITY_44", children: formatResult };
    items[1] = callback(arg1(dependencyMap[14]).TextWithIOSLinkWorkaround, obj3);
    obj1.children = items;
    tmp13 = callback2(closure_3, obj1);
  }
  return tmp13;
}
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_5, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_6 } = arg1(dependencyMap[2]));
const THROUGHLINE_URL = arg1(dependencyMap[3]).THROUGHLINE_URL;
const tmp4 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { display: "flex", paddingTop: importDefault(dependencyMap[6]).space.PX_12, marginTop: importDefault(dependencyMap[6]).space.PX_12, borderTopColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE, borderTopWidth: 1 };
obj.container = obj;
let closure_10 = obj.createStyles(obj);
let obj3 = arg1(dependencyMap[5]);
const obj1 = {};
const tmp5 = arg1(dependencyMap[4]);
obj1.container = { display: "flex", marginTop: importDefault(dependencyMap[6]).space.PX_16 };
obj3 = { marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
obj1.supportHeader = obj3;
let closure_11 = obj3.createStyles(obj1);
const obj2 = { display: "flex", marginTop: importDefault(dependencyMap[6]).space.PX_16 };
const obj4 = { scrollView: { flex: 1 } };
const obj8 = arg1(dependencyMap[5]);
obj4.container = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
let closure_12 = obj8.createStyles(obj4);
const obj5 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  const tmp = callback5();
  let obj = { style: tmp.scrollView };
  obj = { bottom: true };
  obj = { style: tmp.container };
  const items = [callback(importDefault(dependencyMap[16]), {}), callback(importDefault(dependencyMap[17]), {}), callback(importDefault(dependencyMap[18]), {}), callback(importDefault(dependencyMap[19]), {}), callback(FamilyCenterMaxConnectionsBlurb, {}), callback(FamilyCenterHelpLineInfo, {})];
  obj.children = items;
  obj.children = callback2(closure_3, obj);
  obj.children = callback(arg1(dependencyMap[15]).SafeAreaPaddingView, obj);
  return callback(closure_4, obj);
};
