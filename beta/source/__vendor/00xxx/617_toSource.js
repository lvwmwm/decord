// Module ID: 617
// Function ID: 618
// Name: toSource
// Dependencies: []

// Module 617 (toSource)

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
