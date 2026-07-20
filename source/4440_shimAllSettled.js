// Module ID: 4440
// Function ID: 38857
// Name: shimAllSettled
// Dependencies: [4294967295, 0, 0]

// Module 4440 (shimAllSettled)

export default function shimAllSettled() {
  require(dependencyMap[0])();
  const tmp2 = require(dependencyMap[1])();
  const require = tmp2;
  require(dependencyMap[2])(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== tmp2;
    }
  });
  return tmp2;
};
