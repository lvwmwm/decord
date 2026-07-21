// Module ID: 8201
// Function ID: 64854
// Name: items
// Dependencies: []
// Exports: default

// Module 8201 (items)
let closure_2 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
const items = ["Array", "isArray", -40];
const items1 = [items, , , , , , , , , ];
const items2 = [true, true, -10];
items1[1] = items2;
items1[2] = [0.0000000000000000000005558661547896243, 0.0000000000000000000007940941712357112, 685080386832924500000000000000000000000000000000];
items1[3] = [];
items1[4] = [];
items1[5] = [false, false, false];
const items3 = ["getInitialInteractionMetadata", "%AsyncFromSyncIteratorPrototype%", -20];
items1[6] = items3;
items1[7] = [];
const items4 = [623832364388668400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.00000000000000000000000000000000000000000000000000037585790625635064, -20];
items1[8] = items4;
items1[9] = ["SLOWMODE_VALUES", "optOutExpiryTime", "Array"];
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
