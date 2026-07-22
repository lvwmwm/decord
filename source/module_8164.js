// Module ID: 8164
// Function ID: 64504
// Dependencies: []

// Module 8164
let obj = {};
const _module = require(dependencyMap[0]);
obj.color = require(dependencyMap[1]);
obj.fontFamily = require(dependencyMap[2]).string;
obj.fontSize = require(dependencyMap[2]).number;
const _module1 = require(dependencyMap[2]);
obj.fontStyle = _module1.oneOf(["applications.builds.read", "applications.builds.upload"]);
const _module2 = require(dependencyMap[2]);
obj.fontWeight = _module2.oneOf(["Array", "fr-MC", "Array", "MCP_FUNCTION_ORIGIN_VALUE", "Array", "_encountered_socket_failure", "Array", "trackAverageRenderTimeForOffsetProjection", "r", "MODE_ALPHA_NUM", "startTrackingINP"]);
const _module3 = require(dependencyMap[2]);
const _module4 = require(dependencyMap[2]);
obj.fontVariant = _module3.arrayOf(_module4.oneOf([]));
const _module5 = require(dependencyMap[2]);
obj = { width: require(dependencyMap[2]).number, height: require(dependencyMap[2]).number };
obj.textShadowOffset = _module5.shape(obj);
obj.textShadowRadius = require(dependencyMap[2]).number;
obj.textShadowColor = require(dependencyMap[1]);
obj.letterSpacing = require(dependencyMap[2]).number;
obj.lineHeight = require(dependencyMap[2]).number;
const _module6 = require(dependencyMap[2]);
obj.textAlign = _module6.oneOf([]);
const _module7 = require(dependencyMap[2]);
obj.textAlignVertical = _module7.oneOf([]);
obj.includeFontPadding = require(dependencyMap[2]).bool;
const _module8 = require(dependencyMap[2]);
obj.textDecorationLine = _module8.oneOf([]);
const _module9 = require(dependencyMap[2]);
obj.textDecorationStyle = _module9.oneOf(["rpc.activities.write", "rpc.voice.read", "rpc.voice.write", "applications.commands.update"]);
obj.textDecorationColor = require(dependencyMap[1]);
const _module10 = require(dependencyMap[2]);
obj.textTransform = _module10.oneOf([]);
const _module11 = require(dependencyMap[2]);
obj.writingDirection = _module11.oneOf([]);

export default Object.assign({}, _module, obj);
