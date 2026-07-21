// Module ID: 4779
// Function ID: 41544
// Name: isMissingNamespaceError
// Dependencies: []

// Module 4779 (isMissingNamespaceError)
let closure_0 = { ix: "png", exports: true, unsafe_rawColors: "/assets/images/platforms", sr: 24, guildId: 24, useId: null, SCROLLING_MOMENTUM: "a5aa4e98136aaaae712a29ded608e4e5", WAITING_FOR_SERVICE: "img_account_sync_twitch_light_and_dark" };
arg5.isMissingNamespaceError = function isMissingNamespaceError(message) {
  const items = [1129498107, 1384408798, -1546442500, /Namespace prefix .+ is not defined/];
  let num = 0;
  if (0 < items.length) {
    const _RegExp = RegExp;
    const regExp = new RegExp(items[num]);
    while (!regExp.test(message.message)) {
      num = num + 1;
    }
    return true;
  }
  return false;
};
arg5.addMissingNamespaces = function addMissingNamespaces(str) {
  const match = str.match(/<([A-Za-z_][A-Za-z0-9._-]*)([^>]*)>/);
  if (match) {
    const items = [];
    const obj = /xmlns:([\w-]+)=["'][^"']+["']/g;
    let match1 = obj.exec(str);
    if (null !== match1) {
      do {
        if (-1 === items.indexOf(match1[1])) {
          let arr = items.push(match1[1]);
        }
        match1 = obj.exec(str);
      } while (null !== match1);
    }
    let closure_0 = items;
    const items1 = [];
    const obj2 = /\b([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*\b/g;
    let match2 = obj2.exec(str);
    if (null !== match2) {
      do {
        let tmp7 = match2[1];
        let tmp8 = "xmlns" !== tmp7 && "xml" !== tmp7;
        if (tmp8) {
          if (-1 === items1.indexOf(tmp7)) {
            arr = items1.push(tmp7);
          }
        }
        match2 = obj2.exec(str);
      } while (null !== match2);
    }
    const found = items1.filter((arg0) => -1 === items.indexOf(arg0));
    let replaced = str;
    if (0 !== found.length) {
      const items2 = [];
      for (let num4 = 0; num4 < found.length; num4 = num4 + 1) {
        let tmp11 = found[num4];
        let tmp12 = closure_0;
        let tmp13 = closure_0[tmp11] || `http://fallback.namespace/${tmp11}`;
        let arr1 = items2.push(` xmlns:${tmp11}="${tmp13}"`);
      }
      const _RegExp = RegExp;
      const joined = items2.join("");
      const regExp = new RegExp("<" + tmp2 + "([^>]*)>");
      replaced = str.replace(regExp, `<${tmp2}$1${tmp15}>`);
    }
    return replaced;
  } else {
    return str;
  }
};
