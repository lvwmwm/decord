// Module ID: 13179
// Function ID: 101533
// Name: UnicodeExtensionComponents
// Dependencies: [13174]

// Module 13179 (UnicodeExtensionComponents)
const require = arg1;
const dependencyMap = arg6;
arg5.UnicodeExtensionComponents = function UnicodeExtensionComponents(str) {
  let obj;
  obj(13174).invariant(str === str.toLowerCase(), "Expected extension to be lowercase");
  let num = 3;
  obj(13174).invariant("-u-" === str.slice(0, 3), "Expected extension to be a Unicode locale extension");
  const attributes = [];
  const keywords = [];
  if (3 < str.length) {
    while (true) {
      let index = str.indexOf("-", num);
      let tmp4 = num;
      let tmp5 = -1 === index ? length - num : index - num;
      let substr = str.slice(num, num + tmp5);
      let tmp7 = obj;
      let tmp8 = dependencyMap;
      let invariantResult2 = obj(13174).invariant(tmp5 >= 2, "Expected a subtag to have at least 2 characters");
      if (undefined === iter) {
        if (2 !== tmp5) {
          let tmp14 = iter;
          if (-1 === attributes.indexOf(substr)) {
            let arr = attributes.push(substr);
            tmp14 = iter;
          }
          num = num + (tmp5 + 1);
          iter = tmp14;
          if (num >= length) {
            break;
          }
        }
      }
      if (2 === tmp5) {
        obj = { key: substr, value: "" };
        tmp14 = obj;
        if (undefined === keywords.find((key) => {
          key = undefined;
          if (null != obj) {
            key = obj.key;
          }
          return key.key === key;
        })) {
          arr = keywords.push(obj);
          tmp14 = obj;
        }
      } else {
        let value;
        if (null != iter) {
          value = iter.value;
        }
        if ("" === value) {
          iter.value = substr;
          tmp14 = iter;
        } else {
          let tmp11 = obj;
          let tmp12 = dependencyMap;
          let invariantResult3 = obj(13174).invariant(undefined !== iter, "Expected keyword to be defined");
          iter.value = `${iter.value}-${tmp6}`;
          tmp14 = iter;
        }
      }
    }
  }
  return { attributes, keywords };
};
