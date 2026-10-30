// Module ID: 605
// Function ID: 606
// Name: toSource
// Dependencies: []

// Module 605 (toSource)

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
