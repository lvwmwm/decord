// Module ID: 12940
// Function ID: 12941
// Name: Range
// Dependencies: [12929]

// Module 12940 (Range)

export default (arg0, arg1, arg2) => {
  const obj = new require(12929) /* Range */(arg0, arg2);
  return obj.intersects(new require(12929) /* Range */(arg1, arg2), arg2);
};
