// Module ID: 12950
// Function ID: 12951
// Name: SelectorType
// Dependencies: []

// Module 12950 (SelectorType)
let SelectorType = exports.SelectorType;
if (!SelectorType) {
  const obj = {};
  exports.SelectorType = obj;
  SelectorType = obj;
}
SelectorType.Attribute = "attribute";
SelectorType.Pseudo = "pseudo";
SelectorType.PseudoElement = "pseudo-element";
SelectorType.Tag = "tag";
SelectorType.Universal = "universal";
SelectorType.Adjacent = "adjacent";
SelectorType.Child = "child";
SelectorType.Descendant = "descendant";
SelectorType.Parent = "parent";
SelectorType.Sibling = "sibling";
SelectorType.ColumnCombinator = "column-combinator";
let AttributeAction = exports.AttributeAction;
if (!AttributeAction) {
  const obj2 = {};
  exports.AttributeAction = obj2;
  AttributeAction = obj2;
}
AttributeAction.Any = "any";
AttributeAction.Element = "element";
AttributeAction.End = "end";
AttributeAction.Equals = "equals";
AttributeAction.Exists = "exists";
AttributeAction.Hyphen = "hyphen";
AttributeAction.Not = "not";
AttributeAction.Start = "start";

export const IgnoreCaseMode = { Unknown: null, QuirksMode: "quirks", IgnoreCase: true, CaseSensitive: false };
