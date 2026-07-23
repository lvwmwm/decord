// Module ID: 78
// Function ID: 1475
// Name: processTransformOrigin
// Dependencies: [57, 44]
// Exports: default

// Module 78 (processTransformOrigin)
import "_slicedToArray";


export default function processTransformOrigin(arg0) {
  let tmp = arg0;
  if ("string" === typeof arg0) {
    const obj = /(top|bottom|left|right|center|\d+(?:%|px)|0)/gi;
    const items = ["50%", "50%", 0];
    let match = obj.exec(arg0);
    let num4 = 0;
    tmp = items;
    if (match) {
      while (true) {
        let sum = num4 + 1;
        let str = match[0];
        let formatted = str.toLowerCase();
        if ("left" !== formatted) {
          if ("right" !== formatted) {
            if ("top" !== formatted) {
              if ("bottom" !== formatted) {
                if ("center" === formatted) {
                  let tmp5 = importDefault;
                  let tmp6 = dependencyMap;
                  let tmp7 = importDefault(44)(2 !== num4, "Transform-origin value %s cannot be used for z-position", str);
                  items[num4] = "50%";
                  let num = sum;
                  let tmp4 = tmp18;
                } else if (str.endsWith("%")) {
                  items[num4] = str;
                  num = sum;
                  tmp4 = tmp18;
                } else {
                  let _parseFloat = parseFloat;
                  items[num4] = parseFloat(str);
                  num = sum;
                  tmp4 = tmp18;
                }
              }
            }
            let tmp8 = importDefault;
            let tmp9 = dependencyMap;
            let tmp10 = importDefault(44)(2 !== num4, "Transform-origin %s can only be used for y-position", str);
            let num2 = "100%";
            if ("top" === formatted) {
              num2 = 0;
            }
            items[1] = num2;
            num = sum;
            tmp4 = tmp18;
            if (0 === num4) {
              let match1 = obj.exec(arg0);
              tmp = items;
              if (null == match1) {
                break;
              } else {
                let str14 = match1[0];
                let formatted1 = str14.toLowerCase();
                if ("left" === formatted1) {
                  items[0] = 0;
                  num = 2;
                  tmp4 = match1;
                } else if ("right" === formatted1) {
                  items[0] = "100%";
                  num = 2;
                  tmp4 = match1;
                } else if ("center" === formatted1) {
                  items[0] = "50%";
                  num = 2;
                  tmp4 = match1;
                } else {
                  let tmp11 = importDefault;
                  let tmp12 = dependencyMap;
                  let tmp13 = importDefault(44)(false, "Could not parse transform-origin: %s", arg0);
                  num = 2;
                  tmp4 = match1;
                }
              }
            }
            break;
          }
          match = obj.exec(arg0);
          num4 = num;
          tmp18 = tmp4;
          tmp = items;
          if (!match) {
            break;
          }
        }
        let tmp14 = importDefault;
        let tmp15 = dependencyMap;
        let tmp16 = importDefault(44)(0 === num4, "Transform-origin %s can only be used for x-position", str);
        let num3 = "100%";
        if ("left" === formatted) {
          num3 = 0;
        }
        items[0] = num3;
        num = sum;
        tmp4 = tmp18;
      }
    }
  }
  return tmp;
};
