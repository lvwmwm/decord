// Module ID: 9417
// Function ID: 9418
// Dependencies: [9418, 9413, 9415]
// Exports: getInnerHTML, getOuterHTML

// Module 9417
import DomHandler from "DomHandler" /* 9413 */;
import render2 from "render" /* 9418 */;

const require = globalThis.__r;
let _require;

function getOuterHTML(arg0, arg1) {
  return render.default(arg0, arg1);
}
const fn = this && this.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
function getText(name) {
  let str;
  if (Array.isArray(name)) {
    const mapped = name.map(getText);
    str = mapped.join("");
  } else if (DomHandler.isTag(name)) {
    let str2 = "\n";
    if ("br" !== name.name) {
      str2 = getText(name.children);
    }
    str = str2;
  } else if (DomHandler.isCDATA(name)) {
    str = getText(name.children);
  } else {
    str = "";
    if (DomHandler.isText(name)) {
      str = name.data;
    }
  }
  return str;
}
function textContent(elementsByTagName) {
  if (Array.isArray(elementsByTagName)) {
    const mapped = elementsByTagName.map(textContent);
    return mapped.join("");
  } else {
    if (DomHandler.hasChildren(elementsByTagName)) {
      if (!DomHandler.isComment(elementsByTagName)) {
        return textContent(elementsByTagName.children);
      }
    }
    let str = "";
    if (DomHandler.isText(elementsByTagName)) {
      str = elementsByTagName.data;
    }
    return str;
  }
}
function innerText(children) {
  if (Array.isArray(children)) {
    const mapped = children.map(innerText);
    return mapped.join("");
  } else {
    if (DomHandler.hasChildren(children)) {
      return innerText(children.children);
    }
    let str = "";
    if (DomHandler.isText(children)) {
      str = children.data;
    }
    return str;
  }
}
const render = fn(render2);

export { getOuterHTML };
export function getInnerHTML(children, arg1) {
  let closure_0;
  _require = arg1;
  let str = "";
  if (require("DomHandler").hasChildren(children)) {
    children = children.children;
    const mapped = children.map((item) => render.default(item, closure_0));
    str = mapped.join("");
  }
  return str;
}
export { getText };
export { textContent };
export { innerText };
