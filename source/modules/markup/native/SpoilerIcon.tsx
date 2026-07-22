// Module ID: 11124
// Function ID: 86601
// Name: Spoiler
// Dependencies: []
// Exports: default

// Module 11124 (Spoiler)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/markup/native/SpoilerIcon.tsx");

export default function Spoiler(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  let str = width.color;
  if (str === undefined) {
    str = "currentColor";
  }
  let obj = { "Null": "spring", "Null": 0.4, "Null": 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(width, obj);
  obj = { viewBox: "0 0 24 24" };
  const merged1 = Object.assign(merged);
  obj["width"] = num;
  obj["height"] = num2;
  obj = { fill: str, d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z" };
  const items = [callback(arg1(dependencyMap[2]).Path, obj), ];
  const obj1 = { fill: str, d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z" };
  items[1] = callback(arg1(dependencyMap[2]).Path, obj1);
  obj["children"] = items;
  return callback2(arg1(dependencyMap[2]).Svg, obj);
};
