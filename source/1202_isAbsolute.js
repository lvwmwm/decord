// Module ID: 1202
// Function ID: 13855
// Name: isAbsolute
// Dependencies: []

// Module 1202 (isAbsolute)
function isAbsolute(str) {
  return "/" === str.charAt(0);
}
function spliceOne(combined, length) {
  let sum1 = length;
  let sum = length + 1;
  if (sum < combined.length) {
    do {
      combined[sum1] = combined[sum];
      sum1 = sum1 + 1;
      sum = sum + 1;
    } while (sum < length);
  }
  combined.pop();
}

export default function resolvePathname(str) {
  let tmp20;
  str = arg1;
  if (undefined === arg1) {
    str = "";
  }
  let parts = str;
  if (str) {
    parts = str.split("/");
  }
  if (!parts) {
    parts = [];
  }
  let parts1 = str;
  if (str) {
    parts1 = str.split("/");
  }
  if (!parts1) {
    parts1 = [];
  }
  let tmp = str;
  if (str) {
    tmp = isAbsolute(str);
  }
  let tmp3 = str;
  if (str) {
    tmp3 = isAbsolute(str);
  }
  if (!tmp) {
    tmp = tmp3;
  }
  if (!str) {
    let combined = parts1;
    if (parts.length) {
      parts1.pop();
      combined = parts1.concat(parts);
    }
  } else {
    combined = parts;
  }
  if (combined.length) {
    let flag = false;
    if (combined.length) {
      let tmp8 = "." === tmp7;
      if (!tmp8) {
        tmp8 = ".." === tmp7;
      }
      if (!tmp8) {
        tmp8 = "" === tmp7;
      }
      flag = tmp8;
    }
    let length = combined.length;
    let num3 = 0;
    let num4 = 0;
    while (0 <= length) {
      let tmp9 = combined[length];
      if ("." === tmp9) {
        let tmp15 = spliceOne;
        let tmp16 = spliceOne(combined, length);
        let sum = num3;
      } else if (".." === tmp9) {
        let tmp13 = spliceOne;
        let tmp14 = spliceOne(combined, length);
        sum = num3 + 1;
      } else {
        sum = num3;
        if (num3) {
          let tmp11 = spliceOne;
          let tmp12 = spliceOne(combined, length);
          sum = num3 - 1;
        }
      }
      length = length - 1;
      num3 = sum;
      num4 = sum;
    }
    if (!tmp) {
      let diff = tmp17 - 1;
      if (+num4) {
        do {
          let arr = combined.unshift("..");
          tmp20 = +diff;
          diff = tmp20 - 1;
        } while (tmp20);
      }
    }
    let tmp21 = !tmp;
    if (!tmp21) {
      tmp21 = "" === combined[0];
    }
    if (!tmp21) {
      let first = combined[0];
      if (first) {
        first = isAbsolute(combined[0]);
      }
      tmp21 = first;
    }
    if (!tmp21) {
      combined.unshift("");
    }
    const str13 = combined.join("/");
    if (flag) {
      flag = "/" !== str13.substr(-1);
    }
    let text = str13;
    if (flag) {
      text = `${str13}/`;
    }
    return text;
  } else {
    return "/";
  }
};
