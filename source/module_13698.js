// Module ID: 13698
// Function ID: 13699
// Dependencies: [13667, 13699, 13642, 13695]

// Module 13698

export default (arg0, arg1, arg2, arg3) => {
  let obj = arg3;
  if (!arg3) {
    obj = {};
  }
  let flag = obj.enumerable;
  let name = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (require(13667) /* all */(arg2)) {
    tmp3(13699)(arg2, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = arg2;
    } else {
      tmp3(13642)(arg1, arg2);
    }
  } else {
    try {
      if (obj.unsafe) {
        if (arg0[arg1]) {
          flag = true;
        }
      } else {
        delete tmp[tmp2];
      }
      if (flag) {
        arg0[arg1] = arg2;
      } else {
        obj = { value: null, enumerable: false, configurable: null, writable: null };
        obj[0] = arg2;
        obj[2] = !obj.nonConfigurable;
        obj[3] = !obj.nonWritable;
        tmp3(13695).f(arg0, arg1, obj);
        const tmp3Result = tmp3(13695);
      }
    } catch (err) {
    }
  }
  return arg0;
};
