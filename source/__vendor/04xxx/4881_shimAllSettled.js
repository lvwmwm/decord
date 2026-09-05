// Module ID: 4881
// Function ID: 4882
// Name: shimAllSettled
// Dependencies: [4804, 4805, 4833]

// Module 4881 (shimAllSettled)

export default function shimAllSettled() {
  _require(4804)();
  const tmp2 = _require(4805)();
  _require = tmp2;
  _require(4833)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
