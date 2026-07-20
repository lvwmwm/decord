// Module ID: 11583
// Function ID: 90075
// Name: importDefaultResult1
// Dependencies: []
// Exports: default

// Module 11583 (importDefaultResult1)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = {};
const importDefaultResult = importDefault(dependencyMap[4]);
const importDefaultResultResult = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_360);
obj.borderColor = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_360).alpha(0.35).hex();
obj.cardActive = obj;
const obj1 = {};
const alphaResult = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_360).alpha(0.35);
const importDefaultResult1 = importDefault(dependencyMap[4]);
const importDefaultResult1Result = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300);
obj1.borderColor = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
obj.cardExpiring = obj1;
const obj2 = {};
const alphaResult1 = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300).alpha(0.35);
const importDefaultResult2 = importDefault(dependencyMap[4]);
const importDefaultResult2Result = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300);
obj2.borderColor = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
obj.cardRemoving = obj2;
let closure_4 = obj.createStyles(obj);
const alphaResult2 = importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300).alpha(0.35);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default function GuildPowerupsCard(status) {
  let children;
  let containerStyle;
  let style;
  status = status.status;
  let obj = { "Bool(false)": "r", "Bool(false)": "onRequireModeratorMFAClick", "Bool(false)": "Array", "Bool(false)": "isSpamMessageRequest" };
  ({ children, containerStyle, style } = status);
  Object.setPrototypeOf(null);
  const merged = Object.assign(status, obj);
  const tmp3 = callback();
  obj = { style: containerStyle };
  obj = { fillRule: "/assets/design/components/Illustration/native/redesign/generated/images", stroke: 232, strokeOpacity: 126 };
  const merged1 = Object.assign(merged);
  let type;
  if (null != status) {
    type = status.type;
  }
  const items = ["active" === type && tmp3.cardActive, , , ];
  let type1;
  if (null != status) {
    type1 = status.type;
  }
  items[1] = "expiring" === type1 && tmp3.cardExpiring;
  let type2;
  if (null != status) {
    type2 = status.type;
  }
  items[2] = "removing" === type2 && tmp3.cardRemoving;
  items[3] = style;
  obj["style"] = items;
  obj["children"] = children;
  obj.children = jsx(arg1(dependencyMap[6]).Card, obj);
  return <View {...obj} />;
};
