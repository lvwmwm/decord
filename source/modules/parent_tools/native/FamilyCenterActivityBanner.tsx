// Module ID: 13664
// Function ID: 103485
// Name: FamilyCenterActivityBannerButton
// Dependencies: []
// Exports: default

// Module 13664 (FamilyCenterActivityBannerButton)
function FamilyCenterActivityBannerButton() {
  let obj = arg1(dependencyMap[4]);
  const hasActiveLinks = obj.useHasActiveLinks();
  const tmp3 = importDefault(dependencyMap[5])();
  const tmp = callback2();
  let tmp4 = null;
  if (!obj2.useHasMaxConnections()) {
    if (tmp3) {
      tmp4 = null;
    }
    obj = { style: tmp.container };
    let tmp7Result = arg1(dependencyMap[6]);
    tmp7Result = closure_5(tmp3 ? tmp7Result.FamilyCenterParentQRCodeButton : tmp7Result.FamilyCenterTeenQRCodeButton, {});
    obj.children = tmp7Result;
    closure_5(closure_3, obj);
    const tmp5 = closure_5;
    const tmp6 = closure_3;
    const tmp7 = closure_5;
  }
  return tmp4;
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
let closure_7 = obj.createStyles({ container: { width: "100%" } });
let obj1 = arg1(dependencyMap[3]);
obj = {};
obj = { <string:1449237113>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006835717854823887, <string:1621778770>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000563, <string:1370972586>: 203623697495444500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:4217479666>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002953020121760984, <string:317649491>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045867750867854, <string:1638003525>: -0.0000000000000000019220791808621792, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.container = obj;
obj1 = { marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj.art = obj1;
const tmp4 = arg1(dependencyMap[2]);
obj.header = { marginBottom: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
obj.description = { textAlign: "center" };
let closure_8 = obj1.createStyles(obj);
const obj2 = { marginBottom: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default function FamilyCenterActivityBanner() {
  const tmp3 = callback3();
  let obj = arg1(dependencyMap[4]);
  const hasMaxConnections = obj.useHasMaxConnections();
  let obj1 = arg1(dependencyMap[8]);
  const intl = arg1(dependencyMap[9]).intl;
  const tmp = importDefault;
  const tmp2 = importDefault(dependencyMap[5])();
  const intl2 = arg1(dependencyMap[9]).intl;
  const ageSpecificText = obj1.useAgeSpecificText(intl.string(importDefault(dependencyMap[10]).T7GyW+), intl2.string(importDefault(dependencyMap[10]).goKE2b));
  let obj2 = arg1(dependencyMap[8]);
  const intl3 = arg1(dependencyMap[9]).intl;
  const stringResult = intl.string(importDefault(dependencyMap[10]).T7GyW+);
  const intl4 = arg1(dependencyMap[9]).intl;
  obj = { style: tmp3.container };
  obj = {};
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.format(importDefault(dependencyMap[10]).MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" }), intl4.format(importDefault(dependencyMap[10]).EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  if (tmp2) {
    let tmp14 = tmp13[11];
  } else {
    tmp14 = tmp13[12];
  }
  obj.source = tmp(tmp14);
  obj.style = tmp3.art;
  const items = [callback(closure_4, obj), , , ];
  obj1 = { style: tmp3.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items[1] = callback(arg1(dependencyMap[13]).Text, obj1);
  obj2 = { style: tmp3.description, children: ageSpecificText1 };
  items[2] = callback(arg1(dependencyMap[14]).TextWithIOSLinkWorkaround, obj2);
  let tmp15 = null;
  if (!hasMaxConnections) {
    tmp15 = callback(FamilyCenterActivityBannerButton, {});
  }
  items[3] = tmp15;
  obj.children = items;
  return closure_6(closure_3, obj);
};
