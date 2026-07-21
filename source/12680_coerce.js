// Module ID: 12680
// Function ID: 97341
// Name: coerce
// Dependencies: []

// Module 12680 (coerce)

export default function coerce(arg0, arg1) {
  let obj = arg1;
  if (arg0 instanceof require(dependencyMap[0])) {
    return arg0;
  } else {
    let StringResult = arg0;
    if ("number" === typeof arg0) {
      const _String = String;
      StringResult = String(arg0);
    }
    if ("string" !== typeof StringResult) {
      return null;
    } else {
      if (!obj) {
        obj = {};
      }
      if (obj.rtl) {
        const safeRe2 = require(dependencyMap[1]).safeRe;
        const t2 = require(dependencyMap[1]).t;
        if (obj.includePrerelease) {
          let obj2 = safeRe2[t2.COERCERTLFULL];
        } else {
          obj2 = safeRe2[t2.COERCERTL];
        }
        let match = obj2.exec(StringResult);
        let tmp9 = null;
        let tmp10 = null;
        if (match) {
          while (true) {
            let tmp11 = tmp9;
            if (tmp9) {
              tmp11 = match.index + match[0].length === tmp9.index + tmp9[0].length;
            }
            if (!tmp11) {
              tmp9 = match;
            }
            obj2.lastIndex = match.index + match[1].length + match[2].length;
            let match1 = obj2.exec(StringResult);
            let tmp13 = tmp9;
            tmp10 = tmp9;
            if (!match1) {
              break;
            } else {
              match = match1;
              if (!tmp13) {
                continue;
              } else {
                tmp9 = tmp13;
                match = match1;
                tmp10 = tmp13;
                if (tmp13.index + tmp13[0].length === StringResult.length) {
                  break;
                }
              }
              continue;
            }
          }
        }
        obj2.lastIndex = -1;
        let match2 = tmp10;
      } else {
        const safeRe = require(dependencyMap[1]).safeRe;
        const t = require(dependencyMap[1]).t;
        if (obj.includePrerelease) {
          let tmp4 = safeRe[t.COERCEFULL];
        } else {
          tmp4 = safeRe[t.COERCE];
        }
        match2 = StringResult.match(tmp4);
      }
      if (null === match2) {
        return null;
      } else {
        let str4 = "";
        if (obj.includePrerelease) {
          str4 = "";
          if (match2[5]) {
            const _HermesInternal = HermesInternal;
            str4 = "-" + match2[5];
          }
        }
        let str6 = "";
        if (obj.includePrerelease) {
          str6 = "";
          if (match2[6]) {
            const _HermesInternal2 = HermesInternal;
            str6 = "+" + match2[6];
          }
        }
        const _HermesInternal3 = HermesInternal;
        return require(dependencyMap[2])("" + match2[2] + "." + match2[3] || "0" + "." + match2[4] || "0" + str4 + str6, obj);
      }
    }
  }
};
