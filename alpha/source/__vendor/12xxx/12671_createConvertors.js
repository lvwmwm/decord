// Module ID: 12671
// Function ID: 12672
// Name: createConvertors
// Dependencies: [12659]

// Module 12671 (createConvertors)

export default function createConvertors(arg0) {
  let closure_0 = arg0;
  let obj = {
    fromPlainObject(arg0) {
      let obj = {
        enter(children) {
          children = children.children && children.children instanceof closure_1_0(closure_1_1[0]) === false;
          if (children) {
            const self = this;
            const self2 = this;
            const obj = new closure_1_0(closure_1_1[0])();
            children.children = obj.fromArray(children.children);
          }
        }
      };
      closure_0(arg0, obj);
      return arg0;
    },
    toPlainObject(arg0) {
      const obj = {
        leave(children) {
          children = children.children && children.children instanceof closure_1_0(closure_1_1[0]);
          if (children) {
            const children2 = children.children;
            children.children = children2.toArray();
          }
        }
      };
      closure_0(arg0, obj);
      return arg0;
    }
  };
  return obj;
};
