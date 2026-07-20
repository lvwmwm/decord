// Module ID: 8157
// Function ID: 64466
// Dependencies: []

// Module 8157
const _module = require(dependencyMap[0]);
const obj = {};
const _module1 = require(dependencyMap[2]);
obj.ellipsizeMode = _module1.oneOf([]);
obj.numberOfLines = require(dependencyMap[2]).number;
const _module2 = require(dependencyMap[2]);
obj.textBreakStrategy = _module2.oneOf(["<string:3868125134>", "<string:1099864401>", "ltr"]);
obj.onLayout = require(dependencyMap[2]).func;
obj.onPress = require(dependencyMap[2]).func;
obj.onLongPress = require(dependencyMap[2]).func;
obj.pressRetentionOffset = require(dependencyMap[3]);
obj.selectable = require(dependencyMap[2]).bool;
obj.selectionColor = require(dependencyMap[4]);
obj.suppressHighlighting = require(dependencyMap[2]).bool;
obj.style = _module(require(dependencyMap[1]));
obj.testID = require(dependencyMap[2]).string;
obj.nativeID = require(dependencyMap[2]).string;
obj.allowFontScaling = require(dependencyMap[2]).bool;
obj.maxFontSizeMultiplier = require(dependencyMap[2]).number;
obj.accessible = require(dependencyMap[2]).bool;
obj.adjustsFontSizeToFit = require(dependencyMap[2]).bool;
obj.minimumFontScale = require(dependencyMap[2]).number;
obj.disabled = require(dependencyMap[2]).bool;
const _module3 = require(dependencyMap[2]);
obj.dataDetectorType = _module3.oneOf(["applications.builds.read", "applications.builds.upload", "applications.commands", "applications.commands.permissions.update", "applications.entitlements"]);

export default obj;
