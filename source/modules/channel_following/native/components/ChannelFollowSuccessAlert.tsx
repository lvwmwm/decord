// Module ID: 10360
// Function ID: 79946
// Name: items
// Dependencies: []
// Exports: default

// Module 10360 (items)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const items = [arg1(dependencyMap[3]), arg1(dependencyMap[4]), arg1(dependencyMap[5])];
const items1 = [arg1(dependencyMap[6]), arg1(dependencyMap[7]), arg1(dependencyMap[8])];
const items2 = [
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.w2o/60);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.FiAvKg);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.vKUFek);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.veQl5T);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.Pxb7BR);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.W03w++);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.95HTb5);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.+XFelz);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.hedHel);
  },
  () => {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.jgC65t);
  }
];
const tmp3 = arg1(dependencyMap[2]);
let closure_9 = arg1(dependencyMap[10]).createStyles({ text: { "Bool(false)": 2013266936, "Bool(false)": 1140851704, "Bool(false)": 192532 }, header: { textAlign: "center" }, image: {} });
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  const tmp = callback3();
  let obj = arg1(dependencyMap[12]);
  const tmp3 = obj.isThemeDark(importDefault(dependencyMap[11])()) ? items1 : items;
  const arg1 = tmp3;
  let obj1 = arg1(dependencyMap[13]);
  const items = [tmp3];
  const stableMemo = obj1.useStableMemo(() => callback(closure_2[14]).sample(tmp3), items);
  let obj2 = arg1(dependencyMap[13]);
  const stableMemo1 = obj2.useStableMemo(() => callback(closure_2[14]).sample(closure_8), []);
  obj = {};
  const tmp2 = importDefault(dependencyMap[11])();
  const merged = Object.assign(arg0);
  const intl = arg1(dependencyMap[9]).intl;
  obj["confirmText"] = intl.string(arg1(dependencyMap[9]).t.+IrDzN);
  obj = { source: stableMemo, style: tmp.image };
  const items1 = [callback(Image, obj), , ];
  obj1 = { style: tmp.header, children: stableMemo1() };
  items1[1] = callback(arg1(dependencyMap[16]).Text, obj1);
  obj2 = { style: tmp.text };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[9]).t.2QbSea);
  items1[2] = callback(arg1(dependencyMap[16]).Text, obj2);
  obj["children"] = items1;
  return callback2(importDefault(dependencyMap[15]), obj);
};
