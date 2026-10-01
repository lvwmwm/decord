// Module ID: 606
// Function ID: 607
// Name: toSource
// Dependencies: []

// Module 606 (toSource)

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
