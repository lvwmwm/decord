// Module ID: 11586
// Function ID: 90082
// Name: GuildPowerupsPerkCard
// Dependencies: []
// Exports: default

// Module 11586 (GuildPowerupsPerkCard)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
obj.card = { "Bool(true)": "c5a514a204d76328abe2ecbd82735ce3", "Bool(true)": "no_mutual_friends_dark" };
const tmp3 = arg1(dependencyMap[2]);
obj.contentContainer = { gap: importDefault(dependencyMap[4]).space.PX_16, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.imageContainer = { aze: null, azj: "\u{1F44D}\u{1F3FC}" };
obj.gradient = { disabled: null, resizeMode: null, dispatch: null, toString: null, Icon: null };
const obj1 = { gap: importDefault(dependencyMap[4]).space.PX_16, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.headerContainer = { gap: importDefault(dependencyMap[4]).space.PX_4 };
const obj2 = { gap: importDefault(dependencyMap[4]).space.PX_4 };
obj.badge = { position: "absolute", top: importDefault(dependencyMap[4]).space.PX_12, right: importDefault(dependencyMap[4]).space.PX_12 };
let closure_6 = obj.createStyles(obj);
const obj3 = { position: "absolute", top: importDefault(dependencyMap[4]).space.PX_12, right: importDefault(dependencyMap[4]).space.PX_12 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default function GuildPowerupsPerkCard(arg0) {
  let badge;
  let description;
  let imageUrl;
  let isImageAnimated;
  let onPress;
  let riveComponent;
  let status;
  let style;
  let title;
  ({ imageUrl, isImageAnimated } = arg0);
  ({ title, description } = arg0);
  if (isImageAnimated === undefined) {
    isImageAnimated = true;
  }
  ({ riveComponent, status, badge } = arg0);
  let obj = { "Bool(false)": true, "Bool(false)": 6, "Bool(false)": 132, "Bool(false)": null, "Bool(false)": "\u{1F9D1}\u200D\u{1F680}", "Null": true, "Null": 12.1, "Null": 133, "Null": null };
  ({ style, onPress } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback3();
  let obj1 = arg1(dependencyMap[6]);
  const tmp4 = importDefault(dependencyMap[5])();
  obj = { containerStyle: items, style: tmp3.card, status, onPress };
  const items = [tmp3.container, style];
  obj = { style: tmp3.imageContainer };
  const tmp5 = obj1.isThemeDark(importDefault(dependencyMap[5])()) ? [] : [null, null];
  if (null == riveComponent) {
    obj1 = {};
    let str = "";
    if (null != imageUrl) {
      str = imageUrl;
    }
    obj1.imageUrl = str;
    obj1.isAnimated = isImageAnimated;
    riveComponent = callback(importDefault(dependencyMap[8]), obj1);
    const tmp12 = importDefault(dependencyMap[8]);
    const tmp9 = callback;
  }
  const items1 = [riveComponent, callback(importDefault(dependencyMap[9]), { colors: tmp5, style: tmp3.gradient })];
  obj.children = items1;
  const items2 = [callback2(View, obj), , , ];
  const obj3 = { style: tmp3.contentContainer };
  const obj4 = { style: tmp3.headerContainer };
  const items3 = [callback(arg1(dependencyMap[10]).Text, { variant: "heading-md/bold", children: title }), callback(arg1(dependencyMap[10]).Text, { variant: "text-sm/medium", children: description })];
  obj4.children = items3;
  const items4 = [callback2(View, obj4), ];
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5["status"] = status;
  items4[1] = callback(arg1(dependencyMap[11]).GuildPowerupsCardFooter, obj5);
  obj3.children = items4;
  items2[1] = callback2(View, obj3);
  let tmp14 = "new" === badge;
  if (tmp14) {
    const obj6 = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj6.text = intl.string(arg1(dependencyMap[13]).t.y2b7CA);
    obj6.style = tmp3.badge;
    tmp14 = callback(arg1(dependencyMap[12]).TextBadge, obj6);
  }
  items2[2] = tmp14;
  let tmp18 = "beta" === badge;
  if (tmp18) {
    const obj7 = {};
    const intl2 = arg1(dependencyMap[13]).intl;
    obj7.text = intl2.string(arg1(dependencyMap[13]).t.oW0eUd);
    obj7.color = arg1(dependencyMap[12]).BadgeColors.BRAND;
    obj7.style = tmp3.badge;
    tmp18 = callback(arg1(dependencyMap[12]).TextBadge, obj7);
  }
  items2[3] = tmp18;
  obj.children = items2;
  return callback2(importDefault(dependencyMap[7]), obj);
};
