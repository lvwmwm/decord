// Module ID: 4778
// Function ID: 41496
// Name: isMissingNamespaceError
// Dependencies: []

// Module 4778 (isMissingNamespaceError)
let closure_0 = { GIFT_CODE_REDEEM: 255, presenceCount: 255, overflow: null, MESSAGES_HEADER_PADDING_BOTTOM: "e9fce92f06bbfad622591815c7f5f9ac", canConnect: "img_account_sync_twitch_white", GemLevel3SpotIllustration: "png", TABLE_ROW_LABEL_COLOR: true, maxWidth: "/assets/images/platforms" };
arg5.isMissingNamespaceError = function isMissingNamespaceError(message) {
  const items = ["<string:3796045274>", "<string:2550137984>", "<string:2684355648>", /Namespace prefix .+ is not defined/];
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
