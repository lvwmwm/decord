// Module ID: 8132
// Function ID: 64354
// Name: PremiumFeatureList
// Dependencies: []
// Exports: default

// Module 8132 (PremiumFeatureList)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { item: { position: 40, bottom: 56, marginHorizontal: true, width: "/assets/../node_modules/.pnpm/@react-navigation+elements@1.3.31_pai5gyheycjh643xsf3bglag4a/node_modules/@react-navigation/elements/src/assets", backgroundColor: 24 } };
obj = {};
const tmp2 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5])(arg1(dependencyMap[2]).Fonts.PRIMARY_NORMAL, importDefault(dependencyMap[6]).colors.TEXT_DEFAULT, 14));
obj.label = obj;
const importDefaultResult = importDefault(dependencyMap[5]);
obj.iconMargin = { marginEnd: importDefault(dependencyMap[6]).space.PX_16 };
let closure_6 = obj.createStyles(obj);
const obj1 = { marginEnd: importDefault(dependencyMap[6]).space.PX_16 };
const result = arg1(dependencyMap[8]).fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  let features;
  ({ features, separator: closure_0, iconStyle: closure_1, labelStyle: closure_2, rowStyle: closure_3 } = style);
  const callback = callback2();
  const found = features.filter((hidden) => !hidden.hidden);
  return callback(View, {
    style: style.style,
    children: found.map((color) => {
      let obj = {};
      obj = { style: items };
      const items = [lib.item, closure_3];
      obj = { size: "md", color: color.color, style: items1 };
      const items1 = [lib.iconMargin, closure_1];
      const items2 = [lib(color.IconComponent, obj), ];
      const items3 = [lib.label, React];
      items2[1] = lib(callback(closure_1[7]).FormRow.Label, { numberOfLines: 2, style: items3, text: color.label });
      obj.children = items2;
      const items4 = [callback2(closure_3, obj, arg1), ];
      let tmp2 = null;
      if (null != callback) {
        tmp2 = null;
        if ("" !== callback) {
          tmp2 = null;
          if (color.renderSeparatorBelow) {
            tmp2 = callback;
          }
        }
      }
      items4[1] = tmp2;
      obj.children = items4;
      return callback2(React.Fragment, obj, arg1);
    })
  });
};
