// Module ID: 9009
// Function ID: 70895
// Name: AuthorizeFormSeparator
// Dependencies: []
// Exports: AuthorizeFormSeparator

// Module 9009 (AuthorizeFormSeparator)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = {};
obj = { height: 1, backgroundColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE };
obj.separator = obj;
let closure_2 = _module.createStyles(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export const AuthorizeFormSeparator = function AuthorizeFormSeparator() {
  return <View style={callback().separator} />;
};
