// Module ID: 4842
// Function ID: 4843
// Name: shimAllSettled
// Dependencies: [4765, 4766, 4794]

// Module 4842 (shimAllSettled)

export default function shimAllSettled() {
  _require(4765)();
  const tmp2 = _require(4766)();
  _require = tmp2;
  _require(4794)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
