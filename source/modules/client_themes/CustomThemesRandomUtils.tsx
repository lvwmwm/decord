// Module ID: 3977
// Function ID: 33002
// Name: items
// Dependencies: []
// Exports: generateRandomColorOptions

// Module 3977 (items)
const items = ["couch", "couch_and_lamp", "sleeping_accommodation", "person_in_bed", 3802, 3803, 3804, 3805, 3806, "teddy_bear", -12565380240241317000000000000000000000000000000000000000000, -3757119220542412500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000066946582328189, -1057518068697794500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_3 = ["<string:738198205>", "<string:100663791>", "<string:1174405543>", "<string:1962934973>", "<string:3355443730>", "<string:1107296677>", "<string:2617246102>", "<string:3175743490>"];
let closure_4 = [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037241684301154946, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022999115495886595, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005411435815462781, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000069192164904572325];
let obj = { SOLID: "solid", GRADIENT: "gradient" };
obj = { TWO_COLOR: "two-color", ANALOGOUS: "analogous", COMPLEMENTARY: "complementary", SPLIT_COMPLEMENTARY: "split-complementary", TRIADIC: "triadic" };
const items1 = [, , , ];
({ ANALOGOUS: arr2[0], COMPLEMENTARY: arr2[1], SPLIT_COMPLEMENTARY: arr2[2], TRIADIC: arr2[3] } = obj);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/client_themes/CustomThemesRandomUtils.tsx");

export const COLOR_PALETTE = items;
export const ColorType = obj;
export const GradientType = obj;
export const generateRandomColorOptions = function generateRandomColorOptions() {
  let str = "path2";
  if (Math.random() < 0.2) {
    str = "path1";
  }
  if ("path1" === str) {
    const _Math = Math;
    const _Math2 = Math;
    const rounded = Math.floor(Math.random() * items.length);
    const _Math3 = Math;
    const _Math4 = Math;
    let rounded1 = Math.floor(Math.random() * items.length);
    if (rounded1 === rounded) {
      do {
        let _Math5 = Math;
        let _Math6 = Math;
        let tmp6 = closure_2;
        rounded1 = Math.floor(Math.random() * closure_2.length);
      } while (rounded1 === rounded);
    }
    const items = [, ];
    items[0] = items[rounded];
    items[1] = items[rounded1];
    let obj = {};
    obj.type = obj.GRADIENT;
    obj.colors = items;
    obj.angle = tmp2;
    obj.intensity = tmp;
    obj.gradientType = obj.TWO_COLOR;
    return obj;
  } else {
    const _Math7 = Math;
    const _Math8 = Math;
    const _Math9 = Math;
    const _Math10 = Math;
    obj = {};
    obj.type = obj.GRADIENT;
    obj.colors = function generateColorHarmony(arg0, arg1) {
      const obj = callback(closure_1[0])(arg0);
      let value = obj.get("hsl.h");
      value = obj.get("hsl.s");
      const value1 = obj.get("hsl.l");
      if (constants.ANALOGOUS === arg1) {
        const obj14 = callback(closure_1[0]);
        const items = [callback(closure_1[0]).hsl(value - 30, value, value1).hex(), arg0, ];
        const hslResult = callback(closure_1[0]).hsl(value - 30, value, value1);
        const obj16 = callback(closure_1[0]);
        items[2] = callback(closure_1[0]).hsl(value + 30, value, value1).hex();
        return items;
      } else if (constants.COMPLEMENTARY === arg1) {
        const obj10 = callback(closure_1[0]);
        const hexResult = callback(closure_1[0]).hsl((value + 180) % 360, value, value1).hex();
        const items1 = [arg0, , ];
        const hslResult2 = callback(closure_1[0]).hsl((value + 180) % 360, value, value1);
        const obj12 = callback(closure_1[0]);
        items1[1] = callback(closure_1[0]).mix(arg0, hexResult, 0.5).hex();
        items1[2] = hexResult;
        return items1;
      } else if (constants.SPLIT_COMPLEMENTARY === arg1) {
        const items2 = [arg0, , ];
        const obj6 = callback(closure_1[0]);
        items2[1] = callback(closure_1[0]).hsl((value + 150) % 360, value, value1).hex();
        const hslResult3 = callback(closure_1[0]).hsl((value + 150) % 360, value, value1);
        const obj8 = callback(closure_1[0]);
        items2[2] = callback(closure_1[0]).hsl((value + 210) % 360, value, value1).hex();
        return items2;
      } else if (constants.TRIADIC === arg1) {
        const items3 = [arg0, , ];
        const obj2 = callback(closure_1[0]);
        items3[1] = callback(closure_1[0]).hsl((value + 120) % 360, value, value1).hex();
        const hslResult5 = callback(closure_1[0]).hsl((value + 120) % 360, value, value1);
        const obj4 = callback(closure_1[0]);
        items3[2] = callback(closure_1[0]).hsl((value + 240) % 360, value, value1).hex();
        return items3;
      } else {
        const items4 = [arg0];
        return items4;
      }
    }(items[Math.floor(Math, Math.random(Math) * closure_2.length)], items1[Math.floor(Math, Math.random(Math) * closure_7.length)]);
    obj.angle = tmp2;
    obj.intensity = tmp;
    obj.gradientType = items1[Math.floor(Math, Math.random(Math) * closure_7.length)];
    return obj;
  }
};
