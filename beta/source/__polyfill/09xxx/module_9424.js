// Module ID: 9424
// Function ID: 9425
// Dependencies: [9413]
// Exports: getAttributeValue, getChildren, getName, getParent, getSiblings, hasAttrib, nextElementSibling, prevElementSibling

// Module 9424
import DomHandler from "DomHandler" /* 9413 */;

let hasOwnProperty;


export function getChildren(children) {
  return DomHandler.hasChildren(children) ? children.children : [];
}
export function getParent(parent) {
  return parent.parent || null;
}
export function getSiblings(parent) {
  let next;
  let prev;
  if (null != (parent.parent || null)) {
    return DomHandler.hasChildren(parent.parent || null) ? (parent.parent || null).children : [];
  } else {
    const items = [parent];
    ({ prev, next } = parent);
    if (null != prev) {
      do {
        let arr = items.unshift(prev);
        prev = prev.prev;
      } while (null != prev);
    }
    if (null != next) {
      do {
        let arr3 = items.push(next);
        next = next.next;
      } while (null != next);
    }
    return items;
  }
}
export function getAttributeValue(attribs, arg1) {
  attribs = attribs.attribs;
  let tmp;
  if (null !== attribs) {
    if (undefined !== attribs) {
      tmp = attribs[arg1];
    }
  }
  return tmp;
}
export function hasAttrib(attribs, arg1) {
  let callResult = null != attribs.attribs;
  if (callResult) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    callResult = hasOwnProperty.call(attribs.attribs, arg1);
  }
  if (callResult) {
    callResult = null != attribs.attribs[arg1];
  }
  return callResult;
}
export function getName(name) {
  return name.name;
}
export function nextElementSibling(next) {
  next = next.next;
  let tmp = next;
  if (null !== next) {
    let iter = next;
    tmp = next;
    if (!DomHandler.isTag(next)) {
      const next2 = iter.next;
      tmp = next2;
      while (null !== next2) {
        iter = next2;
        tmp = next2;
        if (DomHandler.isTag(next2)) {
          break;
        }
      }
    }
  }
  return tmp;
}
export function prevElementSibling(prev) {
  prev = prev.prev;
  let tmp = prev;
  if (null !== prev) {
    let tmp4 = prev;
    tmp = prev;
    if (!DomHandler.isTag(prev)) {
      const prev2 = tmp4.prev;
      tmp = prev2;
      while (null !== prev2) {
        tmp4 = prev2;
        tmp = prev2;
        if (DomHandler.isTag(prev2)) {
          break;
        }
      }
    }
  }
  return tmp;
}
