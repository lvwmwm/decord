// Module ID: 13458
// Function ID: 102194
// Name: GummyStripes
// Dependencies: []
// Exports: default

// Module 13458 (GummyStripes)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, Fragment: closure_4 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  let closure_0 = callback2();
  return callback(closure_4, {
    children: colors.map((color) => {
      let obj = {};
      const items = [lib.stripe, , ];
      let stripeOverlap = arg1 > 0;
      if (stripeOverlap) {
        stripeOverlap = lib.stripeOverlap;
      }
      items[1] = stripeOverlap;
      obj = { backgroundColor: lib(closure_1[4]).int2hex(color) };
      items[2] = obj;
      obj.style = items;
      return closure_3(closure_2, obj, arg1);
    })
  });
};
