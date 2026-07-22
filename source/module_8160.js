// Module ID: 8160
// Function ID: 64500
// Dependencies: []

// Module 8160
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const obj = {};
const _module2 = require(dependencyMap[2]);
const _module3 = require(dependencyMap[3]);
obj.resizeMode = _module3.oneOf([null, null, null, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000822959630401021, 0.0000000000000000000000000000000000000000000000000008844198031026355]);
const _module4 = require(dependencyMap[3]);
obj.backfaceVisibility = _module4.oneOf([true, true]);
obj.backgroundColor = require(dependencyMap[4]);
obj.borderColor = require(dependencyMap[4]);
obj.borderWidth = require(dependencyMap[3]).number;
obj.borderRadius = require(dependencyMap[3]).number;
const _module5 = require(dependencyMap[3]);
obj.overflow = _module5.oneOf([true, true]);
obj.tintColor = require(dependencyMap[4]);
obj.opacity = require(dependencyMap[3]).number;
obj.overlayColor = require(dependencyMap[3]).string;
obj.borderTopLeftRadius = require(dependencyMap[3]).number;
obj.borderTopRightRadius = require(dependencyMap[3]).number;
obj.borderBottomLeftRadius = require(dependencyMap[3]).number;
obj.borderBottomRightRadius = require(dependencyMap[3]).number;

export default Object.assign({}, _module, _module1, _module2, obj);
