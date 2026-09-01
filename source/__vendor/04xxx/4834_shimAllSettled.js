// Module ID: 4834
// Function ID: 4835
// Name: shimAllSettled
// Dependencies: [4757, 4758, 4786]

// Module 4834 (shimAllSettled)

export default function shimAllSettled() {
  _require(4757)();
  const tmp2 = _require(4758)();
  _require = tmp2;
  _require(4786)(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
