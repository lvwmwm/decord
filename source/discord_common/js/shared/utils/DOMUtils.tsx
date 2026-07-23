// Module ID: 1835
// Function ID: 20048
// Name: set
// Dependencies: [2]
// Exports: clickedOnVisibleImage, cssValueToNumber, eventOwnerDocument, getParentElementByAttribute, getParentElementByClassName, isElement, isInputLikeElement, removeNode

// Module 1835 (set)
import set from "set";

const re0 = /input/i;
const re1 = /textarea/i;
let set = new Set(["text", "password", "number", "date", "datetime-local", "time", "week", "month", "email", "search", "tel", "url"]);
let result = set.fileFinishedImporting("../discord_common/js/shared/utils/DOMUtils.tsx");

export const isElement = function isElement(ownerDocument, name) {
  if (null == ownerDocument) {
    return false;
  } else {
    let defaultView;
    if (null != ownerDocument) {
      ownerDocument = ownerDocument.ownerDocument;
      if (null != ownerDocument) {
        defaultView = ownerDocument.defaultView;
      }
    }
    if (null == defaultView) {
      return false;
    } else {
      name = undefined;
      if (null != name) {
        name = name.name;
      }
      let str = "Element";
      if (null != name) {
        str = name;
      }
      return null != defaultView[str] && ownerDocument instanceof defaultView[str];
    }
  }
};
export const cssValueToNumber = function cssValueToNumber(replaced) {
  const parsed = parseInt(replaced, 10);
  let num = 0;
  if (!isNaN(parsed)) {
    num = parsed;
  }
  return num;
};
export const isInputLikeElement = function isInputLikeElement(getAttribute) {
  if (null == getAttribute) {
    return false;
  } else if ("true" === getAttribute.getAttribute("contenteditable")) {
    return true;
  } else if (regex2.test(getAttribute.tagName)) {
    return true;
  } else {
    if (regex.test(getAttribute.tagName)) {
      const attr = getAttribute.getAttribute("type");
      let str2 = "text";
      if (null != attr) {
        str2 = attr;
      }
      if (set.has(str2)) {
        return true;
      }
    }
    return false;
  }
};
export const removeNode = function removeNode(parentNode) {
  if (null != parentNode.parentNode) {
    parentNode = parentNode.parentNode;
    parentNode.removeChild(parentNode);
  }
};
export const eventOwnerDocument = function eventOwnerDocument(target) {
  target = target.target;
  if (null == target) {
    return null;
  } else if ("ownerDocument" in target) {
    let ownerDocument = target.ownerDocument;
  } else {
    ownerDocument = null;
    if ("document" in target) {
      ownerDocument = target.document;
    }
  }
};
export const clickedOnVisibleImage = function clickedOnVisibleImage(arg0, arg1, arg2, arg3) {
  let height;
  let height2;
  let left;
  let top;
  let width;
  let width2;
  ({ width, height } = arg2);
  ({ width: width2, height: height2 } = arg3);
  ({ top, left } = arg3);
  const bound = Math.min(width2 / width, height2 / height, 1);
  const result = width * bound;
  const result1 = height * bound;
  const sum = (height2 - result1) / 2 + left;
  const sum1 = (width2 - result) / 2 + top;
  return arg1 >= sum && arg1 <= sum + result1 && arg0 >= sum1 && arg0 <= sum1 + result;
};
export const getParentElementByClassName = function getParentElementByClassName(parentElement) {
  parentElement = parentElement.parentElement;
  if (null != parentElement) {
    const classList = parentElement.classList;
    while (!classList.contains(arg1)) {
      parentElement = parentElement.parentElement;
    }
    return parentElement;
  }
  return null;
};
export const getParentElementByAttribute = function getParentElementByAttribute(parentElement) {
  parentElement = parentElement.parentElement;
  if (null != parentElement) {
    while (null == parentElement.getAttribute(arg1)) {
      parentElement = parentElement.parentElement;
    }
    return parentElement;
  }
  return null;
};
