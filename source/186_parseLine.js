// Module ID: 186
// Function ID: 2644
// Name: parseLine
// Dependencies: []

// Module 186 (parseLine)
function parseLine(str) {
  const match = str.match(closure_0);
  if (match) {
    let obj = { type: "FRAME", functionName: match[1] };
    if ("native" === match[2]) {
      obj = { type: "NATIVE" };
      let obj3 = obj;
    } else if ("address at " === match[3]) {
      let num9 = 4;
      if ("InternalBytecode.js" === match[4]) {
        const obj1 = { type: "INTERNAL_BYTECODE", sourceUrl: match[num9] };
        const _Number6 = Number;
        obj1.line1Based = Number.parseInt(match[5], 10);
        const _Number7 = Number;
        num9 = Number.parseInt(match[6], 10);
        obj1.virtualOffset0Based = num9;
        let obj2 = obj1;
      } else {
        obj2 = { type: "BYTECODE", sourceUrl: match[num9] };
        const _Number4 = Number;
        obj2.line1Based = Number.parseInt(match[5], 10);
        const _Number5 = Number;
        obj2.virtualOffset0Based = Number.parseInt(match[6], 10);
      }
    } else {
      obj3 = { type: "SOURCE", sourceUrl: match[4] };
      const _Number2 = Number;
      obj3.line1Based = Number.parseInt(match[5], 10);
      const _Number3 = Number;
      obj3.column1Based = Number.parseInt(match[6], 10);
    }
    obj.location = obj3;
    return obj;
  } else {
    const match1 = str.match(closure_1);
    let tmp4;
    if (match1) {
      obj = { type: "SKIPPED" };
      const _Number = Number;
      obj.count = Number.parseInt(match1[1], 10);
      tmp4 = obj;
    }
    return tmp4;
  }
}
let closure_0 = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
let closure_1 = /^ {4}... skipping (\d+) frames$/;
let closure_2 = /^ {4}at .*$/;
arg5.default = function parseHermesStack(str) {
  const parts = str.split(/\n/);
  let items = [];
  let num = -1;
  let num2 = 0;
  let tmp = items;
  let num3 = -1;
  if (0 < parts.length) {
    do {
      let tmp2 = parts[num2];
      let items1 = items;
      let tmp3 = num;
      if (tmp2) {
        let tmp4 = closure_3;
        let tmp5 = closure_3(tmp2);
        if (tmp5) {
          let arr = items.push(tmp5);
          items1 = items;
          tmp3 = num;
          let tmp10 = tmp5;
        } else {
          let tmp6 = closure_2;
          items1 = items;
          tmp3 = num;
          let tmp7 = tmp5;
          if (!closure_2.test(tmp2)) {
            items1 = [];
            tmp3 = num2;
            let tmp8 = tmp5;
          }
        }
      }
      num2 = num2 + 1;
      items = items1;
      num = tmp3;
      tmp = items1;
      num3 = tmp3;
    } while (num2 < parts.length);
  }
  const obj = {};
  const substr = parts.slice(0, num3 + 1);
  obj.message = substr.join("\n");
  obj.entries = tmp;
  return obj;
};
