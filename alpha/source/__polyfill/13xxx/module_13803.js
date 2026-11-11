// Module ID: 13803
// Function ID: 13804
// Dependencies: []

// Module 13803
let items;
let obj2;
const obj = {
  name: "Selector",
  structure: obj2,
  parse() {
    const self = this;
    const sequence = this.readSequence(this.scope.Selector);
    if (null === this.getFirstListNode(sequence)) {
      self.error("Selector is expected");
    }
    const element = { type: "Selector", loc: self.getLocationFromList(sequence), children: sequence };
    return element;
  },
  generate(arg0) {
    this.children(arg0);
  }
};
obj2 = { children: items };
items = [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator", "WhiteSpace"]];

export default obj;
