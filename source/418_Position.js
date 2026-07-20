// Module ID: 418
// Function ID: 5885
// Name: Position
// Dependencies: []

// Module 418 (Position)
class Position {
  constructor(arg0, arg1) {
    this.left = global;
    this.top = arg1;
    return;
  }
  destructor() {
    this.left = null;
    this.top = null;
    return;
  }
}
importDefault(dependencyMap[0]).addPoolingTo(Position, importDefault(dependencyMap[0]).twoArgumentPooler);

export default Position;
