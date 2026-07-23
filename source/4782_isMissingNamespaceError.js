// Module ID: 4782
// Function ID: 41571
// Name: isMissingNamespaceError
// Dependencies: []

// Module 4782 (isMissingNamespaceError)
let closure_0 = { xmp: "http://ns.adobe.com/xap/1.0/", tiff: "http://ns.adobe.com/tiff/1.0/", exif: "http://ns.adobe.com/exif/1.0/", dc: "http://purl.org/dc/elements/1.1/", xmpMM: "http://ns.adobe.com/xap/1.0/mm/", stEvt: "http://ns.adobe.com/xap/1.0/sType/ResourceEvent#", stRef: "http://ns.adobe.com/xap/1.0/sType/ResourceRef#", photoshop: "http://ns.adobe.com/photoshop/1.0/" };
arg5.isMissingNamespaceError = function isMissingNamespaceError(message) {
  const items = ["prefix is non-null and namespace is null", "prefix not bound to a namespace", "prefix inte bundet till en namnrymd", /Namespace prefix .+ is not defined/];
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
        let tmp12 = items;
        let tmp13 = items[tmp11] || `http://fallback.namespace/${tmp11}`;
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
