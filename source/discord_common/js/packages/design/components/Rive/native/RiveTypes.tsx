// Module ID: 3906
// Function ID: 32324
// Name: FIT_MAP
// Dependencies: []

// Module 3906 (FIT_MAP)
let obj = { fill: require(dependencyMap[0]).Fit.Fill, contain: require(dependencyMap[0]).Fit.Contain, cover: require(dependencyMap[0]).Fit.Cover, fit-width: require(dependencyMap[0]).Fit.FitWidth, fit-height: require(dependencyMap[0]).Fit.FitHeight, none: require(dependencyMap[0]).Fit.None, scale-down: require(dependencyMap[0]).Fit.ScaleDown, layout: require(dependencyMap[0]).Fit.Layout };
obj = { top-left: require(dependencyMap[0]).Alignment.TopLeft, top-center: require(dependencyMap[0]).Alignment.TopCenter, top-right: require(dependencyMap[0]).Alignment.TopRight, center-left: require(dependencyMap[0]).Alignment.CenterLeft, center: require(dependencyMap[0]).Alignment.Center, center-right: require(dependencyMap[0]).Alignment.CenterRight, bottom-left: require(dependencyMap[0]).Alignment.BottomLeft, bottom-center: require(dependencyMap[0]).Alignment.BottomCenter, bottom-right: require(dependencyMap[0]).Alignment.BottomRight };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/RiveTypes.tsx");

export const FIT_MAP = obj;
export const ALIGNMENT_MAP = obj;
