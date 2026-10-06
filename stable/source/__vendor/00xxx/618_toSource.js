// Module ID: 618
// Function ID: 619
// Name: toSource
// Dependencies: []

// Module 618 (toSource)

export default function toSource(arg0) {
  if (null == arg0) {
    return "";
  } else {
    try {
      return toString.call(arg0);
    } catch (err) {
      try {
        return "" + arg0;
      } catch (err) {
      }
    }
  }
};
