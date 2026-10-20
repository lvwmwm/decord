// Module ID: 1189
// Function ID: 1190
// Name: TYPE
// Dependencies: []
// Exports: createLiteralElement, createNumberElement, isArgumentElement, isDateElement, isDateTimeSkeleton, isLiteralElement, isNumberElement, isNumberSkeleton, isPluralElement, isPoundElement, isSelectElement, isTagElement, isTimeElement

// Module 1189 (TYPE)
const TYPE = { literal: 0, argument: 1, number: 2, date: 3, time: 4, select: 5, plural: 6, pound: 7, tag: 8 };
TYPE[0] = "literal";
TYPE[1] = "argument";
TYPE[2] = "number";
TYPE[3] = "date";
TYPE[4] = "time";
TYPE[5] = "select";
TYPE[6] = "plural";
TYPE[7] = "pound";
TYPE[8] = "tag";
const obj2 = { number: 0, dateTime: 1 };
obj2[0] = "number";
obj2[1] = "dateTime";

export const isLiteralElement = function isLiteralElement(type) {
  return type.type === obj.literal;
};
export const isArgumentElement = function isArgumentElement(type) {
  return type.type === obj.argument;
};
export const isNumberElement = function isNumberElement(type) {
  return type.type === obj.number;
};
export const isDateElement = function isDateElement(type) {
  return type.type === obj.date;
};
export const isTimeElement = function isTimeElement(type) {
  return type.type === obj.time;
};
export const isSelectElement = function isSelectElement(arr) {
  return arr.type === obj.select;
};
export const isPluralElement = function isPluralElement(arr) {
  return arr.type === obj.plural;
};
export const isPoundElement = function isPoundElement(type) {
  return type.type === obj.pound;
};
export const isTagElement = function isTagElement(arr) {
  return arr.type === obj.tag;
};
export const isNumberSkeleton = function isNumberSkeleton(style) {
  let tmp = !style;
  if (style) {
    tmp = typeof style !== "object";
  }
  if (!tmp) {
    tmp = style.type !== obj2.number;
  }
  return !tmp;
};
export const isDateTimeSkeleton = function isDateTimeSkeleton(style) {
  let tmp = !style;
  if (style) {
    tmp = typeof style !== "object";
  }
  if (!tmp) {
    tmp = style.type !== obj2.dateTime;
  }
  return !tmp;
};
export const createLiteralElement = function createLiteralElement(value) {
  let obj;
  obj = { type: obj.literal, value };
  return obj;
};
export const createNumberElement = function createNumberElement(value, style) {
  let obj;
  obj = { type: obj.number, value, style };
  return obj;
};
export { TYPE };
export const SKELETON_TYPE = obj2;
