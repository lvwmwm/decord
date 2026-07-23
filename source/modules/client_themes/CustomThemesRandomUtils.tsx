// Module ID: 3979
// Function ID: 33007
// Name: items
// Dependencies: [666, 2]
// Exports: generateRandomColorOptions

// Module 3979 (items)
let items = ["#94E0CF", "#9AF0B1", "#9A90FF", "#9A53FF", "#FDA6E4", "#FFE6C0", "#EFB4AA", "#56B69F", "#29C566", "#5348CA", "#6D24D4", "#CA48C8", "#F0AE29", "#DF4232"];
let closure_3 = [0, 45, 90, 135, 180, 225, 270, 315];
let closure_4 = [20, 40, 60, 80];
let obj = { SOLID: "solid", GRADIENT: "gradient" };
obj = { TWO_COLOR: "two-color", ANALOGOUS: "analogous", COMPLEMENTARY: "complementary", SPLIT_COMPLEMENTARY: "split-complementary", TRIADIC: "triadic" };
let items1 = [, , , ];
({ ANALOGOUS: arr2[0], COMPLEMENTARY: arr2[1], SPLIT_COMPLEMENTARY: arr2[2], TRIADIC: arr2[3] } = obj);
const result = require("set").fileFinishedImporting("modules/client_themes/CustomThemesRandomUtils.tsx");

export const COLOR_PALETTE = items;
export const ColorType = obj;
export const GradientType = obj;
export const generateRandomColorOptions = function generateRandomColorOptions() {
  const tmp = length2[Math.floor(Math, Math.random(Math) * length2.length)];
  const tmp2 = length[Math.floor(Math, Math.random(Math) * length.length)];
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
        let tmp6 = items;
        rounded1 = Math.floor(Math.random() * items.length);
      } while (rounded1 === rounded);
    }
    items = [, ];
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
    const tmp12 = items1[Math.floor(Math, Math.random(Math) * items1.length)];
    obj = {};
    obj.type = obj.GRADIENT;
    obj.colors = (function generateColorHarmony(arg0, arg1) {
      const obj = outer1_0(outer1_1[0])(arg0);
      let value = obj.get("hsl.h");
      value = obj.get("hsl.s");
      const value1 = obj.get("hsl.l");
      if (outer1_6.ANALOGOUS === arg1) {
        const obj14 = outer1_0(outer1_1[0]);
        const items = [outer1_0(outer1_1[0]).hsl(value - 30, value, value1).hex(), arg0, ];
        const hslResult = outer1_0(outer1_1[0]).hsl(value - 30, value, value1);
        const obj16 = outer1_0(outer1_1[0]);
        items[2] = outer1_0(outer1_1[0]).hsl(value + 30, value, value1).hex();
        return items;
      } else if (outer1_6.COMPLEMENTARY === arg1) {
        const obj10 = outer1_0(outer1_1[0]);
        const hexResult = outer1_0(outer1_1[0]).hsl((value + 180) % 360, value, value1).hex();
        const items1 = [arg0, , ];
        const hslResult2 = outer1_0(outer1_1[0]).hsl((value + 180) % 360, value, value1);
        const obj12 = outer1_0(outer1_1[0]);
        items1[1] = outer1_0(outer1_1[0]).mix(arg0, hexResult, 0.5).hex();
        items1[2] = hexResult;
        return items1;
      } else if (outer1_6.SPLIT_COMPLEMENTARY === arg1) {
        const items2 = [arg0, , ];
        const obj6 = outer1_0(outer1_1[0]);
        items2[1] = outer1_0(outer1_1[0]).hsl((value + 150) % 360, value, value1).hex();
        const hslResult3 = outer1_0(outer1_1[0]).hsl((value + 150) % 360, value, value1);
        const obj8 = outer1_0(outer1_1[0]);
        items2[2] = outer1_0(outer1_1[0]).hsl((value + 210) % 360, value, value1).hex();
        return items2;
      } else if (outer1_6.TRIADIC === arg1) {
        const items3 = [arg0, , ];
        const obj2 = outer1_0(outer1_1[0]);
        items3[1] = outer1_0(outer1_1[0]).hsl((value + 120) % 360, value, value1).hex();
        const hslResult5 = outer1_0(outer1_1[0]).hsl((value + 120) % 360, value, value1);
        const obj4 = outer1_0(outer1_1[0]);
        items3[2] = outer1_0(outer1_1[0]).hsl((value + 240) % 360, value, value1).hex();
        return items3;
      } else {
        const items4 = [arg0];
        return items4;
      }
    })(items[Math.floor(Math, Math.random(Math) * items.length)], tmp12);
    obj.angle = tmp2;
    obj.intensity = tmp;
    obj.gradientType = tmp12;
    return obj;
  }
};
