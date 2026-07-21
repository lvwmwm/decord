// Module ID: 8153
// Function ID: 64466
// Dependencies: []

// Module 8153
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const obj = {};
const _module2 = require(dependencyMap[2]);
const _module3 = require(dependencyMap[3]);
obj.backfaceVisibility = _module3.oneOf(["<string:600068352>", "<string:21587524>"]);
obj.backgroundColor = require(dependencyMap[4]);
obj.borderColor = require(dependencyMap[4]);
obj.borderTopColor = require(dependencyMap[4]);
obj.borderRightColor = require(dependencyMap[4]);
obj.borderBottomColor = require(dependencyMap[4]);
obj.borderLeftColor = require(dependencyMap[4]);
obj.borderStartColor = require(dependencyMap[4]);
obj.borderEndColor = require(dependencyMap[4]);
obj.borderRadius = require(dependencyMap[3]).number;
obj.borderTopLeftRadius = require(dependencyMap[3]).number;
obj.borderTopRightRadius = require(dependencyMap[3]).number;
obj.borderTopStartRadius = require(dependencyMap[3]).number;
obj.borderTopEndRadius = require(dependencyMap[3]).number;
obj.borderBottomLeftRadius = require(dependencyMap[3]).number;
obj.borderBottomRightRadius = require(dependencyMap[3]).number;
obj.borderBottomStartRadius = require(dependencyMap[3]).number;
obj.borderBottomEndRadius = require(dependencyMap[3]).number;
const _module4 = require(dependencyMap[3]);
obj.borderStyle = _module4.oneOf([false, false, false]);
obj.borderWidth = require(dependencyMap[3]).number;
obj.borderTopWidth = require(dependencyMap[3]).number;
obj.borderRightWidth = require(dependencyMap[3]).number;
obj.borderBottomWidth = require(dependencyMap[3]).number;
obj.borderLeftWidth = require(dependencyMap[3]).number;
obj.opacity = require(dependencyMap[3]).number;
obj.elevation = require(dependencyMap[3]).number;

export default Object.assign({}, _module, _module1, _module2, obj);
