// Module ID: 4105
// Function ID: 33977
// Name: Patterns
// Dependencies: []

// Module 4105 (Patterns)
const obj = {};
const _module = require(dependencyMap[0]);
obj.success = _module.pattern("oO.O");
const _module1 = require(dependencyMap[0]);
obj.error = _module1.pattern("OO.OO");
const _module2 = require(dependencyMap[0]);
obj.warning = _module2.pattern("O.O");
const _module3 = require(dependencyMap[0]);
obj.heartbeat = _module3.pattern("oO--oO");
const _module4 = require(dependencyMap[0]);
obj.tripleClick = _module4.pattern("o.o.o");
const _module5 = require(dependencyMap[0]);
obj.notification = _module5.pattern("o-O=o");

export const Patterns = obj;
