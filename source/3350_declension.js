// Module ID: 3350
// Function ID: 26186
// Name: declension
// Dependencies: []
// Exports: default

// Module 3350 (declension)
function declension(one) {
  if (undefined !== one.one) {
    if (1 === arg1) {
      return one.one;
    }
  }
  const result = arg1 % 10;
  const result1 = arg1 % 100;
  if (1 === result) {
    if (11 !== result1) {
      const _String2 = String;
      let replaced = one.singularNominative.replace("{{count}}", String(arg1));
      const str4 = one.singularNominative;
    }
    return replaced;
  }
  if (result >= 2) {
    if (result <= 4) {
      const _String = String;
      replaced = one.singularGenitive.replace("{{count}}", String(arg1));
      const str2 = one.singularGenitive;
    }
  }
  replaced = one.pluralGenitive.replace("{{count}}", String(arg1));
}
function buildLocalizeTokenFn(arg0) {
  return (self, addSuffix) => {
    if (addSuffix) {
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          if (self.past) {
            let text = tmp2(tmp3.past, self);
          } else {
            text = `${tmp2(tmp3.regular, self)} тому`;
          }
        }
        if (self.future) {
          let text1 = tmp6(tmp7.future, self);
        } else {
          text1 = `за ${tmp6(tmp7.regular, self)}`;
        }
      }
    }
    return callback(self.regular, self);
  };
}
const obj = {
  lessThanXSeconds: buildLocalizeTokenFn({ regular: { "Null": -1661140989, "Null": -1203568637, "Null": -1107295371, "Null": -1090518155 }, future: {} }),
  xSeconds: buildLocalizeTokenFn({ regular: {}, past: {}, future: {} }),
  halfAMinute: function halfAtMinute(arg0, addSuffix) {
    let str = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
    if (addSuffix) {
      str = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
      if (addSuffix.addSuffix) {
        let str3 = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
        if (addSuffix.comparison) {
          str3 = "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
          if (addSuffix.comparison > 0) {
            str3 = "\u0437\u0430 \u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
          }
        }
        str = str3;
      }
    }
    return str;
  },
  lessThanXMinutes: buildLocalizeTokenFn({ regular: { "Null": true, "Null": true, "Null": true, "Null": true }, future: { "Null": 1, "Null": 97, "Null": "center", "Null": "center" } }),
  xMinutes: buildLocalizeTokenFn({ regular: {}, past: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null }, future: { "Bool(true)": "absolute", formatDistanceStrict: 0, formatDistanceToNow: 0 } }),
  aboutXHours: buildLocalizeTokenFn({ regular: {}, future: { "Bool(true)": 1895826294, formatDistanceStrict: -349569021, formatDistanceToNow: -349569022 } }),
  xHours: buildLocalizeTokenFn({ regular: { "Bool(true)": "isArray", formatDistanceStrict: "fileFinishedImporting", formatDistanceToNow: "uri" } }),
  xDays: buildLocalizeTokenFn({ regular: { "Bool(true)": "narrow", formatDistanceStrict: "formatting", formatDistanceToNow: "wide" } }),
  aboutXWeeks: buildLocalizeTokenFn({ regular: { "Bool(true)": 57208983937841690000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, formatDistanceStrict: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001780966294504221, formatDistanceToNow: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011631732206128824 }, future: { "Bool(true)": false, formatDistanceStrict: false, formatDistanceToNow: false } }),
  xWeeks: buildLocalizeTokenFn({ regular: { "Bool(true)": "<string:1376593423>", formatDistanceStrict: "<string:1527966079>", formatDistanceToNow: "<string:315241554>" } }),
  aboutXMonths: buildLocalizeTokenFn({ regular: { "Bool(true)": "scrollDistanceWithRespectToSnapPoints", formatDistanceStrict: "cursorScope", formatDistanceToNow: "PREVIEW_SIZE" }, future: { "Bool(true)": "addDependency", formatDistanceStrict: "allowFetch", formatDistanceToNow: "addedChannelIds" } }),
  xMonths: buildLocalizeTokenFn({ regular: {} }),
  aboutXYears: buildLocalizeTokenFn({ regular: { "Bool(true)": false, formatDistanceStrict: false, formatDistanceToNow: false }, future: { "Bool(true)": false, formatDistanceStrict: false, formatDistanceToNow: false } }),
  xYears: buildLocalizeTokenFn({ regular: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null } }),
  overXYears: buildLocalizeTokenFn({ regular: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null }, future: { "Bool(true)": null, formatDistanceStrict: null, formatDistanceToNow: null } }),
  almostXYears: buildLocalizeTokenFn({ regular: {}, future: {} })
};

export default function formatDistance(arg0, arg1, arg2) {
  let obj = arg2;
  if (!arg2) {
    obj = {};
  }
  return obj[arg0](arg1, obj);
};
export default exports.default;
