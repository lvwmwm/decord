// Module ID: 12895
// Function ID: 98449
// Name: OverflowSquircle
// Dependencies: []
// Exports: OverflowCircle, OverflowText, OverflowTextSmall, default

// Module 12895 (OverflowSquircle)
function OverflowSquircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = callback();
  let obj = { style: items };
  const items = [tmp.overflowSquircleWrap, style];
  obj = { style: tmp.overflowSquircle };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  obj.children = <View {...obj} />;
  return <View {...obj} />;
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { container: { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" }, iconWrapper: { <string:3596066964>: null, <string:3638417373>: null } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.overflowSquircleWrap = obj;
obj.overflowSquircle = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
const obj2 = { numGuildMembers: "<string:3829596163>", numChannels: "<string:3841983414>", query: "<string:3875537846>", limit: "<string:1124074422>", _fuzzy: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434", borderRadius: importDefault(dependencyMap[4]).radii.lg, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.overflowTextOnly = obj2;
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
obj.overflowCircleWrap = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
const obj3 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
obj.overflowCircle = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
let closure_4 = obj.createStyles(obj);
const obj4 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(items) {
  let overflowComponent;
  let style;
  items = items.items;
  const arg1 = items;
  let num = items.max;
  if (num === undefined) {
    num = 8;
  }
  const dependencyMap = num;
  ({ renderItem: closure_2, offsetAmount: closure_3, iconWrapperStyle: closure_4, overflowStyle: closure_5, overflowComponent, style } = items);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  let tmp;
  let closure_8;
  tmp = callback();
  closure_8 = Math.max(items.length - num, 0);
  const items1 = [tmp.container, style];
  return <View style={items1}>{items.map((arg0, arg1) => {
    if (arg1 < num) {
      if (arg1 === num - 1) {
        if (closure_8 > 0) {
          let obj = {};
          obj = { marginLeft: callback2 };
          const items = [obj, closure_5];
          obj.style = items;
          obj.overflow = closure_8 + 1;
          let tmp6 = callback2(overflowComponent, obj, arg1);
        }
        return tmp6;
      }
      const _Math = Math;
      let diff = Math.min(items.length, num) - 1;
      tmp6 = null;
      if (arg0) {
        obj = {};
        const items1 = [tmp.iconWrapper, closure_4, ];
        if (0 !== arg1) {
          const obj1 = { marginLeft: callback2 };
          let obj2 = obj1;
        } else {
          obj2 = {};
        }
        items1[2] = obj2;
        obj.style = items1;
        diff = callback(arg0, arg1 === diff);
        obj.children = diff;
        callback2(callback, obj, arg1);
        const tmp7 = callback2;
        const tmp8 = callback;
      }
    }
  })}</View>;
};
export const OverflowText = function OverflowText(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  let obj = {};
  const items = [callback().overflowTextOnly, style];
  obj.style = items;
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
export const OverflowTextSmall = function OverflowTextSmall(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  let obj = {};
  const items = [callback().overflowTextOnly, style];
  obj.style = items;
  obj = { variant: "text-xxs/medium", children: "+" + overflow };
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
export const OverflowCircle = function OverflowCircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = callback();
  let obj = { style: items };
  const items = [tmp.overflowCircleWrap, style];
  obj = { style: tmp.overflowCircle };
  obj = { variant: "text-xs/medium", children: "+" + overflow };
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  obj.children = <View {...obj} />;
  return <View {...obj} />;
};
