// Module ID: 9415
// Function ID: 9416
// Name: ElementType
// Dependencies: []
// Exports: isTag

// Module 9415 (ElementType)
let ElementType = exports.ElementType;
if (!ElementType) {
  const obj = {};
  exports.ElementType = obj;
  ElementType = obj;
}
ElementType.Root = "root";
ElementType.Text = "text";
ElementType.Directive = "directive";
ElementType.Comment = "comment";
ElementType.Script = "script";
ElementType.Style = "style";
ElementType.Tag = "tag";
ElementType.CDATA = "cdata";
ElementType.Doctype = "doctype";
({ Root: exports.Root, Text: exports.Text, Directive: exports.Directive, Comment: exports.Comment, Script: exports.Script, Style: exports.Style, Tag: exports.Tag, CDATA: exports.CDATA, Doctype: exports.Doctype } = ElementType);

export function isTag(type) {
  return type.type === ElementType.Tag || type.type === ElementType.Script || type.type === ElementType.Style;
}
