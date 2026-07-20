// Module ID: 8197
// Function ID: 64842
// Name: items
// Dependencies: []
// Exports: default

// Module 8197 (items)
let closure_2 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
const items = [994770946, 919863298, -40];
const items1 = [items, , , , , , , , , ];
const items2 = [false, false, -10];
items1[1] = items2;
items1[2] = [177533965826379300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 54519169488040900000000000000000000, 4201829163742802400000000000000000000000000000000];
items1[3] = [];
items1[4] = [];
items1[5] = ["Array", "useQuestImpressionId", "Array"];
const items3 = [true, true, -20];
items1[6] = items3;
items1[7] = [];
const items4 = [1387086080, 1313931265, -20];
items1[8] = items4;
items1[9] = ["<string:4191502595>", "<string:2906783745>", "<string:1258291538>"];
let closure_6 = arg1(dependencyMap[4]).createStyles({ emojisContainer: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/native/GiftModalEmojis.tsx");

export default function _default(emojiName) {
  emojiName = emojiName.emojiName;
  const importDefault = emojiName;
  let flag = emojiName.randomizeSizing;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let uRL;
  let obj = importDefault(dependencyMap[5]);
  uRL = obj.getURL(emojiName);
  obj = {
    style: callback().emojisContainer,
    children: items1.map((arg0, arg1) => {
      let tmp2;
      let tmp3;
      let tmp4;
      let num = 1;
      [tmp2, tmp3, tmp4] = callback(arg0, 3);
      let obj = { src: callback, name: emojiName };
      obj = { position: "absolute" };
      const tmp = callback(arg0, 3);
      const tmp5 = closure_4;
      obj.top = "" + tmp2 + "%";
      obj.left = "" + tmp3 + "%";
      obj = { rotate: "" + tmp4 + "deg" };
      const items = [obj, ];
      const obj1 = {};
      if (flag) {
        const _Math = Math;
        num = 1.5 * Math.random() + 0.5;
      }
      obj1.scale = num;
      items[1] = obj1;
      obj.transform = items;
      obj.style = obj;
      obj.forceTextEmoji = true;
      return tmp5(emojiName(flag[6]), obj, "" + arg1 + "-" + emojiName);
    })
  };
  return <View {...obj} />;
};
