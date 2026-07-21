// Module ID: 13188
// Function ID: 99760
// Name: isASCIIDigit
// Dependencies: []

// Module 13188 (isASCIIDigit)
function isASCIIDigit(first) {
  let tmp = first >= 48;
  if (tmp) {
    tmp = first <= 57;
  }
  return tmp;
}
function isASCIIAlpha(first) {
  let tmp = first >= 65;
  if (tmp) {
    tmp = first <= 90;
  }
  if (!tmp) {
    let tmp2 = first >= 97;
    if (tmp2) {
      tmp2 = first <= 122;
    }
    tmp = tmp2;
  }
  return tmp;
}

export default {
  isASCIIDigit,
  isASCIIAlpha,
  isASCIIAlphanumeric(first) {
    let tmp = isASCIIAlpha(first);
    if (!tmp) {
      tmp = isASCIIDigit(first);
    }
    return tmp;
  },
  isASCIIHex(first) {
    let tmp = isASCIIDigit(first);
    if (!tmp) {
      let tmp2 = first >= 65;
      if (tmp2) {
        tmp2 = first <= 70;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      let tmp3 = first >= 97;
      if (tmp3) {
        tmp3 = first <= 102;
      }
      tmp = tmp3;
    }
    return tmp;
  }
};
