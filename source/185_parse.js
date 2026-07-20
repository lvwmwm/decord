// Module ID: 185
// Function ID: 2641
// Name: parse
// Dependencies: []

// Module 185 (parse)
let closure_0 = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
let closure_1 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
let closure_2 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
let closure_3 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
let closure_4 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
let closure_5 = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
let closure_6 = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
arg5.parse = function parse(str) {
  const parts = str.split("\n");
  return parts.reduce((arr) => {
    const match = regex.exec(arg1);
    let tmp2 = null;
    if (match) {
      let tmp3 = match[2];
      if (tmp3) {
        arr = match[2];
        tmp3 = 0 === arr.indexOf("native");
      }
      let tmp4 = match[2];
      if (tmp4) {
        tmp4 = 0 === match[2].indexOf("eval");
        const arr2 = match[2];
      }
      const match1 = regex2.exec(match[2]);
      if (tmp4) {
        tmp4 = null != match1;
      }
      if (tmp4) {
        match[2] = match1[1];
        match[3] = match1[2];
        match[4] = match1[3];
      }
      let obj = {};
      let tmp7 = null;
      if (!tmp3) {
        tmp7 = match[2];
      }
      obj.file = tmp7;
      obj.methodName = match[1] || "<unknown>";
      if (tmp3) {
        const items = [match[2]];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.arguments = items1;
      let tmp8 = null;
      if (match[3]) {
        tmp8 = +match[3];
      }
      obj.lineNumber = tmp8;
      let tmp9 = null;
      if (match[4]) {
        tmp9 = +match[4];
      }
      obj.column = tmp9;
      tmp2 = obj;
    }
    if (!tmp2) {
      const match2 = regex3.exec(arg1);
      let tmp12 = null;
      if (match2) {
        obj = { file: match2[2], methodName: match2[1] || "<unknown>", arguments: [], lineNumber: +match2[3] };
        let tmp13 = null;
        if (match2[4]) {
          tmp13 = +match2[4];
        }
        obj.column = tmp13;
        tmp12 = obj;
      }
      tmp2 = tmp12;
    }
    if (!tmp2) {
      const match3 = regex4.exec(arg1);
      let tmp16 = null;
      if (match3) {
        let tmp17 = match3[3];
        if (tmp17) {
          tmp17 = match3[3].indexOf(" > eval") > -1;
          const arr5 = match3[3];
        }
        const match4 = regex5.exec(match3[3]);
        if (tmp17) {
          tmp17 = null != match4;
        }
        if (tmp17) {
          match3[3] = match4[1];
          match3[4] = match4[2];
          match3[5] = null;
        }
        obj = { file: match3[3], methodName: match3[1] || "<unknown>" };
        if (match3[2]) {
          let parts = match3[2].split(",");
          const str4 = match3[2];
        } else {
          parts = [];
        }
        obj.arguments = parts;
        let tmp20 = null;
        if (match3[4]) {
          tmp20 = +match3[4];
        }
        obj.lineNumber = tmp20;
        let tmp21 = null;
        if (match3[5]) {
          tmp21 = +match3[5];
        }
        obj.column = tmp21;
        tmp16 = obj;
      }
      tmp2 = tmp16;
    }
    if (!tmp2) {
      const match5 = regex7.exec(arg1);
      let tmp24 = null;
      if (match5) {
        const obj1 = { file: match5[2], methodName: match5[1] || "<unknown>", arguments: [], lineNumber: +match5[3] };
        let tmp25 = null;
        if (match5[4]) {
          tmp25 = +match5[4];
        }
        obj1.column = tmp25;
        tmp24 = obj1;
      }
      tmp2 = tmp24;
    }
    if (!tmp2) {
      const match6 = regex6.exec(arg1);
      let tmp28 = null;
      if (match6) {
        const obj2 = { file: match6[3], methodName: match6[1] || "<unknown>", arguments: [], lineNumber: +match6[4] };
        let tmp29 = null;
        if (match6[5]) {
          tmp29 = +match6[5];
        }
        obj2.column = tmp29;
        tmp28 = obj2;
      }
      tmp2 = tmp28;
    }
    if (tmp2) {
      arr = arr.push(tmp2);
    }
    return arr;
  }, []);
};
