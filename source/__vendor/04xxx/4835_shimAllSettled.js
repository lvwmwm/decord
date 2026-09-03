// Module ID: 4835
// Function ID: 4836
// Name: shimAllSettled
// Dependencies: [4758, 4759, 4787]

// Module 4835 (shimAllSettled)

export default function shimAllSettled() {
  _require(4758)();
  const tmp2 = _require(4759)();
  _require = tmp2;
  _require(4787)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
